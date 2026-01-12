const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/index-25.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/mobxreact.esm.js", "assets/QuizTypes.js", "assets/colors.js", "assets/howler.js", "assets/Codes.js", "assets/GimkitLiveQuestion.js", "assets/Text.js", "assets/getCloudinaryUrl.js", "assets/LazyLatexRenderer.js", "assets/capitalize.js", "assets/inheritsLoose.js", "assets/Tooltip.js", "assets/polished.esm.js", "assets/index-1.js", "assets/motion.js", "assets/index-17.js", "assets/use-force-update.js", "assets/use-motion-value.js", "assets/index-26.js", "assets/___vite-browser-external_commonjs-proxy.js", "assets/index-9.js", "assets/index-3.js", "assets/index-6.js", "assets/confetti.js", "assets/CircularProgress.js", "assets/index-23.js", "assets/react.js", "assets/index-7.js", "assets/DownOutlined.js", "assets/FontAwesomeIcon.js", "assets/FillRemainingSpace.js", "assets/index-15.js", "assets/index-5.js", "assets/util-2.js", "assets/util-1.js", "assets/index-18.js", "assets/context.js", "assets/AccessibleAnchor.js", "assets/index-C-9G_OzQ.css", "assets/App-41.js", "assets/Button.js", "assets/FixSpinePlugin.js", "assets/GetAssetPath.js", "assets/MapModeType.js", "assets/MapStyle.js", "assets/playSound.js", "assets/index-21.js", "assets/TutorialConsts.js", "assets/ActionButton.js", "assets/Centered.js", "assets/CapitalizeFirstLetter.js", "assets/index-4.js", "assets/index-2.js", "assets/index-14.js", "assets/EditOutlined.js", "assets/styleChecker.js", "assets/CheckOutlined.js", "assets/CopyOutlined.js", "assets/SixteenByNineScaler.js", "assets/index-20.js", "assets/index-22.js", "assets/progress.js", "assets/ElementIds.js", "assets/SeasonTicketName.js", "assets/useQuery.js", "assets/Shortcut.js", "assets/Names.js", "assets/useWillUnmount.js", "assets/use-transform.js", "assets/useIntervalWhen.js", "assets/index-10.js", "assets/move.js", "assets/react-flip-move.es.js", "assets/sounds.js", "assets/App-5.js", "assets/AnimatedBackground-2.js", "assets/useDebouncedValue.js", "assets/index-24.js"]))) => i.map(i => d[i]);
import {
    j as jsxRuntimeExports,
    e as Colors,
    d as dt,
    r as reactExports,
    D as Divider,
    aq as capitalizeFirstLetter,
    ar as lodashExports,
    B as Button$2,
    as as inProductionOrStaging,
    a as request,
    at as commonjsGlobal,
    au as process$1,
    av as Buffer,
    aw as getDefaultExportFromCjs,
    ax as getAugmentedNamespace,
    u as useBoolean,
    V as getUrlVariable,
    a3 as isLoggedIn,
    F as FontWeights,
    c as Card,
    b as dayjs,
    t as throwMessageError,
    T as Title$1,
    ay as ft,
    n as useParams,
    p as __vitePreload
} from "./_index.js";
import {
    l as libExports
} from "./index-15.js";
import {
    E as ExperienceSource
} from "./QuizTypes.js";
import {
    F as FillRemainingSpace
} from "./FillRemainingSpace.js";
import {
    c as curriedLighten$1
} from "./polished.esm.js";
import {
    C as Colors$1
} from "./colors.js";
import {
    C as CircularProgress
} from "./CircularProgress.js";
import {
    m as motion
} from "./motion.js";
import {
    T as Tooltip
} from "./index-5.js";
import {
    r as requireSafeBuffer$1,
    a as require_stream_readable$1,
    b as require_stream_writable$1,
    c as require_stream_duplex$1,
    d as require_stream_transform$1,
    e as require_stream_passthrough$1,
    f as requireEndOfStream,
    g as requirePipeline,
    h as requireDist$1,
    i as requireStreamBrowserify,
    j as requireString_decoder,
    k as requireEvents,
    l as requireProcessNextickArgs,
    m as requireUtil$2,
    n as requireBrowser$c
} from "./util-2.js";
import {
    r as requireInherits_browser,
    a as requireCallBound,
    b as requireIsTypedArray,
    c as requireType,
    d as requireUtil$1
} from "./util-1.js";
import {
    A as AnimatePresence,
    u as useTimeoutWhen
} from "./index-17.js";
import {
    s as staticMethods
} from "./index-18.js";
import {
    A as AccessibleAnchor
} from "./AccessibleAnchor.js";
const JoinBackgroundContainer = s => jsxRuntimeExports.jsx(FillRemainingSpace, {
        children: jsxRuntimeExports.jsx(Container$5, {
            children: s.children
        })
    }),
    Container$5 = dt.div.attrs({
        className: "flex-center maxAll"
    })`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/assets/play/background.png') repeat 0 0;
  color: ${Colors.Black};
`,
    JoinInput = dt.input`
  height: 50px;
  outline: none;
  border-radius: 4px;
  width: 100%;
  border-style: solid;
  border-width: 2px;
  border-color: #838383;
  padding: 5px;
  box-sizing: border-box;
  font-size: 20px;
  text-align: center;
  font-weight: bold;
  transition: all 0.21s;
  &:focus {
    border-color: #303f9f;
  }
`,
    getButtonColor = (s, r) => s === "disabled" ? Colors$1.DisabledGray : r || (s === "primary" ? Colors$1.PrimaryBlue : s === "secondary" ? Colors$1.SecondaryPurple : Colors$1.Black),
    Button = dt.div`
  box-sizing: border-box;
  padding: ${s=>s.size==="medium"?"12px 16px 12px":s.size==="large"?"13px 21px 13px":"8px 13px 8px"};
  font-size: ${s=>s.size==="medium"?17:s.size==="large"?23:15}px;
  background: ${s=>s.color};
  color: ${Colors$1.White};
  transition: background 0.2s ease;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  user-select: none;
  cursor: ${s=>s.type==="disabled"?"not-allowed":"pointer"};
  &:hover {
    background: ${s=>curriedLighten$1(.1,s.color)};
  }
`,
    vr = class vr extends reactExports.Component {
        constructor() {
            super(...arguments), this.onClick = () => {
                this.props.type !== "disabled" && this.props.onClick && this.props.onClick()
            }
        }
        render() {
            return jsxRuntimeExports.jsx(Button, {
                id: this.props.id,
                onClick: this.onClick,
                type: this.props.type,
                color: getButtonColor(this.props.type, this.props.customColor),
                size: this.props.size,
                style: this.props.style,
                children: this.props.label
            })
        }
    };
vr.defaultProps = {
    size: "medium"
};
let Button$1 = vr;
const JoinPrimaryButton = s => jsxRuntimeExports.jsx(Button$1, {
        id: s.id,
        type: "secondary",
        style: Object.assign(s.style || {}, {
            width: "100%"
        }),
        size: "small",
        label: jsxRuntimeExports.jsx("div", {
            className: "maxAll flex-center",
            children: s.loading ? jsxRuntimeExports.jsx(CircularProgress, {
                size: 22
            }) : jsxRuntimeExports.jsx("span", {
                children: s.label
            })
        }),
        onClick: s.onClick
    }),
    OUT_ANIM = {
        scale: .9,
        opacity: 0
    },
    IN_ANIM = {
        scale: 1,
        opacity: 1
    },
    JoinModal = s => jsxRuntimeExports.jsx(Container$4, {
        className: s.containerClassName,
        style: {
            maxWidth: s.customMaxWidth || 400
        },
        children: jsxRuntimeExports.jsxs(Modal, {
            initial: s.alreadyAnimatedIn ? IN_ANIM : OUT_ANIM,
            animate: IN_ANIM,
            exit: OUT_ANIM,
            transition: {
                duration: .4
            },
            className: s.className,
            children: [s.noImage ? null : jsxRuntimeExports.jsx("img", {
                src: "/client/img/svgLogo.svg",
                style: {
                    width: "70%",
                    maxWidth: 220
                }
            }), s.children]
        })
    }),
    Container$4 = dt.div.attrs({
        className: "scroll"
    })`
  @media (min-width: 736px) and (min-height: 512px) {
    transform: scale(1.4);
  }
  width: 90%;
  max-width: 400px;
  max-height: 90%;
  border-radius: 5px;
`,
    Modal = dt(motion.div).attrs({
        className: "maxWidth"
    })`
  box-sizing: border-box;
  background: ${Colors.White};
  padding: 25px;
  box-shadow: 0px 4px 33px -6px rgba(0, 0, 0, 0.46);

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-family: 'Product Sans';
`,
    EnterCode = s => {
        const r = () => {
                !s.loading && s.submit && s.submit()
            },
            n = f => {
                s.onValueChange && s.onValueChange(f.target.value)
            },
            i = f => {
                f.key === "Enter" && r()
            };
        return jsxRuntimeExports.jsxs(JoinModal, {
            alreadyAnimatedIn: !0,
            children: [jsxRuntimeExports.jsx(JoinInput, {
                style: {
                    marginTop: 14,
                    marginBottom: 7
                },
                placeholder: "Game Code",
                inputMode: "numeric",
                pattern: "[0-9]*",
                type: "number",
                value: s.value,
                onChange: n,
                onKeyDown: i,
                spellCheck: "false"
            }), jsxRuntimeExports.jsx(JoinPrimaryButton, {
                label: "Join",
                onClick: r,
                loading: s.loading
            })]
        })
    },
    nouns = ["turtle", "elephant", "eagle", "iguana", "flamingo", "fox", "giraffe", "gecko", "dragon", "sloth", "lion", "penguin", "tiger", "kangaroo", "butterfly", "porcupine", "frog", "bear", "panda", "fish", "kitten", "puppy", "otter", "leopard", "owl", "zebra", "potato", "fruit", "planet", "cereal", "muffin", "cookie", "cupcake", "cloud", "shirt", "hat", "shoe", "stone", "plant", "tree", "flower", "bread", "bike", "boat"],
    adjectives = ["aqua", "beige", "blue", "bronze", "copper", "coral", "fuchsia", "gold", "gray", "green", "indigo", "lime", "magenta", "maroon", "orange", "pink", "purple", "red", "rose", "silver", "teal", "turquoise", "violet", "friendly", "quiet", "spooky", "hungry", "lucky", "adventurous", "curious", "fearless", "grumpy", "happy", "determined", "brave"],
    FriendlyNameWords = {
        nouns,
        adjectives
    },
    CHANCES = 4,
    generateName = () => `${capitalizeFirstLetter(lodashExports.sample(FriendlyNameWords.adjectives))}${capitalizeFirstLetter(lodashExports.sample(FriendlyNameWords.nouns))}`,
    FriendlyNamePicker = s => {
        const [r, n] = reactExports.useState(0), i = reactExports.useMemo(() => {
            let l = [];
            for (let v = 0; v < CHANCES; v++) l.push(generateName());
            return l
        }, []), f = reactExports.useMemo(() => i[r], [r]);
        reactExports.useEffect(() => {
            s.onNameChange(f)
        }, [f]);
        const e = reactExports.useMemo(() => r + 1 !== CHANCES, [r]),
            d = () => {
                e && n(l => l + 1)
            };
        return jsxRuntimeExports.jsxs(Container$3, {
            children: [jsxRuntimeExports.jsx(Divider, {
                style: {
                    marginTop: 20,
                    marginBottom: 15
                },
                children: jsxRuntimeExports.jsx("span", {
                    style: {
                        fontStyle: "italic",
                        color: "rgba(0,0,0,0.7)"
                    },
                    children: "Your nickname"
                })
            }), jsxRuntimeExports.jsxs("div", {
                className: "maxWidth flex vc",
                children: [jsxRuntimeExports.jsx(JoinInput, {
                    value: f,
                    readOnly: !0,
                    spellcheck: "false"
                }), jsxRuntimeExports.jsx(Tooltip, {
                    title: e ? `Spin Again (${CHANCES-r-1} Left)` : "Out Of Spins!",
                    children: jsxRuntimeExports.jsx("div", {
                        style: {
                            marginLeft: 7
                        },
                        children: jsxRuntimeExports.jsx(Button$1, {
                            onClick: d,
                            type: e ? "primary" : "disabled",
                            label: jsxRuntimeExports.jsx("i", {
                                className: "fas fa-sync"
                            }),
                            customColor: "#1b5e20"
                        })
                    })
                })]
            })]
        })
    },
    Container$3 = dt.div.attrs({
        className: "maxWidth flex-center flex-column"
    })`
  margin-bottom: 10px;
`;
dt.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-style: italic;
  margin-bottom: 7px;
`;
const LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME = "play-again-last-used-name",
    EnterName = s => {
        const [r, n] = reactExports.useState(""), i = () => {
            (s.value || "").trim().length && !s.loading && s.submit && s.submit()
        }, f = d => {
            s.onValueChange && s.onValueChange(d.target.value)
        }, e = d => {
            d.key === "Enter" && i()
        };
        return reactExports.useEffect(() => {
            const d = localStorage.getItem(LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME);
            d && (n(d), localStorage.removeItem(LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME), s.onValueChange(d))
        }, []), reactExports.useEffect(() => {
            s.value && r && r === s.value && i()
        }, [r, s.value]), jsxRuntimeExports.jsxs(JoinModal, {
            children: [s.useRandomNamePicker ? jsxRuntimeExports.jsx(FriendlyNamePicker, {
                onNameChange: s.onValueChange
            }) : jsxRuntimeExports.jsx(JoinInput, {
                id: "player-name-input",
                style: {
                    marginTop: 14,
                    marginBottom: 7
                },
                placeholder: "Your Name",
                maxLength: 20,
                value: s.value,
                onChange: f,
                onKeyDown: e,
                spellcheck: "false"
            }), jsxRuntimeExports.jsx(JoinPrimaryButton, {
                id: "join-game-button",
                label: "Join",
                onClick: i,
                loading: s.loading
            })]
        })
    },
    JoinClass = s => jsxRuntimeExports.jsx(JoinModal, {
        noImage: !0,
        children: jsxRuntimeExports.jsxs(Container$2, {
            children: [jsxRuntimeExports.jsx(Image, {}), jsxRuntimeExports.jsx(Divider, {}), jsxRuntimeExports.jsxs(Text$1, {
                children: ["To access this game, you must join the ", jsxRuntimeExports.jsx("b", {
                    children: s.nameOfClass
                }), " ", "class."]
            }), jsxRuntimeExports.jsx(Button$2, {
                href: s.link,
                style: {
                    marginTop: 20
                },
                type: "primary",
                block: !0,
                children: "Join Class"
            })]
        })
    }),
    Container$2 = dt.div.attrs({
        className: "maxWidth flex-column flex-center"
    })``,
    Image = dt.img.attrs({
        src: "/client/img/svgLogo.svg"
    })`
  height: 30px;
`,
    Text$1 = dt.div`
  font-size: 16px;
`,
    submitCode = s => {
        const {
            code: r,
            onSuccess: n,
            onError: i
        } = s;
        if (r.length < 4 && inProductionOrStaging) {
            i && i({
                message: {
                    text: "Game not found"
                }
            });
            return
        }
        request({
            url: "/api/matchmaker/find-info-from-code",
            data: {
                code: r
            },
            success: f => {
                n && n(f)
            },
            error: f => {
                i && i(f)
            }
        })
    };
var cryptoBrowserify = {},
    browser$b = {
        exports: {}
    },
    hasRequiredBrowser$b;

function requireBrowser$b() {
    if (hasRequiredBrowser$b) return browser$b.exports;
    hasRequiredBrowser$b = 1;
    var s = 65536,
        r = 4294967295;

    function n() {
        throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`)
    }
    var i = requireSafeBuffer$1().Buffer,
        f = commonjsGlobal.crypto || commonjsGlobal.msCrypto;
    f && f.getRandomValues ? browser$b.exports = e : browser$b.exports = n;

    function e(d, l) {
        if (d > r) throw new RangeError("requested too many random bytes");
        var v = i.allocUnsafe(d);
        if (d > 0)
            if (d > s)
                for (var a = 0; a < d; a += s) f.getRandomValues(v.slice(a, a + s));
            else f.getRandomValues(v);
        return typeof l == "function" ? process$1.nextTick(function() {
            l(null, v)
        }) : v
    }
    return browser$b.exports
}
var readableBrowser$1 = {
        exports: {}
    },
    hasRequiredReadableBrowser$1;

function requireReadableBrowser$1() {
    return hasRequiredReadableBrowser$1 || (hasRequiredReadableBrowser$1 = 1, function(s, r) {
        r = s.exports = require_stream_readable$1(), r.Stream = r, r.Readable = r, r.Writable = require_stream_writable$1(), r.Duplex = require_stream_duplex$1(), r.Transform = require_stream_transform$1(), r.PassThrough = require_stream_passthrough$1(), r.finished = requireEndOfStream(), r.pipeline = requirePipeline()
    }(readableBrowser$1, readableBrowser$1.exports)), readableBrowser$1.exports
}
var hashBase$2, hasRequiredHashBase$2;

function requireHashBase$2() {
    if (hasRequiredHashBase$2) return hashBase$2;
    hasRequiredHashBase$2 = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireReadableBrowser$1().Transform,
        n = requireInherits_browser();

    function i(e, d) {
        if (!s.isBuffer(e) && typeof e != "string") throw new TypeError(d + " must be a string or a buffer")
    }

    function f(e) {
        r.call(this), this._block = s.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }
    return n(f, r), f.prototype._transform = function(e, d, l) {
        var v = null;
        try {
            this.update(e, d)
        } catch (a) {
            v = a
        }
        l(v)
    }, f.prototype._flush = function(e) {
        var d = null;
        try {
            this.push(this.digest())
        } catch (l) {
            d = l
        }
        e(d)
    }, f.prototype.update = function(e, d) {
        if (i(e, "Data"), this._finalized) throw new Error("Digest already called");
        s.isBuffer(e) || (e = s.from(e, d));
        for (var l = this._block, v = 0; this._blockOffset + e.length - v >= this._blockSize;) {
            for (var a = this._blockOffset; a < this._blockSize;) l[a++] = e[v++];
            this._update(), this._blockOffset = 0
        }
        for (; v < e.length;) l[this._blockOffset++] = e[v++];
        for (var u = 0, h = e.length * 8; h > 0; ++u) this._length[u] += h, h = this._length[u] / 4294967296 | 0, h > 0 && (this._length[u] -= 4294967296 * h);
        return this
    }, f.prototype._update = function() {
        throw new Error("_update is not implemented")
    }, f.prototype.digest = function(e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var d = this._digest();
        e !== void 0 && (d = d.toString(e)), this._block.fill(0), this._blockOffset = 0;
        for (var l = 0; l < 4; ++l) this._length[l] = 0;
        return d
    }, f.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }, hashBase$2 = f, hashBase$2
}
var md5_js, hasRequiredMd5_js;

function requireMd5_js() {
    if (hasRequiredMd5_js) return md5_js;
    hasRequiredMd5_js = 1;
    var s = requireInherits_browser(),
        r = requireHashBase$2(),
        n = requireSafeBuffer$1().Buffer,
        i = new Array(16);

    function f() {
        r.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
    }
    s(f, r), f.prototype._update = function() {
        for (var u = i, h = 0; h < 16; ++h) u[h] = this._block.readInt32LE(h * 4);
        var p = this._a,
            b = this._b,
            g = this._c,
            x = this._d;
        p = d(p, b, g, x, u[0], 3614090360, 7), x = d(x, p, b, g, u[1], 3905402710, 12), g = d(g, x, p, b, u[2], 606105819, 17), b = d(b, g, x, p, u[3], 3250441966, 22), p = d(p, b, g, x, u[4], 4118548399, 7), x = d(x, p, b, g, u[5], 1200080426, 12), g = d(g, x, p, b, u[6], 2821735955, 17), b = d(b, g, x, p, u[7], 4249261313, 22), p = d(p, b, g, x, u[8], 1770035416, 7), x = d(x, p, b, g, u[9], 2336552879, 12), g = d(g, x, p, b, u[10], 4294925233, 17), b = d(b, g, x, p, u[11], 2304563134, 22), p = d(p, b, g, x, u[12], 1804603682, 7), x = d(x, p, b, g, u[13], 4254626195, 12), g = d(g, x, p, b, u[14], 2792965006, 17), b = d(b, g, x, p, u[15], 1236535329, 22), p = l(p, b, g, x, u[1], 4129170786, 5), x = l(x, p, b, g, u[6], 3225465664, 9), g = l(g, x, p, b, u[11], 643717713, 14), b = l(b, g, x, p, u[0], 3921069994, 20), p = l(p, b, g, x, u[5], 3593408605, 5), x = l(x, p, b, g, u[10], 38016083, 9), g = l(g, x, p, b, u[15], 3634488961, 14), b = l(b, g, x, p, u[4], 3889429448, 20), p = l(p, b, g, x, u[9], 568446438, 5), x = l(x, p, b, g, u[14], 3275163606, 9), g = l(g, x, p, b, u[3], 4107603335, 14), b = l(b, g, x, p, u[8], 1163531501, 20), p = l(p, b, g, x, u[13], 2850285829, 5), x = l(x, p, b, g, u[2], 4243563512, 9), g = l(g, x, p, b, u[7], 1735328473, 14), b = l(b, g, x, p, u[12], 2368359562, 20), p = v(p, b, g, x, u[5], 4294588738, 4), x = v(x, p, b, g, u[8], 2272392833, 11), g = v(g, x, p, b, u[11], 1839030562, 16), b = v(b, g, x, p, u[14], 4259657740, 23), p = v(p, b, g, x, u[1], 2763975236, 4), x = v(x, p, b, g, u[4], 1272893353, 11), g = v(g, x, p, b, u[7], 4139469664, 16), b = v(b, g, x, p, u[10], 3200236656, 23), p = v(p, b, g, x, u[13], 681279174, 4), x = v(x, p, b, g, u[0], 3936430074, 11), g = v(g, x, p, b, u[3], 3572445317, 16), b = v(b, g, x, p, u[6], 76029189, 23), p = v(p, b, g, x, u[9], 3654602809, 4), x = v(x, p, b, g, u[12], 3873151461, 11), g = v(g, x, p, b, u[15], 530742520, 16), b = v(b, g, x, p, u[2], 3299628645, 23), p = a(p, b, g, x, u[0], 4096336452, 6), x = a(x, p, b, g, u[7], 1126891415, 10), g = a(g, x, p, b, u[14], 2878612391, 15), b = a(b, g, x, p, u[5], 4237533241, 21), p = a(p, b, g, x, u[12], 1700485571, 6), x = a(x, p, b, g, u[3], 2399980690, 10), g = a(g, x, p, b, u[10], 4293915773, 15), b = a(b, g, x, p, u[1], 2240044497, 21), p = a(p, b, g, x, u[8], 1873313359, 6), x = a(x, p, b, g, u[15], 4264355552, 10), g = a(g, x, p, b, u[6], 2734768916, 15), b = a(b, g, x, p, u[13], 1309151649, 21), p = a(p, b, g, x, u[4], 4149444226, 6), x = a(x, p, b, g, u[11], 3174756917, 10), g = a(g, x, p, b, u[2], 718787259, 15), b = a(b, g, x, p, u[9], 3951481745, 21), this._a = this._a + p | 0, this._b = this._b + b | 0, this._c = this._c + g | 0, this._d = this._d + x | 0
    }, f.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var u = n.allocUnsafe(16);
        return u.writeInt32LE(this._a, 0), u.writeInt32LE(this._b, 4), u.writeInt32LE(this._c, 8), u.writeInt32LE(this._d, 12), u
    };

    function e(u, h) {
        return u << h | u >>> 32 - h
    }

    function d(u, h, p, b, g, x, E) {
        return e(u + (h & p | ~h & b) + g + x | 0, E) + h | 0
    }

    function l(u, h, p, b, g, x, E) {
        return e(u + (h & b | p & ~b) + g + x | 0, E) + h | 0
    }

    function v(u, h, p, b, g, x, E) {
        return e(u + (h ^ p ^ b) + g + x | 0, E) + h | 0
    }

    function a(u, h, p, b, g, x, E) {
        return e(u + (p ^ (h | ~b)) + g + x | 0, E) + h | 0
    }
    return md5_js = f, md5_js
}
var hashBase$1, hasRequiredHashBase$1;

function requireHashBase$1() {
    if (hasRequiredHashBase$1) return hashBase$1;
    hasRequiredHashBase$1 = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireReadableBrowser$1().Transform,
        n = requireInherits_browser();

    function i(e, d) {
        if (!s.isBuffer(e) && typeof e != "string") throw new TypeError(d + " must be a string or a buffer")
    }

    function f(e) {
        r.call(this), this._block = s.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }
    return n(f, r), f.prototype._transform = function(e, d, l) {
        var v = null;
        try {
            this.update(e, d)
        } catch (a) {
            v = a
        }
        l(v)
    }, f.prototype._flush = function(e) {
        var d = null;
        try {
            this.push(this.digest())
        } catch (l) {
            d = l
        }
        e(d)
    }, f.prototype.update = function(e, d) {
        if (i(e, "Data"), this._finalized) throw new Error("Digest already called");
        s.isBuffer(e) || (e = s.from(e, d));
        for (var l = this._block, v = 0; this._blockOffset + e.length - v >= this._blockSize;) {
            for (var a = this._blockOffset; a < this._blockSize;) l[a++] = e[v++];
            this._update(), this._blockOffset = 0
        }
        for (; v < e.length;) l[this._blockOffset++] = e[v++];
        for (var u = 0, h = e.length * 8; h > 0; ++u) this._length[u] += h, h = this._length[u] / 4294967296 | 0, h > 0 && (this._length[u] -= 4294967296 * h);
        return this
    }, f.prototype._update = function() {
        throw new Error("_update is not implemented")
    }, f.prototype.digest = function(e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var d = this._digest();
        e !== void 0 && (d = d.toString(e)), this._block.fill(0), this._blockOffset = 0;
        for (var l = 0; l < 4; ++l) this._length[l] = 0;
        return d
    }, f.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }, hashBase$1 = f, hashBase$1
}
var ripemd160$1, hasRequiredRipemd160$1;

function requireRipemd160$1() {
    if (hasRequiredRipemd160$1) return ripemd160$1;
    hasRequiredRipemd160$1 = 1;
    var s = requireDist$1().Buffer,
        r = requireInherits_browser(),
        n = requireHashBase$1(),
        i = new Array(16),
        f = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        e = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        d = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        l = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
        v = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        a = [1352829926, 1548603684, 1836072691, 2053994217, 0];

    function u() {
        n.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
    }
    r(u, n), u.prototype._update = function() {
        for (var R = i, k = 0; k < 16; ++k) R[k] = this._block.readInt32LE(k * 4);
        for (var I = this._a | 0, $ = this._b | 0, j = this._c | 0, O = this._d | 0, H = this._e | 0, X = this._a | 0, W = this._b | 0, J = this._c | 0, D = this._d | 0, B = this._e | 0, y = 0; y < 80; y += 1) {
            var t, c;
            y < 16 ? (t = p(I, $, j, O, H, R[f[y]], v[0], d[y]), c = E(X, W, J, D, B, R[e[y]], a[0], l[y])) : y < 32 ? (t = b(I, $, j, O, H, R[f[y]], v[1], d[y]), c = x(X, W, J, D, B, R[e[y]], a[1], l[y])) : y < 48 ? (t = g(I, $, j, O, H, R[f[y]], v[2], d[y]), c = g(X, W, J, D, B, R[e[y]], a[2], l[y])) : y < 64 ? (t = x(I, $, j, O, H, R[f[y]], v[3], d[y]), c = b(X, W, J, D, B, R[e[y]], a[3], l[y])) : (t = E(I, $, j, O, H, R[f[y]], v[4], d[y]), c = p(X, W, J, D, B, R[e[y]], a[4], l[y])), I = H, H = O, O = h(j, 10), j = $, $ = t, X = B, B = D, D = h(J, 10), J = W, W = c
        }
        var _ = this._b + j + D | 0;
        this._b = this._c + O + B | 0, this._c = this._d + H + X | 0, this._d = this._e + I + W | 0, this._e = this._a + $ + J | 0, this._a = _
    }, u.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var R = s.alloc ? s.alloc(20) : new s(20);
        return R.writeInt32LE(this._a, 0), R.writeInt32LE(this._b, 4), R.writeInt32LE(this._c, 8), R.writeInt32LE(this._d, 12), R.writeInt32LE(this._e, 16), R
    };

    function h(R, k) {
        return R << k | R >>> 32 - k
    }

    function p(R, k, I, $, j, O, H, X) {
        return h(R + (k ^ I ^ $) + O + H | 0, X) + j | 0
    }

    function b(R, k, I, $, j, O, H, X) {
        return h(R + (k & I | ~k & $) + O + H | 0, X) + j | 0
    }

    function g(R, k, I, $, j, O, H, X) {
        return h(R + ((k | ~I) ^ $) + O + H | 0, X) + j | 0
    }

    function x(R, k, I, $, j, O, H, X) {
        return h(R + (k & $ | I & ~$) + O + H | 0, X) + j | 0
    }

    function E(R, k, I, $, j, O, H, X) {
        return h(R + (k ^ (I | ~$)) + O + H | 0, X) + j | 0
    }
    return ripemd160$1 = u, ripemd160$1
}
var sha_js = {
        exports: {}
    },
    isarray$1, hasRequiredIsarray$1;

function requireIsarray$1() {
    if (hasRequiredIsarray$1) return isarray$1;
    hasRequiredIsarray$1 = 1;
    var s = {}.toString;
    return isarray$1 = Array.isArray || function(r) {
        return s.call(r) == "[object Array]"
    }, isarray$1
}
var typedArrayBuffer, hasRequiredTypedArrayBuffer;

function requireTypedArrayBuffer() {
    if (hasRequiredTypedArrayBuffer) return typedArrayBuffer;
    hasRequiredTypedArrayBuffer = 1;
    var s = requireType(),
        r = requireCallBound(),
        n = r("TypedArray.prototype.buffer", !0),
        i = requireIsTypedArray();
    return typedArrayBuffer = n || function(e) {
        if (!i(e)) throw new s("Not a Typed Array");
        return e.buffer
    }, typedArrayBuffer
}
var toBuffer, hasRequiredToBuffer$1;

function requireToBuffer$1() {
    if (hasRequiredToBuffer$1) return toBuffer;
    hasRequiredToBuffer$1 = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireIsarray$1(),
        n = requireTypedArrayBuffer(),
        i = ArrayBuffer.isView || function(v) {
            try {
                return n(v), !0
            } catch {
                return !1
            }
        },
        f = typeof Uint8Array < "u",
        e = typeof ArrayBuffer < "u" && typeof Uint8Array < "u",
        d = e && (s.prototype instanceof Uint8Array || s.TYPED_ARRAY_SUPPORT);
    return toBuffer = function(v, a) {
        if (v instanceof s) return v;
        if (typeof v == "string") return s.from(v, a);
        if (e && i(v)) {
            if (v.byteLength === 0) return s.alloc(0);
            if (d) {
                var u = s.from(v.buffer, v.byteOffset, v.byteLength);
                if (u.byteLength === v.byteLength) return u
            }
            var h = v instanceof Uint8Array ? v : new Uint8Array(v.buffer, v.byteOffset, v.byteLength),
                p = s.from(h);
            if (p.length === v.byteLength) return p
        }
        if (f && v instanceof Uint8Array) return s.from(v);
        var b = r(v);
        if (b)
            for (var g = 0; g < v.length; g += 1) {
                var x = v[g];
                if (typeof x != "number" || x < 0 || x > 255 || ~~x !== x) throw new RangeError("Array items must be numbers in the range 0-255.")
            }
        if (b || s.isBuffer(v) && v.constructor && typeof v.constructor.isBuffer == "function" && v.constructor.isBuffer(v)) return s.from(v);
        throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.')
    }, toBuffer
}
var hash$1, hasRequiredHash$1;

function requireHash$1() {
    if (hasRequiredHash$1) return hash$1;
    hasRequiredHash$1 = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireToBuffer$1();

    function n(i, f) {
        this._block = s.alloc(i), this._finalSize = f, this._blockSize = i, this._len = 0
    }
    return n.prototype.update = function(i, f) {
        i = r(i, f || "utf8");
        for (var e = this._block, d = this._blockSize, l = i.length, v = this._len, a = 0; a < l;) {
            for (var u = v % d, h = Math.min(l - a, d - u), p = 0; p < h; p++) e[u + p] = i[a + p];
            v += h, a += h, v % d === 0 && this._update(e)
        }
        return this._len += l, this
    }, n.prototype.digest = function(i) {
        var f = this._len % this._blockSize;
        this._block[f] = 128, this._block.fill(0, f + 1), f >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var e = this._len * 8;
        if (e <= 4294967295) this._block.writeUInt32BE(e, this._blockSize - 4);
        else {
            var d = (e & 4294967295) >>> 0,
                l = (e - d) / 4294967296;
            this._block.writeUInt32BE(l, this._blockSize - 8), this._block.writeUInt32BE(d, this._blockSize - 4)
        }
        this._update(this._block);
        var v = this._hash();
        return i ? v.toString(i) : v
    }, n.prototype._update = function() {
        throw new Error("_update must be implemented by subclass")
    }, hash$1 = n, hash$1
}
var sha$1, hasRequiredSha$1;

function requireSha$1() {
    if (hasRequiredSha$1) return sha$1;
    hasRequiredSha$1 = 1;
    var s = requireInherits_browser(),
        r = requireHash$1(),
        n = requireSafeBuffer$1().Buffer,
        i = [1518500249, 1859775393, -1894007588, -899497514],
        f = new Array(80);

    function e() {
        this.init(), this._w = f, r.call(this, 64, 56)
    }
    s(e, r), e.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    };

    function d(a) {
        return a << 5 | a >>> 27
    }

    function l(a) {
        return a << 30 | a >>> 2
    }

    function v(a, u, h, p) {
        return a === 0 ? u & h | ~u & p : a === 2 ? u & h | u & p | h & p : u ^ h ^ p
    }
    return e.prototype._update = function(a) {
        for (var u = this._w, h = this._a | 0, p = this._b | 0, b = this._c | 0, g = this._d | 0, x = this._e | 0, E = 0; E < 16; ++E) u[E] = a.readInt32BE(E * 4);
        for (; E < 80; ++E) u[E] = u[E - 3] ^ u[E - 8] ^ u[E - 14] ^ u[E - 16];
        for (var R = 0; R < 80; ++R) {
            var k = ~~(R / 20),
                I = d(h) + v(k, p, b, g) + x + u[R] + i[k] | 0;
            x = g, g = b, b = l(p), p = h, h = I
        }
        this._a = h + this._a | 0, this._b = p + this._b | 0, this._c = b + this._c | 0, this._d = g + this._d | 0, this._e = x + this._e | 0
    }, e.prototype._hash = function() {
        var a = n.allocUnsafe(20);
        return a.writeInt32BE(this._a | 0, 0), a.writeInt32BE(this._b | 0, 4), a.writeInt32BE(this._c | 0, 8), a.writeInt32BE(this._d | 0, 12), a.writeInt32BE(this._e | 0, 16), a
    }, sha$1 = e, sha$1
}
var sha1, hasRequiredSha1;

function requireSha1() {
    if (hasRequiredSha1) return sha1;
    hasRequiredSha1 = 1;
    var s = requireInherits_browser(),
        r = requireHash$1(),
        n = requireSafeBuffer$1().Buffer,
        i = [1518500249, 1859775393, -1894007588, -899497514],
        f = new Array(80);

    function e() {
        this.init(), this._w = f, r.call(this, 64, 56)
    }
    s(e, r), e.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    };

    function d(u) {
        return u << 1 | u >>> 31
    }

    function l(u) {
        return u << 5 | u >>> 27
    }

    function v(u) {
        return u << 30 | u >>> 2
    }

    function a(u, h, p, b) {
        return u === 0 ? h & p | ~h & b : u === 2 ? h & p | h & b | p & b : h ^ p ^ b
    }
    return e.prototype._update = function(u) {
        for (var h = this._w, p = this._a | 0, b = this._b | 0, g = this._c | 0, x = this._d | 0, E = this._e | 0, R = 0; R < 16; ++R) h[R] = u.readInt32BE(R * 4);
        for (; R < 80; ++R) h[R] = d(h[R - 3] ^ h[R - 8] ^ h[R - 14] ^ h[R - 16]);
        for (var k = 0; k < 80; ++k) {
            var I = ~~(k / 20),
                $ = l(p) + a(I, b, g, x) + E + h[k] + i[I] | 0;
            E = x, x = g, g = v(b), b = p, p = $
        }
        this._a = p + this._a | 0, this._b = b + this._b | 0, this._c = g + this._c | 0, this._d = x + this._d | 0, this._e = E + this._e | 0
    }, e.prototype._hash = function() {
        var u = n.allocUnsafe(20);
        return u.writeInt32BE(this._a | 0, 0), u.writeInt32BE(this._b | 0, 4), u.writeInt32BE(this._c | 0, 8), u.writeInt32BE(this._d | 0, 12), u.writeInt32BE(this._e | 0, 16), u
    }, sha1 = e, sha1
}
var sha256$1, hasRequiredSha256;

function requireSha256() {
    if (hasRequiredSha256) return sha256$1;
    hasRequiredSha256 = 1;
    var s = requireInherits_browser(),
        r = requireHash$1(),
        n = requireSafeBuffer$1().Buffer,
        i = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        f = new Array(64);

    function e() {
        this.init(), this._w = f, r.call(this, 64, 56)
    }
    s(e, r), e.prototype.init = function() {
        return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
    };

    function d(p, b, g) {
        return g ^ p & (b ^ g)
    }

    function l(p, b, g) {
        return p & b | g & (p | b)
    }

    function v(p) {
        return (p >>> 2 | p << 30) ^ (p >>> 13 | p << 19) ^ (p >>> 22 | p << 10)
    }

    function a(p) {
        return (p >>> 6 | p << 26) ^ (p >>> 11 | p << 21) ^ (p >>> 25 | p << 7)
    }

    function u(p) {
        return (p >>> 7 | p << 25) ^ (p >>> 18 | p << 14) ^ p >>> 3
    }

    function h(p) {
        return (p >>> 17 | p << 15) ^ (p >>> 19 | p << 13) ^ p >>> 10
    }
    return e.prototype._update = function(p) {
        for (var b = this._w, g = this._a | 0, x = this._b | 0, E = this._c | 0, R = this._d | 0, k = this._e | 0, I = this._f | 0, $ = this._g | 0, j = this._h | 0, O = 0; O < 16; ++O) b[O] = p.readInt32BE(O * 4);
        for (; O < 64; ++O) b[O] = h(b[O - 2]) + b[O - 7] + u(b[O - 15]) + b[O - 16] | 0;
        for (var H = 0; H < 64; ++H) {
            var X = j + a(k) + d(k, I, $) + i[H] + b[H] | 0,
                W = v(g) + l(g, x, E) | 0;
            j = $, $ = I, I = k, k = R + X | 0, R = E, E = x, x = g, g = X + W | 0
        }
        this._a = g + this._a | 0, this._b = x + this._b | 0, this._c = E + this._c | 0, this._d = R + this._d | 0, this._e = k + this._e | 0, this._f = I + this._f | 0, this._g = $ + this._g | 0, this._h = j + this._h | 0
    }, e.prototype._hash = function() {
        var p = n.allocUnsafe(32);
        return p.writeInt32BE(this._a, 0), p.writeInt32BE(this._b, 4), p.writeInt32BE(this._c, 8), p.writeInt32BE(this._d, 12), p.writeInt32BE(this._e, 16), p.writeInt32BE(this._f, 20), p.writeInt32BE(this._g, 24), p.writeInt32BE(this._h, 28), p
    }, sha256$1 = e, sha256$1
}
var sha224$1, hasRequiredSha224;

function requireSha224() {
    if (hasRequiredSha224) return sha224$1;
    hasRequiredSha224 = 1;
    var s = requireInherits_browser(),
        r = requireSha256(),
        n = requireHash$1(),
        i = requireSafeBuffer$1().Buffer,
        f = new Array(64);

    function e() {
        this.init(), this._w = f, n.call(this, 64, 56)
    }
    return s(e, r), e.prototype.init = function() {
        return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
    }, e.prototype._hash = function() {
        var d = i.allocUnsafe(28);
        return d.writeInt32BE(this._a, 0), d.writeInt32BE(this._b, 4), d.writeInt32BE(this._c, 8), d.writeInt32BE(this._d, 12), d.writeInt32BE(this._e, 16), d.writeInt32BE(this._f, 20), d.writeInt32BE(this._g, 24), d
    }, sha224$1 = e, sha224$1
}
var sha512$1, hasRequiredSha512;

function requireSha512() {
    if (hasRequiredSha512) return sha512$1;
    hasRequiredSha512 = 1;
    var s = requireInherits_browser(),
        r = requireHash$1(),
        n = requireSafeBuffer$1().Buffer,
        i = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        f = new Array(160);

    function e() {
        this.init(), this._w = f, r.call(this, 128, 112)
    }
    s(e, r), e.prototype.init = function() {
        return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
    };

    function d(x, E, R) {
        return R ^ x & (E ^ R)
    }

    function l(x, E, R) {
        return x & E | R & (x | E)
    }

    function v(x, E) {
        return (x >>> 28 | E << 4) ^ (E >>> 2 | x << 30) ^ (E >>> 7 | x << 25)
    }

    function a(x, E) {
        return (x >>> 14 | E << 18) ^ (x >>> 18 | E << 14) ^ (E >>> 9 | x << 23)
    }

    function u(x, E) {
        return (x >>> 1 | E << 31) ^ (x >>> 8 | E << 24) ^ x >>> 7
    }

    function h(x, E) {
        return (x >>> 1 | E << 31) ^ (x >>> 8 | E << 24) ^ (x >>> 7 | E << 25)
    }

    function p(x, E) {
        return (x >>> 19 | E << 13) ^ (E >>> 29 | x << 3) ^ x >>> 6
    }

    function b(x, E) {
        return (x >>> 19 | E << 13) ^ (E >>> 29 | x << 3) ^ (x >>> 6 | E << 26)
    }

    function g(x, E) {
        return x >>> 0 < E >>> 0 ? 1 : 0
    }
    return e.prototype._update = function(x) {
        for (var E = this._w, R = this._ah | 0, k = this._bh | 0, I = this._ch | 0, $ = this._dh | 0, j = this._eh | 0, O = this._fh | 0, H = this._gh | 0, X = this._hh | 0, W = this._al | 0, J = this._bl | 0, D = this._cl | 0, B = this._dl | 0, y = this._el | 0, t = this._fl | 0, c = this._gl | 0, _ = this._hl | 0, w = 0; w < 32; w += 2) E[w] = x.readInt32BE(w * 4), E[w + 1] = x.readInt32BE(w * 4 + 4);
        for (; w < 160; w += 2) {
            var q = E[w - 30],
                A = E[w - 30 + 1],
                M = u(q, A),
                S = h(A, q);
            q = E[w - 4], A = E[w - 4 + 1];
            var m = p(q, A),
                C = b(A, q),
                L = E[w - 14],
                U = E[w - 14 + 1],
                K = E[w - 32],
                P = E[w - 32 + 1],
                N = S + U | 0,
                z = M + L + g(N, S) | 0;
            N = N + C | 0, z = z + m + g(N, C) | 0, N = N + P | 0, z = z + K + g(N, P) | 0, E[w] = z, E[w + 1] = N
        }
        for (var V = 0; V < 160; V += 2) {
            z = E[V], N = E[V + 1];
            var Q = l(R, k, I),
                G = l(W, J, D),
                te = v(R, W),
                ve = v(W, R),
                ee = a(j, y),
                De = a(y, j),
                me = i[V],
                re = i[V + 1],
                Ne = d(j, O, H),
                ye = d(y, t, c),
                Y = _ + De | 0,
                $e = X + ee + g(Y, _) | 0;
            Y = Y + ye | 0, $e = $e + Ne + g(Y, ye) | 0, Y = Y + re | 0, $e = $e + me + g(Y, re) | 0, Y = Y + N | 0, $e = $e + z + g(Y, N) | 0;
            var be = ve + G | 0,
                Z = te + Q + g(be, ve) | 0;
            X = H, _ = c, H = O, c = t, O = j, t = y, y = B + Y | 0, j = $ + $e + g(y, B) | 0, $ = I, B = D, I = k, D = J, k = R, J = W, W = Y + be | 0, R = $e + Z + g(W, Y) | 0
        }
        this._al = this._al + W | 0, this._bl = this._bl + J | 0, this._cl = this._cl + D | 0, this._dl = this._dl + B | 0, this._el = this._el + y | 0, this._fl = this._fl + t | 0, this._gl = this._gl + c | 0, this._hl = this._hl + _ | 0, this._ah = this._ah + R + g(this._al, W) | 0, this._bh = this._bh + k + g(this._bl, J) | 0, this._ch = this._ch + I + g(this._cl, D) | 0, this._dh = this._dh + $ + g(this._dl, B) | 0, this._eh = this._eh + j + g(this._el, y) | 0, this._fh = this._fh + O + g(this._fl, t) | 0, this._gh = this._gh + H + g(this._gl, c) | 0, this._hh = this._hh + X + g(this._hl, _) | 0
    }, e.prototype._hash = function() {
        var x = n.allocUnsafe(64);

        function E(R, k, I) {
            x.writeInt32BE(R, I), x.writeInt32BE(k, I + 4)
        }
        return E(this._ah, this._al, 0), E(this._bh, this._bl, 8), E(this._ch, this._cl, 16), E(this._dh, this._dl, 24), E(this._eh, this._el, 32), E(this._fh, this._fl, 40), E(this._gh, this._gl, 48), E(this._hh, this._hl, 56), x
    }, sha512$1 = e, sha512$1
}
var sha384$1, hasRequiredSha384;

function requireSha384() {
    if (hasRequiredSha384) return sha384$1;
    hasRequiredSha384 = 1;
    var s = requireInherits_browser(),
        r = requireSha512(),
        n = requireHash$1(),
        i = requireSafeBuffer$1().Buffer,
        f = new Array(160);

    function e() {
        this.init(), this._w = f, n.call(this, 128, 112)
    }
    return s(e, r), e.prototype.init = function() {
        return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
    }, e.prototype._hash = function() {
        var d = i.allocUnsafe(48);

        function l(v, a, u) {
            d.writeInt32BE(v, u), d.writeInt32BE(a, u + 4)
        }
        return l(this._ah, this._al, 0), l(this._bh, this._bl, 8), l(this._ch, this._cl, 16), l(this._dh, this._dl, 24), l(this._eh, this._el, 32), l(this._fh, this._fl, 40), d
    }, sha384$1 = e, sha384$1
}
var hasRequiredSha_js;

function requireSha_js() {
    return hasRequiredSha_js || (hasRequiredSha_js = 1, function(s) {
        s.exports = function(n) {
            var i = n.toLowerCase(),
                f = s.exports[i];
            if (!f) throw new Error(i + " is not supported (we accept pull requests)");
            return new f
        }, s.exports.sha = requireSha$1(), s.exports.sha1 = requireSha1(), s.exports.sha224 = requireSha224(), s.exports.sha256 = requireSha256(), s.exports.sha384 = requireSha384(), s.exports.sha512 = requireSha512()
    }(sha_js)), sha_js.exports
}
var cipherBase, hasRequiredCipherBase;

function requireCipherBase() {
    if (hasRequiredCipherBase) return cipherBase;
    hasRequiredCipherBase = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireStreamBrowserify().Transform,
        n = requireString_decoder().StringDecoder,
        i = requireInherits_browser();

    function f(v) {
        r.call(this), this.hashMode = typeof v == "string", this.hashMode ? this[v] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
    }
    i(f, r);
    var e = typeof Uint8Array < "u",
        d = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && ArrayBuffer.isView && (s.prototype instanceof Uint8Array || s.TYPED_ARRAY_SUPPORT);

    function l(v, a) {
        if (v instanceof s) return v;
        if (typeof v == "string") return s.from(v, a);
        if (d && ArrayBuffer.isView(v)) {
            if (v.byteLength === 0) return s.alloc(0);
            var u = s.from(v.buffer, v.byteOffset, v.byteLength);
            if (u.byteLength === v.byteLength) return u
        }
        if (e && v instanceof Uint8Array || s.isBuffer(v) && v.constructor && typeof v.constructor.isBuffer == "function" && v.constructor.isBuffer(v)) return s.from(v);
        throw new TypeError('The "data" argument must be of type string or an instance of Buffer, TypedArray, or DataView.')
    }
    return f.prototype.update = function(v, a, u) {
        var h = l(v, a),
            p = this._update(h);
        return this.hashMode ? this : (u && (p = this._toString(p, u)), p)
    }, f.prototype.setAutoPadding = function() {}, f.prototype.getAuthTag = function() {
        throw new Error("trying to get auth tag in unsupported state")
    }, f.prototype.setAuthTag = function() {
        throw new Error("trying to set auth tag in unsupported state")
    }, f.prototype.setAAD = function() {
        throw new Error("trying to set aad in unsupported state")
    }, f.prototype._transform = function(v, a, u) {
        var h;
        try {
            this.hashMode ? this._update(v) : this.push(this._update(v))
        } catch (p) {
            h = p
        } finally {
            u(h)
        }
    }, f.prototype._flush = function(v) {
        var a;
        try {
            this.push(this.__final())
        } catch (u) {
            a = u
        }
        v(a)
    }, f.prototype._finalOrDigest = function(v) {
        var a = this.__final() || s.alloc(0);
        return v && (a = this._toString(a, v, !0)), a
    }, f.prototype._toString = function(v, a, u) {
        if (this._decoder || (this._decoder = new n(a), this._encoding = a), this._encoding !== a) throw new Error("can’t switch encodings");
        var h = this._decoder.write(v);
        return u && (h += this._decoder.end()), h
    }, cipherBase = f, cipherBase
}
var browser$a, hasRequiredBrowser$a;

function requireBrowser$a() {
    if (hasRequiredBrowser$a) return browser$a;
    hasRequiredBrowser$a = 1;
    var s = requireInherits_browser(),
        r = requireMd5_js(),
        n = requireRipemd160$1(),
        i = requireSha_js(),
        f = requireCipherBase();

    function e(d) {
        f.call(this, "digest"), this._hash = d
    }
    return s(e, f), e.prototype._update = function(d) {
        this._hash.update(d)
    }, e.prototype._final = function() {
        return this._hash.digest()
    }, browser$a = function(l) {
        return l = l.toLowerCase(), l === "md5" ? new r : l === "rmd160" || l === "ripemd160" ? new n : new e(i(l))
    }, browser$a
}
var legacy, hasRequiredLegacy;

function requireLegacy() {
    if (hasRequiredLegacy) return legacy;
    hasRequiredLegacy = 1;
    var s = requireInherits_browser(),
        r = requireSafeBuffer$1().Buffer,
        n = requireCipherBase(),
        i = r.alloc(128),
        f = 64;

    function e(d, l) {
        n.call(this, "digest"), typeof l == "string" && (l = r.from(l)), this._alg = d, this._key = l, l.length > f ? l = d(l) : l.length < f && (l = r.concat([l, i], f));
        for (var v = this._ipad = r.allocUnsafe(f), a = this._opad = r.allocUnsafe(f), u = 0; u < f; u++) v[u] = l[u] ^ 54, a[u] = l[u] ^ 92;
        this._hash = [v]
    }
    return s(e, n), e.prototype._update = function(d) {
        this._hash.push(d)
    }, e.prototype._final = function() {
        var d = this._alg(r.concat(this._hash));
        return this._alg(r.concat([this._opad, d]))
    }, legacy = e, legacy
}
var md5$1, hasRequiredMd5$1;

function requireMd5$1() {
    if (hasRequiredMd5$1) return md5$1;
    hasRequiredMd5$1 = 1;
    var s = requireMd5_js();
    return md5$1 = function(r) {
        return new s().update(r).digest()
    }, md5$1
}
var browser$9, hasRequiredBrowser$9;

function requireBrowser$9() {
    if (hasRequiredBrowser$9) return browser$9;
    hasRequiredBrowser$9 = 1;
    var s = requireInherits_browser(),
        r = requireLegacy(),
        n = requireCipherBase(),
        i = requireSafeBuffer$1().Buffer,
        f = requireMd5$1(),
        e = requireRipemd160$1(),
        d = requireSha_js(),
        l = i.alloc(128);

    function v(a, u) {
        n.call(this, "digest"), typeof u == "string" && (u = i.from(u));
        var h = a === "sha512" || a === "sha384" ? 128 : 64;
        if (this._alg = a, this._key = u, u.length > h) {
            var p = a === "rmd160" ? new e : d(a);
            u = p.update(u).digest()
        } else u.length < h && (u = i.concat([u, l], h));
        for (var b = this._ipad = i.allocUnsafe(h), g = this._opad = i.allocUnsafe(h), x = 0; x < h; x++) b[x] = u[x] ^ 54, g[x] = u[x] ^ 92;
        this._hash = a === "rmd160" ? new e : d(a), this._hash.update(b)
    }
    return s(v, n), v.prototype._update = function(a) {
        this._hash.update(a)
    }, v.prototype._final = function() {
        var a = this._hash.digest(),
            u = this._alg === "rmd160" ? new e : d(this._alg);
        return u.update(this._opad).update(a).digest()
    }, browser$9 = function(u, h) {
        return u = u.toLowerCase(), u === "rmd160" || u === "ripemd160" ? new v("rmd160", h) : u === "md5" ? new r(f, h) : new v(u, h)
    }, browser$9
}
const sha224WithRSAEncryption = {
        sign: "rsa",
        hash: "sha224",
        id: "302d300d06096086480165030402040500041c"
    },
    sha256WithRSAEncryption = {
        sign: "rsa",
        hash: "sha256",
        id: "3031300d060960864801650304020105000420"
    },
    sha384WithRSAEncryption = {
        sign: "rsa",
        hash: "sha384",
        id: "3041300d060960864801650304020205000430"
    },
    sha512WithRSAEncryption = {
        sign: "rsa",
        hash: "sha512",
        id: "3051300d060960864801650304020305000440"
    },
    sha256 = {
        sign: "ecdsa",
        hash: "sha256",
        id: ""
    },
    sha224 = {
        sign: "ecdsa",
        hash: "sha224",
        id: ""
    },
    sha384 = {
        sign: "ecdsa",
        hash: "sha384",
        id: ""
    },
    sha512 = {
        sign: "ecdsa",
        hash: "sha512",
        id: ""
    },
    DSA = {
        sign: "dsa",
        hash: "sha1",
        id: ""
    },
    ripemd160WithRSA = {
        sign: "rsa",
        hash: "rmd160",
        id: "3021300906052b2403020105000414"
    },
    md5WithRSAEncryption = {
        sign: "rsa",
        hash: "md5",
        id: "3020300c06082a864886f70d020505000410"
    },
    require$$6 = {
        sha224WithRSAEncryption,
        "RSA-SHA224": {
            sign: "ecdsa/rsa",
            hash: "sha224",
            id: "302d300d06096086480165030402040500041c"
        },
        sha256WithRSAEncryption,
        "RSA-SHA256": {
            sign: "ecdsa/rsa",
            hash: "sha256",
            id: "3031300d060960864801650304020105000420"
        },
        sha384WithRSAEncryption,
        "RSA-SHA384": {
            sign: "ecdsa/rsa",
            hash: "sha384",
            id: "3041300d060960864801650304020205000430"
        },
        sha512WithRSAEncryption,
        "RSA-SHA512": {
            sign: "ecdsa/rsa",
            hash: "sha512",
            id: "3051300d060960864801650304020305000440"
        },
        "RSA-SHA1": {
            sign: "rsa",
            hash: "sha1",
            id: "3021300906052b0e03021a05000414"
        },
        "ecdsa-with-SHA1": {
            sign: "ecdsa",
            hash: "sha1",
            id: ""
        },
        sha256,
        sha224,
        sha384,
        sha512,
        "DSA-SHA": {
            sign: "dsa",
            hash: "sha1",
            id: ""
        },
        "DSA-SHA1": {
            sign: "dsa",
            hash: "sha1",
            id: ""
        },
        DSA,
        "DSA-WITH-SHA224": {
            sign: "dsa",
            hash: "sha224",
            id: ""
        },
        "DSA-SHA224": {
            sign: "dsa",
            hash: "sha224",
            id: ""
        },
        "DSA-WITH-SHA256": {
            sign: "dsa",
            hash: "sha256",
            id: ""
        },
        "DSA-SHA256": {
            sign: "dsa",
            hash: "sha256",
            id: ""
        },
        "DSA-WITH-SHA384": {
            sign: "dsa",
            hash: "sha384",
            id: ""
        },
        "DSA-SHA384": {
            sign: "dsa",
            hash: "sha384",
            id: ""
        },
        "DSA-WITH-SHA512": {
            sign: "dsa",
            hash: "sha512",
            id: ""
        },
        "DSA-SHA512": {
            sign: "dsa",
            hash: "sha512",
            id: ""
        },
        "DSA-RIPEMD160": {
            sign: "dsa",
            hash: "rmd160",
            id: ""
        },
        ripemd160WithRSA,
        "RSA-RIPEMD160": {
            sign: "rsa",
            hash: "rmd160",
            id: "3021300906052b2403020105000414"
        },
        md5WithRSAEncryption,
        "RSA-MD5": {
            sign: "rsa",
            hash: "md5",
            id: "3020300c06082a864886f70d020505000410"
        }
    };
var algos, hasRequiredAlgos;

function requireAlgos() {
    return hasRequiredAlgos || (hasRequiredAlgos = 1, algos = require$$6), algos
}
var browser$8 = {},
    precondition, hasRequiredPrecondition;

function requirePrecondition() {
    if (hasRequiredPrecondition) return precondition;
    hasRequiredPrecondition = 1;
    var s = Math.pow(2, 30) - 1;
    return precondition = function(r, n) {
        if (typeof r != "number") throw new TypeError("Iterations not a number");
        if (r < 0) throw new TypeError("Bad iterations");
        if (typeof n != "number") throw new TypeError("Key length not a number");
        if (n < 0 || n > s || n !== n) throw new TypeError("Bad key length")
    }, precondition
}
var defaultEncoding_1, hasRequiredDefaultEncoding;

function requireDefaultEncoding() {
    if (hasRequiredDefaultEncoding) return defaultEncoding_1;
    hasRequiredDefaultEncoding = 1;
    var s;
    if (commonjsGlobal.process && commonjsGlobal.process.browser) s = "utf-8";
    else if (commonjsGlobal.process && commonjsGlobal.process.version) {
        var r = parseInt(process$1.version.split(".")[0].slice(1), 10);
        s = r >= 6 ? "utf-8" : "binary"
    } else s = "utf-8";
    return defaultEncoding_1 = s, defaultEncoding_1
}
var makeHash, hasRequiredMakeHash;

function requireMakeHash() {
    if (hasRequiredMakeHash) return makeHash;
    hasRequiredMakeHash = 1;
    var s = 4,
        r = new Buffer(s);
    r.fill(0);
    var n = 8,
        i = 16;

    function f(e) {
        if (e.length % s !== 0) {
            var d = e.length + (s - e.length % s);
            e = Buffer.concat([e, r], d)
        }
        for (var l = new Array(e.length >>> 2), v = 0, a = 0; v < e.length; v += s, a++) l[a] = e.readInt32LE(v);
        return l
    }
    return makeHash = function(d, l) {
        var v = l(f(d), d.length * n);
        d = new Buffer(i);
        for (var a = 0; a < v.length; a++) d.writeInt32LE(v[a], a << 2, !0);
        return d
    }, makeHash
}
var md5, hasRequiredMd5;

function requireMd5() {
    if (hasRequiredMd5) return md5;
    hasRequiredMd5 = 1;
    var s = requireMakeHash();

    function r(a, u) {
        a[u >> 5] |= 128 << u % 32, a[(u + 64 >>> 9 << 4) + 14] = u;
        for (var h = 1732584193, p = -271733879, b = -1732584194, g = 271733878, x = 0; x < a.length; x += 16) {
            var E = h,
                R = p,
                k = b,
                I = g;
            h = i(h, p, b, g, a[x + 0], 7, -680876936), g = i(g, h, p, b, a[x + 1], 12, -389564586), b = i(b, g, h, p, a[x + 2], 17, 606105819), p = i(p, b, g, h, a[x + 3], 22, -1044525330), h = i(h, p, b, g, a[x + 4], 7, -176418897), g = i(g, h, p, b, a[x + 5], 12, 1200080426), b = i(b, g, h, p, a[x + 6], 17, -1473231341), p = i(p, b, g, h, a[x + 7], 22, -45705983), h = i(h, p, b, g, a[x + 8], 7, 1770035416), g = i(g, h, p, b, a[x + 9], 12, -1958414417), b = i(b, g, h, p, a[x + 10], 17, -42063), p = i(p, b, g, h, a[x + 11], 22, -1990404162), h = i(h, p, b, g, a[x + 12], 7, 1804603682), g = i(g, h, p, b, a[x + 13], 12, -40341101), b = i(b, g, h, p, a[x + 14], 17, -1502002290), p = i(p, b, g, h, a[x + 15], 22, 1236535329), h = f(h, p, b, g, a[x + 1], 5, -165796510), g = f(g, h, p, b, a[x + 6], 9, -1069501632), b = f(b, g, h, p, a[x + 11], 14, 643717713), p = f(p, b, g, h, a[x + 0], 20, -373897302), h = f(h, p, b, g, a[x + 5], 5, -701558691), g = f(g, h, p, b, a[x + 10], 9, 38016083), b = f(b, g, h, p, a[x + 15], 14, -660478335), p = f(p, b, g, h, a[x + 4], 20, -405537848), h = f(h, p, b, g, a[x + 9], 5, 568446438), g = f(g, h, p, b, a[x + 14], 9, -1019803690), b = f(b, g, h, p, a[x + 3], 14, -187363961), p = f(p, b, g, h, a[x + 8], 20, 1163531501), h = f(h, p, b, g, a[x + 13], 5, -1444681467), g = f(g, h, p, b, a[x + 2], 9, -51403784), b = f(b, g, h, p, a[x + 7], 14, 1735328473), p = f(p, b, g, h, a[x + 12], 20, -1926607734), h = e(h, p, b, g, a[x + 5], 4, -378558), g = e(g, h, p, b, a[x + 8], 11, -2022574463), b = e(b, g, h, p, a[x + 11], 16, 1839030562), p = e(p, b, g, h, a[x + 14], 23, -35309556), h = e(h, p, b, g, a[x + 1], 4, -1530992060), g = e(g, h, p, b, a[x + 4], 11, 1272893353), b = e(b, g, h, p, a[x + 7], 16, -155497632), p = e(p, b, g, h, a[x + 10], 23, -1094730640), h = e(h, p, b, g, a[x + 13], 4, 681279174), g = e(g, h, p, b, a[x + 0], 11, -358537222), b = e(b, g, h, p, a[x + 3], 16, -722521979), p = e(p, b, g, h, a[x + 6], 23, 76029189), h = e(h, p, b, g, a[x + 9], 4, -640364487), g = e(g, h, p, b, a[x + 12], 11, -421815835), b = e(b, g, h, p, a[x + 15], 16, 530742520), p = e(p, b, g, h, a[x + 2], 23, -995338651), h = d(h, p, b, g, a[x + 0], 6, -198630844), g = d(g, h, p, b, a[x + 7], 10, 1126891415), b = d(b, g, h, p, a[x + 14], 15, -1416354905), p = d(p, b, g, h, a[x + 5], 21, -57434055), h = d(h, p, b, g, a[x + 12], 6, 1700485571), g = d(g, h, p, b, a[x + 3], 10, -1894986606), b = d(b, g, h, p, a[x + 10], 15, -1051523), p = d(p, b, g, h, a[x + 1], 21, -2054922799), h = d(h, p, b, g, a[x + 8], 6, 1873313359), g = d(g, h, p, b, a[x + 15], 10, -30611744), b = d(b, g, h, p, a[x + 6], 15, -1560198380), p = d(p, b, g, h, a[x + 13], 21, 1309151649), h = d(h, p, b, g, a[x + 4], 6, -145523070), g = d(g, h, p, b, a[x + 11], 10, -1120210379), b = d(b, g, h, p, a[x + 2], 15, 718787259), p = d(p, b, g, h, a[x + 9], 21, -343485551), h = l(h, E), p = l(p, R), b = l(b, k), g = l(g, I)
        }
        return [h, p, b, g]
    }

    function n(a, u, h, p, b, g) {
        return l(v(l(l(u, a), l(p, g)), b), h)
    }

    function i(a, u, h, p, b, g, x) {
        return n(u & h | ~u & p, a, u, b, g, x)
    }

    function f(a, u, h, p, b, g, x) {
        return n(u & p | h & ~p, a, u, b, g, x)
    }

    function e(a, u, h, p, b, g, x) {
        return n(u ^ h ^ p, a, u, b, g, x)
    }

    function d(a, u, h, p, b, g, x) {
        return n(h ^ (u | ~p), a, u, b, g, x)
    }

    function l(a, u) {
        var h = (a & 65535) + (u & 65535),
            p = (a >> 16) + (u >> 16) + (h >> 16);
        return p << 16 | h & 65535
    }

    function v(a, u) {
        return a << u | a >>> 32 - u
    }
    return md5 = function(u) {
        return s(u, r)
    }, md5
}
var hashBase, hasRequiredHashBase;

function requireHashBase() {
    if (hasRequiredHashBase) return hashBase;
    hasRequiredHashBase = 1;
    var s = requireStreamBrowserify().Transform,
        r = requireInherits_browser();

    function n(i) {
        s.call(this), this._block = new Buffer(i), this._blockSize = i, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }
    return r(n, s), n.prototype._transform = function(i, f, e) {
        var d = null;
        try {
            f !== "buffer" && (i = new Buffer(i, f)), this.update(i)
        } catch (l) {
            d = l
        }
        e(d)
    }, n.prototype._flush = function(i) {
        var f = null;
        try {
            this.push(this._digest())
        } catch (e) {
            f = e
        }
        i(f)
    }, n.prototype.update = function(i, f) {
        if (!Buffer.isBuffer(i) && typeof i != "string") throw new TypeError("Data must be a string or a buffer");
        if (this._finalized) throw new Error("Digest already called");
        Buffer.isBuffer(i) || (i = new Buffer(i, f || "binary"));
        for (var e = this._block, d = 0; this._blockOffset + i.length - d >= this._blockSize;) {
            for (var l = this._blockOffset; l < this._blockSize;) e[l++] = i[d++];
            this._update(), this._blockOffset = 0
        }
        for (; d < i.length;) e[this._blockOffset++] = i[d++];
        for (var v = 0, a = i.length * 8; a > 0; ++v) this._length[v] += a, a = this._length[v] / 4294967296 | 0, a > 0 && (this._length[v] -= 4294967296 * a);
        return this
    }, n.prototype._update = function(i) {
        throw new Error("_update is not implemented")
    }, n.prototype.digest = function(i) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var f = this._digest();
        return i !== void 0 && (f = f.toString(i)), f
    }, n.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }, hashBase = n, hashBase
}
var ripemd160, hasRequiredRipemd160;

function requireRipemd160() {
    if (hasRequiredRipemd160) return ripemd160;
    hasRequiredRipemd160 = 1;
    var s = requireInherits_browser(),
        r = requireHashBase();

    function n() {
        r.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
    }
    s(n, r), n.prototype._update = function() {
        for (var a = new Array(16), u = 0; u < 16; ++u) a[u] = this._block.readInt32LE(u * 4);
        var h = this._a,
            p = this._b,
            b = this._c,
            g = this._d,
            x = this._e;
        h = f(h, p, b, g, x, a[0], 0, 11), b = i(b, 10), x = f(x, h, p, b, g, a[1], 0, 14), p = i(p, 10), g = f(g, x, h, p, b, a[2], 0, 15), h = i(h, 10), b = f(b, g, x, h, p, a[3], 0, 12), x = i(x, 10), p = f(p, b, g, x, h, a[4], 0, 5), g = i(g, 10), h = f(h, p, b, g, x, a[5], 0, 8), b = i(b, 10), x = f(x, h, p, b, g, a[6], 0, 7), p = i(p, 10), g = f(g, x, h, p, b, a[7], 0, 9), h = i(h, 10), b = f(b, g, x, h, p, a[8], 0, 11), x = i(x, 10), p = f(p, b, g, x, h, a[9], 0, 13), g = i(g, 10), h = f(h, p, b, g, x, a[10], 0, 14), b = i(b, 10), x = f(x, h, p, b, g, a[11], 0, 15), p = i(p, 10), g = f(g, x, h, p, b, a[12], 0, 6), h = i(h, 10), b = f(b, g, x, h, p, a[13], 0, 7), x = i(x, 10), p = f(p, b, g, x, h, a[14], 0, 9), g = i(g, 10), h = f(h, p, b, g, x, a[15], 0, 8), b = i(b, 10), x = e(x, h, p, b, g, a[7], 1518500249, 7), p = i(p, 10), g = e(g, x, h, p, b, a[4], 1518500249, 6), h = i(h, 10), b = e(b, g, x, h, p, a[13], 1518500249, 8), x = i(x, 10), p = e(p, b, g, x, h, a[1], 1518500249, 13), g = i(g, 10), h = e(h, p, b, g, x, a[10], 1518500249, 11), b = i(b, 10), x = e(x, h, p, b, g, a[6], 1518500249, 9), p = i(p, 10), g = e(g, x, h, p, b, a[15], 1518500249, 7), h = i(h, 10), b = e(b, g, x, h, p, a[3], 1518500249, 15), x = i(x, 10), p = e(p, b, g, x, h, a[12], 1518500249, 7), g = i(g, 10), h = e(h, p, b, g, x, a[0], 1518500249, 12), b = i(b, 10), x = e(x, h, p, b, g, a[9], 1518500249, 15), p = i(p, 10), g = e(g, x, h, p, b, a[5], 1518500249, 9), h = i(h, 10), b = e(b, g, x, h, p, a[2], 1518500249, 11), x = i(x, 10), p = e(p, b, g, x, h, a[14], 1518500249, 7), g = i(g, 10), h = e(h, p, b, g, x, a[11], 1518500249, 13), b = i(b, 10), x = e(x, h, p, b, g, a[8], 1518500249, 12), p = i(p, 10), g = d(g, x, h, p, b, a[3], 1859775393, 11), h = i(h, 10), b = d(b, g, x, h, p, a[10], 1859775393, 13), x = i(x, 10), p = d(p, b, g, x, h, a[14], 1859775393, 6), g = i(g, 10), h = d(h, p, b, g, x, a[4], 1859775393, 7), b = i(b, 10), x = d(x, h, p, b, g, a[9], 1859775393, 14), p = i(p, 10), g = d(g, x, h, p, b, a[15], 1859775393, 9), h = i(h, 10), b = d(b, g, x, h, p, a[8], 1859775393, 13), x = i(x, 10), p = d(p, b, g, x, h, a[1], 1859775393, 15), g = i(g, 10), h = d(h, p, b, g, x, a[2], 1859775393, 14), b = i(b, 10), x = d(x, h, p, b, g, a[7], 1859775393, 8), p = i(p, 10), g = d(g, x, h, p, b, a[0], 1859775393, 13), h = i(h, 10), b = d(b, g, x, h, p, a[6], 1859775393, 6), x = i(x, 10), p = d(p, b, g, x, h, a[13], 1859775393, 5), g = i(g, 10), h = d(h, p, b, g, x, a[11], 1859775393, 12), b = i(b, 10), x = d(x, h, p, b, g, a[5], 1859775393, 7), p = i(p, 10), g = d(g, x, h, p, b, a[12], 1859775393, 5), h = i(h, 10), b = l(b, g, x, h, p, a[1], 2400959708, 11), x = i(x, 10), p = l(p, b, g, x, h, a[9], 2400959708, 12), g = i(g, 10), h = l(h, p, b, g, x, a[11], 2400959708, 14), b = i(b, 10), x = l(x, h, p, b, g, a[10], 2400959708, 15), p = i(p, 10), g = l(g, x, h, p, b, a[0], 2400959708, 14), h = i(h, 10), b = l(b, g, x, h, p, a[8], 2400959708, 15), x = i(x, 10), p = l(p, b, g, x, h, a[12], 2400959708, 9), g = i(g, 10), h = l(h, p, b, g, x, a[4], 2400959708, 8), b = i(b, 10), x = l(x, h, p, b, g, a[13], 2400959708, 9), p = i(p, 10), g = l(g, x, h, p, b, a[3], 2400959708, 14), h = i(h, 10), b = l(b, g, x, h, p, a[7], 2400959708, 5), x = i(x, 10), p = l(p, b, g, x, h, a[15], 2400959708, 6), g = i(g, 10), h = l(h, p, b, g, x, a[14], 2400959708, 8), b = i(b, 10), x = l(x, h, p, b, g, a[5], 2400959708, 6), p = i(p, 10), g = l(g, x, h, p, b, a[6], 2400959708, 5), h = i(h, 10), b = l(b, g, x, h, p, a[2], 2400959708, 12), x = i(x, 10), p = v(p, b, g, x, h, a[4], 2840853838, 9), g = i(g, 10), h = v(h, p, b, g, x, a[0], 2840853838, 15), b = i(b, 10), x = v(x, h, p, b, g, a[5], 2840853838, 5), p = i(p, 10), g = v(g, x, h, p, b, a[9], 2840853838, 11), h = i(h, 10), b = v(b, g, x, h, p, a[7], 2840853838, 6), x = i(x, 10), p = v(p, b, g, x, h, a[12], 2840853838, 8), g = i(g, 10), h = v(h, p, b, g, x, a[2], 2840853838, 13), b = i(b, 10), x = v(x, h, p, b, g, a[10], 2840853838, 12), p = i(p, 10), g = v(g, x, h, p, b, a[14], 2840853838, 5), h = i(h, 10), b = v(b, g, x, h, p, a[1], 2840853838, 12), x = i(x, 10), p = v(p, b, g, x, h, a[3], 2840853838, 13), g = i(g, 10), h = v(h, p, b, g, x, a[8], 2840853838, 14), b = i(b, 10), x = v(x, h, p, b, g, a[11], 2840853838, 11), p = i(p, 10), g = v(g, x, h, p, b, a[6], 2840853838, 8), h = i(h, 10), b = v(b, g, x, h, p, a[15], 2840853838, 5), x = i(x, 10), p = v(p, b, g, x, h, a[13], 2840853838, 6), g = i(g, 10);
        var E = this._a,
            R = this._b,
            k = this._c,
            I = this._d,
            $ = this._e;
        E = v(E, R, k, I, $, a[5], 1352829926, 8), k = i(k, 10), $ = v($, E, R, k, I, a[14], 1352829926, 9), R = i(R, 10), I = v(I, $, E, R, k, a[7], 1352829926, 9), E = i(E, 10), k = v(k, I, $, E, R, a[0], 1352829926, 11), $ = i($, 10), R = v(R, k, I, $, E, a[9], 1352829926, 13), I = i(I, 10), E = v(E, R, k, I, $, a[2], 1352829926, 15), k = i(k, 10), $ = v($, E, R, k, I, a[11], 1352829926, 15), R = i(R, 10), I = v(I, $, E, R, k, a[4], 1352829926, 5), E = i(E, 10), k = v(k, I, $, E, R, a[13], 1352829926, 7), $ = i($, 10), R = v(R, k, I, $, E, a[6], 1352829926, 7), I = i(I, 10), E = v(E, R, k, I, $, a[15], 1352829926, 8), k = i(k, 10), $ = v($, E, R, k, I, a[8], 1352829926, 11), R = i(R, 10), I = v(I, $, E, R, k, a[1], 1352829926, 14), E = i(E, 10), k = v(k, I, $, E, R, a[10], 1352829926, 14), $ = i($, 10), R = v(R, k, I, $, E, a[3], 1352829926, 12), I = i(I, 10), E = v(E, R, k, I, $, a[12], 1352829926, 6), k = i(k, 10), $ = l($, E, R, k, I, a[6], 1548603684, 9), R = i(R, 10), I = l(I, $, E, R, k, a[11], 1548603684, 13), E = i(E, 10), k = l(k, I, $, E, R, a[3], 1548603684, 15), $ = i($, 10), R = l(R, k, I, $, E, a[7], 1548603684, 7), I = i(I, 10), E = l(E, R, k, I, $, a[0], 1548603684, 12), k = i(k, 10), $ = l($, E, R, k, I, a[13], 1548603684, 8), R = i(R, 10), I = l(I, $, E, R, k, a[5], 1548603684, 9), E = i(E, 10), k = l(k, I, $, E, R, a[10], 1548603684, 11), $ = i($, 10), R = l(R, k, I, $, E, a[14], 1548603684, 7), I = i(I, 10), E = l(E, R, k, I, $, a[15], 1548603684, 7), k = i(k, 10), $ = l($, E, R, k, I, a[8], 1548603684, 12), R = i(R, 10), I = l(I, $, E, R, k, a[12], 1548603684, 7), E = i(E, 10), k = l(k, I, $, E, R, a[4], 1548603684, 6), $ = i($, 10), R = l(R, k, I, $, E, a[9], 1548603684, 15), I = i(I, 10), E = l(E, R, k, I, $, a[1], 1548603684, 13), k = i(k, 10), $ = l($, E, R, k, I, a[2], 1548603684, 11), R = i(R, 10), I = d(I, $, E, R, k, a[15], 1836072691, 9), E = i(E, 10), k = d(k, I, $, E, R, a[5], 1836072691, 7), $ = i($, 10), R = d(R, k, I, $, E, a[1], 1836072691, 15), I = i(I, 10), E = d(E, R, k, I, $, a[3], 1836072691, 11), k = i(k, 10), $ = d($, E, R, k, I, a[7], 1836072691, 8), R = i(R, 10), I = d(I, $, E, R, k, a[14], 1836072691, 6), E = i(E, 10), k = d(k, I, $, E, R, a[6], 1836072691, 6), $ = i($, 10), R = d(R, k, I, $, E, a[9], 1836072691, 14), I = i(I, 10), E = d(E, R, k, I, $, a[11], 1836072691, 12), k = i(k, 10), $ = d($, E, R, k, I, a[8], 1836072691, 13), R = i(R, 10), I = d(I, $, E, R, k, a[12], 1836072691, 5), E = i(E, 10), k = d(k, I, $, E, R, a[2], 1836072691, 14), $ = i($, 10), R = d(R, k, I, $, E, a[10], 1836072691, 13), I = i(I, 10), E = d(E, R, k, I, $, a[0], 1836072691, 13), k = i(k, 10), $ = d($, E, R, k, I, a[4], 1836072691, 7), R = i(R, 10), I = d(I, $, E, R, k, a[13], 1836072691, 5), E = i(E, 10), k = e(k, I, $, E, R, a[8], 2053994217, 15), $ = i($, 10), R = e(R, k, I, $, E, a[6], 2053994217, 5), I = i(I, 10), E = e(E, R, k, I, $, a[4], 2053994217, 8), k = i(k, 10), $ = e($, E, R, k, I, a[1], 2053994217, 11), R = i(R, 10), I = e(I, $, E, R, k, a[3], 2053994217, 14), E = i(E, 10), k = e(k, I, $, E, R, a[11], 2053994217, 14), $ = i($, 10), R = e(R, k, I, $, E, a[15], 2053994217, 6), I = i(I, 10), E = e(E, R, k, I, $, a[0], 2053994217, 14), k = i(k, 10), $ = e($, E, R, k, I, a[5], 2053994217, 6), R = i(R, 10), I = e(I, $, E, R, k, a[12], 2053994217, 9), E = i(E, 10), k = e(k, I, $, E, R, a[2], 2053994217, 12), $ = i($, 10), R = e(R, k, I, $, E, a[13], 2053994217, 9), I = i(I, 10), E = e(E, R, k, I, $, a[9], 2053994217, 12), k = i(k, 10), $ = e($, E, R, k, I, a[7], 2053994217, 5), R = i(R, 10), I = e(I, $, E, R, k, a[10], 2053994217, 15), E = i(E, 10), k = e(k, I, $, E, R, a[14], 2053994217, 8), $ = i($, 10), R = f(R, k, I, $, E, a[12], 0, 8), I = i(I, 10), E = f(E, R, k, I, $, a[15], 0, 5), k = i(k, 10), $ = f($, E, R, k, I, a[10], 0, 12), R = i(R, 10), I = f(I, $, E, R, k, a[4], 0, 9), E = i(E, 10), k = f(k, I, $, E, R, a[1], 0, 12), $ = i($, 10), R = f(R, k, I, $, E, a[5], 0, 5), I = i(I, 10), E = f(E, R, k, I, $, a[8], 0, 14), k = i(k, 10), $ = f($, E, R, k, I, a[7], 0, 6), R = i(R, 10), I = f(I, $, E, R, k, a[6], 0, 8), E = i(E, 10), k = f(k, I, $, E, R, a[2], 0, 13), $ = i($, 10), R = f(R, k, I, $, E, a[13], 0, 6), I = i(I, 10), E = f(E, R, k, I, $, a[14], 0, 5), k = i(k, 10), $ = f($, E, R, k, I, a[0], 0, 15), R = i(R, 10), I = f(I, $, E, R, k, a[3], 0, 13), E = i(E, 10), k = f(k, I, $, E, R, a[9], 0, 11), $ = i($, 10), R = f(R, k, I, $, E, a[11], 0, 11), I = i(I, 10);
        var j = this._b + b + I | 0;
        this._b = this._c + g + $ | 0, this._c = this._d + x + E | 0, this._d = this._e + h + R | 0, this._e = this._a + p + k | 0, this._a = j
    }, n.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var a = new Buffer(20);
        return a.writeInt32LE(this._a, 0), a.writeInt32LE(this._b, 4), a.writeInt32LE(this._c, 8), a.writeInt32LE(this._d, 12), a.writeInt32LE(this._e, 16), a
    };

    function i(a, u) {
        return a << u | a >>> 32 - u
    }

    function f(a, u, h, p, b, g, x, E) {
        return i(a + (u ^ h ^ p) + g + x | 0, E) + b | 0
    }

    function e(a, u, h, p, b, g, x, E) {
        return i(a + (u & h | ~u & p) + g + x | 0, E) + b | 0
    }

    function d(a, u, h, p, b, g, x, E) {
        return i(a + ((u | ~h) ^ p) + g + x | 0, E) + b | 0
    }

    function l(a, u, h, p, b, g, x, E) {
        return i(a + (u & p | h & ~p) + g + x | 0, E) + b | 0
    }

    function v(a, u, h, p, b, g, x, E) {
        return i(a + (u ^ (h | ~p)) + g + x | 0, E) + b | 0
    }
    return ripemd160 = n, ripemd160
}
var toBuffer_1, hasRequiredToBuffer;

function requireToBuffer() {
    if (hasRequiredToBuffer) return toBuffer_1;
    hasRequiredToBuffer = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireToBuffer$1(),
        n = typeof Uint8Array < "u",
        i = n && typeof ArrayBuffer < "u",
        f = i && ArrayBuffer.isView;
    return toBuffer_1 = function(e, d, l) {
        if (typeof e == "string" || s.isBuffer(e) || n && e instanceof Uint8Array || f && f(e)) return r(e, d);
        throw new TypeError(l + " must be a string, a Buffer, a Uint8Array, or a DataView")
    }, toBuffer_1
}
var syncBrowser, hasRequiredSyncBrowser;

function requireSyncBrowser() {
    if (hasRequiredSyncBrowser) return syncBrowser;
    hasRequiredSyncBrowser = 1;
    var s = requireMd5(),
        r = requireRipemd160(),
        n = requireSha_js(),
        i = requireSafeBuffer$1().Buffer,
        f = requirePrecondition(),
        e = requireDefaultEncoding(),
        d = requireToBuffer(),
        l = i.alloc(128),
        v = {
            __proto__: null,
            md5: 16,
            sha1: 20,
            sha224: 28,
            sha256: 32,
            sha384: 48,
            sha512: 64,
            "sha512-256": 32,
            ripemd160: 20,
            rmd160: 20
        },
        a = {
            __proto__: null,
            "sha-1": "sha1",
            "sha-224": "sha224",
            "sha-256": "sha256",
            "sha-384": "sha384",
            "sha-512": "sha512",
            "ripemd-160": "ripemd160"
        };

    function u(g) {
        return new r().update(g).digest()
    }

    function h(g) {
        function x(E) {
            return n(g).update(E).digest()
        }
        return g === "rmd160" || g === "ripemd160" ? u : g === "md5" ? s : x
    }

    function p(g, x, E) {
        var R = h(g),
            k = g === "sha512" || g === "sha384" ? 128 : 64;
        x.length > k ? x = R(x) : x.length < k && (x = i.concat([x, l], k));
        for (var I = i.allocUnsafe(k + v[g]), $ = i.allocUnsafe(k + v[g]), j = 0; j < k; j++) I[j] = x[j] ^ 54, $[j] = x[j] ^ 92;
        var O = i.allocUnsafe(k + E + 4);
        I.copy(O, 0, 0, k), this.ipad1 = O, this.ipad2 = I, this.opad = $, this.alg = g, this.blocksize = k, this.hash = R, this.size = v[g]
    }
    p.prototype.run = function(g, x) {
        g.copy(x, this.blocksize);
        var E = this.hash(x);
        return E.copy(this.opad, this.blocksize), this.hash(this.opad)
    };

    function b(g, x, E, R, k) {
        f(E, R), g = d(g, e, "Password"), x = d(x, e, "Salt");
        var I = (k || "sha1").toLowerCase(),
            $ = a[I] || I,
            j = v[$];
        if (typeof j != "number" || !j) throw new TypeError("Digest algorithm not supported: " + k);
        var O = new p($, g, x.length),
            H = i.allocUnsafe(R),
            X = i.allocUnsafe(x.length + 4);
        x.copy(X, 0, 0, x.length);
        for (var W = 0, J = j, D = Math.ceil(R / J), B = 1; B <= D; B++) {
            X.writeUInt32BE(B, x.length);
            for (var y = O.run(X, O.ipad1), t = y, c = 1; c < E; c++) {
                t = O.run(t, O.ipad2);
                for (var _ = 0; _ < J; _++) y[_] ^= t[_]
            }
            y.copy(H, W), W += J
        }
        return H
    }
    return syncBrowser = b, syncBrowser
}
var async, hasRequiredAsync;

function requireAsync() {
    if (hasRequiredAsync) return async;
    hasRequiredAsync = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requirePrecondition(),
        n = requireDefaultEncoding(),
        i = requireSyncBrowser(),
        f = requireToBuffer(),
        e, d = commonjsGlobal.crypto && commonjsGlobal.crypto.subtle,
        l = {
            sha: "SHA-1",
            "sha-1": "SHA-1",
            sha1: "SHA-1",
            sha256: "SHA-256",
            "sha-256": "SHA-256",
            sha384: "SHA-384",
            "sha-384": "SHA-384",
            "sha-512": "SHA-512",
            sha512: "SHA-512"
        },
        v = [],
        a;

    function u() {
        return a || (commonjsGlobal.process && commonjsGlobal.process.nextTick ? a = commonjsGlobal.process.nextTick : commonjsGlobal.queueMicrotask ? a = commonjsGlobal.queueMicrotask : commonjsGlobal.setImmediate ? a = commonjsGlobal.setImmediate : a = commonjsGlobal.setTimeout, a)
    }

    function h(g, x, E, R, k) {
        return d.importKey("raw", g, {
            name: "PBKDF2"
        }, !1, ["deriveBits"]).then(function(I) {
            return d.deriveBits({
                name: "PBKDF2",
                salt: x,
                iterations: E,
                hash: {
                    name: k
                }
            }, I, R << 3)
        }).then(function(I) {
            return s.from(I)
        })
    }

    function p(g) {
        if (commonjsGlobal.process && !commonjsGlobal.process.browser || !d || !d.importKey || !d.deriveBits) return Promise.resolve(!1);
        if (v[g] !== void 0) return v[g];
        e = e || s.alloc(8);
        var x = h(e, e, 10, 128, g).then(function() {
            return !0
        }, function() {
            return !1
        });
        return v[g] = x, x
    }

    function b(g, x) {
        g.then(function(E) {
            u()(function() {
                x(null, E)
            })
        }, function(E) {
            u()(function() {
                x(E)
            })
        })
    }
    return async = function(g, x, E, R, k, I) {
        typeof k == "function" && (I = k, k = void 0), k = k || "sha1";
        var $ = l[k.toLowerCase()];
        if (!$ || typeof commonjsGlobal.Promise != "function") {
            u()(function() {
                var j;
                try {
                    j = i(g, x, E, R, k)
                } catch (O) {
                    I(O);
                    return
                }
                I(null, j)
            });
            return
        }
        if (r(E, R), g = f(g, n, "Password"), x = f(x, n, "Salt"), typeof I != "function") throw new Error("No callback provided to pbkdf2");
        b(p($).then(function(j) {
            return j ? h(g, x, E, R, $) : i(g, x, E, R, k)
        }), I)
    }, async
}
var hasRequiredBrowser$8;

function requireBrowser$8() {
    return hasRequiredBrowser$8 || (hasRequiredBrowser$8 = 1, browser$8.pbkdf2 = requireAsync(), browser$8.pbkdf2Sync = requireSyncBrowser()), browser$8
}
var browser$7 = {},
    des$1 = {},
    utils$3 = {},
    hasRequiredUtils$3;

function requireUtils$3() {
    if (hasRequiredUtils$3) return utils$3;
    hasRequiredUtils$3 = 1, utils$3.readUInt32BE = function(f, e) {
        var d = f[0 + e] << 24 | f[1 + e] << 16 | f[2 + e] << 8 | f[3 + e];
        return d >>> 0
    }, utils$3.writeUInt32BE = function(f, e, d) {
        f[0 + d] = e >>> 24, f[1 + d] = e >>> 16 & 255, f[2 + d] = e >>> 8 & 255, f[3 + d] = e & 255
    }, utils$3.ip = function(f, e, d, l) {
        for (var v = 0, a = 0, u = 6; u >= 0; u -= 2) {
            for (var h = 0; h <= 24; h += 8) v <<= 1, v |= e >>> h + u & 1;
            for (var h = 0; h <= 24; h += 8) v <<= 1, v |= f >>> h + u & 1
        }
        for (var u = 6; u >= 0; u -= 2) {
            for (var h = 1; h <= 25; h += 8) a <<= 1, a |= e >>> h + u & 1;
            for (var h = 1; h <= 25; h += 8) a <<= 1, a |= f >>> h + u & 1
        }
        d[l + 0] = v >>> 0, d[l + 1] = a >>> 0
    }, utils$3.rip = function(f, e, d, l) {
        for (var v = 0, a = 0, u = 0; u < 4; u++)
            for (var h = 24; h >= 0; h -= 8) v <<= 1, v |= e >>> h + u & 1, v <<= 1, v |= f >>> h + u & 1;
        for (var u = 4; u < 8; u++)
            for (var h = 24; h >= 0; h -= 8) a <<= 1, a |= e >>> h + u & 1, a <<= 1, a |= f >>> h + u & 1;
        d[l + 0] = v >>> 0, d[l + 1] = a >>> 0
    }, utils$3.pc1 = function(f, e, d, l) {
        for (var v = 0, a = 0, u = 7; u >= 5; u--) {
            for (var h = 0; h <= 24; h += 8) v <<= 1, v |= e >> h + u & 1;
            for (var h = 0; h <= 24; h += 8) v <<= 1, v |= f >> h + u & 1
        }
        for (var h = 0; h <= 24; h += 8) v <<= 1, v |= e >> h + u & 1;
        for (var u = 1; u <= 3; u++) {
            for (var h = 0; h <= 24; h += 8) a <<= 1, a |= e >> h + u & 1;
            for (var h = 0; h <= 24; h += 8) a <<= 1, a |= f >> h + u & 1
        }
        for (var h = 0; h <= 24; h += 8) a <<= 1, a |= f >> h + u & 1;
        d[l + 0] = v >>> 0, d[l + 1] = a >>> 0
    }, utils$3.r28shl = function(f, e) {
        return f << e & 268435455 | f >>> 28 - e
    };
    var s = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
    utils$3.pc2 = function(f, e, d, l) {
        for (var v = 0, a = 0, u = s.length >>> 1, h = 0; h < u; h++) v <<= 1, v |= f >>> s[h] & 1;
        for (var h = u; h < s.length; h++) a <<= 1, a |= e >>> s[h] & 1;
        d[l + 0] = v >>> 0, d[l + 1] = a >>> 0
    }, utils$3.expand = function(f, e, d) {
        var l = 0,
            v = 0;
        l = (f & 1) << 5 | f >>> 27;
        for (var a = 23; a >= 15; a -= 4) l <<= 6, l |= f >>> a & 63;
        for (var a = 11; a >= 3; a -= 4) v |= f >>> a & 63, v <<= 6;
        v |= (f & 31) << 1 | f >>> 31, e[d + 0] = l >>> 0, e[d + 1] = v >>> 0
    };
    var r = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
    utils$3.substitute = function(f, e) {
        for (var d = 0, l = 0; l < 4; l++) {
            var v = f >>> 18 - l * 6 & 63,
                a = r[l * 64 + v];
            d <<= 4, d |= a
        }
        for (var l = 0; l < 4; l++) {
            var v = e >>> 18 - l * 6 & 63,
                a = r[256 + l * 64 + v];
            d <<= 4, d |= a
        }
        return d >>> 0
    };
    var n = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
    return utils$3.permute = function(f) {
        for (var e = 0, d = 0; d < n.length; d++) e <<= 1, e |= f >>> n[d] & 1;
        return e >>> 0
    }, utils$3.padSplit = function(f, e, d) {
        for (var l = f.toString(2); l.length < e;) l = "0" + l;
        for (var v = [], a = 0; a < e; a += d) v.push(l.slice(a, a + d));
        return v.join(" ")
    }, utils$3
}
var minimalisticAssert, hasRequiredMinimalisticAssert;

function requireMinimalisticAssert() {
    if (hasRequiredMinimalisticAssert) return minimalisticAssert;
    hasRequiredMinimalisticAssert = 1, minimalisticAssert = s;

    function s(r, n) {
        if (!r) throw new Error(n || "Assertion failed")
    }
    return s.equal = function(n, i, f) {
        if (n != i) throw new Error(f || "Assertion failed: " + n + " != " + i)
    }, minimalisticAssert
}
var cipher, hasRequiredCipher;

function requireCipher() {
    if (hasRequiredCipher) return cipher;
    hasRequiredCipher = 1;
    var s = requireMinimalisticAssert();

    function r(n) {
        this.options = n, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0, this.padding = n.padding !== !1
    }
    return cipher = r, r.prototype._init = function() {}, r.prototype.update = function(i) {
        return i.length === 0 ? [] : this.type === "decrypt" ? this._updateDecrypt(i) : this._updateEncrypt(i)
    }, r.prototype._buffer = function(i, f) {
        for (var e = Math.min(this.buffer.length - this.bufferOff, i.length - f), d = 0; d < e; d++) this.buffer[this.bufferOff + d] = i[f + d];
        return this.bufferOff += e, e
    }, r.prototype._flushBuffer = function(i, f) {
        return this._update(this.buffer, 0, i, f), this.bufferOff = 0, this.blockSize
    }, r.prototype._updateEncrypt = function(i) {
        var f = 0,
            e = 0,
            d = (this.bufferOff + i.length) / this.blockSize | 0,
            l = new Array(d * this.blockSize);
        this.bufferOff !== 0 && (f += this._buffer(i, f), this.bufferOff === this.buffer.length && (e += this._flushBuffer(l, e)));
        for (var v = i.length - (i.length - f) % this.blockSize; f < v; f += this.blockSize) this._update(i, f, l, e), e += this.blockSize;
        for (; f < i.length; f++, this.bufferOff++) this.buffer[this.bufferOff] = i[f];
        return l
    }, r.prototype._updateDecrypt = function(i) {
        for (var f = 0, e = 0, d = Math.ceil((this.bufferOff + i.length) / this.blockSize) - 1, l = new Array(d * this.blockSize); d > 0; d--) f += this._buffer(i, f), e += this._flushBuffer(l, e);
        return f += this._buffer(i, f), l
    }, r.prototype.final = function(i) {
        var f;
        i && (f = this.update(i));
        var e;
        return this.type === "encrypt" ? e = this._finalEncrypt() : e = this._finalDecrypt(), f ? f.concat(e) : e
    }, r.prototype._pad = function(i, f) {
        if (f === 0) return !1;
        for (; f < i.length;) i[f++] = 0;
        return !0
    }, r.prototype._finalEncrypt = function() {
        if (!this._pad(this.buffer, this.bufferOff)) return [];
        var i = new Array(this.blockSize);
        return this._update(this.buffer, 0, i, 0), i
    }, r.prototype._unpad = function(i) {
        return i
    }, r.prototype._finalDecrypt = function() {
        s.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
        var i = new Array(this.blockSize);
        return this._flushBuffer(i, 0), this._unpad(i)
    }, cipher
}
var des, hasRequiredDes$1;

function requireDes$1() {
    if (hasRequiredDes$1) return des;
    hasRequiredDes$1 = 1;
    var s = requireMinimalisticAssert(),
        r = requireInherits_browser(),
        n = requireUtils$3(),
        i = requireCipher();

    function f() {
        this.tmp = new Array(2), this.keys = null
    }

    function e(l) {
        i.call(this, l);
        var v = new f;
        this._desState = v, this.deriveKeys(v, l.key)
    }
    r(e, i), des = e, e.create = function(v) {
        return new e(v)
    };
    var d = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    return e.prototype.deriveKeys = function(v, a) {
        v.keys = new Array(32), s.equal(a.length, this.blockSize, "Invalid key length");
        var u = n.readUInt32BE(a, 0),
            h = n.readUInt32BE(a, 4);
        n.pc1(u, h, v.tmp, 0), u = v.tmp[0], h = v.tmp[1];
        for (var p = 0; p < v.keys.length; p += 2) {
            var b = d[p >>> 1];
            u = n.r28shl(u, b), h = n.r28shl(h, b), n.pc2(u, h, v.keys, p)
        }
    }, e.prototype._update = function(v, a, u, h) {
        var p = this._desState,
            b = n.readUInt32BE(v, a),
            g = n.readUInt32BE(v, a + 4);
        n.ip(b, g, p.tmp, 0), b = p.tmp[0], g = p.tmp[1], this.type === "encrypt" ? this._encrypt(p, b, g, p.tmp, 0) : this._decrypt(p, b, g, p.tmp, 0), b = p.tmp[0], g = p.tmp[1], n.writeUInt32BE(u, b, h), n.writeUInt32BE(u, g, h + 4)
    }, e.prototype._pad = function(v, a) {
        if (this.padding === !1) return !1;
        for (var u = v.length - a, h = a; h < v.length; h++) v[h] = u;
        return !0
    }, e.prototype._unpad = function(v) {
        if (this.padding === !1) return v;
        for (var a = v[v.length - 1], u = v.length - a; u < v.length; u++) s.equal(v[u], a);
        return v.slice(0, v.length - a)
    }, e.prototype._encrypt = function(v, a, u, h, p) {
        for (var b = a, g = u, x = 0; x < v.keys.length; x += 2) {
            var E = v.keys[x],
                R = v.keys[x + 1];
            n.expand(g, v.tmp, 0), E ^= v.tmp[0], R ^= v.tmp[1];
            var k = n.substitute(E, R),
                I = n.permute(k),
                $ = g;
            g = (b ^ I) >>> 0, b = $
        }
        n.rip(g, b, h, p)
    }, e.prototype._decrypt = function(v, a, u, h, p) {
        for (var b = u, g = a, x = v.keys.length - 2; x >= 0; x -= 2) {
            var E = v.keys[x],
                R = v.keys[x + 1];
            n.expand(b, v.tmp, 0), E ^= v.tmp[0], R ^= v.tmp[1];
            var k = n.substitute(E, R),
                I = n.permute(k),
                $ = b;
            b = (g ^ I) >>> 0, g = $
        }
        n.rip(b, g, h, p)
    }, des
}
var cbc$1 = {},
    hasRequiredCbc$1;

function requireCbc$1() {
    if (hasRequiredCbc$1) return cbc$1;
    hasRequiredCbc$1 = 1;
    var s = requireMinimalisticAssert(),
        r = requireInherits_browser(),
        n = {};

    function i(e) {
        s.equal(e.length, 8, "Invalid IV length"), this.iv = new Array(8);
        for (var d = 0; d < this.iv.length; d++) this.iv[d] = e[d]
    }

    function f(e) {
        function d(u) {
            e.call(this, u), this._cbcInit()
        }
        r(d, e);
        for (var l = Object.keys(n), v = 0; v < l.length; v++) {
            var a = l[v];
            d.prototype[a] = n[a]
        }
        return d.create = function(h) {
            return new d(h)
        }, d
    }
    return cbc$1.instantiate = f, n._cbcInit = function() {
        var d = new i(this.options.iv);
        this._cbcState = d
    }, n._update = function(d, l, v, a) {
        var u = this._cbcState,
            h = this.constructor.super_.prototype,
            p = u.iv;
        if (this.type === "encrypt") {
            for (var b = 0; b < this.blockSize; b++) p[b] ^= d[l + b];
            h._update.call(this, p, 0, v, a);
            for (var b = 0; b < this.blockSize; b++) p[b] = v[a + b]
        } else {
            h._update.call(this, d, l, v, a);
            for (var b = 0; b < this.blockSize; b++) v[a + b] ^= p[b];
            for (var b = 0; b < this.blockSize; b++) p[b] = d[l + b]
        }
    }, cbc$1
}
var ede, hasRequiredEde;

function requireEde() {
    if (hasRequiredEde) return ede;
    hasRequiredEde = 1;
    var s = requireMinimalisticAssert(),
        r = requireInherits_browser(),
        n = requireCipher(),
        i = requireDes$1();

    function f(d, l) {
        s.equal(l.length, 24, "Invalid key length");
        var v = l.slice(0, 8),
            a = l.slice(8, 16),
            u = l.slice(16, 24);
        d === "encrypt" ? this.ciphers = [i.create({
            type: "encrypt",
            key: v
        }), i.create({
            type: "decrypt",
            key: a
        }), i.create({
            type: "encrypt",
            key: u
        })] : this.ciphers = [i.create({
            type: "decrypt",
            key: u
        }), i.create({
            type: "encrypt",
            key: a
        }), i.create({
            type: "decrypt",
            key: v
        })]
    }

    function e(d) {
        n.call(this, d);
        var l = new f(this.type, this.options.key);
        this._edeState = l
    }
    return r(e, n), ede = e, e.create = function(l) {
        return new e(l)
    }, e.prototype._update = function(l, v, a, u) {
        var h = this._edeState;
        h.ciphers[0]._update(l, v, a, u), h.ciphers[1]._update(a, u, a, u), h.ciphers[2]._update(a, u, a, u)
    }, e.prototype._pad = i.prototype._pad, e.prototype._unpad = i.prototype._unpad, ede
}
var hasRequiredDes;

function requireDes() {
    return hasRequiredDes || (hasRequiredDes = 1, des$1.utils = requireUtils$3(), des$1.Cipher = requireCipher(), des$1.DES = requireDes$1(), des$1.CBC = requireCbc$1(), des$1.EDE = requireEde()), des$1
}
var browserifyDes, hasRequiredBrowserifyDes;

function requireBrowserifyDes() {
    if (hasRequiredBrowserifyDes) return browserifyDes;
    hasRequiredBrowserifyDes = 1;
    var s = requireCipherBase(),
        r = requireDes(),
        n = requireInherits_browser(),
        i = requireSafeBuffer$1().Buffer,
        f = {
            "des-ede3-cbc": r.CBC.instantiate(r.EDE),
            "des-ede3": r.EDE,
            "des-ede-cbc": r.CBC.instantiate(r.EDE),
            "des-ede": r.EDE,
            "des-cbc": r.CBC.instantiate(r.DES),
            "des-ecb": r.DES
        };
    f.des = f["des-cbc"], f.des3 = f["des-ede3-cbc"], browserifyDes = e, n(e, s);

    function e(d) {
        s.call(this);
        var l = d.mode.toLowerCase(),
            v = f[l],
            a;
        d.decrypt ? a = "decrypt" : a = "encrypt";
        var u = d.key;
        i.isBuffer(u) || (u = i.from(u)), (l === "des-ede" || l === "des-ede-cbc") && (u = i.concat([u, u.slice(0, 8)]));
        var h = d.iv;
        i.isBuffer(h) || (h = i.from(h)), this._des = v.create({
            key: u,
            iv: h,
            type: a
        })
    }
    return e.prototype._update = function(d) {
        return i.from(this._des.update(d))
    }, e.prototype._final = function() {
        return i.from(this._des.final())
    }, browserifyDes
}
var browser$6 = {},
    encrypter = {},
    ecb = {},
    hasRequiredEcb;

function requireEcb() {
    return hasRequiredEcb || (hasRequiredEcb = 1, ecb.encrypt = function(s, r) {
        return s._cipher.encryptBlock(r)
    }, ecb.decrypt = function(s, r) {
        return s._cipher.decryptBlock(r)
    }), ecb
}
var cbc = {},
    bufferXor, hasRequiredBufferXor;

function requireBufferXor() {
    return hasRequiredBufferXor || (hasRequiredBufferXor = 1, bufferXor = function(r, n) {
        for (var i = Math.min(r.length, n.length), f = new Buffer(i), e = 0; e < i; ++e) f[e] = r[e] ^ n[e];
        return f
    }), bufferXor
}
var hasRequiredCbc;

function requireCbc() {
    if (hasRequiredCbc) return cbc;
    hasRequiredCbc = 1;
    var s = requireBufferXor();
    return cbc.encrypt = function(r, n) {
        var i = s(n, r._prev);
        return r._prev = r._cipher.encryptBlock(i), r._prev
    }, cbc.decrypt = function(r, n) {
        var i = r._prev;
        r._prev = n;
        var f = r._cipher.decryptBlock(n);
        return s(f, i)
    }, cbc
}
var cfb = {},
    hasRequiredCfb;

function requireCfb() {
    if (hasRequiredCfb) return cfb;
    hasRequiredCfb = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireBufferXor();

    function n(i, f, e) {
        var d = f.length,
            l = r(f, i._cache);
        return i._cache = i._cache.slice(d), i._prev = s.concat([i._prev, e ? f : l]), l
    }
    return cfb.encrypt = function(i, f, e) {
        for (var d = s.allocUnsafe(0), l; f.length;)
            if (i._cache.length === 0 && (i._cache = i._cipher.encryptBlock(i._prev), i._prev = s.allocUnsafe(0)), i._cache.length <= f.length) l = i._cache.length, d = s.concat([d, n(i, f.slice(0, l), e)]), f = f.slice(l);
            else {
                d = s.concat([d, n(i, f, e)]);
                break
            } return d
    }, cfb
}
var cfb8 = {},
    hasRequiredCfb8;

function requireCfb8() {
    if (hasRequiredCfb8) return cfb8;
    hasRequiredCfb8 = 1;
    var s = requireSafeBuffer$1().Buffer;

    function r(n, i, f) {
        var e = n._cipher.encryptBlock(n._prev),
            d = e[0] ^ i;
        return n._prev = s.concat([n._prev.slice(1), s.from([f ? i : d])]), d
    }
    return cfb8.encrypt = function(n, i, f) {
        for (var e = i.length, d = s.allocUnsafe(e), l = -1; ++l < e;) d[l] = r(n, i[l], f);
        return d
    }, cfb8
}
var cfb1 = {},
    hasRequiredCfb1;

function requireCfb1() {
    if (hasRequiredCfb1) return cfb1;
    hasRequiredCfb1 = 1;
    var s = requireSafeBuffer$1().Buffer;

    function r(i, f, e) {
        for (var d, l = -1, v = 8, a = 0, u, h; ++l < v;) d = i._cipher.encryptBlock(i._prev), u = f & 1 << 7 - l ? 128 : 0, h = d[0] ^ u, a += (h & 128) >> l % 8, i._prev = n(i._prev, e ? u : h);
        return a
    }

    function n(i, f) {
        var e = i.length,
            d = -1,
            l = s.allocUnsafe(i.length);
        for (i = s.concat([i, s.from([f])]); ++d < e;) l[d] = i[d] << 1 | i[d + 1] >> 7;
        return l
    }
    return cfb1.encrypt = function(i, f, e) {
        for (var d = f.length, l = s.allocUnsafe(d), v = -1; ++v < d;) l[v] = r(i, f[v], e);
        return l
    }, cfb1
}
var ofb = {},
    hasRequiredOfb;

function requireOfb() {
    if (hasRequiredOfb) return ofb;
    hasRequiredOfb = 1;
    var s = requireBufferXor();

    function r(n) {
        return n._prev = n._cipher.encryptBlock(n._prev), n._prev
    }
    return ofb.encrypt = function(n, i) {
        for (; n._cache.length < i.length;) n._cache = Buffer.concat([n._cache, r(n)]);
        var f = n._cache.slice(0, i.length);
        return n._cache = n._cache.slice(i.length), s(i, f)
    }, ofb
}
var ctr = {},
    incr32_1, hasRequiredIncr32;

function requireIncr32() {
    if (hasRequiredIncr32) return incr32_1;
    hasRequiredIncr32 = 1;

    function s(r) {
        for (var n = r.length, i; n--;)
            if (i = r.readUInt8(n), i === 255) r.writeUInt8(0, n);
            else {
                i++, r.writeUInt8(i, n);
                break
            }
    }
    return incr32_1 = s, incr32_1
}
var hasRequiredCtr;

function requireCtr() {
    if (hasRequiredCtr) return ctr;
    hasRequiredCtr = 1;
    var s = requireBufferXor(),
        r = requireSafeBuffer$1().Buffer,
        n = requireIncr32();

    function i(e) {
        var d = e._cipher.encryptBlockRaw(e._prev);
        return n(e._prev), d
    }
    var f = 16;
    return ctr.encrypt = function(e, d) {
        var l = Math.ceil(d.length / f),
            v = e._cache.length;
        e._cache = r.concat([e._cache, r.allocUnsafe(l * f)]);
        for (var a = 0; a < l; a++) {
            var u = i(e),
                h = v + a * f;
            e._cache.writeUInt32BE(u[0], h + 0), e._cache.writeUInt32BE(u[1], h + 4), e._cache.writeUInt32BE(u[2], h + 8), e._cache.writeUInt32BE(u[3], h + 12)
        }
        var p = e._cache.slice(0, d.length);
        return e._cache = e._cache.slice(d.length), s(d, p)
    }, ctr
}
const aes128 = {
        cipher: "AES",
        key: 128,
        iv: 16,
        mode: "CBC",
        type: "block"
    },
    aes192 = {
        cipher: "AES",
        key: 192,
        iv: 16,
        mode: "CBC",
        type: "block"
    },
    aes256 = {
        cipher: "AES",
        key: 256,
        iv: 16,
        mode: "CBC",
        type: "block"
    },
    require$$2 = {
        "aes-128-ecb": {
            cipher: "AES",
            key: 128,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
        "aes-192-ecb": {
            cipher: "AES",
            key: 192,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
        "aes-256-ecb": {
            cipher: "AES",
            key: 256,
            iv: 0,
            mode: "ECB",
            type: "block"
        },
        "aes-128-cbc": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        "aes-192-cbc": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        "aes-256-cbc": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CBC",
            type: "block"
        },
        aes128,
        aes192,
        aes256,
        "aes-128-cfb": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB",
            type: "stream"
        },
        "aes-192-cfb": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB",
            type: "stream"
        },
        "aes-256-cfb": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB",
            type: "stream"
        },
        "aes-128-cfb8": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        },
        "aes-192-cfb8": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        },
        "aes-256-cfb8": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB8",
            type: "stream"
        },
        "aes-128-cfb1": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        },
        "aes-192-cfb1": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        },
        "aes-256-cfb1": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CFB1",
            type: "stream"
        },
        "aes-128-ofb": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "OFB",
            type: "stream"
        },
        "aes-192-ofb": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "OFB",
            type: "stream"
        },
        "aes-256-ofb": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "OFB",
            type: "stream"
        },
        "aes-128-ctr": {
            cipher: "AES",
            key: 128,
            iv: 16,
            mode: "CTR",
            type: "stream"
        },
        "aes-192-ctr": {
            cipher: "AES",
            key: 192,
            iv: 16,
            mode: "CTR",
            type: "stream"
        },
        "aes-256-ctr": {
            cipher: "AES",
            key: 256,
            iv: 16,
            mode: "CTR",
            type: "stream"
        },
        "aes-128-gcm": {
            cipher: "AES",
            key: 128,
            iv: 12,
            mode: "GCM",
            type: "auth"
        },
        "aes-192-gcm": {
            cipher: "AES",
            key: 192,
            iv: 12,
            mode: "GCM",
            type: "auth"
        },
        "aes-256-gcm": {
            cipher: "AES",
            key: 256,
            iv: 12,
            mode: "GCM",
            type: "auth"
        }
    };
var modes_1, hasRequiredModes$1;

function requireModes$1() {
    if (hasRequiredModes$1) return modes_1;
    hasRequiredModes$1 = 1;
    var s = {
            ECB: requireEcb(),
            CBC: requireCbc(),
            CFB: requireCfb(),
            CFB8: requireCfb8(),
            CFB1: requireCfb1(),
            OFB: requireOfb(),
            CTR: requireCtr(),
            GCM: requireCtr()
        },
        r = require$$2;
    for (var n in r) r[n].module = s[r[n].mode];
    return modes_1 = r, modes_1
}
var aes = {},
    hasRequiredAes;

function requireAes() {
    if (hasRequiredAes) return aes;
    hasRequiredAes = 1;
    var s = requireSafeBuffer$1().Buffer;

    function r(l) {
        s.isBuffer(l) || (l = s.from(l));
        for (var v = l.length / 4 | 0, a = new Array(v), u = 0; u < v; u++) a[u] = l.readUInt32BE(u * 4);
        return a
    }

    function n(l) {
        for (var v = 0; v < l.length; l++) l[v] = 0
    }

    function i(l, v, a, u, h) {
        for (var p = a[0], b = a[1], g = a[2], x = a[3], E = l[0] ^ v[0], R = l[1] ^ v[1], k = l[2] ^ v[2], I = l[3] ^ v[3], $, j, O, H, X = 4, W = 1; W < h; W++) $ = p[E >>> 24] ^ b[R >>> 16 & 255] ^ g[k >>> 8 & 255] ^ x[I & 255] ^ v[X++], j = p[R >>> 24] ^ b[k >>> 16 & 255] ^ g[I >>> 8 & 255] ^ x[E & 255] ^ v[X++], O = p[k >>> 24] ^ b[I >>> 16 & 255] ^ g[E >>> 8 & 255] ^ x[R & 255] ^ v[X++], H = p[I >>> 24] ^ b[E >>> 16 & 255] ^ g[R >>> 8 & 255] ^ x[k & 255] ^ v[X++], E = $, R = j, k = O, I = H;
        return $ = (u[E >>> 24] << 24 | u[R >>> 16 & 255] << 16 | u[k >>> 8 & 255] << 8 | u[I & 255]) ^ v[X++], j = (u[R >>> 24] << 24 | u[k >>> 16 & 255] << 16 | u[I >>> 8 & 255] << 8 | u[E & 255]) ^ v[X++], O = (u[k >>> 24] << 24 | u[I >>> 16 & 255] << 16 | u[E >>> 8 & 255] << 8 | u[R & 255]) ^ v[X++], H = (u[I >>> 24] << 24 | u[E >>> 16 & 255] << 16 | u[R >>> 8 & 255] << 8 | u[k & 255]) ^ v[X++], $ = $ >>> 0, j = j >>> 0, O = O >>> 0, H = H >>> 0, [$, j, O, H]
    }
    var f = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        e = function() {
            for (var l = new Array(256), v = 0; v < 256; v++) v < 128 ? l[v] = v << 1 : l[v] = v << 1 ^ 283;
            for (var a = [], u = [], h = [
                    [],
                    [],
                    [],
                    []
                ], p = [
                    [],
                    [],
                    [],
                    []
                ], b = 0, g = 0, x = 0; x < 256; ++x) {
                var E = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                E = E >>> 8 ^ E & 255 ^ 99, a[b] = E, u[E] = b;
                var R = l[b],
                    k = l[R],
                    I = l[k],
                    $ = l[E] * 257 ^ E * 16843008;
                h[0][b] = $ << 24 | $ >>> 8, h[1][b] = $ << 16 | $ >>> 16, h[2][b] = $ << 8 | $ >>> 24, h[3][b] = $, $ = I * 16843009 ^ k * 65537 ^ R * 257 ^ b * 16843008, p[0][E] = $ << 24 | $ >>> 8, p[1][E] = $ << 16 | $ >>> 16, p[2][E] = $ << 8 | $ >>> 24, p[3][E] = $, b === 0 ? b = g = 1 : (b = R ^ l[l[l[I ^ R]]], g ^= l[l[g]])
            }
            return {
                SBOX: a,
                INV_SBOX: u,
                SUB_MIX: h,
                INV_SUB_MIX: p
            }
        }();

    function d(l) {
        this._key = r(l), this._reset()
    }
    return d.blockSize = 16, d.keySize = 256 / 8, d.prototype.blockSize = d.blockSize, d.prototype.keySize = d.keySize, d.prototype._reset = function() {
        for (var l = this._key, v = l.length, a = v + 6, u = (a + 1) * 4, h = [], p = 0; p < v; p++) h[p] = l[p];
        for (p = v; p < u; p++) {
            var b = h[p - 1];
            p % v === 0 ? (b = b << 8 | b >>> 24, b = e.SBOX[b >>> 24] << 24 | e.SBOX[b >>> 16 & 255] << 16 | e.SBOX[b >>> 8 & 255] << 8 | e.SBOX[b & 255], b ^= f[p / v | 0] << 24) : v > 6 && p % v === 4 && (b = e.SBOX[b >>> 24] << 24 | e.SBOX[b >>> 16 & 255] << 16 | e.SBOX[b >>> 8 & 255] << 8 | e.SBOX[b & 255]), h[p] = h[p - v] ^ b
        }
        for (var g = [], x = 0; x < u; x++) {
            var E = u - x,
                R = h[E - (x % 4 ? 0 : 4)];
            x < 4 || E <= 4 ? g[x] = R : g[x] = e.INV_SUB_MIX[0][e.SBOX[R >>> 24]] ^ e.INV_SUB_MIX[1][e.SBOX[R >>> 16 & 255]] ^ e.INV_SUB_MIX[2][e.SBOX[R >>> 8 & 255]] ^ e.INV_SUB_MIX[3][e.SBOX[R & 255]]
        }
        this._nRounds = a, this._keySchedule = h, this._invKeySchedule = g
    }, d.prototype.encryptBlockRaw = function(l) {
        return l = r(l), i(l, this._keySchedule, e.SUB_MIX, e.SBOX, this._nRounds)
    }, d.prototype.encryptBlock = function(l) {
        var v = this.encryptBlockRaw(l),
            a = s.allocUnsafe(16);
        return a.writeUInt32BE(v[0], 0), a.writeUInt32BE(v[1], 4), a.writeUInt32BE(v[2], 8), a.writeUInt32BE(v[3], 12), a
    }, d.prototype.decryptBlock = function(l) {
        l = r(l);
        var v = l[1];
        l[1] = l[3], l[3] = v;
        var a = i(l, this._invKeySchedule, e.INV_SUB_MIX, e.INV_SBOX, this._nRounds),
            u = s.allocUnsafe(16);
        return u.writeUInt32BE(a[0], 0), u.writeUInt32BE(a[3], 4), u.writeUInt32BE(a[2], 8), u.writeUInt32BE(a[1], 12), u
    }, d.prototype.scrub = function() {
        n(this._keySchedule), n(this._invKeySchedule), n(this._key)
    }, aes.AES = d, aes
}
var ghash, hasRequiredGhash;

function requireGhash() {
    if (hasRequiredGhash) return ghash;
    hasRequiredGhash = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = s.alloc(16, 0);

    function n(e) {
        return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)]
    }

    function i(e) {
        var d = s.allocUnsafe(16);
        return d.writeUInt32BE(e[0] >>> 0, 0), d.writeUInt32BE(e[1] >>> 0, 4), d.writeUInt32BE(e[2] >>> 0, 8), d.writeUInt32BE(e[3] >>> 0, 12), d
    }

    function f(e) {
        this.h = e, this.state = s.alloc(16, 0), this.cache = s.allocUnsafe(0)
    }
    return f.prototype.ghash = function(e) {
        for (var d = -1; ++d < e.length;) this.state[d] ^= e[d];
        this._multiply()
    }, f.prototype._multiply = function() {
        for (var e = n(this.h), d = [0, 0, 0, 0], l, v, a, u = -1; ++u < 128;) {
            for (v = (this.state[~~(u / 8)] & 1 << 7 - u % 8) !== 0, v && (d[0] ^= e[0], d[1] ^= e[1], d[2] ^= e[2], d[3] ^= e[3]), a = (e[3] & 1) !== 0, l = 3; l > 0; l--) e[l] = e[l] >>> 1 | (e[l - 1] & 1) << 31;
            e[0] = e[0] >>> 1, a && (e[0] = e[0] ^ 225 << 24)
        }
        this.state = i(d)
    }, f.prototype.update = function(e) {
        this.cache = s.concat([this.cache, e]);
        for (var d; this.cache.length >= 16;) d = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(d)
    }, f.prototype.final = function(e, d) {
        return this.cache.length && this.ghash(s.concat([this.cache, r], 16)), this.ghash(i([0, e, 0, d])), this.state
    }, ghash = f, ghash
}
var authCipher, hasRequiredAuthCipher;

function requireAuthCipher() {
    if (hasRequiredAuthCipher) return authCipher;
    hasRequiredAuthCipher = 1;
    var s = requireAes(),
        r = requireSafeBuffer$1().Buffer,
        n = requireCipherBase(),
        i = requireInherits_browser(),
        f = requireGhash(),
        e = requireBufferXor(),
        d = requireIncr32();

    function l(u, h) {
        var p = 0;
        u.length !== h.length && p++;
        for (var b = Math.min(u.length, h.length), g = 0; g < b; ++g) p += u[g] ^ h[g];
        return p
    }

    function v(u, h, p) {
        if (h.length === 12) return u._finID = r.concat([h, r.from([0, 0, 0, 1])]), r.concat([h, r.from([0, 0, 0, 2])]);
        var b = new f(p),
            g = h.length,
            x = g % 16;
        b.update(h), x && (x = 16 - x, b.update(r.alloc(x, 0))), b.update(r.alloc(8, 0));
        var E = g * 8,
            R = r.alloc(8);
        R.writeUIntBE(E, 0, 8), b.update(R), u._finID = b.state;
        var k = r.from(u._finID);
        return d(k), k
    }

    function a(u, h, p, b) {
        n.call(this);
        var g = r.alloc(4, 0);
        this._cipher = new s.AES(h);
        var x = this._cipher.encryptBlock(g);
        this._ghash = new f(x), p = v(this, p, x), this._prev = r.from(p), this._cache = r.allocUnsafe(0), this._secCache = r.allocUnsafe(0), this._decrypt = b, this._alen = 0, this._len = 0, this._mode = u, this._authTag = null, this._called = !1
    }
    return i(a, n), a.prototype._update = function(u) {
        if (!this._called && this._alen) {
            var h = 16 - this._alen % 16;
            h < 16 && (h = r.alloc(h, 0), this._ghash.update(h))
        }
        this._called = !0;
        var p = this._mode.encrypt(this, u);
        return this._decrypt ? this._ghash.update(u) : this._ghash.update(p), this._len += u.length, p
    }, a.prototype._final = function() {
        if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
        var u = e(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && l(u, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
        this._authTag = u, this._cipher.scrub()
    }, a.prototype.getAuthTag = function() {
        if (this._decrypt || !r.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }, a.prototype.setAuthTag = function(h) {
        if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = h
    }, a.prototype.setAAD = function(h) {
        if (this._called) throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(h), this._alen += h.length
    }, authCipher = a, authCipher
}
var streamCipher, hasRequiredStreamCipher;

function requireStreamCipher() {
    if (hasRequiredStreamCipher) return streamCipher;
    hasRequiredStreamCipher = 1;
    var s = requireAes(),
        r = requireSafeBuffer$1().Buffer,
        n = requireCipherBase(),
        i = requireInherits_browser();

    function f(e, d, l, v) {
        n.call(this), this._cipher = new s.AES(d), this._prev = r.from(l), this._cache = r.allocUnsafe(0), this._secCache = r.allocUnsafe(0), this._decrypt = v, this._mode = e
    }
    return i(f, n), f.prototype._update = function(e) {
        return this._mode.encrypt(this, e, this._decrypt)
    }, f.prototype._final = function() {
        this._cipher.scrub()
    }, streamCipher = f, streamCipher
}
var evp_bytestokey, hasRequiredEvp_bytestokey;

function requireEvp_bytestokey() {
    if (hasRequiredEvp_bytestokey) return evp_bytestokey;
    hasRequiredEvp_bytestokey = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireMd5_js();

    function n(i, f, e, d) {
        if (s.isBuffer(i) || (i = s.from(i, "binary")), f && (s.isBuffer(f) || (f = s.from(f, "binary")), f.length !== 8)) throw new RangeError("salt should be Buffer with 8 byte length");
        for (var l = e / 8, v = s.alloc(l), a = s.alloc(d || 0), u = s.alloc(0); l > 0 || d > 0;) {
            var h = new r;
            h.update(u), h.update(i), f && h.update(f), u = h.digest();
            var p = 0;
            if (l > 0) {
                var b = v.length - l;
                p = Math.min(l, u.length), u.copy(v, b, 0, p), l -= p
            }
            if (p < u.length && d > 0) {
                var g = a.length - d,
                    x = Math.min(d, u.length - p);
                u.copy(a, g, p, p + x), d -= x
            }
        }
        return u.fill(0), {
            key: v,
            iv: a
        }
    }
    return evp_bytestokey = n, evp_bytestokey
}
var hasRequiredEncrypter;

function requireEncrypter() {
    if (hasRequiredEncrypter) return encrypter;
    hasRequiredEncrypter = 1;
    var s = requireModes$1(),
        r = requireAuthCipher(),
        n = requireSafeBuffer$1().Buffer,
        i = requireStreamCipher(),
        f = requireCipherBase(),
        e = requireAes(),
        d = requireEvp_bytestokey(),
        l = requireInherits_browser();

    function v(b, g, x) {
        f.call(this), this._cache = new u, this._cipher = new e.AES(g), this._prev = n.from(x), this._mode = b, this._autopadding = !0
    }
    l(v, f), v.prototype._update = function(b) {
        this._cache.add(b);
        for (var g, x, E = []; g = this._cache.get();) x = this._mode.encrypt(this, g), E.push(x);
        return n.concat(E)
    };
    var a = n.alloc(16, 16);
    v.prototype._final = function() {
        var b = this._cache.flush();
        if (this._autopadding) return b = this._mode.encrypt(this, b), this._cipher.scrub(), b;
        if (!b.equals(a)) throw this._cipher.scrub(), new Error("data not multiple of block length")
    }, v.prototype.setAutoPadding = function(b) {
        return this._autopadding = !!b, this
    };

    function u() {
        this.cache = n.allocUnsafe(0)
    }
    u.prototype.add = function(b) {
        this.cache = n.concat([this.cache, b])
    }, u.prototype.get = function() {
        if (this.cache.length > 15) {
            var b = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16), b
        }
        return null
    }, u.prototype.flush = function() {
        for (var b = 16 - this.cache.length, g = n.allocUnsafe(b), x = -1; ++x < b;) g.writeUInt8(b, x);
        return n.concat([this.cache, g])
    };

    function h(b, g, x) {
        var E = s[b.toLowerCase()];
        if (!E) throw new TypeError("invalid suite type");
        if (typeof g == "string" && (g = n.from(g)), g.length !== E.key / 8) throw new TypeError("invalid key length " + g.length);
        if (typeof x == "string" && (x = n.from(x)), E.mode !== "GCM" && x.length !== E.iv) throw new TypeError("invalid iv length " + x.length);
        return E.type === "stream" ? new i(E.module, g, x) : E.type === "auth" ? new r(E.module, g, x) : new v(E.module, g, x)
    }

    function p(b, g) {
        var x = s[b.toLowerCase()];
        if (!x) throw new TypeError("invalid suite type");
        var E = d(g, !1, x.key, x.iv);
        return h(b, E.key, E.iv)
    }
    return encrypter.createCipheriv = h, encrypter.createCipher = p, encrypter
}
var decrypter = {},
    hasRequiredDecrypter;

function requireDecrypter() {
    if (hasRequiredDecrypter) return decrypter;
    hasRequiredDecrypter = 1;
    var s = requireAuthCipher(),
        r = requireSafeBuffer$1().Buffer,
        n = requireModes$1(),
        i = requireStreamCipher(),
        f = requireCipherBase(),
        e = requireAes(),
        d = requireEvp_bytestokey(),
        l = requireInherits_browser();

    function v(b, g, x) {
        f.call(this), this._cache = new a, this._last = void 0, this._cipher = new e.AES(g), this._prev = r.from(x), this._mode = b, this._autopadding = !0
    }
    l(v, f), v.prototype._update = function(b) {
        this._cache.add(b);
        for (var g, x, E = []; g = this._cache.get(this._autopadding);) x = this._mode.decrypt(this, g), E.push(x);
        return r.concat(E)
    }, v.prototype._final = function() {
        var b = this._cache.flush();
        if (this._autopadding) return u(this._mode.decrypt(this, b));
        if (b) throw new Error("data not multiple of block length")
    }, v.prototype.setAutoPadding = function(b) {
        return this._autopadding = !!b, this
    };

    function a() {
        this.cache = r.allocUnsafe(0)
    }
    a.prototype.add = function(b) {
        this.cache = r.concat([this.cache, b])
    }, a.prototype.get = function(b) {
        var g;
        if (b) {
            if (this.cache.length > 16) return g = this.cache.slice(0, 16), this.cache = this.cache.slice(16), g
        } else if (this.cache.length >= 16) return g = this.cache.slice(0, 16), this.cache = this.cache.slice(16), g;
        return null
    }, a.prototype.flush = function() {
        if (this.cache.length) return this.cache
    };

    function u(b) {
        var g = b[15];
        if (g < 1 || g > 16) throw new Error("unable to decrypt data");
        for (var x = -1; ++x < g;)
            if (b[x + (16 - g)] !== g) throw new Error("unable to decrypt data");
        if (g !== 16) return b.slice(0, 16 - g)
    }

    function h(b, g, x) {
        var E = n[b.toLowerCase()];
        if (!E) throw new TypeError("invalid suite type");
        if (typeof x == "string" && (x = r.from(x)), E.mode !== "GCM" && x.length !== E.iv) throw new TypeError("invalid iv length " + x.length);
        if (typeof g == "string" && (g = r.from(g)), g.length !== E.key / 8) throw new TypeError("invalid key length " + g.length);
        return E.type === "stream" ? new i(E.module, g, x, !0) : E.type === "auth" ? new s(E.module, g, x, !0) : new v(E.module, g, x)
    }

    function p(b, g) {
        var x = n[b.toLowerCase()];
        if (!x) throw new TypeError("invalid suite type");
        var E = d(g, !1, x.key, x.iv);
        return h(b, E.key, E.iv)
    }
    return decrypter.createDecipher = p, decrypter.createDecipheriv = h, decrypter
}
var hasRequiredBrowser$7;

function requireBrowser$7() {
    if (hasRequiredBrowser$7) return browser$6;
    hasRequiredBrowser$7 = 1;
    var s = requireEncrypter(),
        r = requireDecrypter(),
        n = require$$2;

    function i() {
        return Object.keys(n)
    }
    return browser$6.createCipher = browser$6.Cipher = s.createCipher, browser$6.createCipheriv = browser$6.Cipheriv = s.createCipheriv, browser$6.createDecipher = browser$6.Decipher = r.createDecipher, browser$6.createDecipheriv = browser$6.Decipheriv = r.createDecipheriv, browser$6.listCiphers = browser$6.getCiphers = i, browser$6
}
var modes = {},
    hasRequiredModes;

function requireModes() {
    return hasRequiredModes || (hasRequiredModes = 1, function(s) {
        s["des-ecb"] = {
            key: 8,
            iv: 0
        }, s["des-cbc"] = s.des = {
            key: 8,
            iv: 8
        }, s["des-ede3-cbc"] = s.des3 = {
            key: 24,
            iv: 8
        }, s["des-ede3"] = {
            key: 24,
            iv: 0
        }, s["des-ede-cbc"] = {
            key: 16,
            iv: 8
        }, s["des-ede"] = {
            key: 16,
            iv: 0
        }
    }(modes)), modes
}
var hasRequiredBrowser$6;

function requireBrowser$6() {
    if (hasRequiredBrowser$6) return browser$7;
    hasRequiredBrowser$6 = 1;
    var s = requireBrowserifyDes(),
        r = requireBrowser$7(),
        n = requireModes$1(),
        i = requireModes(),
        f = requireEvp_bytestokey();

    function e(u, h) {
        u = u.toLowerCase();
        var p, b;
        if (n[u]) p = n[u].key, b = n[u].iv;
        else if (i[u]) p = i[u].key * 8, b = i[u].iv;
        else throw new TypeError("invalid suite type");
        var g = f(h, !1, p, b);
        return l(u, g.key, g.iv)
    }

    function d(u, h) {
        u = u.toLowerCase();
        var p, b;
        if (n[u]) p = n[u].key, b = n[u].iv;
        else if (i[u]) p = i[u].key * 8, b = i[u].iv;
        else throw new TypeError("invalid suite type");
        var g = f(h, !1, p, b);
        return v(u, g.key, g.iv)
    }

    function l(u, h, p) {
        if (u = u.toLowerCase(), n[u]) return r.createCipheriv(u, h, p);
        if (i[u]) return new s({
            key: h,
            iv: p,
            mode: u
        });
        throw new TypeError("invalid suite type")
    }

    function v(u, h, p) {
        if (u = u.toLowerCase(), n[u]) return r.createDecipheriv(u, h, p);
        if (i[u]) return new s({
            key: h,
            iv: p,
            mode: u,
            decrypt: !0
        });
        throw new TypeError("invalid suite type")
    }

    function a() {
        return Object.keys(i).concat(r.getCiphers())
    }
    return browser$7.createCipher = browser$7.Cipher = e, browser$7.createCipheriv = browser$7.Cipheriv = l, browser$7.createDecipher = browser$7.Decipher = d, browser$7.createDecipheriv = browser$7.Decipheriv = v, browser$7.listCiphers = browser$7.getCiphers = a, browser$7
}
var browser$5 = {},
    bn$5 = {
        exports: {}
    },
    bn$4 = bn$5.exports,
    hasRequiredBn$2;

function requireBn$2() {
    return hasRequiredBn$2 || (hasRequiredBn$2 = 1, function(s) {
        (function(r, n) {
            function i(D, B) {
                if (!D) throw new Error(B || "Assertion failed")
            }

            function f(D, B) {
                D.super_ = B;
                var y = function() {};
                y.prototype = B.prototype, D.prototype = new y, D.prototype.constructor = D
            }

            function e(D, B, y) {
                if (e.isBN(D)) return D;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, D !== null && ((B === "le" || B === "be") && (y = B, B = 10), this._init(D || 0, B || 10, y || "be"))
            }
            typeof r == "object" ? r.exports = e : n.BN = e, e.BN = e, e.wordSize = 26;
            var d;
            try {
                typeof window < "u" && typeof window.Buffer < "u" ? d = window.Buffer : d = requireDist$1().Buffer
            } catch {}
            e.isBN = function(B) {
                return B instanceof e ? !0 : B !== null && typeof B == "object" && B.constructor.wordSize === e.wordSize && Array.isArray(B.words)
            }, e.max = function(B, y) {
                return B.cmp(y) > 0 ? B : y
            }, e.min = function(B, y) {
                return B.cmp(y) < 0 ? B : y
            }, e.prototype._init = function(B, y, t) {
                if (typeof B == "number") return this._initNumber(B, y, t);
                if (typeof B == "object") return this._initArray(B, y, t);
                y === "hex" && (y = 16), i(y === (y | 0) && y >= 2 && y <= 36), B = B.toString().replace(/\s+/g, "");
                var c = 0;
                B[0] === "-" && (c++, this.negative = 1), c < B.length && (y === 16 ? this._parseHex(B, c, t) : (this._parseBase(B, y, c), t === "le" && this._initArray(this.toArray(), y, t)))
            }, e.prototype._initNumber = function(B, y, t) {
                B < 0 && (this.negative = 1, B = -B), B < 67108864 ? (this.words = [B & 67108863], this.length = 1) : B < 4503599627370496 ? (this.words = [B & 67108863, B / 67108864 & 67108863], this.length = 2) : (i(B < 9007199254740992), this.words = [B & 67108863, B / 67108864 & 67108863, 1], this.length = 3), t === "le" && this._initArray(this.toArray(), y, t)
            }, e.prototype._initArray = function(B, y, t) {
                if (i(typeof B.length == "number"), B.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(B.length / 3), this.words = new Array(this.length);
                for (var c = 0; c < this.length; c++) this.words[c] = 0;
                var _, w, q = 0;
                if (t === "be")
                    for (c = B.length - 1, _ = 0; c >= 0; c -= 3) w = B[c] | B[c - 1] << 8 | B[c - 2] << 16, this.words[_] |= w << q & 67108863, this.words[_ + 1] = w >>> 26 - q & 67108863, q += 24, q >= 26 && (q -= 26, _++);
                else if (t === "le")
                    for (c = 0, _ = 0; c < B.length; c += 3) w = B[c] | B[c + 1] << 8 | B[c + 2] << 16, this.words[_] |= w << q & 67108863, this.words[_ + 1] = w >>> 26 - q & 67108863, q += 24, q >= 26 && (q -= 26, _++);
                return this.strip()
            };

            function l(D, B) {
                var y = D.charCodeAt(B);
                return y >= 65 && y <= 70 ? y - 55 : y >= 97 && y <= 102 ? y - 87 : y - 48 & 15
            }

            function v(D, B, y) {
                var t = l(D, y);
                return y - 1 >= B && (t |= l(D, y - 1) << 4), t
            }
            e.prototype._parseHex = function(B, y, t) {
                this.length = Math.ceil((B.length - y) / 6), this.words = new Array(this.length);
                for (var c = 0; c < this.length; c++) this.words[c] = 0;
                var _ = 0,
                    w = 0,
                    q;
                if (t === "be")
                    for (c = B.length - 1; c >= y; c -= 2) q = v(B, y, c) << _, this.words[w] |= q & 67108863, _ >= 18 ? (_ -= 18, w += 1, this.words[w] |= q >>> 26) : _ += 8;
                else {
                    var A = B.length - y;
                    for (c = A % 2 === 0 ? y + 1 : y; c < B.length; c += 2) q = v(B, y, c) << _, this.words[w] |= q & 67108863, _ >= 18 ? (_ -= 18, w += 1, this.words[w] |= q >>> 26) : _ += 8
                }
                this.strip()
            };

            function a(D, B, y, t) {
                for (var c = 0, _ = Math.min(D.length, y), w = B; w < _; w++) {
                    var q = D.charCodeAt(w) - 48;
                    c *= t, q >= 49 ? c += q - 49 + 10 : q >= 17 ? c += q - 17 + 10 : c += q
                }
                return c
            }
            e.prototype._parseBase = function(B, y, t) {
                this.words = [0], this.length = 1;
                for (var c = 0, _ = 1; _ <= 67108863; _ *= y) c++;
                c--, _ = _ / y | 0;
                for (var w = B.length - t, q = w % c, A = Math.min(w, w - q) + t, M = 0, S = t; S < A; S += c) M = a(B, S, S + c, y), this.imuln(_), this.words[0] + M < 67108864 ? this.words[0] += M : this._iaddn(M);
                if (q !== 0) {
                    var m = 1;
                    for (M = a(B, S, B.length, y), S = 0; S < q; S++) m *= y;
                    this.imuln(m), this.words[0] + M < 67108864 ? this.words[0] += M : this._iaddn(M)
                }
                this.strip()
            }, e.prototype.copy = function(B) {
                B.words = new Array(this.length);
                for (var y = 0; y < this.length; y++) B.words[y] = this.words[y];
                B.length = this.length, B.negative = this.negative, B.red = this.red
            }, e.prototype.clone = function() {
                var B = new e(null);
                return this.copy(B), B
            }, e.prototype._expand = function(B) {
                for (; this.length < B;) this.words[this.length++] = 0;
                return this
            }, e.prototype.strip = function() {
                for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                return this._normSign()
            }, e.prototype._normSign = function() {
                return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
            }, e.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            };
            var u = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                h = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                p = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            e.prototype.toString = function(B, y) {
                B = B || 10, y = y | 0 || 1;
                var t;
                if (B === 16 || B === "hex") {
                    t = "";
                    for (var c = 0, _ = 0, w = 0; w < this.length; w++) {
                        var q = this.words[w],
                            A = ((q << c | _) & 16777215).toString(16);
                        _ = q >>> 24 - c & 16777215, c += 2, c >= 26 && (c -= 26, w--), _ !== 0 || w !== this.length - 1 ? t = u[6 - A.length] + A + t : t = A + t
                    }
                    for (_ !== 0 && (t = _.toString(16) + t); t.length % y !== 0;) t = "0" + t;
                    return this.negative !== 0 && (t = "-" + t), t
                }
                if (B === (B | 0) && B >= 2 && B <= 36) {
                    var M = h[B],
                        S = p[B];
                    t = "";
                    var m = this.clone();
                    for (m.negative = 0; !m.isZero();) {
                        var C = m.modn(S).toString(B);
                        m = m.idivn(S), m.isZero() ? t = C + t : t = u[M - C.length] + C + t
                    }
                    for (this.isZero() && (t = "0" + t); t.length % y !== 0;) t = "0" + t;
                    return this.negative !== 0 && (t = "-" + t), t
                }
                i(!1, "Base should be between 2 and 36")
            }, e.prototype.toNumber = function() {
                var B = this.words[0];
                return this.length === 2 ? B += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? B += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -B : B
            }, e.prototype.toJSON = function() {
                return this.toString(16)
            }, e.prototype.toBuffer = function(B, y) {
                return i(typeof d < "u"), this.toArrayLike(d, B, y)
            }, e.prototype.toArray = function(B, y) {
                return this.toArrayLike(Array, B, y)
            }, e.prototype.toArrayLike = function(B, y, t) {
                var c = this.byteLength(),
                    _ = t || Math.max(1, c);
                i(c <= _, "byte array longer than desired length"), i(_ > 0, "Requested array length <= 0"), this.strip();
                var w = y === "le",
                    q = new B(_),
                    A, M, S = this.clone();
                if (w) {
                    for (M = 0; !S.isZero(); M++) A = S.andln(255), S.iushrn(8), q[M] = A;
                    for (; M < _; M++) q[M] = 0
                } else {
                    for (M = 0; M < _ - c; M++) q[M] = 0;
                    for (M = 0; !S.isZero(); M++) A = S.andln(255), S.iushrn(8), q[_ - M - 1] = A
                }
                return q
            }, Math.clz32 ? e.prototype._countBits = function(B) {
                return 32 - Math.clz32(B)
            } : e.prototype._countBits = function(B) {
                var y = B,
                    t = 0;
                return y >= 4096 && (t += 13, y >>>= 13), y >= 64 && (t += 7, y >>>= 7), y >= 8 && (t += 4, y >>>= 4), y >= 2 && (t += 2, y >>>= 2), t + y
            }, e.prototype._zeroBits = function(B) {
                if (B === 0) return 26;
                var y = B,
                    t = 0;
                return (y & 8191) === 0 && (t += 13, y >>>= 13), (y & 127) === 0 && (t += 7, y >>>= 7), (y & 15) === 0 && (t += 4, y >>>= 4), (y & 3) === 0 && (t += 2, y >>>= 2), (y & 1) === 0 && t++, t
            }, e.prototype.bitLength = function() {
                var B = this.words[this.length - 1],
                    y = this._countBits(B);
                return (this.length - 1) * 26 + y
            };

            function b(D) {
                for (var B = new Array(D.bitLength()), y = 0; y < B.length; y++) {
                    var t = y / 26 | 0,
                        c = y % 26;
                    B[y] = (D.words[t] & 1 << c) >>> c
                }
                return B
            }
            e.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var B = 0, y = 0; y < this.length; y++) {
                    var t = this._zeroBits(this.words[y]);
                    if (B += t, t !== 26) break
                }
                return B
            }, e.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }, e.prototype.toTwos = function(B) {
                return this.negative !== 0 ? this.abs().inotn(B).iaddn(1) : this.clone()
            }, e.prototype.fromTwos = function(B) {
                return this.testn(B - 1) ? this.notn(B).iaddn(1).ineg() : this.clone()
            }, e.prototype.isNeg = function() {
                return this.negative !== 0
            }, e.prototype.neg = function() {
                return this.clone().ineg()
            }, e.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this
            }, e.prototype.iuor = function(B) {
                for (; this.length < B.length;) this.words[this.length++] = 0;
                for (var y = 0; y < B.length; y++) this.words[y] = this.words[y] | B.words[y];
                return this.strip()
            }, e.prototype.ior = function(B) {
                return i((this.negative | B.negative) === 0), this.iuor(B)
            }, e.prototype.or = function(B) {
                return this.length > B.length ? this.clone().ior(B) : B.clone().ior(this)
            }, e.prototype.uor = function(B) {
                return this.length > B.length ? this.clone().iuor(B) : B.clone().iuor(this)
            }, e.prototype.iuand = function(B) {
                var y;
                this.length > B.length ? y = B : y = this;
                for (var t = 0; t < y.length; t++) this.words[t] = this.words[t] & B.words[t];
                return this.length = y.length, this.strip()
            }, e.prototype.iand = function(B) {
                return i((this.negative | B.negative) === 0), this.iuand(B)
            }, e.prototype.and = function(B) {
                return this.length > B.length ? this.clone().iand(B) : B.clone().iand(this)
            }, e.prototype.uand = function(B) {
                return this.length > B.length ? this.clone().iuand(B) : B.clone().iuand(this)
            }, e.prototype.iuxor = function(B) {
                var y, t;
                this.length > B.length ? (y = this, t = B) : (y = B, t = this);
                for (var c = 0; c < t.length; c++) this.words[c] = y.words[c] ^ t.words[c];
                if (this !== y)
                    for (; c < y.length; c++) this.words[c] = y.words[c];
                return this.length = y.length, this.strip()
            }, e.prototype.ixor = function(B) {
                return i((this.negative | B.negative) === 0), this.iuxor(B)
            }, e.prototype.xor = function(B) {
                return this.length > B.length ? this.clone().ixor(B) : B.clone().ixor(this)
            }, e.prototype.uxor = function(B) {
                return this.length > B.length ? this.clone().iuxor(B) : B.clone().iuxor(this)
            }, e.prototype.inotn = function(B) {
                i(typeof B == "number" && B >= 0);
                var y = Math.ceil(B / 26) | 0,
                    t = B % 26;
                this._expand(y), t > 0 && y--;
                for (var c = 0; c < y; c++) this.words[c] = ~this.words[c] & 67108863;
                return t > 0 && (this.words[c] = ~this.words[c] & 67108863 >> 26 - t), this.strip()
            }, e.prototype.notn = function(B) {
                return this.clone().inotn(B)
            }, e.prototype.setn = function(B, y) {
                i(typeof B == "number" && B >= 0);
                var t = B / 26 | 0,
                    c = B % 26;
                return this._expand(t + 1), y ? this.words[t] = this.words[t] | 1 << c : this.words[t] = this.words[t] & ~(1 << c), this.strip()
            }, e.prototype.iadd = function(B) {
                var y;
                if (this.negative !== 0 && B.negative === 0) return this.negative = 0, y = this.isub(B), this.negative ^= 1, this._normSign();
                if (this.negative === 0 && B.negative !== 0) return B.negative = 0, y = this.isub(B), B.negative = 1, y._normSign();
                var t, c;
                this.length > B.length ? (t = this, c = B) : (t = B, c = this);
                for (var _ = 0, w = 0; w < c.length; w++) y = (t.words[w] | 0) + (c.words[w] | 0) + _, this.words[w] = y & 67108863, _ = y >>> 26;
                for (; _ !== 0 && w < t.length; w++) y = (t.words[w] | 0) + _, this.words[w] = y & 67108863, _ = y >>> 26;
                if (this.length = t.length, _ !== 0) this.words[this.length] = _, this.length++;
                else if (t !== this)
                    for (; w < t.length; w++) this.words[w] = t.words[w];
                return this
            }, e.prototype.add = function(B) {
                var y;
                return B.negative !== 0 && this.negative === 0 ? (B.negative = 0, y = this.sub(B), B.negative ^= 1, y) : B.negative === 0 && this.negative !== 0 ? (this.negative = 0, y = B.sub(this), this.negative = 1, y) : this.length > B.length ? this.clone().iadd(B) : B.clone().iadd(this)
            }, e.prototype.isub = function(B) {
                if (B.negative !== 0) {
                    B.negative = 0;
                    var y = this.iadd(B);
                    return B.negative = 1, y._normSign()
                } else if (this.negative !== 0) return this.negative = 0, this.iadd(B), this.negative = 1, this._normSign();
                var t = this.cmp(B);
                if (t === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                var c, _;
                t > 0 ? (c = this, _ = B) : (c = B, _ = this);
                for (var w = 0, q = 0; q < _.length; q++) y = (c.words[q] | 0) - (_.words[q] | 0) + w, w = y >> 26, this.words[q] = y & 67108863;
                for (; w !== 0 && q < c.length; q++) y = (c.words[q] | 0) + w, w = y >> 26, this.words[q] = y & 67108863;
                if (w === 0 && q < c.length && c !== this)
                    for (; q < c.length; q++) this.words[q] = c.words[q];
                return this.length = Math.max(this.length, q), c !== this && (this.negative = 1), this.strip()
            }, e.prototype.sub = function(B) {
                return this.clone().isub(B)
            };

            function g(D, B, y) {
                y.negative = B.negative ^ D.negative;
                var t = D.length + B.length | 0;
                y.length = t, t = t - 1 | 0;
                var c = D.words[0] | 0,
                    _ = B.words[0] | 0,
                    w = c * _,
                    q = w & 67108863,
                    A = w / 67108864 | 0;
                y.words[0] = q;
                for (var M = 1; M < t; M++) {
                    for (var S = A >>> 26, m = A & 67108863, C = Math.min(M, B.length - 1), L = Math.max(0, M - D.length + 1); L <= C; L++) {
                        var U = M - L | 0;
                        c = D.words[U] | 0, _ = B.words[L] | 0, w = c * _ + m, S += w / 67108864 | 0, m = w & 67108863
                    }
                    y.words[M] = m | 0, A = S | 0
                }
                return A !== 0 ? y.words[M] = A | 0 : y.length--, y.strip()
            }
            var x = function(B, y, t) {
                var c = B.words,
                    _ = y.words,
                    w = t.words,
                    q = 0,
                    A, M, S, m = c[0] | 0,
                    C = m & 8191,
                    L = m >>> 13,
                    U = c[1] | 0,
                    K = U & 8191,
                    P = U >>> 13,
                    N = c[2] | 0,
                    z = N & 8191,
                    V = N >>> 13,
                    Q = c[3] | 0,
                    G = Q & 8191,
                    te = Q >>> 13,
                    ve = c[4] | 0,
                    ee = ve & 8191,
                    De = ve >>> 13,
                    me = c[5] | 0,
                    re = me & 8191,
                    Ne = me >>> 13,
                    ye = c[6] | 0,
                    Y = ye & 8191,
                    $e = ye >>> 13,
                    be = c[7] | 0,
                    Z = be & 8191,
                    Pe = be >>> 13,
                    ge = c[8] | 0,
                    ie = ge & 8191,
                    je = ge >>> 13,
                    xe = c[9] | 0,
                    ne = xe & 8191,
                    Te = xe >>> 13,
                    Me = _[0] | 0,
                    ae = Me & 8191,
                    Oe = Me >>> 13,
                    qe = _[1] | 0,
                    fe = qe & 8191,
                    ze = qe >>> 13,
                    Se = _[2] | 0,
                    se = Se & 8191,
                    Le = Se >>> 13,
                    Be = _[3] | 0,
                    oe = Be & 8191,
                    Ue = Be >>> 13,
                    Ae = _[4] | 0,
                    ue = Ae & 8191,
                    We = Ae >>> 13,
                    Ee = _[5] | 0,
                    he = Ee & 8191,
                    He = Ee >>> 13,
                    Re = _[6] | 0,
                    ce = Re & 8191,
                    Ke = Re >>> 13,
                    ke = _[7] | 0,
                    de = ke & 8191,
                    Fe = ke >>> 13,
                    Ce = _[8] | 0,
                    le = Ce & 8191,
                    Xe = Ce >>> 13,
                    Ie = _[9] | 0,
                    pe = Ie & 8191,
                    Ve = Ie >>> 13;
                t.negative = B.negative ^ y.negative, t.length = 19, A = Math.imul(C, ae), M = Math.imul(C, Oe), M = M + Math.imul(L, ae) | 0, S = Math.imul(L, Oe);
                var _e = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (_e >>> 26) | 0, _e &= 67108863, A = Math.imul(K, ae), M = Math.imul(K, Oe), M = M + Math.imul(P, ae) | 0, S = Math.imul(P, Oe), A = A + Math.imul(C, fe) | 0, M = M + Math.imul(C, ze) | 0, M = M + Math.imul(L, fe) | 0, S = S + Math.imul(L, ze) | 0;
                var we = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, A = Math.imul(z, ae), M = Math.imul(z, Oe), M = M + Math.imul(V, ae) | 0, S = Math.imul(V, Oe), A = A + Math.imul(K, fe) | 0, M = M + Math.imul(K, ze) | 0, M = M + Math.imul(P, fe) | 0, S = S + Math.imul(P, ze) | 0, A = A + Math.imul(C, se) | 0, M = M + Math.imul(C, Le) | 0, M = M + Math.imul(L, se) | 0, S = S + Math.imul(L, Le) | 0;
                var Ge = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, A = Math.imul(G, ae), M = Math.imul(G, Oe), M = M + Math.imul(te, ae) | 0, S = Math.imul(te, Oe), A = A + Math.imul(z, fe) | 0, M = M + Math.imul(z, ze) | 0, M = M + Math.imul(V, fe) | 0, S = S + Math.imul(V, ze) | 0, A = A + Math.imul(K, se) | 0, M = M + Math.imul(K, Le) | 0, M = M + Math.imul(P, se) | 0, S = S + Math.imul(P, Le) | 0, A = A + Math.imul(C, oe) | 0, M = M + Math.imul(C, Ue) | 0, M = M + Math.imul(L, oe) | 0, S = S + Math.imul(L, Ue) | 0;
                var Je = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, A = Math.imul(ee, ae), M = Math.imul(ee, Oe), M = M + Math.imul(De, ae) | 0, S = Math.imul(De, Oe), A = A + Math.imul(G, fe) | 0, M = M + Math.imul(G, ze) | 0, M = M + Math.imul(te, fe) | 0, S = S + Math.imul(te, ze) | 0, A = A + Math.imul(z, se) | 0, M = M + Math.imul(z, Le) | 0, M = M + Math.imul(V, se) | 0, S = S + Math.imul(V, Le) | 0, A = A + Math.imul(K, oe) | 0, M = M + Math.imul(K, Ue) | 0, M = M + Math.imul(P, oe) | 0, S = S + Math.imul(P, Ue) | 0, A = A + Math.imul(C, ue) | 0, M = M + Math.imul(C, We) | 0, M = M + Math.imul(L, ue) | 0, S = S + Math.imul(L, We) | 0;
                var Ye = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, A = Math.imul(re, ae), M = Math.imul(re, Oe), M = M + Math.imul(Ne, ae) | 0, S = Math.imul(Ne, Oe), A = A + Math.imul(ee, fe) | 0, M = M + Math.imul(ee, ze) | 0, M = M + Math.imul(De, fe) | 0, S = S + Math.imul(De, ze) | 0, A = A + Math.imul(G, se) | 0, M = M + Math.imul(G, Le) | 0, M = M + Math.imul(te, se) | 0, S = S + Math.imul(te, Le) | 0, A = A + Math.imul(z, oe) | 0, M = M + Math.imul(z, Ue) | 0, M = M + Math.imul(V, oe) | 0, S = S + Math.imul(V, Ue) | 0, A = A + Math.imul(K, ue) | 0, M = M + Math.imul(K, We) | 0, M = M + Math.imul(P, ue) | 0, S = S + Math.imul(P, We) | 0, A = A + Math.imul(C, he) | 0, M = M + Math.imul(C, He) | 0, M = M + Math.imul(L, he) | 0, S = S + Math.imul(L, He) | 0;
                var Qe = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, A = Math.imul(Y, ae), M = Math.imul(Y, Oe), M = M + Math.imul($e, ae) | 0, S = Math.imul($e, Oe), A = A + Math.imul(re, fe) | 0, M = M + Math.imul(re, ze) | 0, M = M + Math.imul(Ne, fe) | 0, S = S + Math.imul(Ne, ze) | 0, A = A + Math.imul(ee, se) | 0, M = M + Math.imul(ee, Le) | 0, M = M + Math.imul(De, se) | 0, S = S + Math.imul(De, Le) | 0, A = A + Math.imul(G, oe) | 0, M = M + Math.imul(G, Ue) | 0, M = M + Math.imul(te, oe) | 0, S = S + Math.imul(te, Ue) | 0, A = A + Math.imul(z, ue) | 0, M = M + Math.imul(z, We) | 0, M = M + Math.imul(V, ue) | 0, S = S + Math.imul(V, We) | 0, A = A + Math.imul(K, he) | 0, M = M + Math.imul(K, He) | 0, M = M + Math.imul(P, he) | 0, S = S + Math.imul(P, He) | 0, A = A + Math.imul(C, ce) | 0, M = M + Math.imul(C, Ke) | 0, M = M + Math.imul(L, ce) | 0, S = S + Math.imul(L, Ke) | 0;
                var Ze = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, A = Math.imul(Z, ae), M = Math.imul(Z, Oe), M = M + Math.imul(Pe, ae) | 0, S = Math.imul(Pe, Oe), A = A + Math.imul(Y, fe) | 0, M = M + Math.imul(Y, ze) | 0, M = M + Math.imul($e, fe) | 0, S = S + Math.imul($e, ze) | 0, A = A + Math.imul(re, se) | 0, M = M + Math.imul(re, Le) | 0, M = M + Math.imul(Ne, se) | 0, S = S + Math.imul(Ne, Le) | 0, A = A + Math.imul(ee, oe) | 0, M = M + Math.imul(ee, Ue) | 0, M = M + Math.imul(De, oe) | 0, S = S + Math.imul(De, Ue) | 0, A = A + Math.imul(G, ue) | 0, M = M + Math.imul(G, We) | 0, M = M + Math.imul(te, ue) | 0, S = S + Math.imul(te, We) | 0, A = A + Math.imul(z, he) | 0, M = M + Math.imul(z, He) | 0, M = M + Math.imul(V, he) | 0, S = S + Math.imul(V, He) | 0, A = A + Math.imul(K, ce) | 0, M = M + Math.imul(K, Ke) | 0, M = M + Math.imul(P, ce) | 0, S = S + Math.imul(P, Ke) | 0, A = A + Math.imul(C, de) | 0, M = M + Math.imul(C, Fe) | 0, M = M + Math.imul(L, de) | 0, S = S + Math.imul(L, Fe) | 0;
                var er = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, A = Math.imul(ie, ae), M = Math.imul(ie, Oe), M = M + Math.imul(je, ae) | 0, S = Math.imul(je, Oe), A = A + Math.imul(Z, fe) | 0, M = M + Math.imul(Z, ze) | 0, M = M + Math.imul(Pe, fe) | 0, S = S + Math.imul(Pe, ze) | 0, A = A + Math.imul(Y, se) | 0, M = M + Math.imul(Y, Le) | 0, M = M + Math.imul($e, se) | 0, S = S + Math.imul($e, Le) | 0, A = A + Math.imul(re, oe) | 0, M = M + Math.imul(re, Ue) | 0, M = M + Math.imul(Ne, oe) | 0, S = S + Math.imul(Ne, Ue) | 0, A = A + Math.imul(ee, ue) | 0, M = M + Math.imul(ee, We) | 0, M = M + Math.imul(De, ue) | 0, S = S + Math.imul(De, We) | 0, A = A + Math.imul(G, he) | 0, M = M + Math.imul(G, He) | 0, M = M + Math.imul(te, he) | 0, S = S + Math.imul(te, He) | 0, A = A + Math.imul(z, ce) | 0, M = M + Math.imul(z, Ke) | 0, M = M + Math.imul(V, ce) | 0, S = S + Math.imul(V, Ke) | 0, A = A + Math.imul(K, de) | 0, M = M + Math.imul(K, Fe) | 0, M = M + Math.imul(P, de) | 0, S = S + Math.imul(P, Fe) | 0, A = A + Math.imul(C, le) | 0, M = M + Math.imul(C, Xe) | 0, M = M + Math.imul(L, le) | 0, S = S + Math.imul(L, Xe) | 0;
                var rr = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, A = Math.imul(ne, ae), M = Math.imul(ne, Oe), M = M + Math.imul(Te, ae) | 0, S = Math.imul(Te, Oe), A = A + Math.imul(ie, fe) | 0, M = M + Math.imul(ie, ze) | 0, M = M + Math.imul(je, fe) | 0, S = S + Math.imul(je, ze) | 0, A = A + Math.imul(Z, se) | 0, M = M + Math.imul(Z, Le) | 0, M = M + Math.imul(Pe, se) | 0, S = S + Math.imul(Pe, Le) | 0, A = A + Math.imul(Y, oe) | 0, M = M + Math.imul(Y, Ue) | 0, M = M + Math.imul($e, oe) | 0, S = S + Math.imul($e, Ue) | 0, A = A + Math.imul(re, ue) | 0, M = M + Math.imul(re, We) | 0, M = M + Math.imul(Ne, ue) | 0, S = S + Math.imul(Ne, We) | 0, A = A + Math.imul(ee, he) | 0, M = M + Math.imul(ee, He) | 0, M = M + Math.imul(De, he) | 0, S = S + Math.imul(De, He) | 0, A = A + Math.imul(G, ce) | 0, M = M + Math.imul(G, Ke) | 0, M = M + Math.imul(te, ce) | 0, S = S + Math.imul(te, Ke) | 0, A = A + Math.imul(z, de) | 0, M = M + Math.imul(z, Fe) | 0, M = M + Math.imul(V, de) | 0, S = S + Math.imul(V, Fe) | 0, A = A + Math.imul(K, le) | 0, M = M + Math.imul(K, Xe) | 0, M = M + Math.imul(P, le) | 0, S = S + Math.imul(P, Xe) | 0, A = A + Math.imul(C, pe) | 0, M = M + Math.imul(C, Ve) | 0, M = M + Math.imul(L, pe) | 0, S = S + Math.imul(L, Ve) | 0;
                var tr = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (tr >>> 26) | 0, tr &= 67108863, A = Math.imul(ne, fe), M = Math.imul(ne, ze), M = M + Math.imul(Te, fe) | 0, S = Math.imul(Te, ze), A = A + Math.imul(ie, se) | 0, M = M + Math.imul(ie, Le) | 0, M = M + Math.imul(je, se) | 0, S = S + Math.imul(je, Le) | 0, A = A + Math.imul(Z, oe) | 0, M = M + Math.imul(Z, Ue) | 0, M = M + Math.imul(Pe, oe) | 0, S = S + Math.imul(Pe, Ue) | 0, A = A + Math.imul(Y, ue) | 0, M = M + Math.imul(Y, We) | 0, M = M + Math.imul($e, ue) | 0, S = S + Math.imul($e, We) | 0, A = A + Math.imul(re, he) | 0, M = M + Math.imul(re, He) | 0, M = M + Math.imul(Ne, he) | 0, S = S + Math.imul(Ne, He) | 0, A = A + Math.imul(ee, ce) | 0, M = M + Math.imul(ee, Ke) | 0, M = M + Math.imul(De, ce) | 0, S = S + Math.imul(De, Ke) | 0, A = A + Math.imul(G, de) | 0, M = M + Math.imul(G, Fe) | 0, M = M + Math.imul(te, de) | 0, S = S + Math.imul(te, Fe) | 0, A = A + Math.imul(z, le) | 0, M = M + Math.imul(z, Xe) | 0, M = M + Math.imul(V, le) | 0, S = S + Math.imul(V, Xe) | 0, A = A + Math.imul(K, pe) | 0, M = M + Math.imul(K, Ve) | 0, M = M + Math.imul(P, pe) | 0, S = S + Math.imul(P, Ve) | 0;
                var ir = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, A = Math.imul(ne, se), M = Math.imul(ne, Le), M = M + Math.imul(Te, se) | 0, S = Math.imul(Te, Le), A = A + Math.imul(ie, oe) | 0, M = M + Math.imul(ie, Ue) | 0, M = M + Math.imul(je, oe) | 0, S = S + Math.imul(je, Ue) | 0, A = A + Math.imul(Z, ue) | 0, M = M + Math.imul(Z, We) | 0, M = M + Math.imul(Pe, ue) | 0, S = S + Math.imul(Pe, We) | 0, A = A + Math.imul(Y, he) | 0, M = M + Math.imul(Y, He) | 0, M = M + Math.imul($e, he) | 0, S = S + Math.imul($e, He) | 0, A = A + Math.imul(re, ce) | 0, M = M + Math.imul(re, Ke) | 0, M = M + Math.imul(Ne, ce) | 0, S = S + Math.imul(Ne, Ke) | 0, A = A + Math.imul(ee, de) | 0, M = M + Math.imul(ee, Fe) | 0, M = M + Math.imul(De, de) | 0, S = S + Math.imul(De, Fe) | 0, A = A + Math.imul(G, le) | 0, M = M + Math.imul(G, Xe) | 0, M = M + Math.imul(te, le) | 0, S = S + Math.imul(te, Xe) | 0, A = A + Math.imul(z, pe) | 0, M = M + Math.imul(z, Ve) | 0, M = M + Math.imul(V, pe) | 0, S = S + Math.imul(V, Ve) | 0;
                var nr = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, A = Math.imul(ne, oe), M = Math.imul(ne, Ue), M = M + Math.imul(Te, oe) | 0, S = Math.imul(Te, Ue), A = A + Math.imul(ie, ue) | 0, M = M + Math.imul(ie, We) | 0, M = M + Math.imul(je, ue) | 0, S = S + Math.imul(je, We) | 0, A = A + Math.imul(Z, he) | 0, M = M + Math.imul(Z, He) | 0, M = M + Math.imul(Pe, he) | 0, S = S + Math.imul(Pe, He) | 0, A = A + Math.imul(Y, ce) | 0, M = M + Math.imul(Y, Ke) | 0, M = M + Math.imul($e, ce) | 0, S = S + Math.imul($e, Ke) | 0, A = A + Math.imul(re, de) | 0, M = M + Math.imul(re, Fe) | 0, M = M + Math.imul(Ne, de) | 0, S = S + Math.imul(Ne, Fe) | 0, A = A + Math.imul(ee, le) | 0, M = M + Math.imul(ee, Xe) | 0, M = M + Math.imul(De, le) | 0, S = S + Math.imul(De, Xe) | 0, A = A + Math.imul(G, pe) | 0, M = M + Math.imul(G, Ve) | 0, M = M + Math.imul(te, pe) | 0, S = S + Math.imul(te, Ve) | 0;
                var ar = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, A = Math.imul(ne, ue), M = Math.imul(ne, We), M = M + Math.imul(Te, ue) | 0, S = Math.imul(Te, We), A = A + Math.imul(ie, he) | 0, M = M + Math.imul(ie, He) | 0, M = M + Math.imul(je, he) | 0, S = S + Math.imul(je, He) | 0, A = A + Math.imul(Z, ce) | 0, M = M + Math.imul(Z, Ke) | 0, M = M + Math.imul(Pe, ce) | 0, S = S + Math.imul(Pe, Ke) | 0, A = A + Math.imul(Y, de) | 0, M = M + Math.imul(Y, Fe) | 0, M = M + Math.imul($e, de) | 0, S = S + Math.imul($e, Fe) | 0, A = A + Math.imul(re, le) | 0, M = M + Math.imul(re, Xe) | 0, M = M + Math.imul(Ne, le) | 0, S = S + Math.imul(Ne, Xe) | 0, A = A + Math.imul(ee, pe) | 0, M = M + Math.imul(ee, Ve) | 0, M = M + Math.imul(De, pe) | 0, S = S + Math.imul(De, Ve) | 0;
                var fr = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, A = Math.imul(ne, he), M = Math.imul(ne, He), M = M + Math.imul(Te, he) | 0, S = Math.imul(Te, He), A = A + Math.imul(ie, ce) | 0, M = M + Math.imul(ie, Ke) | 0, M = M + Math.imul(je, ce) | 0, S = S + Math.imul(je, Ke) | 0, A = A + Math.imul(Z, de) | 0, M = M + Math.imul(Z, Fe) | 0, M = M + Math.imul(Pe, de) | 0, S = S + Math.imul(Pe, Fe) | 0, A = A + Math.imul(Y, le) | 0, M = M + Math.imul(Y, Xe) | 0, M = M + Math.imul($e, le) | 0, S = S + Math.imul($e, Xe) | 0, A = A + Math.imul(re, pe) | 0, M = M + Math.imul(re, Ve) | 0, M = M + Math.imul(Ne, pe) | 0, S = S + Math.imul(Ne, Ve) | 0;
                var sr = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, A = Math.imul(ne, ce), M = Math.imul(ne, Ke), M = M + Math.imul(Te, ce) | 0, S = Math.imul(Te, Ke), A = A + Math.imul(ie, de) | 0, M = M + Math.imul(ie, Fe) | 0, M = M + Math.imul(je, de) | 0, S = S + Math.imul(je, Fe) | 0, A = A + Math.imul(Z, le) | 0, M = M + Math.imul(Z, Xe) | 0, M = M + Math.imul(Pe, le) | 0, S = S + Math.imul(Pe, Xe) | 0, A = A + Math.imul(Y, pe) | 0, M = M + Math.imul(Y, Ve) | 0, M = M + Math.imul($e, pe) | 0, S = S + Math.imul($e, Ve) | 0;
                var ur = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, A = Math.imul(ne, de), M = Math.imul(ne, Fe), M = M + Math.imul(Te, de) | 0, S = Math.imul(Te, Fe), A = A + Math.imul(ie, le) | 0, M = M + Math.imul(ie, Xe) | 0, M = M + Math.imul(je, le) | 0, S = S + Math.imul(je, Xe) | 0, A = A + Math.imul(Z, pe) | 0, M = M + Math.imul(Z, Ve) | 0, M = M + Math.imul(Pe, pe) | 0, S = S + Math.imul(Pe, Ve) | 0;
                var hr = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, A = Math.imul(ne, le), M = Math.imul(ne, Xe), M = M + Math.imul(Te, le) | 0, S = Math.imul(Te, Xe), A = A + Math.imul(ie, pe) | 0, M = M + Math.imul(ie, Ve) | 0, M = M + Math.imul(je, pe) | 0, S = S + Math.imul(je, Ve) | 0;
                var cr = (q + A | 0) + ((M & 8191) << 13) | 0;
                q = (S + (M >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, A = Math.imul(ne, pe), M = Math.imul(ne, Ve), M = M + Math.imul(Te, pe) | 0, S = Math.imul(Te, Ve);
                var dr = (q + A | 0) + ((M & 8191) << 13) | 0;
                return q = (S + (M >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, w[0] = _e, w[1] = we, w[2] = Ge, w[3] = Je, w[4] = Ye, w[5] = Qe, w[6] = Ze, w[7] = er, w[8] = rr, w[9] = tr, w[10] = ir, w[11] = nr, w[12] = ar, w[13] = fr, w[14] = sr, w[15] = ur, w[16] = hr, w[17] = cr, w[18] = dr, q !== 0 && (w[19] = q, t.length++), t
            };
            Math.imul || (x = g);

            function E(D, B, y) {
                y.negative = B.negative ^ D.negative, y.length = D.length + B.length;
                for (var t = 0, c = 0, _ = 0; _ < y.length - 1; _++) {
                    var w = c;
                    c = 0;
                    for (var q = t & 67108863, A = Math.min(_, B.length - 1), M = Math.max(0, _ - D.length + 1); M <= A; M++) {
                        var S = _ - M,
                            m = D.words[S] | 0,
                            C = B.words[M] | 0,
                            L = m * C,
                            U = L & 67108863;
                        w = w + (L / 67108864 | 0) | 0, U = U + q | 0, q = U & 67108863, w = w + (U >>> 26) | 0, c += w >>> 26, w &= 67108863
                    }
                    y.words[_] = q, t = w, w = c
                }
                return t !== 0 ? y.words[_] = t : y.length--, y.strip()
            }

            function R(D, B, y) {
                var t = new k;
                return t.mulp(D, B, y)
            }
            e.prototype.mulTo = function(B, y) {
                var t, c = this.length + B.length;
                return this.length === 10 && B.length === 10 ? t = x(this, B, y) : c < 63 ? t = g(this, B, y) : c < 1024 ? t = E(this, B, y) : t = R(this, B, y), t
            };

            function k(D, B) {
                this.x = D, this.y = B
            }
            k.prototype.makeRBT = function(B) {
                for (var y = new Array(B), t = e.prototype._countBits(B) - 1, c = 0; c < B; c++) y[c] = this.revBin(c, t, B);
                return y
            }, k.prototype.revBin = function(B, y, t) {
                if (B === 0 || B === t - 1) return B;
                for (var c = 0, _ = 0; _ < y; _++) c |= (B & 1) << y - _ - 1, B >>= 1;
                return c
            }, k.prototype.permute = function(B, y, t, c, _, w) {
                for (var q = 0; q < w; q++) c[q] = y[B[q]], _[q] = t[B[q]]
            }, k.prototype.transform = function(B, y, t, c, _, w) {
                this.permute(w, B, y, t, c, _);
                for (var q = 1; q < _; q <<= 1)
                    for (var A = q << 1, M = Math.cos(2 * Math.PI / A), S = Math.sin(2 * Math.PI / A), m = 0; m < _; m += A)
                        for (var C = M, L = S, U = 0; U < q; U++) {
                            var K = t[m + U],
                                P = c[m + U],
                                N = t[m + U + q],
                                z = c[m + U + q],
                                V = C * N - L * z;
                            z = C * z + L * N, N = V, t[m + U] = K + N, c[m + U] = P + z, t[m + U + q] = K - N, c[m + U + q] = P - z, U !== A && (V = M * C - S * L, L = M * L + S * C, C = V)
                        }
            }, k.prototype.guessLen13b = function(B, y) {
                var t = Math.max(y, B) | 1,
                    c = t & 1,
                    _ = 0;
                for (t = t / 2 | 0; t; t = t >>> 1) _++;
                return 1 << _ + 1 + c
            }, k.prototype.conjugate = function(B, y, t) {
                if (!(t <= 1))
                    for (var c = 0; c < t / 2; c++) {
                        var _ = B[c];
                        B[c] = B[t - c - 1], B[t - c - 1] = _, _ = y[c], y[c] = -y[t - c - 1], y[t - c - 1] = -_
                    }
            }, k.prototype.normalize13b = function(B, y) {
                for (var t = 0, c = 0; c < y / 2; c++) {
                    var _ = Math.round(B[2 * c + 1] / y) * 8192 + Math.round(B[2 * c] / y) + t;
                    B[c] = _ & 67108863, _ < 67108864 ? t = 0 : t = _ / 67108864 | 0
                }
                return B
            }, k.prototype.convert13b = function(B, y, t, c) {
                for (var _ = 0, w = 0; w < y; w++) _ = _ + (B[w] | 0), t[2 * w] = _ & 8191, _ = _ >>> 13, t[2 * w + 1] = _ & 8191, _ = _ >>> 13;
                for (w = 2 * y; w < c; ++w) t[w] = 0;
                i(_ === 0), i((_ & -8192) === 0)
            }, k.prototype.stub = function(B) {
                for (var y = new Array(B), t = 0; t < B; t++) y[t] = 0;
                return y
            }, k.prototype.mulp = function(B, y, t) {
                var c = 2 * this.guessLen13b(B.length, y.length),
                    _ = this.makeRBT(c),
                    w = this.stub(c),
                    q = new Array(c),
                    A = new Array(c),
                    M = new Array(c),
                    S = new Array(c),
                    m = new Array(c),
                    C = new Array(c),
                    L = t.words;
                L.length = c, this.convert13b(B.words, B.length, q, c), this.convert13b(y.words, y.length, S, c), this.transform(q, w, A, M, c, _), this.transform(S, w, m, C, c, _);
                for (var U = 0; U < c; U++) {
                    var K = A[U] * m[U] - M[U] * C[U];
                    M[U] = A[U] * C[U] + M[U] * m[U], A[U] = K
                }
                return this.conjugate(A, M, c), this.transform(A, M, L, w, c, _), this.conjugate(L, w, c), this.normalize13b(L, c), t.negative = B.negative ^ y.negative, t.length = B.length + y.length, t.strip()
            }, e.prototype.mul = function(B) {
                var y = new e(null);
                return y.words = new Array(this.length + B.length), this.mulTo(B, y)
            }, e.prototype.mulf = function(B) {
                var y = new e(null);
                return y.words = new Array(this.length + B.length), R(this, B, y)
            }, e.prototype.imul = function(B) {
                return this.clone().mulTo(B, this)
            }, e.prototype.imuln = function(B) {
                i(typeof B == "number"), i(B < 67108864);
                for (var y = 0, t = 0; t < this.length; t++) {
                    var c = (this.words[t] | 0) * B,
                        _ = (c & 67108863) + (y & 67108863);
                    y >>= 26, y += c / 67108864 | 0, y += _ >>> 26, this.words[t] = _ & 67108863
                }
                return y !== 0 && (this.words[t] = y, this.length++), this.length = B === 0 ? 1 : this.length, this
            }, e.prototype.muln = function(B) {
                return this.clone().imuln(B)
            }, e.prototype.sqr = function() {
                return this.mul(this)
            }, e.prototype.isqr = function() {
                return this.imul(this.clone())
            }, e.prototype.pow = function(B) {
                var y = b(B);
                if (y.length === 0) return new e(1);
                for (var t = this, c = 0; c < y.length && y[c] === 0; c++, t = t.sqr());
                if (++c < y.length)
                    for (var _ = t.sqr(); c < y.length; c++, _ = _.sqr()) y[c] !== 0 && (t = t.mul(_));
                return t
            }, e.prototype.iushln = function(B) {
                i(typeof B == "number" && B >= 0);
                var y = B % 26,
                    t = (B - y) / 26,
                    c = 67108863 >>> 26 - y << 26 - y,
                    _;
                if (y !== 0) {
                    var w = 0;
                    for (_ = 0; _ < this.length; _++) {
                        var q = this.words[_] & c,
                            A = (this.words[_] | 0) - q << y;
                        this.words[_] = A | w, w = q >>> 26 - y
                    }
                    w && (this.words[_] = w, this.length++)
                }
                if (t !== 0) {
                    for (_ = this.length - 1; _ >= 0; _--) this.words[_ + t] = this.words[_];
                    for (_ = 0; _ < t; _++) this.words[_] = 0;
                    this.length += t
                }
                return this.strip()
            }, e.prototype.ishln = function(B) {
                return i(this.negative === 0), this.iushln(B)
            }, e.prototype.iushrn = function(B, y, t) {
                i(typeof B == "number" && B >= 0);
                var c;
                y ? c = (y - y % 26) / 26 : c = 0;
                var _ = B % 26,
                    w = Math.min((B - _) / 26, this.length),
                    q = 67108863 ^ 67108863 >>> _ << _,
                    A = t;
                if (c -= w, c = Math.max(0, c), A) {
                    for (var M = 0; M < w; M++) A.words[M] = this.words[M];
                    A.length = w
                }
                if (w !== 0)
                    if (this.length > w)
                        for (this.length -= w, M = 0; M < this.length; M++) this.words[M] = this.words[M + w];
                    else this.words[0] = 0, this.length = 1;
                var S = 0;
                for (M = this.length - 1; M >= 0 && (S !== 0 || M >= c); M--) {
                    var m = this.words[M] | 0;
                    this.words[M] = S << 26 - _ | m >>> _, S = m & q
                }
                return A && S !== 0 && (A.words[A.length++] = S), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip()
            }, e.prototype.ishrn = function(B, y, t) {
                return i(this.negative === 0), this.iushrn(B, y, t)
            }, e.prototype.shln = function(B) {
                return this.clone().ishln(B)
            }, e.prototype.ushln = function(B) {
                return this.clone().iushln(B)
            }, e.prototype.shrn = function(B) {
                return this.clone().ishrn(B)
            }, e.prototype.ushrn = function(B) {
                return this.clone().iushrn(B)
            }, e.prototype.testn = function(B) {
                i(typeof B == "number" && B >= 0);
                var y = B % 26,
                    t = (B - y) / 26,
                    c = 1 << y;
                if (this.length <= t) return !1;
                var _ = this.words[t];
                return !!(_ & c)
            }, e.prototype.imaskn = function(B) {
                i(typeof B == "number" && B >= 0);
                var y = B % 26,
                    t = (B - y) / 26;
                if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= t) return this;
                if (y !== 0 && t++, this.length = Math.min(t, this.length), y !== 0) {
                    var c = 67108863 ^ 67108863 >>> y << y;
                    this.words[this.length - 1] &= c
                }
                return this.strip()
            }, e.prototype.maskn = function(B) {
                return this.clone().imaskn(B)
            }, e.prototype.iaddn = function(B) {
                return i(typeof B == "number"), i(B < 67108864), B < 0 ? this.isubn(-B) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < B ? (this.words[0] = B - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(B), this.negative = 1, this) : this._iaddn(B)
            }, e.prototype._iaddn = function(B) {
                this.words[0] += B;
                for (var y = 0; y < this.length && this.words[y] >= 67108864; y++) this.words[y] -= 67108864, y === this.length - 1 ? this.words[y + 1] = 1 : this.words[y + 1]++;
                return this.length = Math.max(this.length, y + 1), this
            }, e.prototype.isubn = function(B) {
                if (i(typeof B == "number"), i(B < 67108864), B < 0) return this.iaddn(-B);
                if (this.negative !== 0) return this.negative = 0, this.iaddn(B), this.negative = 1, this;
                if (this.words[0] -= B, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var y = 0; y < this.length && this.words[y] < 0; y++) this.words[y] += 67108864, this.words[y + 1] -= 1;
                return this.strip()
            }, e.prototype.addn = function(B) {
                return this.clone().iaddn(B)
            }, e.prototype.subn = function(B) {
                return this.clone().isubn(B)
            }, e.prototype.iabs = function() {
                return this.negative = 0, this
            }, e.prototype.abs = function() {
                return this.clone().iabs()
            }, e.prototype._ishlnsubmul = function(B, y, t) {
                var c = B.length + t,
                    _;
                this._expand(c);
                var w, q = 0;
                for (_ = 0; _ < B.length; _++) {
                    w = (this.words[_ + t] | 0) + q;
                    var A = (B.words[_] | 0) * y;
                    w -= A & 67108863, q = (w >> 26) - (A / 67108864 | 0), this.words[_ + t] = w & 67108863
                }
                for (; _ < this.length - t; _++) w = (this.words[_ + t] | 0) + q, q = w >> 26, this.words[_ + t] = w & 67108863;
                if (q === 0) return this.strip();
                for (i(q === -1), q = 0, _ = 0; _ < this.length; _++) w = -(this.words[_] | 0) + q, q = w >> 26, this.words[_] = w & 67108863;
                return this.negative = 1, this.strip()
            }, e.prototype._wordDiv = function(B, y) {
                var t = this.length - B.length,
                    c = this.clone(),
                    _ = B,
                    w = _.words[_.length - 1] | 0,
                    q = this._countBits(w);
                t = 26 - q, t !== 0 && (_ = _.ushln(t), c.iushln(t), w = _.words[_.length - 1] | 0);
                var A = c.length - _.length,
                    M;
                if (y !== "mod") {
                    M = new e(null), M.length = A + 1, M.words = new Array(M.length);
                    for (var S = 0; S < M.length; S++) M.words[S] = 0
                }
                var m = c.clone()._ishlnsubmul(_, 1, A);
                m.negative === 0 && (c = m, M && (M.words[A] = 1));
                for (var C = A - 1; C >= 0; C--) {
                    var L = (c.words[_.length + C] | 0) * 67108864 + (c.words[_.length + C - 1] | 0);
                    for (L = Math.min(L / w | 0, 67108863), c._ishlnsubmul(_, L, C); c.negative !== 0;) L--, c.negative = 0, c._ishlnsubmul(_, 1, C), c.isZero() || (c.negative ^= 1);
                    M && (M.words[C] = L)
                }
                return M && M.strip(), c.strip(), y !== "div" && t !== 0 && c.iushrn(t), {
                    div: M || null,
                    mod: c
                }
            }, e.prototype.divmod = function(B, y, t) {
                if (i(!B.isZero()), this.isZero()) return {
                    div: new e(0),
                    mod: new e(0)
                };
                var c, _, w;
                return this.negative !== 0 && B.negative === 0 ? (w = this.neg().divmod(B, y), y !== "mod" && (c = w.div.neg()), y !== "div" && (_ = w.mod.neg(), t && _.negative !== 0 && _.iadd(B)), {
                    div: c,
                    mod: _
                }) : this.negative === 0 && B.negative !== 0 ? (w = this.divmod(B.neg(), y), y !== "mod" && (c = w.div.neg()), {
                    div: c,
                    mod: w.mod
                }) : (this.negative & B.negative) !== 0 ? (w = this.neg().divmod(B.neg(), y), y !== "div" && (_ = w.mod.neg(), t && _.negative !== 0 && _.isub(B)), {
                    div: w.div,
                    mod: _
                }) : B.length > this.length || this.cmp(B) < 0 ? {
                    div: new e(0),
                    mod: this
                } : B.length === 1 ? y === "div" ? {
                    div: this.divn(B.words[0]),
                    mod: null
                } : y === "mod" ? {
                    div: null,
                    mod: new e(this.modn(B.words[0]))
                } : {
                    div: this.divn(B.words[0]),
                    mod: new e(this.modn(B.words[0]))
                } : this._wordDiv(B, y)
            }, e.prototype.div = function(B) {
                return this.divmod(B, "div", !1).div
            }, e.prototype.mod = function(B) {
                return this.divmod(B, "mod", !1).mod
            }, e.prototype.umod = function(B) {
                return this.divmod(B, "mod", !0).mod
            }, e.prototype.divRound = function(B) {
                var y = this.divmod(B);
                if (y.mod.isZero()) return y.div;
                var t = y.div.negative !== 0 ? y.mod.isub(B) : y.mod,
                    c = B.ushrn(1),
                    _ = B.andln(1),
                    w = t.cmp(c);
                return w < 0 || _ === 1 && w === 0 ? y.div : y.div.negative !== 0 ? y.div.isubn(1) : y.div.iaddn(1)
            }, e.prototype.modn = function(B) {
                i(B <= 67108863);
                for (var y = (1 << 26) % B, t = 0, c = this.length - 1; c >= 0; c--) t = (y * t + (this.words[c] | 0)) % B;
                return t
            }, e.prototype.idivn = function(B) {
                i(B <= 67108863);
                for (var y = 0, t = this.length - 1; t >= 0; t--) {
                    var c = (this.words[t] | 0) + y * 67108864;
                    this.words[t] = c / B | 0, y = c % B
                }
                return this.strip()
            }, e.prototype.divn = function(B) {
                return this.clone().idivn(B)
            }, e.prototype.egcd = function(B) {
                i(B.negative === 0), i(!B.isZero());
                var y = this,
                    t = B.clone();
                y.negative !== 0 ? y = y.umod(B) : y = y.clone();
                for (var c = new e(1), _ = new e(0), w = new e(0), q = new e(1), A = 0; y.isEven() && t.isEven();) y.iushrn(1), t.iushrn(1), ++A;
                for (var M = t.clone(), S = y.clone(); !y.isZero();) {
                    for (var m = 0, C = 1;
                        (y.words[0] & C) === 0 && m < 26; ++m, C <<= 1);
                    if (m > 0)
                        for (y.iushrn(m); m-- > 0;)(c.isOdd() || _.isOdd()) && (c.iadd(M), _.isub(S)), c.iushrn(1), _.iushrn(1);
                    for (var L = 0, U = 1;
                        (t.words[0] & U) === 0 && L < 26; ++L, U <<= 1);
                    if (L > 0)
                        for (t.iushrn(L); L-- > 0;)(w.isOdd() || q.isOdd()) && (w.iadd(M), q.isub(S)), w.iushrn(1), q.iushrn(1);
                    y.cmp(t) >= 0 ? (y.isub(t), c.isub(w), _.isub(q)) : (t.isub(y), w.isub(c), q.isub(_))
                }
                return {
                    a: w,
                    b: q,
                    gcd: t.iushln(A)
                }
            }, e.prototype._invmp = function(B) {
                i(B.negative === 0), i(!B.isZero());
                var y = this,
                    t = B.clone();
                y.negative !== 0 ? y = y.umod(B) : y = y.clone();
                for (var c = new e(1), _ = new e(0), w = t.clone(); y.cmpn(1) > 0 && t.cmpn(1) > 0;) {
                    for (var q = 0, A = 1;
                        (y.words[0] & A) === 0 && q < 26; ++q, A <<= 1);
                    if (q > 0)
                        for (y.iushrn(q); q-- > 0;) c.isOdd() && c.iadd(w), c.iushrn(1);
                    for (var M = 0, S = 1;
                        (t.words[0] & S) === 0 && M < 26; ++M, S <<= 1);
                    if (M > 0)
                        for (t.iushrn(M); M-- > 0;) _.isOdd() && _.iadd(w), _.iushrn(1);
                    y.cmp(t) >= 0 ? (y.isub(t), c.isub(_)) : (t.isub(y), _.isub(c))
                }
                var m;
                return y.cmpn(1) === 0 ? m = c : m = _, m.cmpn(0) < 0 && m.iadd(B), m
            }, e.prototype.gcd = function(B) {
                if (this.isZero()) return B.abs();
                if (B.isZero()) return this.abs();
                var y = this.clone(),
                    t = B.clone();
                y.negative = 0, t.negative = 0;
                for (var c = 0; y.isEven() && t.isEven(); c++) y.iushrn(1), t.iushrn(1);
                do {
                    for (; y.isEven();) y.iushrn(1);
                    for (; t.isEven();) t.iushrn(1);
                    var _ = y.cmp(t);
                    if (_ < 0) {
                        var w = y;
                        y = t, t = w
                    } else if (_ === 0 || t.cmpn(1) === 0) break;
                    y.isub(t)
                } while (!0);
                return t.iushln(c)
            }, e.prototype.invm = function(B) {
                return this.egcd(B).a.umod(B)
            }, e.prototype.isEven = function() {
                return (this.words[0] & 1) === 0
            }, e.prototype.isOdd = function() {
                return (this.words[0] & 1) === 1
            }, e.prototype.andln = function(B) {
                return this.words[0] & B
            }, e.prototype.bincn = function(B) {
                i(typeof B == "number");
                var y = B % 26,
                    t = (B - y) / 26,
                    c = 1 << y;
                if (this.length <= t) return this._expand(t + 1), this.words[t] |= c, this;
                for (var _ = c, w = t; _ !== 0 && w < this.length; w++) {
                    var q = this.words[w] | 0;
                    q += _, _ = q >>> 26, q &= 67108863, this.words[w] = q
                }
                return _ !== 0 && (this.words[w] = _, this.length++), this
            }, e.prototype.isZero = function() {
                return this.length === 1 && this.words[0] === 0
            }, e.prototype.cmpn = function(B) {
                var y = B < 0;
                if (this.negative !== 0 && !y) return -1;
                if (this.negative === 0 && y) return 1;
                this.strip();
                var t;
                if (this.length > 1) t = 1;
                else {
                    y && (B = -B), i(B <= 67108863, "Number is too big");
                    var c = this.words[0] | 0;
                    t = c === B ? 0 : c < B ? -1 : 1
                }
                return this.negative !== 0 ? -t | 0 : t
            }, e.prototype.cmp = function(B) {
                if (this.negative !== 0 && B.negative === 0) return -1;
                if (this.negative === 0 && B.negative !== 0) return 1;
                var y = this.ucmp(B);
                return this.negative !== 0 ? -y | 0 : y
            }, e.prototype.ucmp = function(B) {
                if (this.length > B.length) return 1;
                if (this.length < B.length) return -1;
                for (var y = 0, t = this.length - 1; t >= 0; t--) {
                    var c = this.words[t] | 0,
                        _ = B.words[t] | 0;
                    if (c !== _) {
                        c < _ ? y = -1 : c > _ && (y = 1);
                        break
                    }
                }
                return y
            }, e.prototype.gtn = function(B) {
                return this.cmpn(B) === 1
            }, e.prototype.gt = function(B) {
                return this.cmp(B) === 1
            }, e.prototype.gten = function(B) {
                return this.cmpn(B) >= 0
            }, e.prototype.gte = function(B) {
                return this.cmp(B) >= 0
            }, e.prototype.ltn = function(B) {
                return this.cmpn(B) === -1
            }, e.prototype.lt = function(B) {
                return this.cmp(B) === -1
            }, e.prototype.lten = function(B) {
                return this.cmpn(B) <= 0
            }, e.prototype.lte = function(B) {
                return this.cmp(B) <= 0
            }, e.prototype.eqn = function(B) {
                return this.cmpn(B) === 0
            }, e.prototype.eq = function(B) {
                return this.cmp(B) === 0
            }, e.red = function(B) {
                return new W(B)
            }, e.prototype.toRed = function(B) {
                return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), B.convertTo(this)._forceRed(B)
            }, e.prototype.fromRed = function() {
                return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, e.prototype._forceRed = function(B) {
                return this.red = B, this
            }, e.prototype.forceRed = function(B) {
                return i(!this.red, "Already a number in reduction context"), this._forceRed(B)
            }, e.prototype.redAdd = function(B) {
                return i(this.red, "redAdd works only with red numbers"), this.red.add(this, B)
            }, e.prototype.redIAdd = function(B) {
                return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, B)
            }, e.prototype.redSub = function(B) {
                return i(this.red, "redSub works only with red numbers"), this.red.sub(this, B)
            }, e.prototype.redISub = function(B) {
                return i(this.red, "redISub works only with red numbers"), this.red.isub(this, B)
            }, e.prototype.redShl = function(B) {
                return i(this.red, "redShl works only with red numbers"), this.red.shl(this, B)
            }, e.prototype.redMul = function(B) {
                return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, B), this.red.mul(this, B)
            }, e.prototype.redIMul = function(B) {
                return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, B), this.red.imul(this, B)
            }, e.prototype.redSqr = function() {
                return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, e.prototype.redISqr = function() {
                return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, e.prototype.redSqrt = function() {
                return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, e.prototype.redInvm = function() {
                return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, e.prototype.redNeg = function() {
                return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, e.prototype.redPow = function(B) {
                return i(this.red && !B.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, B)
            };
            var I = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function $(D, B) {
                this.name = D, this.p = new e(B, 16), this.n = this.p.bitLength(), this.k = new e(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }
            $.prototype._tmp = function() {
                var B = new e(null);
                return B.words = new Array(Math.ceil(this.n / 13)), B
            }, $.prototype.ireduce = function(B) {
                var y = B,
                    t;
                do this.split(y, this.tmp), y = this.imulK(y), y = y.iadd(this.tmp), t = y.bitLength(); while (t > this.n);
                var c = t < this.n ? -1 : y.ucmp(this.p);
                return c === 0 ? (y.words[0] = 0, y.length = 1) : c > 0 ? y.isub(this.p) : y.strip !== void 0 ? y.strip() : y._strip(), y
            }, $.prototype.split = function(B, y) {
                B.iushrn(this.n, 0, y)
            }, $.prototype.imulK = function(B) {
                return B.imul(this.k)
            };

            function j() {
                $.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            f(j, $), j.prototype.split = function(B, y) {
                for (var t = 4194303, c = Math.min(B.length, 9), _ = 0; _ < c; _++) y.words[_] = B.words[_];
                if (y.length = c, B.length <= 9) {
                    B.words[0] = 0, B.length = 1;
                    return
                }
                var w = B.words[9];
                for (y.words[y.length++] = w & t, _ = 10; _ < B.length; _++) {
                    var q = B.words[_] | 0;
                    B.words[_ - 10] = (q & t) << 4 | w >>> 22, w = q
                }
                w >>>= 22, B.words[_ - 10] = w, w === 0 && B.length > 10 ? B.length -= 10 : B.length -= 9
            }, j.prototype.imulK = function(B) {
                B.words[B.length] = 0, B.words[B.length + 1] = 0, B.length += 2;
                for (var y = 0, t = 0; t < B.length; t++) {
                    var c = B.words[t] | 0;
                    y += c * 977, B.words[t] = y & 67108863, y = c * 64 + (y / 67108864 | 0)
                }
                return B.words[B.length - 1] === 0 && (B.length--, B.words[B.length - 1] === 0 && B.length--), B
            };

            function O() {
                $.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            f(O, $);

            function H() {
                $.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            f(H, $);

            function X() {
                $.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            f(X, $), X.prototype.imulK = function(B) {
                for (var y = 0, t = 0; t < B.length; t++) {
                    var c = (B.words[t] | 0) * 19 + y,
                        _ = c & 67108863;
                    c >>>= 26, B.words[t] = _, y = c
                }
                return y !== 0 && (B.words[B.length++] = y), B
            }, e._prime = function(B) {
                if (I[B]) return I[B];
                var y;
                if (B === "k256") y = new j;
                else if (B === "p224") y = new O;
                else if (B === "p192") y = new H;
                else if (B === "p25519") y = new X;
                else throw new Error("Unknown prime " + B);
                return I[B] = y, y
            };

            function W(D) {
                if (typeof D == "string") {
                    var B = e._prime(D);
                    this.m = B.p, this.prime = B
                } else i(D.gtn(1), "modulus must be greater than 1"), this.m = D, this.prime = null
            }
            W.prototype._verify1 = function(B) {
                i(B.negative === 0, "red works only with positives"), i(B.red, "red works only with red numbers")
            }, W.prototype._verify2 = function(B, y) {
                i((B.negative | y.negative) === 0, "red works only with positives"), i(B.red && B.red === y.red, "red works only with red numbers")
            }, W.prototype.imod = function(B) {
                return this.prime ? this.prime.ireduce(B)._forceRed(this) : B.umod(this.m)._forceRed(this)
            }, W.prototype.neg = function(B) {
                return B.isZero() ? B.clone() : this.m.sub(B)._forceRed(this)
            }, W.prototype.add = function(B, y) {
                this._verify2(B, y);
                var t = B.add(y);
                return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
            }, W.prototype.iadd = function(B, y) {
                this._verify2(B, y);
                var t = B.iadd(y);
                return t.cmp(this.m) >= 0 && t.isub(this.m), t
            }, W.prototype.sub = function(B, y) {
                this._verify2(B, y);
                var t = B.sub(y);
                return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
            }, W.prototype.isub = function(B, y) {
                this._verify2(B, y);
                var t = B.isub(y);
                return t.cmpn(0) < 0 && t.iadd(this.m), t
            }, W.prototype.shl = function(B, y) {
                return this._verify1(B), this.imod(B.ushln(y))
            }, W.prototype.imul = function(B, y) {
                return this._verify2(B, y), this.imod(B.imul(y))
            }, W.prototype.mul = function(B, y) {
                return this._verify2(B, y), this.imod(B.mul(y))
            }, W.prototype.isqr = function(B) {
                return this.imul(B, B.clone())
            }, W.prototype.sqr = function(B) {
                return this.mul(B, B)
            }, W.prototype.sqrt = function(B) {
                if (B.isZero()) return B.clone();
                var y = this.m.andln(3);
                if (i(y % 2 === 1), y === 3) {
                    var t = this.m.add(new e(1)).iushrn(2);
                    return this.pow(B, t)
                }
                for (var c = this.m.subn(1), _ = 0; !c.isZero() && c.andln(1) === 0;) _++, c.iushrn(1);
                i(!c.isZero());
                var w = new e(1).toRed(this),
                    q = w.redNeg(),
                    A = this.m.subn(1).iushrn(1),
                    M = this.m.bitLength();
                for (M = new e(2 * M * M).toRed(this); this.pow(M, A).cmp(q) !== 0;) M.redIAdd(q);
                for (var S = this.pow(M, c), m = this.pow(B, c.addn(1).iushrn(1)), C = this.pow(B, c), L = _; C.cmp(w) !== 0;) {
                    for (var U = C, K = 0; U.cmp(w) !== 0; K++) U = U.redSqr();
                    i(K < L);
                    var P = this.pow(S, new e(1).iushln(L - K - 1));
                    m = m.redMul(P), S = P.redSqr(), C = C.redMul(S), L = K
                }
                return m
            }, W.prototype.invm = function(B) {
                var y = B._invmp(this.m);
                return y.negative !== 0 ? (y.negative = 0, this.imod(y).redNeg()) : this.imod(y)
            }, W.prototype.pow = function(B, y) {
                if (y.isZero()) return new e(1).toRed(this);
                if (y.cmpn(1) === 0) return B.clone();
                var t = 4,
                    c = new Array(1 << t);
                c[0] = new e(1).toRed(this), c[1] = B;
                for (var _ = 2; _ < c.length; _++) c[_] = this.mul(c[_ - 1], B);
                var w = c[0],
                    q = 0,
                    A = 0,
                    M = y.bitLength() % 26;
                for (M === 0 && (M = 26), _ = y.length - 1; _ >= 0; _--) {
                    for (var S = y.words[_], m = M - 1; m >= 0; m--) {
                        var C = S >> m & 1;
                        if (w !== c[0] && (w = this.sqr(w)), C === 0 && q === 0) {
                            A = 0;
                            continue
                        }
                        q <<= 1, q |= C, A++, !(A !== t && (_ !== 0 || m !== 0)) && (w = this.mul(w, c[q]), A = 0, q = 0)
                    }
                    M = 26
                }
                return w
            }, W.prototype.convertTo = function(B) {
                var y = B.umod(this.m);
                return y === B ? y.clone() : y
            }, W.prototype.convertFrom = function(B) {
                var y = B.clone();
                return y.red = null, y
            }, e.mont = function(B) {
                return new J(B)
            };

            function J(D) {
                W.call(this, D), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new e(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            f(J, W), J.prototype.convertTo = function(B) {
                return this.imod(B.ushln(this.shift))
            }, J.prototype.convertFrom = function(B) {
                var y = this.imod(B.mul(this.rinv));
                return y.red = null, y
            }, J.prototype.imul = function(B, y) {
                if (B.isZero() || y.isZero()) return B.words[0] = 0, B.length = 1, B;
                var t = B.imul(y),
                    c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    _ = t.isub(c).iushrn(this.shift),
                    w = _;
                return _.cmp(this.m) >= 0 ? w = _.isub(this.m) : _.cmpn(0) < 0 && (w = _.iadd(this.m)), w._forceRed(this)
            }, J.prototype.mul = function(B, y) {
                if (B.isZero() || y.isZero()) return new e(0)._forceRed(this);
                var t = B.mul(y),
                    c = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    _ = t.isub(c).iushrn(this.shift),
                    w = _;
                return _.cmp(this.m) >= 0 ? w = _.isub(this.m) : _.cmpn(0) < 0 && (w = _.iadd(this.m)), w._forceRed(this)
            }, J.prototype.invm = function(B) {
                var y = this.imod(B._invmp(this.m).mul(this.r2));
                return y._forceRed(this)
            }
        })(s, bn$4)
    }(bn$5)), bn$5.exports
}
var brorand = {
        exports: {}
    },
    hasRequiredBrorand;

function requireBrorand() {
    if (hasRequiredBrorand) return brorand.exports;
    hasRequiredBrorand = 1;
    var s;
    brorand.exports = function(f) {
        return s || (s = new r(null)), s.generate(f)
    };

    function r(i) {
        this.rand = i
    }
    if (brorand.exports.Rand = r, r.prototype.generate = function(f) {
            return this._rand(f)
        }, r.prototype._rand = function(f) {
            if (this.rand.getBytes) return this.rand.getBytes(f);
            for (var e = new Uint8Array(f), d = 0; d < e.length; d++) e[d] = this.rand.getByte();
            return e
        }, typeof self == "object") self.crypto && self.crypto.getRandomValues ? r.prototype._rand = function(f) {
        var e = new Uint8Array(f);
        return self.crypto.getRandomValues(e), e
    } : self.msCrypto && self.msCrypto.getRandomValues ? r.prototype._rand = function(f) {
        var e = new Uint8Array(f);
        return self.msCrypto.getRandomValues(e), e
    } : typeof window == "object" && (r.prototype._rand = function() {
        throw new Error("Not implemented yet")
    });
    else try {
        var n = requireCryptoBrowserify();
        if (typeof n.randomBytes != "function") throw new Error("Not supported");
        r.prototype._rand = function(f) {
            return n.randomBytes(f)
        }
    } catch {}
    return brorand.exports
}
var mr, hasRequiredMr;

function requireMr() {
    if (hasRequiredMr) return mr;
    hasRequiredMr = 1;
    var s = requireBn$2(),
        r = requireBrorand();

    function n(i) {
        this.rand = i || new r.Rand
    }
    return mr = n, n.create = function(f) {
        return new n(f)
    }, n.prototype._randbelow = function(f) {
        var e = f.bitLength(),
            d = Math.ceil(e / 8);
        do var l = new s(this.rand.generate(d)); while (l.cmp(f) >= 0);
        return l
    }, n.prototype._randrange = function(f, e) {
        var d = e.sub(f);
        return f.add(this._randbelow(d))
    }, n.prototype.test = function(f, e, d) {
        var l = f.bitLength(),
            v = s.mont(f),
            a = new s(1).toRed(v);
        e || (e = Math.max(1, l / 48 | 0));
        for (var u = f.subn(1), h = 0; !u.testn(h); h++);
        for (var p = f.shrn(h), b = u.toRed(v), g = !0; e > 0; e--) {
            var x = this._randrange(new s(2), u);
            d && d(x);
            var E = x.toRed(v).redPow(p);
            if (!(E.cmp(a) === 0 || E.cmp(b) === 0)) {
                for (var R = 1; R < h; R++) {
                    if (E = E.redSqr(), E.cmp(a) === 0) return !1;
                    if (E.cmp(b) === 0) break
                }
                if (R === h) return !1
            }
        }
        return g
    }, n.prototype.getDivisor = function(f, e) {
        var d = f.bitLength(),
            l = s.mont(f),
            v = new s(1).toRed(l);
        e || (e = Math.max(1, d / 48 | 0));
        for (var a = f.subn(1), u = 0; !a.testn(u); u++);
        for (var h = f.shrn(u), p = a.toRed(l); e > 0; e--) {
            var b = this._randrange(new s(2), a),
                g = f.gcd(b);
            if (g.cmpn(1) !== 0) return g;
            var x = b.toRed(l).redPow(h);
            if (!(x.cmp(v) === 0 || x.cmp(p) === 0)) {
                for (var E = 1; E < u; E++) {
                    if (x = x.redSqr(), x.cmp(v) === 0) return x.fromRed().subn(1).gcd(f);
                    if (x.cmp(p) === 0) break
                }
                if (E === u) return x = x.redSqr(), x.fromRed().subn(1).gcd(f)
            }
        }
        return !1
    }, mr
}
var generatePrime, hasRequiredGeneratePrime;

function requireGeneratePrime() {
    if (hasRequiredGeneratePrime) return generatePrime;
    hasRequiredGeneratePrime = 1;
    var s = requireBrowser$b();
    generatePrime = E, E.simpleSieve = g, E.fermatTest = x;
    var r = requireBn$2(),
        n = new r(24),
        i = requireMr(),
        f = new i,
        e = new r(1),
        d = new r(2),
        l = new r(5);
    new r(16), new r(8);
    var v = new r(10),
        a = new r(3);
    new r(7);
    var u = new r(11),
        h = new r(4);
    new r(12);
    var p = null;

    function b() {
        if (p !== null) return p;
        var R = 1048576,
            k = [];
        k[0] = 2;
        for (var I = 1, $ = 3; $ < R; $ += 2) {
            for (var j = Math.ceil(Math.sqrt($)), O = 0; O < I && k[O] <= j && $ % k[O] !== 0; O++);
            I !== O && k[O] <= j || (k[I++] = $)
        }
        return p = k, k
    }

    function g(R) {
        for (var k = b(), I = 0; I < k.length; I++)
            if (R.modn(k[I]) === 0) return R.cmpn(k[I]) === 0;
        return !0
    }

    function x(R) {
        var k = r.mont(R);
        return d.toRed(k).redPow(R.subn(1)).fromRed().cmpn(1) === 0
    }

    function E(R, k) {
        if (R < 16) return k === 2 || k === 5 ? new r([140, 123]) : new r([140, 39]);
        k = new r(k);
        for (var I, $;;) {
            for (I = new r(s(Math.ceil(R / 8))); I.bitLength() > R;) I.ishrn(1);
            if (I.isEven() && I.iadd(e), I.testn(1) || I.iadd(d), k.cmp(d)) {
                if (!k.cmp(l))
                    for (; I.mod(v).cmp(a);) I.iadd(h)
            } else
                for (; I.mod(n).cmp(u);) I.iadd(h);
            if ($ = I.shrn(1), g($) && g(I) && x($) && x(I) && f.test($) && f.test(I)) return I
        }
    }
    return generatePrime
}
const modp1 = {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"
    },
    modp2 = {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"
    },
    modp5 = {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"
    },
    modp14 = {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"
    },
    modp15 = {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"
    },
    modp16 = {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"
    },
    modp17 = {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"
    },
    modp18 = {
        gen: "02",
        prime: "ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"
    },
    require$$1$1 = {
        modp1,
        modp2,
        modp5,
        modp14,
        modp15,
        modp16,
        modp17,
        modp18
    };
var dh, hasRequiredDh;

function requireDh() {
    if (hasRequiredDh) return dh;
    hasRequiredDh = 1;
    var s = requireBn$2(),
        r = requireMr(),
        n = new r,
        i = new s(24),
        f = new s(11),
        e = new s(10),
        d = new s(3),
        l = new s(7),
        v = requireGeneratePrime(),
        a = requireBrowser$b();
    dh = g;

    function u(E, R) {
        return R = R || "utf8", Buffer.isBuffer(E) || (E = new Buffer(E, R)), this._pub = new s(E), this
    }

    function h(E, R) {
        return R = R || "utf8", Buffer.isBuffer(E) || (E = new Buffer(E, R)), this._priv = new s(E), this
    }
    var p = {};

    function b(E, R) {
        var k = R.toString("hex"),
            I = [k, E.toString(16)].join("_");
        if (I in p) return p[I];
        var $ = 0;
        if (E.isEven() || !v.simpleSieve || !v.fermatTest(E) || !n.test(E)) return $ += 1, k === "02" || k === "05" ? $ += 8 : $ += 4, p[I] = $, $;
        n.test(E.shrn(1)) || ($ += 2);
        var j;
        switch (k) {
            case "02":
                E.mod(i).cmp(f) && ($ += 8);
                break;
            case "05":
                j = E.mod(e), j.cmp(d) && j.cmp(l) && ($ += 8);
                break;
            default:
                $ += 4
        }
        return p[I] = $, $
    }

    function g(E, R, k) {
        this.setGenerator(R), this.__prime = new s(E), this._prime = s.mont(this.__prime), this._primeLen = E.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, k ? (this.setPublicKey = u, this.setPrivateKey = h) : this._primeCode = 8
    }
    Object.defineProperty(g.prototype, "verifyError", {
        enumerable: !0,
        get: function() {
            return typeof this._primeCode != "number" && (this._primeCode = b(this.__prime, this.__gen)), this._primeCode
        }
    }), g.prototype.generateKeys = function() {
        return this._priv || (this._priv = new s(a(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
    }, g.prototype.computeSecret = function(E) {
        E = new s(E), E = E.toRed(this._prime);
        var R = E.redPow(this._priv).fromRed(),
            k = new Buffer(R.toArray()),
            I = this.getPrime();
        if (k.length < I.length) {
            var $ = new Buffer(I.length - k.length);
            $.fill(0), k = Buffer.concat([$, k])
        }
        return k
    }, g.prototype.getPublicKey = function(R) {
        return x(this._pub, R)
    }, g.prototype.getPrivateKey = function(R) {
        return x(this._priv, R)
    }, g.prototype.getPrime = function(E) {
        return x(this.__prime, E)
    }, g.prototype.getGenerator = function(E) {
        return x(this._gen, E)
    }, g.prototype.setGenerator = function(E, R) {
        return R = R || "utf8", Buffer.isBuffer(E) || (E = new Buffer(E, R)), this.__gen = E, this._gen = new s(E), this
    };

    function x(E, R) {
        var k = new Buffer(E.toArray());
        return R ? k.toString(R) : k
    }
    return dh
}
var hasRequiredBrowser$5;

function requireBrowser$5() {
    if (hasRequiredBrowser$5) return browser$5;
    hasRequiredBrowser$5 = 1;
    var s = requireGeneratePrime(),
        r = require$$1$1,
        n = requireDh();

    function i(d) {
        var l = new Buffer(r[d].prime, "hex"),
            v = new Buffer(r[d].gen, "hex");
        return new n(l, v)
    }
    var f = {
        binary: !0,
        hex: !0,
        base64: !0
    };

    function e(d, l, v, a) {
        return Buffer.isBuffer(l) || f[l] === void 0 ? e(d, "binary", l, v) : (l = l || "binary", a = a || "binary", v = v || new Buffer([2]), Buffer.isBuffer(v) || (v = new Buffer(v, a)), typeof d == "number" ? new n(s(d, v), v, !0) : (Buffer.isBuffer(d) || (d = new Buffer(d, l)), new n(d, v, !0)))
    }
    return browser$5.DiffieHellmanGroup = browser$5.createDiffieHellmanGroup = browser$5.getDiffieHellman = i, browser$5.createDiffieHellman = browser$5.DiffieHellman = e, browser$5
}
var readableBrowser = {
        exports: {}
    },
    isarray, hasRequiredIsarray;

function requireIsarray() {
    if (hasRequiredIsarray) return isarray;
    hasRequiredIsarray = 1;
    var s = {}.toString;
    return isarray = Array.isArray || function(r) {
        return s.call(r) == "[object Array]"
    }, isarray
}
var streamBrowser, hasRequiredStreamBrowser;

function requireStreamBrowser() {
    return hasRequiredStreamBrowser || (hasRequiredStreamBrowser = 1, streamBrowser = requireEvents().EventEmitter), streamBrowser
}
var safeBuffer = {
        exports: {}
    },
    hasRequiredSafeBuffer;

function requireSafeBuffer() {
    return hasRequiredSafeBuffer || (hasRequiredSafeBuffer = 1, function(s, r) {
        var n = requireDist$1(),
            i = n.Buffer;

        function f(d, l) {
            for (var v in d) l[v] = d[v]
        }
        i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? s.exports = n : (f(n, r), r.Buffer = e);

        function e(d, l, v) {
            return i(d, l, v)
        }
        f(i, e), e.from = function(d, l, v) {
            if (typeof d == "number") throw new TypeError("Argument must not be a number");
            return i(d, l, v)
        }, e.alloc = function(d, l, v) {
            if (typeof d != "number") throw new TypeError("Argument must be a number");
            var a = i(d);
            return l !== void 0 ? typeof v == "string" ? a.fill(l, v) : a.fill(l) : a.fill(0), a
        }, e.allocUnsafe = function(d) {
            if (typeof d != "number") throw new TypeError("Argument must be a number");
            return i(d)
        }, e.allocUnsafeSlow = function(d) {
            if (typeof d != "number") throw new TypeError("Argument must be a number");
            return n.SlowBuffer(d)
        }
    }(safeBuffer, safeBuffer.exports)), safeBuffer.exports
}
var BufferList = {
        exports: {}
    },
    hasRequiredBufferList;

function requireBufferList() {
    return hasRequiredBufferList || (hasRequiredBufferList = 1, function(s) {
        function r(e, d) {
            if (!(e instanceof d)) throw new TypeError("Cannot call a class as a function")
        }
        var n = requireSafeBuffer().Buffer,
            i = requireUtil$1();

        function f(e, d, l) {
            e.copy(d, l)
        }
        s.exports = function() {
            function e() {
                r(this, e), this.head = null, this.tail = null, this.length = 0
            }
            return e.prototype.push = function(l) {
                var v = {
                    data: l,
                    next: null
                };
                this.length > 0 ? this.tail.next = v : this.head = v, this.tail = v, ++this.length
            }, e.prototype.unshift = function(l) {
                var v = {
                    data: l,
                    next: this.head
                };
                this.length === 0 && (this.tail = v), this.head = v, ++this.length
            }, e.prototype.shift = function() {
                if (this.length !== 0) {
                    var l = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, l
                }
            }, e.prototype.clear = function() {
                this.head = this.tail = null, this.length = 0
            }, e.prototype.join = function(l) {
                if (this.length === 0) return "";
                for (var v = this.head, a = "" + v.data; v = v.next;) a += l + v.data;
                return a
            }, e.prototype.concat = function(l) {
                if (this.length === 0) return n.alloc(0);
                for (var v = n.allocUnsafe(l >>> 0), a = this.head, u = 0; a;) f(a.data, v, u), u += a.data.length, a = a.next;
                return v
            }, e
        }(), i && i.inspect && i.inspect.custom && (s.exports.prototype[i.inspect.custom] = function() {
            var e = i.inspect({
                length: this.length
            });
            return this.constructor.name + " " + e
        })
    }(BufferList)), BufferList.exports
}
var destroy_1, hasRequiredDestroy;

function requireDestroy() {
    if (hasRequiredDestroy) return destroy_1;
    hasRequiredDestroy = 1;
    var s = requireProcessNextickArgs();

    function r(f, e) {
        var d = this,
            l = this._readableState && this._readableState.destroyed,
            v = this._writableState && this._writableState.destroyed;
        return l || v ? (e ? e(f) : f && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, s.nextTick(i, this, f)) : s.nextTick(i, this, f)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(f || null, function(a) {
            !e && a ? d._writableState ? d._writableState.errorEmitted || (d._writableState.errorEmitted = !0, s.nextTick(i, d, a)) : s.nextTick(i, d, a) : e && e(a)
        }), this)
    }

    function n() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
    }

    function i(f, e) {
        f.emit("error", e)
    }
    return destroy_1 = {
        destroy: r,
        undestroy: n
    }, destroy_1
}
var _stream_writable, hasRequired_stream_writable;

function require_stream_writable() {
    if (hasRequired_stream_writable) return _stream_writable;
    hasRequired_stream_writable = 1;
    var s = requireProcessNextickArgs();
    _stream_writable = x;

    function r(w) {
        var q = this;
        this.next = null, this.entry = null, this.finish = function() {
            _(q, w)
        }
    }
    var n = !process$1.browser && ["v0.10", "v0.9."].indexOf(process$1.version.slice(0, 5)) > -1 ? setImmediate : s.nextTick,
        i;
    x.WritableState = b;
    var f = Object.create(requireUtil$2());
    f.inherits = requireInherits_browser();
    var e = {
            deprecate: requireBrowser$c()
        },
        d = requireStreamBrowser(),
        l = requireSafeBuffer().Buffer,
        v = (typeof commonjsGlobal < "u" ? commonjsGlobal : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function a(w) {
        return l.from(w)
    }

    function u(w) {
        return l.isBuffer(w) || w instanceof v
    }
    var h = requireDestroy();
    f.inherits(x, d);

    function p() {}

    function b(w, q) {
        i = i || require_stream_duplex(), w = w || {};
        var A = q instanceof i;
        this.objectMode = !!w.objectMode, A && (this.objectMode = this.objectMode || !!w.writableObjectMode);
        var M = w.highWaterMark,
            S = w.writableHighWaterMark,
            m = this.objectMode ? 16 : 16 * 1024;
        M || M === 0 ? this.highWaterMark = M : A && (S || S === 0) ? this.highWaterMark = S : this.highWaterMark = m, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var C = w.decodeStrings === !1;
        this.decodeStrings = !C, this.defaultEncoding = w.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(L) {
            H(q, L)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new r(this)
    }
    b.prototype.getBuffer = function() {
            for (var q = this.bufferedRequest, A = []; q;) A.push(q), q = q.next;
            return A
        },
        function() {
            try {
                Object.defineProperty(b.prototype, "buffer", {
                    get: e.deprecate(function() {
                        return this.getBuffer()
                    }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                })
            } catch {}
        }();
    var g;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (g = Function.prototype[Symbol.hasInstance], Object.defineProperty(x, Symbol.hasInstance, {
        value: function(w) {
            return g.call(this, w) ? !0 : this !== x ? !1 : w && w._writableState instanceof b
        }
    })) : g = function(w) {
        return w instanceof this
    };

    function x(w) {
        if (i = i || require_stream_duplex(), !g.call(x, this) && !(this instanceof i)) return new x(w);
        this._writableState = new b(w, this), this.writable = !0, w && (typeof w.write == "function" && (this._write = w.write), typeof w.writev == "function" && (this._writev = w.writev), typeof w.destroy == "function" && (this._destroy = w.destroy), typeof w.final == "function" && (this._final = w.final)), d.call(this)
    }
    x.prototype.pipe = function() {
        this.emit("error", new Error("Cannot pipe, not readable"))
    };

    function E(w, q) {
        var A = new Error("write after end");
        w.emit("error", A), s.nextTick(q, A)
    }

    function R(w, q, A, M) {
        var S = !0,
            m = !1;
        return A === null ? m = new TypeError("May not write null values to stream") : typeof A != "string" && A !== void 0 && !q.objectMode && (m = new TypeError("Invalid non-string/buffer chunk")), m && (w.emit("error", m), s.nextTick(M, m), S = !1), S
    }
    x.prototype.write = function(w, q, A) {
        var M = this._writableState,
            S = !1,
            m = !M.objectMode && u(w);
        return m && !l.isBuffer(w) && (w = a(w)), typeof q == "function" && (A = q, q = null), m ? q = "buffer" : q || (q = M.defaultEncoding), typeof A != "function" && (A = p), M.ended ? E(this, A) : (m || R(this, M, w, A)) && (M.pendingcb++, S = I(this, M, m, w, q, A)), S
    }, x.prototype.cork = function() {
        var w = this._writableState;
        w.corked++
    }, x.prototype.uncork = function() {
        var w = this._writableState;
        w.corked && (w.corked--, !w.writing && !w.corked && !w.bufferProcessing && w.bufferedRequest && J(this, w))
    }, x.prototype.setDefaultEncoding = function(q) {
        if (typeof q == "string" && (q = q.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((q + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + q);
        return this._writableState.defaultEncoding = q, this
    };

    function k(w, q, A) {
        return !w.objectMode && w.decodeStrings !== !1 && typeof q == "string" && (q = l.from(q, A)), q
    }
    Object.defineProperty(x.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function I(w, q, A, M, S, m) {
        if (!A) {
            var C = k(q, M, S);
            M !== C && (A = !0, S = "buffer", M = C)
        }
        var L = q.objectMode ? 1 : M.length;
        q.length += L;
        var U = q.length < q.highWaterMark;
        if (U || (q.needDrain = !0), q.writing || q.corked) {
            var K = q.lastBufferedRequest;
            q.lastBufferedRequest = {
                chunk: M,
                encoding: S,
                isBuf: A,
                callback: m,
                next: null
            }, K ? K.next = q.lastBufferedRequest : q.bufferedRequest = q.lastBufferedRequest, q.bufferedRequestCount += 1
        } else $(w, q, !1, L, M, S, m);
        return U
    }

    function $(w, q, A, M, S, m, C) {
        q.writelen = M, q.writecb = C, q.writing = !0, q.sync = !0, A ? w._writev(S, q.onwrite) : w._write(S, m, q.onwrite), q.sync = !1
    }

    function j(w, q, A, M, S) {
        --q.pendingcb, A ? (s.nextTick(S, M), s.nextTick(t, w, q), w._writableState.errorEmitted = !0, w.emit("error", M)) : (S(M), w._writableState.errorEmitted = !0, w.emit("error", M), t(w, q))
    }

    function O(w) {
        w.writing = !1, w.writecb = null, w.length -= w.writelen, w.writelen = 0
    }

    function H(w, q) {
        var A = w._writableState,
            M = A.sync,
            S = A.writecb;
        if (O(A), q) j(w, A, M, q, S);
        else {
            var m = D(A);
            !m && !A.corked && !A.bufferProcessing && A.bufferedRequest && J(w, A), M ? n(X, w, A, m, S) : X(w, A, m, S)
        }
    }

    function X(w, q, A, M) {
        A || W(w, q), q.pendingcb--, M(), t(w, q)
    }

    function W(w, q) {
        q.length === 0 && q.needDrain && (q.needDrain = !1, w.emit("drain"))
    }

    function J(w, q) {
        q.bufferProcessing = !0;
        var A = q.bufferedRequest;
        if (w._writev && A && A.next) {
            var M = q.bufferedRequestCount,
                S = new Array(M),
                m = q.corkedRequestsFree;
            m.entry = A;
            for (var C = 0, L = !0; A;) S[C] = A, A.isBuf || (L = !1), A = A.next, C += 1;
            S.allBuffers = L, $(w, q, !0, q.length, S, "", m.finish), q.pendingcb++, q.lastBufferedRequest = null, m.next ? (q.corkedRequestsFree = m.next, m.next = null) : q.corkedRequestsFree = new r(q), q.bufferedRequestCount = 0
        } else {
            for (; A;) {
                var U = A.chunk,
                    K = A.encoding,
                    P = A.callback,
                    N = q.objectMode ? 1 : U.length;
                if ($(w, q, !1, N, U, K, P), A = A.next, q.bufferedRequestCount--, q.writing) break
            }
            A === null && (q.lastBufferedRequest = null)
        }
        q.bufferedRequest = A, q.bufferProcessing = !1
    }
    x.prototype._write = function(w, q, A) {
        A(new Error("_write() is not implemented"))
    }, x.prototype._writev = null, x.prototype.end = function(w, q, A) {
        var M = this._writableState;
        typeof w == "function" ? (A = w, w = null, q = null) : typeof q == "function" && (A = q, q = null), w != null && this.write(w, q), M.corked && (M.corked = 1, this.uncork()), M.ending || c(this, M, A)
    };

    function D(w) {
        return w.ending && w.length === 0 && w.bufferedRequest === null && !w.finished && !w.writing
    }

    function B(w, q) {
        w._final(function(A) {
            q.pendingcb--, A && w.emit("error", A), q.prefinished = !0, w.emit("prefinish"), t(w, q)
        })
    }

    function y(w, q) {
        !q.prefinished && !q.finalCalled && (typeof w._final == "function" ? (q.pendingcb++, q.finalCalled = !0, s.nextTick(B, w, q)) : (q.prefinished = !0, w.emit("prefinish")))
    }

    function t(w, q) {
        var A = D(q);
        return A && (y(w, q), q.pendingcb === 0 && (q.finished = !0, w.emit("finish"))), A
    }

    function c(w, q, A) {
        q.ending = !0, t(w, q), A && (q.finished ? s.nextTick(A) : w.once("finish", A)), q.ended = !0, w.writable = !1
    }

    function _(w, q, A) {
        var M = w.entry;
        for (w.entry = null; M;) {
            var S = M.callback;
            q.pendingcb--, S(A), M = M.next
        }
        q.corkedRequestsFree.next = w
    }
    return Object.defineProperty(x.prototype, "destroyed", {
        get: function() {
            return this._writableState === void 0 ? !1 : this._writableState.destroyed
        },
        set: function(w) {
            this._writableState && (this._writableState.destroyed = w)
        }
    }), x.prototype.destroy = h.destroy, x.prototype._undestroy = h.undestroy, x.prototype._destroy = function(w, q) {
        this.end(), q(w)
    }, _stream_writable
}
var _stream_duplex, hasRequired_stream_duplex;

function require_stream_duplex() {
    if (hasRequired_stream_duplex) return _stream_duplex;
    hasRequired_stream_duplex = 1;
    var s = requireProcessNextickArgs(),
        r = Object.keys || function(h) {
            var p = [];
            for (var b in h) p.push(b);
            return p
        };
    _stream_duplex = v;
    var n = Object.create(requireUtil$2());
    n.inherits = requireInherits_browser();
    var i = require_stream_readable(),
        f = require_stream_writable();
    n.inherits(v, i);
    for (var e = r(f.prototype), d = 0; d < e.length; d++) {
        var l = e[d];
        v.prototype[l] || (v.prototype[l] = f.prototype[l])
    }

    function v(h) {
        if (!(this instanceof v)) return new v(h);
        i.call(this, h), f.call(this, h), h && h.readable === !1 && (this.readable = !1), h && h.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, h && h.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", a)
    }
    Object.defineProperty(v.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function a() {
        this.allowHalfOpen || this._writableState.ended || s.nextTick(u, this)
    }

    function u(h) {
        h.end()
    }
    return Object.defineProperty(v.prototype, "destroyed", {
        get: function() {
            return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
        },
        set: function(h) {
            this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = h, this._writableState.destroyed = h)
        }
    }), v.prototype._destroy = function(h, p) {
        this.push(null), this.end(), s.nextTick(p, h)
    }, _stream_duplex
}
var _stream_readable, hasRequired_stream_readable;

function require_stream_readable() {
    if (hasRequired_stream_readable) return _stream_readable;
    hasRequired_stream_readable = 1;
    var s = requireProcessNextickArgs();
    _stream_readable = k;
    var r = requireIsarray(),
        n;
    k.ReadableState = R, requireEvents().EventEmitter;
    var i = function(P, N) {
            return P.listeners(N).length
        },
        f = requireStreamBrowser(),
        e = requireSafeBuffer().Buffer,
        d = (typeof commonjsGlobal < "u" ? commonjsGlobal : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function l(P) {
        return e.from(P)
    }

    function v(P) {
        return e.isBuffer(P) || P instanceof d
    }
    var a = Object.create(requireUtil$2());
    a.inherits = requireInherits_browser();
    var u = requireUtil$1(),
        h = void 0;
    u && u.debuglog ? h = u.debuglog("stream") : h = function() {};
    var p = requireBufferList(),
        b = requireDestroy(),
        g;
    a.inherits(k, f);
    var x = ["error", "close", "destroy", "pause", "resume"];

    function E(P, N, z) {
        if (typeof P.prependListener == "function") return P.prependListener(N, z);
        !P._events || !P._events[N] ? P.on(N, z) : r(P._events[N]) ? P._events[N].unshift(z) : P._events[N] = [z, P._events[N]]
    }

    function R(P, N) {
        n = n || require_stream_duplex(), P = P || {};
        var z = N instanceof n;
        this.objectMode = !!P.objectMode, z && (this.objectMode = this.objectMode || !!P.readableObjectMode);
        var V = P.highWaterMark,
            Q = P.readableHighWaterMark,
            G = this.objectMode ? 16 : 16 * 1024;
        V || V === 0 ? this.highWaterMark = V : z && (Q || Q === 0) ? this.highWaterMark = Q : this.highWaterMark = G, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = P.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, P.encoding && (g || (g = requireString_decoder().StringDecoder), this.decoder = new g(P.encoding), this.encoding = P.encoding)
    }

    function k(P) {
        if (n = n || require_stream_duplex(), !(this instanceof k)) return new k(P);
        this._readableState = new R(P, this), this.readable = !0, P && (typeof P.read == "function" && (this._read = P.read), typeof P.destroy == "function" && (this._destroy = P.destroy)), f.call(this)
    }
    Object.defineProperty(k.prototype, "destroyed", {
        get: function() {
            return this._readableState === void 0 ? !1 : this._readableState.destroyed
        },
        set: function(P) {
            this._readableState && (this._readableState.destroyed = P)
        }
    }), k.prototype.destroy = b.destroy, k.prototype._undestroy = b.undestroy, k.prototype._destroy = function(P, N) {
        this.push(null), N(P)
    }, k.prototype.push = function(P, N) {
        var z = this._readableState,
            V;
        return z.objectMode ? V = !0 : typeof P == "string" && (N = N || z.defaultEncoding, N !== z.encoding && (P = e.from(P, N), N = ""), V = !0), I(this, P, N, !1, V)
    }, k.prototype.unshift = function(P) {
        return I(this, P, null, !0, !1)
    };

    function I(P, N, z, V, Q) {
        var G = P._readableState;
        if (N === null) G.reading = !1, J(P, G);
        else {
            var te;
            Q || (te = j(G, N)), te ? P.emit("error", te) : G.objectMode || N && N.length > 0 ? (typeof N != "string" && !G.objectMode && Object.getPrototypeOf(N) !== e.prototype && (N = l(N)), V ? G.endEmitted ? P.emit("error", new Error("stream.unshift() after end event")) : $(P, G, N, !0) : G.ended ? P.emit("error", new Error("stream.push() after EOF")) : (G.reading = !1, G.decoder && !z ? (N = G.decoder.write(N), G.objectMode || N.length !== 0 ? $(P, G, N, !1) : y(P, G)) : $(P, G, N, !1))) : V || (G.reading = !1)
        }
        return O(G)
    }

    function $(P, N, z, V) {
        N.flowing && N.length === 0 && !N.sync ? (P.emit("data", z), P.read(0)) : (N.length += N.objectMode ? 1 : z.length, V ? N.buffer.unshift(z) : N.buffer.push(z), N.needReadable && D(P)), y(P, N)
    }

    function j(P, N) {
        var z;
        return !v(N) && typeof N != "string" && N !== void 0 && !P.objectMode && (z = new TypeError("Invalid non-string/buffer chunk")), z
    }

    function O(P) {
        return !P.ended && (P.needReadable || P.length < P.highWaterMark || P.length === 0)
    }
    k.prototype.isPaused = function() {
        return this._readableState.flowing === !1
    }, k.prototype.setEncoding = function(P) {
        return g || (g = requireString_decoder().StringDecoder), this._readableState.decoder = new g(P), this._readableState.encoding = P, this
    };
    var H = 8388608;

    function X(P) {
        return P >= H ? P = H : (P--, P |= P >>> 1, P |= P >>> 2, P |= P >>> 4, P |= P >>> 8, P |= P >>> 16, P++), P
    }

    function W(P, N) {
        return P <= 0 || N.length === 0 && N.ended ? 0 : N.objectMode ? 1 : P !== P ? N.flowing && N.length ? N.buffer.head.data.length : N.length : (P > N.highWaterMark && (N.highWaterMark = X(P)), P <= N.length ? P : N.ended ? N.length : (N.needReadable = !0, 0))
    }
    k.prototype.read = function(P) {
        h("read", P), P = parseInt(P, 10);
        var N = this._readableState,
            z = P;
        if (P !== 0 && (N.emittedReadable = !1), P === 0 && N.needReadable && (N.length >= N.highWaterMark || N.ended)) return h("read: emitReadable", N.length, N.ended), N.length === 0 && N.ended ? L(this) : D(this), null;
        if (P = W(P, N), P === 0 && N.ended) return N.length === 0 && L(this), null;
        var V = N.needReadable;
        h("need readable", V), (N.length === 0 || N.length - P < N.highWaterMark) && (V = !0, h("length less than watermark", V)), N.ended || N.reading ? (V = !1, h("reading or ended", V)) : V && (h("do read"), N.reading = !0, N.sync = !0, N.length === 0 && (N.needReadable = !0), this._read(N.highWaterMark), N.sync = !1, N.reading || (P = W(z, N)));
        var Q;
        return P > 0 ? Q = M(P, N) : Q = null, Q === null ? (N.needReadable = !0, P = 0) : N.length -= P, N.length === 0 && (N.ended || (N.needReadable = !0), z !== P && N.ended && L(this)), Q !== null && this.emit("data", Q), Q
    };

    function J(P, N) {
        if (!N.ended) {
            if (N.decoder) {
                var z = N.decoder.end();
                z && z.length && (N.buffer.push(z), N.length += N.objectMode ? 1 : z.length)
            }
            N.ended = !0, D(P)
        }
    }

    function D(P) {
        var N = P._readableState;
        N.needReadable = !1, N.emittedReadable || (h("emitReadable", N.flowing), N.emittedReadable = !0, N.sync ? s.nextTick(B, P) : B(P))
    }

    function B(P) {
        h("emit readable"), P.emit("readable"), A(P)
    }

    function y(P, N) {
        N.readingMore || (N.readingMore = !0, s.nextTick(t, P, N))
    }

    function t(P, N) {
        for (var z = N.length; !N.reading && !N.flowing && !N.ended && N.length < N.highWaterMark && (h("maybeReadMore read 0"), P.read(0), z !== N.length);) z = N.length;
        N.readingMore = !1
    }
    k.prototype._read = function(P) {
        this.emit("error", new Error("_read() is not implemented"))
    }, k.prototype.pipe = function(P, N) {
        var z = this,
            V = this._readableState;
        switch (V.pipesCount) {
            case 0:
                V.pipes = P;
                break;
            case 1:
                V.pipes = [V.pipes, P];
                break;
            default:
                V.pipes.push(P);
                break
        }
        V.pipesCount += 1, h("pipe count=%d opts=%j", V.pipesCount, N);
        var Q = (!N || N.end !== !1) && P !== process$1.stdout && P !== process$1.stderr,
            G = Q ? ve : be;
        V.endEmitted ? s.nextTick(G) : z.once("end", G), P.on("unpipe", te);

        function te(Z, Pe) {
            h("onunpipe"), Z === z && Pe && Pe.hasUnpiped === !1 && (Pe.hasUnpiped = !0, me())
        }

        function ve() {
            h("onend"), P.end()
        }
        var ee = c(z);
        P.on("drain", ee);
        var De = !1;

        function me() {
            h("cleanup"), P.removeListener("close", Y), P.removeListener("finish", $e), P.removeListener("drain", ee), P.removeListener("error", ye), P.removeListener("unpipe", te), z.removeListener("end", ve), z.removeListener("end", be), z.removeListener("data", Ne), De = !0, V.awaitDrain && (!P._writableState || P._writableState.needDrain) && ee()
        }
        var re = !1;
        z.on("data", Ne);

        function Ne(Z) {
            h("ondata"), re = !1;
            var Pe = P.write(Z);
            Pe === !1 && !re && ((V.pipesCount === 1 && V.pipes === P || V.pipesCount > 1 && K(V.pipes, P) !== -1) && !De && (h("false write response, pause", V.awaitDrain), V.awaitDrain++, re = !0), z.pause())
        }

        function ye(Z) {
            h("onerror", Z), be(), P.removeListener("error", ye), i(P, "error") === 0 && P.emit("error", Z)
        }
        E(P, "error", ye);

        function Y() {
            P.removeListener("finish", $e), be()
        }
        P.once("close", Y);

        function $e() {
            h("onfinish"), P.removeListener("close", Y), be()
        }
        P.once("finish", $e);

        function be() {
            h("unpipe"), z.unpipe(P)
        }
        return P.emit("pipe", z), V.flowing || (h("pipe resume"), z.resume()), P
    };

    function c(P) {
        return function() {
            var N = P._readableState;
            h("pipeOnDrain", N.awaitDrain), N.awaitDrain && N.awaitDrain--, N.awaitDrain === 0 && i(P, "data") && (N.flowing = !0, A(P))
        }
    }
    k.prototype.unpipe = function(P) {
        var N = this._readableState,
            z = {
                hasUnpiped: !1
            };
        if (N.pipesCount === 0) return this;
        if (N.pipesCount === 1) return P && P !== N.pipes ? this : (P || (P = N.pipes), N.pipes = null, N.pipesCount = 0, N.flowing = !1, P && P.emit("unpipe", this, z), this);
        if (!P) {
            var V = N.pipes,
                Q = N.pipesCount;
            N.pipes = null, N.pipesCount = 0, N.flowing = !1;
            for (var G = 0; G < Q; G++) V[G].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var te = K(N.pipes, P);
        return te === -1 ? this : (N.pipes.splice(te, 1), N.pipesCount -= 1, N.pipesCount === 1 && (N.pipes = N.pipes[0]), P.emit("unpipe", this, z), this)
    }, k.prototype.on = function(P, N) {
        var z = f.prototype.on.call(this, P, N);
        if (P === "data") this._readableState.flowing !== !1 && this.resume();
        else if (P === "readable") {
            var V = this._readableState;
            !V.endEmitted && !V.readableListening && (V.readableListening = V.needReadable = !0, V.emittedReadable = !1, V.reading ? V.length && D(this) : s.nextTick(_, this))
        }
        return z
    }, k.prototype.addListener = k.prototype.on;

    function _(P) {
        h("readable nexttick read 0"), P.read(0)
    }
    k.prototype.resume = function() {
        var P = this._readableState;
        return P.flowing || (h("resume"), P.flowing = !0, w(this, P)), this
    };

    function w(P, N) {
        N.resumeScheduled || (N.resumeScheduled = !0, s.nextTick(q, P, N))
    }

    function q(P, N) {
        N.reading || (h("resume read 0"), P.read(0)), N.resumeScheduled = !1, N.awaitDrain = 0, P.emit("resume"), A(P), N.flowing && !N.reading && P.read(0)
    }
    k.prototype.pause = function() {
        return h("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (h("pause"), this._readableState.flowing = !1, this.emit("pause")), this
    };

    function A(P) {
        var N = P._readableState;
        for (h("flow", N.flowing); N.flowing && P.read() !== null;);
    }
    k.prototype.wrap = function(P) {
        var N = this,
            z = this._readableState,
            V = !1;
        P.on("end", function() {
            if (h("wrapped end"), z.decoder && !z.ended) {
                var te = z.decoder.end();
                te && te.length && N.push(te)
            }
            N.push(null)
        }), P.on("data", function(te) {
            if (h("wrapped data"), z.decoder && (te = z.decoder.write(te)), !(z.objectMode && te == null) && !(!z.objectMode && (!te || !te.length))) {
                var ve = N.push(te);
                ve || (V = !0, P.pause())
            }
        });
        for (var Q in P) this[Q] === void 0 && typeof P[Q] == "function" && (this[Q] = function(te) {
            return function() {
                return P[te].apply(P, arguments)
            }
        }(Q));
        for (var G = 0; G < x.length; G++) P.on(x[G], this.emit.bind(this, x[G]));
        return this._read = function(te) {
            h("wrapped _read", te), V && (V = !1, P.resume())
        }, this
    }, Object.defineProperty(k.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }), k._fromList = M;

    function M(P, N) {
        if (N.length === 0) return null;
        var z;
        return N.objectMode ? z = N.buffer.shift() : !P || P >= N.length ? (N.decoder ? z = N.buffer.join("") : N.buffer.length === 1 ? z = N.buffer.head.data : z = N.buffer.concat(N.length), N.buffer.clear()) : z = S(P, N.buffer, N.decoder), z
    }

    function S(P, N, z) {
        var V;
        return P < N.head.data.length ? (V = N.head.data.slice(0, P), N.head.data = N.head.data.slice(P)) : P === N.head.data.length ? V = N.shift() : V = z ? m(P, N) : C(P, N), V
    }

    function m(P, N) {
        var z = N.head,
            V = 1,
            Q = z.data;
        for (P -= Q.length; z = z.next;) {
            var G = z.data,
                te = P > G.length ? G.length : P;
            if (te === G.length ? Q += G : Q += G.slice(0, P), P -= te, P === 0) {
                te === G.length ? (++V, z.next ? N.head = z.next : N.head = N.tail = null) : (N.head = z, z.data = G.slice(te));
                break
            }++V
        }
        return N.length -= V, Q
    }

    function C(P, N) {
        var z = e.allocUnsafe(P),
            V = N.head,
            Q = 1;
        for (V.data.copy(z), P -= V.data.length; V = V.next;) {
            var G = V.data,
                te = P > G.length ? G.length : P;
            if (G.copy(z, z.length - P, 0, te), P -= te, P === 0) {
                te === G.length ? (++Q, V.next ? N.head = V.next : N.head = N.tail = null) : (N.head = V, V.data = G.slice(te));
                break
            }++Q
        }
        return N.length -= Q, z
    }

    function L(P) {
        var N = P._readableState;
        if (N.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        N.endEmitted || (N.ended = !0, s.nextTick(U, N, P))
    }

    function U(P, N) {
        !P.endEmitted && P.length === 0 && (P.endEmitted = !0, N.readable = !1, N.emit("end"))
    }

    function K(P, N) {
        for (var z = 0, V = P.length; z < V; z++)
            if (P[z] === N) return z;
        return -1
    }
    return _stream_readable
}
var _stream_transform, hasRequired_stream_transform;

function require_stream_transform() {
    if (hasRequired_stream_transform) return _stream_transform;
    hasRequired_stream_transform = 1, _stream_transform = i;
    var s = require_stream_duplex(),
        r = Object.create(requireUtil$2());
    r.inherits = requireInherits_browser(), r.inherits(i, s);

    function n(d, l) {
        var v = this._transformState;
        v.transforming = !1;
        var a = v.writecb;
        if (!a) return this.emit("error", new Error("write callback called multiple times"));
        v.writechunk = null, v.writecb = null, l != null && this.push(l), a(d);
        var u = this._readableState;
        u.reading = !1, (u.needReadable || u.length < u.highWaterMark) && this._read(u.highWaterMark)
    }

    function i(d) {
        if (!(this instanceof i)) return new i(d);
        s.call(this, d), this._transformState = {
            afterTransform: n.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, d && (typeof d.transform == "function" && (this._transform = d.transform), typeof d.flush == "function" && (this._flush = d.flush)), this.on("prefinish", f)
    }

    function f() {
        var d = this;
        typeof this._flush == "function" ? this._flush(function(l, v) {
            e(d, l, v)
        }) : e(this, null, null)
    }
    i.prototype.push = function(d, l) {
        return this._transformState.needTransform = !1, s.prototype.push.call(this, d, l)
    }, i.prototype._transform = function(d, l, v) {
        throw new Error("_transform() is not implemented")
    }, i.prototype._write = function(d, l, v) {
        var a = this._transformState;
        if (a.writecb = v, a.writechunk = d, a.writeencoding = l, !a.transforming) {
            var u = this._readableState;
            (a.needTransform || u.needReadable || u.length < u.highWaterMark) && this._read(u.highWaterMark)
        }
    }, i.prototype._read = function(d) {
        var l = this._transformState;
        l.writechunk !== null && l.writecb && !l.transforming ? (l.transforming = !0, this._transform(l.writechunk, l.writeencoding, l.afterTransform)) : l.needTransform = !0
    }, i.prototype._destroy = function(d, l) {
        var v = this;
        s.prototype._destroy.call(this, d, function(a) {
            l(a), v.emit("close")
        })
    };

    function e(d, l, v) {
        if (l) return d.emit("error", l);
        if (v != null && d.push(v), d._writableState.length) throw new Error("Calling transform done when ws.length != 0");
        if (d._transformState.transforming) throw new Error("Calling transform done when still transforming");
        return d.push(null)
    }
    return _stream_transform
}
var _stream_passthrough, hasRequired_stream_passthrough;

function require_stream_passthrough() {
    if (hasRequired_stream_passthrough) return _stream_passthrough;
    hasRequired_stream_passthrough = 1, _stream_passthrough = n;
    var s = require_stream_transform(),
        r = Object.create(requireUtil$2());
    r.inherits = requireInherits_browser(), r.inherits(n, s);

    function n(i) {
        if (!(this instanceof n)) return new n(i);
        s.call(this, i)
    }
    return n.prototype._transform = function(i, f, e) {
        e(null, i)
    }, _stream_passthrough
}
var hasRequiredReadableBrowser;

function requireReadableBrowser() {
    return hasRequiredReadableBrowser || (hasRequiredReadableBrowser = 1, function(s, r) {
        r = s.exports = require_stream_readable(), r.Stream = r, r.Readable = r, r.Writable = require_stream_writable(), r.Duplex = require_stream_duplex(), r.Transform = require_stream_transform(), r.PassThrough = require_stream_passthrough()
    }(readableBrowser, readableBrowser.exports)), readableBrowser.exports
}
var sign = {
        exports: {}
    },
    bn$3 = {
        exports: {}
    },
    bn$2 = bn$3.exports,
    hasRequiredBn$1;

function requireBn$1() {
    return hasRequiredBn$1 || (hasRequiredBn$1 = 1, function(s) {
        (function(r, n) {
            function i(y, t) {
                if (!y) throw new Error(t || "Assertion failed")
            }

            function f(y, t) {
                y.super_ = t;
                var c = function() {};
                c.prototype = t.prototype, y.prototype = new c, y.prototype.constructor = y
            }

            function e(y, t, c) {
                if (e.isBN(y)) return y;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, y !== null && ((t === "le" || t === "be") && (c = t, t = 10), this._init(y || 0, t || 10, c || "be"))
            }
            typeof r == "object" ? r.exports = e : n.BN = e, e.BN = e, e.wordSize = 26;
            var d;
            try {
                typeof window < "u" && typeof window.Buffer < "u" ? d = window.Buffer : d = requireDist$1().Buffer
            } catch {}
            e.isBN = function(t) {
                return t instanceof e ? !0 : t !== null && typeof t == "object" && t.constructor.wordSize === e.wordSize && Array.isArray(t.words)
            }, e.max = function(t, c) {
                return t.cmp(c) > 0 ? t : c
            }, e.min = function(t, c) {
                return t.cmp(c) < 0 ? t : c
            }, e.prototype._init = function(t, c, _) {
                if (typeof t == "number") return this._initNumber(t, c, _);
                if (typeof t == "object") return this._initArray(t, c, _);
                c === "hex" && (c = 16), i(c === (c | 0) && c >= 2 && c <= 36), t = t.toString().replace(/\s+/g, "");
                var w = 0;
                t[0] === "-" && (w++, this.negative = 1), w < t.length && (c === 16 ? this._parseHex(t, w, _) : (this._parseBase(t, c, w), _ === "le" && this._initArray(this.toArray(), c, _)))
            }, e.prototype._initNumber = function(t, c, _) {
                t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [t & 67108863, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [t & 67108863, t / 67108864 & 67108863, 1], this.length = 3), _ === "le" && this._initArray(this.toArray(), c, _)
            }, e.prototype._initArray = function(t, c, _) {
                if (i(typeof t.length == "number"), t.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                for (var w = 0; w < this.length; w++) this.words[w] = 0;
                var q, A, M = 0;
                if (_ === "be")
                    for (w = t.length - 1, q = 0; w >= 0; w -= 3) A = t[w] | t[w - 1] << 8 | t[w - 2] << 16, this.words[q] |= A << M & 67108863, this.words[q + 1] = A >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, q++);
                else if (_ === "le")
                    for (w = 0, q = 0; w < t.length; w += 3) A = t[w] | t[w + 1] << 8 | t[w + 2] << 16, this.words[q] |= A << M & 67108863, this.words[q + 1] = A >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, q++);
                return this._strip()
            };

            function l(y, t) {
                var c = y.charCodeAt(t);
                if (c >= 48 && c <= 57) return c - 48;
                if (c >= 65 && c <= 70) return c - 55;
                if (c >= 97 && c <= 102) return c - 87;
                i(!1, "Invalid character in " + y)
            }

            function v(y, t, c) {
                var _ = l(y, c);
                return c - 1 >= t && (_ |= l(y, c - 1) << 4), _
            }
            e.prototype._parseHex = function(t, c, _) {
                this.length = Math.ceil((t.length - c) / 6), this.words = new Array(this.length);
                for (var w = 0; w < this.length; w++) this.words[w] = 0;
                var q = 0,
                    A = 0,
                    M;
                if (_ === "be")
                    for (w = t.length - 1; w >= c; w -= 2) M = v(t, c, w) << q, this.words[A] |= M & 67108863, q >= 18 ? (q -= 18, A += 1, this.words[A] |= M >>> 26) : q += 8;
                else {
                    var S = t.length - c;
                    for (w = S % 2 === 0 ? c + 1 : c; w < t.length; w += 2) M = v(t, c, w) << q, this.words[A] |= M & 67108863, q >= 18 ? (q -= 18, A += 1, this.words[A] |= M >>> 26) : q += 8
                }
                this._strip()
            };

            function a(y, t, c, _) {
                for (var w = 0, q = 0, A = Math.min(y.length, c), M = t; M < A; M++) {
                    var S = y.charCodeAt(M) - 48;
                    w *= _, S >= 49 ? q = S - 49 + 10 : S >= 17 ? q = S - 17 + 10 : q = S, i(S >= 0 && q < _, "Invalid character"), w += q
                }
                return w
            }
            e.prototype._parseBase = function(t, c, _) {
                this.words = [0], this.length = 1;
                for (var w = 0, q = 1; q <= 67108863; q *= c) w++;
                w--, q = q / c | 0;
                for (var A = t.length - _, M = A % w, S = Math.min(A, A - M) + _, m = 0, C = _; C < S; C += w) m = a(t, C, C + w, c), this.imuln(q), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m);
                if (M !== 0) {
                    var L = 1;
                    for (m = a(t, C, t.length, c), C = 0; C < M; C++) L *= c;
                    this.imuln(L), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m)
                }
                this._strip()
            }, e.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for (var c = 0; c < this.length; c++) t.words[c] = this.words[c];
                t.length = this.length, t.negative = this.negative, t.red = this.red
            };

            function u(y, t) {
                y.words = t.words, y.length = t.length, y.negative = t.negative, y.red = t.red
            }
            if (e.prototype._move = function(t) {
                    u(t, this)
                }, e.prototype.clone = function() {
                    var t = new e(null);
                    return this.copy(t), t
                }, e.prototype._expand = function(t) {
                    for (; this.length < t;) this.words[this.length++] = 0;
                    return this
                }, e.prototype._strip = function() {
                    for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                    return this._normSign()
                }, e.prototype._normSign = function() {
                    return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
                }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
                e.prototype[Symbol.for("nodejs.util.inspect.custom")] = h
            } catch {
                e.prototype.inspect = h
            } else e.prototype.inspect = h;

            function h() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var p = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                b = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                g = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            e.prototype.toString = function(t, c) {
                t = t || 10, c = c | 0 || 1;
                var _;
                if (t === 16 || t === "hex") {
                    _ = "";
                    for (var w = 0, q = 0, A = 0; A < this.length; A++) {
                        var M = this.words[A],
                            S = ((M << w | q) & 16777215).toString(16);
                        q = M >>> 24 - w & 16777215, w += 2, w >= 26 && (w -= 26, A--), q !== 0 || A !== this.length - 1 ? _ = p[6 - S.length] + S + _ : _ = S + _
                    }
                    for (q !== 0 && (_ = q.toString(16) + _); _.length % c !== 0;) _ = "0" + _;
                    return this.negative !== 0 && (_ = "-" + _), _
                }
                if (t === (t | 0) && t >= 2 && t <= 36) {
                    var m = b[t],
                        C = g[t];
                    _ = "";
                    var L = this.clone();
                    for (L.negative = 0; !L.isZero();) {
                        var U = L.modrn(C).toString(t);
                        L = L.idivn(C), L.isZero() ? _ = U + _ : _ = p[m - U.length] + U + _
                    }
                    for (this.isZero() && (_ = "0" + _); _.length % c !== 0;) _ = "0" + _;
                    return this.negative !== 0 && (_ = "-" + _), _
                }
                i(!1, "Base should be between 2 and 36")
            }, e.prototype.toNumber = function() {
                var t = this.words[0];
                return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t
            }, e.prototype.toJSON = function() {
                return this.toString(16, 2)
            }, d && (e.prototype.toBuffer = function(t, c) {
                return this.toArrayLike(d, t, c)
            }), e.prototype.toArray = function(t, c) {
                return this.toArrayLike(Array, t, c)
            };
            var x = function(t, c) {
                return t.allocUnsafe ? t.allocUnsafe(c) : new t(c)
            };
            e.prototype.toArrayLike = function(t, c, _) {
                this._strip();
                var w = this.byteLength(),
                    q = _ || Math.max(1, w);
                i(w <= q, "byte array longer than desired length"), i(q > 0, "Requested array length <= 0");
                var A = x(t, q),
                    M = c === "le" ? "LE" : "BE";
                return this["_toArrayLike" + M](A, w), A
            }, e.prototype._toArrayLikeLE = function(t, c) {
                for (var _ = 0, w = 0, q = 0, A = 0; q < this.length; q++) {
                    var M = this.words[q] << A | w;
                    t[_++] = M & 255, _ < t.length && (t[_++] = M >> 8 & 255), _ < t.length && (t[_++] = M >> 16 & 255), A === 6 ? (_ < t.length && (t[_++] = M >> 24 & 255), w = 0, A = 0) : (w = M >>> 24, A += 2)
                }
                if (_ < t.length)
                    for (t[_++] = w; _ < t.length;) t[_++] = 0
            }, e.prototype._toArrayLikeBE = function(t, c) {
                for (var _ = t.length - 1, w = 0, q = 0, A = 0; q < this.length; q++) {
                    var M = this.words[q] << A | w;
                    t[_--] = M & 255, _ >= 0 && (t[_--] = M >> 8 & 255), _ >= 0 && (t[_--] = M >> 16 & 255), A === 6 ? (_ >= 0 && (t[_--] = M >> 24 & 255), w = 0, A = 0) : (w = M >>> 24, A += 2)
                }
                if (_ >= 0)
                    for (t[_--] = w; _ >= 0;) t[_--] = 0
            }, Math.clz32 ? e.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            } : e.prototype._countBits = function(t) {
                var c = t,
                    _ = 0;
                return c >= 4096 && (_ += 13, c >>>= 13), c >= 64 && (_ += 7, c >>>= 7), c >= 8 && (_ += 4, c >>>= 4), c >= 2 && (_ += 2, c >>>= 2), _ + c
            }, e.prototype._zeroBits = function(t) {
                if (t === 0) return 26;
                var c = t,
                    _ = 0;
                return (c & 8191) === 0 && (_ += 13, c >>>= 13), (c & 127) === 0 && (_ += 7, c >>>= 7), (c & 15) === 0 && (_ += 4, c >>>= 4), (c & 3) === 0 && (_ += 2, c >>>= 2), (c & 1) === 0 && _++, _
            }, e.prototype.bitLength = function() {
                var t = this.words[this.length - 1],
                    c = this._countBits(t);
                return (this.length - 1) * 26 + c
            };

            function E(y) {
                for (var t = new Array(y.bitLength()), c = 0; c < t.length; c++) {
                    var _ = c / 26 | 0,
                        w = c % 26;
                    t[c] = y.words[_] >>> w & 1
                }
                return t
            }
            e.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var t = 0, c = 0; c < this.length; c++) {
                    var _ = this._zeroBits(this.words[c]);
                    if (t += _, _ !== 26) break
                }
                return t
            }, e.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }, e.prototype.toTwos = function(t) {
                return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone()
            }, e.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            }, e.prototype.isNeg = function() {
                return this.negative !== 0
            }, e.prototype.neg = function() {
                return this.clone().ineg()
            }, e.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this
            }, e.prototype.iuor = function(t) {
                for (; this.length < t.length;) this.words[this.length++] = 0;
                for (var c = 0; c < t.length; c++) this.words[c] = this.words[c] | t.words[c];
                return this._strip()
            }, e.prototype.ior = function(t) {
                return i((this.negative | t.negative) === 0), this.iuor(t)
            }, e.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }, e.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }, e.prototype.iuand = function(t) {
                var c;
                this.length > t.length ? c = t : c = this;
                for (var _ = 0; _ < c.length; _++) this.words[_] = this.words[_] & t.words[_];
                return this.length = c.length, this._strip()
            }, e.prototype.iand = function(t) {
                return i((this.negative | t.negative) === 0), this.iuand(t)
            }, e.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }, e.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }, e.prototype.iuxor = function(t) {
                var c, _;
                this.length > t.length ? (c = this, _ = t) : (c = t, _ = this);
                for (var w = 0; w < _.length; w++) this.words[w] = c.words[w] ^ _.words[w];
                if (this !== c)
                    for (; w < c.length; w++) this.words[w] = c.words[w];
                return this.length = c.length, this._strip()
            }, e.prototype.ixor = function(t) {
                return i((this.negative | t.negative) === 0), this.iuxor(t)
            }, e.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }, e.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }, e.prototype.inotn = function(t) {
                i(typeof t == "number" && t >= 0);
                var c = Math.ceil(t / 26) | 0,
                    _ = t % 26;
                this._expand(c), _ > 0 && c--;
                for (var w = 0; w < c; w++) this.words[w] = ~this.words[w] & 67108863;
                return _ > 0 && (this.words[w] = ~this.words[w] & 67108863 >> 26 - _), this._strip()
            }, e.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }, e.prototype.setn = function(t, c) {
                i(typeof t == "number" && t >= 0);
                var _ = t / 26 | 0,
                    w = t % 26;
                return this._expand(_ + 1), c ? this.words[_] = this.words[_] | 1 << w : this.words[_] = this.words[_] & ~(1 << w), this._strip()
            }, e.prototype.iadd = function(t) {
                var c;
                if (this.negative !== 0 && t.negative === 0) return this.negative = 0, c = this.isub(t), this.negative ^= 1, this._normSign();
                if (this.negative === 0 && t.negative !== 0) return t.negative = 0, c = this.isub(t), t.negative = 1, c._normSign();
                var _, w;
                this.length > t.length ? (_ = this, w = t) : (_ = t, w = this);
                for (var q = 0, A = 0; A < w.length; A++) c = (_.words[A] | 0) + (w.words[A] | 0) + q, this.words[A] = c & 67108863, q = c >>> 26;
                for (; q !== 0 && A < _.length; A++) c = (_.words[A] | 0) + q, this.words[A] = c & 67108863, q = c >>> 26;
                if (this.length = _.length, q !== 0) this.words[this.length] = q, this.length++;
                else if (_ !== this)
                    for (; A < _.length; A++) this.words[A] = _.words[A];
                return this
            }, e.prototype.add = function(t) {
                var c;
                return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, c = this.sub(t), t.negative ^= 1, c) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, c = t.sub(this), this.negative = 1, c) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }, e.prototype.isub = function(t) {
                if (t.negative !== 0) {
                    t.negative = 0;
                    var c = this.iadd(t);
                    return t.negative = 1, c._normSign()
                } else if (this.negative !== 0) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                var _ = this.cmp(t);
                if (_ === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                var w, q;
                _ > 0 ? (w = this, q = t) : (w = t, q = this);
                for (var A = 0, M = 0; M < q.length; M++) c = (w.words[M] | 0) - (q.words[M] | 0) + A, A = c >> 26, this.words[M] = c & 67108863;
                for (; A !== 0 && M < w.length; M++) c = (w.words[M] | 0) + A, A = c >> 26, this.words[M] = c & 67108863;
                if (A === 0 && M < w.length && w !== this)
                    for (; M < w.length; M++) this.words[M] = w.words[M];
                return this.length = Math.max(this.length, M), w !== this && (this.negative = 1), this._strip()
            }, e.prototype.sub = function(t) {
                return this.clone().isub(t)
            };

            function R(y, t, c) {
                c.negative = t.negative ^ y.negative;
                var _ = y.length + t.length | 0;
                c.length = _, _ = _ - 1 | 0;
                var w = y.words[0] | 0,
                    q = t.words[0] | 0,
                    A = w * q,
                    M = A & 67108863,
                    S = A / 67108864 | 0;
                c.words[0] = M;
                for (var m = 1; m < _; m++) {
                    for (var C = S >>> 26, L = S & 67108863, U = Math.min(m, t.length - 1), K = Math.max(0, m - y.length + 1); K <= U; K++) {
                        var P = m - K | 0;
                        w = y.words[P] | 0, q = t.words[K] | 0, A = w * q + L, C += A / 67108864 | 0, L = A & 67108863
                    }
                    c.words[m] = L | 0, S = C | 0
                }
                return S !== 0 ? c.words[m] = S | 0 : c.length--, c._strip()
            }
            var k = function(t, c, _) {
                var w = t.words,
                    q = c.words,
                    A = _.words,
                    M = 0,
                    S, m, C, L = w[0] | 0,
                    U = L & 8191,
                    K = L >>> 13,
                    P = w[1] | 0,
                    N = P & 8191,
                    z = P >>> 13,
                    V = w[2] | 0,
                    Q = V & 8191,
                    G = V >>> 13,
                    te = w[3] | 0,
                    ve = te & 8191,
                    ee = te >>> 13,
                    De = w[4] | 0,
                    me = De & 8191,
                    re = De >>> 13,
                    Ne = w[5] | 0,
                    ye = Ne & 8191,
                    Y = Ne >>> 13,
                    $e = w[6] | 0,
                    be = $e & 8191,
                    Z = $e >>> 13,
                    Pe = w[7] | 0,
                    ge = Pe & 8191,
                    ie = Pe >>> 13,
                    je = w[8] | 0,
                    xe = je & 8191,
                    ne = je >>> 13,
                    Te = w[9] | 0,
                    Me = Te & 8191,
                    ae = Te >>> 13,
                    Oe = q[0] | 0,
                    qe = Oe & 8191,
                    fe = Oe >>> 13,
                    ze = q[1] | 0,
                    Se = ze & 8191,
                    se = ze >>> 13,
                    Le = q[2] | 0,
                    Be = Le & 8191,
                    oe = Le >>> 13,
                    Ue = q[3] | 0,
                    Ae = Ue & 8191,
                    ue = Ue >>> 13,
                    We = q[4] | 0,
                    Ee = We & 8191,
                    he = We >>> 13,
                    He = q[5] | 0,
                    Re = He & 8191,
                    ce = He >>> 13,
                    Ke = q[6] | 0,
                    ke = Ke & 8191,
                    de = Ke >>> 13,
                    Fe = q[7] | 0,
                    Ce = Fe & 8191,
                    le = Fe >>> 13,
                    Xe = q[8] | 0,
                    Ie = Xe & 8191,
                    pe = Xe >>> 13,
                    Ve = q[9] | 0,
                    _e = Ve & 8191,
                    we = Ve >>> 13;
                _.negative = t.negative ^ c.negative, _.length = 19, S = Math.imul(U, qe), m = Math.imul(U, fe), m = m + Math.imul(K, qe) | 0, C = Math.imul(K, fe);
                var Ge = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, S = Math.imul(N, qe), m = Math.imul(N, fe), m = m + Math.imul(z, qe) | 0, C = Math.imul(z, fe), S = S + Math.imul(U, Se) | 0, m = m + Math.imul(U, se) | 0, m = m + Math.imul(K, Se) | 0, C = C + Math.imul(K, se) | 0;
                var Je = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, S = Math.imul(Q, qe), m = Math.imul(Q, fe), m = m + Math.imul(G, qe) | 0, C = Math.imul(G, fe), S = S + Math.imul(N, Se) | 0, m = m + Math.imul(N, se) | 0, m = m + Math.imul(z, Se) | 0, C = C + Math.imul(z, se) | 0, S = S + Math.imul(U, Be) | 0, m = m + Math.imul(U, oe) | 0, m = m + Math.imul(K, Be) | 0, C = C + Math.imul(K, oe) | 0;
                var Ye = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, S = Math.imul(ve, qe), m = Math.imul(ve, fe), m = m + Math.imul(ee, qe) | 0, C = Math.imul(ee, fe), S = S + Math.imul(Q, Se) | 0, m = m + Math.imul(Q, se) | 0, m = m + Math.imul(G, Se) | 0, C = C + Math.imul(G, se) | 0, S = S + Math.imul(N, Be) | 0, m = m + Math.imul(N, oe) | 0, m = m + Math.imul(z, Be) | 0, C = C + Math.imul(z, oe) | 0, S = S + Math.imul(U, Ae) | 0, m = m + Math.imul(U, ue) | 0, m = m + Math.imul(K, Ae) | 0, C = C + Math.imul(K, ue) | 0;
                var Qe = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, S = Math.imul(me, qe), m = Math.imul(me, fe), m = m + Math.imul(re, qe) | 0, C = Math.imul(re, fe), S = S + Math.imul(ve, Se) | 0, m = m + Math.imul(ve, se) | 0, m = m + Math.imul(ee, Se) | 0, C = C + Math.imul(ee, se) | 0, S = S + Math.imul(Q, Be) | 0, m = m + Math.imul(Q, oe) | 0, m = m + Math.imul(G, Be) | 0, C = C + Math.imul(G, oe) | 0, S = S + Math.imul(N, Ae) | 0, m = m + Math.imul(N, ue) | 0, m = m + Math.imul(z, Ae) | 0, C = C + Math.imul(z, ue) | 0, S = S + Math.imul(U, Ee) | 0, m = m + Math.imul(U, he) | 0, m = m + Math.imul(K, Ee) | 0, C = C + Math.imul(K, he) | 0;
                var Ze = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, S = Math.imul(ye, qe), m = Math.imul(ye, fe), m = m + Math.imul(Y, qe) | 0, C = Math.imul(Y, fe), S = S + Math.imul(me, Se) | 0, m = m + Math.imul(me, se) | 0, m = m + Math.imul(re, Se) | 0, C = C + Math.imul(re, se) | 0, S = S + Math.imul(ve, Be) | 0, m = m + Math.imul(ve, oe) | 0, m = m + Math.imul(ee, Be) | 0, C = C + Math.imul(ee, oe) | 0, S = S + Math.imul(Q, Ae) | 0, m = m + Math.imul(Q, ue) | 0, m = m + Math.imul(G, Ae) | 0, C = C + Math.imul(G, ue) | 0, S = S + Math.imul(N, Ee) | 0, m = m + Math.imul(N, he) | 0, m = m + Math.imul(z, Ee) | 0, C = C + Math.imul(z, he) | 0, S = S + Math.imul(U, Re) | 0, m = m + Math.imul(U, ce) | 0, m = m + Math.imul(K, Re) | 0, C = C + Math.imul(K, ce) | 0;
                var er = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, S = Math.imul(be, qe), m = Math.imul(be, fe), m = m + Math.imul(Z, qe) | 0, C = Math.imul(Z, fe), S = S + Math.imul(ye, Se) | 0, m = m + Math.imul(ye, se) | 0, m = m + Math.imul(Y, Se) | 0, C = C + Math.imul(Y, se) | 0, S = S + Math.imul(me, Be) | 0, m = m + Math.imul(me, oe) | 0, m = m + Math.imul(re, Be) | 0, C = C + Math.imul(re, oe) | 0, S = S + Math.imul(ve, Ae) | 0, m = m + Math.imul(ve, ue) | 0, m = m + Math.imul(ee, Ae) | 0, C = C + Math.imul(ee, ue) | 0, S = S + Math.imul(Q, Ee) | 0, m = m + Math.imul(Q, he) | 0, m = m + Math.imul(G, Ee) | 0, C = C + Math.imul(G, he) | 0, S = S + Math.imul(N, Re) | 0, m = m + Math.imul(N, ce) | 0, m = m + Math.imul(z, Re) | 0, C = C + Math.imul(z, ce) | 0, S = S + Math.imul(U, ke) | 0, m = m + Math.imul(U, de) | 0, m = m + Math.imul(K, ke) | 0, C = C + Math.imul(K, de) | 0;
                var rr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, S = Math.imul(ge, qe), m = Math.imul(ge, fe), m = m + Math.imul(ie, qe) | 0, C = Math.imul(ie, fe), S = S + Math.imul(be, Se) | 0, m = m + Math.imul(be, se) | 0, m = m + Math.imul(Z, Se) | 0, C = C + Math.imul(Z, se) | 0, S = S + Math.imul(ye, Be) | 0, m = m + Math.imul(ye, oe) | 0, m = m + Math.imul(Y, Be) | 0, C = C + Math.imul(Y, oe) | 0, S = S + Math.imul(me, Ae) | 0, m = m + Math.imul(me, ue) | 0, m = m + Math.imul(re, Ae) | 0, C = C + Math.imul(re, ue) | 0, S = S + Math.imul(ve, Ee) | 0, m = m + Math.imul(ve, he) | 0, m = m + Math.imul(ee, Ee) | 0, C = C + Math.imul(ee, he) | 0, S = S + Math.imul(Q, Re) | 0, m = m + Math.imul(Q, ce) | 0, m = m + Math.imul(G, Re) | 0, C = C + Math.imul(G, ce) | 0, S = S + Math.imul(N, ke) | 0, m = m + Math.imul(N, de) | 0, m = m + Math.imul(z, ke) | 0, C = C + Math.imul(z, de) | 0, S = S + Math.imul(U, Ce) | 0, m = m + Math.imul(U, le) | 0, m = m + Math.imul(K, Ce) | 0, C = C + Math.imul(K, le) | 0;
                var tr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (tr >>> 26) | 0, tr &= 67108863, S = Math.imul(xe, qe), m = Math.imul(xe, fe), m = m + Math.imul(ne, qe) | 0, C = Math.imul(ne, fe), S = S + Math.imul(ge, Se) | 0, m = m + Math.imul(ge, se) | 0, m = m + Math.imul(ie, Se) | 0, C = C + Math.imul(ie, se) | 0, S = S + Math.imul(be, Be) | 0, m = m + Math.imul(be, oe) | 0, m = m + Math.imul(Z, Be) | 0, C = C + Math.imul(Z, oe) | 0, S = S + Math.imul(ye, Ae) | 0, m = m + Math.imul(ye, ue) | 0, m = m + Math.imul(Y, Ae) | 0, C = C + Math.imul(Y, ue) | 0, S = S + Math.imul(me, Ee) | 0, m = m + Math.imul(me, he) | 0, m = m + Math.imul(re, Ee) | 0, C = C + Math.imul(re, he) | 0, S = S + Math.imul(ve, Re) | 0, m = m + Math.imul(ve, ce) | 0, m = m + Math.imul(ee, Re) | 0, C = C + Math.imul(ee, ce) | 0, S = S + Math.imul(Q, ke) | 0, m = m + Math.imul(Q, de) | 0, m = m + Math.imul(G, ke) | 0, C = C + Math.imul(G, de) | 0, S = S + Math.imul(N, Ce) | 0, m = m + Math.imul(N, le) | 0, m = m + Math.imul(z, Ce) | 0, C = C + Math.imul(z, le) | 0, S = S + Math.imul(U, Ie) | 0, m = m + Math.imul(U, pe) | 0, m = m + Math.imul(K, Ie) | 0, C = C + Math.imul(K, pe) | 0;
                var ir = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, S = Math.imul(Me, qe), m = Math.imul(Me, fe), m = m + Math.imul(ae, qe) | 0, C = Math.imul(ae, fe), S = S + Math.imul(xe, Se) | 0, m = m + Math.imul(xe, se) | 0, m = m + Math.imul(ne, Se) | 0, C = C + Math.imul(ne, se) | 0, S = S + Math.imul(ge, Be) | 0, m = m + Math.imul(ge, oe) | 0, m = m + Math.imul(ie, Be) | 0, C = C + Math.imul(ie, oe) | 0, S = S + Math.imul(be, Ae) | 0, m = m + Math.imul(be, ue) | 0, m = m + Math.imul(Z, Ae) | 0, C = C + Math.imul(Z, ue) | 0, S = S + Math.imul(ye, Ee) | 0, m = m + Math.imul(ye, he) | 0, m = m + Math.imul(Y, Ee) | 0, C = C + Math.imul(Y, he) | 0, S = S + Math.imul(me, Re) | 0, m = m + Math.imul(me, ce) | 0, m = m + Math.imul(re, Re) | 0, C = C + Math.imul(re, ce) | 0, S = S + Math.imul(ve, ke) | 0, m = m + Math.imul(ve, de) | 0, m = m + Math.imul(ee, ke) | 0, C = C + Math.imul(ee, de) | 0, S = S + Math.imul(Q, Ce) | 0, m = m + Math.imul(Q, le) | 0, m = m + Math.imul(G, Ce) | 0, C = C + Math.imul(G, le) | 0, S = S + Math.imul(N, Ie) | 0, m = m + Math.imul(N, pe) | 0, m = m + Math.imul(z, Ie) | 0, C = C + Math.imul(z, pe) | 0, S = S + Math.imul(U, _e) | 0, m = m + Math.imul(U, we) | 0, m = m + Math.imul(K, _e) | 0, C = C + Math.imul(K, we) | 0;
                var nr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, S = Math.imul(Me, Se), m = Math.imul(Me, se), m = m + Math.imul(ae, Se) | 0, C = Math.imul(ae, se), S = S + Math.imul(xe, Be) | 0, m = m + Math.imul(xe, oe) | 0, m = m + Math.imul(ne, Be) | 0, C = C + Math.imul(ne, oe) | 0, S = S + Math.imul(ge, Ae) | 0, m = m + Math.imul(ge, ue) | 0, m = m + Math.imul(ie, Ae) | 0, C = C + Math.imul(ie, ue) | 0, S = S + Math.imul(be, Ee) | 0, m = m + Math.imul(be, he) | 0, m = m + Math.imul(Z, Ee) | 0, C = C + Math.imul(Z, he) | 0, S = S + Math.imul(ye, Re) | 0, m = m + Math.imul(ye, ce) | 0, m = m + Math.imul(Y, Re) | 0, C = C + Math.imul(Y, ce) | 0, S = S + Math.imul(me, ke) | 0, m = m + Math.imul(me, de) | 0, m = m + Math.imul(re, ke) | 0, C = C + Math.imul(re, de) | 0, S = S + Math.imul(ve, Ce) | 0, m = m + Math.imul(ve, le) | 0, m = m + Math.imul(ee, Ce) | 0, C = C + Math.imul(ee, le) | 0, S = S + Math.imul(Q, Ie) | 0, m = m + Math.imul(Q, pe) | 0, m = m + Math.imul(G, Ie) | 0, C = C + Math.imul(G, pe) | 0, S = S + Math.imul(N, _e) | 0, m = m + Math.imul(N, we) | 0, m = m + Math.imul(z, _e) | 0, C = C + Math.imul(z, we) | 0;
                var ar = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, S = Math.imul(Me, Be), m = Math.imul(Me, oe), m = m + Math.imul(ae, Be) | 0, C = Math.imul(ae, oe), S = S + Math.imul(xe, Ae) | 0, m = m + Math.imul(xe, ue) | 0, m = m + Math.imul(ne, Ae) | 0, C = C + Math.imul(ne, ue) | 0, S = S + Math.imul(ge, Ee) | 0, m = m + Math.imul(ge, he) | 0, m = m + Math.imul(ie, Ee) | 0, C = C + Math.imul(ie, he) | 0, S = S + Math.imul(be, Re) | 0, m = m + Math.imul(be, ce) | 0, m = m + Math.imul(Z, Re) | 0, C = C + Math.imul(Z, ce) | 0, S = S + Math.imul(ye, ke) | 0, m = m + Math.imul(ye, de) | 0, m = m + Math.imul(Y, ke) | 0, C = C + Math.imul(Y, de) | 0, S = S + Math.imul(me, Ce) | 0, m = m + Math.imul(me, le) | 0, m = m + Math.imul(re, Ce) | 0, C = C + Math.imul(re, le) | 0, S = S + Math.imul(ve, Ie) | 0, m = m + Math.imul(ve, pe) | 0, m = m + Math.imul(ee, Ie) | 0, C = C + Math.imul(ee, pe) | 0, S = S + Math.imul(Q, _e) | 0, m = m + Math.imul(Q, we) | 0, m = m + Math.imul(G, _e) | 0, C = C + Math.imul(G, we) | 0;
                var fr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, S = Math.imul(Me, Ae), m = Math.imul(Me, ue), m = m + Math.imul(ae, Ae) | 0, C = Math.imul(ae, ue), S = S + Math.imul(xe, Ee) | 0, m = m + Math.imul(xe, he) | 0, m = m + Math.imul(ne, Ee) | 0, C = C + Math.imul(ne, he) | 0, S = S + Math.imul(ge, Re) | 0, m = m + Math.imul(ge, ce) | 0, m = m + Math.imul(ie, Re) | 0, C = C + Math.imul(ie, ce) | 0, S = S + Math.imul(be, ke) | 0, m = m + Math.imul(be, de) | 0, m = m + Math.imul(Z, ke) | 0, C = C + Math.imul(Z, de) | 0, S = S + Math.imul(ye, Ce) | 0, m = m + Math.imul(ye, le) | 0, m = m + Math.imul(Y, Ce) | 0, C = C + Math.imul(Y, le) | 0, S = S + Math.imul(me, Ie) | 0, m = m + Math.imul(me, pe) | 0, m = m + Math.imul(re, Ie) | 0, C = C + Math.imul(re, pe) | 0, S = S + Math.imul(ve, _e) | 0, m = m + Math.imul(ve, we) | 0, m = m + Math.imul(ee, _e) | 0, C = C + Math.imul(ee, we) | 0;
                var sr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, S = Math.imul(Me, Ee), m = Math.imul(Me, he), m = m + Math.imul(ae, Ee) | 0, C = Math.imul(ae, he), S = S + Math.imul(xe, Re) | 0, m = m + Math.imul(xe, ce) | 0, m = m + Math.imul(ne, Re) | 0, C = C + Math.imul(ne, ce) | 0, S = S + Math.imul(ge, ke) | 0, m = m + Math.imul(ge, de) | 0, m = m + Math.imul(ie, ke) | 0, C = C + Math.imul(ie, de) | 0, S = S + Math.imul(be, Ce) | 0, m = m + Math.imul(be, le) | 0, m = m + Math.imul(Z, Ce) | 0, C = C + Math.imul(Z, le) | 0, S = S + Math.imul(ye, Ie) | 0, m = m + Math.imul(ye, pe) | 0, m = m + Math.imul(Y, Ie) | 0, C = C + Math.imul(Y, pe) | 0, S = S + Math.imul(me, _e) | 0, m = m + Math.imul(me, we) | 0, m = m + Math.imul(re, _e) | 0, C = C + Math.imul(re, we) | 0;
                var ur = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, S = Math.imul(Me, Re), m = Math.imul(Me, ce), m = m + Math.imul(ae, Re) | 0, C = Math.imul(ae, ce), S = S + Math.imul(xe, ke) | 0, m = m + Math.imul(xe, de) | 0, m = m + Math.imul(ne, ke) | 0, C = C + Math.imul(ne, de) | 0, S = S + Math.imul(ge, Ce) | 0, m = m + Math.imul(ge, le) | 0, m = m + Math.imul(ie, Ce) | 0, C = C + Math.imul(ie, le) | 0, S = S + Math.imul(be, Ie) | 0, m = m + Math.imul(be, pe) | 0, m = m + Math.imul(Z, Ie) | 0, C = C + Math.imul(Z, pe) | 0, S = S + Math.imul(ye, _e) | 0, m = m + Math.imul(ye, we) | 0, m = m + Math.imul(Y, _e) | 0, C = C + Math.imul(Y, we) | 0;
                var hr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, S = Math.imul(Me, ke), m = Math.imul(Me, de), m = m + Math.imul(ae, ke) | 0, C = Math.imul(ae, de), S = S + Math.imul(xe, Ce) | 0, m = m + Math.imul(xe, le) | 0, m = m + Math.imul(ne, Ce) | 0, C = C + Math.imul(ne, le) | 0, S = S + Math.imul(ge, Ie) | 0, m = m + Math.imul(ge, pe) | 0, m = m + Math.imul(ie, Ie) | 0, C = C + Math.imul(ie, pe) | 0, S = S + Math.imul(be, _e) | 0, m = m + Math.imul(be, we) | 0, m = m + Math.imul(Z, _e) | 0, C = C + Math.imul(Z, we) | 0;
                var cr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, S = Math.imul(Me, Ce), m = Math.imul(Me, le), m = m + Math.imul(ae, Ce) | 0, C = Math.imul(ae, le), S = S + Math.imul(xe, Ie) | 0, m = m + Math.imul(xe, pe) | 0, m = m + Math.imul(ne, Ie) | 0, C = C + Math.imul(ne, pe) | 0, S = S + Math.imul(ge, _e) | 0, m = m + Math.imul(ge, we) | 0, m = m + Math.imul(ie, _e) | 0, C = C + Math.imul(ie, we) | 0;
                var dr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, S = Math.imul(Me, Ie), m = Math.imul(Me, pe), m = m + Math.imul(ae, Ie) | 0, C = Math.imul(ae, pe), S = S + Math.imul(xe, _e) | 0, m = m + Math.imul(xe, we) | 0, m = m + Math.imul(ne, _e) | 0, C = C + Math.imul(ne, we) | 0;
                var lr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, S = Math.imul(Me, _e), m = Math.imul(Me, we), m = m + Math.imul(ae, _e) | 0, C = Math.imul(ae, we);
                var pr = (M + S | 0) + ((m & 8191) << 13) | 0;
                return M = (C + (m >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, A[0] = Ge, A[1] = Je, A[2] = Ye, A[3] = Qe, A[4] = Ze, A[5] = er, A[6] = rr, A[7] = tr, A[8] = ir, A[9] = nr, A[10] = ar, A[11] = fr, A[12] = sr, A[13] = ur, A[14] = hr, A[15] = cr, A[16] = dr, A[17] = lr, A[18] = pr, M !== 0 && (A[19] = M, _.length++), _
            };
            Math.imul || (k = R);

            function I(y, t, c) {
                c.negative = t.negative ^ y.negative, c.length = y.length + t.length;
                for (var _ = 0, w = 0, q = 0; q < c.length - 1; q++) {
                    var A = w;
                    w = 0;
                    for (var M = _ & 67108863, S = Math.min(q, t.length - 1), m = Math.max(0, q - y.length + 1); m <= S; m++) {
                        var C = q - m,
                            L = y.words[C] | 0,
                            U = t.words[m] | 0,
                            K = L * U,
                            P = K & 67108863;
                        A = A + (K / 67108864 | 0) | 0, P = P + M | 0, M = P & 67108863, A = A + (P >>> 26) | 0, w += A >>> 26, A &= 67108863
                    }
                    c.words[q] = M, _ = A, A = w
                }
                return _ !== 0 ? c.words[q] = _ : c.length--, c._strip()
            }

            function $(y, t, c) {
                return I(y, t, c)
            }
            e.prototype.mulTo = function(t, c) {
                var _, w = this.length + t.length;
                return this.length === 10 && t.length === 10 ? _ = k(this, t, c) : w < 63 ? _ = R(this, t, c) : w < 1024 ? _ = I(this, t, c) : _ = $(this, t, c), _
            }, e.prototype.mul = function(t) {
                var c = new e(null);
                return c.words = new Array(this.length + t.length), this.mulTo(t, c)
            }, e.prototype.mulf = function(t) {
                var c = new e(null);
                return c.words = new Array(this.length + t.length), $(this, t, c)
            }, e.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }, e.prototype.imuln = function(t) {
                var c = t < 0;
                c && (t = -t), i(typeof t == "number"), i(t < 67108864);
                for (var _ = 0, w = 0; w < this.length; w++) {
                    var q = (this.words[w] | 0) * t,
                        A = (q & 67108863) + (_ & 67108863);
                    _ >>= 26, _ += q / 67108864 | 0, _ += A >>> 26, this.words[w] = A & 67108863
                }
                return _ !== 0 && (this.words[w] = _, this.length++), this.length = t === 0 ? 1 : this.length, c ? this.ineg() : this
            }, e.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }, e.prototype.sqr = function() {
                return this.mul(this)
            }, e.prototype.isqr = function() {
                return this.imul(this.clone())
            }, e.prototype.pow = function(t) {
                var c = E(t);
                if (c.length === 0) return new e(1);
                for (var _ = this, w = 0; w < c.length && c[w] === 0; w++, _ = _.sqr());
                if (++w < c.length)
                    for (var q = _.sqr(); w < c.length; w++, q = q.sqr()) c[w] !== 0 && (_ = _.mul(q));
                return _
            }, e.prototype.iushln = function(t) {
                i(typeof t == "number" && t >= 0);
                var c = t % 26,
                    _ = (t - c) / 26,
                    w = 67108863 >>> 26 - c << 26 - c,
                    q;
                if (c !== 0) {
                    var A = 0;
                    for (q = 0; q < this.length; q++) {
                        var M = this.words[q] & w,
                            S = (this.words[q] | 0) - M << c;
                        this.words[q] = S | A, A = M >>> 26 - c
                    }
                    A && (this.words[q] = A, this.length++)
                }
                if (_ !== 0) {
                    for (q = this.length - 1; q >= 0; q--) this.words[q + _] = this.words[q];
                    for (q = 0; q < _; q++) this.words[q] = 0;
                    this.length += _
                }
                return this._strip()
            }, e.prototype.ishln = function(t) {
                return i(this.negative === 0), this.iushln(t)
            }, e.prototype.iushrn = function(t, c, _) {
                i(typeof t == "number" && t >= 0);
                var w;
                c ? w = (c - c % 26) / 26 : w = 0;
                var q = t % 26,
                    A = Math.min((t - q) / 26, this.length),
                    M = 67108863 ^ 67108863 >>> q << q,
                    S = _;
                if (w -= A, w = Math.max(0, w), S) {
                    for (var m = 0; m < A; m++) S.words[m] = this.words[m];
                    S.length = A
                }
                if (A !== 0)
                    if (this.length > A)
                        for (this.length -= A, m = 0; m < this.length; m++) this.words[m] = this.words[m + A];
                    else this.words[0] = 0, this.length = 1;
                var C = 0;
                for (m = this.length - 1; m >= 0 && (C !== 0 || m >= w); m--) {
                    var L = this.words[m] | 0;
                    this.words[m] = C << 26 - q | L >>> q, C = L & M
                }
                return S && C !== 0 && (S.words[S.length++] = C), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
            }, e.prototype.ishrn = function(t, c, _) {
                return i(this.negative === 0), this.iushrn(t, c, _)
            }, e.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }, e.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }, e.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }, e.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }, e.prototype.testn = function(t) {
                i(typeof t == "number" && t >= 0);
                var c = t % 26,
                    _ = (t - c) / 26,
                    w = 1 << c;
                if (this.length <= _) return !1;
                var q = this.words[_];
                return !!(q & w)
            }, e.prototype.imaskn = function(t) {
                i(typeof t == "number" && t >= 0);
                var c = t % 26,
                    _ = (t - c) / 26;
                if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= _) return this;
                if (c !== 0 && _++, this.length = Math.min(_, this.length), c !== 0) {
                    var w = 67108863 ^ 67108863 >>> c << c;
                    this.words[this.length - 1] &= w
                }
                return this._strip()
            }, e.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }, e.prototype.iaddn = function(t) {
                return i(typeof t == "number"), i(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
            }, e.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var c = 0; c < this.length && this.words[c] >= 67108864; c++) this.words[c] -= 67108864, c === this.length - 1 ? this.words[c + 1] = 1 : this.words[c + 1]++;
                return this.length = Math.max(this.length, c + 1), this
            }, e.prototype.isubn = function(t) {
                if (i(typeof t == "number"), i(t < 67108864), t < 0) return this.iaddn(-t);
                if (this.negative !== 0) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                if (this.words[0] -= t, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var c = 0; c < this.length && this.words[c] < 0; c++) this.words[c] += 67108864, this.words[c + 1] -= 1;
                return this._strip()
            }, e.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }, e.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }, e.prototype.iabs = function() {
                return this.negative = 0, this
            }, e.prototype.abs = function() {
                return this.clone().iabs()
            }, e.prototype._ishlnsubmul = function(t, c, _) {
                var w = t.length + _,
                    q;
                this._expand(w);
                var A, M = 0;
                for (q = 0; q < t.length; q++) {
                    A = (this.words[q + _] | 0) + M;
                    var S = (t.words[q] | 0) * c;
                    A -= S & 67108863, M = (A >> 26) - (S / 67108864 | 0), this.words[q + _] = A & 67108863
                }
                for (; q < this.length - _; q++) A = (this.words[q + _] | 0) + M, M = A >> 26, this.words[q + _] = A & 67108863;
                if (M === 0) return this._strip();
                for (i(M === -1), M = 0, q = 0; q < this.length; q++) A = -(this.words[q] | 0) + M, M = A >> 26, this.words[q] = A & 67108863;
                return this.negative = 1, this._strip()
            }, e.prototype._wordDiv = function(t, c) {
                var _ = this.length - t.length,
                    w = this.clone(),
                    q = t,
                    A = q.words[q.length - 1] | 0,
                    M = this._countBits(A);
                _ = 26 - M, _ !== 0 && (q = q.ushln(_), w.iushln(_), A = q.words[q.length - 1] | 0);
                var S = w.length - q.length,
                    m;
                if (c !== "mod") {
                    m = new e(null), m.length = S + 1, m.words = new Array(m.length);
                    for (var C = 0; C < m.length; C++) m.words[C] = 0
                }
                var L = w.clone()._ishlnsubmul(q, 1, S);
                L.negative === 0 && (w = L, m && (m.words[S] = 1));
                for (var U = S - 1; U >= 0; U--) {
                    var K = (w.words[q.length + U] | 0) * 67108864 + (w.words[q.length + U - 1] | 0);
                    for (K = Math.min(K / A | 0, 67108863), w._ishlnsubmul(q, K, U); w.negative !== 0;) K--, w.negative = 0, w._ishlnsubmul(q, 1, U), w.isZero() || (w.negative ^= 1);
                    m && (m.words[U] = K)
                }
                return m && m._strip(), w._strip(), c !== "div" && _ !== 0 && w.iushrn(_), {
                    div: m || null,
                    mod: w
                }
            }, e.prototype.divmod = function(t, c, _) {
                if (i(!t.isZero()), this.isZero()) return {
                    div: new e(0),
                    mod: new e(0)
                };
                var w, q, A;
                return this.negative !== 0 && t.negative === 0 ? (A = this.neg().divmod(t, c), c !== "mod" && (w = A.div.neg()), c !== "div" && (q = A.mod.neg(), _ && q.negative !== 0 && q.iadd(t)), {
                    div: w,
                    mod: q
                }) : this.negative === 0 && t.negative !== 0 ? (A = this.divmod(t.neg(), c), c !== "mod" && (w = A.div.neg()), {
                    div: w,
                    mod: A.mod
                }) : (this.negative & t.negative) !== 0 ? (A = this.neg().divmod(t.neg(), c), c !== "div" && (q = A.mod.neg(), _ && q.negative !== 0 && q.isub(t)), {
                    div: A.div,
                    mod: q
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new e(0),
                    mod: this
                } : t.length === 1 ? c === "div" ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : c === "mod" ? {
                    div: null,
                    mod: new e(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new e(this.modrn(t.words[0]))
                } : this._wordDiv(t, c)
            }, e.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }, e.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }, e.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }, e.prototype.divRound = function(t) {
                var c = this.divmod(t);
                if (c.mod.isZero()) return c.div;
                var _ = c.div.negative !== 0 ? c.mod.isub(t) : c.mod,
                    w = t.ushrn(1),
                    q = t.andln(1),
                    A = _.cmp(w);
                return A < 0 || q === 1 && A === 0 ? c.div : c.div.negative !== 0 ? c.div.isubn(1) : c.div.iaddn(1)
            }, e.prototype.modrn = function(t) {
                var c = t < 0;
                c && (t = -t), i(t <= 67108863);
                for (var _ = (1 << 26) % t, w = 0, q = this.length - 1; q >= 0; q--) w = (_ * w + (this.words[q] | 0)) % t;
                return c ? -w : w
            }, e.prototype.modn = function(t) {
                return this.modrn(t)
            }, e.prototype.idivn = function(t) {
                var c = t < 0;
                c && (t = -t), i(t <= 67108863);
                for (var _ = 0, w = this.length - 1; w >= 0; w--) {
                    var q = (this.words[w] | 0) + _ * 67108864;
                    this.words[w] = q / t | 0, _ = q % t
                }
                return this._strip(), c ? this.ineg() : this
            }, e.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }, e.prototype.egcd = function(t) {
                i(t.negative === 0), i(!t.isZero());
                var c = this,
                    _ = t.clone();
                c.negative !== 0 ? c = c.umod(t) : c = c.clone();
                for (var w = new e(1), q = new e(0), A = new e(0), M = new e(1), S = 0; c.isEven() && _.isEven();) c.iushrn(1), _.iushrn(1), ++S;
                for (var m = _.clone(), C = c.clone(); !c.isZero();) {
                    for (var L = 0, U = 1;
                        (c.words[0] & U) === 0 && L < 26; ++L, U <<= 1);
                    if (L > 0)
                        for (c.iushrn(L); L-- > 0;)(w.isOdd() || q.isOdd()) && (w.iadd(m), q.isub(C)), w.iushrn(1), q.iushrn(1);
                    for (var K = 0, P = 1;
                        (_.words[0] & P) === 0 && K < 26; ++K, P <<= 1);
                    if (K > 0)
                        for (_.iushrn(K); K-- > 0;)(A.isOdd() || M.isOdd()) && (A.iadd(m), M.isub(C)), A.iushrn(1), M.iushrn(1);
                    c.cmp(_) >= 0 ? (c.isub(_), w.isub(A), q.isub(M)) : (_.isub(c), A.isub(w), M.isub(q))
                }
                return {
                    a: A,
                    b: M,
                    gcd: _.iushln(S)
                }
            }, e.prototype._invmp = function(t) {
                i(t.negative === 0), i(!t.isZero());
                var c = this,
                    _ = t.clone();
                c.negative !== 0 ? c = c.umod(t) : c = c.clone();
                for (var w = new e(1), q = new e(0), A = _.clone(); c.cmpn(1) > 0 && _.cmpn(1) > 0;) {
                    for (var M = 0, S = 1;
                        (c.words[0] & S) === 0 && M < 26; ++M, S <<= 1);
                    if (M > 0)
                        for (c.iushrn(M); M-- > 0;) w.isOdd() && w.iadd(A), w.iushrn(1);
                    for (var m = 0, C = 1;
                        (_.words[0] & C) === 0 && m < 26; ++m, C <<= 1);
                    if (m > 0)
                        for (_.iushrn(m); m-- > 0;) q.isOdd() && q.iadd(A), q.iushrn(1);
                    c.cmp(_) >= 0 ? (c.isub(_), w.isub(q)) : (_.isub(c), q.isub(w))
                }
                var L;
                return c.cmpn(1) === 0 ? L = w : L = q, L.cmpn(0) < 0 && L.iadd(t), L
            }, e.prototype.gcd = function(t) {
                if (this.isZero()) return t.abs();
                if (t.isZero()) return this.abs();
                var c = this.clone(),
                    _ = t.clone();
                c.negative = 0, _.negative = 0;
                for (var w = 0; c.isEven() && _.isEven(); w++) c.iushrn(1), _.iushrn(1);
                do {
                    for (; c.isEven();) c.iushrn(1);
                    for (; _.isEven();) _.iushrn(1);
                    var q = c.cmp(_);
                    if (q < 0) {
                        var A = c;
                        c = _, _ = A
                    } else if (q === 0 || _.cmpn(1) === 0) break;
                    c.isub(_)
                } while (!0);
                return _.iushln(w)
            }, e.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }, e.prototype.isEven = function() {
                return (this.words[0] & 1) === 0
            }, e.prototype.isOdd = function() {
                return (this.words[0] & 1) === 1
            }, e.prototype.andln = function(t) {
                return this.words[0] & t
            }, e.prototype.bincn = function(t) {
                i(typeof t == "number");
                var c = t % 26,
                    _ = (t - c) / 26,
                    w = 1 << c;
                if (this.length <= _) return this._expand(_ + 1), this.words[_] |= w, this;
                for (var q = w, A = _; q !== 0 && A < this.length; A++) {
                    var M = this.words[A] | 0;
                    M += q, q = M >>> 26, M &= 67108863, this.words[A] = M
                }
                return q !== 0 && (this.words[A] = q, this.length++), this
            }, e.prototype.isZero = function() {
                return this.length === 1 && this.words[0] === 0
            }, e.prototype.cmpn = function(t) {
                var c = t < 0;
                if (this.negative !== 0 && !c) return -1;
                if (this.negative === 0 && c) return 1;
                this._strip();
                var _;
                if (this.length > 1) _ = 1;
                else {
                    c && (t = -t), i(t <= 67108863, "Number is too big");
                    var w = this.words[0] | 0;
                    _ = w === t ? 0 : w < t ? -1 : 1
                }
                return this.negative !== 0 ? -_ | 0 : _
            }, e.prototype.cmp = function(t) {
                if (this.negative !== 0 && t.negative === 0) return -1;
                if (this.negative === 0 && t.negative !== 0) return 1;
                var c = this.ucmp(t);
                return this.negative !== 0 ? -c | 0 : c
            }, e.prototype.ucmp = function(t) {
                if (this.length > t.length) return 1;
                if (this.length < t.length) return -1;
                for (var c = 0, _ = this.length - 1; _ >= 0; _--) {
                    var w = this.words[_] | 0,
                        q = t.words[_] | 0;
                    if (w !== q) {
                        w < q ? c = -1 : w > q && (c = 1);
                        break
                    }
                }
                return c
            }, e.prototype.gtn = function(t) {
                return this.cmpn(t) === 1
            }, e.prototype.gt = function(t) {
                return this.cmp(t) === 1
            }, e.prototype.gten = function(t) {
                return this.cmpn(t) >= 0
            }, e.prototype.gte = function(t) {
                return this.cmp(t) >= 0
            }, e.prototype.ltn = function(t) {
                return this.cmpn(t) === -1
            }, e.prototype.lt = function(t) {
                return this.cmp(t) === -1
            }, e.prototype.lten = function(t) {
                return this.cmpn(t) <= 0
            }, e.prototype.lte = function(t) {
                return this.cmp(t) <= 0
            }, e.prototype.eqn = function(t) {
                return this.cmpn(t) === 0
            }, e.prototype.eq = function(t) {
                return this.cmp(t) === 0
            }, e.red = function(t) {
                return new D(t)
            }, e.prototype.toRed = function(t) {
                return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t)
            }, e.prototype.fromRed = function() {
                return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, e.prototype._forceRed = function(t) {
                return this.red = t, this
            }, e.prototype.forceRed = function(t) {
                return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
            }, e.prototype.redAdd = function(t) {
                return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
            }, e.prototype.redIAdd = function(t) {
                return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
            }, e.prototype.redSub = function(t) {
                return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
            }, e.prototype.redISub = function(t) {
                return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
            }, e.prototype.redShl = function(t) {
                return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
            }, e.prototype.redMul = function(t) {
                return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
            }, e.prototype.redIMul = function(t) {
                return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
            }, e.prototype.redSqr = function() {
                return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, e.prototype.redISqr = function() {
                return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, e.prototype.redSqrt = function() {
                return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, e.prototype.redInvm = function() {
                return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, e.prototype.redNeg = function() {
                return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, e.prototype.redPow = function(t) {
                return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
            };
            var j = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function O(y, t) {
                this.name = y, this.p = new e(t, 16), this.n = this.p.bitLength(), this.k = new e(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }
            O.prototype._tmp = function() {
                var t = new e(null);
                return t.words = new Array(Math.ceil(this.n / 13)), t
            }, O.prototype.ireduce = function(t) {
                var c = t,
                    _;
                do this.split(c, this.tmp), c = this.imulK(c), c = c.iadd(this.tmp), _ = c.bitLength(); while (_ > this.n);
                var w = _ < this.n ? -1 : c.ucmp(this.p);
                return w === 0 ? (c.words[0] = 0, c.length = 1) : w > 0 ? c.isub(this.p) : c.strip !== void 0 ? c.strip() : c._strip(), c
            }, O.prototype.split = function(t, c) {
                t.iushrn(this.n, 0, c)
            }, O.prototype.imulK = function(t) {
                return t.imul(this.k)
            };

            function H() {
                O.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            f(H, O), H.prototype.split = function(t, c) {
                for (var _ = 4194303, w = Math.min(t.length, 9), q = 0; q < w; q++) c.words[q] = t.words[q];
                if (c.length = w, t.length <= 9) {
                    t.words[0] = 0, t.length = 1;
                    return
                }
                var A = t.words[9];
                for (c.words[c.length++] = A & _, q = 10; q < t.length; q++) {
                    var M = t.words[q] | 0;
                    t.words[q - 10] = (M & _) << 4 | A >>> 22, A = M
                }
                A >>>= 22, t.words[q - 10] = A, A === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9
            }, H.prototype.imulK = function(t) {
                t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                for (var c = 0, _ = 0; _ < t.length; _++) {
                    var w = t.words[_] | 0;
                    c += w * 977, t.words[_] = c & 67108863, c = w * 64 + (c / 67108864 | 0)
                }
                return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t
            };

            function X() {
                O.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            f(X, O);

            function W() {
                O.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            f(W, O);

            function J() {
                O.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            f(J, O), J.prototype.imulK = function(t) {
                for (var c = 0, _ = 0; _ < t.length; _++) {
                    var w = (t.words[_] | 0) * 19 + c,
                        q = w & 67108863;
                    w >>>= 26, t.words[_] = q, c = w
                }
                return c !== 0 && (t.words[t.length++] = c), t
            }, e._prime = function(t) {
                if (j[t]) return j[t];
                var c;
                if (t === "k256") c = new H;
                else if (t === "p224") c = new X;
                else if (t === "p192") c = new W;
                else if (t === "p25519") c = new J;
                else throw new Error("Unknown prime " + t);
                return j[t] = c, c
            };

            function D(y) {
                if (typeof y == "string") {
                    var t = e._prime(y);
                    this.m = t.p, this.prime = t
                } else i(y.gtn(1), "modulus must be greater than 1"), this.m = y, this.prime = null
            }
            D.prototype._verify1 = function(t) {
                i(t.negative === 0, "red works only with positives"), i(t.red, "red works only with red numbers")
            }, D.prototype._verify2 = function(t, c) {
                i((t.negative | c.negative) === 0, "red works only with positives"), i(t.red && t.red === c.red, "red works only with red numbers")
            }, D.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (u(t, t.umod(this.m)._forceRed(this)), t)
            }, D.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }, D.prototype.add = function(t, c) {
                this._verify2(t, c);
                var _ = t.add(c);
                return _.cmp(this.m) >= 0 && _.isub(this.m), _._forceRed(this)
            }, D.prototype.iadd = function(t, c) {
                this._verify2(t, c);
                var _ = t.iadd(c);
                return _.cmp(this.m) >= 0 && _.isub(this.m), _
            }, D.prototype.sub = function(t, c) {
                this._verify2(t, c);
                var _ = t.sub(c);
                return _.cmpn(0) < 0 && _.iadd(this.m), _._forceRed(this)
            }, D.prototype.isub = function(t, c) {
                this._verify2(t, c);
                var _ = t.isub(c);
                return _.cmpn(0) < 0 && _.iadd(this.m), _
            }, D.prototype.shl = function(t, c) {
                return this._verify1(t), this.imod(t.ushln(c))
            }, D.prototype.imul = function(t, c) {
                return this._verify2(t, c), this.imod(t.imul(c))
            }, D.prototype.mul = function(t, c) {
                return this._verify2(t, c), this.imod(t.mul(c))
            }, D.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }, D.prototype.sqr = function(t) {
                return this.mul(t, t)
            }, D.prototype.sqrt = function(t) {
                if (t.isZero()) return t.clone();
                var c = this.m.andln(3);
                if (i(c % 2 === 1), c === 3) {
                    var _ = this.m.add(new e(1)).iushrn(2);
                    return this.pow(t, _)
                }
                for (var w = this.m.subn(1), q = 0; !w.isZero() && w.andln(1) === 0;) q++, w.iushrn(1);
                i(!w.isZero());
                var A = new e(1).toRed(this),
                    M = A.redNeg(),
                    S = this.m.subn(1).iushrn(1),
                    m = this.m.bitLength();
                for (m = new e(2 * m * m).toRed(this); this.pow(m, S).cmp(M) !== 0;) m.redIAdd(M);
                for (var C = this.pow(m, w), L = this.pow(t, w.addn(1).iushrn(1)), U = this.pow(t, w), K = q; U.cmp(A) !== 0;) {
                    for (var P = U, N = 0; P.cmp(A) !== 0; N++) P = P.redSqr();
                    i(N < K);
                    var z = this.pow(C, new e(1).iushln(K - N - 1));
                    L = L.redMul(z), C = z.redSqr(), U = U.redMul(C), K = N
                }
                return L
            }, D.prototype.invm = function(t) {
                var c = t._invmp(this.m);
                return c.negative !== 0 ? (c.negative = 0, this.imod(c).redNeg()) : this.imod(c)
            }, D.prototype.pow = function(t, c) {
                if (c.isZero()) return new e(1).toRed(this);
                if (c.cmpn(1) === 0) return t.clone();
                var _ = 4,
                    w = new Array(1 << _);
                w[0] = new e(1).toRed(this), w[1] = t;
                for (var q = 2; q < w.length; q++) w[q] = this.mul(w[q - 1], t);
                var A = w[0],
                    M = 0,
                    S = 0,
                    m = c.bitLength() % 26;
                for (m === 0 && (m = 26), q = c.length - 1; q >= 0; q--) {
                    for (var C = c.words[q], L = m - 1; L >= 0; L--) {
                        var U = C >> L & 1;
                        if (A !== w[0] && (A = this.sqr(A)), U === 0 && M === 0) {
                            S = 0;
                            continue
                        }
                        M <<= 1, M |= U, S++, !(S !== _ && (q !== 0 || L !== 0)) && (A = this.mul(A, w[M]), S = 0, M = 0)
                    }
                    m = 26
                }
                return A
            }, D.prototype.convertTo = function(t) {
                var c = t.umod(this.m);
                return c === t ? c.clone() : c
            }, D.prototype.convertFrom = function(t) {
                var c = t.clone();
                return c.red = null, c
            }, e.mont = function(t) {
                return new B(t)
            };

            function B(y) {
                D.call(this, y), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new e(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            f(B, D), B.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }, B.prototype.convertFrom = function(t) {
                var c = this.imod(t.mul(this.rinv));
                return c.red = null, c
            }, B.prototype.imul = function(t, c) {
                if (t.isZero() || c.isZero()) return t.words[0] = 0, t.length = 1, t;
                var _ = t.imul(c),
                    w = _.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    q = _.isub(w).iushrn(this.shift),
                    A = q;
                return q.cmp(this.m) >= 0 ? A = q.isub(this.m) : q.cmpn(0) < 0 && (A = q.iadd(this.m)), A._forceRed(this)
            }, B.prototype.mul = function(t, c) {
                if (t.isZero() || c.isZero()) return new e(0)._forceRed(this);
                var _ = t.mul(c),
                    w = _.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    q = _.isub(w).iushrn(this.shift),
                    A = q;
                return q.cmp(this.m) >= 0 ? A = q.isub(this.m) : q.cmpn(0) < 0 && (A = q.iadd(this.m)), A._forceRed(this)
            }, B.prototype.invm = function(t) {
                var c = this.imod(t._invmp(this.m).mul(this.r2));
                return c._forceRed(this)
            }
        })(s, bn$2)
    }(bn$3)), bn$3.exports
}
var browserifyRsa, hasRequiredBrowserifyRsa;

function requireBrowserifyRsa() {
    if (hasRequiredBrowserifyRsa) return browserifyRsa;
    hasRequiredBrowserifyRsa = 1;
    var s = requireBn$1(),
        r = requireBrowser$b(),
        n = requireSafeBuffer$1().Buffer;

    function i(d) {
        var l = d.modulus.byteLength(),
            v;
        do v = new s(r(l)); while (v.cmp(d.modulus) >= 0 || !v.umod(d.prime1) || !v.umod(d.prime2));
        return v
    }

    function f(d) {
        var l = i(d),
            v = l.toRed(s.mont(d.modulus)).redPow(new s(d.publicExponent)).fromRed();
        return {
            blinder: v,
            unblinder: l.invm(d.modulus)
        }
    }

    function e(d, l) {
        var v = f(l),
            a = l.modulus.byteLength(),
            u = new s(d).mul(v.blinder).umod(l.modulus),
            h = u.toRed(s.mont(l.prime1)),
            p = u.toRed(s.mont(l.prime2)),
            b = l.coefficient,
            g = l.prime1,
            x = l.prime2,
            E = h.redPow(l.exponent1).fromRed(),
            R = p.redPow(l.exponent2).fromRed(),
            k = E.isub(R).imul(b).umod(g).imul(x);
        return R.iadd(k).imul(v.unblinder).umod(l.modulus).toArrayLike(n, "be", a)
    }
    return e.getr = i, browserifyRsa = e, browserifyRsa
}
var elliptic = {};
const version = "6.6.1",
    require$$0$1 = {
        version
    };
var utils$2 = {},
    utils$1 = {},
    hasRequiredUtils$2;

function requireUtils$2() {
    return hasRequiredUtils$2 || (hasRequiredUtils$2 = 1, function(s) {
        var r = s;

        function n(e, d) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var l = [];
            if (typeof e != "string") {
                for (var v = 0; v < e.length; v++) l[v] = e[v] | 0;
                return l
            }
            if (d === "hex") {
                e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e);
                for (var v = 0; v < e.length; v += 2) l.push(parseInt(e[v] + e[v + 1], 16))
            } else
                for (var v = 0; v < e.length; v++) {
                    var a = e.charCodeAt(v),
                        u = a >> 8,
                        h = a & 255;
                    u ? l.push(u, h) : l.push(h)
                }
            return l
        }
        r.toArray = n;

        function i(e) {
            return e.length === 1 ? "0" + e : e
        }
        r.zero2 = i;

        function f(e) {
            for (var d = "", l = 0; l < e.length; l++) d += i(e[l].toString(16));
            return d
        }
        r.toHex = f, r.encode = function(d, l) {
            return l === "hex" ? f(d) : d
        }
    }(utils$1)), utils$1
}
var hasRequiredUtils$1;

function requireUtils$1() {
    return hasRequiredUtils$1 || (hasRequiredUtils$1 = 1, function(s) {
        var r = s,
            n = requireBn$2(),
            i = requireMinimalisticAssert(),
            f = requireUtils$2();
        r.assert = i, r.toArray = f.toArray, r.zero2 = f.zero2, r.toHex = f.toHex, r.encode = f.encode;

        function e(u, h, p) {
            var b = new Array(Math.max(u.bitLength(), p) + 1),
                g;
            for (g = 0; g < b.length; g += 1) b[g] = 0;
            var x = 1 << h + 1,
                E = u.clone();
            for (g = 0; g < b.length; g++) {
                var R, k = E.andln(x - 1);
                E.isOdd() ? (k > (x >> 1) - 1 ? R = (x >> 1) - k : R = k, E.isubn(R)) : R = 0, b[g] = R, E.iushrn(1)
            }
            return b
        }
        r.getNAF = e;

        function d(u, h) {
            var p = [
                [],
                []
            ];
            u = u.clone(), h = h.clone();
            for (var b = 0, g = 0, x; u.cmpn(-b) > 0 || h.cmpn(-g) > 0;) {
                var E = u.andln(3) + b & 3,
                    R = h.andln(3) + g & 3;
                E === 3 && (E = -1), R === 3 && (R = -1);
                var k;
                (E & 1) === 0 ? k = 0 : (x = u.andln(7) + b & 7, (x === 3 || x === 5) && R === 2 ? k = -E : k = E), p[0].push(k);
                var I;
                (R & 1) === 0 ? I = 0 : (x = h.andln(7) + g & 7, (x === 3 || x === 5) && E === 2 ? I = -R : I = R), p[1].push(I), 2 * b === k + 1 && (b = 1 - b), 2 * g === I + 1 && (g = 1 - g), u.iushrn(1), h.iushrn(1)
            }
            return p
        }
        r.getJSF = d;

        function l(u, h, p) {
            var b = "_" + h;
            u.prototype[h] = function() {
                return this[b] !== void 0 ? this[b] : this[b] = p.call(this)
            }
        }
        r.cachedProperty = l;

        function v(u) {
            return typeof u == "string" ? r.toArray(u, "hex") : u
        }
        r.parseBytes = v;

        function a(u) {
            return new n(u, "hex", "le")
        }
        r.intFromLE = a
    }(utils$2)), utils$2
}
var curve = {},
    base$1, hasRequiredBase$1;

function requireBase$1() {
    if (hasRequiredBase$1) return base$1;
    hasRequiredBase$1 = 1;
    var s = requireBn$2(),
        r = requireUtils$1(),
        n = r.getNAF,
        i = r.getJSF,
        f = r.assert;

    function e(l, v) {
        this.type = l, this.p = new s(v.p, 16), this.red = v.prime ? s.red(v.prime) : s.mont(this.p), this.zero = new s(0).toRed(this.red), this.one = new s(1).toRed(this.red), this.two = new s(2).toRed(this.red), this.n = v.n && new s(v.n, 16), this.g = v.g && this.pointFromJSON(v.g, v.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
        var a = this.n && this.p.div(this.n);
        !a || a.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
    }
    base$1 = e, e.prototype.point = function() {
        throw new Error("Not implemented")
    }, e.prototype.validate = function() {
        throw new Error("Not implemented")
    }, e.prototype._fixedNafMul = function(v, a) {
        f(v.precomputed);
        var u = v._getDoubles(),
            h = n(a, 1, this._bitLength),
            p = (1 << u.step + 1) - (u.step % 2 === 0 ? 2 : 1);
        p /= 3;
        var b = [],
            g, x;
        for (g = 0; g < h.length; g += u.step) {
            x = 0;
            for (var E = g + u.step - 1; E >= g; E--) x = (x << 1) + h[E];
            b.push(x)
        }
        for (var R = this.jpoint(null, null, null), k = this.jpoint(null, null, null), I = p; I > 0; I--) {
            for (g = 0; g < b.length; g++) x = b[g], x === I ? k = k.mixedAdd(u.points[g]) : x === -I && (k = k.mixedAdd(u.points[g].neg()));
            R = R.add(k)
        }
        return R.toP()
    }, e.prototype._wnafMul = function(v, a) {
        var u = 4,
            h = v._getNAFPoints(u);
        u = h.wnd;
        for (var p = h.points, b = n(a, u, this._bitLength), g = this.jpoint(null, null, null), x = b.length - 1; x >= 0; x--) {
            for (var E = 0; x >= 0 && b[x] === 0; x--) E++;
            if (x >= 0 && E++, g = g.dblp(E), x < 0) break;
            var R = b[x];
            f(R !== 0), v.type === "affine" ? R > 0 ? g = g.mixedAdd(p[R - 1 >> 1]) : g = g.mixedAdd(p[-R - 1 >> 1].neg()) : R > 0 ? g = g.add(p[R - 1 >> 1]) : g = g.add(p[-R - 1 >> 1].neg())
        }
        return v.type === "affine" ? g.toP() : g
    }, e.prototype._wnafMulAdd = function(v, a, u, h, p) {
        var b = this._wnafT1,
            g = this._wnafT2,
            x = this._wnafT3,
            E = 0,
            R, k, I;
        for (R = 0; R < h; R++) {
            I = a[R];
            var $ = I._getNAFPoints(v);
            b[R] = $.wnd, g[R] = $.points
        }
        for (R = h - 1; R >= 1; R -= 2) {
            var j = R - 1,
                O = R;
            if (b[j] !== 1 || b[O] !== 1) {
                x[j] = n(u[j], b[j], this._bitLength), x[O] = n(u[O], b[O], this._bitLength), E = Math.max(x[j].length, E), E = Math.max(x[O].length, E);
                continue
            }
            var H = [a[j], null, null, a[O]];
            a[j].y.cmp(a[O].y) === 0 ? (H[1] = a[j].add(a[O]), H[2] = a[j].toJ().mixedAdd(a[O].neg())) : a[j].y.cmp(a[O].y.redNeg()) === 0 ? (H[1] = a[j].toJ().mixedAdd(a[O]), H[2] = a[j].add(a[O].neg())) : (H[1] = a[j].toJ().mixedAdd(a[O]), H[2] = a[j].toJ().mixedAdd(a[O].neg()));
            var X = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                W = i(u[j], u[O]);
            for (E = Math.max(W[0].length, E), x[j] = new Array(E), x[O] = new Array(E), k = 0; k < E; k++) {
                var J = W[0][k] | 0,
                    D = W[1][k] | 0;
                x[j][k] = X[(J + 1) * 3 + (D + 1)], x[O][k] = 0, g[j] = H
            }
        }
        var B = this.jpoint(null, null, null),
            y = this._wnafT4;
        for (R = E; R >= 0; R--) {
            for (var t = 0; R >= 0;) {
                var c = !0;
                for (k = 0; k < h; k++) y[k] = x[k][R] | 0, y[k] !== 0 && (c = !1);
                if (!c) break;
                t++, R--
            }
            if (R >= 0 && t++, B = B.dblp(t), R < 0) break;
            for (k = 0; k < h; k++) {
                var _ = y[k];
                _ !== 0 && (_ > 0 ? I = g[k][_ - 1 >> 1] : _ < 0 && (I = g[k][-_ - 1 >> 1].neg()), I.type === "affine" ? B = B.mixedAdd(I) : B = B.add(I))
            }
        }
        for (R = 0; R < h; R++) g[R] = null;
        return p ? B : B.toP()
    };

    function d(l, v) {
        this.curve = l, this.type = v, this.precomputed = null
    }
    return e.BasePoint = d, d.prototype.eq = function() {
        throw new Error("Not implemented")
    }, d.prototype.validate = function() {
        return this.curve.validate(this)
    }, e.prototype.decodePoint = function(v, a) {
        v = r.toArray(v, a);
        var u = this.p.byteLength();
        if ((v[0] === 4 || v[0] === 6 || v[0] === 7) && v.length - 1 === 2 * u) {
            v[0] === 6 ? f(v[v.length - 1] % 2 === 0) : v[0] === 7 && f(v[v.length - 1] % 2 === 1);
            var h = this.point(v.slice(1, 1 + u), v.slice(1 + u, 1 + 2 * u));
            return h
        } else if ((v[0] === 2 || v[0] === 3) && v.length - 1 === u) return this.pointFromX(v.slice(1, 1 + u), v[0] === 3);
        throw new Error("Unknown point format")
    }, d.prototype.encodeCompressed = function(v) {
        return this.encode(v, !0)
    }, d.prototype._encode = function(v) {
        var a = this.curve.p.byteLength(),
            u = this.getX().toArray("be", a);
        return v ? [this.getY().isEven() ? 2 : 3].concat(u) : [4].concat(u, this.getY().toArray("be", a))
    }, d.prototype.encode = function(v, a) {
        return r.encode(this._encode(a), v)
    }, d.prototype.precompute = function(v) {
        if (this.precomputed) return this;
        var a = {
            doubles: null,
            naf: null,
            beta: null
        };
        return a.naf = this._getNAFPoints(8), a.doubles = this._getDoubles(4, v), a.beta = this._getBeta(), this.precomputed = a, this
    }, d.prototype._hasDoubles = function(v) {
        if (!this.precomputed) return !1;
        var a = this.precomputed.doubles;
        return a ? a.points.length >= Math.ceil((v.bitLength() + 1) / a.step) : !1
    }, d.prototype._getDoubles = function(v, a) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var u = [this], h = this, p = 0; p < a; p += v) {
            for (var b = 0; b < v; b++) h = h.dbl();
            u.push(h)
        }
        return {
            step: v,
            points: u
        }
    }, d.prototype._getNAFPoints = function(v) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var a = [this], u = (1 << v) - 1, h = u === 1 ? null : this.dbl(), p = 1; p < u; p++) a[p] = a[p - 1].add(h);
        return {
            wnd: v,
            points: a
        }
    }, d.prototype._getBeta = function() {
        return null
    }, d.prototype.dblp = function(v) {
        for (var a = this, u = 0; u < v; u++) a = a.dbl();
        return a
    }, base$1
}
var short, hasRequiredShort;

function requireShort() {
    if (hasRequiredShort) return short;
    hasRequiredShort = 1;
    var s = requireUtils$1(),
        r = requireBn$2(),
        n = requireInherits_browser(),
        i = requireBase$1(),
        f = s.assert;

    function e(v) {
        i.call(this, "short", v), this.a = new r(v.a, 16).toRed(this.red), this.b = new r(v.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(v), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
    }
    n(e, i), short = e, e.prototype._getEndomorphism = function(a) {
        if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
            var u, h;
            if (a.beta) u = new r(a.beta, 16).toRed(this.red);
            else {
                var p = this._getEndoRoots(this.p);
                u = p[0].cmp(p[1]) < 0 ? p[0] : p[1], u = u.toRed(this.red)
            }
            if (a.lambda) h = new r(a.lambda, 16);
            else {
                var b = this._getEndoRoots(this.n);
                this.g.mul(b[0]).x.cmp(this.g.x.redMul(u)) === 0 ? h = b[0] : (h = b[1], f(this.g.mul(h).x.cmp(this.g.x.redMul(u)) === 0))
            }
            var g;
            return a.basis ? g = a.basis.map(function(x) {
                return {
                    a: new r(x.a, 16),
                    b: new r(x.b, 16)
                }
            }) : g = this._getEndoBasis(h), {
                beta: u,
                lambda: h,
                basis: g
            }
        }
    }, e.prototype._getEndoRoots = function(a) {
        var u = a === this.p ? this.red : r.mont(a),
            h = new r(2).toRed(u).redInvm(),
            p = h.redNeg(),
            b = new r(3).toRed(u).redNeg().redSqrt().redMul(h),
            g = p.redAdd(b).fromRed(),
            x = p.redSub(b).fromRed();
        return [g, x]
    }, e.prototype._getEndoBasis = function(a) {
        for (var u = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), h = a, p = this.n.clone(), b = new r(1), g = new r(0), x = new r(0), E = new r(1), R, k, I, $, j, O, H, X = 0, W, J; h.cmpn(0) !== 0;) {
            var D = p.div(h);
            W = p.sub(D.mul(h)), J = x.sub(D.mul(b));
            var B = E.sub(D.mul(g));
            if (!I && W.cmp(u) < 0) R = H.neg(), k = b, I = W.neg(), $ = J;
            else if (I && ++X === 2) break;
            H = W, p = h, h = W, x = b, b = J, E = g, g = B
        }
        j = W.neg(), O = J;
        var y = I.sqr().add($.sqr()),
            t = j.sqr().add(O.sqr());
        return t.cmp(y) >= 0 && (j = R, O = k), I.negative && (I = I.neg(), $ = $.neg()), j.negative && (j = j.neg(), O = O.neg()), [{
            a: I,
            b: $
        }, {
            a: j,
            b: O
        }]
    }, e.prototype._endoSplit = function(a) {
        var u = this.endo.basis,
            h = u[0],
            p = u[1],
            b = p.b.mul(a).divRound(this.n),
            g = h.b.neg().mul(a).divRound(this.n),
            x = b.mul(h.a),
            E = g.mul(p.a),
            R = b.mul(h.b),
            k = g.mul(p.b),
            I = a.sub(x).sub(E),
            $ = R.add(k).neg();
        return {
            k1: I,
            k2: $
        }
    }, e.prototype.pointFromX = function(a, u) {
        a = new r(a, 16), a.red || (a = a.toRed(this.red));
        var h = a.redSqr().redMul(a).redIAdd(a.redMul(this.a)).redIAdd(this.b),
            p = h.redSqrt();
        if (p.redSqr().redSub(h).cmp(this.zero) !== 0) throw new Error("invalid point");
        var b = p.fromRed().isOdd();
        return (u && !b || !u && b) && (p = p.redNeg()), this.point(a, p)
    }, e.prototype.validate = function(a) {
        if (a.inf) return !0;
        var u = a.x,
            h = a.y,
            p = this.a.redMul(u),
            b = u.redSqr().redMul(u).redIAdd(p).redIAdd(this.b);
        return h.redSqr().redISub(b).cmpn(0) === 0
    }, e.prototype._endoWnafMulAdd = function(a, u, h) {
        for (var p = this._endoWnafT1, b = this._endoWnafT2, g = 0; g < a.length; g++) {
            var x = this._endoSplit(u[g]),
                E = a[g],
                R = E._getBeta();
            x.k1.negative && (x.k1.ineg(), E = E.neg(!0)), x.k2.negative && (x.k2.ineg(), R = R.neg(!0)), p[g * 2] = E, p[g * 2 + 1] = R, b[g * 2] = x.k1, b[g * 2 + 1] = x.k2
        }
        for (var k = this._wnafMulAdd(1, p, b, g * 2, h), I = 0; I < g * 2; I++) p[I] = null, b[I] = null;
        return k
    };

    function d(v, a, u, h) {
        i.BasePoint.call(this, v, "affine"), a === null && u === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new r(a, 16), this.y = new r(u, 16), h && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
    }
    n(d, i.BasePoint), e.prototype.point = function(a, u, h) {
        return new d(this, a, u, h)
    }, e.prototype.pointFromJSON = function(a, u) {
        return d.fromJSON(this, a, u)
    }, d.prototype._getBeta = function() {
        if (this.curve.endo) {
            var a = this.precomputed;
            if (a && a.beta) return a.beta;
            var u = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (a) {
                var h = this.curve,
                    p = function(b) {
                        return h.point(b.x.redMul(h.endo.beta), b.y)
                    };
                a.beta = u, u.precomputed = {
                    beta: null,
                    naf: a.naf && {
                        wnd: a.naf.wnd,
                        points: a.naf.points.map(p)
                    },
                    doubles: a.doubles && {
                        step: a.doubles.step,
                        points: a.doubles.points.map(p)
                    }
                }
            }
            return u
        }
    }, d.prototype.toJSON = function() {
        return this.precomputed ? [this.x, this.y, this.precomputed && {
            doubles: this.precomputed.doubles && {
                step: this.precomputed.doubles.step,
                points: this.precomputed.doubles.points.slice(1)
            },
            naf: this.precomputed.naf && {
                wnd: this.precomputed.naf.wnd,
                points: this.precomputed.naf.points.slice(1)
            }
        }] : [this.x, this.y]
    }, d.fromJSON = function(a, u, h) {
        typeof u == "string" && (u = JSON.parse(u));
        var p = a.point(u[0], u[1], h);
        if (!u[2]) return p;

        function b(x) {
            return a.point(x[0], x[1], h)
        }
        var g = u[2];
        return p.precomputed = {
            beta: null,
            doubles: g.doubles && {
                step: g.doubles.step,
                points: [p].concat(g.doubles.points.map(b))
            },
            naf: g.naf && {
                wnd: g.naf.wnd,
                points: [p].concat(g.naf.points.map(b))
            }
        }, p
    }, d.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }, d.prototype.isInfinity = function() {
        return this.inf
    }, d.prototype.add = function(a) {
        if (this.inf) return a;
        if (a.inf) return this;
        if (this.eq(a)) return this.dbl();
        if (this.neg().eq(a)) return this.curve.point(null, null);
        if (this.x.cmp(a.x) === 0) return this.curve.point(null, null);
        var u = this.y.redSub(a.y);
        u.cmpn(0) !== 0 && (u = u.redMul(this.x.redSub(a.x).redInvm()));
        var h = u.redSqr().redISub(this.x).redISub(a.x),
            p = u.redMul(this.x.redSub(h)).redISub(this.y);
        return this.curve.point(h, p)
    }, d.prototype.dbl = function() {
        if (this.inf) return this;
        var a = this.y.redAdd(this.y);
        if (a.cmpn(0) === 0) return this.curve.point(null, null);
        var u = this.curve.a,
            h = this.x.redSqr(),
            p = a.redInvm(),
            b = h.redAdd(h).redIAdd(h).redIAdd(u).redMul(p),
            g = b.redSqr().redISub(this.x.redAdd(this.x)),
            x = b.redMul(this.x.redSub(g)).redISub(this.y);
        return this.curve.point(g, x)
    }, d.prototype.getX = function() {
        return this.x.fromRed()
    }, d.prototype.getY = function() {
        return this.y.fromRed()
    }, d.prototype.mul = function(a) {
        return a = new r(a, 16), this.isInfinity() ? this : this._hasDoubles(a) ? this.curve._fixedNafMul(this, a) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [a]) : this.curve._wnafMul(this, a)
    }, d.prototype.mulAdd = function(a, u, h) {
        var p = [this, u],
            b = [a, h];
        return this.curve.endo ? this.curve._endoWnafMulAdd(p, b) : this.curve._wnafMulAdd(1, p, b, 2)
    }, d.prototype.jmulAdd = function(a, u, h) {
        var p = [this, u],
            b = [a, h];
        return this.curve.endo ? this.curve._endoWnafMulAdd(p, b, !0) : this.curve._wnafMulAdd(1, p, b, 2, !0)
    }, d.prototype.eq = function(a) {
        return this === a || this.inf === a.inf && (this.inf || this.x.cmp(a.x) === 0 && this.y.cmp(a.y) === 0)
    }, d.prototype.neg = function(a) {
        if (this.inf) return this;
        var u = this.curve.point(this.x, this.y.redNeg());
        if (a && this.precomputed) {
            var h = this.precomputed,
                p = function(b) {
                    return b.neg()
                };
            u.precomputed = {
                naf: h.naf && {
                    wnd: h.naf.wnd,
                    points: h.naf.points.map(p)
                },
                doubles: h.doubles && {
                    step: h.doubles.step,
                    points: h.doubles.points.map(p)
                }
            }
        }
        return u
    }, d.prototype.toJ = function() {
        if (this.inf) return this.curve.jpoint(null, null, null);
        var a = this.curve.jpoint(this.x, this.y, this.curve.one);
        return a
    };

    function l(v, a, u, h) {
        i.BasePoint.call(this, v, "jacobian"), a === null && u === null && h === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new r(0)) : (this.x = new r(a, 16), this.y = new r(u, 16), this.z = new r(h, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
    }
    return n(l, i.BasePoint), e.prototype.jpoint = function(a, u, h) {
        return new l(this, a, u, h)
    }, l.prototype.toP = function() {
        if (this.isInfinity()) return this.curve.point(null, null);
        var a = this.z.redInvm(),
            u = a.redSqr(),
            h = this.x.redMul(u),
            p = this.y.redMul(u).redMul(a);
        return this.curve.point(h, p)
    }, l.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }, l.prototype.add = function(a) {
        if (this.isInfinity()) return a;
        if (a.isInfinity()) return this;
        var u = a.z.redSqr(),
            h = this.z.redSqr(),
            p = this.x.redMul(u),
            b = a.x.redMul(h),
            g = this.y.redMul(u.redMul(a.z)),
            x = a.y.redMul(h.redMul(this.z)),
            E = p.redSub(b),
            R = g.redSub(x);
        if (E.cmpn(0) === 0) return R.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
        var k = E.redSqr(),
            I = k.redMul(E),
            $ = p.redMul(k),
            j = R.redSqr().redIAdd(I).redISub($).redISub($),
            O = R.redMul($.redISub(j)).redISub(g.redMul(I)),
            H = this.z.redMul(a.z).redMul(E);
        return this.curve.jpoint(j, O, H)
    }, l.prototype.mixedAdd = function(a) {
        if (this.isInfinity()) return a.toJ();
        if (a.isInfinity()) return this;
        var u = this.z.redSqr(),
            h = this.x,
            p = a.x.redMul(u),
            b = this.y,
            g = a.y.redMul(u).redMul(this.z),
            x = h.redSub(p),
            E = b.redSub(g);
        if (x.cmpn(0) === 0) return E.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
        var R = x.redSqr(),
            k = R.redMul(x),
            I = h.redMul(R),
            $ = E.redSqr().redIAdd(k).redISub(I).redISub(I),
            j = E.redMul(I.redISub($)).redISub(b.redMul(k)),
            O = this.z.redMul(x);
        return this.curve.jpoint($, j, O)
    }, l.prototype.dblp = function(a) {
        if (a === 0) return this;
        if (this.isInfinity()) return this;
        if (!a) return this.dbl();
        var u;
        if (this.curve.zeroA || this.curve.threeA) {
            var h = this;
            for (u = 0; u < a; u++) h = h.dbl();
            return h
        }
        var p = this.curve.a,
            b = this.curve.tinv,
            g = this.x,
            x = this.y,
            E = this.z,
            R = E.redSqr().redSqr(),
            k = x.redAdd(x);
        for (u = 0; u < a; u++) {
            var I = g.redSqr(),
                $ = k.redSqr(),
                j = $.redSqr(),
                O = I.redAdd(I).redIAdd(I).redIAdd(p.redMul(R)),
                H = g.redMul($),
                X = O.redSqr().redISub(H.redAdd(H)),
                W = H.redISub(X),
                J = O.redMul(W);
            J = J.redIAdd(J).redISub(j);
            var D = k.redMul(E);
            u + 1 < a && (R = R.redMul(j)), g = X, E = D, k = J
        }
        return this.curve.jpoint(g, k.redMul(b), E)
    }, l.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }, l.prototype._zeroDbl = function() {
        var a, u, h;
        if (this.zOne) {
            var p = this.x.redSqr(),
                b = this.y.redSqr(),
                g = b.redSqr(),
                x = this.x.redAdd(b).redSqr().redISub(p).redISub(g);
            x = x.redIAdd(x);
            var E = p.redAdd(p).redIAdd(p),
                R = E.redSqr().redISub(x).redISub(x),
                k = g.redIAdd(g);
            k = k.redIAdd(k), k = k.redIAdd(k), a = R, u = E.redMul(x.redISub(R)).redISub(k), h = this.y.redAdd(this.y)
        } else {
            var I = this.x.redSqr(),
                $ = this.y.redSqr(),
                j = $.redSqr(),
                O = this.x.redAdd($).redSqr().redISub(I).redISub(j);
            O = O.redIAdd(O);
            var H = I.redAdd(I).redIAdd(I),
                X = H.redSqr(),
                W = j.redIAdd(j);
            W = W.redIAdd(W), W = W.redIAdd(W), a = X.redISub(O).redISub(O), u = H.redMul(O.redISub(a)).redISub(W), h = this.y.redMul(this.z), h = h.redIAdd(h)
        }
        return this.curve.jpoint(a, u, h)
    }, l.prototype._threeDbl = function() {
        var a, u, h;
        if (this.zOne) {
            var p = this.x.redSqr(),
                b = this.y.redSqr(),
                g = b.redSqr(),
                x = this.x.redAdd(b).redSqr().redISub(p).redISub(g);
            x = x.redIAdd(x);
            var E = p.redAdd(p).redIAdd(p).redIAdd(this.curve.a),
                R = E.redSqr().redISub(x).redISub(x);
            a = R;
            var k = g.redIAdd(g);
            k = k.redIAdd(k), k = k.redIAdd(k), u = E.redMul(x.redISub(R)).redISub(k), h = this.y.redAdd(this.y)
        } else {
            var I = this.z.redSqr(),
                $ = this.y.redSqr(),
                j = this.x.redMul($),
                O = this.x.redSub(I).redMul(this.x.redAdd(I));
            O = O.redAdd(O).redIAdd(O);
            var H = j.redIAdd(j);
            H = H.redIAdd(H);
            var X = H.redAdd(H);
            a = O.redSqr().redISub(X), h = this.y.redAdd(this.z).redSqr().redISub($).redISub(I);
            var W = $.redSqr();
            W = W.redIAdd(W), W = W.redIAdd(W), W = W.redIAdd(W), u = O.redMul(H.redISub(a)).redISub(W)
        }
        return this.curve.jpoint(a, u, h)
    }, l.prototype._dbl = function() {
        var a = this.curve.a,
            u = this.x,
            h = this.y,
            p = this.z,
            b = p.redSqr().redSqr(),
            g = u.redSqr(),
            x = h.redSqr(),
            E = g.redAdd(g).redIAdd(g).redIAdd(a.redMul(b)),
            R = u.redAdd(u);
        R = R.redIAdd(R);
        var k = R.redMul(x),
            I = E.redSqr().redISub(k.redAdd(k)),
            $ = k.redISub(I),
            j = x.redSqr();
        j = j.redIAdd(j), j = j.redIAdd(j), j = j.redIAdd(j);
        var O = E.redMul($).redISub(j),
            H = h.redAdd(h).redMul(p);
        return this.curve.jpoint(I, O, H)
    }, l.prototype.trpl = function() {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var a = this.x.redSqr(),
            u = this.y.redSqr(),
            h = this.z.redSqr(),
            p = u.redSqr(),
            b = a.redAdd(a).redIAdd(a),
            g = b.redSqr(),
            x = this.x.redAdd(u).redSqr().redISub(a).redISub(p);
        x = x.redIAdd(x), x = x.redAdd(x).redIAdd(x), x = x.redISub(g);
        var E = x.redSqr(),
            R = p.redIAdd(p);
        R = R.redIAdd(R), R = R.redIAdd(R), R = R.redIAdd(R);
        var k = b.redIAdd(x).redSqr().redISub(g).redISub(E).redISub(R),
            I = u.redMul(k);
        I = I.redIAdd(I), I = I.redIAdd(I);
        var $ = this.x.redMul(E).redISub(I);
        $ = $.redIAdd($), $ = $.redIAdd($);
        var j = this.y.redMul(k.redMul(R.redISub(k)).redISub(x.redMul(E)));
        j = j.redIAdd(j), j = j.redIAdd(j), j = j.redIAdd(j);
        var O = this.z.redAdd(x).redSqr().redISub(h).redISub(E);
        return this.curve.jpoint($, j, O)
    }, l.prototype.mul = function(a, u) {
        return a = new r(a, u), this.curve._wnafMul(this, a)
    }, l.prototype.eq = function(a) {
        if (a.type === "affine") return this.eq(a.toJ());
        if (this === a) return !0;
        var u = this.z.redSqr(),
            h = a.z.redSqr();
        if (this.x.redMul(h).redISub(a.x.redMul(u)).cmpn(0) !== 0) return !1;
        var p = u.redMul(this.z),
            b = h.redMul(a.z);
        return this.y.redMul(b).redISub(a.y.redMul(p)).cmpn(0) === 0
    }, l.prototype.eqXToP = function(a) {
        var u = this.z.redSqr(),
            h = a.toRed(this.curve.red).redMul(u);
        if (this.x.cmp(h) === 0) return !0;
        for (var p = a.clone(), b = this.curve.redN.redMul(u);;) {
            if (p.iadd(this.curve.n), p.cmp(this.curve.p) >= 0) return !1;
            if (h.redIAdd(b), this.x.cmp(h) === 0) return !0
        }
    }, l.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }, l.prototype.isInfinity = function() {
        return this.z.cmpn(0) === 0
    }, short
}
var mont, hasRequiredMont;

function requireMont() {
    if (hasRequiredMont) return mont;
    hasRequiredMont = 1;
    var s = requireBn$2(),
        r = requireInherits_browser(),
        n = requireBase$1(),
        i = requireUtils$1();

    function f(d) {
        n.call(this, "mont", d), this.a = new s(d.a, 16).toRed(this.red), this.b = new s(d.b, 16).toRed(this.red), this.i4 = new s(4).toRed(this.red).redInvm(), this.two = new s(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }
    r(f, n), mont = f, f.prototype.validate = function(l) {
        var v = l.normalize().x,
            a = v.redSqr(),
            u = a.redMul(v).redAdd(a.redMul(this.a)).redAdd(v),
            h = u.redSqrt();
        return h.redSqr().cmp(u) === 0
    };

    function e(d, l, v) {
        n.BasePoint.call(this, d, "projective"), l === null && v === null ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new s(l, 16), this.z = new s(v, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
    }
    return r(e, n.BasePoint), f.prototype.decodePoint = function(l, v) {
        return this.point(i.toArray(l, v), 1)
    }, f.prototype.point = function(l, v) {
        return new e(this, l, v)
    }, f.prototype.pointFromJSON = function(l) {
        return e.fromJSON(this, l)
    }, e.prototype.precompute = function() {}, e.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }, e.fromJSON = function(l, v) {
        return new e(l, v[0], v[1] || l.one)
    }, e.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, e.prototype.isInfinity = function() {
        return this.z.cmpn(0) === 0
    }, e.prototype.dbl = function() {
        var l = this.x.redAdd(this.z),
            v = l.redSqr(),
            a = this.x.redSub(this.z),
            u = a.redSqr(),
            h = v.redSub(u),
            p = v.redMul(u),
            b = h.redMul(u.redAdd(this.curve.a24.redMul(h)));
        return this.curve.point(p, b)
    }, e.prototype.add = function() {
        throw new Error("Not supported on Montgomery curve")
    }, e.prototype.diffAdd = function(l, v) {
        var a = this.x.redAdd(this.z),
            u = this.x.redSub(this.z),
            h = l.x.redAdd(l.z),
            p = l.x.redSub(l.z),
            b = p.redMul(a),
            g = h.redMul(u),
            x = v.z.redMul(b.redAdd(g).redSqr()),
            E = v.x.redMul(b.redISub(g).redSqr());
        return this.curve.point(x, E)
    }, e.prototype.mul = function(l) {
        for (var v = l.clone(), a = this, u = this.curve.point(null, null), h = this, p = []; v.cmpn(0) !== 0; v.iushrn(1)) p.push(v.andln(1));
        for (var b = p.length - 1; b >= 0; b--) p[b] === 0 ? (a = a.diffAdd(u, h), u = u.dbl()) : (u = a.diffAdd(u, h), a = a.dbl());
        return u
    }, e.prototype.mulAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }, e.prototype.jumlAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }, e.prototype.eq = function(l) {
        return this.getX().cmp(l.getX()) === 0
    }, e.prototype.normalize = function() {
        return this.x = this.x.redMul(this.z.redInvm()), this.z = this.curve.one, this
    }, e.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }, mont
}
var edwards, hasRequiredEdwards;

function requireEdwards() {
    if (hasRequiredEdwards) return edwards;
    hasRequiredEdwards = 1;
    var s = requireUtils$1(),
        r = requireBn$2(),
        n = requireInherits_browser(),
        i = requireBase$1(),
        f = s.assert;

    function e(l) {
        this.twisted = (l.a | 0) !== 1, this.mOneA = this.twisted && (l.a | 0) === -1, this.extended = this.mOneA, i.call(this, "edwards", l), this.a = new r(l.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new r(l.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new r(l.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), f(!this.twisted || this.c.fromRed().cmpn(1) === 0), this.oneC = (l.c | 0) === 1
    }
    n(e, i), edwards = e, e.prototype._mulA = function(v) {
        return this.mOneA ? v.redNeg() : this.a.redMul(v)
    }, e.prototype._mulC = function(v) {
        return this.oneC ? v : this.c.redMul(v)
    }, e.prototype.jpoint = function(v, a, u, h) {
        return this.point(v, a, u, h)
    }, e.prototype.pointFromX = function(v, a) {
        v = new r(v, 16), v.red || (v = v.toRed(this.red));
        var u = v.redSqr(),
            h = this.c2.redSub(this.a.redMul(u)),
            p = this.one.redSub(this.c2.redMul(this.d).redMul(u)),
            b = h.redMul(p.redInvm()),
            g = b.redSqrt();
        if (g.redSqr().redSub(b).cmp(this.zero) !== 0) throw new Error("invalid point");
        var x = g.fromRed().isOdd();
        return (a && !x || !a && x) && (g = g.redNeg()), this.point(v, g)
    }, e.prototype.pointFromY = function(v, a) {
        v = new r(v, 16), v.red || (v = v.toRed(this.red));
        var u = v.redSqr(),
            h = u.redSub(this.c2),
            p = u.redMul(this.d).redMul(this.c2).redSub(this.a),
            b = h.redMul(p.redInvm());
        if (b.cmp(this.zero) === 0) {
            if (a) throw new Error("invalid point");
            return this.point(this.zero, v)
        }
        var g = b.redSqrt();
        if (g.redSqr().redSub(b).cmp(this.zero) !== 0) throw new Error("invalid point");
        return g.fromRed().isOdd() !== a && (g = g.redNeg()), this.point(g, v)
    }, e.prototype.validate = function(v) {
        if (v.isInfinity()) return !0;
        v.normalize();
        var a = v.x.redSqr(),
            u = v.y.redSqr(),
            h = a.redMul(this.a).redAdd(u),
            p = this.c2.redMul(this.one.redAdd(this.d.redMul(a).redMul(u)));
        return h.cmp(p) === 0
    };

    function d(l, v, a, u, h) {
        i.BasePoint.call(this, l, "projective"), v === null && a === null && u === null ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new r(v, 16), this.y = new r(a, 16), this.z = u ? new r(u, 16) : this.curve.one, this.t = h && new r(h, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
    }
    return n(d, i.BasePoint), e.prototype.pointFromJSON = function(v) {
        return d.fromJSON(this, v)
    }, e.prototype.point = function(v, a, u, h) {
        return new d(this, v, a, u, h)
    }, d.fromJSON = function(v, a) {
        return new d(v, a[0], a[1], a[2])
    }, d.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, d.prototype.isInfinity = function() {
        return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0)
    }, d.prototype._extDbl = function() {
        var v = this.x.redSqr(),
            a = this.y.redSqr(),
            u = this.z.redSqr();
        u = u.redIAdd(u);
        var h = this.curve._mulA(v),
            p = this.x.redAdd(this.y).redSqr().redISub(v).redISub(a),
            b = h.redAdd(a),
            g = b.redSub(u),
            x = h.redSub(a),
            E = p.redMul(g),
            R = b.redMul(x),
            k = p.redMul(x),
            I = g.redMul(b);
        return this.curve.point(E, R, I, k)
    }, d.prototype._projDbl = function() {
        var v = this.x.redAdd(this.y).redSqr(),
            a = this.x.redSqr(),
            u = this.y.redSqr(),
            h, p, b, g, x, E;
        if (this.curve.twisted) {
            g = this.curve._mulA(a);
            var R = g.redAdd(u);
            this.zOne ? (h = v.redSub(a).redSub(u).redMul(R.redSub(this.curve.two)), p = R.redMul(g.redSub(u)), b = R.redSqr().redSub(R).redSub(R)) : (x = this.z.redSqr(), E = R.redSub(x).redISub(x), h = v.redSub(a).redISub(u).redMul(E), p = R.redMul(g.redSub(u)), b = R.redMul(E))
        } else g = a.redAdd(u), x = this.curve._mulC(this.z).redSqr(), E = g.redSub(x).redSub(x), h = this.curve._mulC(v.redISub(g)).redMul(E), p = this.curve._mulC(g).redMul(a.redISub(u)), b = g.redMul(E);
        return this.curve.point(h, p, b)
    }, d.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }, d.prototype._extAdd = function(v) {
        var a = this.y.redSub(this.x).redMul(v.y.redSub(v.x)),
            u = this.y.redAdd(this.x).redMul(v.y.redAdd(v.x)),
            h = this.t.redMul(this.curve.dd).redMul(v.t),
            p = this.z.redMul(v.z.redAdd(v.z)),
            b = u.redSub(a),
            g = p.redSub(h),
            x = p.redAdd(h),
            E = u.redAdd(a),
            R = b.redMul(g),
            k = x.redMul(E),
            I = b.redMul(E),
            $ = g.redMul(x);
        return this.curve.point(R, k, $, I)
    }, d.prototype._projAdd = function(v) {
        var a = this.z.redMul(v.z),
            u = a.redSqr(),
            h = this.x.redMul(v.x),
            p = this.y.redMul(v.y),
            b = this.curve.d.redMul(h).redMul(p),
            g = u.redSub(b),
            x = u.redAdd(b),
            E = this.x.redAdd(this.y).redMul(v.x.redAdd(v.y)).redISub(h).redISub(p),
            R = a.redMul(g).redMul(E),
            k, I;
        return this.curve.twisted ? (k = a.redMul(x).redMul(p.redSub(this.curve._mulA(h))), I = g.redMul(x)) : (k = a.redMul(x).redMul(p.redSub(h)), I = this.curve._mulC(g).redMul(x)), this.curve.point(R, k, I)
    }, d.prototype.add = function(v) {
        return this.isInfinity() ? v : v.isInfinity() ? this : this.curve.extended ? this._extAdd(v) : this._projAdd(v)
    }, d.prototype.mul = function(v) {
        return this._hasDoubles(v) ? this.curve._fixedNafMul(this, v) : this.curve._wnafMul(this, v)
    }, d.prototype.mulAdd = function(v, a, u) {
        return this.curve._wnafMulAdd(1, [this, a], [v, u], 2, !1)
    }, d.prototype.jmulAdd = function(v, a, u) {
        return this.curve._wnafMulAdd(1, [this, a], [v, u], 2, !0)
    }, d.prototype.normalize = function() {
        if (this.zOne) return this;
        var v = this.z.redInvm();
        return this.x = this.x.redMul(v), this.y = this.y.redMul(v), this.t && (this.t = this.t.redMul(v)), this.z = this.curve.one, this.zOne = !0, this
    }, d.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }, d.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }, d.prototype.getY = function() {
        return this.normalize(), this.y.fromRed()
    }, d.prototype.eq = function(v) {
        return this === v || this.getX().cmp(v.getX()) === 0 && this.getY().cmp(v.getY()) === 0
    }, d.prototype.eqXToP = function(v) {
        var a = v.toRed(this.curve.red).redMul(this.z);
        if (this.x.cmp(a) === 0) return !0;
        for (var u = v.clone(), h = this.curve.redN.redMul(this.z);;) {
            if (u.iadd(this.curve.n), u.cmp(this.curve.p) >= 0) return !1;
            if (a.redIAdd(h), this.x.cmp(a) === 0) return !0
        }
    }, d.prototype.toP = d.prototype.normalize, d.prototype.mixedAdd = d.prototype.add, edwards
}
var hasRequiredCurve;

function requireCurve() {
    return hasRequiredCurve || (hasRequiredCurve = 1, function(s) {
        var r = s;
        r.base = requireBase$1(), r.short = requireShort(), r.mont = requireMont(), r.edwards = requireEdwards()
    }(curve)), curve
}
var curves = {},
    hash = {},
    utils = {},
    hasRequiredUtils;

function requireUtils() {
    if (hasRequiredUtils) return utils;
    hasRequiredUtils = 1;
    var s = requireMinimalisticAssert(),
        r = requireInherits_browser();
    utils.inherits = r;

    function n(B, y) {
        return (B.charCodeAt(y) & 64512) !== 55296 || y < 0 || y + 1 >= B.length ? !1 : (B.charCodeAt(y + 1) & 64512) === 56320
    }

    function i(B, y) {
        if (Array.isArray(B)) return B.slice();
        if (!B) return [];
        var t = [];
        if (typeof B == "string")
            if (y) {
                if (y === "hex")
                    for (B = B.replace(/[^a-z0-9]+/ig, ""), B.length % 2 !== 0 && (B = "0" + B), _ = 0; _ < B.length; _ += 2) t.push(parseInt(B[_] + B[_ + 1], 16))
            } else
                for (var c = 0, _ = 0; _ < B.length; _++) {
                    var w = B.charCodeAt(_);
                    w < 128 ? t[c++] = w : w < 2048 ? (t[c++] = w >> 6 | 192, t[c++] = w & 63 | 128) : n(B, _) ? (w = 65536 + ((w & 1023) << 10) + (B.charCodeAt(++_) & 1023), t[c++] = w >> 18 | 240, t[c++] = w >> 12 & 63 | 128, t[c++] = w >> 6 & 63 | 128, t[c++] = w & 63 | 128) : (t[c++] = w >> 12 | 224, t[c++] = w >> 6 & 63 | 128, t[c++] = w & 63 | 128)
                } else
                    for (_ = 0; _ < B.length; _++) t[_] = B[_] | 0;
        return t
    }
    utils.toArray = i;

    function f(B) {
        for (var y = "", t = 0; t < B.length; t++) y += l(B[t].toString(16));
        return y
    }
    utils.toHex = f;

    function e(B) {
        var y = B >>> 24 | B >>> 8 & 65280 | B << 8 & 16711680 | (B & 255) << 24;
        return y >>> 0
    }
    utils.htonl = e;

    function d(B, y) {
        for (var t = "", c = 0; c < B.length; c++) {
            var _ = B[c];
            y === "little" && (_ = e(_)), t += v(_.toString(16))
        }
        return t
    }
    utils.toHex32 = d;

    function l(B) {
        return B.length === 1 ? "0" + B : B
    }
    utils.zero2 = l;

    function v(B) {
        return B.length === 7 ? "0" + B : B.length === 6 ? "00" + B : B.length === 5 ? "000" + B : B.length === 4 ? "0000" + B : B.length === 3 ? "00000" + B : B.length === 2 ? "000000" + B : B.length === 1 ? "0000000" + B : B
    }
    utils.zero8 = v;

    function a(B, y, t, c) {
        var _ = t - y;
        s(_ % 4 === 0);
        for (var w = new Array(_ / 4), q = 0, A = y; q < w.length; q++, A += 4) {
            var M;
            c === "big" ? M = B[A] << 24 | B[A + 1] << 16 | B[A + 2] << 8 | B[A + 3] : M = B[A + 3] << 24 | B[A + 2] << 16 | B[A + 1] << 8 | B[A], w[q] = M >>> 0
        }
        return w
    }
    utils.join32 = a;

    function u(B, y) {
        for (var t = new Array(B.length * 4), c = 0, _ = 0; c < B.length; c++, _ += 4) {
            var w = B[c];
            y === "big" ? (t[_] = w >>> 24, t[_ + 1] = w >>> 16 & 255, t[_ + 2] = w >>> 8 & 255, t[_ + 3] = w & 255) : (t[_ + 3] = w >>> 24, t[_ + 2] = w >>> 16 & 255, t[_ + 1] = w >>> 8 & 255, t[_] = w & 255)
        }
        return t
    }
    utils.split32 = u;

    function h(B, y) {
        return B >>> y | B << 32 - y
    }
    utils.rotr32 = h;

    function p(B, y) {
        return B << y | B >>> 32 - y
    }
    utils.rotl32 = p;

    function b(B, y) {
        return B + y >>> 0
    }
    utils.sum32 = b;

    function g(B, y, t) {
        return B + y + t >>> 0
    }
    utils.sum32_3 = g;

    function x(B, y, t, c) {
        return B + y + t + c >>> 0
    }
    utils.sum32_4 = x;

    function E(B, y, t, c, _) {
        return B + y + t + c + _ >>> 0
    }
    utils.sum32_5 = E;

    function R(B, y, t, c) {
        var _ = B[y],
            w = B[y + 1],
            q = c + w >>> 0,
            A = (q < c ? 1 : 0) + t + _;
        B[y] = A >>> 0, B[y + 1] = q
    }
    utils.sum64 = R;

    function k(B, y, t, c) {
        var _ = y + c >>> 0,
            w = (_ < y ? 1 : 0) + B + t;
        return w >>> 0
    }
    utils.sum64_hi = k;

    function I(B, y, t, c) {
        var _ = y + c;
        return _ >>> 0
    }
    utils.sum64_lo = I;

    function $(B, y, t, c, _, w, q, A) {
        var M = 0,
            S = y;
        S = S + c >>> 0, M += S < y ? 1 : 0, S = S + w >>> 0, M += S < w ? 1 : 0, S = S + A >>> 0, M += S < A ? 1 : 0;
        var m = B + t + _ + q + M;
        return m >>> 0
    }
    utils.sum64_4_hi = $;

    function j(B, y, t, c, _, w, q, A) {
        var M = y + c + w + A;
        return M >>> 0
    }
    utils.sum64_4_lo = j;

    function O(B, y, t, c, _, w, q, A, M, S) {
        var m = 0,
            C = y;
        C = C + c >>> 0, m += C < y ? 1 : 0, C = C + w >>> 0, m += C < w ? 1 : 0, C = C + A >>> 0, m += C < A ? 1 : 0, C = C + S >>> 0, m += C < S ? 1 : 0;
        var L = B + t + _ + q + M + m;
        return L >>> 0
    }
    utils.sum64_5_hi = O;

    function H(B, y, t, c, _, w, q, A, M, S) {
        var m = y + c + w + A + S;
        return m >>> 0
    }
    utils.sum64_5_lo = H;

    function X(B, y, t) {
        var c = y << 32 - t | B >>> t;
        return c >>> 0
    }
    utils.rotr64_hi = X;

    function W(B, y, t) {
        var c = B << 32 - t | y >>> t;
        return c >>> 0
    }
    utils.rotr64_lo = W;

    function J(B, y, t) {
        return B >>> t
    }
    utils.shr64_hi = J;

    function D(B, y, t) {
        var c = B << 32 - t | y >>> t;
        return c >>> 0
    }
    return utils.shr64_lo = D, utils
}
var common$1 = {},
    hasRequiredCommon$1;

function requireCommon$1() {
    if (hasRequiredCommon$1) return common$1;
    hasRequiredCommon$1 = 1;
    var s = requireUtils(),
        r = requireMinimalisticAssert();

    function n() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
    }
    return common$1.BlockHash = n, n.prototype.update = function(f, e) {
        if (f = s.toArray(f, e), this.pending ? this.pending = this.pending.concat(f) : this.pending = f, this.pendingTotal += f.length, this.pending.length >= this._delta8) {
            f = this.pending;
            var d = f.length % this._delta8;
            this.pending = f.slice(f.length - d, f.length), this.pending.length === 0 && (this.pending = null), f = s.join32(f, 0, f.length - d, this.endian);
            for (var l = 0; l < f.length; l += this._delta32) this._update(f, l, l + this._delta32)
        }
        return this
    }, n.prototype.digest = function(f) {
        return this.update(this._pad()), r(this.pending === null), this._digest(f)
    }, n.prototype._pad = function() {
        var f = this.pendingTotal,
            e = this._delta8,
            d = e - (f + this.padLength) % e,
            l = new Array(d + this.padLength);
        l[0] = 128;
        for (var v = 1; v < d; v++) l[v] = 0;
        if (f <<= 3, this.endian === "big") {
            for (var a = 8; a < this.padLength; a++) l[v++] = 0;
            l[v++] = 0, l[v++] = 0, l[v++] = 0, l[v++] = 0, l[v++] = f >>> 24 & 255, l[v++] = f >>> 16 & 255, l[v++] = f >>> 8 & 255, l[v++] = f & 255
        } else
            for (l[v++] = f & 255, l[v++] = f >>> 8 & 255, l[v++] = f >>> 16 & 255, l[v++] = f >>> 24 & 255, l[v++] = 0, l[v++] = 0, l[v++] = 0, l[v++] = 0, a = 8; a < this.padLength; a++) l[v++] = 0;
        return l
    }, common$1
}
var sha = {},
    common = {},
    hasRequiredCommon;

function requireCommon() {
    if (hasRequiredCommon) return common;
    hasRequiredCommon = 1;
    var s = requireUtils(),
        r = s.rotr32;

    function n(u, h, p, b) {
        if (u === 0) return i(h, p, b);
        if (u === 1 || u === 3) return e(h, p, b);
        if (u === 2) return f(h, p, b)
    }
    common.ft_1 = n;

    function i(u, h, p) {
        return u & h ^ ~u & p
    }
    common.ch32 = i;

    function f(u, h, p) {
        return u & h ^ u & p ^ h & p
    }
    common.maj32 = f;

    function e(u, h, p) {
        return u ^ h ^ p
    }
    common.p32 = e;

    function d(u) {
        return r(u, 2) ^ r(u, 13) ^ r(u, 22)
    }
    common.s0_256 = d;

    function l(u) {
        return r(u, 6) ^ r(u, 11) ^ r(u, 25)
    }
    common.s1_256 = l;

    function v(u) {
        return r(u, 7) ^ r(u, 18) ^ u >>> 3
    }
    common.g0_256 = v;

    function a(u) {
        return r(u, 17) ^ r(u, 19) ^ u >>> 10
    }
    return common.g1_256 = a, common
}
var _1, hasRequired_1;

function require_1() {
    if (hasRequired_1) return _1;
    hasRequired_1 = 1;
    var s = requireUtils(),
        r = requireCommon$1(),
        n = requireCommon(),
        i = s.rotl32,
        f = s.sum32,
        e = s.sum32_5,
        d = n.ft_1,
        l = r.BlockHash,
        v = [1518500249, 1859775393, 2400959708, 3395469782];

    function a() {
        if (!(this instanceof a)) return new a;
        l.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
    }
    return s.inherits(a, l), _1 = a, a.blockSize = 512, a.outSize = 160, a.hmacStrength = 80, a.padLength = 64, a.prototype._update = function(h, p) {
        for (var b = this.W, g = 0; g < 16; g++) b[g] = h[p + g];
        for (; g < b.length; g++) b[g] = i(b[g - 3] ^ b[g - 8] ^ b[g - 14] ^ b[g - 16], 1);
        var x = this.h[0],
            E = this.h[1],
            R = this.h[2],
            k = this.h[3],
            I = this.h[4];
        for (g = 0; g < b.length; g++) {
            var $ = ~~(g / 20),
                j = e(i(x, 5), d($, E, R, k), I, b[g], v[$]);
            I = k, k = R, R = i(E, 30), E = x, x = j
        }
        this.h[0] = f(this.h[0], x), this.h[1] = f(this.h[1], E), this.h[2] = f(this.h[2], R), this.h[3] = f(this.h[3], k), this.h[4] = f(this.h[4], I)
    }, a.prototype._digest = function(h) {
        return h === "hex" ? s.toHex32(this.h, "big") : s.split32(this.h, "big")
    }, _1
}
var _256, hasRequired_256;

function require_256() {
    if (hasRequired_256) return _256;
    hasRequired_256 = 1;
    var s = requireUtils(),
        r = requireCommon$1(),
        n = requireCommon(),
        i = requireMinimalisticAssert(),
        f = s.sum32,
        e = s.sum32_4,
        d = s.sum32_5,
        l = n.ch32,
        v = n.maj32,
        a = n.s0_256,
        u = n.s1_256,
        h = n.g0_256,
        p = n.g1_256,
        b = r.BlockHash,
        g = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

    function x() {
        if (!(this instanceof x)) return new x;
        b.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = g, this.W = new Array(64)
    }
    return s.inherits(x, b), _256 = x, x.blockSize = 512, x.outSize = 256, x.hmacStrength = 192, x.padLength = 64, x.prototype._update = function(R, k) {
        for (var I = this.W, $ = 0; $ < 16; $++) I[$] = R[k + $];
        for (; $ < I.length; $++) I[$] = e(p(I[$ - 2]), I[$ - 7], h(I[$ - 15]), I[$ - 16]);
        var j = this.h[0],
            O = this.h[1],
            H = this.h[2],
            X = this.h[3],
            W = this.h[4],
            J = this.h[5],
            D = this.h[6],
            B = this.h[7];
        for (i(this.k.length === I.length), $ = 0; $ < I.length; $++) {
            var y = d(B, u(W), l(W, J, D), this.k[$], I[$]),
                t = f(a(j), v(j, O, H));
            B = D, D = J, J = W, W = f(X, y), X = H, H = O, O = j, j = f(y, t)
        }
        this.h[0] = f(this.h[0], j), this.h[1] = f(this.h[1], O), this.h[2] = f(this.h[2], H), this.h[3] = f(this.h[3], X), this.h[4] = f(this.h[4], W), this.h[5] = f(this.h[5], J), this.h[6] = f(this.h[6], D), this.h[7] = f(this.h[7], B)
    }, x.prototype._digest = function(R) {
        return R === "hex" ? s.toHex32(this.h, "big") : s.split32(this.h, "big")
    }, _256
}
var _224, hasRequired_224;

function require_224() {
    if (hasRequired_224) return _224;
    hasRequired_224 = 1;
    var s = requireUtils(),
        r = require_256();

    function n() {
        if (!(this instanceof n)) return new n;
        r.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
    }
    return s.inherits(n, r), _224 = n, n.blockSize = 512, n.outSize = 224, n.hmacStrength = 192, n.padLength = 64, n.prototype._digest = function(f) {
        return f === "hex" ? s.toHex32(this.h.slice(0, 7), "big") : s.split32(this.h.slice(0, 7), "big")
    }, _224
}
var _512, hasRequired_512;

function require_512() {
    if (hasRequired_512) return _512;
    hasRequired_512 = 1;
    var s = requireUtils(),
        r = requireCommon$1(),
        n = requireMinimalisticAssert(),
        i = s.rotr64_hi,
        f = s.rotr64_lo,
        e = s.shr64_hi,
        d = s.shr64_lo,
        l = s.sum64,
        v = s.sum64_hi,
        a = s.sum64_lo,
        u = s.sum64_4_hi,
        h = s.sum64_4_lo,
        p = s.sum64_5_hi,
        b = s.sum64_5_lo,
        g = r.BlockHash,
        x = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

    function E() {
        if (!(this instanceof E)) return new E;
        g.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = x, this.W = new Array(160)
    }
    s.inherits(E, g), _512 = E, E.blockSize = 1024, E.outSize = 512, E.hmacStrength = 192, E.padLength = 128, E.prototype._prepareBlock = function(t, c) {
        for (var _ = this.W, w = 0; w < 32; w++) _[w] = t[c + w];
        for (; w < _.length; w += 2) {
            var q = D(_[w - 4], _[w - 3]),
                A = B(_[w - 4], _[w - 3]),
                M = _[w - 14],
                S = _[w - 13],
                m = W(_[w - 30], _[w - 29]),
                C = J(_[w - 30], _[w - 29]),
                L = _[w - 32],
                U = _[w - 31];
            _[w] = u(q, A, M, S, m, C, L, U), _[w + 1] = h(q, A, M, S, m, C, L, U)
        }
    }, E.prototype._update = function(t, c) {
        this._prepareBlock(t, c);
        var _ = this.W,
            w = this.h[0],
            q = this.h[1],
            A = this.h[2],
            M = this.h[3],
            S = this.h[4],
            m = this.h[5],
            C = this.h[6],
            L = this.h[7],
            U = this.h[8],
            K = this.h[9],
            P = this.h[10],
            N = this.h[11],
            z = this.h[12],
            V = this.h[13],
            Q = this.h[14],
            G = this.h[15];
        n(this.k.length === _.length);
        for (var te = 0; te < _.length; te += 2) {
            var ve = Q,
                ee = G,
                De = H(U, K),
                me = X(U, K),
                re = R(U, K, P, N, z),
                Ne = k(U, K, P, N, z, V),
                ye = this.k[te],
                Y = this.k[te + 1],
                $e = _[te],
                be = _[te + 1],
                Z = p(ve, ee, De, me, re, Ne, ye, Y, $e, be),
                Pe = b(ve, ee, De, me, re, Ne, ye, Y, $e, be);
            ve = j(w, q), ee = O(w, q), De = I(w, q, A, M, S), me = $(w, q, A, M, S, m);
            var ge = v(ve, ee, De, me),
                ie = a(ve, ee, De, me);
            Q = z, G = V, z = P, V = N, P = U, N = K, U = v(C, L, Z, Pe), K = a(L, L, Z, Pe), C = S, L = m, S = A, m = M, A = w, M = q, w = v(Z, Pe, ge, ie), q = a(Z, Pe, ge, ie)
        }
        l(this.h, 0, w, q), l(this.h, 2, A, M), l(this.h, 4, S, m), l(this.h, 6, C, L), l(this.h, 8, U, K), l(this.h, 10, P, N), l(this.h, 12, z, V), l(this.h, 14, Q, G)
    }, E.prototype._digest = function(t) {
        return t === "hex" ? s.toHex32(this.h, "big") : s.split32(this.h, "big")
    };

    function R(y, t, c, _, w) {
        var q = y & c ^ ~y & w;
        return q < 0 && (q += 4294967296), q
    }

    function k(y, t, c, _, w, q) {
        var A = t & _ ^ ~t & q;
        return A < 0 && (A += 4294967296), A
    }

    function I(y, t, c, _, w) {
        var q = y & c ^ y & w ^ c & w;
        return q < 0 && (q += 4294967296), q
    }

    function $(y, t, c, _, w, q) {
        var A = t & _ ^ t & q ^ _ & q;
        return A < 0 && (A += 4294967296), A
    }

    function j(y, t) {
        var c = i(y, t, 28),
            _ = i(t, y, 2),
            w = i(t, y, 7),
            q = c ^ _ ^ w;
        return q < 0 && (q += 4294967296), q
    }

    function O(y, t) {
        var c = f(y, t, 28),
            _ = f(t, y, 2),
            w = f(t, y, 7),
            q = c ^ _ ^ w;
        return q < 0 && (q += 4294967296), q
    }

    function H(y, t) {
        var c = i(y, t, 14),
            _ = i(y, t, 18),
            w = i(t, y, 9),
            q = c ^ _ ^ w;
        return q < 0 && (q += 4294967296), q
    }

    function X(y, t) {
        var c = f(y, t, 14),
            _ = f(y, t, 18),
            w = f(t, y, 9),
            q = c ^ _ ^ w;
        return q < 0 && (q += 4294967296), q
    }

    function W(y, t) {
        var c = i(y, t, 1),
            _ = i(y, t, 8),
            w = e(y, t, 7),
            q = c ^ _ ^ w;
        return q < 0 && (q += 4294967296), q
    }

    function J(y, t) {
        var c = f(y, t, 1),
            _ = f(y, t, 8),
            w = d(y, t, 7),
            q = c ^ _ ^ w;
        return q < 0 && (q += 4294967296), q
    }

    function D(y, t) {
        var c = i(y, t, 19),
            _ = i(t, y, 29),
            w = e(y, t, 6),
            q = c ^ _ ^ w;
        return q < 0 && (q += 4294967296), q
    }

    function B(y, t) {
        var c = f(y, t, 19),
            _ = f(t, y, 29),
            w = d(y, t, 6),
            q = c ^ _ ^ w;
        return q < 0 && (q += 4294967296), q
    }
    return _512
}
var _384, hasRequired_384;

function require_384() {
    if (hasRequired_384) return _384;
    hasRequired_384 = 1;
    var s = requireUtils(),
        r = require_512();

    function n() {
        if (!(this instanceof n)) return new n;
        r.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
    }
    return s.inherits(n, r), _384 = n, n.blockSize = 1024, n.outSize = 384, n.hmacStrength = 192, n.padLength = 128, n.prototype._digest = function(f) {
        return f === "hex" ? s.toHex32(this.h.slice(0, 12), "big") : s.split32(this.h.slice(0, 12), "big")
    }, _384
}
var hasRequiredSha;

function requireSha() {
    return hasRequiredSha || (hasRequiredSha = 1, sha.sha1 = require_1(), sha.sha224 = require_224(), sha.sha256 = require_256(), sha.sha384 = require_384(), sha.sha512 = require_512()), sha
}
var ripemd = {},
    hasRequiredRipemd;

function requireRipemd() {
    if (hasRequiredRipemd) return ripemd;
    hasRequiredRipemd = 1;
    var s = requireUtils(),
        r = requireCommon$1(),
        n = s.rotl32,
        i = s.sum32,
        f = s.sum32_3,
        e = s.sum32_4,
        d = r.BlockHash;

    function l() {
        if (!(this instanceof l)) return new l;
        d.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
    }
    s.inherits(l, d), ripemd.ripemd160 = l, l.blockSize = 512, l.outSize = 160, l.hmacStrength = 192, l.padLength = 64, l.prototype._update = function(E, R) {
        for (var k = this.h[0], I = this.h[1], $ = this.h[2], j = this.h[3], O = this.h[4], H = k, X = I, W = $, J = j, D = O, B = 0; B < 80; B++) {
            var y = i(n(e(k, v(B, I, $, j), E[h[B] + R], a(B)), b[B]), O);
            k = O, O = j, j = n($, 10), $ = I, I = y, y = i(n(e(H, v(79 - B, X, W, J), E[p[B] + R], u(B)), g[B]), D), H = D, D = J, J = n(W, 10), W = X, X = y
        }
        y = f(this.h[1], $, J), this.h[1] = f(this.h[2], j, D), this.h[2] = f(this.h[3], O, H), this.h[3] = f(this.h[4], k, X), this.h[4] = f(this.h[0], I, W), this.h[0] = y
    }, l.prototype._digest = function(E) {
        return E === "hex" ? s.toHex32(this.h, "little") : s.split32(this.h, "little")
    };

    function v(x, E, R, k) {
        return x <= 15 ? E ^ R ^ k : x <= 31 ? E & R | ~E & k : x <= 47 ? (E | ~R) ^ k : x <= 63 ? E & k | R & ~k : E ^ (R | ~k)
    }

    function a(x) {
        return x <= 15 ? 0 : x <= 31 ? 1518500249 : x <= 47 ? 1859775393 : x <= 63 ? 2400959708 : 2840853838
    }

    function u(x) {
        return x <= 15 ? 1352829926 : x <= 31 ? 1548603684 : x <= 47 ? 1836072691 : x <= 63 ? 2053994217 : 0
    }
    var h = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        p = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        b = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        g = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
    return ripemd
}
var hmac, hasRequiredHmac;

function requireHmac() {
    if (hasRequiredHmac) return hmac;
    hasRequiredHmac = 1;
    var s = requireUtils(),
        r = requireMinimalisticAssert();

    function n(i, f, e) {
        if (!(this instanceof n)) return new n(i, f, e);
        this.Hash = i, this.blockSize = i.blockSize / 8, this.outSize = i.outSize / 8, this.inner = null, this.outer = null, this._init(s.toArray(f, e))
    }
    return hmac = n, n.prototype._init = function(f) {
        f.length > this.blockSize && (f = new this.Hash().update(f).digest()), r(f.length <= this.blockSize);
        for (var e = f.length; e < this.blockSize; e++) f.push(0);
        for (e = 0; e < f.length; e++) f[e] ^= 54;
        for (this.inner = new this.Hash().update(f), e = 0; e < f.length; e++) f[e] ^= 106;
        this.outer = new this.Hash().update(f)
    }, n.prototype.update = function(f, e) {
        return this.inner.update(f, e), this
    }, n.prototype.digest = function(f) {
        return this.outer.update(this.inner.digest()), this.outer.digest(f)
    }, hmac
}
var hasRequiredHash;

function requireHash() {
    return hasRequiredHash || (hasRequiredHash = 1, function(s) {
        var r = s;
        r.utils = requireUtils(), r.common = requireCommon$1(), r.sha = requireSha(), r.ripemd = requireRipemd(), r.hmac = requireHmac(), r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160
    }(hash)), hash
}
var secp256k1, hasRequiredSecp256k1;

function requireSecp256k1() {
    return hasRequiredSecp256k1 || (hasRequiredSecp256k1 = 1, secp256k1 = {
        doubles: {
            step: 4,
            points: [
                ["e60fce93b59e9ec53011aabc21c23e97b2a31369b87a5ae9c44ee89e2a6dec0a", "f7e3507399e595929db99f34f57937101296891e44d23f0be1f32cce69616821"],
                ["8282263212c609d9ea2a6e3e172de238d8c39cabd5ac1ca10646e23fd5f51508", "11f8a8098557dfe45e8256e830b60ace62d613ac2f7b17bed31b6eaff6e26caf"],
                ["175e159f728b865a72f99cc6c6fc846de0b93833fd2222ed73fce5b551e5b739", "d3506e0d9e3c79eba4ef97a51ff71f5eacb5955add24345c6efa6ffee9fed695"],
                ["363d90d447b00c9c99ceac05b6262ee053441c7e55552ffe526bad8f83ff4640", "4e273adfc732221953b445397f3363145b9a89008199ecb62003c7f3bee9de9"],
                ["8b4b5f165df3c2be8c6244b5b745638843e4a781a15bcd1b69f79a55dffdf80c", "4aad0a6f68d308b4b3fbd7813ab0da04f9e336546162ee56b3eff0c65fd4fd36"],
                ["723cbaa6e5db996d6bf771c00bd548c7b700dbffa6c0e77bcb6115925232fcda", "96e867b5595cc498a921137488824d6e2660a0653779494801dc069d9eb39f5f"],
                ["eebfa4d493bebf98ba5feec812c2d3b50947961237a919839a533eca0e7dd7fa", "5d9a8ca3970ef0f269ee7edaf178089d9ae4cdc3a711f712ddfd4fdae1de8999"],
                ["100f44da696e71672791d0a09b7bde459f1215a29b3c03bfefd7835b39a48db0", "cdd9e13192a00b772ec8f3300c090666b7ff4a18ff5195ac0fbd5cd62bc65a09"],
                ["e1031be262c7ed1b1dc9227a4a04c017a77f8d4464f3b3852c8acde6e534fd2d", "9d7061928940405e6bb6a4176597535af292dd419e1ced79a44f18f29456a00d"],
                ["feea6cae46d55b530ac2839f143bd7ec5cf8b266a41d6af52d5e688d9094696d", "e57c6b6c97dce1bab06e4e12bf3ecd5c981c8957cc41442d3155debf18090088"],
                ["da67a91d91049cdcb367be4be6ffca3cfeed657d808583de33fa978bc1ec6cb1", "9bacaa35481642bc41f463f7ec9780e5dec7adc508f740a17e9ea8e27a68be1d"],
                ["53904faa0b334cdda6e000935ef22151ec08d0f7bb11069f57545ccc1a37b7c0", "5bc087d0bc80106d88c9eccac20d3c1c13999981e14434699dcb096b022771c8"],
                ["8e7bcd0bd35983a7719cca7764ca906779b53a043a9b8bcaeff959f43ad86047", "10b7770b2a3da4b3940310420ca9514579e88e2e47fd68b3ea10047e8460372a"],
                ["385eed34c1cdff21e6d0818689b81bde71a7f4f18397e6690a841e1599c43862", "283bebc3e8ea23f56701de19e9ebf4576b304eec2086dc8cc0458fe5542e5453"],
                ["6f9d9b803ecf191637c73a4413dfa180fddf84a5947fbc9c606ed86c3fac3a7", "7c80c68e603059ba69b8e2a30e45c4d47ea4dd2f5c281002d86890603a842160"],
                ["3322d401243c4e2582a2147c104d6ecbf774d163db0f5e5313b7e0e742d0e6bd", "56e70797e9664ef5bfb019bc4ddaf9b72805f63ea2873af624f3a2e96c28b2a0"],
                ["85672c7d2de0b7da2bd1770d89665868741b3f9af7643397721d74d28134ab83", "7c481b9b5b43b2eb6374049bfa62c2e5e77f17fcc5298f44c8e3094f790313a6"],
                ["948bf809b1988a46b06c9f1919413b10f9226c60f668832ffd959af60c82a0a", "53a562856dcb6646dc6b74c5d1c3418c6d4dff08c97cd2bed4cb7f88d8c8e589"],
                ["6260ce7f461801c34f067ce0f02873a8f1b0e44dfc69752accecd819f38fd8e8", "bc2da82b6fa5b571a7f09049776a1ef7ecd292238051c198c1a84e95b2b4ae17"],
                ["e5037de0afc1d8d43d8348414bbf4103043ec8f575bfdc432953cc8d2037fa2d", "4571534baa94d3b5f9f98d09fb990bddbd5f5b03ec481f10e0e5dc841d755bda"],
                ["e06372b0f4a207adf5ea905e8f1771b4e7e8dbd1c6a6c5b725866a0ae4fce725", "7a908974bce18cfe12a27bb2ad5a488cd7484a7787104870b27034f94eee31dd"],
                ["213c7a715cd5d45358d0bbf9dc0ce02204b10bdde2a3f58540ad6908d0559754", "4b6dad0b5ae462507013ad06245ba190bb4850f5f36a7eeddff2c27534b458f2"],
                ["4e7c272a7af4b34e8dbb9352a5419a87e2838c70adc62cddf0cc3a3b08fbd53c", "17749c766c9d0b18e16fd09f6def681b530b9614bff7dd33e0b3941817dcaae6"],
                ["fea74e3dbe778b1b10f238ad61686aa5c76e3db2be43057632427e2840fb27b6", "6e0568db9b0b13297cf674deccb6af93126b596b973f7b77701d3db7f23cb96f"],
                ["76e64113f677cf0e10a2570d599968d31544e179b760432952c02a4417bdde39", "c90ddf8dee4e95cf577066d70681f0d35e2a33d2b56d2032b4b1752d1901ac01"],
                ["c738c56b03b2abe1e8281baa743f8f9a8f7cc643df26cbee3ab150242bcbb891", "893fb578951ad2537f718f2eacbfbbbb82314eef7880cfe917e735d9699a84c3"],
                ["d895626548b65b81e264c7637c972877d1d72e5f3a925014372e9f6588f6c14b", "febfaa38f2bc7eae728ec60818c340eb03428d632bb067e179363ed75d7d991f"],
                ["b8da94032a957518eb0f6433571e8761ceffc73693e84edd49150a564f676e03", "2804dfa44805a1e4d7c99cc9762808b092cc584d95ff3b511488e4e74efdf6e7"],
                ["e80fea14441fb33a7d8adab9475d7fab2019effb5156a792f1a11778e3c0df5d", "eed1de7f638e00771e89768ca3ca94472d155e80af322ea9fcb4291b6ac9ec78"],
                ["a301697bdfcd704313ba48e51d567543f2a182031efd6915ddc07bbcc4e16070", "7370f91cfb67e4f5081809fa25d40f9b1735dbf7c0a11a130c0d1a041e177ea1"],
                ["90ad85b389d6b936463f9d0512678de208cc330b11307fffab7ac63e3fb04ed4", "e507a3620a38261affdcbd9427222b839aefabe1582894d991d4d48cb6ef150"],
                ["8f68b9d2f63b5f339239c1ad981f162ee88c5678723ea3351b7b444c9ec4c0da", "662a9f2dba063986de1d90c2b6be215dbbea2cfe95510bfdf23cbf79501fff82"],
                ["e4f3fb0176af85d65ff99ff9198c36091f48e86503681e3e6686fd5053231e11", "1e63633ad0ef4f1c1661a6d0ea02b7286cc7e74ec951d1c9822c38576feb73bc"],
                ["8c00fa9b18ebf331eb961537a45a4266c7034f2f0d4e1d0716fb6eae20eae29e", "efa47267fea521a1a9dc343a3736c974c2fadafa81e36c54e7d2a4c66702414b"],
                ["e7a26ce69dd4829f3e10cec0a9e98ed3143d084f308b92c0997fddfc60cb3e41", "2a758e300fa7984b471b006a1aafbb18d0a6b2c0420e83e20e8a9421cf2cfd51"],
                ["b6459e0ee3662ec8d23540c223bcbdc571cbcb967d79424f3cf29eb3de6b80ef", "67c876d06f3e06de1dadf16e5661db3c4b3ae6d48e35b2ff30bf0b61a71ba45"],
                ["d68a80c8280bb840793234aa118f06231d6f1fc67e73c5a5deda0f5b496943e8", "db8ba9fff4b586d00c4b1f9177b0e28b5b0e7b8f7845295a294c84266b133120"],
                ["324aed7df65c804252dc0270907a30b09612aeb973449cea4095980fc28d3d5d", "648a365774b61f2ff130c0c35aec1f4f19213b0c7e332843967224af96ab7c84"],
                ["4df9c14919cde61f6d51dfdbe5fee5dceec4143ba8d1ca888e8bd373fd054c96", "35ec51092d8728050974c23a1d85d4b5d506cdc288490192ebac06cad10d5d"],
                ["9c3919a84a474870faed8a9c1cc66021523489054d7f0308cbfc99c8ac1f98cd", "ddb84f0f4a4ddd57584f044bf260e641905326f76c64c8e6be7e5e03d4fc599d"],
                ["6057170b1dd12fdf8de05f281d8e06bb91e1493a8b91d4cc5a21382120a959e5", "9a1af0b26a6a4807add9a2daf71df262465152bc3ee24c65e899be932385a2a8"],
                ["a576df8e23a08411421439a4518da31880cef0fba7d4df12b1a6973eecb94266", "40a6bf20e76640b2c92b97afe58cd82c432e10a7f514d9f3ee8be11ae1b28ec8"],
                ["7778a78c28dec3e30a05fe9629de8c38bb30d1f5cf9a3a208f763889be58ad71", "34626d9ab5a5b22ff7098e12f2ff580087b38411ff24ac563b513fc1fd9f43ac"],
                ["928955ee637a84463729fd30e7afd2ed5f96274e5ad7e5cb09eda9c06d903ac", "c25621003d3f42a827b78a13093a95eeac3d26efa8a8d83fc5180e935bcd091f"],
                ["85d0fef3ec6db109399064f3a0e3b2855645b4a907ad354527aae75163d82751", "1f03648413a38c0be29d496e582cf5663e8751e96877331582c237a24eb1f962"],
                ["ff2b0dce97eece97c1c9b6041798b85dfdfb6d8882da20308f5404824526087e", "493d13fef524ba188af4c4dc54d07936c7b7ed6fb90e2ceb2c951e01f0c29907"],
                ["827fbbe4b1e880ea9ed2b2e6301b212b57f1ee148cd6dd28780e5e2cf856e241", "c60f9c923c727b0b71bef2c67d1d12687ff7a63186903166d605b68baec293ec"],
                ["eaa649f21f51bdbae7be4ae34ce6e5217a58fdce7f47f9aa7f3b58fa2120e2b3", "be3279ed5bbbb03ac69a80f89879aa5a01a6b965f13f7e59d47a5305ba5ad93d"],
                ["e4a42d43c5cf169d9391df6decf42ee541b6d8f0c9a137401e23632dda34d24f", "4d9f92e716d1c73526fc99ccfb8ad34ce886eedfa8d8e4f13a7f7131deba9414"],
                ["1ec80fef360cbdd954160fadab352b6b92b53576a88fea4947173b9d4300bf19", "aeefe93756b5340d2f3a4958a7abbf5e0146e77f6295a07b671cdc1cc107cefd"],
                ["146a778c04670c2f91b00af4680dfa8bce3490717d58ba889ddb5928366642be", "b318e0ec3354028add669827f9d4b2870aaa971d2f7e5ed1d0b297483d83efd0"],
                ["fa50c0f61d22e5f07e3acebb1aa07b128d0012209a28b9776d76a8793180eef9", "6b84c6922397eba9b72cd2872281a68a5e683293a57a213b38cd8d7d3f4f2811"],
                ["da1d61d0ca721a11b1a5bf6b7d88e8421a288ab5d5bba5220e53d32b5f067ec2", "8157f55a7c99306c79c0766161c91e2966a73899d279b48a655fba0f1ad836f1"],
                ["a8e282ff0c9706907215ff98e8fd416615311de0446f1e062a73b0610d064e13", "7f97355b8db81c09abfb7f3c5b2515888b679a3e50dd6bd6cef7c73111f4cc0c"],
                ["174a53b9c9a285872d39e56e6913cab15d59b1fa512508c022f382de8319497c", "ccc9dc37abfc9c1657b4155f2c47f9e6646b3a1d8cb9854383da13ac079afa73"],
                ["959396981943785c3d3e57edf5018cdbe039e730e4918b3d884fdff09475b7ba", "2e7e552888c331dd8ba0386a4b9cd6849c653f64c8709385e9b8abf87524f2fd"],
                ["d2a63a50ae401e56d645a1153b109a8fcca0a43d561fba2dbb51340c9d82b151", "e82d86fb6443fcb7565aee58b2948220a70f750af484ca52d4142174dcf89405"],
                ["64587e2335471eb890ee7896d7cfdc866bacbdbd3839317b3436f9b45617e073", "d99fcdd5bf6902e2ae96dd6447c299a185b90a39133aeab358299e5e9faf6589"],
                ["8481bde0e4e4d885b3a546d3e549de042f0aa6cea250e7fd358d6c86dd45e458", "38ee7b8cba5404dd84a25bf39cecb2ca900a79c42b262e556d64b1b59779057e"],
                ["13464a57a78102aa62b6979ae817f4637ffcfed3c4b1ce30bcd6303f6caf666b", "69be159004614580ef7e433453ccb0ca48f300a81d0942e13f495a907f6ecc27"],
                ["bc4a9df5b713fe2e9aef430bcc1dc97a0cd9ccede2f28588cada3a0d2d83f366", "d3a81ca6e785c06383937adf4b798caa6e8a9fbfa547b16d758d666581f33c1"],
                ["8c28a97bf8298bc0d23d8c749452a32e694b65e30a9472a3954ab30fe5324caa", "40a30463a3305193378fedf31f7cc0eb7ae784f0451cb9459e71dc73cbef9482"],
                ["8ea9666139527a8c1dd94ce4f071fd23c8b350c5a4bb33748c4ba111faccae0", "620efabbc8ee2782e24e7c0cfb95c5d735b783be9cf0f8e955af34a30e62b945"],
                ["dd3625faef5ba06074669716bbd3788d89bdde815959968092f76cc4eb9a9787", "7a188fa3520e30d461da2501045731ca941461982883395937f68d00c644a573"],
                ["f710d79d9eb962297e4f6232b40e8f7feb2bc63814614d692c12de752408221e", "ea98e67232d3b3295d3b535532115ccac8612c721851617526ae47a9c77bfc82"]
            ]
        },
        naf: {
            wnd: 7,
            points: [
                ["f9308a019258c31049344f85f89d5229b531c845836f99b08601f113bce036f9", "388f7b0f632de8140fe337e62a37f3566500a99934c2231b6cb9fd7584b8e672"],
                ["2f8bde4d1a07209355b4a7250a5c5128e88b84bddc619ab7cba8d569b240efe4", "d8ac222636e5e3d6d4dba9dda6c9c426f788271bab0d6840dca87d3aa6ac62d6"],
                ["5cbdf0646e5db4eaa398f365f2ea7a0e3d419b7e0330e39ce92bddedcac4f9bc", "6aebca40ba255960a3178d6d861a54dba813d0b813fde7b5a5082628087264da"],
                ["acd484e2f0c7f65309ad178a9f559abde09796974c57e714c35f110dfc27ccbe", "cc338921b0a7d9fd64380971763b61e9add888a4375f8e0f05cc262ac64f9c37"],
                ["774ae7f858a9411e5ef4246b70c65aac5649980be5c17891bbec17895da008cb", "d984a032eb6b5e190243dd56d7b7b365372db1e2dff9d6a8301d74c9c953c61b"],
                ["f28773c2d975288bc7d1d205c3748651b075fbc6610e58cddeeddf8f19405aa8", "ab0902e8d880a89758212eb65cdaf473a1a06da521fa91f29b5cb52db03ed81"],
                ["d7924d4f7d43ea965a465ae3095ff41131e5946f3c85f79e44adbcf8e27e080e", "581e2872a86c72a683842ec228cc6defea40af2bd896d3a5c504dc9ff6a26b58"],
                ["defdea4cdb677750a420fee807eacf21eb9898ae79b9768766e4faa04a2d4a34", "4211ab0694635168e997b0ead2a93daeced1f4a04a95c0f6cfb199f69e56eb77"],
                ["2b4ea0a797a443d293ef5cff444f4979f06acfebd7e86d277475656138385b6c", "85e89bc037945d93b343083b5a1c86131a01f60c50269763b570c854e5c09b7a"],
                ["352bbf4a4cdd12564f93fa332ce333301d9ad40271f8107181340aef25be59d5", "321eb4075348f534d59c18259dda3e1f4a1b3b2e71b1039c67bd3d8bcf81998c"],
                ["2fa2104d6b38d11b0230010559879124e42ab8dfeff5ff29dc9cdadd4ecacc3f", "2de1068295dd865b64569335bd5dd80181d70ecfc882648423ba76b532b7d67"],
                ["9248279b09b4d68dab21a9b066edda83263c3d84e09572e269ca0cd7f5453714", "73016f7bf234aade5d1aa71bdea2b1ff3fc0de2a887912ffe54a32ce97cb3402"],
                ["daed4f2be3a8bf278e70132fb0beb7522f570e144bf615c07e996d443dee8729", "a69dce4a7d6c98e8d4a1aca87ef8d7003f83c230f3afa726ab40e52290be1c55"],
                ["c44d12c7065d812e8acf28d7cbb19f9011ecd9e9fdf281b0e6a3b5e87d22e7db", "2119a460ce326cdc76c45926c982fdac0e106e861edf61c5a039063f0e0e6482"],
                ["6a245bf6dc698504c89a20cfded60853152b695336c28063b61c65cbd269e6b4", "e022cf42c2bd4a708b3f5126f16a24ad8b33ba48d0423b6efd5e6348100d8a82"],
                ["1697ffa6fd9de627c077e3d2fe541084ce13300b0bec1146f95ae57f0d0bd6a5", "b9c398f186806f5d27561506e4557433a2cf15009e498ae7adee9d63d01b2396"],
                ["605bdb019981718b986d0f07e834cb0d9deb8360ffb7f61df982345ef27a7479", "2972d2de4f8d20681a78d93ec96fe23c26bfae84fb14db43b01e1e9056b8c49"],
                ["62d14dab4150bf497402fdc45a215e10dcb01c354959b10cfe31c7e9d87ff33d", "80fc06bd8cc5b01098088a1950eed0db01aa132967ab472235f5642483b25eaf"],
                ["80c60ad0040f27dade5b4b06c408e56b2c50e9f56b9b8b425e555c2f86308b6f", "1c38303f1cc5c30f26e66bad7fe72f70a65eed4cbe7024eb1aa01f56430bd57a"],
                ["7a9375ad6167ad54aa74c6348cc54d344cc5dc9487d847049d5eabb0fa03c8fb", "d0e3fa9eca8726909559e0d79269046bdc59ea10c70ce2b02d499ec224dc7f7"],
                ["d528ecd9b696b54c907a9ed045447a79bb408ec39b68df504bb51f459bc3ffc9", "eecf41253136e5f99966f21881fd656ebc4345405c520dbc063465b521409933"],
                ["49370a4b5f43412ea25f514e8ecdad05266115e4a7ecb1387231808f8b45963", "758f3f41afd6ed428b3081b0512fd62a54c3f3afbb5b6764b653052a12949c9a"],
                ["77f230936ee88cbbd73df930d64702ef881d811e0e1498e2f1c13eb1fc345d74", "958ef42a7886b6400a08266e9ba1b37896c95330d97077cbbe8eb3c7671c60d6"],
                ["f2dac991cc4ce4b9ea44887e5c7c0bce58c80074ab9d4dbaeb28531b7739f530", "e0dedc9b3b2f8dad4da1f32dec2531df9eb5fbeb0598e4fd1a117dba703a3c37"],
                ["463b3d9f662621fb1b4be8fbbe2520125a216cdfc9dae3debcba4850c690d45b", "5ed430d78c296c3543114306dd8622d7c622e27c970a1de31cb377b01af7307e"],
                ["f16f804244e46e2a09232d4aff3b59976b98fac14328a2d1a32496b49998f247", "cedabd9b82203f7e13d206fcdf4e33d92a6c53c26e5cce26d6579962c4e31df6"],
                ["caf754272dc84563b0352b7a14311af55d245315ace27c65369e15f7151d41d1", "cb474660ef35f5f2a41b643fa5e460575f4fa9b7962232a5c32f908318a04476"],
                ["2600ca4b282cb986f85d0f1709979d8b44a09c07cb86d7c124497bc86f082120", "4119b88753c15bd6a693b03fcddbb45d5ac6be74ab5f0ef44b0be9475a7e4b40"],
                ["7635ca72d7e8432c338ec53cd12220bc01c48685e24f7dc8c602a7746998e435", "91b649609489d613d1d5e590f78e6d74ecfc061d57048bad9e76f302c5b9c61"],
                ["754e3239f325570cdbbf4a87deee8a66b7f2b33479d468fbc1a50743bf56cc18", "673fb86e5bda30fb3cd0ed304ea49a023ee33d0197a695d0c5d98093c536683"],
                ["e3e6bd1071a1e96aff57859c82d570f0330800661d1c952f9fe2694691d9b9e8", "59c9e0bba394e76f40c0aa58379a3cb6a5a2283993e90c4167002af4920e37f5"],
                ["186b483d056a033826ae73d88f732985c4ccb1f32ba35f4b4cc47fdcf04aa6eb", "3b952d32c67cf77e2e17446e204180ab21fb8090895138b4a4a797f86e80888b"],
                ["df9d70a6b9876ce544c98561f4be4f725442e6d2b737d9c91a8321724ce0963f", "55eb2dafd84d6ccd5f862b785dc39d4ab157222720ef9da217b8c45cf2ba2417"],
                ["5edd5cc23c51e87a497ca815d5dce0f8ab52554f849ed8995de64c5f34ce7143", "efae9c8dbc14130661e8cec030c89ad0c13c66c0d17a2905cdc706ab7399a868"],
                ["290798c2b6476830da12fe02287e9e777aa3fba1c355b17a722d362f84614fba", "e38da76dcd440621988d00bcf79af25d5b29c094db2a23146d003afd41943e7a"],
                ["af3c423a95d9f5b3054754efa150ac39cd29552fe360257362dfdecef4053b45", "f98a3fd831eb2b749a93b0e6f35cfb40c8cd5aa667a15581bc2feded498fd9c6"],
                ["766dbb24d134e745cccaa28c99bf274906bb66b26dcf98df8d2fed50d884249a", "744b1152eacbe5e38dcc887980da38b897584a65fa06cedd2c924f97cbac5996"],
                ["59dbf46f8c94759ba21277c33784f41645f7b44f6c596a58ce92e666191abe3e", "c534ad44175fbc300f4ea6ce648309a042ce739a7919798cd85e216c4a307f6e"],
                ["f13ada95103c4537305e691e74e9a4a8dd647e711a95e73cb62dc6018cfd87b8", "e13817b44ee14de663bf4bc808341f326949e21a6a75c2570778419bdaf5733d"],
                ["7754b4fa0e8aced06d4167a2c59cca4cda1869c06ebadfb6488550015a88522c", "30e93e864e669d82224b967c3020b8fa8d1e4e350b6cbcc537a48b57841163a2"],
                ["948dcadf5990e048aa3874d46abef9d701858f95de8041d2a6828c99e2262519", "e491a42537f6e597d5d28a3224b1bc25df9154efbd2ef1d2cbba2cae5347d57e"],
                ["7962414450c76c1689c7b48f8202ec37fb224cf5ac0bfa1570328a8a3d7c77ab", "100b610ec4ffb4760d5c1fc133ef6f6b12507a051f04ac5760afa5b29db83437"],
                ["3514087834964b54b15b160644d915485a16977225b8847bb0dd085137ec47ca", "ef0afbb2056205448e1652c48e8127fc6039e77c15c2378b7e7d15a0de293311"],
                ["d3cc30ad6b483e4bc79ce2c9dd8bc54993e947eb8df787b442943d3f7b527eaf", "8b378a22d827278d89c5e9be8f9508ae3c2ad46290358630afb34db04eede0a4"],
                ["1624d84780732860ce1c78fcbfefe08b2b29823db913f6493975ba0ff4847610", "68651cf9b6da903e0914448c6cd9d4ca896878f5282be4c8cc06e2a404078575"],
                ["733ce80da955a8a26902c95633e62a985192474b5af207da6df7b4fd5fc61cd4", "f5435a2bd2badf7d485a4d8b8db9fcce3e1ef8e0201e4578c54673bc1dc5ea1d"],
                ["15d9441254945064cf1a1c33bbd3b49f8966c5092171e699ef258dfab81c045c", "d56eb30b69463e7234f5137b73b84177434800bacebfc685fc37bbe9efe4070d"],
                ["a1d0fcf2ec9de675b612136e5ce70d271c21417c9d2b8aaaac138599d0717940", "edd77f50bcb5a3cab2e90737309667f2641462a54070f3d519212d39c197a629"],
                ["e22fbe15c0af8ccc5780c0735f84dbe9a790badee8245c06c7ca37331cb36980", "a855babad5cd60c88b430a69f53a1a7a38289154964799be43d06d77d31da06"],
                ["311091dd9860e8e20ee13473c1155f5f69635e394704eaa74009452246cfa9b3", "66db656f87d1f04fffd1f04788c06830871ec5a64feee685bd80f0b1286d8374"],
                ["34c1fd04d301be89b31c0442d3e6ac24883928b45a9340781867d4232ec2dbdf", "9414685e97b1b5954bd46f730174136d57f1ceeb487443dc5321857ba73abee"],
                ["f219ea5d6b54701c1c14de5b557eb42a8d13f3abbcd08affcc2a5e6b049b8d63", "4cb95957e83d40b0f73af4544cccf6b1f4b08d3c07b27fb8d8c2962a400766d1"],
                ["d7b8740f74a8fbaab1f683db8f45de26543a5490bca627087236912469a0b448", "fa77968128d9c92ee1010f337ad4717eff15db5ed3c049b3411e0315eaa4593b"],
                ["32d31c222f8f6f0ef86f7c98d3a3335ead5bcd32abdd94289fe4d3091aa824bf", "5f3032f5892156e39ccd3d7915b9e1da2e6dac9e6f26e961118d14b8462e1661"],
                ["7461f371914ab32671045a155d9831ea8793d77cd59592c4340f86cbc18347b5", "8ec0ba238b96bec0cbdddcae0aa442542eee1ff50c986ea6b39847b3cc092ff6"],
                ["ee079adb1df1860074356a25aa38206a6d716b2c3e67453d287698bad7b2b2d6", "8dc2412aafe3be5c4c5f37e0ecc5f9f6a446989af04c4e25ebaac479ec1c8c1e"],
                ["16ec93e447ec83f0467b18302ee620f7e65de331874c9dc72bfd8616ba9da6b5", "5e4631150e62fb40d0e8c2a7ca5804a39d58186a50e497139626778e25b0674d"],
                ["eaa5f980c245f6f038978290afa70b6bd8855897f98b6aa485b96065d537bd99", "f65f5d3e292c2e0819a528391c994624d784869d7e6ea67fb18041024edc07dc"],
                ["78c9407544ac132692ee1910a02439958ae04877151342ea96c4b6b35a49f51", "f3e0319169eb9b85d5404795539a5e68fa1fbd583c064d2462b675f194a3ddb4"],
                ["494f4be219a1a77016dcd838431aea0001cdc8ae7a6fc688726578d9702857a5", "42242a969283a5f339ba7f075e36ba2af925ce30d767ed6e55f4b031880d562c"],
                ["a598a8030da6d86c6bc7f2f5144ea549d28211ea58faa70ebf4c1e665c1fe9b5", "204b5d6f84822c307e4b4a7140737aec23fc63b65b35f86a10026dbd2d864e6b"],
                ["c41916365abb2b5d09192f5f2dbeafec208f020f12570a184dbadc3e58595997", "4f14351d0087efa49d245b328984989d5caf9450f34bfc0ed16e96b58fa9913"],
                ["841d6063a586fa475a724604da03bc5b92a2e0d2e0a36acfe4c73a5514742881", "73867f59c0659e81904f9a1c7543698e62562d6744c169ce7a36de01a8d6154"],
                ["5e95bb399a6971d376026947f89bde2f282b33810928be4ded112ac4d70e20d5", "39f23f366809085beebfc71181313775a99c9aed7d8ba38b161384c746012865"],
                ["36e4641a53948fd476c39f8a99fd974e5ec07564b5315d8bf99471bca0ef2f66", "d2424b1b1abe4eb8164227b085c9aa9456ea13493fd563e06fd51cf5694c78fc"],
                ["336581ea7bfbbb290c191a2f507a41cf5643842170e914faeab27c2c579f726", "ead12168595fe1be99252129b6e56b3391f7ab1410cd1e0ef3dcdcabd2fda224"],
                ["8ab89816dadfd6b6a1f2634fcf00ec8403781025ed6890c4849742706bd43ede", "6fdcef09f2f6d0a044e654aef624136f503d459c3e89845858a47a9129cdd24e"],
                ["1e33f1a746c9c5778133344d9299fcaa20b0938e8acff2544bb40284b8c5fb94", "60660257dd11b3aa9c8ed618d24edff2306d320f1d03010e33a7d2057f3b3b6"],
                ["85b7c1dcb3cec1b7ee7f30ded79dd20a0ed1f4cc18cbcfcfa410361fd8f08f31", "3d98a9cdd026dd43f39048f25a8847f4fcafad1895d7a633c6fed3c35e999511"],
                ["29df9fbd8d9e46509275f4b125d6d45d7fbe9a3b878a7af872a2800661ac5f51", "b4c4fe99c775a606e2d8862179139ffda61dc861c019e55cd2876eb2a27d84b"],
                ["a0b1cae06b0a847a3fea6e671aaf8adfdfe58ca2f768105c8082b2e449fce252", "ae434102edde0958ec4b19d917a6a28e6b72da1834aff0e650f049503a296cf2"],
                ["4e8ceafb9b3e9a136dc7ff67e840295b499dfb3b2133e4ba113f2e4c0e121e5", "cf2174118c8b6d7a4b48f6d534ce5c79422c086a63460502b827ce62a326683c"],
                ["d24a44e047e19b6f5afb81c7ca2f69080a5076689a010919f42725c2b789a33b", "6fb8d5591b466f8fc63db50f1c0f1c69013f996887b8244d2cdec417afea8fa3"],
                ["ea01606a7a6c9cdd249fdfcfacb99584001edd28abbab77b5104e98e8e3b35d4", "322af4908c7312b0cfbfe369f7a7b3cdb7d4494bc2823700cfd652188a3ea98d"],
                ["af8addbf2b661c8a6c6328655eb96651252007d8c5ea31be4ad196de8ce2131f", "6749e67c029b85f52a034eafd096836b2520818680e26ac8f3dfbcdb71749700"],
                ["e3ae1974566ca06cc516d47e0fb165a674a3dabcfca15e722f0e3450f45889", "2aeabe7e4531510116217f07bf4d07300de97e4874f81f533420a72eeb0bd6a4"],
                ["591ee355313d99721cf6993ffed1e3e301993ff3ed258802075ea8ced397e246", "b0ea558a113c30bea60fc4775460c7901ff0b053d25ca2bdeee98f1a4be5d196"],
                ["11396d55fda54c49f19aa97318d8da61fa8584e47b084945077cf03255b52984", "998c74a8cd45ac01289d5833a7beb4744ff536b01b257be4c5767bea93ea57a4"],
                ["3c5d2a1ba39c5a1790000738c9e0c40b8dcdfd5468754b6405540157e017aa7a", "b2284279995a34e2f9d4de7396fc18b80f9b8b9fdd270f6661f79ca4c81bd257"],
                ["cc8704b8a60a0defa3a99a7299f2e9c3fbc395afb04ac078425ef8a1793cc030", "bdd46039feed17881d1e0862db347f8cf395b74fc4bcdc4e940b74e3ac1f1b13"],
                ["c533e4f7ea8555aacd9777ac5cad29b97dd4defccc53ee7ea204119b2889b197", "6f0a256bc5efdf429a2fb6242f1a43a2d9b925bb4a4b3a26bb8e0f45eb596096"],
                ["c14f8f2ccb27d6f109f6d08d03cc96a69ba8c34eec07bbcf566d48e33da6593", "c359d6923bb398f7fd4473e16fe1c28475b740dd098075e6c0e8649113dc3a38"],
                ["a6cbc3046bc6a450bac24789fa17115a4c9739ed75f8f21ce441f72e0b90e6ef", "21ae7f4680e889bb130619e2c0f95a360ceb573c70603139862afd617fa9b9f"],
                ["347d6d9a02c48927ebfb86c1359b1caf130a3c0267d11ce6344b39f99d43cc38", "60ea7f61a353524d1c987f6ecec92f086d565ab687870cb12689ff1e31c74448"],
                ["da6545d2181db8d983f7dcb375ef5866d47c67b1bf31c8cf855ef7437b72656a", "49b96715ab6878a79e78f07ce5680c5d6673051b4935bd897fea824b77dc208a"],
                ["c40747cc9d012cb1a13b8148309c6de7ec25d6945d657146b9d5994b8feb1111", "5ca560753be2a12fc6de6caf2cb489565db936156b9514e1bb5e83037e0fa2d4"],
                ["4e42c8ec82c99798ccf3a610be870e78338c7f713348bd34c8203ef4037f3502", "7571d74ee5e0fb92a7a8b33a07783341a5492144cc54bcc40a94473693606437"],
                ["3775ab7089bc6af823aba2e1af70b236d251cadb0c86743287522a1b3b0dedea", "be52d107bcfa09d8bcb9736a828cfa7fac8db17bf7a76a2c42ad961409018cf7"],
                ["cee31cbf7e34ec379d94fb814d3d775ad954595d1314ba8846959e3e82f74e26", "8fd64a14c06b589c26b947ae2bcf6bfa0149ef0be14ed4d80f448a01c43b1c6d"],
                ["b4f9eaea09b6917619f6ea6a4eb5464efddb58fd45b1ebefcdc1a01d08b47986", "39e5c9925b5a54b07433a4f18c61726f8bb131c012ca542eb24a8ac07200682a"],
                ["d4263dfc3d2df923a0179a48966d30ce84e2515afc3dccc1b77907792ebcc60e", "62dfaf07a0f78feb30e30d6295853ce189e127760ad6cf7fae164e122a208d54"],
                ["48457524820fa65a4f8d35eb6930857c0032acc0a4a2de422233eeda897612c4", "25a748ab367979d98733c38a1fa1c2e7dc6cc07db2d60a9ae7a76aaa49bd0f77"],
                ["dfeeef1881101f2cb11644f3a2afdfc2045e19919152923f367a1767c11cceda", "ecfb7056cf1de042f9420bab396793c0c390bde74b4bbdff16a83ae09a9a7517"],
                ["6d7ef6b17543f8373c573f44e1f389835d89bcbc6062ced36c82df83b8fae859", "cd450ec335438986dfefa10c57fea9bcc521a0959b2d80bbf74b190dca712d10"],
                ["e75605d59102a5a2684500d3b991f2e3f3c88b93225547035af25af66e04541f", "f5c54754a8f71ee540b9b48728473e314f729ac5308b06938360990e2bfad125"],
                ["eb98660f4c4dfaa06a2be453d5020bc99a0c2e60abe388457dd43fefb1ed620c", "6cb9a8876d9cb8520609af3add26cd20a0a7cd8a9411131ce85f44100099223e"],
                ["13e87b027d8514d35939f2e6892b19922154596941888336dc3563e3b8dba942", "fef5a3c68059a6dec5d624114bf1e91aac2b9da568d6abeb2570d55646b8adf1"],
                ["ee163026e9fd6fe017c38f06a5be6fc125424b371ce2708e7bf4491691e5764a", "1acb250f255dd61c43d94ccc670d0f58f49ae3fa15b96623e5430da0ad6c62b2"],
                ["b268f5ef9ad51e4d78de3a750c2dc89b1e626d43505867999932e5db33af3d80", "5f310d4b3c99b9ebb19f77d41c1dee018cf0d34fd4191614003e945a1216e423"],
                ["ff07f3118a9df035e9fad85eb6c7bfe42b02f01ca99ceea3bf7ffdba93c4750d", "438136d603e858a3a5c440c38eccbaddc1d2942114e2eddd4740d098ced1f0d8"],
                ["8d8b9855c7c052a34146fd20ffb658bea4b9f69e0d825ebec16e8c3ce2b526a1", "cdb559eedc2d79f926baf44fb84ea4d44bcf50fee51d7ceb30e2e7f463036758"],
                ["52db0b5384dfbf05bfa9d472d7ae26dfe4b851ceca91b1eba54263180da32b63", "c3b997d050ee5d423ebaf66a6db9f57b3180c902875679de924b69d84a7b375"],
                ["e62f9490d3d51da6395efd24e80919cc7d0f29c3f3fa48c6fff543becbd43352", "6d89ad7ba4876b0b22c2ca280c682862f342c8591f1daf5170e07bfd9ccafa7d"],
                ["7f30ea2476b399b4957509c88f77d0191afa2ff5cb7b14fd6d8e7d65aaab1193", "ca5ef7d4b231c94c3b15389a5f6311e9daff7bb67b103e9880ef4bff637acaec"],
                ["5098ff1e1d9f14fb46a210fada6c903fef0fb7b4a1dd1d9ac60a0361800b7a00", "9731141d81fc8f8084d37c6e7542006b3ee1b40d60dfe5362a5b132fd17ddc0"],
                ["32b78c7de9ee512a72895be6b9cbefa6e2f3c4ccce445c96b9f2c81e2778ad58", "ee1849f513df71e32efc3896ee28260c73bb80547ae2275ba497237794c8753c"],
                ["e2cb74fddc8e9fbcd076eef2a7c72b0ce37d50f08269dfc074b581550547a4f7", "d3aa2ed71c9dd2247a62df062736eb0baddea9e36122d2be8641abcb005cc4a4"],
                ["8438447566d4d7bedadc299496ab357426009a35f235cb141be0d99cd10ae3a8", "c4e1020916980a4da5d01ac5e6ad330734ef0d7906631c4f2390426b2edd791f"],
                ["4162d488b89402039b584c6fc6c308870587d9c46f660b878ab65c82c711d67e", "67163e903236289f776f22c25fb8a3afc1732f2b84b4e95dbda47ae5a0852649"],
                ["3fad3fa84caf0f34f0f89bfd2dcf54fc175d767aec3e50684f3ba4a4bf5f683d", "cd1bc7cb6cc407bb2f0ca647c718a730cf71872e7d0d2a53fa20efcdfe61826"],
                ["674f2600a3007a00568c1a7ce05d0816c1fb84bf1370798f1c69532faeb1a86b", "299d21f9413f33b3edf43b257004580b70db57da0b182259e09eecc69e0d38a5"],
                ["d32f4da54ade74abb81b815ad1fb3b263d82d6c692714bcff87d29bd5ee9f08f", "f9429e738b8e53b968e99016c059707782e14f4535359d582fc416910b3eea87"],
                ["30e4e670435385556e593657135845d36fbb6931f72b08cb1ed954f1e3ce3ff6", "462f9bce619898638499350113bbc9b10a878d35da70740dc695a559eb88db7b"],
                ["be2062003c51cc3004682904330e4dee7f3dcd10b01e580bf1971b04d4cad297", "62188bc49d61e5428573d48a74e1c655b1c61090905682a0d5558ed72dccb9bc"],
                ["93144423ace3451ed29e0fb9ac2af211cb6e84a601df5993c419859fff5df04a", "7c10dfb164c3425f5c71a3f9d7992038f1065224f72bb9d1d902a6d13037b47c"],
                ["b015f8044f5fcbdcf21ca26d6c34fb8197829205c7b7d2a7cb66418c157b112c", "ab8c1e086d04e813744a655b2df8d5f83b3cdc6faa3088c1d3aea1454e3a1d5f"],
                ["d5e9e1da649d97d89e4868117a465a3a4f8a18de57a140d36b3f2af341a21b52", "4cb04437f391ed73111a13cc1d4dd0db1693465c2240480d8955e8592f27447a"],
                ["d3ae41047dd7ca065dbf8ed77b992439983005cd72e16d6f996a5316d36966bb", "bd1aeb21ad22ebb22a10f0303417c6d964f8cdd7df0aca614b10dc14d125ac46"],
                ["463e2763d885f958fc66cdd22800f0a487197d0a82e377b49f80af87c897b065", "bfefacdb0e5d0fd7df3a311a94de062b26b80c61fbc97508b79992671ef7ca7f"],
                ["7985fdfd127c0567c6f53ec1bb63ec3158e597c40bfe747c83cddfc910641917", "603c12daf3d9862ef2b25fe1de289aed24ed291e0ec6708703a5bd567f32ed03"],
                ["74a1ad6b5f76e39db2dd249410eac7f99e74c59cb83d2d0ed5ff1543da7703e9", "cc6157ef18c9c63cd6193d83631bbea0093e0968942e8c33d5737fd790e0db08"],
                ["30682a50703375f602d416664ba19b7fc9bab42c72747463a71d0896b22f6da3", "553e04f6b018b4fa6c8f39e7f311d3176290d0e0f19ca73f17714d9977a22ff8"],
                ["9e2158f0d7c0d5f26c3791efefa79597654e7a2b2464f52b1ee6c1347769ef57", "712fcdd1b9053f09003a3481fa7762e9ffd7c8ef35a38509e2fbf2629008373"],
                ["176e26989a43c9cfeba4029c202538c28172e566e3c4fce7322857f3be327d66", "ed8cc9d04b29eb877d270b4878dc43c19aefd31f4eee09ee7b47834c1fa4b1c3"],
                ["75d46efea3771e6e68abb89a13ad747ecf1892393dfc4f1b7004788c50374da8", "9852390a99507679fd0b86fd2b39a868d7efc22151346e1a3ca4726586a6bed8"],
                ["809a20c67d64900ffb698c4c825f6d5f2310fb0451c869345b7319f645605721", "9e994980d9917e22b76b061927fa04143d096ccc54963e6a5ebfa5f3f8e286c1"],
                ["1b38903a43f7f114ed4500b4eac7083fdefece1cf29c63528d563446f972c180", "4036edc931a60ae889353f77fd53de4a2708b26b6f5da72ad3394119daf408f9"]
            ]
        }
    }), secp256k1
}
var hasRequiredCurves;

function requireCurves() {
    return hasRequiredCurves || (hasRequiredCurves = 1, function(s) {
        var r = s,
            n = requireHash(),
            i = requireCurve(),
            f = requireUtils$1(),
            e = f.assert;

        function d(a) {
            a.type === "short" ? this.curve = new i.short(a) : a.type === "edwards" ? this.curve = new i.edwards(a) : this.curve = new i.mont(a), this.g = this.curve.g, this.n = this.curve.n, this.hash = a.hash, e(this.g.validate(), "Invalid curve"), e(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }
        r.PresetCurve = d;

        function l(a, u) {
            Object.defineProperty(r, a, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var h = new d(u);
                    return Object.defineProperty(r, a, {
                        configurable: !0,
                        enumerable: !0,
                        value: h
                    }), h
                }
            })
        }
        l("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: n.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), l("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: n.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), l("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: n.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), l("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: n.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), l("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: n.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), l("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: n.sha256,
            gRed: !1,
            g: ["9"]
        }), l("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: n.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        var v;
        try {
            v = requireSecp256k1()
        } catch {
            v = void 0
        }
        l("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: n.sha256,
            beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
            lambda: "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
            basis: [{
                a: "3086d221a7d46bcde86c90e49284eb15",
                b: "-e4437ed6010e88286f547fa90abfe4c3"
            }, {
                a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
                b: "3086d221a7d46bcde86c90e49284eb15"
            }],
            gRed: !1,
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", v]
        })
    }(curves)), curves
}
var hmacDrbg, hasRequiredHmacDrbg;

function requireHmacDrbg() {
    if (hasRequiredHmacDrbg) return hmacDrbg;
    hasRequiredHmacDrbg = 1;
    var s = requireHash(),
        r = requireUtils$2(),
        n = requireMinimalisticAssert();

    function i(f) {
        if (!(this instanceof i)) return new i(f);
        this.hash = f.hash, this.predResist = !!f.predResist, this.outLen = this.hash.outSize, this.minEntropy = f.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var e = r.toArray(f.entropy, f.entropyEnc || "hex"),
            d = r.toArray(f.nonce, f.nonceEnc || "hex"),
            l = r.toArray(f.pers, f.persEnc || "hex");
        n(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, d, l)
    }
    return hmacDrbg = i, i.prototype._init = function(e, d, l) {
        var v = e.concat(d).concat(l);
        this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
        for (var a = 0; a < this.V.length; a++) this.K[a] = 0, this.V[a] = 1;
        this._update(v), this._reseed = 1, this.reseedInterval = 281474976710656
    }, i.prototype._hmac = function() {
        return new s.hmac(this.hash, this.K)
    }, i.prototype._update = function(e) {
        var d = this._hmac().update(this.V).update([0]);
        e && (d = d.update(e)), this.K = d.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
    }, i.prototype.reseed = function(e, d, l, v) {
        typeof d != "string" && (v = l, l = d, d = null), e = r.toArray(e, d), l = r.toArray(l, v), n(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(l || [])), this._reseed = 1
    }, i.prototype.generate = function(e, d, l, v) {
        if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
        typeof d != "string" && (v = l, l = d, d = null), l && (l = r.toArray(l, v || "hex"), this._update(l));
        for (var a = []; a.length < e;) this.V = this._hmac().update(this.V).digest(), a = a.concat(this.V);
        var u = a.slice(0, e);
        return this._update(l), this._reseed++, r.encode(u, d)
    }, hmacDrbg
}
var key$1, hasRequiredKey$1;

function requireKey$1() {
    if (hasRequiredKey$1) return key$1;
    hasRequiredKey$1 = 1;
    var s = requireBn$2(),
        r = requireUtils$1(),
        n = r.assert;

    function i(f, e) {
        this.ec = f, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
    }
    return key$1 = i, i.fromPublic = function(e, d, l) {
        return d instanceof i ? d : new i(e, {
            pub: d,
            pubEnc: l
        })
    }, i.fromPrivate = function(e, d, l) {
        return d instanceof i ? d : new i(e, {
            priv: d,
            privEnc: l
        })
    }, i.prototype.validate = function() {
        var e = this.getPublic();
        return e.isInfinity() ? {
            result: !1,
            reason: "Invalid public key"
        } : e.validate() ? e.mul(this.ec.curve.n).isInfinity() ? {
            result: !0,
            reason: null
        } : {
            result: !1,
            reason: "Public key * N != O"
        } : {
            result: !1,
            reason: "Public key is not a point"
        }
    }, i.prototype.getPublic = function(e, d) {
        return typeof e == "string" && (d = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), d ? this.pub.encode(d, e) : this.pub
    }, i.prototype.getPrivate = function(e) {
        return e === "hex" ? this.priv.toString(16, 2) : this.priv
    }, i.prototype._importPrivate = function(e, d) {
        this.priv = new s(e, d || 16), this.priv = this.priv.umod(this.ec.curve.n)
    }, i.prototype._importPublic = function(e, d) {
        if (e.x || e.y) {
            this.ec.curve.type === "mont" ? n(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && n(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
            return
        }
        this.pub = this.ec.curve.decodePoint(e, d)
    }, i.prototype.derive = function(e) {
        return e.validate() || n(e.validate(), "public point not validated"), e.mul(this.priv).getX()
    }, i.prototype.sign = function(e, d, l) {
        return this.ec.sign(e, this, d, l)
    }, i.prototype.verify = function(e, d, l) {
        return this.ec.verify(e, d, this, void 0, l)
    }, i.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    }, key$1
}
var signature$1, hasRequiredSignature$1;

function requireSignature$1() {
    if (hasRequiredSignature$1) return signature$1;
    hasRequiredSignature$1 = 1;
    var s = requireBn$2(),
        r = requireUtils$1(),
        n = r.assert;

    function i(v, a) {
        if (v instanceof i) return v;
        this._importDER(v, a) || (n(v.r && v.s, "Signature without r or s"), this.r = new s(v.r, 16), this.s = new s(v.s, 16), v.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = v.recoveryParam)
    }
    signature$1 = i;

    function f() {
        this.place = 0
    }

    function e(v, a) {
        var u = v[a.place++];
        if (!(u & 128)) return u;
        var h = u & 15;
        if (h === 0 || h > 4 || v[a.place] === 0) return !1;
        for (var p = 0, b = 0, g = a.place; b < h; b++, g++) p <<= 8, p |= v[g], p >>>= 0;
        return p <= 127 ? !1 : (a.place = g, p)
    }

    function d(v) {
        for (var a = 0, u = v.length - 1; !v[a] && !(v[a + 1] & 128) && a < u;) a++;
        return a === 0 ? v : v.slice(a)
    }
    i.prototype._importDER = function(a, u) {
        a = r.toArray(a, u);
        var h = new f;
        if (a[h.place++] !== 48) return !1;
        var p = e(a, h);
        if (p === !1 || p + h.place !== a.length || a[h.place++] !== 2) return !1;
        var b = e(a, h);
        if (b === !1 || (a[h.place] & 128) !== 0) return !1;
        var g = a.slice(h.place, b + h.place);
        if (h.place += b, a[h.place++] !== 2) return !1;
        var x = e(a, h);
        if (x === !1 || a.length !== x + h.place || (a[h.place] & 128) !== 0) return !1;
        var E = a.slice(h.place, x + h.place);
        if (g[0] === 0)
            if (g[1] & 128) g = g.slice(1);
            else return !1;
        if (E[0] === 0)
            if (E[1] & 128) E = E.slice(1);
            else return !1;
        return this.r = new s(g), this.s = new s(E), this.recoveryParam = null, !0
    };

    function l(v, a) {
        if (a < 128) {
            v.push(a);
            return
        }
        var u = 1 + (Math.log(a) / Math.LN2 >>> 3);
        for (v.push(u | 128); --u;) v.push(a >>> (u << 3) & 255);
        v.push(a)
    }
    return i.prototype.toDER = function(a) {
        var u = this.r.toArray(),
            h = this.s.toArray();
        for (u[0] & 128 && (u = [0].concat(u)), h[0] & 128 && (h = [0].concat(h)), u = d(u), h = d(h); !h[0] && !(h[1] & 128);) h = h.slice(1);
        var p = [2];
        l(p, u.length), p = p.concat(u), p.push(2), l(p, h.length);
        var b = p.concat(h),
            g = [48];
        return l(g, b.length), g = g.concat(b), r.encode(g, a)
    }, signature$1
}
var ec, hasRequiredEc;

function requireEc() {
    if (hasRequiredEc) return ec;
    hasRequiredEc = 1;
    var s = requireBn$2(),
        r = requireHmacDrbg(),
        n = requireUtils$1(),
        i = requireCurves(),
        f = requireBrorand(),
        e = n.assert,
        d = requireKey$1(),
        l = requireSignature$1();

    function v(a) {
        if (!(this instanceof v)) return new v(a);
        typeof a == "string" && (e(Object.prototype.hasOwnProperty.call(i, a), "Unknown curve " + a), a = i[a]), a instanceof i.PresetCurve && (a = {
            curve: a
        }), this.curve = a.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = a.curve.g, this.g.precompute(a.curve.n.bitLength() + 1), this.hash = a.hash || a.curve.hash
    }
    return ec = v, v.prototype.keyPair = function(u) {
        return new d(this, u)
    }, v.prototype.keyFromPrivate = function(u, h) {
        return d.fromPrivate(this, u, h)
    }, v.prototype.keyFromPublic = function(u, h) {
        return d.fromPublic(this, u, h)
    }, v.prototype.genKeyPair = function(u) {
        u || (u = {});
        for (var h = new r({
                hash: this.hash,
                pers: u.pers,
                persEnc: u.persEnc || "utf8",
                entropy: u.entropy || f(this.hash.hmacStrength),
                entropyEnc: u.entropy && u.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), p = this.n.byteLength(), b = this.n.sub(new s(2));;) {
            var g = new s(h.generate(p));
            if (!(g.cmp(b) > 0)) return g.iaddn(1), this.keyFromPrivate(g)
        }
    }, v.prototype._truncateToN = function(u, h, p) {
        var b;
        if (s.isBN(u) || typeof u == "number") u = new s(u, 16), b = u.byteLength();
        else if (typeof u == "object") b = u.length, u = new s(u, 16);
        else {
            var g = u.toString();
            b = g.length + 1 >>> 1, u = new s(g, 16)
        }
        typeof p != "number" && (p = b * 8);
        var x = p - this.n.bitLength();
        return x > 0 && (u = u.ushrn(x)), !h && u.cmp(this.n) >= 0 ? u.sub(this.n) : u
    }, v.prototype.sign = function(u, h, p, b) {
        if (typeof p == "object" && (b = p, p = null), b || (b = {}), typeof u != "string" && typeof u != "number" && !s.isBN(u)) {
            e(typeof u == "object" && u && typeof u.length == "number", "Expected message to be an array-like, a hex string, or a BN instance"), e(u.length >>> 0 === u.length);
            for (var g = 0; g < u.length; g++) e((u[g] & 255) === u[g])
        }
        h = this.keyFromPrivate(h, p), u = this._truncateToN(u, !1, b.msgBitLength), e(!u.isNeg(), "Can not sign a negative message");
        var x = this.n.byteLength(),
            E = h.getPrivate().toArray("be", x),
            R = u.toArray("be", x);
        e(new s(R).eq(u), "Can not sign message");
        for (var k = new r({
                hash: this.hash,
                entropy: E,
                nonce: R,
                pers: b.pers,
                persEnc: b.persEnc || "utf8"
            }), I = this.n.sub(new s(1)), $ = 0;; $++) {
            var j = b.k ? b.k($) : new s(k.generate(this.n.byteLength()));
            if (j = this._truncateToN(j, !0), !(j.cmpn(1) <= 0 || j.cmp(I) >= 0)) {
                var O = this.g.mul(j);
                if (!O.isInfinity()) {
                    var H = O.getX(),
                        X = H.umod(this.n);
                    if (X.cmpn(0) !== 0) {
                        var W = j.invm(this.n).mul(X.mul(h.getPrivate()).iadd(u));
                        if (W = W.umod(this.n), W.cmpn(0) !== 0) {
                            var J = (O.getY().isOdd() ? 1 : 0) | (H.cmp(X) !== 0 ? 2 : 0);
                            return b.canonical && W.cmp(this.nh) > 0 && (W = this.n.sub(W), J ^= 1), new l({
                                r: X,
                                s: W,
                                recoveryParam: J
                            })
                        }
                    }
                }
            }
        }
    }, v.prototype.verify = function(u, h, p, b, g) {
        g || (g = {}), u = this._truncateToN(u, !1, g.msgBitLength), p = this.keyFromPublic(p, b), h = new l(h, "hex");
        var x = h.r,
            E = h.s;
        if (x.cmpn(1) < 0 || x.cmp(this.n) >= 0 || E.cmpn(1) < 0 || E.cmp(this.n) >= 0) return !1;
        var R = E.invm(this.n),
            k = R.mul(u).umod(this.n),
            I = R.mul(x).umod(this.n),
            $;
        return this.curve._maxwellTrick ? ($ = this.g.jmulAdd(k, p.getPublic(), I), $.isInfinity() ? !1 : $.eqXToP(x)) : ($ = this.g.mulAdd(k, p.getPublic(), I), $.isInfinity() ? !1 : $.getX().umod(this.n).cmp(x) === 0)
    }, v.prototype.recoverPubKey = function(a, u, h, p) {
        e((3 & h) === h, "The recovery param is more than two bits"), u = new l(u, p);
        var b = this.n,
            g = new s(a),
            x = u.r,
            E = u.s,
            R = h & 1,
            k = h >> 1;
        if (x.cmp(this.curve.p.umod(this.curve.n)) >= 0 && k) throw new Error("Unable to find sencond key candinate");
        k ? x = this.curve.pointFromX(x.add(this.curve.n), R) : x = this.curve.pointFromX(x, R);
        var I = u.r.invm(b),
            $ = b.sub(g).mul(I).umod(b),
            j = E.mul(I).umod(b);
        return this.g.mulAdd($, x, j)
    }, v.prototype.getKeyRecoveryParam = function(a, u, h, p) {
        if (u = new l(u, p), u.recoveryParam !== null) return u.recoveryParam;
        for (var b = 0; b < 4; b++) {
            var g;
            try {
                g = this.recoverPubKey(a, u, b)
            } catch {
                continue
            }
            if (g.eq(h)) return b
        }
        throw new Error("Unable to find valid recovery factor")
    }, ec
}
var key, hasRequiredKey;

function requireKey() {
    if (hasRequiredKey) return key;
    hasRequiredKey = 1;
    var s = requireUtils$1(),
        r = s.assert,
        n = s.parseBytes,
        i = s.cachedProperty;

    function f(e, d) {
        this.eddsa = e, this._secret = n(d.secret), e.isPoint(d.pub) ? this._pub = d.pub : this._pubBytes = n(d.pub)
    }
    return f.fromPublic = function(d, l) {
        return l instanceof f ? l : new f(d, {
            pub: l
        })
    }, f.fromSecret = function(d, l) {
        return l instanceof f ? l : new f(d, {
            secret: l
        })
    }, f.prototype.secret = function() {
        return this._secret
    }, i(f, "pubBytes", function() {
        return this.eddsa.encodePoint(this.pub())
    }), i(f, "pub", function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }), i(f, "privBytes", function() {
        var d = this.eddsa,
            l = this.hash(),
            v = d.encodingLength - 1,
            a = l.slice(0, d.encodingLength);
        return a[0] &= 248, a[v] &= 127, a[v] |= 64, a
    }), i(f, "priv", function() {
        return this.eddsa.decodeInt(this.privBytes())
    }), i(f, "hash", function() {
        return this.eddsa.hash().update(this.secret()).digest()
    }), i(f, "messagePrefix", function() {
        return this.hash().slice(this.eddsa.encodingLength)
    }), f.prototype.sign = function(d) {
        return r(this._secret, "KeyPair can only verify"), this.eddsa.sign(d, this)
    }, f.prototype.verify = function(d, l) {
        return this.eddsa.verify(d, l, this)
    }, f.prototype.getSecret = function(d) {
        return r(this._secret, "KeyPair is public only"), s.encode(this.secret(), d)
    }, f.prototype.getPublic = function(d) {
        return s.encode(this.pubBytes(), d)
    }, key = f, key
}
var signature, hasRequiredSignature;

function requireSignature() {
    if (hasRequiredSignature) return signature;
    hasRequiredSignature = 1;
    var s = requireBn$2(),
        r = requireUtils$1(),
        n = r.assert,
        i = r.cachedProperty,
        f = r.parseBytes;

    function e(d, l) {
        this.eddsa = d, typeof l != "object" && (l = f(l)), Array.isArray(l) && (n(l.length === d.encodingLength * 2, "Signature has invalid size"), l = {
            R: l.slice(0, d.encodingLength),
            S: l.slice(d.encodingLength)
        }), n(l.R && l.S, "Signature without R or S"), d.isPoint(l.R) && (this._R = l.R), l.S instanceof s && (this._S = l.S), this._Rencoded = Array.isArray(l.R) ? l.R : l.Rencoded, this._Sencoded = Array.isArray(l.S) ? l.S : l.Sencoded
    }
    return i(e, "S", function() {
        return this.eddsa.decodeInt(this.Sencoded())
    }), i(e, "R", function() {
        return this.eddsa.decodePoint(this.Rencoded())
    }), i(e, "Rencoded", function() {
        return this.eddsa.encodePoint(this.R())
    }), i(e, "Sencoded", function() {
        return this.eddsa.encodeInt(this.S())
    }), e.prototype.toBytes = function() {
        return this.Rencoded().concat(this.Sencoded())
    }, e.prototype.toHex = function() {
        return r.encode(this.toBytes(), "hex").toUpperCase()
    }, signature = e, signature
}
var eddsa, hasRequiredEddsa;

function requireEddsa() {
    if (hasRequiredEddsa) return eddsa;
    hasRequiredEddsa = 1;
    var s = requireHash(),
        r = requireCurves(),
        n = requireUtils$1(),
        i = n.assert,
        f = n.parseBytes,
        e = requireKey(),
        d = requireSignature();

    function l(v) {
        if (i(v === "ed25519", "only tested with ed25519 so far"), !(this instanceof l)) return new l(v);
        v = r[v].curve, this.curve = v, this.g = v.g, this.g.precompute(v.n.bitLength() + 1), this.pointClass = v.point().constructor, this.encodingLength = Math.ceil(v.n.bitLength() / 8), this.hash = s.sha512
    }
    return eddsa = l, l.prototype.sign = function(a, u) {
        a = f(a);
        var h = this.keyFromSecret(u),
            p = this.hashInt(h.messagePrefix(), a),
            b = this.g.mul(p),
            g = this.encodePoint(b),
            x = this.hashInt(g, h.pubBytes(), a).mul(h.priv()),
            E = p.add(x).umod(this.curve.n);
        return this.makeSignature({
            R: b,
            S: E,
            Rencoded: g
        })
    }, l.prototype.verify = function(a, u, h) {
        if (a = f(a), u = this.makeSignature(u), u.S().gte(u.eddsa.curve.n) || u.S().isNeg()) return !1;
        var p = this.keyFromPublic(h),
            b = this.hashInt(u.Rencoded(), p.pubBytes(), a),
            g = this.g.mul(u.S()),
            x = u.R().add(p.pub().mul(b));
        return x.eq(g)
    }, l.prototype.hashInt = function() {
        for (var a = this.hash(), u = 0; u < arguments.length; u++) a.update(arguments[u]);
        return n.intFromLE(a.digest()).umod(this.curve.n)
    }, l.prototype.keyFromPublic = function(a) {
        return e.fromPublic(this, a)
    }, l.prototype.keyFromSecret = function(a) {
        return e.fromSecret(this, a)
    }, l.prototype.makeSignature = function(a) {
        return a instanceof d ? a : new d(this, a)
    }, l.prototype.encodePoint = function(a) {
        var u = a.getY().toArray("le", this.encodingLength);
        return u[this.encodingLength - 1] |= a.getX().isOdd() ? 128 : 0, u
    }, l.prototype.decodePoint = function(a) {
        a = n.parseBytes(a);
        var u = a.length - 1,
            h = a.slice(0, u).concat(a[u] & -129),
            p = (a[u] & 128) !== 0,
            b = n.intFromLE(h);
        return this.curve.pointFromY(b, p)
    }, l.prototype.encodeInt = function(a) {
        return a.toArray("le", this.encodingLength)
    }, l.prototype.decodeInt = function(a) {
        return n.intFromLE(a)
    }, l.prototype.isPoint = function(a) {
        return a instanceof this.pointClass
    }, eddsa
}
var hasRequiredElliptic;

function requireElliptic() {
    return hasRequiredElliptic || (hasRequiredElliptic = 1, function(s) {
        var r = s;
        r.version = require$$0$1.version, r.utils = requireUtils$1(), r.rand = requireBrorand(), r.curve = requireCurve(), r.curves = requireCurves(), r.ec = requireEc(), r.eddsa = requireEddsa()
    }(elliptic)), elliptic
}
var bn$1 = {
        exports: {}
    },
    bn = bn$1.exports,
    hasRequiredBn;

function requireBn() {
    return hasRequiredBn || (hasRequiredBn = 1, function(s) {
        (function(r, n) {
            function i(y, t) {
                if (!y) throw new Error(t || "Assertion failed")
            }

            function f(y, t) {
                y.super_ = t;
                var c = function() {};
                c.prototype = t.prototype, y.prototype = new c, y.prototype.constructor = y
            }

            function e(y, t, c) {
                if (e.isBN(y)) return y;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, y !== null && ((t === "le" || t === "be") && (c = t, t = 10), this._init(y || 0, t || 10, c || "be"))
            }
            typeof r == "object" ? r.exports = e : n.BN = e, e.BN = e, e.wordSize = 26;
            var d;
            try {
                typeof window < "u" && typeof window.Buffer < "u" ? d = window.Buffer : d = requireDist$1().Buffer
            } catch {}
            e.isBN = function(t) {
                return t instanceof e ? !0 : t !== null && typeof t == "object" && t.constructor.wordSize === e.wordSize && Array.isArray(t.words)
            }, e.max = function(t, c) {
                return t.cmp(c) > 0 ? t : c
            }, e.min = function(t, c) {
                return t.cmp(c) < 0 ? t : c
            }, e.prototype._init = function(t, c, _) {
                if (typeof t == "number") return this._initNumber(t, c, _);
                if (typeof t == "object") return this._initArray(t, c, _);
                c === "hex" && (c = 16), i(c === (c | 0) && c >= 2 && c <= 36), t = t.toString().replace(/\s+/g, "");
                var w = 0;
                t[0] === "-" && (w++, this.negative = 1), w < t.length && (c === 16 ? this._parseHex(t, w, _) : (this._parseBase(t, c, w), _ === "le" && this._initArray(this.toArray(), c, _)))
            }, e.prototype._initNumber = function(t, c, _) {
                t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [t & 67108863, t / 67108864 & 67108863], this.length = 2) : (i(t < 9007199254740992), this.words = [t & 67108863, t / 67108864 & 67108863, 1], this.length = 3), _ === "le" && this._initArray(this.toArray(), c, _)
            }, e.prototype._initArray = function(t, c, _) {
                if (i(typeof t.length == "number"), t.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                for (var w = 0; w < this.length; w++) this.words[w] = 0;
                var q, A, M = 0;
                if (_ === "be")
                    for (w = t.length - 1, q = 0; w >= 0; w -= 3) A = t[w] | t[w - 1] << 8 | t[w - 2] << 16, this.words[q] |= A << M & 67108863, this.words[q + 1] = A >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, q++);
                else if (_ === "le")
                    for (w = 0, q = 0; w < t.length; w += 3) A = t[w] | t[w + 1] << 8 | t[w + 2] << 16, this.words[q] |= A << M & 67108863, this.words[q + 1] = A >>> 26 - M & 67108863, M += 24, M >= 26 && (M -= 26, q++);
                return this._strip()
            };

            function l(y, t) {
                var c = y.charCodeAt(t);
                if (c >= 48 && c <= 57) return c - 48;
                if (c >= 65 && c <= 70) return c - 55;
                if (c >= 97 && c <= 102) return c - 87;
                i(!1, "Invalid character in " + y)
            }

            function v(y, t, c) {
                var _ = l(y, c);
                return c - 1 >= t && (_ |= l(y, c - 1) << 4), _
            }
            e.prototype._parseHex = function(t, c, _) {
                this.length = Math.ceil((t.length - c) / 6), this.words = new Array(this.length);
                for (var w = 0; w < this.length; w++) this.words[w] = 0;
                var q = 0,
                    A = 0,
                    M;
                if (_ === "be")
                    for (w = t.length - 1; w >= c; w -= 2) M = v(t, c, w) << q, this.words[A] |= M & 67108863, q >= 18 ? (q -= 18, A += 1, this.words[A] |= M >>> 26) : q += 8;
                else {
                    var S = t.length - c;
                    for (w = S % 2 === 0 ? c + 1 : c; w < t.length; w += 2) M = v(t, c, w) << q, this.words[A] |= M & 67108863, q >= 18 ? (q -= 18, A += 1, this.words[A] |= M >>> 26) : q += 8
                }
                this._strip()
            };

            function a(y, t, c, _) {
                for (var w = 0, q = 0, A = Math.min(y.length, c), M = t; M < A; M++) {
                    var S = y.charCodeAt(M) - 48;
                    w *= _, S >= 49 ? q = S - 49 + 10 : S >= 17 ? q = S - 17 + 10 : q = S, i(S >= 0 && q < _, "Invalid character"), w += q
                }
                return w
            }
            e.prototype._parseBase = function(t, c, _) {
                this.words = [0], this.length = 1;
                for (var w = 0, q = 1; q <= 67108863; q *= c) w++;
                w--, q = q / c | 0;
                for (var A = t.length - _, M = A % w, S = Math.min(A, A - M) + _, m = 0, C = _; C < S; C += w) m = a(t, C, C + w, c), this.imuln(q), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m);
                if (M !== 0) {
                    var L = 1;
                    for (m = a(t, C, t.length, c), C = 0; C < M; C++) L *= c;
                    this.imuln(L), this.words[0] + m < 67108864 ? this.words[0] += m : this._iaddn(m)
                }
                this._strip()
            }, e.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for (var c = 0; c < this.length; c++) t.words[c] = this.words[c];
                t.length = this.length, t.negative = this.negative, t.red = this.red
            };

            function u(y, t) {
                y.words = t.words, y.length = t.length, y.negative = t.negative, y.red = t.red
            }
            if (e.prototype._move = function(t) {
                    u(t, this)
                }, e.prototype.clone = function() {
                    var t = new e(null);
                    return this.copy(t), t
                }, e.prototype._expand = function(t) {
                    for (; this.length < t;) this.words[this.length++] = 0;
                    return this
                }, e.prototype._strip = function() {
                    for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                    return this._normSign()
                }, e.prototype._normSign = function() {
                    return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
                }, typeof Symbol < "u" && typeof Symbol.for == "function") try {
                e.prototype[Symbol.for("nodejs.util.inspect.custom")] = h
            } catch {
                e.prototype.inspect = h
            } else e.prototype.inspect = h;

            function h() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var p = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                b = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                g = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            e.prototype.toString = function(t, c) {
                t = t || 10, c = c | 0 || 1;
                var _;
                if (t === 16 || t === "hex") {
                    _ = "";
                    for (var w = 0, q = 0, A = 0; A < this.length; A++) {
                        var M = this.words[A],
                            S = ((M << w | q) & 16777215).toString(16);
                        q = M >>> 24 - w & 16777215, w += 2, w >= 26 && (w -= 26, A--), q !== 0 || A !== this.length - 1 ? _ = p[6 - S.length] + S + _ : _ = S + _
                    }
                    for (q !== 0 && (_ = q.toString(16) + _); _.length % c !== 0;) _ = "0" + _;
                    return this.negative !== 0 && (_ = "-" + _), _
                }
                if (t === (t | 0) && t >= 2 && t <= 36) {
                    var m = b[t],
                        C = g[t];
                    _ = "";
                    var L = this.clone();
                    for (L.negative = 0; !L.isZero();) {
                        var U = L.modrn(C).toString(t);
                        L = L.idivn(C), L.isZero() ? _ = U + _ : _ = p[m - U.length] + U + _
                    }
                    for (this.isZero() && (_ = "0" + _); _.length % c !== 0;) _ = "0" + _;
                    return this.negative !== 0 && (_ = "-" + _), _
                }
                i(!1, "Base should be between 2 and 36")
            }, e.prototype.toNumber = function() {
                var t = this.words[0];
                return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && i(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t
            }, e.prototype.toJSON = function() {
                return this.toString(16, 2)
            }, d && (e.prototype.toBuffer = function(t, c) {
                return this.toArrayLike(d, t, c)
            }), e.prototype.toArray = function(t, c) {
                return this.toArrayLike(Array, t, c)
            };
            var x = function(t, c) {
                return t.allocUnsafe ? t.allocUnsafe(c) : new t(c)
            };
            e.prototype.toArrayLike = function(t, c, _) {
                this._strip();
                var w = this.byteLength(),
                    q = _ || Math.max(1, w);
                i(w <= q, "byte array longer than desired length"), i(q > 0, "Requested array length <= 0");
                var A = x(t, q),
                    M = c === "le" ? "LE" : "BE";
                return this["_toArrayLike" + M](A, w), A
            }, e.prototype._toArrayLikeLE = function(t, c) {
                for (var _ = 0, w = 0, q = 0, A = 0; q < this.length; q++) {
                    var M = this.words[q] << A | w;
                    t[_++] = M & 255, _ < t.length && (t[_++] = M >> 8 & 255), _ < t.length && (t[_++] = M >> 16 & 255), A === 6 ? (_ < t.length && (t[_++] = M >> 24 & 255), w = 0, A = 0) : (w = M >>> 24, A += 2)
                }
                if (_ < t.length)
                    for (t[_++] = w; _ < t.length;) t[_++] = 0
            }, e.prototype._toArrayLikeBE = function(t, c) {
                for (var _ = t.length - 1, w = 0, q = 0, A = 0; q < this.length; q++) {
                    var M = this.words[q] << A | w;
                    t[_--] = M & 255, _ >= 0 && (t[_--] = M >> 8 & 255), _ >= 0 && (t[_--] = M >> 16 & 255), A === 6 ? (_ >= 0 && (t[_--] = M >> 24 & 255), w = 0, A = 0) : (w = M >>> 24, A += 2)
                }
                if (_ >= 0)
                    for (t[_--] = w; _ >= 0;) t[_--] = 0
            }, Math.clz32 ? e.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            } : e.prototype._countBits = function(t) {
                var c = t,
                    _ = 0;
                return c >= 4096 && (_ += 13, c >>>= 13), c >= 64 && (_ += 7, c >>>= 7), c >= 8 && (_ += 4, c >>>= 4), c >= 2 && (_ += 2, c >>>= 2), _ + c
            }, e.prototype._zeroBits = function(t) {
                if (t === 0) return 26;
                var c = t,
                    _ = 0;
                return (c & 8191) === 0 && (_ += 13, c >>>= 13), (c & 127) === 0 && (_ += 7, c >>>= 7), (c & 15) === 0 && (_ += 4, c >>>= 4), (c & 3) === 0 && (_ += 2, c >>>= 2), (c & 1) === 0 && _++, _
            }, e.prototype.bitLength = function() {
                var t = this.words[this.length - 1],
                    c = this._countBits(t);
                return (this.length - 1) * 26 + c
            };

            function E(y) {
                for (var t = new Array(y.bitLength()), c = 0; c < t.length; c++) {
                    var _ = c / 26 | 0,
                        w = c % 26;
                    t[c] = y.words[_] >>> w & 1
                }
                return t
            }
            e.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var t = 0, c = 0; c < this.length; c++) {
                    var _ = this._zeroBits(this.words[c]);
                    if (t += _, _ !== 26) break
                }
                return t
            }, e.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }, e.prototype.toTwos = function(t) {
                return this.negative !== 0 ? this.abs().inotn(t).iaddn(1) : this.clone()
            }, e.prototype.fromTwos = function(t) {
                return this.testn(t - 1) ? this.notn(t).iaddn(1).ineg() : this.clone()
            }, e.prototype.isNeg = function() {
                return this.negative !== 0
            }, e.prototype.neg = function() {
                return this.clone().ineg()
            }, e.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this
            }, e.prototype.iuor = function(t) {
                for (; this.length < t.length;) this.words[this.length++] = 0;
                for (var c = 0; c < t.length; c++) this.words[c] = this.words[c] | t.words[c];
                return this._strip()
            }, e.prototype.ior = function(t) {
                return i((this.negative | t.negative) === 0), this.iuor(t)
            }, e.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }, e.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }, e.prototype.iuand = function(t) {
                var c;
                this.length > t.length ? c = t : c = this;
                for (var _ = 0; _ < c.length; _++) this.words[_] = this.words[_] & t.words[_];
                return this.length = c.length, this._strip()
            }, e.prototype.iand = function(t) {
                return i((this.negative | t.negative) === 0), this.iuand(t)
            }, e.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }, e.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }, e.prototype.iuxor = function(t) {
                var c, _;
                this.length > t.length ? (c = this, _ = t) : (c = t, _ = this);
                for (var w = 0; w < _.length; w++) this.words[w] = c.words[w] ^ _.words[w];
                if (this !== c)
                    for (; w < c.length; w++) this.words[w] = c.words[w];
                return this.length = c.length, this._strip()
            }, e.prototype.ixor = function(t) {
                return i((this.negative | t.negative) === 0), this.iuxor(t)
            }, e.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }, e.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }, e.prototype.inotn = function(t) {
                i(typeof t == "number" && t >= 0);
                var c = Math.ceil(t / 26) | 0,
                    _ = t % 26;
                this._expand(c), _ > 0 && c--;
                for (var w = 0; w < c; w++) this.words[w] = ~this.words[w] & 67108863;
                return _ > 0 && (this.words[w] = ~this.words[w] & 67108863 >> 26 - _), this._strip()
            }, e.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }, e.prototype.setn = function(t, c) {
                i(typeof t == "number" && t >= 0);
                var _ = t / 26 | 0,
                    w = t % 26;
                return this._expand(_ + 1), c ? this.words[_] = this.words[_] | 1 << w : this.words[_] = this.words[_] & ~(1 << w), this._strip()
            }, e.prototype.iadd = function(t) {
                var c;
                if (this.negative !== 0 && t.negative === 0) return this.negative = 0, c = this.isub(t), this.negative ^= 1, this._normSign();
                if (this.negative === 0 && t.negative !== 0) return t.negative = 0, c = this.isub(t), t.negative = 1, c._normSign();
                var _, w;
                this.length > t.length ? (_ = this, w = t) : (_ = t, w = this);
                for (var q = 0, A = 0; A < w.length; A++) c = (_.words[A] | 0) + (w.words[A] | 0) + q, this.words[A] = c & 67108863, q = c >>> 26;
                for (; q !== 0 && A < _.length; A++) c = (_.words[A] | 0) + q, this.words[A] = c & 67108863, q = c >>> 26;
                if (this.length = _.length, q !== 0) this.words[this.length] = q, this.length++;
                else if (_ !== this)
                    for (; A < _.length; A++) this.words[A] = _.words[A];
                return this
            }, e.prototype.add = function(t) {
                var c;
                return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, c = this.sub(t), t.negative ^= 1, c) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, c = t.sub(this), this.negative = 1, c) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }, e.prototype.isub = function(t) {
                if (t.negative !== 0) {
                    t.negative = 0;
                    var c = this.iadd(t);
                    return t.negative = 1, c._normSign()
                } else if (this.negative !== 0) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                var _ = this.cmp(t);
                if (_ === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                var w, q;
                _ > 0 ? (w = this, q = t) : (w = t, q = this);
                for (var A = 0, M = 0; M < q.length; M++) c = (w.words[M] | 0) - (q.words[M] | 0) + A, A = c >> 26, this.words[M] = c & 67108863;
                for (; A !== 0 && M < w.length; M++) c = (w.words[M] | 0) + A, A = c >> 26, this.words[M] = c & 67108863;
                if (A === 0 && M < w.length && w !== this)
                    for (; M < w.length; M++) this.words[M] = w.words[M];
                return this.length = Math.max(this.length, M), w !== this && (this.negative = 1), this._strip()
            }, e.prototype.sub = function(t) {
                return this.clone().isub(t)
            };

            function R(y, t, c) {
                c.negative = t.negative ^ y.negative;
                var _ = y.length + t.length | 0;
                c.length = _, _ = _ - 1 | 0;
                var w = y.words[0] | 0,
                    q = t.words[0] | 0,
                    A = w * q,
                    M = A & 67108863,
                    S = A / 67108864 | 0;
                c.words[0] = M;
                for (var m = 1; m < _; m++) {
                    for (var C = S >>> 26, L = S & 67108863, U = Math.min(m, t.length - 1), K = Math.max(0, m - y.length + 1); K <= U; K++) {
                        var P = m - K | 0;
                        w = y.words[P] | 0, q = t.words[K] | 0, A = w * q + L, C += A / 67108864 | 0, L = A & 67108863
                    }
                    c.words[m] = L | 0, S = C | 0
                }
                return S !== 0 ? c.words[m] = S | 0 : c.length--, c._strip()
            }
            var k = function(t, c, _) {
                var w = t.words,
                    q = c.words,
                    A = _.words,
                    M = 0,
                    S, m, C, L = w[0] | 0,
                    U = L & 8191,
                    K = L >>> 13,
                    P = w[1] | 0,
                    N = P & 8191,
                    z = P >>> 13,
                    V = w[2] | 0,
                    Q = V & 8191,
                    G = V >>> 13,
                    te = w[3] | 0,
                    ve = te & 8191,
                    ee = te >>> 13,
                    De = w[4] | 0,
                    me = De & 8191,
                    re = De >>> 13,
                    Ne = w[5] | 0,
                    ye = Ne & 8191,
                    Y = Ne >>> 13,
                    $e = w[6] | 0,
                    be = $e & 8191,
                    Z = $e >>> 13,
                    Pe = w[7] | 0,
                    ge = Pe & 8191,
                    ie = Pe >>> 13,
                    je = w[8] | 0,
                    xe = je & 8191,
                    ne = je >>> 13,
                    Te = w[9] | 0,
                    Me = Te & 8191,
                    ae = Te >>> 13,
                    Oe = q[0] | 0,
                    qe = Oe & 8191,
                    fe = Oe >>> 13,
                    ze = q[1] | 0,
                    Se = ze & 8191,
                    se = ze >>> 13,
                    Le = q[2] | 0,
                    Be = Le & 8191,
                    oe = Le >>> 13,
                    Ue = q[3] | 0,
                    Ae = Ue & 8191,
                    ue = Ue >>> 13,
                    We = q[4] | 0,
                    Ee = We & 8191,
                    he = We >>> 13,
                    He = q[5] | 0,
                    Re = He & 8191,
                    ce = He >>> 13,
                    Ke = q[6] | 0,
                    ke = Ke & 8191,
                    de = Ke >>> 13,
                    Fe = q[7] | 0,
                    Ce = Fe & 8191,
                    le = Fe >>> 13,
                    Xe = q[8] | 0,
                    Ie = Xe & 8191,
                    pe = Xe >>> 13,
                    Ve = q[9] | 0,
                    _e = Ve & 8191,
                    we = Ve >>> 13;
                _.negative = t.negative ^ c.negative, _.length = 19, S = Math.imul(U, qe), m = Math.imul(U, fe), m = m + Math.imul(K, qe) | 0, C = Math.imul(K, fe);
                var Ge = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Ge >>> 26) | 0, Ge &= 67108863, S = Math.imul(N, qe), m = Math.imul(N, fe), m = m + Math.imul(z, qe) | 0, C = Math.imul(z, fe), S = S + Math.imul(U, Se) | 0, m = m + Math.imul(U, se) | 0, m = m + Math.imul(K, Se) | 0, C = C + Math.imul(K, se) | 0;
                var Je = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, S = Math.imul(Q, qe), m = Math.imul(Q, fe), m = m + Math.imul(G, qe) | 0, C = Math.imul(G, fe), S = S + Math.imul(N, Se) | 0, m = m + Math.imul(N, se) | 0, m = m + Math.imul(z, Se) | 0, C = C + Math.imul(z, se) | 0, S = S + Math.imul(U, Be) | 0, m = m + Math.imul(U, oe) | 0, m = m + Math.imul(K, Be) | 0, C = C + Math.imul(K, oe) | 0;
                var Ye = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, S = Math.imul(ve, qe), m = Math.imul(ve, fe), m = m + Math.imul(ee, qe) | 0, C = Math.imul(ee, fe), S = S + Math.imul(Q, Se) | 0, m = m + Math.imul(Q, se) | 0, m = m + Math.imul(G, Se) | 0, C = C + Math.imul(G, se) | 0, S = S + Math.imul(N, Be) | 0, m = m + Math.imul(N, oe) | 0, m = m + Math.imul(z, Be) | 0, C = C + Math.imul(z, oe) | 0, S = S + Math.imul(U, Ae) | 0, m = m + Math.imul(U, ue) | 0, m = m + Math.imul(K, Ae) | 0, C = C + Math.imul(K, ue) | 0;
                var Qe = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, S = Math.imul(me, qe), m = Math.imul(me, fe), m = m + Math.imul(re, qe) | 0, C = Math.imul(re, fe), S = S + Math.imul(ve, Se) | 0, m = m + Math.imul(ve, se) | 0, m = m + Math.imul(ee, Se) | 0, C = C + Math.imul(ee, se) | 0, S = S + Math.imul(Q, Be) | 0, m = m + Math.imul(Q, oe) | 0, m = m + Math.imul(G, Be) | 0, C = C + Math.imul(G, oe) | 0, S = S + Math.imul(N, Ae) | 0, m = m + Math.imul(N, ue) | 0, m = m + Math.imul(z, Ae) | 0, C = C + Math.imul(z, ue) | 0, S = S + Math.imul(U, Ee) | 0, m = m + Math.imul(U, he) | 0, m = m + Math.imul(K, Ee) | 0, C = C + Math.imul(K, he) | 0;
                var Ze = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, S = Math.imul(ye, qe), m = Math.imul(ye, fe), m = m + Math.imul(Y, qe) | 0, C = Math.imul(Y, fe), S = S + Math.imul(me, Se) | 0, m = m + Math.imul(me, se) | 0, m = m + Math.imul(re, Se) | 0, C = C + Math.imul(re, se) | 0, S = S + Math.imul(ve, Be) | 0, m = m + Math.imul(ve, oe) | 0, m = m + Math.imul(ee, Be) | 0, C = C + Math.imul(ee, oe) | 0, S = S + Math.imul(Q, Ae) | 0, m = m + Math.imul(Q, ue) | 0, m = m + Math.imul(G, Ae) | 0, C = C + Math.imul(G, ue) | 0, S = S + Math.imul(N, Ee) | 0, m = m + Math.imul(N, he) | 0, m = m + Math.imul(z, Ee) | 0, C = C + Math.imul(z, he) | 0, S = S + Math.imul(U, Re) | 0, m = m + Math.imul(U, ce) | 0, m = m + Math.imul(K, Re) | 0, C = C + Math.imul(K, ce) | 0;
                var er = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, S = Math.imul(be, qe), m = Math.imul(be, fe), m = m + Math.imul(Z, qe) | 0, C = Math.imul(Z, fe), S = S + Math.imul(ye, Se) | 0, m = m + Math.imul(ye, se) | 0, m = m + Math.imul(Y, Se) | 0, C = C + Math.imul(Y, se) | 0, S = S + Math.imul(me, Be) | 0, m = m + Math.imul(me, oe) | 0, m = m + Math.imul(re, Be) | 0, C = C + Math.imul(re, oe) | 0, S = S + Math.imul(ve, Ae) | 0, m = m + Math.imul(ve, ue) | 0, m = m + Math.imul(ee, Ae) | 0, C = C + Math.imul(ee, ue) | 0, S = S + Math.imul(Q, Ee) | 0, m = m + Math.imul(Q, he) | 0, m = m + Math.imul(G, Ee) | 0, C = C + Math.imul(G, he) | 0, S = S + Math.imul(N, Re) | 0, m = m + Math.imul(N, ce) | 0, m = m + Math.imul(z, Re) | 0, C = C + Math.imul(z, ce) | 0, S = S + Math.imul(U, ke) | 0, m = m + Math.imul(U, de) | 0, m = m + Math.imul(K, ke) | 0, C = C + Math.imul(K, de) | 0;
                var rr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, S = Math.imul(ge, qe), m = Math.imul(ge, fe), m = m + Math.imul(ie, qe) | 0, C = Math.imul(ie, fe), S = S + Math.imul(be, Se) | 0, m = m + Math.imul(be, se) | 0, m = m + Math.imul(Z, Se) | 0, C = C + Math.imul(Z, se) | 0, S = S + Math.imul(ye, Be) | 0, m = m + Math.imul(ye, oe) | 0, m = m + Math.imul(Y, Be) | 0, C = C + Math.imul(Y, oe) | 0, S = S + Math.imul(me, Ae) | 0, m = m + Math.imul(me, ue) | 0, m = m + Math.imul(re, Ae) | 0, C = C + Math.imul(re, ue) | 0, S = S + Math.imul(ve, Ee) | 0, m = m + Math.imul(ve, he) | 0, m = m + Math.imul(ee, Ee) | 0, C = C + Math.imul(ee, he) | 0, S = S + Math.imul(Q, Re) | 0, m = m + Math.imul(Q, ce) | 0, m = m + Math.imul(G, Re) | 0, C = C + Math.imul(G, ce) | 0, S = S + Math.imul(N, ke) | 0, m = m + Math.imul(N, de) | 0, m = m + Math.imul(z, ke) | 0, C = C + Math.imul(z, de) | 0, S = S + Math.imul(U, Ce) | 0, m = m + Math.imul(U, le) | 0, m = m + Math.imul(K, Ce) | 0, C = C + Math.imul(K, le) | 0;
                var tr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (tr >>> 26) | 0, tr &= 67108863, S = Math.imul(xe, qe), m = Math.imul(xe, fe), m = m + Math.imul(ne, qe) | 0, C = Math.imul(ne, fe), S = S + Math.imul(ge, Se) | 0, m = m + Math.imul(ge, se) | 0, m = m + Math.imul(ie, Se) | 0, C = C + Math.imul(ie, se) | 0, S = S + Math.imul(be, Be) | 0, m = m + Math.imul(be, oe) | 0, m = m + Math.imul(Z, Be) | 0, C = C + Math.imul(Z, oe) | 0, S = S + Math.imul(ye, Ae) | 0, m = m + Math.imul(ye, ue) | 0, m = m + Math.imul(Y, Ae) | 0, C = C + Math.imul(Y, ue) | 0, S = S + Math.imul(me, Ee) | 0, m = m + Math.imul(me, he) | 0, m = m + Math.imul(re, Ee) | 0, C = C + Math.imul(re, he) | 0, S = S + Math.imul(ve, Re) | 0, m = m + Math.imul(ve, ce) | 0, m = m + Math.imul(ee, Re) | 0, C = C + Math.imul(ee, ce) | 0, S = S + Math.imul(Q, ke) | 0, m = m + Math.imul(Q, de) | 0, m = m + Math.imul(G, ke) | 0, C = C + Math.imul(G, de) | 0, S = S + Math.imul(N, Ce) | 0, m = m + Math.imul(N, le) | 0, m = m + Math.imul(z, Ce) | 0, C = C + Math.imul(z, le) | 0, S = S + Math.imul(U, Ie) | 0, m = m + Math.imul(U, pe) | 0, m = m + Math.imul(K, Ie) | 0, C = C + Math.imul(K, pe) | 0;
                var ir = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, S = Math.imul(Me, qe), m = Math.imul(Me, fe), m = m + Math.imul(ae, qe) | 0, C = Math.imul(ae, fe), S = S + Math.imul(xe, Se) | 0, m = m + Math.imul(xe, se) | 0, m = m + Math.imul(ne, Se) | 0, C = C + Math.imul(ne, se) | 0, S = S + Math.imul(ge, Be) | 0, m = m + Math.imul(ge, oe) | 0, m = m + Math.imul(ie, Be) | 0, C = C + Math.imul(ie, oe) | 0, S = S + Math.imul(be, Ae) | 0, m = m + Math.imul(be, ue) | 0, m = m + Math.imul(Z, Ae) | 0, C = C + Math.imul(Z, ue) | 0, S = S + Math.imul(ye, Ee) | 0, m = m + Math.imul(ye, he) | 0, m = m + Math.imul(Y, Ee) | 0, C = C + Math.imul(Y, he) | 0, S = S + Math.imul(me, Re) | 0, m = m + Math.imul(me, ce) | 0, m = m + Math.imul(re, Re) | 0, C = C + Math.imul(re, ce) | 0, S = S + Math.imul(ve, ke) | 0, m = m + Math.imul(ve, de) | 0, m = m + Math.imul(ee, ke) | 0, C = C + Math.imul(ee, de) | 0, S = S + Math.imul(Q, Ce) | 0, m = m + Math.imul(Q, le) | 0, m = m + Math.imul(G, Ce) | 0, C = C + Math.imul(G, le) | 0, S = S + Math.imul(N, Ie) | 0, m = m + Math.imul(N, pe) | 0, m = m + Math.imul(z, Ie) | 0, C = C + Math.imul(z, pe) | 0, S = S + Math.imul(U, _e) | 0, m = m + Math.imul(U, we) | 0, m = m + Math.imul(K, _e) | 0, C = C + Math.imul(K, we) | 0;
                var nr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, S = Math.imul(Me, Se), m = Math.imul(Me, se), m = m + Math.imul(ae, Se) | 0, C = Math.imul(ae, se), S = S + Math.imul(xe, Be) | 0, m = m + Math.imul(xe, oe) | 0, m = m + Math.imul(ne, Be) | 0, C = C + Math.imul(ne, oe) | 0, S = S + Math.imul(ge, Ae) | 0, m = m + Math.imul(ge, ue) | 0, m = m + Math.imul(ie, Ae) | 0, C = C + Math.imul(ie, ue) | 0, S = S + Math.imul(be, Ee) | 0, m = m + Math.imul(be, he) | 0, m = m + Math.imul(Z, Ee) | 0, C = C + Math.imul(Z, he) | 0, S = S + Math.imul(ye, Re) | 0, m = m + Math.imul(ye, ce) | 0, m = m + Math.imul(Y, Re) | 0, C = C + Math.imul(Y, ce) | 0, S = S + Math.imul(me, ke) | 0, m = m + Math.imul(me, de) | 0, m = m + Math.imul(re, ke) | 0, C = C + Math.imul(re, de) | 0, S = S + Math.imul(ve, Ce) | 0, m = m + Math.imul(ve, le) | 0, m = m + Math.imul(ee, Ce) | 0, C = C + Math.imul(ee, le) | 0, S = S + Math.imul(Q, Ie) | 0, m = m + Math.imul(Q, pe) | 0, m = m + Math.imul(G, Ie) | 0, C = C + Math.imul(G, pe) | 0, S = S + Math.imul(N, _e) | 0, m = m + Math.imul(N, we) | 0, m = m + Math.imul(z, _e) | 0, C = C + Math.imul(z, we) | 0;
                var ar = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, S = Math.imul(Me, Be), m = Math.imul(Me, oe), m = m + Math.imul(ae, Be) | 0, C = Math.imul(ae, oe), S = S + Math.imul(xe, Ae) | 0, m = m + Math.imul(xe, ue) | 0, m = m + Math.imul(ne, Ae) | 0, C = C + Math.imul(ne, ue) | 0, S = S + Math.imul(ge, Ee) | 0, m = m + Math.imul(ge, he) | 0, m = m + Math.imul(ie, Ee) | 0, C = C + Math.imul(ie, he) | 0, S = S + Math.imul(be, Re) | 0, m = m + Math.imul(be, ce) | 0, m = m + Math.imul(Z, Re) | 0, C = C + Math.imul(Z, ce) | 0, S = S + Math.imul(ye, ke) | 0, m = m + Math.imul(ye, de) | 0, m = m + Math.imul(Y, ke) | 0, C = C + Math.imul(Y, de) | 0, S = S + Math.imul(me, Ce) | 0, m = m + Math.imul(me, le) | 0, m = m + Math.imul(re, Ce) | 0, C = C + Math.imul(re, le) | 0, S = S + Math.imul(ve, Ie) | 0, m = m + Math.imul(ve, pe) | 0, m = m + Math.imul(ee, Ie) | 0, C = C + Math.imul(ee, pe) | 0, S = S + Math.imul(Q, _e) | 0, m = m + Math.imul(Q, we) | 0, m = m + Math.imul(G, _e) | 0, C = C + Math.imul(G, we) | 0;
                var fr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, S = Math.imul(Me, Ae), m = Math.imul(Me, ue), m = m + Math.imul(ae, Ae) | 0, C = Math.imul(ae, ue), S = S + Math.imul(xe, Ee) | 0, m = m + Math.imul(xe, he) | 0, m = m + Math.imul(ne, Ee) | 0, C = C + Math.imul(ne, he) | 0, S = S + Math.imul(ge, Re) | 0, m = m + Math.imul(ge, ce) | 0, m = m + Math.imul(ie, Re) | 0, C = C + Math.imul(ie, ce) | 0, S = S + Math.imul(be, ke) | 0, m = m + Math.imul(be, de) | 0, m = m + Math.imul(Z, ke) | 0, C = C + Math.imul(Z, de) | 0, S = S + Math.imul(ye, Ce) | 0, m = m + Math.imul(ye, le) | 0, m = m + Math.imul(Y, Ce) | 0, C = C + Math.imul(Y, le) | 0, S = S + Math.imul(me, Ie) | 0, m = m + Math.imul(me, pe) | 0, m = m + Math.imul(re, Ie) | 0, C = C + Math.imul(re, pe) | 0, S = S + Math.imul(ve, _e) | 0, m = m + Math.imul(ve, we) | 0, m = m + Math.imul(ee, _e) | 0, C = C + Math.imul(ee, we) | 0;
                var sr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, S = Math.imul(Me, Ee), m = Math.imul(Me, he), m = m + Math.imul(ae, Ee) | 0, C = Math.imul(ae, he), S = S + Math.imul(xe, Re) | 0, m = m + Math.imul(xe, ce) | 0, m = m + Math.imul(ne, Re) | 0, C = C + Math.imul(ne, ce) | 0, S = S + Math.imul(ge, ke) | 0, m = m + Math.imul(ge, de) | 0, m = m + Math.imul(ie, ke) | 0, C = C + Math.imul(ie, de) | 0, S = S + Math.imul(be, Ce) | 0, m = m + Math.imul(be, le) | 0, m = m + Math.imul(Z, Ce) | 0, C = C + Math.imul(Z, le) | 0, S = S + Math.imul(ye, Ie) | 0, m = m + Math.imul(ye, pe) | 0, m = m + Math.imul(Y, Ie) | 0, C = C + Math.imul(Y, pe) | 0, S = S + Math.imul(me, _e) | 0, m = m + Math.imul(me, we) | 0, m = m + Math.imul(re, _e) | 0, C = C + Math.imul(re, we) | 0;
                var ur = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, S = Math.imul(Me, Re), m = Math.imul(Me, ce), m = m + Math.imul(ae, Re) | 0, C = Math.imul(ae, ce), S = S + Math.imul(xe, ke) | 0, m = m + Math.imul(xe, de) | 0, m = m + Math.imul(ne, ke) | 0, C = C + Math.imul(ne, de) | 0, S = S + Math.imul(ge, Ce) | 0, m = m + Math.imul(ge, le) | 0, m = m + Math.imul(ie, Ce) | 0, C = C + Math.imul(ie, le) | 0, S = S + Math.imul(be, Ie) | 0, m = m + Math.imul(be, pe) | 0, m = m + Math.imul(Z, Ie) | 0, C = C + Math.imul(Z, pe) | 0, S = S + Math.imul(ye, _e) | 0, m = m + Math.imul(ye, we) | 0, m = m + Math.imul(Y, _e) | 0, C = C + Math.imul(Y, we) | 0;
                var hr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, S = Math.imul(Me, ke), m = Math.imul(Me, de), m = m + Math.imul(ae, ke) | 0, C = Math.imul(ae, de), S = S + Math.imul(xe, Ce) | 0, m = m + Math.imul(xe, le) | 0, m = m + Math.imul(ne, Ce) | 0, C = C + Math.imul(ne, le) | 0, S = S + Math.imul(ge, Ie) | 0, m = m + Math.imul(ge, pe) | 0, m = m + Math.imul(ie, Ie) | 0, C = C + Math.imul(ie, pe) | 0, S = S + Math.imul(be, _e) | 0, m = m + Math.imul(be, we) | 0, m = m + Math.imul(Z, _e) | 0, C = C + Math.imul(Z, we) | 0;
                var cr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, S = Math.imul(Me, Ce), m = Math.imul(Me, le), m = m + Math.imul(ae, Ce) | 0, C = Math.imul(ae, le), S = S + Math.imul(xe, Ie) | 0, m = m + Math.imul(xe, pe) | 0, m = m + Math.imul(ne, Ie) | 0, C = C + Math.imul(ne, pe) | 0, S = S + Math.imul(ge, _e) | 0, m = m + Math.imul(ge, we) | 0, m = m + Math.imul(ie, _e) | 0, C = C + Math.imul(ie, we) | 0;
                var dr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, S = Math.imul(Me, Ie), m = Math.imul(Me, pe), m = m + Math.imul(ae, Ie) | 0, C = Math.imul(ae, pe), S = S + Math.imul(xe, _e) | 0, m = m + Math.imul(xe, we) | 0, m = m + Math.imul(ne, _e) | 0, C = C + Math.imul(ne, we) | 0;
                var lr = (M + S | 0) + ((m & 8191) << 13) | 0;
                M = (C + (m >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, S = Math.imul(Me, _e), m = Math.imul(Me, we), m = m + Math.imul(ae, _e) | 0, C = Math.imul(ae, we);
                var pr = (M + S | 0) + ((m & 8191) << 13) | 0;
                return M = (C + (m >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, A[0] = Ge, A[1] = Je, A[2] = Ye, A[3] = Qe, A[4] = Ze, A[5] = er, A[6] = rr, A[7] = tr, A[8] = ir, A[9] = nr, A[10] = ar, A[11] = fr, A[12] = sr, A[13] = ur, A[14] = hr, A[15] = cr, A[16] = dr, A[17] = lr, A[18] = pr, M !== 0 && (A[19] = M, _.length++), _
            };
            Math.imul || (k = R);

            function I(y, t, c) {
                c.negative = t.negative ^ y.negative, c.length = y.length + t.length;
                for (var _ = 0, w = 0, q = 0; q < c.length - 1; q++) {
                    var A = w;
                    w = 0;
                    for (var M = _ & 67108863, S = Math.min(q, t.length - 1), m = Math.max(0, q - y.length + 1); m <= S; m++) {
                        var C = q - m,
                            L = y.words[C] | 0,
                            U = t.words[m] | 0,
                            K = L * U,
                            P = K & 67108863;
                        A = A + (K / 67108864 | 0) | 0, P = P + M | 0, M = P & 67108863, A = A + (P >>> 26) | 0, w += A >>> 26, A &= 67108863
                    }
                    c.words[q] = M, _ = A, A = w
                }
                return _ !== 0 ? c.words[q] = _ : c.length--, c._strip()
            }

            function $(y, t, c) {
                return I(y, t, c)
            }
            e.prototype.mulTo = function(t, c) {
                var _, w = this.length + t.length;
                return this.length === 10 && t.length === 10 ? _ = k(this, t, c) : w < 63 ? _ = R(this, t, c) : w < 1024 ? _ = I(this, t, c) : _ = $(this, t, c), _
            }, e.prototype.mul = function(t) {
                var c = new e(null);
                return c.words = new Array(this.length + t.length), this.mulTo(t, c)
            }, e.prototype.mulf = function(t) {
                var c = new e(null);
                return c.words = new Array(this.length + t.length), $(this, t, c)
            }, e.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }, e.prototype.imuln = function(t) {
                var c = t < 0;
                c && (t = -t), i(typeof t == "number"), i(t < 67108864);
                for (var _ = 0, w = 0; w < this.length; w++) {
                    var q = (this.words[w] | 0) * t,
                        A = (q & 67108863) + (_ & 67108863);
                    _ >>= 26, _ += q / 67108864 | 0, _ += A >>> 26, this.words[w] = A & 67108863
                }
                return _ !== 0 && (this.words[w] = _, this.length++), this.length = t === 0 ? 1 : this.length, c ? this.ineg() : this
            }, e.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }, e.prototype.sqr = function() {
                return this.mul(this)
            }, e.prototype.isqr = function() {
                return this.imul(this.clone())
            }, e.prototype.pow = function(t) {
                var c = E(t);
                if (c.length === 0) return new e(1);
                for (var _ = this, w = 0; w < c.length && c[w] === 0; w++, _ = _.sqr());
                if (++w < c.length)
                    for (var q = _.sqr(); w < c.length; w++, q = q.sqr()) c[w] !== 0 && (_ = _.mul(q));
                return _
            }, e.prototype.iushln = function(t) {
                i(typeof t == "number" && t >= 0);
                var c = t % 26,
                    _ = (t - c) / 26,
                    w = 67108863 >>> 26 - c << 26 - c,
                    q;
                if (c !== 0) {
                    var A = 0;
                    for (q = 0; q < this.length; q++) {
                        var M = this.words[q] & w,
                            S = (this.words[q] | 0) - M << c;
                        this.words[q] = S | A, A = M >>> 26 - c
                    }
                    A && (this.words[q] = A, this.length++)
                }
                if (_ !== 0) {
                    for (q = this.length - 1; q >= 0; q--) this.words[q + _] = this.words[q];
                    for (q = 0; q < _; q++) this.words[q] = 0;
                    this.length += _
                }
                return this._strip()
            }, e.prototype.ishln = function(t) {
                return i(this.negative === 0), this.iushln(t)
            }, e.prototype.iushrn = function(t, c, _) {
                i(typeof t == "number" && t >= 0);
                var w;
                c ? w = (c - c % 26) / 26 : w = 0;
                var q = t % 26,
                    A = Math.min((t - q) / 26, this.length),
                    M = 67108863 ^ 67108863 >>> q << q,
                    S = _;
                if (w -= A, w = Math.max(0, w), S) {
                    for (var m = 0; m < A; m++) S.words[m] = this.words[m];
                    S.length = A
                }
                if (A !== 0)
                    if (this.length > A)
                        for (this.length -= A, m = 0; m < this.length; m++) this.words[m] = this.words[m + A];
                    else this.words[0] = 0, this.length = 1;
                var C = 0;
                for (m = this.length - 1; m >= 0 && (C !== 0 || m >= w); m--) {
                    var L = this.words[m] | 0;
                    this.words[m] = C << 26 - q | L >>> q, C = L & M
                }
                return S && C !== 0 && (S.words[S.length++] = C), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
            }, e.prototype.ishrn = function(t, c, _) {
                return i(this.negative === 0), this.iushrn(t, c, _)
            }, e.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }, e.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }, e.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }, e.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }, e.prototype.testn = function(t) {
                i(typeof t == "number" && t >= 0);
                var c = t % 26,
                    _ = (t - c) / 26,
                    w = 1 << c;
                if (this.length <= _) return !1;
                var q = this.words[_];
                return !!(q & w)
            }, e.prototype.imaskn = function(t) {
                i(typeof t == "number" && t >= 0);
                var c = t % 26,
                    _ = (t - c) / 26;
                if (i(this.negative === 0, "imaskn works only with positive numbers"), this.length <= _) return this;
                if (c !== 0 && _++, this.length = Math.min(_, this.length), c !== 0) {
                    var w = 67108863 ^ 67108863 >>> c << c;
                    this.words[this.length - 1] &= w
                }
                return this._strip()
            }, e.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }, e.prototype.iaddn = function(t) {
                return i(typeof t == "number"), i(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
            }, e.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var c = 0; c < this.length && this.words[c] >= 67108864; c++) this.words[c] -= 67108864, c === this.length - 1 ? this.words[c + 1] = 1 : this.words[c + 1]++;
                return this.length = Math.max(this.length, c + 1), this
            }, e.prototype.isubn = function(t) {
                if (i(typeof t == "number"), i(t < 67108864), t < 0) return this.iaddn(-t);
                if (this.negative !== 0) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                if (this.words[0] -= t, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var c = 0; c < this.length && this.words[c] < 0; c++) this.words[c] += 67108864, this.words[c + 1] -= 1;
                return this._strip()
            }, e.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }, e.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }, e.prototype.iabs = function() {
                return this.negative = 0, this
            }, e.prototype.abs = function() {
                return this.clone().iabs()
            }, e.prototype._ishlnsubmul = function(t, c, _) {
                var w = t.length + _,
                    q;
                this._expand(w);
                var A, M = 0;
                for (q = 0; q < t.length; q++) {
                    A = (this.words[q + _] | 0) + M;
                    var S = (t.words[q] | 0) * c;
                    A -= S & 67108863, M = (A >> 26) - (S / 67108864 | 0), this.words[q + _] = A & 67108863
                }
                for (; q < this.length - _; q++) A = (this.words[q + _] | 0) + M, M = A >> 26, this.words[q + _] = A & 67108863;
                if (M === 0) return this._strip();
                for (i(M === -1), M = 0, q = 0; q < this.length; q++) A = -(this.words[q] | 0) + M, M = A >> 26, this.words[q] = A & 67108863;
                return this.negative = 1, this._strip()
            }, e.prototype._wordDiv = function(t, c) {
                var _ = this.length - t.length,
                    w = this.clone(),
                    q = t,
                    A = q.words[q.length - 1] | 0,
                    M = this._countBits(A);
                _ = 26 - M, _ !== 0 && (q = q.ushln(_), w.iushln(_), A = q.words[q.length - 1] | 0);
                var S = w.length - q.length,
                    m;
                if (c !== "mod") {
                    m = new e(null), m.length = S + 1, m.words = new Array(m.length);
                    for (var C = 0; C < m.length; C++) m.words[C] = 0
                }
                var L = w.clone()._ishlnsubmul(q, 1, S);
                L.negative === 0 && (w = L, m && (m.words[S] = 1));
                for (var U = S - 1; U >= 0; U--) {
                    var K = (w.words[q.length + U] | 0) * 67108864 + (w.words[q.length + U - 1] | 0);
                    for (K = Math.min(K / A | 0, 67108863), w._ishlnsubmul(q, K, U); w.negative !== 0;) K--, w.negative = 0, w._ishlnsubmul(q, 1, U), w.isZero() || (w.negative ^= 1);
                    m && (m.words[U] = K)
                }
                return m && m._strip(), w._strip(), c !== "div" && _ !== 0 && w.iushrn(_), {
                    div: m || null,
                    mod: w
                }
            }, e.prototype.divmod = function(t, c, _) {
                if (i(!t.isZero()), this.isZero()) return {
                    div: new e(0),
                    mod: new e(0)
                };
                var w, q, A;
                return this.negative !== 0 && t.negative === 0 ? (A = this.neg().divmod(t, c), c !== "mod" && (w = A.div.neg()), c !== "div" && (q = A.mod.neg(), _ && q.negative !== 0 && q.iadd(t)), {
                    div: w,
                    mod: q
                }) : this.negative === 0 && t.negative !== 0 ? (A = this.divmod(t.neg(), c), c !== "mod" && (w = A.div.neg()), {
                    div: w,
                    mod: A.mod
                }) : (this.negative & t.negative) !== 0 ? (A = this.neg().divmod(t.neg(), c), c !== "div" && (q = A.mod.neg(), _ && q.negative !== 0 && q.isub(t)), {
                    div: A.div,
                    mod: q
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new e(0),
                    mod: this
                } : t.length === 1 ? c === "div" ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : c === "mod" ? {
                    div: null,
                    mod: new e(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new e(this.modrn(t.words[0]))
                } : this._wordDiv(t, c)
            }, e.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }, e.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }, e.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }, e.prototype.divRound = function(t) {
                var c = this.divmod(t);
                if (c.mod.isZero()) return c.div;
                var _ = c.div.negative !== 0 ? c.mod.isub(t) : c.mod,
                    w = t.ushrn(1),
                    q = t.andln(1),
                    A = _.cmp(w);
                return A < 0 || q === 1 && A === 0 ? c.div : c.div.negative !== 0 ? c.div.isubn(1) : c.div.iaddn(1)
            }, e.prototype.modrn = function(t) {
                var c = t < 0;
                c && (t = -t), i(t <= 67108863);
                for (var _ = (1 << 26) % t, w = 0, q = this.length - 1; q >= 0; q--) w = (_ * w + (this.words[q] | 0)) % t;
                return c ? -w : w
            }, e.prototype.modn = function(t) {
                return this.modrn(t)
            }, e.prototype.idivn = function(t) {
                var c = t < 0;
                c && (t = -t), i(t <= 67108863);
                for (var _ = 0, w = this.length - 1; w >= 0; w--) {
                    var q = (this.words[w] | 0) + _ * 67108864;
                    this.words[w] = q / t | 0, _ = q % t
                }
                return this._strip(), c ? this.ineg() : this
            }, e.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }, e.prototype.egcd = function(t) {
                i(t.negative === 0), i(!t.isZero());
                var c = this,
                    _ = t.clone();
                c.negative !== 0 ? c = c.umod(t) : c = c.clone();
                for (var w = new e(1), q = new e(0), A = new e(0), M = new e(1), S = 0; c.isEven() && _.isEven();) c.iushrn(1), _.iushrn(1), ++S;
                for (var m = _.clone(), C = c.clone(); !c.isZero();) {
                    for (var L = 0, U = 1;
                        (c.words[0] & U) === 0 && L < 26; ++L, U <<= 1);
                    if (L > 0)
                        for (c.iushrn(L); L-- > 0;)(w.isOdd() || q.isOdd()) && (w.iadd(m), q.isub(C)), w.iushrn(1), q.iushrn(1);
                    for (var K = 0, P = 1;
                        (_.words[0] & P) === 0 && K < 26; ++K, P <<= 1);
                    if (K > 0)
                        for (_.iushrn(K); K-- > 0;)(A.isOdd() || M.isOdd()) && (A.iadd(m), M.isub(C)), A.iushrn(1), M.iushrn(1);
                    c.cmp(_) >= 0 ? (c.isub(_), w.isub(A), q.isub(M)) : (_.isub(c), A.isub(w), M.isub(q))
                }
                return {
                    a: A,
                    b: M,
                    gcd: _.iushln(S)
                }
            }, e.prototype._invmp = function(t) {
                i(t.negative === 0), i(!t.isZero());
                var c = this,
                    _ = t.clone();
                c.negative !== 0 ? c = c.umod(t) : c = c.clone();
                for (var w = new e(1), q = new e(0), A = _.clone(); c.cmpn(1) > 0 && _.cmpn(1) > 0;) {
                    for (var M = 0, S = 1;
                        (c.words[0] & S) === 0 && M < 26; ++M, S <<= 1);
                    if (M > 0)
                        for (c.iushrn(M); M-- > 0;) w.isOdd() && w.iadd(A), w.iushrn(1);
                    for (var m = 0, C = 1;
                        (_.words[0] & C) === 0 && m < 26; ++m, C <<= 1);
                    if (m > 0)
                        for (_.iushrn(m); m-- > 0;) q.isOdd() && q.iadd(A), q.iushrn(1);
                    c.cmp(_) >= 0 ? (c.isub(_), w.isub(q)) : (_.isub(c), q.isub(w))
                }
                var L;
                return c.cmpn(1) === 0 ? L = w : L = q, L.cmpn(0) < 0 && L.iadd(t), L
            }, e.prototype.gcd = function(t) {
                if (this.isZero()) return t.abs();
                if (t.isZero()) return this.abs();
                var c = this.clone(),
                    _ = t.clone();
                c.negative = 0, _.negative = 0;
                for (var w = 0; c.isEven() && _.isEven(); w++) c.iushrn(1), _.iushrn(1);
                do {
                    for (; c.isEven();) c.iushrn(1);
                    for (; _.isEven();) _.iushrn(1);
                    var q = c.cmp(_);
                    if (q < 0) {
                        var A = c;
                        c = _, _ = A
                    } else if (q === 0 || _.cmpn(1) === 0) break;
                    c.isub(_)
                } while (!0);
                return _.iushln(w)
            }, e.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }, e.prototype.isEven = function() {
                return (this.words[0] & 1) === 0
            }, e.prototype.isOdd = function() {
                return (this.words[0] & 1) === 1
            }, e.prototype.andln = function(t) {
                return this.words[0] & t
            }, e.prototype.bincn = function(t) {
                i(typeof t == "number");
                var c = t % 26,
                    _ = (t - c) / 26,
                    w = 1 << c;
                if (this.length <= _) return this._expand(_ + 1), this.words[_] |= w, this;
                for (var q = w, A = _; q !== 0 && A < this.length; A++) {
                    var M = this.words[A] | 0;
                    M += q, q = M >>> 26, M &= 67108863, this.words[A] = M
                }
                return q !== 0 && (this.words[A] = q, this.length++), this
            }, e.prototype.isZero = function() {
                return this.length === 1 && this.words[0] === 0
            }, e.prototype.cmpn = function(t) {
                var c = t < 0;
                if (this.negative !== 0 && !c) return -1;
                if (this.negative === 0 && c) return 1;
                this._strip();
                var _;
                if (this.length > 1) _ = 1;
                else {
                    c && (t = -t), i(t <= 67108863, "Number is too big");
                    var w = this.words[0] | 0;
                    _ = w === t ? 0 : w < t ? -1 : 1
                }
                return this.negative !== 0 ? -_ | 0 : _
            }, e.prototype.cmp = function(t) {
                if (this.negative !== 0 && t.negative === 0) return -1;
                if (this.negative === 0 && t.negative !== 0) return 1;
                var c = this.ucmp(t);
                return this.negative !== 0 ? -c | 0 : c
            }, e.prototype.ucmp = function(t) {
                if (this.length > t.length) return 1;
                if (this.length < t.length) return -1;
                for (var c = 0, _ = this.length - 1; _ >= 0; _--) {
                    var w = this.words[_] | 0,
                        q = t.words[_] | 0;
                    if (w !== q) {
                        w < q ? c = -1 : w > q && (c = 1);
                        break
                    }
                }
                return c
            }, e.prototype.gtn = function(t) {
                return this.cmpn(t) === 1
            }, e.prototype.gt = function(t) {
                return this.cmp(t) === 1
            }, e.prototype.gten = function(t) {
                return this.cmpn(t) >= 0
            }, e.prototype.gte = function(t) {
                return this.cmp(t) >= 0
            }, e.prototype.ltn = function(t) {
                return this.cmpn(t) === -1
            }, e.prototype.lt = function(t) {
                return this.cmp(t) === -1
            }, e.prototype.lten = function(t) {
                return this.cmpn(t) <= 0
            }, e.prototype.lte = function(t) {
                return this.cmp(t) <= 0
            }, e.prototype.eqn = function(t) {
                return this.cmpn(t) === 0
            }, e.prototype.eq = function(t) {
                return this.cmp(t) === 0
            }, e.red = function(t) {
                return new D(t)
            }, e.prototype.toRed = function(t) {
                return i(!this.red, "Already a number in reduction context"), i(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t)
            }, e.prototype.fromRed = function() {
                return i(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, e.prototype._forceRed = function(t) {
                return this.red = t, this
            }, e.prototype.forceRed = function(t) {
                return i(!this.red, "Already a number in reduction context"), this._forceRed(t)
            }, e.prototype.redAdd = function(t) {
                return i(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
            }, e.prototype.redIAdd = function(t) {
                return i(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
            }, e.prototype.redSub = function(t) {
                return i(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
            }, e.prototype.redISub = function(t) {
                return i(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
            }, e.prototype.redShl = function(t) {
                return i(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
            }, e.prototype.redMul = function(t) {
                return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
            }, e.prototype.redIMul = function(t) {
                return i(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
            }, e.prototype.redSqr = function() {
                return i(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, e.prototype.redISqr = function() {
                return i(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, e.prototype.redSqrt = function() {
                return i(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, e.prototype.redInvm = function() {
                return i(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, e.prototype.redNeg = function() {
                return i(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, e.prototype.redPow = function(t) {
                return i(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
            };
            var j = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function O(y, t) {
                this.name = y, this.p = new e(t, 16), this.n = this.p.bitLength(), this.k = new e(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }
            O.prototype._tmp = function() {
                var t = new e(null);
                return t.words = new Array(Math.ceil(this.n / 13)), t
            }, O.prototype.ireduce = function(t) {
                var c = t,
                    _;
                do this.split(c, this.tmp), c = this.imulK(c), c = c.iadd(this.tmp), _ = c.bitLength(); while (_ > this.n);
                var w = _ < this.n ? -1 : c.ucmp(this.p);
                return w === 0 ? (c.words[0] = 0, c.length = 1) : w > 0 ? c.isub(this.p) : c.strip !== void 0 ? c.strip() : c._strip(), c
            }, O.prototype.split = function(t, c) {
                t.iushrn(this.n, 0, c)
            }, O.prototype.imulK = function(t) {
                return t.imul(this.k)
            };

            function H() {
                O.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            f(H, O), H.prototype.split = function(t, c) {
                for (var _ = 4194303, w = Math.min(t.length, 9), q = 0; q < w; q++) c.words[q] = t.words[q];
                if (c.length = w, t.length <= 9) {
                    t.words[0] = 0, t.length = 1;
                    return
                }
                var A = t.words[9];
                for (c.words[c.length++] = A & _, q = 10; q < t.length; q++) {
                    var M = t.words[q] | 0;
                    t.words[q - 10] = (M & _) << 4 | A >>> 22, A = M
                }
                A >>>= 22, t.words[q - 10] = A, A === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9
            }, H.prototype.imulK = function(t) {
                t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                for (var c = 0, _ = 0; _ < t.length; _++) {
                    var w = t.words[_] | 0;
                    c += w * 977, t.words[_] = c & 67108863, c = w * 64 + (c / 67108864 | 0)
                }
                return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t
            };

            function X() {
                O.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            f(X, O);

            function W() {
                O.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            f(W, O);

            function J() {
                O.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            f(J, O), J.prototype.imulK = function(t) {
                for (var c = 0, _ = 0; _ < t.length; _++) {
                    var w = (t.words[_] | 0) * 19 + c,
                        q = w & 67108863;
                    w >>>= 26, t.words[_] = q, c = w
                }
                return c !== 0 && (t.words[t.length++] = c), t
            }, e._prime = function(t) {
                if (j[t]) return j[t];
                var c;
                if (t === "k256") c = new H;
                else if (t === "p224") c = new X;
                else if (t === "p192") c = new W;
                else if (t === "p25519") c = new J;
                else throw new Error("Unknown prime " + t);
                return j[t] = c, c
            };

            function D(y) {
                if (typeof y == "string") {
                    var t = e._prime(y);
                    this.m = t.p, this.prime = t
                } else i(y.gtn(1), "modulus must be greater than 1"), this.m = y, this.prime = null
            }
            D.prototype._verify1 = function(t) {
                i(t.negative === 0, "red works only with positives"), i(t.red, "red works only with red numbers")
            }, D.prototype._verify2 = function(t, c) {
                i((t.negative | c.negative) === 0, "red works only with positives"), i(t.red && t.red === c.red, "red works only with red numbers")
            }, D.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (u(t, t.umod(this.m)._forceRed(this)), t)
            }, D.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }, D.prototype.add = function(t, c) {
                this._verify2(t, c);
                var _ = t.add(c);
                return _.cmp(this.m) >= 0 && _.isub(this.m), _._forceRed(this)
            }, D.prototype.iadd = function(t, c) {
                this._verify2(t, c);
                var _ = t.iadd(c);
                return _.cmp(this.m) >= 0 && _.isub(this.m), _
            }, D.prototype.sub = function(t, c) {
                this._verify2(t, c);
                var _ = t.sub(c);
                return _.cmpn(0) < 0 && _.iadd(this.m), _._forceRed(this)
            }, D.prototype.isub = function(t, c) {
                this._verify2(t, c);
                var _ = t.isub(c);
                return _.cmpn(0) < 0 && _.iadd(this.m), _
            }, D.prototype.shl = function(t, c) {
                return this._verify1(t), this.imod(t.ushln(c))
            }, D.prototype.imul = function(t, c) {
                return this._verify2(t, c), this.imod(t.imul(c))
            }, D.prototype.mul = function(t, c) {
                return this._verify2(t, c), this.imod(t.mul(c))
            }, D.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }, D.prototype.sqr = function(t) {
                return this.mul(t, t)
            }, D.prototype.sqrt = function(t) {
                if (t.isZero()) return t.clone();
                var c = this.m.andln(3);
                if (i(c % 2 === 1), c === 3) {
                    var _ = this.m.add(new e(1)).iushrn(2);
                    return this.pow(t, _)
                }
                for (var w = this.m.subn(1), q = 0; !w.isZero() && w.andln(1) === 0;) q++, w.iushrn(1);
                i(!w.isZero());
                var A = new e(1).toRed(this),
                    M = A.redNeg(),
                    S = this.m.subn(1).iushrn(1),
                    m = this.m.bitLength();
                for (m = new e(2 * m * m).toRed(this); this.pow(m, S).cmp(M) !== 0;) m.redIAdd(M);
                for (var C = this.pow(m, w), L = this.pow(t, w.addn(1).iushrn(1)), U = this.pow(t, w), K = q; U.cmp(A) !== 0;) {
                    for (var P = U, N = 0; P.cmp(A) !== 0; N++) P = P.redSqr();
                    i(N < K);
                    var z = this.pow(C, new e(1).iushln(K - N - 1));
                    L = L.redMul(z), C = z.redSqr(), U = U.redMul(C), K = N
                }
                return L
            }, D.prototype.invm = function(t) {
                var c = t._invmp(this.m);
                return c.negative !== 0 ? (c.negative = 0, this.imod(c).redNeg()) : this.imod(c)
            }, D.prototype.pow = function(t, c) {
                if (c.isZero()) return new e(1).toRed(this);
                if (c.cmpn(1) === 0) return t.clone();
                var _ = 4,
                    w = new Array(1 << _);
                w[0] = new e(1).toRed(this), w[1] = t;
                for (var q = 2; q < w.length; q++) w[q] = this.mul(w[q - 1], t);
                var A = w[0],
                    M = 0,
                    S = 0,
                    m = c.bitLength() % 26;
                for (m === 0 && (m = 26), q = c.length - 1; q >= 0; q--) {
                    for (var C = c.words[q], L = m - 1; L >= 0; L--) {
                        var U = C >> L & 1;
                        if (A !== w[0] && (A = this.sqr(A)), U === 0 && M === 0) {
                            S = 0;
                            continue
                        }
                        M <<= 1, M |= U, S++, !(S !== _ && (q !== 0 || L !== 0)) && (A = this.mul(A, w[M]), S = 0, M = 0)
                    }
                    m = 26
                }
                return A
            }, D.prototype.convertTo = function(t) {
                var c = t.umod(this.m);
                return c === t ? c.clone() : c
            }, D.prototype.convertFrom = function(t) {
                var c = t.clone();
                return c.red = null, c
            }, e.mont = function(t) {
                return new B(t)
            };

            function B(y) {
                D.call(this, y), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new e(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            f(B, D), B.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }, B.prototype.convertFrom = function(t) {
                var c = this.imod(t.mul(this.rinv));
                return c.red = null, c
            }, B.prototype.imul = function(t, c) {
                if (t.isZero() || c.isZero()) return t.words[0] = 0, t.length = 1, t;
                var _ = t.imul(c),
                    w = _.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    q = _.isub(w).iushrn(this.shift),
                    A = q;
                return q.cmp(this.m) >= 0 ? A = q.isub(this.m) : q.cmpn(0) < 0 && (A = q.iadd(this.m)), A._forceRed(this)
            }, B.prototype.mul = function(t, c) {
                if (t.isZero() || c.isZero()) return new e(0)._forceRed(this);
                var _ = t.mul(c),
                    w = _.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    q = _.isub(w).iushrn(this.shift),
                    A = q;
                return q.cmp(this.m) >= 0 ? A = q.isub(this.m) : q.cmpn(0) < 0 && (A = q.iadd(this.m)), A._forceRed(this)
            }, B.prototype.invm = function(t) {
                var c = this.imod(t._invmp(this.m).mul(this.r2));
                return c._forceRed(this)
            }
        })(s, bn)
    }(bn$1)), bn$1.exports
}
var asn1$1 = {},
    asn1 = {},
    api = {},
    vmBrowserify = {},
    hasRequiredVmBrowserify;

function requireVmBrowserify() {
    return hasRequiredVmBrowserify || (hasRequiredVmBrowserify = 1, function(exports) {
        var indexOf = function(s, r) {
                if (s.indexOf) return s.indexOf(r);
                for (var n = 0; n < s.length; n++)
                    if (s[n] === r) return n;
                return -1
            },
            Object_keys = function(s) {
                if (Object.keys) return Object.keys(s);
                var r = [];
                for (var n in s) r.push(n);
                return r
            },
            forEach = function(s, r) {
                if (s.forEach) return s.forEach(r);
                for (var n = 0; n < s.length; n++) r(s[n], n, s)
            },
            defineProp = function() {
                try {
                    return Object.defineProperty({}, "_", {}),
                        function(s, r, n) {
                            Object.defineProperty(s, r, {
                                writable: !0,
                                enumerable: !1,
                                configurable: !0,
                                value: n
                            })
                        }
                } catch {
                    return function(r, n, i) {
                        r[n] = i
                    }
                }
            }(),
            globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];

        function Context() {}
        Context.prototype = {};
        var Script = exports.Script = function(r) {
            if (!(this instanceof Script)) return new Script(r);
            this.code = r
        };
        Script.prototype.runInContext = function(s) {
            if (!(s instanceof Context)) throw new TypeError("needs a 'context' argument.");
            var r = document.createElement("iframe");
            r.style || (r.style = {}), r.style.display = "none", document.body.appendChild(r);
            var n = r.contentWindow,
                i = n.eval,
                f = n.execScript;
            !i && f && (f.call(n, "null"), i = n.eval), forEach(Object_keys(s), function(l) {
                n[l] = s[l]
            }), forEach(globals, function(l) {
                s[l] && (n[l] = s[l])
            });
            var e = Object_keys(n),
                d = i.call(n, this.code);
            return forEach(Object_keys(n), function(l) {
                (l in s || indexOf(e, l) === -1) && (s[l] = n[l])
            }), forEach(globals, function(l) {
                l in s || defineProp(s, l, n[l])
            }), document.body.removeChild(r), d
        }, Script.prototype.runInThisContext = function() {
            return eval(this.code)
        }, Script.prototype.runInNewContext = function(s) {
            var r = Script.createContext(s),
                n = this.runInContext(r);
            return s && forEach(Object_keys(r), function(i) {
                s[i] = r[i]
            }), n
        }, forEach(Object_keys(Script.prototype), function(s) {
            exports[s] = Script[s] = function(r) {
                var n = Script(r);
                return n[s].apply(n, [].slice.call(arguments, 1))
            }
        }), exports.isContext = function(s) {
            return s instanceof Context
        }, exports.createScript = function(s) {
            return exports.Script(s)
        }, exports.createContext = Script.createContext = function(s) {
            var r = new Context;
            return typeof s == "object" && forEach(Object_keys(s), function(n) {
                r[n] = s[n]
            }), r
        }
    }(vmBrowserify)), vmBrowserify
}
var hasRequiredApi;

function requireApi() {
    return hasRequiredApi || (hasRequiredApi = 1, function(s) {
        var r = requireAsn1$1(),
            n = requireInherits_browser(),
            i = s;
        i.define = function(d, l) {
            return new f(d, l)
        };

        function f(e, d) {
            this.name = e, this.body = d, this.decoders = {}, this.encoders = {}
        }
        f.prototype._createNamed = function(d) {
            var l;
            try {
                l = requireVmBrowserify().runInThisContext("(function " + this.name + `(entity) {
  this._initNamed(entity);
})`)
            } catch {
                l = function(a) {
                    this._initNamed(a)
                }
            }
            return n(l, d), l.prototype._initNamed = function(a) {
                d.call(this, a)
            }, new l(this)
        }, f.prototype._getDecoder = function(d) {
            return d = d || "der", this.decoders.hasOwnProperty(d) || (this.decoders[d] = this._createNamed(r.decoders[d])), this.decoders[d]
        }, f.prototype.decode = function(d, l, v) {
            return this._getDecoder(l).decode(d, v)
        }, f.prototype._getEncoder = function(d) {
            return d = d || "der", this.encoders.hasOwnProperty(d) || (this.encoders[d] = this._createNamed(r.encoders[d])), this.encoders[d]
        }, f.prototype.encode = function(d, l, v) {
            return this._getEncoder(l).encode(d, v)
        }
    }(api)), api
}
var base = {},
    reporter = {},
    hasRequiredReporter;

function requireReporter() {
    if (hasRequiredReporter) return reporter;
    hasRequiredReporter = 1;
    var s = requireInherits_browser();

    function r(i) {
        this._reporterState = {
            obj: null,
            path: [],
            options: i || {},
            errors: []
        }
    }
    reporter.Reporter = r, r.prototype.isError = function(f) {
        return f instanceof n
    }, r.prototype.save = function() {
        var f = this._reporterState;
        return {
            obj: f.obj,
            pathLen: f.path.length
        }
    }, r.prototype.restore = function(f) {
        var e = this._reporterState;
        e.obj = f.obj, e.path = e.path.slice(0, f.pathLen)
    }, r.prototype.enterKey = function(f) {
        return this._reporterState.path.push(f)
    }, r.prototype.exitKey = function(f) {
        var e = this._reporterState;
        e.path = e.path.slice(0, f - 1)
    }, r.prototype.leaveKey = function(f, e, d) {
        var l = this._reporterState;
        this.exitKey(f), l.obj !== null && (l.obj[e] = d)
    }, r.prototype.path = function() {
        return this._reporterState.path.join("/")
    }, r.prototype.enterObject = function() {
        var f = this._reporterState,
            e = f.obj;
        return f.obj = {}, e
    }, r.prototype.leaveObject = function(f) {
        var e = this._reporterState,
            d = e.obj;
        return e.obj = f, d
    }, r.prototype.error = function(f) {
        var e, d = this._reporterState,
            l = f instanceof n;
        if (l ? e = f : e = new n(d.path.map(function(v) {
                return "[" + JSON.stringify(v) + "]"
            }).join(""), f.message || f, f.stack), !d.options.partial) throw e;
        return l || d.errors.push(e), e
    }, r.prototype.wrapResult = function(f) {
        var e = this._reporterState;
        return e.options.partial ? {
            result: this.isError(f) ? null : f,
            errors: e.errors
        } : f
    };

    function n(i, f) {
        this.path = i, this.rethrow(f)
    }
    return s(n, Error), n.prototype.rethrow = function(f) {
        if (this.message = f + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, n), !this.stack) try {
            throw new Error(this.message)
        } catch (e) {
            this.stack = e.stack
        }
        return this
    }, reporter
}
var buffer = {},
    hasRequiredBuffer;

function requireBuffer() {
    if (hasRequiredBuffer) return buffer;
    hasRequiredBuffer = 1;
    var s = requireInherits_browser(),
        r = requireBase().Reporter,
        n = requireDist$1().Buffer;

    function i(e, d) {
        if (r.call(this, d), !n.isBuffer(e)) {
            this.error("Input not Buffer");
            return
        }
        this.base = e, this.offset = 0, this.length = e.length
    }
    s(i, r), buffer.DecoderBuffer = i, i.prototype.save = function() {
        return {
            offset: this.offset,
            reporter: r.prototype.save.call(this)
        }
    }, i.prototype.restore = function(d) {
        var l = new i(this.base);
        return l.offset = d.offset, l.length = this.offset, this.offset = d.offset, r.prototype.restore.call(this, d.reporter), l
    }, i.prototype.isEmpty = function() {
        return this.offset === this.length
    }, i.prototype.readUInt8 = function(d) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(d || "DecoderBuffer overrun")
    }, i.prototype.skip = function(d, l) {
        if (!(this.offset + d <= this.length)) return this.error(l || "DecoderBuffer overrun");
        var v = new i(this.base);
        return v._reporterState = this._reporterState, v.offset = this.offset, v.length = this.offset + d, this.offset += d, v
    }, i.prototype.raw = function(d) {
        return this.base.slice(d ? d.offset : this.offset, this.length)
    };

    function f(e, d) {
        if (Array.isArray(e)) this.length = 0, this.value = e.map(function(l) {
            return l instanceof f || (l = new f(l, d)), this.length += l.length, l
        }, this);
        else if (typeof e == "number") {
            if (!(0 <= e && e <= 255)) return d.error("non-byte EncoderBuffer value");
            this.value = e, this.length = 1
        } else if (typeof e == "string") this.value = e, this.length = n.byteLength(e);
        else if (n.isBuffer(e)) this.value = e, this.length = e.length;
        else return d.error("Unsupported type: " + typeof e)
    }
    return buffer.EncoderBuffer = f, f.prototype.join = function(d, l) {
        return d || (d = new n(this.length)), l || (l = 0), this.length === 0 || (Array.isArray(this.value) ? this.value.forEach(function(v) {
            v.join(d, l), l += v.length
        }) : (typeof this.value == "number" ? d[l] = this.value : typeof this.value == "string" ? d.write(this.value, l) : n.isBuffer(this.value) && this.value.copy(d, l), l += this.length)), d
    }, buffer
}
var node, hasRequiredNode;

function requireNode() {
    if (hasRequiredNode) return node;
    hasRequiredNode = 1;
    var s = requireBase().Reporter,
        r = requireBase().EncoderBuffer,
        n = requireBase().DecoderBuffer,
        i = requireMinimalisticAssert(),
        f = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
        e = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(f),
        d = ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"];

    function l(a, u) {
        var h = {};
        this._baseState = h, h.enc = a, h.parent = u || null, h.children = null, h.tag = null, h.args = null, h.reverseArgs = null, h.choice = null, h.optional = !1, h.any = !1, h.obj = !1, h.use = null, h.useDecoder = null, h.key = null, h.default = null, h.explicit = null, h.implicit = null, h.contains = null, h.parent || (h.children = [], this._wrap())
    }
    node = l;
    var v = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    return l.prototype.clone = function() {
        var u = this._baseState,
            h = {};
        v.forEach(function(b) {
            h[b] = u[b]
        });
        var p = new this.constructor(h.parent);
        return p._baseState = h, p
    }, l.prototype._wrap = function() {
        var u = this._baseState;
        e.forEach(function(h) {
            this[h] = function() {
                var b = new this.constructor(this);
                return u.children.push(b), b[h].apply(b, arguments)
            }
        }, this)
    }, l.prototype._init = function(u) {
        var h = this._baseState;
        i(h.parent === null), u.call(this), h.children = h.children.filter(function(p) {
            return p._baseState.parent === this
        }, this), i.equal(h.children.length, 1, "Root node can have only one child")
    }, l.prototype._useArgs = function(u) {
        var h = this._baseState,
            p = u.filter(function(b) {
                return b instanceof this.constructor
            }, this);
        u = u.filter(function(b) {
            return !(b instanceof this.constructor)
        }, this), p.length !== 0 && (i(h.children === null), h.children = p, p.forEach(function(b) {
            b._baseState.parent = this
        }, this)), u.length !== 0 && (i(h.args === null), h.args = u, h.reverseArgs = u.map(function(b) {
            if (typeof b != "object" || b.constructor !== Object) return b;
            var g = {};
            return Object.keys(b).forEach(function(x) {
                x == (x | 0) && (x |= 0);
                var E = b[x];
                g[E] = x
            }), g
        }))
    }, d.forEach(function(a) {
        l.prototype[a] = function() {
            var h = this._baseState;
            throw new Error(a + " not implemented for encoding: " + h.enc)
        }
    }), f.forEach(function(a) {
        l.prototype[a] = function() {
            var h = this._baseState,
                p = Array.prototype.slice.call(arguments);
            return i(h.tag === null), h.tag = a, this._useArgs(p), this
        }
    }), l.prototype.use = function(u) {
        i(u);
        var h = this._baseState;
        return i(h.use === null), h.use = u, this
    }, l.prototype.optional = function() {
        var u = this._baseState;
        return u.optional = !0, this
    }, l.prototype.def = function(u) {
        var h = this._baseState;
        return i(h.default === null), h.default = u, h.optional = !0, this
    }, l.prototype.explicit = function(u) {
        var h = this._baseState;
        return i(h.explicit === null && h.implicit === null), h.explicit = u, this
    }, l.prototype.implicit = function(u) {
        var h = this._baseState;
        return i(h.explicit === null && h.implicit === null), h.implicit = u, this
    }, l.prototype.obj = function() {
        var u = this._baseState,
            h = Array.prototype.slice.call(arguments);
        return u.obj = !0, h.length !== 0 && this._useArgs(h), this
    }, l.prototype.key = function(u) {
        var h = this._baseState;
        return i(h.key === null), h.key = u, this
    }, l.prototype.any = function() {
        var u = this._baseState;
        return u.any = !0, this
    }, l.prototype.choice = function(u) {
        var h = this._baseState;
        return i(h.choice === null), h.choice = u, this._useArgs(Object.keys(u).map(function(p) {
            return u[p]
        })), this
    }, l.prototype.contains = function(u) {
        var h = this._baseState;
        return i(h.use === null), h.contains = u, this
    }, l.prototype._decode = function(u, h) {
        var p = this._baseState;
        if (p.parent === null) return u.wrapResult(p.children[0]._decode(u, h));
        var b = p.default,
            g = !0,
            x = null;
        if (p.key !== null && (x = u.enterKey(p.key)), p.optional) {
            var E = null;
            if (p.explicit !== null ? E = p.explicit : p.implicit !== null ? E = p.implicit : p.tag !== null && (E = p.tag), E === null && !p.any) {
                var R = u.save();
                try {
                    p.choice === null ? this._decodeGeneric(p.tag, u, h) : this._decodeChoice(u, h), g = !0
                } catch {
                    g = !1
                }
                u.restore(R)
            } else if (g = this._peekTag(u, E, p.any), u.isError(g)) return g
        }
        var k;
        if (p.obj && g && (k = u.enterObject()), g) {
            if (p.explicit !== null) {
                var I = this._decodeTag(u, p.explicit);
                if (u.isError(I)) return I;
                u = I
            }
            var $ = u.offset;
            if (p.use === null && p.choice === null) {
                if (p.any) var R = u.save();
                var j = this._decodeTag(u, p.implicit !== null ? p.implicit : p.tag, p.any);
                if (u.isError(j)) return j;
                p.any ? b = u.raw(R) : u = j
            }
            if (h && h.track && p.tag !== null && h.track(u.path(), $, u.length, "tagged"), h && h.track && p.tag !== null && h.track(u.path(), u.offset, u.length, "content"), p.any ? b = b : p.choice === null ? b = this._decodeGeneric(p.tag, u, h) : b = this._decodeChoice(u, h), u.isError(b)) return b;
            if (!p.any && p.choice === null && p.children !== null && p.children.forEach(function(X) {
                    X._decode(u, h)
                }), p.contains && (p.tag === "octstr" || p.tag === "bitstr")) {
                var O = new n(b);
                b = this._getUse(p.contains, u._reporterState.obj)._decode(O, h)
            }
        }
        return p.obj && g && (b = u.leaveObject(k)), p.key !== null && (b !== null || g === !0) ? u.leaveKey(x, p.key, b) : x !== null && u.exitKey(x), b
    }, l.prototype._decodeGeneric = function(u, h, p) {
        var b = this._baseState;
        return u === "seq" || u === "set" ? null : u === "seqof" || u === "setof" ? this._decodeList(h, u, b.args[0], p) : /str$/.test(u) ? this._decodeStr(h, u, p) : u === "objid" && b.args ? this._decodeObjid(h, b.args[0], b.args[1], p) : u === "objid" ? this._decodeObjid(h, null, null, p) : u === "gentime" || u === "utctime" ? this._decodeTime(h, u, p) : u === "null_" ? this._decodeNull(h, p) : u === "bool" ? this._decodeBool(h, p) : u === "objDesc" ? this._decodeStr(h, u, p) : u === "int" || u === "enum" ? this._decodeInt(h, b.args && b.args[0], p) : b.use !== null ? this._getUse(b.use, h._reporterState.obj)._decode(h, p) : h.error("unknown tag: " + u)
    }, l.prototype._getUse = function(u, h) {
        var p = this._baseState;
        return p.useDecoder = this._use(u, h), i(p.useDecoder._baseState.parent === null), p.useDecoder = p.useDecoder._baseState.children[0], p.implicit !== p.useDecoder._baseState.implicit && (p.useDecoder = p.useDecoder.clone(), p.useDecoder._baseState.implicit = p.implicit), p.useDecoder
    }, l.prototype._decodeChoice = function(u, h) {
        var p = this._baseState,
            b = null,
            g = !1;
        return Object.keys(p.choice).some(function(x) {
            var E = u.save(),
                R = p.choice[x];
            try {
                var k = R._decode(u, h);
                if (u.isError(k)) return !1;
                b = {
                    type: x,
                    value: k
                }, g = !0
            } catch {
                return u.restore(E), !1
            }
            return !0
        }, this), g ? b : u.error("Choice not matched")
    }, l.prototype._createEncoderBuffer = function(u) {
        return new r(u, this.reporter)
    }, l.prototype._encode = function(u, h, p) {
        var b = this._baseState;
        if (!(b.default !== null && b.default === u)) {
            var g = this._encodeValue(u, h, p);
            if (g !== void 0 && !this._skipDefault(g, h, p)) return g
        }
    }, l.prototype._encodeValue = function(u, h, p) {
        var b = this._baseState;
        if (b.parent === null) return b.children[0]._encode(u, h || new s);
        var R = null;
        if (this.reporter = h, b.optional && u === void 0)
            if (b.default !== null) u = b.default;
            else return;
        var g = null,
            x = !1;
        if (b.any) R = this._createEncoderBuffer(u);
        else if (b.choice) R = this._encodeChoice(u, h);
        else if (b.contains) g = this._getUse(b.contains, p)._encode(u, h), x = !0;
        else if (b.children) g = b.children.map(function($) {
            if ($._baseState.tag === "null_") return $._encode(null, h, u);
            if ($._baseState.key === null) return h.error("Child should have a key");
            var j = h.enterKey($._baseState.key);
            if (typeof u != "object") return h.error("Child expected, but input is not object");
            var O = $._encode(u[$._baseState.key], h, u);
            return h.leaveKey(j), O
        }, this).filter(function($) {
            return $
        }), g = this._createEncoderBuffer(g);
        else if (b.tag === "seqof" || b.tag === "setof") {
            if (!(b.args && b.args.length === 1)) return h.error("Too many args for : " + b.tag);
            if (!Array.isArray(u)) return h.error("seqof/setof, but data is not Array");
            var E = this.clone();
            E._baseState.implicit = null, g = this._createEncoderBuffer(u.map(function($) {
                var j = this._baseState;
                return this._getUse(j.args[0], u)._encode($, h)
            }, E))
        } else b.use !== null ? R = this._getUse(b.use, p)._encode(u, h) : (g = this._encodePrimitive(b.tag, u), x = !0);
        var R;
        if (!b.any && b.choice === null) {
            var k = b.implicit !== null ? b.implicit : b.tag,
                I = b.implicit === null ? "universal" : "context";
            k === null ? b.use === null && h.error("Tag could be omitted only for .use()") : b.use === null && (R = this._encodeComposite(k, x, I, g))
        }
        return b.explicit !== null && (R = this._encodeComposite(b.explicit, !1, "context", R)), R
    }, l.prototype._encodeChoice = function(u, h) {
        var p = this._baseState,
            b = p.choice[u.type];
        return b || i(!1, u.type + " not found in " + JSON.stringify(Object.keys(p.choice))), b._encode(u.value, h)
    }, l.prototype._encodePrimitive = function(u, h) {
        var p = this._baseState;
        if (/str$/.test(u)) return this._encodeStr(h, u);
        if (u === "objid" && p.args) return this._encodeObjid(h, p.reverseArgs[0], p.args[1]);
        if (u === "objid") return this._encodeObjid(h, null, null);
        if (u === "gentime" || u === "utctime") return this._encodeTime(h, u);
        if (u === "null_") return this._encodeNull();
        if (u === "int" || u === "enum") return this._encodeInt(h, p.args && p.reverseArgs[0]);
        if (u === "bool") return this._encodeBool(h);
        if (u === "objDesc") return this._encodeStr(h, u);
        throw new Error("Unsupported tag: " + u)
    }, l.prototype._isNumstr = function(u) {
        return /^[0-9 ]*$/.test(u)
    }, l.prototype._isPrintstr = function(u) {
        return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(u)
    }, node
}
var hasRequiredBase;

function requireBase() {
    return hasRequiredBase || (hasRequiredBase = 1, function(s) {
        var r = s;
        r.Reporter = requireReporter().Reporter, r.DecoderBuffer = requireBuffer().DecoderBuffer, r.EncoderBuffer = requireBuffer().EncoderBuffer, r.Node = requireNode()
    }(base)), base
}
var constants = {},
    der = {},
    hasRequiredDer$2;

function requireDer$2() {
    return hasRequiredDer$2 || (hasRequiredDer$2 = 1, function(s) {
        var r = requireConstants();
        s.tagClass = {
            0: "universal",
            1: "application",
            2: "context",
            3: "private"
        }, s.tagClassByName = r._reverse(s.tagClass), s.tag = {
            0: "end",
            1: "bool",
            2: "int",
            3: "bitstr",
            4: "octstr",
            5: "null_",
            6: "objid",
            7: "objDesc",
            8: "external",
            9: "real",
            10: "enum",
            11: "embed",
            12: "utf8str",
            13: "relativeOid",
            16: "seq",
            17: "set",
            18: "numstr",
            19: "printstr",
            20: "t61str",
            21: "videostr",
            22: "ia5str",
            23: "utctime",
            24: "gentime",
            25: "graphstr",
            26: "iso646str",
            27: "genstr",
            28: "unistr",
            29: "charstr",
            30: "bmpstr"
        }, s.tagByName = r._reverse(s.tag)
    }(der)), der
}
var hasRequiredConstants;

function requireConstants() {
    return hasRequiredConstants || (hasRequiredConstants = 1, function(s) {
        var r = s;
        r._reverse = function(i) {
            var f = {};
            return Object.keys(i).forEach(function(e) {
                (e | 0) == e && (e = e | 0);
                var d = i[e];
                f[d] = e
            }), f
        }, r.der = requireDer$2()
    }(constants)), constants
}
var decoders = {},
    der_1$1, hasRequiredDer$1;

function requireDer$1() {
    if (hasRequiredDer$1) return der_1$1;
    hasRequiredDer$1 = 1;
    var s = requireInherits_browser(),
        r = requireAsn1$1(),
        n = r.base,
        i = r.bignum,
        f = r.constants.der;

    function e(a) {
        this.enc = "der", this.name = a.name, this.entity = a, this.tree = new d, this.tree._init(a.body)
    }
    der_1$1 = e, e.prototype.decode = function(u, h) {
        return u instanceof n.DecoderBuffer || (u = new n.DecoderBuffer(u, h)), this.tree._decode(u, h)
    };

    function d(a) {
        n.Node.call(this, "der", a)
    }
    s(d, n.Node), d.prototype._peekTag = function(u, h, p) {
        if (u.isEmpty()) return !1;
        var b = u.save(),
            g = l(u, 'Failed to peek tag: "' + h + '"');
        return u.isError(g) ? g : (u.restore(b), g.tag === h || g.tagStr === h || g.tagStr + "of" === h || p)
    }, d.prototype._decodeTag = function(u, h, p) {
        var b = l(u, 'Failed to decode tag of "' + h + '"');
        if (u.isError(b)) return b;
        var g = v(u, b.primitive, 'Failed to get length of "' + h + '"');
        if (u.isError(g)) return g;
        if (!p && b.tag !== h && b.tagStr !== h && b.tagStr + "of" !== h) return u.error('Failed to match tag: "' + h + '"');
        if (b.primitive || g !== null) return u.skip(g, 'Failed to match body of: "' + h + '"');
        var x = u.save(),
            E = this._skipUntilEnd(u, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return u.isError(E) ? E : (g = u.offset - x.offset, u.restore(x), u.skip(g, 'Failed to match body of: "' + h + '"'))
    }, d.prototype._skipUntilEnd = function(u, h) {
        for (;;) {
            var p = l(u, h);
            if (u.isError(p)) return p;
            var b = v(u, p.primitive, h);
            if (u.isError(b)) return b;
            var g;
            if (p.primitive || b !== null ? g = u.skip(b) : g = this._skipUntilEnd(u, h), u.isError(g)) return g;
            if (p.tagStr === "end") break
        }
    }, d.prototype._decodeList = function(u, h, p, b) {
        for (var g = []; !u.isEmpty();) {
            var x = this._peekTag(u, "end");
            if (u.isError(x)) return x;
            var E = p.decode(u, "der", b);
            if (u.isError(E) && x) break;
            g.push(E)
        }
        return g
    }, d.prototype._decodeStr = function(u, h) {
        if (h === "bitstr") {
            var p = u.readUInt8();
            return u.isError(p) ? p : {
                unused: p,
                data: u.raw()
            }
        } else if (h === "bmpstr") {
            var b = u.raw();
            if (b.length % 2 === 1) return u.error("Decoding of string type: bmpstr length mismatch");
            for (var g = "", x = 0; x < b.length / 2; x++) g += String.fromCharCode(b.readUInt16BE(x * 2));
            return g
        } else if (h === "numstr") {
            var E = u.raw().toString("ascii");
            return this._isNumstr(E) ? E : u.error("Decoding of string type: numstr unsupported characters")
        } else {
            if (h === "octstr") return u.raw();
            if (h === "objDesc") return u.raw();
            if (h === "printstr") {
                var R = u.raw().toString("ascii");
                return this._isPrintstr(R) ? R : u.error("Decoding of string type: printstr unsupported characters")
            } else return /str$/.test(h) ? u.raw().toString() : u.error("Decoding of string type: " + h + " unsupported")
        }
    }, d.prototype._decodeObjid = function(u, h, p) {
        for (var b, g = [], x = 0; !u.isEmpty();) {
            var E = u.readUInt8();
            x <<= 7, x |= E & 127, (E & 128) === 0 && (g.push(x), x = 0)
        }
        E & 128 && g.push(x);
        var R = g[0] / 40 | 0,
            k = g[0] % 40;
        if (p ? b = g : b = [R, k].concat(g.slice(1)), h) {
            var I = h[b.join(" ")];
            I === void 0 && (I = h[b.join(".")]), I !== void 0 && (b = I)
        }
        return b
    }, d.prototype._decodeTime = function(u, h) {
        var p = u.raw().toString();
        if (h === "gentime") var b = p.slice(0, 4) | 0,
            g = p.slice(4, 6) | 0,
            x = p.slice(6, 8) | 0,
            E = p.slice(8, 10) | 0,
            R = p.slice(10, 12) | 0,
            k = p.slice(12, 14) | 0;
        else if (h === "utctime") {
            var b = p.slice(0, 2) | 0,
                g = p.slice(2, 4) | 0,
                x = p.slice(4, 6) | 0,
                E = p.slice(6, 8) | 0,
                R = p.slice(8, 10) | 0,
                k = p.slice(10, 12) | 0;
            b < 70 ? b = 2e3 + b : b = 1900 + b
        } else return u.error("Decoding " + h + " time is not supported yet");
        return Date.UTC(b, g - 1, x, E, R, k, 0)
    }, d.prototype._decodeNull = function(u) {
        return null
    }, d.prototype._decodeBool = function(u) {
        var h = u.readUInt8();
        return u.isError(h) ? h : h !== 0
    }, d.prototype._decodeInt = function(u, h) {
        var p = u.raw(),
            b = new i(p);
        return h && (b = h[b.toString(10)] || b), b
    }, d.prototype._use = function(u, h) {
        return typeof u == "function" && (u = u(h)), u._getDecoder("der").tree
    };

    function l(a, u) {
        var h = a.readUInt8(u);
        if (a.isError(h)) return h;
        var p = f.tagClass[h >> 6],
            b = (h & 32) === 0;
        if ((h & 31) === 31) {
            var g = h;
            for (h = 0;
                (g & 128) === 128;) {
                if (g = a.readUInt8(u), a.isError(g)) return g;
                h <<= 7, h |= g & 127
            }
        } else h &= 31;
        var x = f.tag[h];
        return {
            cls: p,
            primitive: b,
            tag: h,
            tagStr: x
        }
    }

    function v(a, u, h) {
        var p = a.readUInt8(h);
        if (a.isError(p)) return p;
        if (!u && p === 128) return null;
        if ((p & 128) === 0) return p;
        var b = p & 127;
        if (b > 4) return a.error("length octect is too long");
        p = 0;
        for (var g = 0; g < b; g++) {
            p <<= 8;
            var x = a.readUInt8(h);
            if (a.isError(x)) return x;
            p |= x
        }
        return p
    }
    return der_1$1
}
var pem$1, hasRequiredPem$1;

function requirePem$1() {
    if (hasRequiredPem$1) return pem$1;
    hasRequiredPem$1 = 1;
    var s = requireInherits_browser(),
        r = requireDist$1().Buffer,
        n = requireDer$1();

    function i(f) {
        n.call(this, f), this.enc = "pem"
    }
    return s(i, n), pem$1 = i, i.prototype.decode = function(e, d) {
        for (var l = e.toString().split(/[\r\n]+/g), v = d.label.toUpperCase(), a = /^-----(BEGIN|END) ([^-]+)-----$/, u = -1, h = -1, p = 0; p < l.length; p++) {
            var b = l[p].match(a);
            if (b !== null && b[2] === v)
                if (u === -1) {
                    if (b[1] !== "BEGIN") break;
                    u = p
                } else {
                    if (b[1] !== "END") break;
                    h = p;
                    break
                }
        }
        if (u === -1 || h === -1) throw new Error("PEM section not found for: " + v);
        var g = l.slice(u + 1, h).join("");
        g.replace(/[^a-z0-9\+\/=]+/gi, "");
        var x = new r(g, "base64");
        return n.prototype.decode.call(this, x, d)
    }, pem$1
}
var hasRequiredDecoders;

function requireDecoders() {
    return hasRequiredDecoders || (hasRequiredDecoders = 1, function(s) {
        var r = s;
        r.der = requireDer$1(), r.pem = requirePem$1()
    }(decoders)), decoders
}
var encoders = {},
    der_1, hasRequiredDer;

function requireDer() {
    if (hasRequiredDer) return der_1;
    hasRequiredDer = 1;
    var s = requireInherits_browser(),
        r = requireDist$1().Buffer,
        n = requireAsn1$1(),
        i = n.base,
        f = n.constants.der;

    function e(a) {
        this.enc = "der", this.name = a.name, this.entity = a, this.tree = new d, this.tree._init(a.body)
    }
    der_1 = e, e.prototype.encode = function(u, h) {
        return this.tree._encode(u, h).join()
    };

    function d(a) {
        i.Node.call(this, "der", a)
    }
    s(d, i.Node), d.prototype._encodeComposite = function(u, h, p, b) {
        var g = v(u, h, p, this.reporter);
        if (b.length < 128) {
            var R = new r(2);
            return R[0] = g, R[1] = b.length, this._createEncoderBuffer([R, b])
        }
        for (var x = 1, E = b.length; E >= 256; E >>= 8) x++;
        var R = new r(2 + x);
        R[0] = g, R[1] = 128 | x;
        for (var E = 1 + x, k = b.length; k > 0; E--, k >>= 8) R[E] = k & 255;
        return this._createEncoderBuffer([R, b])
    }, d.prototype._encodeStr = function(u, h) {
        if (h === "bitstr") return this._createEncoderBuffer([u.unused | 0, u.data]);
        if (h === "bmpstr") {
            for (var p = new r(u.length * 2), b = 0; b < u.length; b++) p.writeUInt16BE(u.charCodeAt(b), b * 2);
            return this._createEncoderBuffer(p)
        } else return h === "numstr" ? this._isNumstr(u) ? this._createEncoderBuffer(u) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : h === "printstr" ? this._isPrintstr(u) ? this._createEncoderBuffer(u) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(h) ? this._createEncoderBuffer(u) : h === "objDesc" ? this._createEncoderBuffer(u) : this.reporter.error("Encoding of string type: " + h + " unsupported")
    }, d.prototype._encodeObjid = function(u, h, p) {
        if (typeof u == "string") {
            if (!h) return this.reporter.error("string objid given, but no values map found");
            if (!h.hasOwnProperty(u)) return this.reporter.error("objid not found in values map");
            u = h[u].split(/[\s\.]+/g);
            for (var b = 0; b < u.length; b++) u[b] |= 0
        } else if (Array.isArray(u)) {
            u = u.slice();
            for (var b = 0; b < u.length; b++) u[b] |= 0
        }
        if (!Array.isArray(u)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(u));
        if (!p) {
            if (u[1] >= 40) return this.reporter.error("Second objid identifier OOB");
            u.splice(0, 2, u[0] * 40 + u[1])
        }
        for (var g = 0, b = 0; b < u.length; b++) {
            var x = u[b];
            for (g++; x >= 128; x >>= 7) g++
        }
        for (var E = new r(g), R = E.length - 1, b = u.length - 1; b >= 0; b--) {
            var x = u[b];
            for (E[R--] = x & 127;
                (x >>= 7) > 0;) E[R--] = 128 | x & 127
        }
        return this._createEncoderBuffer(E)
    };

    function l(a) {
        return a < 10 ? "0" + a : a
    }
    d.prototype._encodeTime = function(u, h) {
        var p, b = new Date(u);
        return h === "gentime" ? p = [l(b.getFullYear()), l(b.getUTCMonth() + 1), l(b.getUTCDate()), l(b.getUTCHours()), l(b.getUTCMinutes()), l(b.getUTCSeconds()), "Z"].join("") : h === "utctime" ? p = [l(b.getFullYear() % 100), l(b.getUTCMonth() + 1), l(b.getUTCDate()), l(b.getUTCHours()), l(b.getUTCMinutes()), l(b.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + h + " time is not supported yet"), this._encodeStr(p, "octstr")
    }, d.prototype._encodeNull = function() {
        return this._createEncoderBuffer("")
    }, d.prototype._encodeInt = function(u, h) {
        if (typeof u == "string") {
            if (!h) return this.reporter.error("String int or enum given, but no values map");
            if (!h.hasOwnProperty(u)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(u));
            u = h[u]
        }
        if (typeof u != "number" && !r.isBuffer(u)) {
            var p = u.toArray();
            !u.sign && p[0] & 128 && p.unshift(0), u = new r(p)
        }
        if (r.isBuffer(u)) {
            var b = u.length;
            u.length === 0 && b++;
            var x = new r(b);
            return u.copy(x), u.length === 0 && (x[0] = 0), this._createEncoderBuffer(x)
        }
        if (u < 128) return this._createEncoderBuffer(u);
        if (u < 256) return this._createEncoderBuffer([0, u]);
        for (var b = 1, g = u; g >= 256; g >>= 8) b++;
        for (var x = new Array(b), g = x.length - 1; g >= 0; g--) x[g] = u & 255, u >>= 8;
        return x[0] & 128 && x.unshift(0), this._createEncoderBuffer(new r(x))
    }, d.prototype._encodeBool = function(u) {
        return this._createEncoderBuffer(u ? 255 : 0)
    }, d.prototype._use = function(u, h) {
        return typeof u == "function" && (u = u(h)), u._getEncoder("der").tree
    }, d.prototype._skipDefault = function(u, h, p) {
        var b = this._baseState,
            g;
        if (b.default === null) return !1;
        var x = u.join();
        if (b.defaultBuffer === void 0 && (b.defaultBuffer = this._encodeValue(b.default, h, p).join()), x.length !== b.defaultBuffer.length) return !1;
        for (g = 0; g < x.length; g++)
            if (x[g] !== b.defaultBuffer[g]) return !1;
        return !0
    };

    function v(a, u, h, p) {
        var b;
        if (a === "seqof" ? a = "seq" : a === "setof" && (a = "set"), f.tagByName.hasOwnProperty(a)) b = f.tagByName[a];
        else if (typeof a == "number" && (a | 0) === a) b = a;
        else return p.error("Unknown tag: " + a);
        return b >= 31 ? p.error("Multi-octet tag encoding unsupported") : (u || (b |= 32), b |= f.tagClassByName[h || "universal"] << 6, b)
    }
    return der_1
}
var pem, hasRequiredPem;

function requirePem() {
    if (hasRequiredPem) return pem;
    hasRequiredPem = 1;
    var s = requireInherits_browser(),
        r = requireDer();

    function n(i) {
        r.call(this, i), this.enc = "pem"
    }
    return s(n, r), pem = n, n.prototype.encode = function(f, e) {
        for (var d = r.prototype.encode.call(this, f), l = d.toString("base64"), v = ["-----BEGIN " + e.label + "-----"], a = 0; a < l.length; a += 64) v.push(l.slice(a, a + 64));
        return v.push("-----END " + e.label + "-----"), v.join(`
`)
    }, pem
}
var hasRequiredEncoders;

function requireEncoders() {
    return hasRequiredEncoders || (hasRequiredEncoders = 1, function(s) {
        var r = s;
        r.der = requireDer(), r.pem = requirePem()
    }(encoders)), encoders
}
var hasRequiredAsn1$1;

function requireAsn1$1() {
    return hasRequiredAsn1$1 || (hasRequiredAsn1$1 = 1, function(s) {
        var r = s;
        r.bignum = requireBn$2(), r.define = requireApi().define, r.base = requireBase(), r.constants = requireConstants(), r.decoders = requireDecoders(), r.encoders = requireEncoders()
    }(asn1)), asn1
}
var certificate, hasRequiredCertificate;

function requireCertificate() {
    if (hasRequiredCertificate) return certificate;
    hasRequiredCertificate = 1;
    var s = requireAsn1$1(),
        r = s.define("Time", function() {
            this.choice({
                utcTime: this.utctime(),
                generalTime: this.gentime()
            })
        }),
        n = s.define("AttributeTypeValue", function() {
            this.seq().obj(this.key("type").objid(), this.key("value").any())
        }),
        i = s.define("AlgorithmIdentifier", function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
        }),
        f = s.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(i), this.key("subjectPublicKey").bitstr())
        }),
        e = s.define("RelativeDistinguishedName", function() {
            this.setof(n)
        }),
        d = s.define("RDNSequence", function() {
            this.seqof(e)
        }),
        l = s.define("Name", function() {
            this.choice({
                rdnSequence: this.use(d)
            })
        }),
        v = s.define("Validity", function() {
            this.seq().obj(this.key("notBefore").use(r), this.key("notAfter").use(r))
        }),
        a = s.define("Extension", function() {
            this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
        }),
        u = s.define("TBSCertificate", function() {
            this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(i), this.key("issuer").use(l), this.key("validity").use(v), this.key("subject").use(l), this.key("subjectPublicKeyInfo").use(f), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(a).optional())
        }),
        h = s.define("X509Certificate", function() {
            this.seq().obj(this.key("tbsCertificate").use(u), this.key("signatureAlgorithm").use(i), this.key("signatureValue").bitstr())
        });
    return certificate = h, certificate
}
var hasRequiredAsn1;

function requireAsn1() {
    if (hasRequiredAsn1) return asn1$1;
    hasRequiredAsn1 = 1;
    var s = requireAsn1$1();
    asn1$1.certificate = requireCertificate();
    var r = s.define("RSAPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
    });
    asn1$1.RSAPrivateKey = r;
    var n = s.define("RSAPublicKey", function() {
        this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
    });
    asn1$1.RSAPublicKey = n;
    var i = s.define("AlgorithmIdentifier", function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
        }),
        f = s.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(i), this.key("subjectPublicKey").bitstr())
        });
    asn1$1.PublicKey = f;
    var e = s.define("PrivateKeyInfo", function() {
        this.seq().obj(this.key("version").int(), this.key("algorithm").use(i), this.key("subjectPrivateKey").octstr())
    });
    asn1$1.PrivateKey = e;
    var d = s.define("EncryptedPrivateKeyInfo", function() {
        this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
    });
    asn1$1.EncryptedPrivateKey = d;
    var l = s.define("DSAPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
    });
    asn1$1.DSAPrivateKey = l, asn1$1.DSAparam = s.define("DSAparam", function() {
        this.int()
    });
    var v = s.define("ECParameters", function() {
            this.choice({
                namedCurve: this.objid()
            })
        }),
        a = s.define("ECPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(v), this.key("publicKey").optional().explicit(1).bitstr())
        });
    return asn1$1.ECPrivateKey = a, asn1$1.signature = s.define("signature", function() {
        this.seq().obj(this.key("r").int(), this.key("s").int())
    }), asn1$1
}
const require$$1 = {
    "2.16.840.1.101.3.4.1.1": "aes-128-ecb",
    "2.16.840.1.101.3.4.1.2": "aes-128-cbc",
    "2.16.840.1.101.3.4.1.3": "aes-128-ofb",
    "2.16.840.1.101.3.4.1.4": "aes-128-cfb",
    "2.16.840.1.101.3.4.1.21": "aes-192-ecb",
    "2.16.840.1.101.3.4.1.22": "aes-192-cbc",
    "2.16.840.1.101.3.4.1.23": "aes-192-ofb",
    "2.16.840.1.101.3.4.1.24": "aes-192-cfb",
    "2.16.840.1.101.3.4.1.41": "aes-256-ecb",
    "2.16.840.1.101.3.4.1.42": "aes-256-cbc",
    "2.16.840.1.101.3.4.1.43": "aes-256-ofb",
    "2.16.840.1.101.3.4.1.44": "aes-256-cfb"
};
var fixProc, hasRequiredFixProc;

function requireFixProc() {
    if (hasRequiredFixProc) return fixProc;
    hasRequiredFixProc = 1;
    var s = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
        r = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
        n = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
        i = requireEvp_bytestokey(),
        f = requireBrowser$7(),
        e = requireSafeBuffer$1().Buffer;
    return fixProc = function(d, l) {
        var v = d.toString(),
            a = v.match(s),
            u;
        if (a) {
            var p = "aes" + a[1],
                b = e.from(a[2], "hex"),
                g = e.from(a[3].replace(/[\r\n]/g, ""), "base64"),
                x = i(l, b.slice(0, 8), parseInt(a[1], 10)).key,
                E = [],
                R = f.createDecipheriv(p, x, b);
            E.push(R.update(g)), E.push(R.final()), u = e.concat(E)
        } else {
            var h = v.match(n);
            u = e.from(h[2].replace(/[\r\n]/g, ""), "base64")
        }
        var k = v.match(r)[1];
        return {
            tag: k,
            data: u
        }
    }, fixProc
}
var parseAsn1, hasRequiredParseAsn1;

function requireParseAsn1() {
    if (hasRequiredParseAsn1) return parseAsn1;
    hasRequiredParseAsn1 = 1;
    var s = requireAsn1(),
        r = require$$1,
        n = requireFixProc(),
        i = requireBrowser$7(),
        f = requireBrowser$8(),
        e = requireSafeBuffer$1().Buffer;

    function d(v, a) {
        var u = v.algorithm.decrypt.kde.kdeparams.salt,
            h = parseInt(v.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
            p = r[v.algorithm.decrypt.cipher.algo.join(".")],
            b = v.algorithm.decrypt.cipher.iv,
            g = v.subjectPrivateKey,
            x = parseInt(p.split("-")[1], 10) / 8,
            E = f.pbkdf2Sync(a, u, h, x, "sha1"),
            R = i.createDecipheriv(p, E, b),
            k = [];
        return k.push(R.update(g)), k.push(R.final()), e.concat(k)
    }

    function l(v) {
        var a;
        typeof v == "object" && !e.isBuffer(v) && (a = v.passphrase, v = v.key), typeof v == "string" && (v = e.from(v));
        var u = n(v, a),
            h = u.tag,
            p = u.data,
            b, g;
        switch (h) {
            case "CERTIFICATE":
                g = s.certificate.decode(p, "der").tbsCertificate.subjectPublicKeyInfo;
            case "PUBLIC KEY":
                switch (g || (g = s.PublicKey.decode(p, "der")), b = g.algorithm.algorithm.join("."), b) {
                    case "1.2.840.113549.1.1.1":
                        return s.RSAPublicKey.decode(g.subjectPublicKey.data, "der");
                    case "1.2.840.10045.2.1":
                        return g.subjectPrivateKey = g.subjectPublicKey, {
                            type: "ec",
                            data: g
                        };
                    case "1.2.840.10040.4.1":
                        return g.algorithm.params.pub_key = s.DSAparam.decode(g.subjectPublicKey.data, "der"), {
                            type: "dsa",
                            data: g.algorithm.params
                        };
                    default:
                        throw new Error("unknown key id " + b)
                }
            case "ENCRYPTED PRIVATE KEY":
                p = s.EncryptedPrivateKey.decode(p, "der"), p = d(p, a);
            case "PRIVATE KEY":
                switch (g = s.PrivateKey.decode(p, "der"), b = g.algorithm.algorithm.join("."), b) {
                    case "1.2.840.113549.1.1.1":
                        return s.RSAPrivateKey.decode(g.subjectPrivateKey, "der");
                    case "1.2.840.10045.2.1":
                        return {
                            curve: g.algorithm.curve, privateKey: s.ECPrivateKey.decode(g.subjectPrivateKey, "der").privateKey
                        };
                    case "1.2.840.10040.4.1":
                        return g.algorithm.params.priv_key = s.DSAparam.decode(g.subjectPrivateKey, "der"), {
                            type: "dsa",
                            params: g.algorithm.params
                        };
                    default:
                        throw new Error("unknown key id " + b)
                }
            case "RSA PUBLIC KEY":
                return s.RSAPublicKey.decode(p, "der");
            case "RSA PRIVATE KEY":
                return s.RSAPrivateKey.decode(p, "der");
            case "DSA PRIVATE KEY":
                return {
                    type: "dsa", params: s.DSAPrivateKey.decode(p, "der")
                };
            case "EC PRIVATE KEY":
                return p = s.ECPrivateKey.decode(p, "der"), {
                    curve: p.parameters.value,
                    privateKey: p.privateKey
                };
            default:
                throw new Error("unknown key type " + h)
        }
    }
    return l.signature = s.signature, parseAsn1 = l, parseAsn1
}
const require$$4 = {
    "1.3.132.0.10": "secp256k1",
    "1.3.132.0.33": "p224",
    "1.2.840.10045.3.1.1": "p192",
    "1.2.840.10045.3.1.7": "p256",
    "1.3.132.0.34": "p384",
    "1.3.132.0.35": "p521"
};
var hasRequiredSign;

function requireSign() {
    if (hasRequiredSign) return sign.exports;
    hasRequiredSign = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireBrowser$9(),
        n = requireBrowserifyRsa(),
        i = requireElliptic().ec,
        f = requireBn(),
        e = requireParseAsn1(),
        d = require$$4,
        l = 1;

    function v(R, k, I, $, j) {
        var O = e(k);
        if (O.curve) {
            if ($ !== "ecdsa" && $ !== "ecdsa/rsa") throw new Error("wrong private key type");
            return a(R, O)
        } else if (O.type === "dsa") {
            if ($ !== "dsa") throw new Error("wrong private key type");
            return u(R, O, I)
        }
        if ($ !== "rsa" && $ !== "ecdsa/rsa") throw new Error("wrong private key type");
        if (k.padding !== void 0 && k.padding !== l) throw new Error("illegal or unsupported padding mode");
        R = s.concat([j, R]);
        for (var H = O.modulus.byteLength(), X = [0, 1]; R.length + X.length + 1 < H;) X.push(255);
        X.push(0);
        for (var W = -1; ++W < R.length;) X.push(R[W]);
        var J = n(X, O);
        return J
    }

    function a(R, k) {
        var I = d[k.curve.join(".")];
        if (!I) throw new Error("unknown curve " + k.curve.join("."));
        var $ = new i(I),
            j = $.keyFromPrivate(k.privateKey),
            O = j.sign(R);
        return s.from(O.toDER())
    }

    function u(R, k, I) {
        for (var $ = k.params.priv_key, j = k.params.p, O = k.params.q, H = k.params.g, X = new f(0), W, J = b(R, O).mod(O), D = !1, B = p($, O, R, I); D === !1;) W = x(O, B, I), X = E(H, W, j, O), D = W.invm(O).imul(J.add($.mul(X))).mod(O), D.cmpn(0) === 0 && (D = !1, X = new f(0));
        return h(X, D)
    }

    function h(R, k) {
        R = R.toArray(), k = k.toArray(), R[0] & 128 && (R = [0].concat(R)), k[0] & 128 && (k = [0].concat(k));
        var I = R.length + k.length + 4,
            $ = [48, I, 2, R.length];
        return $ = $.concat(R, [2, k.length], k), s.from($)
    }

    function p(R, k, I, $) {
        if (R = s.from(R.toArray()), R.length < k.byteLength()) {
            var j = s.alloc(k.byteLength() - R.length);
            R = s.concat([j, R])
        }
        var O = I.length,
            H = g(I, k),
            X = s.alloc(O);
        X.fill(1);
        var W = s.alloc(O);
        return W = r($, W).update(X).update(s.from([0])).update(R).update(H).digest(), X = r($, W).update(X).digest(), W = r($, W).update(X).update(s.from([1])).update(R).update(H).digest(), X = r($, W).update(X).digest(), {
            k: W,
            v: X
        }
    }

    function b(R, k) {
        var I = new f(R),
            $ = (R.length << 3) - k.bitLength();
        return $ > 0 && I.ishrn($), I
    }

    function g(R, k) {
        R = b(R, k), R = R.mod(k);
        var I = s.from(R.toArray());
        if (I.length < k.byteLength()) {
            var $ = s.alloc(k.byteLength() - I.length);
            I = s.concat([$, I])
        }
        return I
    }

    function x(R, k, I) {
        var $, j;
        do {
            for ($ = s.alloc(0); $.length * 8 < R.bitLength();) k.v = r(I, k.k).update(k.v).digest(), $ = s.concat([$, k.v]);
            j = b($, R), k.k = r(I, k.k).update(k.v).update(s.from([0])).digest(), k.v = r(I, k.k).update(k.v).digest()
        } while (j.cmp(R) !== -1);
        return j
    }

    function E(R, k, I, $) {
        return R.toRed(f.mont(I)).redPow(k).fromRed().mod($)
    }
    return sign.exports = v, sign.exports.getKey = p, sign.exports.makeKey = x, sign.exports
}
var verify_1, hasRequiredVerify;

function requireVerify() {
    if (hasRequiredVerify) return verify_1;
    hasRequiredVerify = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireBn(),
        n = requireElliptic().ec,
        i = requireParseAsn1(),
        f = require$$4;

    function e(a, u, h, p, b) {
        var g = i(h);
        if (g.type === "ec") {
            if (p !== "ecdsa" && p !== "ecdsa/rsa") throw new Error("wrong public key type");
            return d(a, u, g)
        } else if (g.type === "dsa") {
            if (p !== "dsa") throw new Error("wrong public key type");
            return l(a, u, g)
        }
        if (p !== "rsa" && p !== "ecdsa/rsa") throw new Error("wrong public key type");
        u = s.concat([b, u]);
        for (var x = g.modulus.byteLength(), E = [1], R = 0; u.length + E.length + 2 < x;) E.push(255), R += 1;
        E.push(0);
        for (var k = -1; ++k < u.length;) E.push(u[k]);
        E = s.from(E);
        var I = r.mont(g.modulus);
        a = new r(a).toRed(I), a = a.redPow(new r(g.publicExponent)), a = s.from(a.fromRed().toArray());
        var $ = R < 8 ? 1 : 0;
        for (x = Math.min(a.length, E.length), a.length !== E.length && ($ = 1), k = -1; ++k < x;) $ |= a[k] ^ E[k];
        return $ === 0
    }

    function d(a, u, h) {
        var p = f[h.data.algorithm.curve.join(".")];
        if (!p) throw new Error("unknown curve " + h.data.algorithm.curve.join("."));
        var b = new n(p),
            g = h.data.subjectPrivateKey.data;
        return b.verify(u, a, g)
    }

    function l(a, u, h) {
        var p = h.data.p,
            b = h.data.q,
            g = h.data.g,
            x = h.data.pub_key,
            E = i.signature.decode(a, "der"),
            R = E.s,
            k = E.r;
        v(R, b), v(k, b);
        var I = r.mont(p),
            $ = R.invm(b),
            j = g.toRed(I).redPow(new r(u).mul($).mod(b)).fromRed().mul(x.toRed(I).redPow(k.mul($).mod(b)).fromRed()).mod(p).mod(b);
        return j.cmp(k) === 0
    }

    function v(a, u) {
        if (a.cmpn(0) <= 0) throw new Error("invalid sig");
        if (a.cmp(u) >= 0) throw new Error("invalid sig")
    }
    return verify_1 = e, verify_1
}
var browser$4, hasRequiredBrowser$4;

function requireBrowser$4() {
    if (hasRequiredBrowser$4) return browser$4;
    hasRequiredBrowser$4 = 1;
    var s = requireSafeBuffer$1().Buffer,
        r = requireBrowser$a(),
        n = requireReadableBrowser(),
        i = requireInherits_browser(),
        f = requireSign(),
        e = requireVerify(),
        d = require$$6;
    Object.keys(d).forEach(function(h) {
        d[h].id = s.from(d[h].id, "hex"), d[h.toLowerCase()] = d[h]
    });

    function l(h) {
        n.Writable.call(this);
        var p = d[h];
        if (!p) throw new Error("Unknown message digest");
        this._hashType = p.hash, this._hash = r(p.hash), this._tag = p.id, this._signType = p.sign
    }
    i(l, n.Writable), l.prototype._write = function(p, b, g) {
        this._hash.update(p), g()
    }, l.prototype.update = function(p, b) {
        return this._hash.update(typeof p == "string" ? s.from(p, b) : p), this
    }, l.prototype.sign = function(p, b) {
        this.end();
        var g = this._hash.digest(),
            x = f(g, p, this._hashType, this._signType, this._tag);
        return b ? x.toString(b) : x
    };

    function v(h) {
        n.Writable.call(this);
        var p = d[h];
        if (!p) throw new Error("Unknown message digest");
        this._hash = r(p.hash), this._tag = p.id, this._signType = p.sign
    }
    i(v, n.Writable), v.prototype._write = function(p, b, g) {
        this._hash.update(p), g()
    }, v.prototype.update = function(p, b) {
        return this._hash.update(typeof p == "string" ? s.from(p, b) : p), this
    }, v.prototype.verify = function(p, b, g) {
        var x = typeof b == "string" ? s.from(b, g) : b;
        this.end();
        var E = this._hash.digest();
        return e(x, E, p, this._signType, this._tag)
    };

    function a(h) {
        return new l(h)
    }

    function u(h) {
        return new v(h)
    }
    return browser$4 = {
        Sign: a,
        Verify: u,
        createSign: a,
        createVerify: u
    }, browser$4
}
var browser$3, hasRequiredBrowser$3;

function requireBrowser$3() {
    if (hasRequiredBrowser$3) return browser$3;
    hasRequiredBrowser$3 = 1;
    var s = requireElliptic(),
        r = requireBn$2();
    browser$3 = function(d) {
        return new i(d)
    };
    var n = {
        secp256k1: {
            name: "secp256k1",
            byteLength: 32
        },
        secp224r1: {
            name: "p224",
            byteLength: 28
        },
        prime256v1: {
            name: "p256",
            byteLength: 32
        },
        prime192v1: {
            name: "p192",
            byteLength: 24
        },
        ed25519: {
            name: "ed25519",
            byteLength: 32
        },
        secp384r1: {
            name: "p384",
            byteLength: 48
        },
        secp521r1: {
            name: "p521",
            byteLength: 66
        }
    };
    n.p224 = n.secp224r1, n.p256 = n.secp256r1 = n.prime256v1, n.p192 = n.secp192r1 = n.prime192v1, n.p384 = n.secp384r1, n.p521 = n.secp521r1;

    function i(e) {
        this.curveType = n[e], this.curveType || (this.curveType = {
            name: e
        }), this.curve = new s.ec(this.curveType.name), this.keys = void 0
    }
    i.prototype.generateKeys = function(e, d) {
        return this.keys = this.curve.genKeyPair(), this.getPublicKey(e, d)
    }, i.prototype.computeSecret = function(e, d, l) {
        d = d || "utf8", Buffer.isBuffer(e) || (e = new Buffer(e, d));
        var v = this.curve.keyFromPublic(e).getPublic(),
            a = v.mul(this.keys.getPrivate()).getX();
        return f(a, l, this.curveType.byteLength)
    }, i.prototype.getPublicKey = function(e, d) {
        var l = this.keys.getPublic(d === "compressed", !0);
        return d === "hybrid" && (l[l.length - 1] % 2 ? l[0] = 7 : l[0] = 6), f(l, e)
    }, i.prototype.getPrivateKey = function(e) {
        return f(this.keys.getPrivate(), e)
    }, i.prototype.setPublicKey = function(e, d) {
        return d = d || "utf8", Buffer.isBuffer(e) || (e = new Buffer(e, d)), this.keys._importPublic(e), this
    }, i.prototype.setPrivateKey = function(e, d) {
        d = d || "utf8", Buffer.isBuffer(e) || (e = new Buffer(e, d));
        var l = new r(e);
        return l = l.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(l), this
    };

    function f(e, d, l) {
        Array.isArray(e) || (e = e.toArray());
        var v = new Buffer(e);
        if (l && v.length < l) {
            var a = new Buffer(l - v.length);
            a.fill(0), v = Buffer.concat([a, v])
        }
        return d ? v.toString(d) : v
    }
    return browser$3
}
var browser$2 = {},
    mgf, hasRequiredMgf;

function requireMgf() {
    if (hasRequiredMgf) return mgf;
    hasRequiredMgf = 1;
    var s = requireBrowser$a(),
        r = requireSafeBuffer$1().Buffer;
    mgf = function(i, f) {
        for (var e = r.alloc(0), d = 0, l; e.length < f;) l = n(d++), e = r.concat([e, s("sha1").update(i).update(l).digest()]);
        return e.slice(0, f)
    };

    function n(i) {
        var f = r.allocUnsafe(4);
        return f.writeUInt32BE(i, 0), f
    }
    return mgf
}
var xor$1, hasRequiredXor;

function requireXor() {
    return hasRequiredXor || (hasRequiredXor = 1, xor$1 = function(r, n) {
        for (var i = r.length, f = -1; ++f < i;) r[f] ^= n[f];
        return r
    }), xor$1
}
var withPublic_1, hasRequiredWithPublic;

function requireWithPublic() {
    if (hasRequiredWithPublic) return withPublic_1;
    hasRequiredWithPublic = 1;
    var s = requireBn$2(),
        r = requireSafeBuffer$1().Buffer;

    function n(i, f) {
        return r.from(i.toRed(s.mont(f.modulus)).redPow(new s(f.publicExponent)).fromRed().toArray())
    }
    return withPublic_1 = n, withPublic_1
}
var publicEncrypt, hasRequiredPublicEncrypt;

function requirePublicEncrypt() {
    if (hasRequiredPublicEncrypt) return publicEncrypt;
    hasRequiredPublicEncrypt = 1;
    var s = requireParseAsn1(),
        r = requireBrowser$b(),
        n = requireBrowser$a(),
        i = requireMgf(),
        f = requireXor(),
        e = requireBn$2(),
        d = requireWithPublic(),
        l = requireBrowserifyRsa(),
        v = requireSafeBuffer$1().Buffer;
    publicEncrypt = function(b, g, x) {
        var E;
        b.padding ? E = b.padding : x ? E = 1 : E = 4;
        var R = s(b),
            k;
        if (E === 4) k = a(R, g);
        else if (E === 1) k = u(R, g, x);
        else if (E === 3) {
            if (k = new e(g), k.cmp(R.modulus) >= 0) throw new Error("data too long for modulus")
        } else throw new Error("unknown padding");
        return x ? l(k, R) : d(k, R)
    };

    function a(p, b) {
        var g = p.modulus.byteLength(),
            x = b.length,
            E = n("sha1").update(v.alloc(0)).digest(),
            R = E.length,
            k = 2 * R;
        if (x > g - k - 2) throw new Error("message too long");
        var I = v.alloc(g - x - k - 2),
            $ = g - R - 1,
            j = r(R),
            O = f(v.concat([E, I, v.alloc(1, 1), b], $), i(j, $)),
            H = f(j, i(O, R));
        return new e(v.concat([v.alloc(1), H, O], g))
    }

    function u(p, b, g) {
        var x = b.length,
            E = p.modulus.byteLength();
        if (x > E - 11) throw new Error("message too long");
        var R;
        return g ? R = v.alloc(E - x - 3, 255) : R = h(E - x - 3), new e(v.concat([v.from([0, g ? 1 : 2]), R, v.alloc(1), b], E))
    }

    function h(p) {
        for (var b = v.allocUnsafe(p), g = 0, x = r(p * 2), E = 0, R; g < p;) E === x.length && (x = r(p * 2), E = 0), R = x[E++], R && (b[g++] = R);
        return b
    }
    return publicEncrypt
}
var privateDecrypt, hasRequiredPrivateDecrypt;

function requirePrivateDecrypt() {
    if (hasRequiredPrivateDecrypt) return privateDecrypt;
    hasRequiredPrivateDecrypt = 1;
    var s = requireParseAsn1(),
        r = requireMgf(),
        n = requireXor(),
        i = requireBn$2(),
        f = requireBrowserifyRsa(),
        e = requireBrowser$a(),
        d = requireWithPublic(),
        l = requireSafeBuffer$1().Buffer;
    privateDecrypt = function(p, b, g) {
        var x;
        p.padding ? x = p.padding : g ? x = 1 : x = 4;
        var E = s(p),
            R = E.modulus.byteLength();
        if (b.length > R || new i(b).cmp(E.modulus) >= 0) throw new Error("decryption error");
        var k;
        g ? k = d(new i(b), E) : k = f(b, E);
        var I = l.alloc(R - k.length);
        if (k = l.concat([I, k], R), x === 4) return v(E, k);
        if (x === 1) return a(E, k, g);
        if (x === 3) return k;
        throw new Error("unknown padding")
    };

    function v(h, p) {
        var b = h.modulus.byteLength(),
            g = e("sha1").update(l.alloc(0)).digest(),
            x = g.length;
        if (p[0] !== 0) throw new Error("decryption error");
        var E = p.slice(1, x + 1),
            R = p.slice(x + 1),
            k = n(E, r(R, x)),
            I = n(R, r(k, b - x - 1));
        if (u(g, I.slice(0, x))) throw new Error("decryption error");
        for (var $ = x; I[$] === 0;) $++;
        if (I[$++] !== 1) throw new Error("decryption error");
        return I.slice($)
    }

    function a(h, p, b) {
        for (var g = p.slice(0, 2), x = 2, E = 0; p[x++] !== 0;)
            if (x >= p.length) {
                E++;
                break
            } var R = p.slice(2, x - 1);
        if ((g.toString("hex") !== "0002" && !b || g.toString("hex") !== "0001" && b) && E++, R.length < 8 && E++, E) throw new Error("decryption error");
        return p.slice(x)
    }

    function u(h, p) {
        h = l.from(h), p = l.from(p);
        var b = 0,
            g = h.length;
        h.length !== p.length && (b++, g = Math.min(h.length, p.length));
        for (var x = -1; ++x < g;) b += h[x] ^ p[x];
        return b
    }
    return privateDecrypt
}
var hasRequiredBrowser$2;

function requireBrowser$2() {
    return hasRequiredBrowser$2 || (hasRequiredBrowser$2 = 1, function(s) {
        s.publicEncrypt = requirePublicEncrypt(), s.privateDecrypt = requirePrivateDecrypt(), s.privateEncrypt = function(n, i) {
            return s.publicEncrypt(n, i, !0)
        }, s.publicDecrypt = function(n, i) {
            return s.privateDecrypt(n, i, !0)
        }
    }(browser$2)), browser$2
}
var browser$1 = {},
    hasRequiredBrowser$1;

function requireBrowser$1() {
    if (hasRequiredBrowser$1) return browser$1;
    hasRequiredBrowser$1 = 1;

    function s() {
        throw new Error(`secure random number generation not supported by this browser
use chrome, FireFox or Internet Explorer 11`)
    }
    var r = requireSafeBuffer$1(),
        n = requireBrowser$b(),
        i = r.Buffer,
        f = r.kMaxLength,
        e = commonjsGlobal.crypto || commonjsGlobal.msCrypto,
        d = Math.pow(2, 32) - 1;

    function l(p, b) {
        if (typeof p != "number" || p !== p) throw new TypeError("offset must be a number");
        if (p > d || p < 0) throw new TypeError("offset must be a uint32");
        if (p > f || p > b) throw new RangeError("offset out of range")
    }

    function v(p, b, g) {
        if (typeof p != "number" || p !== p) throw new TypeError("size must be a number");
        if (p > d || p < 0) throw new TypeError("size must be a uint32");
        if (p + b > g || p > f) throw new RangeError("buffer too small")
    }
    e && e.getRandomValues || !process$1.browser ? (browser$1.randomFill = a, browser$1.randomFillSync = h) : (browser$1.randomFill = s, browser$1.randomFillSync = s);

    function a(p, b, g, x) {
        if (!i.isBuffer(p) && !(p instanceof commonjsGlobal.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
        if (typeof b == "function") x = b, b = 0, g = p.length;
        else if (typeof g == "function") x = g, g = p.length - b;
        else if (typeof x != "function") throw new TypeError('"cb" argument must be a function');
        return l(b, p.length), v(g, b, p.length), u(p, b, g, x)
    }

    function u(p, b, g, x) {
        if (process$1.browser) {
            var E = p.buffer,
                R = new Uint8Array(E, b, g);
            if (e.getRandomValues(R), x) {
                process$1.nextTick(function() {
                    x(null, p)
                });
                return
            }
            return p
        }
        if (x) {
            n(g, function(I, $) {
                if (I) return x(I);
                $.copy(p, b), x(null, p)
            });
            return
        }
        var k = n(g);
        return k.copy(p, b), p
    }

    function h(p, b, g) {
        if (typeof b > "u" && (b = 0), !i.isBuffer(p) && !(p instanceof commonjsGlobal.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
        return l(b, p.length), g === void 0 && (g = p.length - b), v(g, b, p.length), u(p, b, g)
    }
    return browser$1
}
var hasRequiredCryptoBrowserify;

function requireCryptoBrowserify() {
    if (hasRequiredCryptoBrowserify) return cryptoBrowserify;
    hasRequiredCryptoBrowserify = 1, cryptoBrowserify.randomBytes = cryptoBrowserify.rng = cryptoBrowserify.pseudoRandomBytes = cryptoBrowserify.prng = requireBrowser$b(), cryptoBrowserify.createHash = cryptoBrowserify.Hash = requireBrowser$a(), cryptoBrowserify.createHmac = cryptoBrowserify.Hmac = requireBrowser$9();
    var s = requireAlgos(),
        r = Object.keys(s),
        n = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(r);
    cryptoBrowserify.getHashes = function() {
        return n
    };
    var i = requireBrowser$8();
    cryptoBrowserify.pbkdf2 = i.pbkdf2, cryptoBrowserify.pbkdf2Sync = i.pbkdf2Sync;
    var f = requireBrowser$6();
    cryptoBrowserify.Cipher = f.Cipher, cryptoBrowserify.createCipher = f.createCipher, cryptoBrowserify.Cipheriv = f.Cipheriv, cryptoBrowserify.createCipheriv = f.createCipheriv, cryptoBrowserify.Decipher = f.Decipher, cryptoBrowserify.createDecipher = f.createDecipher, cryptoBrowserify.Decipheriv = f.Decipheriv, cryptoBrowserify.createDecipheriv = f.createDecipheriv, cryptoBrowserify.getCiphers = f.getCiphers, cryptoBrowserify.listCiphers = f.listCiphers;
    var e = requireBrowser$5();
    cryptoBrowserify.DiffieHellmanGroup = e.DiffieHellmanGroup, cryptoBrowserify.createDiffieHellmanGroup = e.createDiffieHellmanGroup, cryptoBrowserify.getDiffieHellman = e.getDiffieHellman, cryptoBrowserify.createDiffieHellman = e.createDiffieHellman, cryptoBrowserify.DiffieHellman = e.DiffieHellman;
    var d = requireBrowser$4();
    cryptoBrowserify.createSign = d.createSign, cryptoBrowserify.Sign = d.Sign, cryptoBrowserify.createVerify = d.createVerify, cryptoBrowserify.Verify = d.Verify, cryptoBrowserify.createECDH = requireBrowser$3();
    var l = requireBrowser$2();
    cryptoBrowserify.publicEncrypt = l.publicEncrypt, cryptoBrowserify.privateEncrypt = l.privateEncrypt, cryptoBrowserify.publicDecrypt = l.publicDecrypt, cryptoBrowserify.privateDecrypt = l.privateDecrypt;
    var v = requireBrowser$1();
    return cryptoBrowserify.randomFill = v.randomFill, cryptoBrowserify.randomFillSync = v.randomFillSync, cryptoBrowserify.createCredentials = function() {
        throw new Error(`sorry, createCredentials is not implemented yet
we accept pull requests
https://github.com/browserify/crypto-browserify`)
    }, cryptoBrowserify.constants = {
        DH_CHECK_P_NOT_SAFE_PRIME: 2,
        DH_CHECK_P_NOT_PRIME: 1,
        DH_UNABLE_TO_CHECK_GENERATOR: 4,
        DH_NOT_SUITABLE_GENERATOR: 8,
        NPN_ENABLED: 1,
        ALPN_ENABLED: 1,
        RSA_PKCS1_PADDING: 1,
        RSA_SSLV23_PADDING: 2,
        RSA_NO_PADDING: 3,
        RSA_PKCS1_OAEP_PADDING: 4,
        RSA_X931_PADDING: 5,
        RSA_PKCS1_PSS_PADDING: 6,
        POINT_CONVERSION_COMPRESSED: 2,
        POINT_CONVERSION_UNCOMPRESSED: 4,
        POINT_CONVERSION_HYBRID: 6
    }, cryptoBrowserify
}
var dist, hasRequiredDist;

function requireDist() {
    if (hasRequiredDist) return dist;
    hasRequiredDist = 1;
    var s = requireCryptoBrowserify(),
        r = function() {
            function n(i) {
                var f = this;
                this.deriveKey = function(e, d) {
                    var l = Object.assign({}, n.defaultDeriveKeyOpts, d),
                        v = l.salt,
                        a = l.iterations,
                        u = l.digest;
                    return s.pbkdf2Sync(e, v, a, 32, u)
                }, this.encryptString = function(e, d) {
                    var l = f.deriveKey(d, f._deriveKeyOptions),
                        v = s.randomBytes(16),
                        a = s.createCipheriv("aes-256-gcm", l, v),
                        u = a.update(e.toString(), "utf8", "base64");
                    u += a.final("base64");
                    var h = Buffer.from(u).toString("hex");
                    return v.toString("hex") + ":" + h
                }, this.decryptString = function(e, d) {
                    var l = f.deriveKey(d, f._deriveKeyOptions),
                        v = e.toString().split(":");
                    if (v.length !== 2) throw new Error("Incorrect format for encrypted string: " + e);
                    var a = v[0],
                        u = v[1],
                        h = Buffer.from(a, "hex"),
                        p = Buffer.from(u, "hex").toString();
                    return s.createDecipheriv("aes-256-gcm", l, h).update(p, "base64").toString()
                }, i && (this._deriveKeyOptions = i)
            }
            return n.defaultDeriveKeyOpts = {
                salt: "s41t",
                iterations: 1,
                digest: "sha512"
            }, n
        }();
    return dist = r, dist
}
var distExports = requireDist();
const StringCrypto = getDefaultExportFromCjs(distExports);
var F = function() {
        return !1
    },
    T = function() {
        return !0
    };
const __ = {
    "@@functional/placeholder": !0
};

function _isPlaceholder(s) {
    return s != null && typeof s == "object" && s["@@functional/placeholder"] === !0
}

function _curry1(s) {
    return function r(n) {
        return arguments.length === 0 || _isPlaceholder(n) ? r : s.apply(this, arguments)
    }
}

function _curry2(s) {
    return function r(n, i) {
        switch (arguments.length) {
            case 0:
                return r;
            case 1:
                return _isPlaceholder(n) ? r : _curry1(function(f) {
                    return s(n, f)
                });
            default:
                return _isPlaceholder(n) && _isPlaceholder(i) ? r : _isPlaceholder(n) ? _curry1(function(f) {
                    return s(f, i)
                }) : _isPlaceholder(i) ? _curry1(function(f) {
                    return s(n, f)
                }) : s(n, i)
        }
    }
}
var add = _curry2(function s(r, n) {
    return Number(r) + Number(n)
});

function _concat(s, r) {
    s = s || [], r = r || [];
    var n, i = s.length,
        f = r.length,
        e = [];
    for (n = 0; n < i;) e[e.length] = s[n], n += 1;
    for (n = 0; n < f;) e[e.length] = r[n], n += 1;
    return e
}

function _arity(s, r) {
    switch (s) {
        case 0:
            return function() {
                return r.apply(this, arguments)
            };
        case 1:
            return function(n) {
                return r.apply(this, arguments)
            };
        case 2:
            return function(n, i) {
                return r.apply(this, arguments)
            };
        case 3:
            return function(n, i, f) {
                return r.apply(this, arguments)
            };
        case 4:
            return function(n, i, f, e) {
                return r.apply(this, arguments)
            };
        case 5:
            return function(n, i, f, e, d) {
                return r.apply(this, arguments)
            };
        case 6:
            return function(n, i, f, e, d, l) {
                return r.apply(this, arguments)
            };
        case 7:
            return function(n, i, f, e, d, l, v) {
                return r.apply(this, arguments)
            };
        case 8:
            return function(n, i, f, e, d, l, v, a) {
                return r.apply(this, arguments)
            };
        case 9:
            return function(n, i, f, e, d, l, v, a, u) {
                return r.apply(this, arguments)
            };
        case 10:
            return function(n, i, f, e, d, l, v, a, u, h) {
                return r.apply(this, arguments)
            };
        default:
            throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
    }
}

function _curryN(s, r, n) {
    return function() {
        for (var i = [], f = 0, e = s, d = 0; d < r.length || f < arguments.length;) {
            var l;
            d < r.length && (!_isPlaceholder(r[d]) || f >= arguments.length) ? l = r[d] : (l = arguments[f], f += 1), i[d] = l, _isPlaceholder(l) || (e -= 1), d += 1
        }
        return e <= 0 ? n.apply(this, i) : _arity(e, _curryN(s, i, n))
    }
}
var curryN = _curry2(function s(r, n) {
        return r === 1 ? _curry1(n) : _arity(r, _curryN(r, [], n))
    }),
    addIndex = _curry1(function s(r) {
        return curryN(r.length, function() {
            var n = 0,
                i = arguments[0],
                f = arguments[arguments.length - 1],
                e = Array.prototype.slice.call(arguments, 0);
            return e[0] = function() {
                var d = i.apply(this, _concat(arguments, [n, f]));
                return n += 1, d
            }, r.apply(this, e)
        })
    });

function _curry3(s) {
    return function r(n, i, f) {
        switch (arguments.length) {
            case 0:
                return r;
            case 1:
                return _isPlaceholder(n) ? r : _curry2(function(e, d) {
                    return s(n, e, d)
                });
            case 2:
                return _isPlaceholder(n) && _isPlaceholder(i) ? r : _isPlaceholder(n) ? _curry2(function(e, d) {
                    return s(e, i, d)
                }) : _isPlaceholder(i) ? _curry2(function(e, d) {
                    return s(n, e, d)
                }) : _curry1(function(e) {
                    return s(n, i, e)
                });
            default:
                return _isPlaceholder(n) && _isPlaceholder(i) && _isPlaceholder(f) ? r : _isPlaceholder(n) && _isPlaceholder(i) ? _curry2(function(e, d) {
                    return s(e, d, f)
                }) : _isPlaceholder(n) && _isPlaceholder(f) ? _curry2(function(e, d) {
                    return s(e, i, d)
                }) : _isPlaceholder(i) && _isPlaceholder(f) ? _curry2(function(e, d) {
                    return s(n, e, d)
                }) : _isPlaceholder(n) ? _curry1(function(e) {
                    return s(e, i, f)
                }) : _isPlaceholder(i) ? _curry1(function(e) {
                    return s(n, e, f)
                }) : _isPlaceholder(f) ? _curry1(function(e) {
                    return s(n, i, e)
                }) : s(n, i, f)
        }
    }
}
var adjust = _curry3(function s(r, n, i) {
    if (r >= i.length || r < -i.length) return i;
    var f = r < 0 ? i.length : 0,
        e = f + r,
        d = _concat(i);
    return d[e] = n(i[e]), d
});
const _isArray = Array.isArray || function s(r) {
    return r != null && r.length >= 0 && Object.prototype.toString.call(r) === "[object Array]"
};

function _isTransformer(s) {
    return s != null && typeof s["@@transducer/step"] == "function"
}

function _dispatchable(s, r, n) {
    return function() {
        if (arguments.length === 0) return n();
        var i = Array.prototype.slice.call(arguments, 0),
            f = i.pop();
        if (!_isArray(f)) {
            for (var e = 0; e < s.length;) {
                if (typeof f[s[e]] == "function") return f[s[e]].apply(f, i);
                e += 1
            }
            if (_isTransformer(f)) {
                var d = r.apply(null, i);
                return d(f)
            }
        }
        return n.apply(this, arguments)
    }
}

function _reduced(s) {
    return s && s["@@transducer/reduced"] ? s : {
        "@@transducer/value": s,
        "@@transducer/reduced": !0
    }
}
const _xfBase = {
    init: function() {
        return this.xf["@@transducer/init"]()
    },
    result: function(s) {
        return this.xf["@@transducer/result"](s)
    }
};
var XAll = function() {
        function s(r, n) {
            this.xf = n, this.f = r, this.all = !0
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            return this.all && (r = this.xf["@@transducer/step"](r, !0)), this.xf["@@transducer/result"](r)
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.f(n) || (this.all = !1, r = _reduced(this.xf["@@transducer/step"](r, !1))), r
        }, s
    }(),
    _xall = _curry2(function s(r, n) {
        return new XAll(r, n)
    }),
    all = _curry2(_dispatchable(["all"], _xall, function s(r, n) {
        for (var i = 0; i < n.length;) {
            if (!r(n[i])) return !1;
            i += 1
        }
        return !0
    })),
    max = _curry2(function s(r, n) {
        return n > r ? n : r
    });

function _map(s, r) {
    for (var n = 0, i = r.length, f = Array(i); n < i;) f[n] = s(r[n]), n += 1;
    return f
}

function _isString(s) {
    return Object.prototype.toString.call(s) === "[object String]"
}
var _isArrayLike = _curry1(function s(r) {
        return _isArray(r) ? !0 : !r || typeof r != "object" || _isString(r) ? !1 : r.nodeType === 1 ? !!r.length : r.length === 0 ? !0 : r.length > 0 ? r.hasOwnProperty(0) && r.hasOwnProperty(r.length - 1) : !1
    }),
    XWrap = function() {
        function s(r) {
            this.f = r
        }
        return s.prototype["@@transducer/init"] = function() {
            throw new Error("init not implemented on XWrap")
        }, s.prototype["@@transducer/result"] = function(r) {
            return r
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.f(r, n)
        }, s
    }();

function _xwrap(s) {
    return new XWrap(s)
}
var bind = _curry2(function s(r, n) {
    return _arity(r.length, function() {
        return r.apply(n, arguments)
    })
});

function _arrayReduce(s, r, n) {
    for (var i = 0, f = n.length; i < f;) {
        if (r = s["@@transducer/step"](r, n[i]), r && r["@@transducer/reduced"]) {
            r = r["@@transducer/value"];
            break
        }
        i += 1
    }
    return s["@@transducer/result"](r)
}

function _iterableReduce(s, r, n) {
    for (var i = n.next(); !i.done;) {
        if (r = s["@@transducer/step"](r, i.value), r && r["@@transducer/reduced"]) {
            r = r["@@transducer/value"];
            break
        }
        i = n.next()
    }
    return s["@@transducer/result"](r)
}

function _methodReduce(s, r, n, i) {
    return s["@@transducer/result"](n[i](bind(s["@@transducer/step"], s), r))
}
var symIterator = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";

function _reduce(s, r, n) {
    if (typeof s == "function" && (s = _xwrap(s)), _isArrayLike(n)) return _arrayReduce(s, r, n);
    if (typeof n["fantasy-land/reduce"] == "function") return _methodReduce(s, r, n, "fantasy-land/reduce");
    if (n[symIterator] != null) return _iterableReduce(s, r, n[symIterator]());
    if (typeof n.next == "function") return _iterableReduce(s, r, n);
    if (typeof n.reduce == "function") return _methodReduce(s, r, n, "reduce");
    throw new TypeError("reduce: list must be array or iterable")
}
var XMap = function() {
        function s(r, n) {
            this.xf = n, this.f = r
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = _xfBase.result, s.prototype["@@transducer/step"] = function(r, n) {
            return this.xf["@@transducer/step"](r, this.f(n))
        }, s
    }(),
    _xmap = _curry2(function s(r, n) {
        return new XMap(r, n)
    });

function _has(s, r) {
    return Object.prototype.hasOwnProperty.call(r, s)
}
var toString$1 = Object.prototype.toString,
    _isArguments = function() {
        return toString$1.call(arguments) === "[object Arguments]" ? function(r) {
            return toString$1.call(r) === "[object Arguments]"
        } : function(r) {
            return _has("callee", r)
        }
    }(),
    hasEnumBug = !{
        toString: null
    }.propertyIsEnumerable("toString"),
    nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
    hasArgsEnumBug = function() {
        return arguments.propertyIsEnumerable("length")
    }(),
    contains$1 = function s(r, n) {
        for (var i = 0; i < r.length;) {
            if (r[i] === n) return !0;
            i += 1
        }
        return !1
    },
    keys = _curry1(typeof Object.keys == "function" && !hasArgsEnumBug ? function s(r) {
        return Object(r) !== r ? [] : Object.keys(r)
    } : function s(r) {
        if (Object(r) !== r) return [];
        var n, i, f = [],
            e = hasArgsEnumBug && _isArguments(r);
        for (n in r) _has(n, r) && (!e || n !== "length") && (f[f.length] = n);
        if (hasEnumBug)
            for (i = nonEnumerableProps.length - 1; i >= 0;) n = nonEnumerableProps[i], _has(n, r) && !contains$1(f, n) && (f[f.length] = n), i -= 1;
        return f
    }),
    map = _curry2(_dispatchable(["fantasy-land/map", "map"], _xmap, function s(r, n) {
        switch (Object.prototype.toString.call(n)) {
            case "[object Function]":
                return curryN(n.length, function() {
                    return r.call(this, n.apply(this, arguments))
                });
            case "[object Object]":
                return _reduce(function(i, f) {
                    return i[f] = r(n[f]), i
                }, {}, keys(n));
            default:
                return _map(r, n)
        }
    }));
const _isInteger = Number.isInteger || function s(r) {
    return r << 0 === r
};
var nth = _curry2(function s(r, n) {
        var i = r < 0 ? n.length + r : r;
        return _isString(n) ? n.charAt(i) : n[i]
    }),
    paths = _curry2(function s(r, n) {
        return r.map(function(i) {
            for (var f = n, e = 0, d; e < i.length;) {
                if (f == null) return;
                d = i[e], f = _isInteger(d) ? nth(d, f) : f[d], e += 1
            }
            return f
        })
    }),
    path = _curry2(function s(r, n) {
        return paths([r], n)[0]
    }),
    prop = _curry2(function s(r, n) {
        return path([r], n)
    }),
    pluck = _curry2(function s(r, n) {
        return map(prop(r), n)
    }),
    reduce = _curry3(_reduce),
    allPass = _curry1(function s(r) {
        return curryN(reduce(max, 0, pluck("length", r)), function() {
            for (var n = 0, i = r.length; n < i;) {
                if (!r[n].apply(this, arguments)) return !1;
                n += 1
            }
            return !0
        })
    }),
    always = _curry1(function s(r) {
        return function() {
            return r
        }
    }),
    and = _curry2(function s(r, n) {
        return r && n
    }),
    XAny = function() {
        function s(r, n) {
            this.xf = n, this.f = r, this.any = !1
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            return this.any || (r = this.xf["@@transducer/step"](r, !1)), this.xf["@@transducer/result"](r)
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.f(n) && (this.any = !0, r = _reduced(this.xf["@@transducer/step"](r, !0))), r
        }, s
    }(),
    _xany = _curry2(function s(r, n) {
        return new XAny(r, n)
    }),
    any = _curry2(_dispatchable(["any"], _xany, function s(r, n) {
        for (var i = 0; i < n.length;) {
            if (r(n[i])) return !0;
            i += 1
        }
        return !1
    })),
    anyPass = _curry1(function s(r) {
        return curryN(reduce(max, 0, pluck("length", r)), function() {
            for (var n = 0, i = r.length; n < i;) {
                if (r[n].apply(this, arguments)) return !0;
                n += 1
            }
            return !1
        })
    }),
    ap = _curry2(function s(r, n) {
        return typeof n["fantasy-land/ap"] == "function" ? n["fantasy-land/ap"](r) : typeof r.ap == "function" ? r.ap(n) : typeof r == "function" ? function(i) {
            return r(i)(n(i))
        } : _reduce(function(i, f) {
            return _concat(i, map(f, n))
        }, [], r)
    });

function _aperture(s, r) {
    for (var n = 0, i = r.length - (s - 1), f = new Array(i >= 0 ? i : 0); n < i;) f[n] = Array.prototype.slice.call(r, n, n + s), n += 1;
    return f
}
var XAperture = function() {
        function s(r, n) {
            this.xf = n, this.pos = 0, this.full = !1, this.acc = new Array(r)
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            return this.acc = null, this.xf["@@transducer/result"](r)
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.store(n), this.full ? this.xf["@@transducer/step"](r, this.getCopy()) : r
        }, s.prototype.store = function(r) {
            this.acc[this.pos] = r, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
        }, s.prototype.getCopy = function() {
            return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos))
        }, s
    }(),
    _xaperture = _curry2(function s(r, n) {
        return new XAperture(r, n)
    }),
    aperture = _curry2(_dispatchable([], _xaperture, _aperture)),
    append = _curry2(function s(r, n) {
        return _concat(n, [r])
    }),
    apply = _curry2(function s(r, n) {
        return r.apply(this, n)
    }),
    values = _curry1(function s(r) {
        for (var n = keys(r), i = n.length, f = [], e = 0; e < i;) f[e] = r[n[e]], e += 1;
        return f
    });

function mapValues(s, r) {
    return keys(r).reduce(function(n, i) {
        return n[i] = s(r[i]), n
    }, {})
}
var applySpec = _curry1(function s(r) {
        return r = mapValues(function(n) {
            return typeof n == "function" ? n : s(n)
        }, r), curryN(reduce(max, 0, pluck("length", values(r))), function() {
            var n = arguments;
            return mapValues(function(i) {
                return apply(i, n)
            }, r)
        })
    }),
    applyTo = _curry2(function s(r, n) {
        return n(r)
    }),
    ascend = _curry3(function s(r, n, i) {
        var f = r(n),
            e = r(i);
        return f < e ? -1 : f > e ? 1 : 0
    }),
    assoc = _curry3(function s(r, n, i) {
        var f = {};
        for (var e in i) f[e] = i[e];
        return f[r] = n, f
    }),
    isNil = _curry1(function s(r) {
        return r == null
    }),
    assocPath = _curry3(function s(r, n, i) {
        if (r.length === 0) return n;
        var f = r[0];
        if (r.length > 1) {
            var e = !isNil(i) && _has(f, i) ? i[f] : _isInteger(r[1]) ? [] : {};
            n = s(Array.prototype.slice.call(r, 1), n, e)
        }
        if (_isInteger(f) && _isArray(i)) {
            var d = [].concat(i);
            return d[f] = n, d
        } else return assoc(f, n, i)
    }),
    nAry = _curry2(function s(r, n) {
        switch (r) {
            case 0:
                return function() {
                    return n.call(this)
                };
            case 1:
                return function(i) {
                    return n.call(this, i)
                };
            case 2:
                return function(i, f) {
                    return n.call(this, i, f)
                };
            case 3:
                return function(i, f, e) {
                    return n.call(this, i, f, e)
                };
            case 4:
                return function(i, f, e, d) {
                    return n.call(this, i, f, e, d)
                };
            case 5:
                return function(i, f, e, d, l) {
                    return n.call(this, i, f, e, d, l)
                };
            case 6:
                return function(i, f, e, d, l, v) {
                    return n.call(this, i, f, e, d, l, v)
                };
            case 7:
                return function(i, f, e, d, l, v, a) {
                    return n.call(this, i, f, e, d, l, v, a)
                };
            case 8:
                return function(i, f, e, d, l, v, a, u) {
                    return n.call(this, i, f, e, d, l, v, a, u)
                };
            case 9:
                return function(i, f, e, d, l, v, a, u, h) {
                    return n.call(this, i, f, e, d, l, v, a, u, h)
                };
            case 10:
                return function(i, f, e, d, l, v, a, u, h, p) {
                    return n.call(this, i, f, e, d, l, v, a, u, h, p)
                };
            default:
                throw new Error("First argument to nAry must be a non-negative integer no greater than ten")
        }
    }),
    binary = _curry1(function s(r) {
        return nAry(2, r)
    });

function _isFunction(s) {
    var r = Object.prototype.toString.call(s);
    return r === "[object Function]" || r === "[object AsyncFunction]" || r === "[object GeneratorFunction]" || r === "[object AsyncGeneratorFunction]"
}
var liftN = _curry2(function s(r, n) {
        var i = curryN(r, n);
        return curryN(r, function() {
            return _reduce(ap, map(i, arguments[0]), Array.prototype.slice.call(arguments, 1))
        })
    }),
    lift = _curry1(function s(r) {
        return liftN(r.length, r)
    }),
    both = _curry2(function s(r, n) {
        return _isFunction(r) ? function() {
            return r.apply(this, arguments) && n.apply(this, arguments)
        } : lift(and)(r, n)
    }),
    curry = _curry1(function s(r) {
        return curryN(r.length, r)
    }),
    call = curry(function s(r) {
        return r.apply(this, Array.prototype.slice.call(arguments, 1))
    });

function _makeFlat(s) {
    return function r(n) {
        for (var i, f, e, d = [], l = 0, v = n.length; l < v;) {
            if (_isArrayLike(n[l]))
                for (i = s ? r(n[l]) : n[l], e = 0, f = i.length; e < f;) d[d.length] = i[e], e += 1;
            else d[d.length] = n[l];
            l += 1
        }
        return d
    }
}

function _forceReduced(s) {
    return {
        "@@transducer/value": s,
        "@@transducer/reduced": !0
    }
}
var preservingReduced = function(s) {
        return {
            "@@transducer/init": _xfBase.init,
            "@@transducer/result": function(r) {
                return s["@@transducer/result"](r)
            },
            "@@transducer/step": function(r, n) {
                var i = s["@@transducer/step"](r, n);
                return i["@@transducer/reduced"] ? _forceReduced(i) : i
            }
        }
    },
    _flatCat = function s(r) {
        var n = preservingReduced(r);
        return {
            "@@transducer/init": _xfBase.init,
            "@@transducer/result": function(i) {
                return n["@@transducer/result"](i)
            },
            "@@transducer/step": function(i, f) {
                return _isArrayLike(f) ? _reduce(n, i, f) : _reduce(n, i, [f])
            }
        }
    },
    _xchain = _curry2(function s(r, n) {
        return map(r, _flatCat(n))
    }),
    chain = _curry2(_dispatchable(["fantasy-land/chain", "chain"], _xchain, function s(r, n) {
        return typeof n == "function" ? function(i) {
            return r(n(i))(i)
        } : _makeFlat(!1)(map(r, n))
    })),
    clamp = _curry3(function s(r, n, i) {
        if (r > n) throw new Error("min must not be greater than max in clamp(min, max, value)");
        return i < r ? r : i > n ? n : i
    });

function _cloneRegExp(s) {
    return new RegExp(s.source, (s.global ? "g" : "") + (s.ignoreCase ? "i" : "") + (s.multiline ? "m" : "") + (s.sticky ? "y" : "") + (s.unicode ? "u" : ""))
}
var type = _curry1(function s(r) {
    return r === null ? "Null" : r === void 0 ? "Undefined" : Object.prototype.toString.call(r).slice(8, -1)
});

function _clone(s, r, n, i) {
    var f = function(d) {
        for (var l = r.length, v = 0; v < l;) {
            if (s === r[v]) return n[v];
            v += 1
        }
        r[v + 1] = s, n[v + 1] = d;
        for (var a in s) d[a] = i ? _clone(s[a], r, n, !0) : s[a];
        return d
    };
    switch (type(s)) {
        case "Object":
            return f({});
        case "Array":
            return f([]);
        case "Date":
            return new Date(s.valueOf());
        case "RegExp":
            return _cloneRegExp(s);
        default:
            return s
    }
}
var clone = _curry1(function s(r) {
        return r != null && typeof r.clone == "function" ? r.clone() : _clone(r, [], [], !0)
    }),
    comparator = _curry1(function s(r) {
        return function(n, i) {
            return r(n, i) ? -1 : r(i, n) ? 1 : 0
        }
    }),
    not = _curry1(function s(r) {
        return !r
    }),
    complement = lift(not);

function _pipe(s, r) {
    return function() {
        return r.call(this, s.apply(this, arguments))
    }
}

function _checkForMethod(s, r) {
    return function() {
        var n = arguments.length;
        if (n === 0) return r();
        var i = arguments[n - 1];
        return _isArray(i) || typeof i[s] != "function" ? r.apply(this, arguments) : i[s].apply(i, Array.prototype.slice.call(arguments, 0, n - 1))
    }
}
var slice = _curry3(_checkForMethod("slice", function s(r, n, i) {
        return Array.prototype.slice.call(i, r, n)
    })),
    tail = _curry1(_checkForMethod("tail", slice(1, 1 / 0)));

function pipe() {
    if (arguments.length === 0) throw new Error("pipe requires at least one argument");
    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)))
}
var reverse = _curry1(function s(r) {
    return _isString(r) ? r.split("").reverse().join("") : Array.prototype.slice.call(r, 0).reverse()
});

function compose() {
    if (arguments.length === 0) throw new Error("compose requires at least one argument");
    return pipe.apply(this, reverse(arguments))
}

function composeK() {
    if (arguments.length === 0) throw new Error("composeK requires at least one argument");
    var s = Array.prototype.slice.call(arguments),
        r = s.pop();
    return compose(compose.apply(this, map(chain, s)), r)
}

function _pipeP(s, r) {
    return function() {
        var n = this;
        return s.apply(n, arguments).then(function(i) {
            return r.call(n, i)
        })
    }
}

function pipeP() {
    if (arguments.length === 0) throw new Error("pipeP requires at least one argument");
    return _arity(arguments[0].length, reduce(_pipeP, arguments[0], tail(arguments)))
}

function composeP() {
    if (arguments.length === 0) throw new Error("composeP requires at least one argument");
    return pipeP.apply(this, reverse(arguments))
}
var head = nth(0);

function _identity(s) {
    return s
}
var identity = _curry1(_identity),
    pipeWith = _curry2(function s(r, n) {
        if (n.length <= 0) return identity;
        var i = head(n),
            f = tail(n);
        return _arity(i.length, function() {
            return _reduce(function(e, d) {
                return r.call(this, d, e)
            }, i.apply(this, arguments), f)
        })
    }),
    composeWith = _curry2(function s(r, n) {
        return pipeWith.apply(this, [r, reverse(n)])
    });

function _arrayFromIterator(s) {
    for (var r = [], n; !(n = s.next()).done;) r.push(n.value);
    return r
}

function _includesWith(s, r, n) {
    for (var i = 0, f = n.length; i < f;) {
        if (s(r, n[i])) return !0;
        i += 1
    }
    return !1
}

function _functionName(s) {
    var r = String(s).match(/^function (\w*)/);
    return r == null ? "" : r[1]
}

function _objectIs(s, r) {
    return s === r ? s !== 0 || 1 / s === 1 / r : s !== s && r !== r
}
const _objectIs$1 = typeof Object.is == "function" ? Object.is : _objectIs;

function _uniqContentEquals(s, r, n, i) {
    var f = _arrayFromIterator(s),
        e = _arrayFromIterator(r);

    function d(l, v) {
        return _equals(l, v, n.slice(), i.slice())
    }
    return !_includesWith(function(l, v) {
        return !_includesWith(d, v, l)
    }, e, f)
}

function _equals(s, r, n, i) {
    if (_objectIs$1(s, r)) return !0;
    var f = type(s);
    if (f !== type(r) || s == null || r == null) return !1;
    if (typeof s["fantasy-land/equals"] == "function" || typeof r["fantasy-land/equals"] == "function") return typeof s["fantasy-land/equals"] == "function" && s["fantasy-land/equals"](r) && typeof r["fantasy-land/equals"] == "function" && r["fantasy-land/equals"](s);
    if (typeof s.equals == "function" || typeof r.equals == "function") return typeof s.equals == "function" && s.equals(r) && typeof r.equals == "function" && r.equals(s);
    switch (f) {
        case "Arguments":
        case "Array":
        case "Object":
            if (typeof s.constructor == "function" && _functionName(s.constructor) === "Promise") return s === r;
            break;
        case "Boolean":
        case "Number":
        case "String":
            if (!(typeof s == typeof r && _objectIs$1(s.valueOf(), r.valueOf()))) return !1;
            break;
        case "Date":
            if (!_objectIs$1(s.valueOf(), r.valueOf())) return !1;
            break;
        case "Error":
            return s.name === r.name && s.message === r.message;
        case "RegExp":
            if (!(s.source === r.source && s.global === r.global && s.ignoreCase === r.ignoreCase && s.multiline === r.multiline && s.sticky === r.sticky && s.unicode === r.unicode)) return !1;
            break
    }
    for (var e = n.length - 1; e >= 0;) {
        if (n[e] === s) return i[e] === r;
        e -= 1
    }
    switch (f) {
        case "Map":
            return s.size !== r.size ? !1 : _uniqContentEquals(s.entries(), r.entries(), n.concat([s]), i.concat([r]));
        case "Set":
            return s.size !== r.size ? !1 : _uniqContentEquals(s.values(), r.values(), n.concat([s]), i.concat([r]));
        case "Arguments":
        case "Array":
        case "Object":
        case "Boolean":
        case "Number":
        case "String":
        case "Date":
        case "Error":
        case "RegExp":
        case "Int8Array":
        case "Uint8Array":
        case "Uint8ClampedArray":
        case "Int16Array":
        case "Uint16Array":
        case "Int32Array":
        case "Uint32Array":
        case "Float32Array":
        case "Float64Array":
        case "ArrayBuffer":
            break;
        default:
            return !1
    }
    var d = keys(s);
    if (d.length !== keys(r).length) return !1;
    var l = n.concat([s]),
        v = i.concat([r]);
    for (e = d.length - 1; e >= 0;) {
        var a = d[e];
        if (!(_has(a, r) && _equals(r[a], s[a], l, v))) return !1;
        e -= 1
    }
    return !0
}
var equals = _curry2(function s(r, n) {
    return _equals(r, n, [], [])
});

function _indexOf(s, r, n) {
    var i, f;
    if (typeof s.indexOf == "function") switch (typeof r) {
        case "number":
            if (r === 0) {
                for (i = 1 / r; n < s.length;) {
                    if (f = s[n], f === 0 && 1 / f === i) return n;
                    n += 1
                }
                return -1
            } else if (r !== r) {
                for (; n < s.length;) {
                    if (f = s[n], typeof f == "number" && f !== f) return n;
                    n += 1
                }
                return -1
            }
            return s.indexOf(r, n);
        case "string":
        case "boolean":
        case "function":
        case "undefined":
            return s.indexOf(r, n);
        case "object":
            if (r === null) return s.indexOf(r, n)
    }
    for (; n < s.length;) {
        if (equals(s[n], r)) return n;
        n += 1
    }
    return -1
}

function _includes(s, r) {
    return _indexOf(r, s, 0) >= 0
}

function _quote(s) {
    var r = s.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + r.replace(/"/g, '\\"') + '"'
}
var pad = function s(r) {
        return (r < 10 ? "0" : "") + r
    },
    _toISOString = typeof Date.prototype.toISOString == "function" ? function s(r) {
        return r.toISOString()
    } : function s(r) {
        return r.getUTCFullYear() + "-" + pad(r.getUTCMonth() + 1) + "-" + pad(r.getUTCDate()) + "T" + pad(r.getUTCHours()) + ":" + pad(r.getUTCMinutes()) + ":" + pad(r.getUTCSeconds()) + "." + (r.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
    };

function _complement(s) {
    return function() {
        return !s.apply(this, arguments)
    }
}

function _filter(s, r) {
    for (var n = 0, i = r.length, f = []; n < i;) s(r[n]) && (f[f.length] = r[n]), n += 1;
    return f
}

function _isObject(s) {
    return Object.prototype.toString.call(s) === "[object Object]"
}
var XFilter = function() {
        function s(r, n) {
            this.xf = n, this.f = r
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = _xfBase.result, s.prototype["@@transducer/step"] = function(r, n) {
            return this.f(n) ? this.xf["@@transducer/step"](r, n) : r
        }, s
    }(),
    _xfilter = _curry2(function s(r, n) {
        return new XFilter(r, n)
    }),
    filter = _curry2(_dispatchable(["filter"], _xfilter, function(s, r) {
        return _isObject(r) ? _reduce(function(n, i) {
            return s(r[i]) && (n[i] = r[i]), n
        }, {}, keys(r)) : _filter(s, r)
    })),
    reject = _curry2(function s(r, n) {
        return filter(_complement(r), n)
    });

function _toString(s, r) {
    var n = function(d) {
            var l = r.concat([s]);
            return _includes(d, l) ? "<Circular>" : _toString(d, l)
        },
        i = function(e, d) {
            return _map(function(l) {
                return _quote(l) + ": " + n(e[l])
            }, d.slice().sort())
        };
    switch (Object.prototype.toString.call(s)) {
        case "[object Arguments]":
            return "(function() { return arguments; }(" + _map(n, s).join(", ") + "))";
        case "[object Array]":
            return "[" + _map(n, s).concat(i(s, reject(function(e) {
                return /^\d+$/.test(e)
            }, keys(s)))).join(", ") + "]";
        case "[object Boolean]":
            return typeof s == "object" ? "new Boolean(" + n(s.valueOf()) + ")" : s.toString();
        case "[object Date]":
            return "new Date(" + (isNaN(s.valueOf()) ? n(NaN) : _quote(_toISOString(s))) + ")";
        case "[object Null]":
            return "null";
        case "[object Number]":
            return typeof s == "object" ? "new Number(" + n(s.valueOf()) + ")" : 1 / s === -1 / 0 ? "-0" : s.toString(10);
        case "[object String]":
            return typeof s == "object" ? "new String(" + n(s.valueOf()) + ")" : _quote(s);
        case "[object Undefined]":
            return "undefined";
        default:
            if (typeof s.toString == "function") {
                var f = s.toString();
                if (f !== "[object Object]") return f
            }
            return "{" + i(s, keys(s)).join(", ") + "}"
    }
}
var toString = _curry1(function s(r) {
        return _toString(r, [])
    }),
    concat = _curry2(function s(r, n) {
        if (_isArray(r)) {
            if (_isArray(n)) return r.concat(n);
            throw new TypeError(toString(n) + " is not an array")
        }
        if (_isString(r)) {
            if (_isString(n)) return r + n;
            throw new TypeError(toString(n) + " is not a string")
        }
        if (r != null && _isFunction(r["fantasy-land/concat"])) return r["fantasy-land/concat"](n);
        if (r != null && _isFunction(r.concat)) return r.concat(n);
        throw new TypeError(toString(r) + ' does not have a method named "concat" or "fantasy-land/concat"')
    }),
    cond = _curry1(function s(r) {
        var n = reduce(max, 0, map(function(i) {
            return i[0].length
        }, r));
        return _arity(n, function() {
            for (var i = 0; i < r.length;) {
                if (r[i][0].apply(this, arguments)) return r[i][1].apply(this, arguments);
                i += 1
            }
        })
    }),
    constructN = _curry2(function s(r, n) {
        if (r > 10) throw new Error("Constructor with greater than ten arguments");
        return r === 0 ? function() {
            return new n
        } : curry(nAry(r, function(i, f, e, d, l, v, a, u, h, p) {
            switch (arguments.length) {
                case 1:
                    return new n(i);
                case 2:
                    return new n(i, f);
                case 3:
                    return new n(i, f, e);
                case 4:
                    return new n(i, f, e, d);
                case 5:
                    return new n(i, f, e, d, l);
                case 6:
                    return new n(i, f, e, d, l, v);
                case 7:
                    return new n(i, f, e, d, l, v, a);
                case 8:
                    return new n(i, f, e, d, l, v, a, u);
                case 9:
                    return new n(i, f, e, d, l, v, a, u, h);
                case 10:
                    return new n(i, f, e, d, l, v, a, u, h, p)
            }
        }))
    }),
    construct = _curry1(function s(r) {
        return constructN(r.length, r)
    }),
    contains = _curry2(_includes),
    converge = _curry2(function s(r, n) {
        return curryN(reduce(max, 0, pluck("length", n)), function() {
            var i = arguments,
                f = this;
            return r.apply(f, _map(function(e) {
                return e.apply(f, i)
            }, n))
        })
    }),
    XReduceBy = function() {
        function s(r, n, i, f) {
            this.valueFn = r, this.valueAcc = n, this.keyFn = i, this.xf = f, this.inputs = {}
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            var n;
            for (n in this.inputs)
                if (_has(n, this.inputs) && (r = this.xf["@@transducer/step"](r, this.inputs[n]), r["@@transducer/reduced"])) {
                    r = r["@@transducer/value"];
                    break
                } return this.inputs = null, this.xf["@@transducer/result"](r)
        }, s.prototype["@@transducer/step"] = function(r, n) {
            var i = this.keyFn(n);
            return this.inputs[i] = this.inputs[i] || [i, this.valueAcc], this.inputs[i][1] = this.valueFn(this.inputs[i][1], n), r
        }, s
    }(),
    _xreduceBy = _curryN(4, [], function s(r, n, i, f) {
        return new XReduceBy(r, n, i, f)
    }),
    reduceBy = _curryN(4, [], _dispatchable([], _xreduceBy, function s(r, n, i, f) {
        return _reduce(function(e, d) {
            var l = i(d);
            return e[l] = r(_has(l, e) ? e[l] : _clone(n, [], [], !1), d), e
        }, {}, f)
    })),
    countBy = reduceBy(function(s, r) {
        return s + 1
    }, 0),
    dec = add(-1),
    defaultTo = _curry2(function s(r, n) {
        return n == null || n !== n ? r : n
    }),
    descend = _curry3(function s(r, n, i) {
        var f = r(n),
            e = r(i);
        return f > e ? -1 : f < e ? 1 : 0
    }),
    _Set = function() {
        function s() {
            this._nativeSet = typeof Set == "function" ? new Set : null, this._items = {}
        }
        return s.prototype.add = function(r) {
            return !hasOrAdd(r, !0, this)
        }, s.prototype.has = function(r) {
            return hasOrAdd(r, !1, this)
        }, s
    }();

function hasOrAdd(s, r, n) {
    var i = typeof s,
        f, e;
    switch (i) {
        case "string":
        case "number":
            return s === 0 && 1 / s === -1 / 0 ? n._items["-0"] ? !0 : (r && (n._items["-0"] = !0), !1) : n._nativeSet !== null ? r ? (f = n._nativeSet.size, n._nativeSet.add(s), e = n._nativeSet.size, e === f) : n._nativeSet.has(s) : i in n._items ? s in n._items[i] ? !0 : (r && (n._items[i][s] = !0), !1) : (r && (n._items[i] = {}, n._items[i][s] = !0), !1);
        case "boolean":
            if (i in n._items) {
                var d = s ? 1 : 0;
                return n._items[i][d] ? !0 : (r && (n._items[i][d] = !0), !1)
            } else return r && (n._items[i] = s ? [!1, !0] : [!0, !1]), !1;
        case "function":
            return n._nativeSet !== null ? r ? (f = n._nativeSet.size, n._nativeSet.add(s), e = n._nativeSet.size, e === f) : n._nativeSet.has(s) : i in n._items ? _includes(s, n._items[i]) ? !0 : (r && n._items[i].push(s), !1) : (r && (n._items[i] = [s]), !1);
        case "undefined":
            return n._items[i] ? !0 : (r && (n._items[i] = !0), !1);
        case "object":
            if (s === null) return n._items.null ? !0 : (r && (n._items.null = !0), !1);
        default:
            return i = Object.prototype.toString.call(s), i in n._items ? _includes(s, n._items[i]) ? !0 : (r && n._items[i].push(s), !1) : (r && (n._items[i] = [s]), !1)
    }
}
var difference = _curry2(function s(r, n) {
        for (var i = [], f = 0, e = r.length, d = n.length, l = new _Set, v = 0; v < d; v += 1) l.add(n[v]);
        for (; f < e;) l.add(r[f]) && (i[i.length] = r[f]), f += 1;
        return i
    }),
    differenceWith = _curry3(function s(r, n, i) {
        for (var f = [], e = 0, d = n.length; e < d;) !_includesWith(r, n[e], i) && !_includesWith(r, n[e], f) && f.push(n[e]), e += 1;
        return f
    }),
    dissoc = _curry2(function s(r, n) {
        var i = {};
        for (var f in n) i[f] = n[f];
        return delete i[r], i
    }),
    remove = _curry3(function s(r, n, i) {
        var f = Array.prototype.slice.call(i, 0);
        return f.splice(r, n), f
    }),
    update = _curry3(function s(r, n, i) {
        return adjust(r, always(n), i)
    }),
    dissocPath = _curry2(function s(r, n) {
        switch (r.length) {
            case 0:
                return n;
            case 1:
                return _isInteger(r[0]) && _isArray(n) ? remove(r[0], 1, n) : dissoc(r[0], n);
            default:
                var i = r[0],
                    f = Array.prototype.slice.call(r, 1);
                return n[i] == null ? n : _isInteger(i) && _isArray(n) ? update(i, s(f, n[i]), n) : assoc(i, s(f, n[i]), n)
        }
    }),
    divide = _curry2(function s(r, n) {
        return r / n
    }),
    XDrop = function() {
        function s(r, n) {
            this.xf = n, this.n = r
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = _xfBase.result, s.prototype["@@transducer/step"] = function(r, n) {
            return this.n > 0 ? (this.n -= 1, r) : this.xf["@@transducer/step"](r, n)
        }, s
    }(),
    _xdrop = _curry2(function s(r, n) {
        return new XDrop(r, n)
    }),
    drop = _curry2(_dispatchable(["drop"], _xdrop, function s(r, n) {
        return slice(Math.max(0, r), 1 / 0, n)
    })),
    XTake = function() {
        function s(r, n) {
            this.xf = n, this.n = r, this.i = 0
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = _xfBase.result, s.prototype["@@transducer/step"] = function(r, n) {
            this.i += 1;
            var i = this.n === 0 ? r : this.xf["@@transducer/step"](r, n);
            return this.n >= 0 && this.i >= this.n ? _reduced(i) : i
        }, s
    }(),
    _xtake = _curry2(function s(r, n) {
        return new XTake(r, n)
    }),
    take = _curry2(_dispatchable(["take"], _xtake, function s(r, n) {
        return slice(0, r < 0 ? 1 / 0 : r, n)
    }));

function dropLast$1(s, r) {
    return take(s < r.length ? r.length - s : 0, r)
}
var XDropLast = function() {
        function s(r, n) {
            this.xf = n, this.pos = 0, this.full = !1, this.acc = new Array(r)
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            return this.acc = null, this.xf["@@transducer/result"](r)
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.full && (r = this.xf["@@transducer/step"](r, this.acc[this.pos])), this.store(n), r
        }, s.prototype.store = function(r) {
            this.acc[this.pos] = r, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
        }, s
    }(),
    _xdropLast = _curry2(function s(r, n) {
        return new XDropLast(r, n)
    }),
    dropLast = _curry2(_dispatchable([], _xdropLast, dropLast$1));

function dropLastWhile$1(s, r) {
    for (var n = r.length - 1; n >= 0 && s(r[n]);) n -= 1;
    return slice(0, n + 1, r)
}
var XDropLastWhile = function() {
        function s(r, n) {
            this.f = r, this.retained = [], this.xf = n
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            return this.retained = null, this.xf["@@transducer/result"](r)
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.f(n) ? this.retain(r, n) : this.flush(r, n)
        }, s.prototype.flush = function(r, n) {
            return r = _reduce(this.xf["@@transducer/step"], r, this.retained), this.retained = [], this.xf["@@transducer/step"](r, n)
        }, s.prototype.retain = function(r, n) {
            return this.retained.push(n), r
        }, s
    }(),
    _xdropLastWhile = _curry2(function s(r, n) {
        return new XDropLastWhile(r, n)
    }),
    dropLastWhile = _curry2(_dispatchable([], _xdropLastWhile, dropLastWhile$1)),
    XDropRepeatsWith = function() {
        function s(r, n) {
            this.xf = n, this.pred = r, this.lastValue = void 0, this.seenFirstValue = !1
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = _xfBase.result, s.prototype["@@transducer/step"] = function(r, n) {
            var i = !1;
            return this.seenFirstValue ? this.pred(this.lastValue, n) && (i = !0) : this.seenFirstValue = !0, this.lastValue = n, i ? r : this.xf["@@transducer/step"](r, n)
        }, s
    }(),
    _xdropRepeatsWith = _curry2(function s(r, n) {
        return new XDropRepeatsWith(r, n)
    }),
    last = nth(-1),
    dropRepeatsWith = _curry2(_dispatchable([], _xdropRepeatsWith, function s(r, n) {
        var i = [],
            f = 1,
            e = n.length;
        if (e !== 0)
            for (i[0] = n[0]; f < e;) r(last(i), n[f]) || (i[i.length] = n[f]), f += 1;
        return i
    })),
    dropRepeats = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals))),
    XDropWhile = function() {
        function s(r, n) {
            this.xf = n, this.f = r
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = _xfBase.result, s.prototype["@@transducer/step"] = function(r, n) {
            if (this.f) {
                if (this.f(n)) return r;
                this.f = null
            }
            return this.xf["@@transducer/step"](r, n)
        }, s
    }(),
    _xdropWhile = _curry2(function s(r, n) {
        return new XDropWhile(r, n)
    }),
    dropWhile = _curry2(_dispatchable(["dropWhile"], _xdropWhile, function s(r, n) {
        for (var i = 0, f = n.length; i < f && r(n[i]);) i += 1;
        return slice(i, 1 / 0, n)
    })),
    or = _curry2(function s(r, n) {
        return r || n
    }),
    either = _curry2(function s(r, n) {
        return _isFunction(r) ? function() {
            return r.apply(this, arguments) || n.apply(this, arguments)
        } : lift(or)(r, n)
    }),
    empty = _curry1(function s(r) {
        return r != null && typeof r["fantasy-land/empty"] == "function" ? r["fantasy-land/empty"]() : r != null && r.constructor != null && typeof r.constructor["fantasy-land/empty"] == "function" ? r.constructor["fantasy-land/empty"]() : r != null && typeof r.empty == "function" ? r.empty() : r != null && r.constructor != null && typeof r.constructor.empty == "function" ? r.constructor.empty() : _isArray(r) ? [] : _isString(r) ? "" : _isObject(r) ? {} : _isArguments(r) ? function() {
            return arguments
        }() : void 0
    }),
    takeLast = _curry2(function s(r, n) {
        return drop(r >= 0 ? n.length - r : 0, n)
    }),
    endsWith = _curry2(function(s, r) {
        return equals(takeLast(s.length, r), s)
    }),
    eqBy = _curry3(function s(r, n, i) {
        return equals(r(n), r(i))
    }),
    eqProps = _curry3(function s(r, n, i) {
        return equals(n[r], i[r])
    }),
    evolve = _curry2(function s(r, n) {
        var i = n instanceof Array ? [] : {},
            f, e, d;
        for (e in n) f = r[e], d = typeof f, i[e] = d === "function" ? f(n[e]) : f && d === "object" ? s(f, n[e]) : n[e];
        return i
    }),
    XFind = function() {
        function s(r, n) {
            this.xf = n, this.f = r, this.found = !1
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            return this.found || (r = this.xf["@@transducer/step"](r, void 0)), this.xf["@@transducer/result"](r)
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.f(n) && (this.found = !0, r = _reduced(this.xf["@@transducer/step"](r, n))), r
        }, s
    }(),
    _xfind = _curry2(function s(r, n) {
        return new XFind(r, n)
    }),
    find = _curry2(_dispatchable(["find"], _xfind, function s(r, n) {
        for (var i = 0, f = n.length; i < f;) {
            if (r(n[i])) return n[i];
            i += 1
        }
    })),
    XFindIndex = function() {
        function s(r, n) {
            this.xf = n, this.f = r, this.idx = -1, this.found = !1
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            return this.found || (r = this.xf["@@transducer/step"](r, -1)), this.xf["@@transducer/result"](r)
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.idx += 1, this.f(n) && (this.found = !0, r = _reduced(this.xf["@@transducer/step"](r, this.idx))), r
        }, s
    }(),
    _xfindIndex = _curry2(function s(r, n) {
        return new XFindIndex(r, n)
    }),
    findIndex = _curry2(_dispatchable([], _xfindIndex, function s(r, n) {
        for (var i = 0, f = n.length; i < f;) {
            if (r(n[i])) return i;
            i += 1
        }
        return -1
    })),
    XFindLast = function() {
        function s(r, n) {
            this.xf = n, this.f = r
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            return this.xf["@@transducer/result"](this.xf["@@transducer/step"](r, this.last))
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.f(n) && (this.last = n), r
        }, s
    }(),
    _xfindLast = _curry2(function s(r, n) {
        return new XFindLast(r, n)
    }),
    findLast = _curry2(_dispatchable([], _xfindLast, function s(r, n) {
        for (var i = n.length - 1; i >= 0;) {
            if (r(n[i])) return n[i];
            i -= 1
        }
    })),
    XFindLastIndex = function() {
        function s(r, n) {
            this.xf = n, this.f = r, this.idx = -1, this.lastIdx = -1
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = function(r) {
            return this.xf["@@transducer/result"](this.xf["@@transducer/step"](r, this.lastIdx))
        }, s.prototype["@@transducer/step"] = function(r, n) {
            return this.idx += 1, this.f(n) && (this.lastIdx = this.idx), r
        }, s
    }(),
    _xfindLastIndex = _curry2(function s(r, n) {
        return new XFindLastIndex(r, n)
    }),
    findLastIndex = _curry2(_dispatchable([], _xfindLastIndex, function s(r, n) {
        for (var i = n.length - 1; i >= 0;) {
            if (r(n[i])) return i;
            i -= 1
        }
        return -1
    })),
    flatten = _curry1(_makeFlat(!0)),
    flip = _curry1(function s(r) {
        return curryN(r.length, function(n, i) {
            var f = Array.prototype.slice.call(arguments, 0);
            return f[0] = i, f[1] = n, r.apply(this, f)
        })
    }),
    forEach = _curry2(_checkForMethod("forEach", function s(r, n) {
        for (var i = n.length, f = 0; f < i;) r(n[f]), f += 1;
        return n
    })),
    forEachObjIndexed = _curry2(function s(r, n) {
        for (var i = keys(n), f = 0; f < i.length;) {
            var e = i[f];
            r(n[e], e, n), f += 1
        }
        return n
    }),
    fromPairs = _curry1(function s(r) {
        for (var n = {}, i = 0; i < r.length;) n[r[i][0]] = r[i][1], i += 1;
        return n
    }),
    groupBy = _curry2(_checkForMethod("groupBy", reduceBy(function(s, r) {
        return s == null && (s = []), s.push(r), s
    }, null))),
    groupWith = _curry2(function(s, r) {
        for (var n = [], i = 0, f = r.length; i < f;) {
            for (var e = i + 1; e < f && s(r[e - 1], r[e]);) e += 1;
            n.push(r.slice(i, e)), i = e
        }
        return n
    }),
    gt = _curry2(function s(r, n) {
        return r > n
    }),
    gte = _curry2(function s(r, n) {
        return r >= n
    }),
    hasPath = _curry2(function s(r, n) {
        if (r.length === 0 || isNil(n)) return !1;
        for (var i = n, f = 0; f < r.length;)
            if (!isNil(i) && _has(r[f], i)) i = i[r[f]], f += 1;
            else return !1;
        return !0
    }),
    has = _curry2(function s(r, n) {
        return hasPath([r], n)
    }),
    hasIn = _curry2(function s(r, n) {
        return r in n
    }),
    identical = _curry2(_objectIs$1),
    ifElse = _curry3(function s(r, n, i) {
        return curryN(Math.max(r.length, n.length, i.length), function() {
            return r.apply(this, arguments) ? n.apply(this, arguments) : i.apply(this, arguments)
        })
    }),
    inc = add(1),
    includes = _curry2(_includes),
    indexBy = reduceBy(function(s, r) {
        return r
    }, null),
    indexOf = _curry2(function s(r, n) {
        return typeof n.indexOf == "function" && !_isArray(n) ? n.indexOf(r) : _indexOf(n, r, 0)
    }),
    init = slice(0, -1),
    innerJoin = _curry3(function s(r, n, i) {
        return _filter(function(f) {
            return _includesWith(r, f, i)
        }, n)
    }),
    insert = _curry3(function s(r, n, i) {
        r = r < i.length && r >= 0 ? r : i.length;
        var f = Array.prototype.slice.call(i, 0);
        return f.splice(r, 0, n), f
    }),
    insertAll = _curry3(function s(r, n, i) {
        return r = r < i.length && r >= 0 ? r : i.length, [].concat(Array.prototype.slice.call(i, 0, r), n, Array.prototype.slice.call(i, r))
    }),
    uniqBy = _curry2(function s(r, n) {
        for (var i = new _Set, f = [], e = 0, d, l; e < n.length;) l = n[e], d = r(l), i.add(d) && f.push(l), e += 1;
        return f
    }),
    uniq = uniqBy(identity),
    intersection = _curry2(function s(r, n) {
        var i, f;
        return r.length > n.length ? (i = r, f = n) : (i = n, f = r), uniq(_filter(flip(_includes)(i), f))
    }),
    intersperse = _curry2(_checkForMethod("intersperse", function s(r, n) {
        for (var i = [], f = 0, e = n.length; f < e;) f === e - 1 ? i.push(n[f]) : i.push(n[f], r), f += 1;
        return i
    }));

function _objectAssign(s) {
    if (s == null) throw new TypeError("Cannot convert undefined or null to object");
    for (var r = Object(s), n = 1, i = arguments.length; n < i;) {
        var f = arguments[n];
        if (f != null)
            for (var e in f) _has(e, f) && (r[e] = f[e]);
        n += 1
    }
    return r
}
const _objectAssign$1 = typeof Object.assign == "function" ? Object.assign : _objectAssign;
var objOf = _curry2(function s(r, n) {
        var i = {};
        return i[r] = n, i
    }),
    _stepCatArray = {
        "@@transducer/init": Array,
        "@@transducer/step": function(s, r) {
            return s.push(r), s
        },
        "@@transducer/result": _identity
    },
    _stepCatString = {
        "@@transducer/init": String,
        "@@transducer/step": function(s, r) {
            return s + r
        },
        "@@transducer/result": _identity
    },
    _stepCatObject = {
        "@@transducer/init": Object,
        "@@transducer/step": function(s, r) {
            return _objectAssign$1(s, _isArrayLike(r) ? objOf(r[0], r[1]) : r)
        },
        "@@transducer/result": _identity
    };

function _stepCat(s) {
    if (_isTransformer(s)) return s;
    if (_isArrayLike(s)) return _stepCatArray;
    if (typeof s == "string") return _stepCatString;
    if (typeof s == "object") return _stepCatObject;
    throw new Error("Cannot create transformer for " + s)
}
var into = _curry3(function s(r, n, i) {
        return _isTransformer(r) ? _reduce(n(r), r["@@transducer/init"](), i) : _reduce(n(_stepCat(r)), _clone(r, [], [], !1), i)
    }),
    invert = _curry1(function s(r) {
        for (var n = keys(r), i = n.length, f = 0, e = {}; f < i;) {
            var d = n[f],
                l = r[d],
                v = _has(l, e) ? e[l] : e[l] = [];
            v[v.length] = d, f += 1
        }
        return e
    }),
    invertObj = _curry1(function s(r) {
        for (var n = keys(r), i = n.length, f = 0, e = {}; f < i;) {
            var d = n[f];
            e[r[d]] = d, f += 1
        }
        return e
    }),
    invoker = _curry2(function s(r, n) {
        return curryN(r + 1, function() {
            var i = arguments[r];
            if (i != null && _isFunction(i[n])) return i[n].apply(i, Array.prototype.slice.call(arguments, 0, r));
            throw new TypeError(toString(i) + ' does not have a method named "' + n + '"')
        })
    }),
    is = _curry2(function s(r, n) {
        return n != null && n.constructor === r || n instanceof r
    }),
    isEmpty = _curry1(function s(r) {
        return r != null && equals(r, empty(r))
    }),
    join$1 = invoker(1, "join"),
    juxt = _curry1(function s(r) {
        return converge(function() {
            return Array.prototype.slice.call(arguments, 0)
        }, r)
    }),
    keysIn = _curry1(function s(r) {
        var n, i = [];
        for (n in r) i[i.length] = n;
        return i
    }),
    lastIndexOf = _curry2(function s(r, n) {
        if (typeof n.lastIndexOf == "function" && !_isArray(n)) return n.lastIndexOf(r);
        for (var i = n.length - 1; i >= 0;) {
            if (equals(n[i], r)) return i;
            i -= 1
        }
        return -1
    });

function _isNumber(s) {
    return Object.prototype.toString.call(s) === "[object Number]"
}
var length = _curry1(function s(r) {
        return r != null && _isNumber(r.length) ? r.length : NaN
    }),
    lens = _curry2(function s(r, n) {
        return function(i) {
            return function(f) {
                return map(function(e) {
                    return n(e, f)
                }, i(r(f)))
            }
        }
    }),
    lensIndex = _curry1(function s(r) {
        return lens(nth(r), update(r))
    }),
    lensPath = _curry1(function s(r) {
        return lens(path(r), assocPath(r))
    }),
    lensProp = _curry1(function s(r) {
        return lens(prop(r), assoc(r))
    }),
    lt = _curry2(function s(r, n) {
        return r < n
    }),
    lte = _curry2(function s(r, n) {
        return r <= n
    }),
    mapAccum = _curry3(function s(r, n, i) {
        for (var f = 0, e = i.length, d = [], l = [n]; f < e;) l = r(l[0], i[f]), d[f] = l[1], f += 1;
        return [l[0], d]
    }),
    mapAccumRight = _curry3(function s(r, n, i) {
        for (var f = i.length - 1, e = [], d = [n]; f >= 0;) d = r(d[0], i[f]), e[f] = d[1], f -= 1;
        return [d[0], e]
    }),
    mapObjIndexed = _curry2(function s(r, n) {
        return _reduce(function(i, f) {
            return i[f] = r(n[f], f, n), i
        }, {}, keys(n))
    }),
    match = _curry2(function s(r, n) {
        return n.match(r) || []
    }),
    mathMod = _curry2(function s(r, n) {
        return _isInteger(r) ? !_isInteger(n) || n < 1 ? NaN : (r % n + n) % n : NaN
    }),
    maxBy = _curry3(function s(r, n, i) {
        return r(i) > r(n) ? i : n
    }),
    sum = reduce(add, 0),
    mean = _curry1(function s(r) {
        return sum(r) / r.length
    }),
    median = _curry1(function s(r) {
        var n = r.length;
        if (n === 0) return NaN;
        var i = 2 - n % 2,
            f = (n - i) / 2;
        return mean(Array.prototype.slice.call(r, 0).sort(function(e, d) {
            return e < d ? -1 : e > d ? 1 : 0
        }).slice(f, f + i))
    }),
    memoizeWith = _curry2(function s(r, n) {
        var i = {};
        return _arity(n.length, function() {
            var f = r.apply(this, arguments);
            return _has(f, i) || (i[f] = n.apply(this, arguments)), i[f]
        })
    }),
    merge = _curry2(function s(r, n) {
        return _objectAssign$1({}, r, n)
    }),
    mergeAll = _curry1(function s(r) {
        return _objectAssign$1.apply(null, [{}].concat(r))
    }),
    mergeWithKey = _curry3(function s(r, n, i) {
        var f = {},
            e;
        for (e in n) _has(e, n) && (f[e] = _has(e, i) ? r(e, n[e], i[e]) : n[e]);
        for (e in i) _has(e, i) && !_has(e, f) && (f[e] = i[e]);
        return f
    }),
    mergeDeepWithKey = _curry3(function s(r, n, i) {
        return mergeWithKey(function(f, e, d) {
            return _isObject(e) && _isObject(d) ? s(r, e, d) : r(f, e, d)
        }, n, i)
    }),
    mergeDeepLeft = _curry2(function s(r, n) {
        return mergeDeepWithKey(function(i, f, e) {
            return f
        }, r, n)
    }),
    mergeDeepRight = _curry2(function s(r, n) {
        return mergeDeepWithKey(function(i, f, e) {
            return e
        }, r, n)
    }),
    mergeDeepWith = _curry3(function s(r, n, i) {
        return mergeDeepWithKey(function(f, e, d) {
            return r(e, d)
        }, n, i)
    }),
    mergeLeft = _curry2(function s(r, n) {
        return _objectAssign$1({}, n, r)
    }),
    mergeRight = _curry2(function s(r, n) {
        return _objectAssign$1({}, r, n)
    }),
    mergeWith = _curry3(function s(r, n, i) {
        return mergeWithKey(function(f, e, d) {
            return r(e, d)
        }, n, i)
    }),
    min = _curry2(function s(r, n) {
        return n < r ? n : r
    }),
    minBy = _curry3(function s(r, n, i) {
        return r(i) < r(n) ? i : n
    }),
    modulo = _curry2(function s(r, n) {
        return r % n
    }),
    move = _curry3(function(s, r, n) {
        var i = n.length,
            f = n.slice(),
            e = s < 0 ? i + s : s,
            d = r < 0 ? i + r : r,
            l = f.splice(e, 1);
        return e < 0 || e >= n.length || d < 0 || d >= n.length ? n : [].concat(f.slice(0, d)).concat(l).concat(f.slice(d, n.length))
    }),
    multiply = _curry2(function s(r, n) {
        return r * n
    }),
    negate = _curry1(function s(r) {
        return -r
    }),
    none = _curry2(function s(r, n) {
        return all(_complement(r), n)
    }),
    nthArg = _curry1(function s(r) {
        var n = r < 0 ? 1 : r + 1;
        return curryN(n, function() {
            return nth(r, arguments)
        })
    }),
    o = _curry3(function s(r, n, i) {
        return r(n(i))
    });

function _of(s) {
    return [s]
}
var of = _curry1(_of), omit = _curry2(function s(r, n) {
    for (var i = {}, f = {}, e = 0, d = r.length; e < d;) f[r[e]] = 1, e += 1;
    for (var l in n) f.hasOwnProperty(l) || (i[l] = n[l]);
    return i
}), once = _curry1(function s(r) {
    var n = !1,
        i;
    return _arity(r.length, function() {
        return n || (n = !0, i = r.apply(this, arguments)), i
    })
});

function _assertPromise(s, r) {
    if (r == null || !_isFunction(r.then)) throw new TypeError("`" + s + "` expected a Promise, received " + _toString(r, []))
}
var otherwise = _curry2(function s(r, n) {
        return _assertPromise("otherwise", n), n.then(null, r)
    }),
    Identity = function(s) {
        return {
            value: s,
            map: function(r) {
                return Identity(r(s))
            }
        }
    },
    over = _curry3(function s(r, n, i) {
        return r(function(f) {
            return Identity(n(f))
        })(i).value
    }),
    pair = _curry2(function s(r, n) {
        return [r, n]
    });

function _createPartialApplicator(s) {
    return _curry2(function(r, n) {
        return _arity(Math.max(0, r.length - n.length), function() {
            return r.apply(this, s(n, arguments))
        })
    })
}
var partial = _createPartialApplicator(_concat),
    partialRight = _createPartialApplicator(flip(_concat)),
    partition = juxt([filter, reject]),
    pathEq = _curry3(function s(r, n, i) {
        return equals(path(r, i), n)
    }),
    pathOr = _curry3(function s(r, n, i) {
        return defaultTo(r, path(n, i))
    }),
    pathSatisfies = _curry3(function s(r, n, i) {
        return r(path(n, i))
    }),
    pick = _curry2(function s(r, n) {
        for (var i = {}, f = 0; f < r.length;) r[f] in n && (i[r[f]] = n[r[f]]), f += 1;
        return i
    }),
    pickAll = _curry2(function s(r, n) {
        for (var i = {}, f = 0, e = r.length; f < e;) {
            var d = r[f];
            i[d] = n[d], f += 1
        }
        return i
    }),
    pickBy = _curry2(function s(r, n) {
        var i = {};
        for (var f in n) r(n[f], f, n) && (i[f] = n[f]);
        return i
    });

function pipeK() {
    if (arguments.length === 0) throw new Error("pipeK requires at least one argument");
    return composeK.apply(this, reverse(arguments))
}
var prepend = _curry2(function s(r, n) {
        return _concat([r], n)
    }),
    product = reduce(multiply, 1),
    useWith = _curry2(function s(r, n) {
        return curryN(n.length, function() {
            for (var i = [], f = 0; f < n.length;) i.push(n[f].call(this, arguments[f])), f += 1;
            return r.apply(this, i.concat(Array.prototype.slice.call(arguments, n.length)))
        })
    }),
    project = useWith(_map, [pickAll, identity]),
    propEq = _curry3(function s(r, n, i) {
        return equals(n, i[r])
    }),
    propIs = _curry3(function s(r, n, i) {
        return is(r, i[n])
    }),
    propOr = _curry3(function s(r, n, i) {
        return pathOr(r, [n], i)
    }),
    propSatisfies = _curry3(function s(r, n, i) {
        return r(i[n])
    }),
    props = _curry2(function s(r, n) {
        return r.map(function(i) {
            return path([i], n)
        })
    }),
    range = _curry2(function s(r, n) {
        if (!(_isNumber(r) && _isNumber(n))) throw new TypeError("Both arguments to range must be numbers");
        for (var i = [], f = r; f < n;) i.push(f), f += 1;
        return i
    }),
    reduceRight = _curry3(function s(r, n, i) {
        for (var f = i.length - 1; f >= 0;) n = r(i[f], n), f -= 1;
        return n
    }),
    reduceWhile = _curryN(4, [], function s(r, n, i, f) {
        return _reduce(function(e, d) {
            return r(e, d) ? n(e, d) : _reduced(e)
        }, i, f)
    }),
    reduced = _curry1(_reduced),
    times = _curry2(function s(r, n) {
        var i = Number(n),
            f = 0,
            e;
        if (i < 0 || isNaN(i)) throw new RangeError("n must be a non-negative number");
        for (e = new Array(i); f < i;) e[f] = r(f), f += 1;
        return e
    }),
    repeat = _curry2(function s(r, n) {
        return times(always(r), n)
    }),
    replace = _curry3(function s(r, n, i) {
        return i.replace(r, n)
    }),
    scan = _curry3(function s(r, n, i) {
        for (var f = 0, e = i.length, d = [n]; f < e;) n = r(n, i[f]), d[f + 1] = n, f += 1;
        return d
    }),
    sequence = _curry2(function s(r, n) {
        return typeof n.sequence == "function" ? n.sequence(r) : reduceRight(function(i, f) {
            return ap(map(prepend, i), f)
        }, r([]), n)
    }),
    set = _curry3(function s(r, n, i) {
        return over(r, always(n), i)
    }),
    sort = _curry2(function s(r, n) {
        return Array.prototype.slice.call(n, 0).sort(r)
    }),
    sortBy = _curry2(function s(r, n) {
        return Array.prototype.slice.call(n, 0).sort(function(i, f) {
            var e = r(i),
                d = r(f);
            return e < d ? -1 : e > d ? 1 : 0
        })
    }),
    sortWith = _curry2(function s(r, n) {
        return Array.prototype.slice.call(n, 0).sort(function(i, f) {
            for (var e = 0, d = 0; e === 0 && d < r.length;) e = r[d](i, f), d += 1;
            return e
        })
    }),
    split = invoker(1, "split"),
    splitAt = _curry2(function s(r, n) {
        return [slice(0, r, n), slice(r, length(n), n)]
    }),
    splitEvery = _curry2(function s(r, n) {
        if (r <= 0) throw new Error("First argument to splitEvery must be a positive integer");
        for (var i = [], f = 0; f < n.length;) i.push(slice(f, f += r, n));
        return i
    }),
    splitWhen = _curry2(function s(r, n) {
        for (var i = 0, f = n.length, e = []; i < f && !r(n[i]);) e.push(n[i]), i += 1;
        return [e, Array.prototype.slice.call(n, i)]
    }),
    startsWith = _curry2(function(s, r) {
        return equals(take(s.length, r), s)
    }),
    subtract = _curry2(function s(r, n) {
        return Number(r) - Number(n)
    }),
    symmetricDifference = _curry2(function s(r, n) {
        return concat(difference(r, n), difference(n, r))
    }),
    symmetricDifferenceWith = _curry3(function s(r, n, i) {
        return concat(differenceWith(r, n, i), differenceWith(r, i, n))
    }),
    takeLastWhile = _curry2(function s(r, n) {
        for (var i = n.length - 1; i >= 0 && r(n[i]);) i -= 1;
        return slice(i + 1, 1 / 0, n)
    }),
    XTakeWhile = function() {
        function s(r, n) {
            this.xf = n, this.f = r
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = _xfBase.result, s.prototype["@@transducer/step"] = function(r, n) {
            return this.f(n) ? this.xf["@@transducer/step"](r, n) : _reduced(r)
        }, s
    }(),
    _xtakeWhile = _curry2(function s(r, n) {
        return new XTakeWhile(r, n)
    }),
    takeWhile = _curry2(_dispatchable(["takeWhile"], _xtakeWhile, function s(r, n) {
        for (var i = 0, f = n.length; i < f && r(n[i]);) i += 1;
        return slice(0, i, n)
    })),
    XTap = function() {
        function s(r, n) {
            this.xf = n, this.f = r
        }
        return s.prototype["@@transducer/init"] = _xfBase.init, s.prototype["@@transducer/result"] = _xfBase.result, s.prototype["@@transducer/step"] = function(r, n) {
            return this.f(n), this.xf["@@transducer/step"](r, n)
        }, s
    }(),
    _xtap = _curry2(function s(r, n) {
        return new XTap(r, n)
    }),
    tap = _curry2(_dispatchable([], _xtap, function s(r, n) {
        return r(n), n
    }));

function _isRegExp(s) {
    return Object.prototype.toString.call(s) === "[object RegExp]"
}
var test = _curry2(function s(r, n) {
        if (!_isRegExp(r)) throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + toString(r));
        return _cloneRegExp(r).test(n)
    }),
    andThen = _curry2(function s(r, n) {
        return _assertPromise("andThen", n), n.then(r)
    }),
    toLower = invoker(0, "toLowerCase"),
    toPairs = _curry1(function s(r) {
        var n = [];
        for (var i in r) _has(i, r) && (n[n.length] = [i, r[i]]);
        return n
    }),
    toPairsIn = _curry1(function s(r) {
        var n = [];
        for (var i in r) n[n.length] = [i, r[i]];
        return n
    }),
    toUpper = invoker(0, "toUpperCase"),
    transduce = curryN(4, function s(r, n, i, f) {
        return _reduce(r(typeof n == "function" ? _xwrap(n) : n), i, f)
    }),
    transpose = _curry1(function s(r) {
        for (var n = 0, i = []; n < r.length;) {
            for (var f = r[n], e = 0; e < f.length;) typeof i[e] > "u" && (i[e] = []), i[e].push(f[e]), e += 1;
            n += 1
        }
        return i
    }),
    traverse = _curry3(function s(r, n, i) {
        return typeof i["fantasy-land/traverse"] == "function" ? i["fantasy-land/traverse"](n, r) : sequence(r, map(n, i))
    }),
    ws = `	
\v\f\r                　\u2028\u2029\uFEFF`,
    zeroWidth = "​",
    hasProtoTrim = typeof String.prototype.trim == "function",
    trim = _curry1(!hasProtoTrim || ws.trim() || !zeroWidth.trim() ? function s(r) {
        var n = new RegExp("^[" + ws + "][" + ws + "]*"),
            i = new RegExp("[" + ws + "][" + ws + "]*$");
        return r.replace(n, "").replace(i, "")
    } : function s(r) {
        return r.trim()
    }),
    tryCatch = _curry2(function s(r, n) {
        return _arity(r.length, function() {
            try {
                return r.apply(this, arguments)
            } catch (i) {
                return n.apply(this, _concat([i], arguments))
            }
        })
    }),
    unapply = _curry1(function s(r) {
        return function() {
            return r(Array.prototype.slice.call(arguments, 0))
        }
    }),
    unary = _curry1(function s(r) {
        return nAry(1, r)
    }),
    uncurryN = _curry2(function s(r, n) {
        return curryN(r, function() {
            for (var i = 1, f = n, e = 0, d; i <= r && typeof f == "function";) d = i === r ? arguments.length : e + f.length, f = f.apply(this, Array.prototype.slice.call(arguments, e, d)), i += 1, e = d;
            return f
        })
    }),
    unfold = _curry2(function s(r, n) {
        for (var i = r(n), f = []; i && i.length;) f[f.length] = i[0], i = r(i[1]);
        return f
    }),
    union = _curry2(compose(uniq, _concat)),
    uniqWith = _curry2(function s(r, n) {
        for (var i = 0, f = n.length, e = [], d; i < f;) d = n[i], _includesWith(r, d, e) || (e[e.length] = d), i += 1;
        return e
    }),
    unionWith = _curry3(function s(r, n, i) {
        return uniqWith(r, _concat(n, i))
    }),
    unless = _curry3(function s(r, n, i) {
        return r(i) ? i : n(i)
    }),
    unnest = chain(_identity),
    until = _curry3(function s(r, n, i) {
        for (var f = i; !r(f);) f = n(f);
        return f
    }),
    valuesIn = _curry1(function s(r) {
        var n, i = [];
        for (n in r) i[i.length] = r[n];
        return i
    }),
    Const = function(s) {
        return {
            value: s,
            "fantasy-land/map": function() {
                return this
            }
        }
    },
    view = _curry2(function s(r, n) {
        return r(Const)(n).value
    }),
    when = _curry3(function s(r, n, i) {
        return r(i) ? n(i) : i
    }),
    where = _curry2(function s(r, n) {
        for (var i in r)
            if (_has(i, r) && !r[i](n[i])) return !1;
        return !0
    }),
    whereEq = _curry2(function s(r, n) {
        return where(map(equals, r), n)
    }),
    without = _curry2(function(s, r) {
        return reject(flip(_includes)(s), r)
    }),
    xor = _curry2(function s(r, n) {
        return !!(!r ^ !n)
    }),
    xprod = _curry2(function s(r, n) {
        for (var i = 0, f = r.length, e, d = n.length, l = []; i < f;) {
            for (e = 0; e < d;) l[l.length] = [r[i], n[e]], e += 1;
            i += 1
        }
        return l
    }),
    zip = _curry2(function s(r, n) {
        for (var i = [], f = 0, e = Math.min(r.length, n.length); f < e;) i[f] = [r[f], n[f]], f += 1;
        return i
    }),
    zipObj = _curry2(function s(r, n) {
        for (var i = 0, f = Math.min(r.length, n.length), e = {}; i < f;) e[r[i]] = n[i], i += 1;
        return e
    }),
    zipWith = _curry3(function s(r, n, i) {
        for (var f = [], e = 0, d = Math.min(n.length, i.length); e < d;) f[e] = r(n[e], i[e]), e += 1;
        return f
    }),
    thunkify = _curry1(function s(r) {
        return curryN(r.length, function() {
            var i = arguments;
            return function() {
                return r.apply(this, i)
            }
        })
    });
const es = Object.freeze(Object.defineProperty({
        __proto__: null,
        F,
        T,
        __,
        add,
        addIndex,
        adjust,
        all,
        allPass,
        always,
        and,
        andThen,
        any,
        anyPass,
        ap,
        aperture,
        append,
        apply,
        applySpec,
        applyTo,
        ascend,
        assoc,
        assocPath,
        binary,
        bind,
        both,
        call,
        chain,
        clamp,
        clone,
        comparator,
        complement,
        compose,
        composeK,
        composeP,
        composeWith,
        concat,
        cond,
        construct,
        constructN,
        contains,
        converge,
        countBy,
        curry,
        curryN,
        dec,
        defaultTo,
        descend,
        difference,
        differenceWith,
        dissoc,
        dissocPath,
        divide,
        drop,
        dropLast,
        dropLastWhile,
        dropRepeats,
        dropRepeatsWith,
        dropWhile,
        either,
        empty,
        endsWith,
        eqBy,
        eqProps,
        equals,
        evolve,
        filter,
        find,
        findIndex,
        findLast,
        findLastIndex,
        flatten,
        flip,
        forEach,
        forEachObjIndexed,
        fromPairs,
        groupBy,
        groupWith,
        gt,
        gte,
        has,
        hasIn,
        hasPath,
        head,
        identical,
        identity,
        ifElse,
        inc,
        includes,
        indexBy,
        indexOf,
        init,
        innerJoin,
        insert,
        insertAll,
        intersection,
        intersperse,
        into,
        invert,
        invertObj,
        invoker,
        is,
        isEmpty,
        isNil,
        join: join$1,
        juxt,
        keys,
        keysIn,
        last,
        lastIndexOf,
        length,
        lens,
        lensIndex,
        lensPath,
        lensProp,
        lift,
        liftN,
        lt,
        lte,
        map,
        mapAccum,
        mapAccumRight,
        mapObjIndexed,
        match,
        mathMod,
        max,
        maxBy,
        mean,
        median,
        memoizeWith,
        merge,
        mergeAll,
        mergeDeepLeft,
        mergeDeepRight,
        mergeDeepWith,
        mergeDeepWithKey,
        mergeLeft,
        mergeRight,
        mergeWith,
        mergeWithKey,
        min,
        minBy,
        modulo,
        move,
        multiply,
        nAry,
        negate,
        none,
        not,
        nth,
        nthArg,
        o,
        objOf,
        of,
        omit,
        once,
        or,
        otherwise,
        over,
        pair,
        partial,
        partialRight,
        partition,
        path,
        pathEq,
        pathOr,
        pathSatisfies,
        paths,
        pick,
        pickAll,
        pickBy,
        pipe,
        pipeK,
        pipeP,
        pipeWith,
        pluck,
        prepend,
        product,
        project,
        prop,
        propEq,
        propIs,
        propOr,
        propSatisfies,
        props,
        range,
        reduce,
        reduceBy,
        reduceRight,
        reduceWhile,
        reduced,
        reject,
        remove,
        repeat,
        replace,
        reverse,
        scan,
        sequence,
        set,
        slice,
        sort,
        sortBy,
        sortWith,
        split,
        splitAt,
        splitEvery,
        splitWhen,
        startsWith,
        subtract,
        sum,
        symmetricDifference,
        symmetricDifferenceWith,
        tail,
        take,
        takeLast,
        takeLastWhile,
        takeWhile,
        tap,
        test,
        thunkify,
        times,
        toLower,
        toPairs,
        toPairsIn,
        toString,
        toUpper,
        transduce,
        transpose,
        traverse,
        trim,
        tryCatch,
        type,
        unapply,
        unary,
        uncurryN,
        unfold,
        union,
        unionWith,
        uniq,
        uniqBy,
        uniqWith,
        unless,
        unnest,
        until,
        update,
        useWith,
        values,
        valuesIn,
        view,
        when,
        where,
        whereEq,
        without,
        xor,
        xprod,
        zip,
        zipObj,
        zipWith
    }, Symbol.toStringTag, {
        value: "Module"
    })),
    require$$0 = getAugmentedNamespace(es);
var browser, hasRequiredBrowser;

function requireBrowser() {
    if (hasRequiredBrowser) return browser;
    hasRequiredBrowser = 1, browser = s;

    function s(r, n) {
        if (!Buffer.isBuffer(r)) throw new TypeError("First argument must be a buffer");
        if (!Buffer.isBuffer(n)) throw new TypeError("Second argument must be a buffer");
        if (r.length !== n.length) throw new TypeError("Input buffers must have the same length");
        for (var i = r.length, f = 0, e = -1; ++e < i;) f |= r[e] ^ n[e];
        return f === 0
    }
    return browser
}
var util, hasRequiredUtil;

function requireUtil() {
    if (hasRequiredUtil) return util;
    hasRequiredUtil = 1;
    const s = requireSafeBuffer$1().Buffer,
        {
            map: r,
            join: n,
            pipe: i,
            slice: f,
            curry: e,
            flip: d,
            dropLast: l,
            isEmpty: v,
            takeLast: a
        } = require$$0,
        u = O => ~O,
        h = (O, H, X = O.length) => i(g, f(H, X), b)(O),
        p = s.concat,
        b = s.from,
        g = O => Uint8Array.from(O),
        x = O => O.toString(2),
        E = i(g, r(u)),
        R = e((O, H, X) => X.map((W, J, D) => {
            if (J % H === 0) return O(W, J, D)
        }).filter((W, J) => J % H === 0)),
        k = (O, H, X) => {
            if (v(H) && v(X)) return O;
            const [W] = a(1, H), [J] = a(1, X);
            return O = O.replace(new RegExp(W, "g"), J), k(O, l(1, H), l(1, X))
        },
        I = e((O, H) => {
            var X = "";
            for (let W = 0; W < O; W++) X += "0";
            return X.slice(String(H).length) + H
        }),
        $ = i(Array.from, r(x), r(I(8)), n(""));
    return util = {
        toBuffer: b,
        byarr: g,
        compliment: E,
        byteToBin: $,
        nTobin: x,
        zeroPad: I,
        binToByte: O => {
            var H = [];
            for (let X = 0; X < O.length; X += 8) H.push(i(f(X, X + 8), d(parseInt)(2))(O));
            return new Uint8Array(H)
        },
        concatBuff: p,
        buffSlice: h,
        stepMap: R,
        recursiveReplace: k
    }, util
}
var encrypt_1, hasRequiredEncrypt;

function requireEncrypt() {
    if (hasRequiredEncrypt) return encrypt_1;
    hasRequiredEncrypt = 1;
    const s = requireBrowser$6(),
        {
            createCipheriv: r,
            createDecipheriv: n
        } = s,
        i = requireBrowser$b(),
        f = requireBrowser$8().pbkdf2Sync,
        e = requireBrowser$9(),
        {
            curry: d
        } = require$$0,
        l = requireBrowser(),
        {
            toBuffer: v,
            concatBuff: a,
            buffSlice: u
        } = requireUtil(),
        h = (R, k) => f(R, k, 1e4, 48, "sha512"),
        p = R => {
            const k = i(8),
                {
                    iv: I,
                    key: $,
                    secret: j
                } = x(R, k),
                O = r("aes-256-ctr", $, I),
                H = a([O.update(j, "utf8"), O.final()]);
            if (R.integrity) {
                const X = e("sha256", $).update(j).digest();
                return a([k, X, H])
            }
            return a([k, H])
        },
        b = R => {
            const {
                iv: k,
                key: I,
                secret: $,
                hmacData: j
            } = E(R, null), O = n("aes-256-ctr", I, k), H = a([O.update($, "utf8"), O.final()]);
            if (R.integrity) {
                const X = e("sha256", I).update(H).digest();
                if (!l(j, X)) throw new Error("Wrong password or Wrong payload (Hmac Integrity failure) ")
            }
            return H
        },
        g = (R, k, I) => {
            const $ = v(k.data),
                j = {};
            R === "encrypt" ? j.secret = $ : R === "decrypt" && (I = u($, 0, 8), k.integrity ? (j.hmacData = u($, 8, 40), j.secret = u($, 40)) : j.secret = u($, 8));
            const O = h(k.password, I);
            return j.iv = u(O, 0, 16), j.key = u(O, 16), j
        },
        x = d(g)("encrypt"),
        E = d(g)("decrypt");
    return encrypt_1 = {
        encrypt: p,
        decrypt: b
    }, encrypt_1
}
var lzutf8 = {
        exports: {}
    },
    hasRequiredLzutf8;

function requireLzutf8() {
    return hasRequiredLzutf8 || (hasRequiredLzutf8 = 1, function(s) {
        var r;
        (function(n) {
            n.runningInNodeJS = function() {
                return typeof process$1 == "object" && typeof process$1.versions == "object" && typeof process$1.versions.node == "string"
            }, n.runningInMainNodeJSModule = function() {
                return n.runningInNodeJS() && require.main === s
            }, n.commonJSAvailable = function() {
                return !0
            }, n.runningInWebWorker = function() {
                return typeof window > "u" && typeof self == "object" && typeof self.addEventListener == "function" && typeof self.close == "function"
            }, n.runningInNodeChildProcess = function() {
                return n.runningInNodeJS() && typeof process$1.send == "function"
            }, n.runningInNullOrigin = function() {
                return typeof window != "object" || typeof window.location != "object" || typeof document != "object" ? !1 : document.location.protocol !== "http:" && document.location.protocol !== "https:"
            }, n.webWorkersAvailable = function() {
                return !(typeof Worker != "function" || n.runningInNullOrigin() || n.runningInNodeJS() || navigator && navigator.userAgent && navigator.userAgent.indexOf("Android 4.3") >= 0)
            }, n.log = function(i, f) {
                f === void 0 && (f = !1), typeof console == "object" && (console.log(i), f && typeof document == "object" && (document.body.innerHTML += i + "<br/>"))
            }, n.createErrorMessage = function(i, f) {
                if (f === void 0 && (f = "Unhandled exception"), i == null) return f;
                if (f += ": ", typeof i.content == "object") {
                    if (n.runningInNodeJS()) return f + i.content.stack;
                    var e = JSON.stringify(i.content);
                    return e !== "{}" ? f + e : f + i.content
                } else return typeof i.content == "string" ? f + i.content : f + i
            }, n.printExceptionAndStackTraceToConsole = function(i, f) {
                f === void 0 && (f = "Unhandled exception"), n.log(n.createErrorMessage(i, f))
            }, n.getGlobalObject = function() {
                return typeof commonjsGlobal == "object" ? commonjsGlobal : typeof window == "object" ? window : typeof self == "object" ? self : {}
            }, n.toString = Object.prototype.toString, n.commonJSAvailable() && (s.exports = n)
        })(r || (r = {})),
        function(n) {
            if (typeof Uint8Array == "function" && new Uint8Array(1).subarray(1).byteLength !== 0) {
                var i = function(l, v) {
                        var a = function(h, p, b) {
                            return h < p ? p : h > b ? b : h
                        };
                        l = l | 0, v = v | 0, arguments.length < 1 && (l = 0), arguments.length < 2 && (v = this.length), l < 0 && (l = this.length + l), v < 0 && (v = this.length + v), l = a(l, 0, this.length), v = a(v, 0, this.length);
                        var u = v - l;
                        return u < 0 && (u = 0), new this.constructor(this.buffer, this.byteOffset + l * this.BYTES_PER_ELEMENT, u)
                    },
                    f = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"],
                    e = void 0;
                if (typeof window == "object" ? e = window : typeof self == "object" && (e = self), e !== void 0)
                    for (var d = 0; d < f.length; d++) e[f[d]] && (e[f[d]].prototype.subarray = i)
            }
        }();
        var r;
        (function(n) {
            var i = function() {
                function f() {}
                return f.compressAsync = function(e, d, l) {
                    var v = new n.Timer,
                        a = new n.Compressor;
                    if (!l) throw new TypeError("compressAsync: No callback argument given");
                    if (typeof e == "string") e = n.encodeUTF8(e);
                    else if (e == null || !(e instanceof Uint8Array)) {
                        l(void 0, new TypeError("compressAsync: Invalid input argument, only 'string' and 'Uint8Array' are supported"));
                        return
                    }
                    var u = n.ArrayTools.splitByteArray(e, d.blockSize),
                        h = [],
                        p = function(b) {
                            if (b < u.length) {
                                var g = void 0;
                                try {
                                    g = a.compressBlock(u[b])
                                } catch (E) {
                                    l(void 0, E);
                                    return
                                }
                                h.push(g), v.getElapsedTime() <= 20 ? p(b + 1) : (n.enqueueImmediate(function() {
                                    return p(b + 1)
                                }), v.restart())
                            } else {
                                var x = n.ArrayTools.concatUint8Arrays(h);
                                n.enqueueImmediate(function() {
                                    var E;
                                    try {
                                        E = n.CompressionCommon.encodeCompressedBytes(x, d.outputEncoding)
                                    } catch (R) {
                                        l(void 0, R);
                                        return
                                    }
                                    n.enqueueImmediate(function() {
                                        return l(E)
                                    })
                                })
                            }
                        };
                    n.enqueueImmediate(function() {
                        return p(0)
                    })
                }, f.createCompressionStream = function() {
                    var e = new n.Compressor,
                        d = requireReadableBrowser$1(),
                        l = new d.Transform({
                            decodeStrings: !0,
                            highWaterMark: 65536
                        });
                    return l._transform = function(v, a, u) {
                        var h;
                        try {
                            h = n.BufferTools.uint8ArrayToBuffer(e.compressBlock(n.BufferTools.bufferToUint8Array(v)))
                        } catch (p) {
                            l.emit("error", p);
                            return
                        }
                        l.push(h), u()
                    }, l
                }, f
            }();
            n.AsyncCompressor = i
        })(r || (r = {}));
        var r;
        (function(n) {
            var i = function() {
                function f() {}
                return f.decompressAsync = function(e, d, l) {
                    if (!l) throw new TypeError("decompressAsync: No callback argument given");
                    var v = new n.Timer;
                    try {
                        e = n.CompressionCommon.decodeCompressedBytes(e, d.inputEncoding)
                    } catch (b) {
                        l(void 0, b);
                        return
                    }
                    var a = new n.Decompressor,
                        u = n.ArrayTools.splitByteArray(e, d.blockSize),
                        h = [],
                        p = function(b) {
                            if (b < u.length) {
                                var g = void 0;
                                try {
                                    g = a.decompressBlock(u[b])
                                } catch (E) {
                                    l(void 0, E);
                                    return
                                }
                                h.push(g), v.getElapsedTime() <= 20 ? p(b + 1) : (n.enqueueImmediate(function() {
                                    return p(b + 1)
                                }), v.restart())
                            } else {
                                var x = n.ArrayTools.concatUint8Arrays(h);
                                n.enqueueImmediate(function() {
                                    var E;
                                    try {
                                        E = n.CompressionCommon.encodeDecompressedBytes(x, d.outputEncoding)
                                    } catch (R) {
                                        l(void 0, R);
                                        return
                                    }
                                    n.enqueueImmediate(function() {
                                        return l(E)
                                    })
                                })
                            }
                        };
                    n.enqueueImmediate(function() {
                        return p(0)
                    })
                }, f.createDecompressionStream = function() {
                    var e = new n.Decompressor,
                        d = requireReadableBrowser$1(),
                        l = new d.Transform({
                            decodeStrings: !0,
                            highWaterMark: 65536
                        });
                    return l._transform = function(v, a, u) {
                        var h;
                        try {
                            h = n.BufferTools.uint8ArrayToBuffer(e.decompressBlock(n.BufferTools.bufferToUint8Array(v)))
                        } catch (p) {
                            l.emit("error", p);
                            return
                        }
                        l.push(h), u()
                    }, l
                }, f
            }();
            n.AsyncDecompressor = i
        })(r || (r = {}));
        var r;
        (function(n) {
            var i;
            (function(f) {
                f.compressAsync = function(e, d, l) {
                    if (d.inputEncoding == "ByteArray" && !(e instanceof Uint8Array)) {
                        l(void 0, new TypeError("compressAsync: input is not a Uint8Array"));
                        return
                    }
                    var v = {
                            token: Math.random().toString(),
                            type: "compress",
                            data: e,
                            inputEncoding: d.inputEncoding,
                            outputEncoding: d.outputEncoding
                        },
                        a = function(u) {
                            var h = u.data;
                            !h || h.token != v.token || (f.globalWorker.removeEventListener("message", a), h.type == "error" ? l(void 0, new Error(h.error)) : l(h.data))
                        };
                    f.globalWorker.addEventListener("message", a), f.globalWorker.postMessage(v, [])
                }, f.decompressAsync = function(e, d, l) {
                    var v = {
                            token: Math.random().toString(),
                            type: "decompress",
                            data: e,
                            inputEncoding: d.inputEncoding,
                            outputEncoding: d.outputEncoding
                        },
                        a = function(u) {
                            var h = u.data;
                            !h || h.token != v.token || (f.globalWorker.removeEventListener("message", a), h.type == "error" ? l(void 0, new Error(h.error)) : l(h.data))
                        };
                    f.globalWorker.addEventListener("message", a), f.globalWorker.postMessage(v, [])
                }, f.installWebWorkerIfNeeded = function() {
                    typeof self == "object" && self.document === void 0 && self.addEventListener != null && (self.addEventListener("message", function(e) {
                        var d = e.data;
                        if (d.type == "compress") {
                            var l = void 0;
                            try {
                                l = n.compress(d.data, {
                                    outputEncoding: d.outputEncoding
                                })
                            } catch (u) {
                                self.postMessage({
                                    token: d.token,
                                    type: "error",
                                    error: n.createErrorMessage(u)
                                }, []);
                                return
                            }
                            var v = {
                                token: d.token,
                                type: "compressionResult",
                                data: l,
                                encoding: d.outputEncoding
                            };
                            v.data instanceof Uint8Array && navigator.appVersion.indexOf("MSIE 10") === -1 ? self.postMessage(v, [v.data.buffer]) : self.postMessage(v, [])
                        } else if (d.type == "decompress") {
                            var a = void 0;
                            try {
                                a = n.decompress(d.data, {
                                    inputEncoding: d.inputEncoding,
                                    outputEncoding: d.outputEncoding
                                })
                            } catch (h) {
                                self.postMessage({
                                    token: d.token,
                                    type: "error",
                                    error: n.createErrorMessage(h)
                                }, []);
                                return
                            }
                            var v = {
                                token: d.token,
                                type: "decompressionResult",
                                data: a,
                                encoding: d.outputEncoding
                            };
                            v.data instanceof Uint8Array && navigator.appVersion.indexOf("MSIE 10") === -1 ? self.postMessage(v, [v.data.buffer]) : self.postMessage(v, [])
                        }
                    }), self.addEventListener("error", function(e) {
                        n.log(n.createErrorMessage(e.error, "Unexpected LZUTF8 WebWorker exception"))
                    }))
                }, f.createGlobalWorkerIfNeeded = function() {
                    if (f.globalWorker) return !0;
                    if (!n.webWorkersAvailable()) return !1;
                    if (!f.scriptURI && typeof document == "object") {
                        var e = document.getElementById("lzutf8");
                        e != null && (f.scriptURI = e.getAttribute("src") || void 0)
                    }
                    return f.scriptURI ? (f.globalWorker = new Worker(f.scriptURI), !0) : !1
                }, f.terminate = function() {
                    f.globalWorker && (f.globalWorker.terminate(), f.globalWorker = void 0)
                }
            })(i = n.WebWorker || (n.WebWorker = {})), i.installWebWorkerIfNeeded()
        })(r || (r = {}));
        var r;
        (function(n) {
            var i = function() {
                function f(e, d, l) {
                    this.container = e, this.startPosition = d, this.length = l
                }
                return f.prototype.get = function(e) {
                    return this.container[this.startPosition + e]
                }, f.prototype.getInReversedOrder = function(e) {
                    return this.container[this.startPosition + this.length - 1 - e]
                }, f.prototype.set = function(e, d) {
                    this.container[this.startPosition + e] = d
                }, f
            }();
            n.ArraySegment = i
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                i.copyElements = function(f, e, d, l, v) {
                    for (; v--;) d[l++] = f[e++]
                }, i.zeroElements = function(f, e, d) {
                    for (; d--;) f[e++] = 0
                }, i.countNonzeroValuesInArray = function(f) {
                    for (var e = 0, d = 0; d < f.length; d++) f[d] && e++;
                    return e
                }, i.truncateStartingElements = function(f, e) {
                    if (f.length <= e) throw new RangeError("truncateStartingElements: Requested length should be smaller than array length");
                    for (var d = f.length - e, l = 0; l < e; l++) f[l] = f[d + l];
                    f.length = e
                }, i.doubleByteArrayCapacity = function(f) {
                    var e = new Uint8Array(f.length * 2);
                    return e.set(f), e
                }, i.concatUint8Arrays = function(f) {
                    for (var e = 0, d = 0, l = f; d < l.length; d++) {
                        var v = l[d];
                        e += v.length
                    }
                    for (var a = new Uint8Array(e), u = 0, h = 0, p = f; h < p.length; h++) {
                        var v = p[h];
                        a.set(v, u), u += v.length
                    }
                    return a
                }, i.splitByteArray = function(f, e) {
                    for (var d = [], l = 0; l < f.length;) {
                        var v = Math.min(e, f.length - l);
                        d.push(f.subarray(l, l + v)), l += v
                    }
                    return d
                }
            })(n.ArrayTools || (n.ArrayTools = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                i.convertToUint8ArrayIfNeeded = function(f) {
                    return typeof Buffer == "function" && Buffer.isBuffer(f) ? i.bufferToUint8Array(f) : f
                }, i.uint8ArrayToBuffer = function(f) {
                    if (Buffer.prototype instanceof Uint8Array) {
                        var e = new Uint8Array(f.buffer, f.byteOffset, f.byteLength);
                        return Object.setPrototypeOf(e, Buffer.prototype), e
                    } else {
                        for (var d = f.length, l = new Buffer(d), v = 0; v < d; v++) l[v] = f[v];
                        return l
                    }
                }, i.bufferToUint8Array = function(f) {
                    if (Buffer.prototype instanceof Uint8Array) return new Uint8Array(f.buffer, f.byteOffset, f.byteLength);
                    for (var e = f.length, d = new Uint8Array(e), l = 0; l < e; l++) d[l] = f[l];
                    return d
                }
            })(n.BufferTools || (n.BufferTools = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                i.getCroppedBuffer = function(f, e, d, l) {
                    l === void 0 && (l = 0);
                    var v = new Uint8Array(d + l);
                    return v.set(f.subarray(e, e + d)), v
                }, i.getCroppedAndAppendedByteArray = function(f, e, d, l) {
                    return n.ArrayTools.concatUint8Arrays([f.subarray(e, e + d), l])
                }, i.detectCompressionSourceEncoding = function(f) {
                    if (f == null) throw new TypeError("detectCompressionSourceEncoding: input is null or undefined");
                    if (typeof f == "string") return "String";
                    if (f instanceof Uint8Array || typeof Buffer == "function" && Buffer.isBuffer(f)) return "ByteArray";
                    throw new TypeError("detectCompressionSourceEncoding: input must be of type 'string', 'Uint8Array' or 'Buffer'")
                }, i.encodeCompressedBytes = function(f, e) {
                    switch (e) {
                        case "ByteArray":
                            return f;
                        case "Buffer":
                            return n.BufferTools.uint8ArrayToBuffer(f);
                        case "Base64":
                            return n.encodeBase64(f);
                        case "BinaryString":
                            return n.encodeBinaryString(f);
                        case "StorageBinaryString":
                            return n.encodeStorageBinaryString(f);
                        default:
                            throw new TypeError("encodeCompressedBytes: invalid output encoding requested")
                    }
                }, i.decodeCompressedBytes = function(f, e) {
                    if (e == null) throw new TypeError("decodeCompressedData: Input is null or undefined");
                    switch (e) {
                        case "ByteArray":
                        case "Buffer":
                            var d = n.BufferTools.convertToUint8ArrayIfNeeded(f);
                            if (!(d instanceof Uint8Array)) throw new TypeError("decodeCompressedData: 'ByteArray' or 'Buffer' input type was specified but input is not a Uint8Array or Buffer");
                            return d;
                        case "Base64":
                            if (typeof f != "string") throw new TypeError("decodeCompressedData: 'Base64' input type was specified but input is not a string");
                            return n.decodeBase64(f);
                        case "BinaryString":
                            if (typeof f != "string") throw new TypeError("decodeCompressedData: 'BinaryString' input type was specified but input is not a string");
                            return n.decodeBinaryString(f);
                        case "StorageBinaryString":
                            if (typeof f != "string") throw new TypeError("decodeCompressedData: 'StorageBinaryString' input type was specified but input is not a string");
                            return n.decodeStorageBinaryString(f);
                        default:
                            throw new TypeError("decodeCompressedData: invalid input encoding requested: '" + e + "'")
                    }
                }, i.encodeDecompressedBytes = function(f, e) {
                    switch (e) {
                        case "String":
                            return n.decodeUTF8(f);
                        case "ByteArray":
                            return f;
                        case "Buffer":
                            if (typeof Buffer != "function") throw new TypeError("encodeDecompressedBytes: a 'Buffer' type was specified but is not supported at the current envirnment");
                            return n.BufferTools.uint8ArrayToBuffer(f);
                        default:
                            throw new TypeError("encodeDecompressedBytes: invalid output encoding requested")
                    }
                }
            })(n.CompressionCommon || (n.CompressionCommon = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            var i;
            (function(f) {
                var e = [],
                    d;
                f.enqueueImmediate = function(l) {
                    e.push(l), e.length === 1 && d()
                }, f.initializeScheduler = function() {
                    var l = function() {
                        for (var h = 0, p = e; h < p.length; h++) {
                            var b = p[h];
                            try {
                                b.call(void 0)
                            } catch (g) {
                                n.printExceptionAndStackTraceToConsole(g, "enqueueImmediate exception")
                            }
                        }
                        e.length = 0
                    };
                    if (n.runningInNodeJS() && (d = function() {
                            return setImmediate(function() {
                                return l()
                            })
                        }), typeof window == "object" && typeof window.addEventListener == "function" && typeof window.postMessage == "function") {
                        var v = "enqueueImmediate-" + Math.random().toString();
                        window.addEventListener("message", function(h) {
                            h.data === v && l()
                        });
                        var a;
                        n.runningInNullOrigin() ? a = "*" : a = window.location.href, d = function() {
                            return window.postMessage(v, a)
                        }
                    } else if (typeof MessageChannel == "function" && typeof MessagePort == "function") {
                        var u = new MessageChannel;
                        u.port1.onmessage = function() {
                            return l()
                        }, d = function() {
                            return u.port2.postMessage(0)
                        }
                    } else d = function() {
                        return setTimeout(function() {
                            return l()
                        }, 0)
                    }
                }, f.initializeScheduler()
            })(i = n.EventLoop || (n.EventLoop = {})), n.enqueueImmediate = function(f) {
                return i.enqueueImmediate(f)
            }
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                i.override = function(f, e) {
                    return i.extend(f, e)
                }, i.extend = function(f, e) {
                    if (f == null) throw new TypeError("obj is null or undefined");
                    if (typeof f != "object") throw new TypeError("obj is not an object");
                    if (e == null && (e = {}), typeof e != "object") throw new TypeError("newProperties is not an object");
                    if (e != null)
                        for (var d in e) f[d] = e[d];
                    return f
                }
            })(n.ObjectTools || (n.ObjectTools = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            n.getRandomIntegerInRange = function(i, f) {
                return i + Math.floor(Math.random() * (f - i))
            }, n.getRandomUTF16StringOfLength = function(i) {
                for (var f = "", e = 0; e < i; e++) {
                    var d = void 0;
                    do d = n.getRandomIntegerInRange(0, 1114112); while (d >= 55296 && d <= 57343);
                    f += n.Encoding.CodePoint.decodeToString(d)
                }
                return f
            }
        })(r || (r = {}));
        var r;
        (function(n) {
            var i = function() {
                function f(e) {
                    e === void 0 && (e = 1024), this.outputBufferCapacity = e, this.outputPosition = 0, this.outputString = "", this.outputBuffer = new Uint16Array(this.outputBufferCapacity)
                }
                return f.prototype.appendCharCode = function(e) {
                    this.outputBuffer[this.outputPosition++] = e, this.outputPosition === this.outputBufferCapacity && this.flushBufferToOutputString()
                }, f.prototype.appendCharCodes = function(e) {
                    for (var d = 0, l = e.length; d < l; d++) this.appendCharCode(e[d])
                }, f.prototype.appendString = function(e) {
                    for (var d = 0, l = e.length; d < l; d++) this.appendCharCode(e.charCodeAt(d))
                }, f.prototype.appendCodePoint = function(e) {
                    if (e <= 65535) this.appendCharCode(e);
                    else if (e <= 1114111) this.appendCharCode(55296 + (e - 65536 >>> 10)), this.appendCharCode(56320 + (e - 65536 & 1023));
                    else throw new Error("appendCodePoint: A code point of " + e + " cannot be encoded in UTF-16")
                }, f.prototype.getOutputString = function() {
                    return this.flushBufferToOutputString(), this.outputString
                }, f.prototype.flushBufferToOutputString = function() {
                    this.outputPosition === this.outputBufferCapacity ? this.outputString += String.fromCharCode.apply(null, this.outputBuffer) : this.outputString += String.fromCharCode.apply(null, this.outputBuffer.subarray(0, this.outputPosition)), this.outputPosition = 0
                }, f
            }();
            n.StringBuilder = i
        })(r || (r = {}));
        var r;
        (function(n) {
            var i = function() {
                function f() {
                    this.restart()
                }
                return f.prototype.restart = function() {
                    this.startTime = f.getTimestamp()
                }, f.prototype.getElapsedTime = function() {
                    return f.getTimestamp() - this.startTime
                }, f.prototype.getElapsedTimeAndRestart = function() {
                    var e = this.getElapsedTime();
                    return this.restart(), e
                }, f.prototype.logAndRestart = function(e, d) {
                    d === void 0 && (d = !0);
                    var l = this.getElapsedTime(),
                        v = e + ": " + l.toFixed(3) + "ms";
                    return n.log(v, d), this.restart(), l
                }, f.getTimestamp = function() {
                    return this.timestampFunc || this.createGlobalTimestampFunction(), this.timestampFunc()
                }, f.getMicrosecondTimestamp = function() {
                    return Math.floor(f.getTimestamp() * 1e3)
                }, f.createGlobalTimestampFunction = function() {
                    if (typeof process$1 == "object" && typeof process$1.hrtime == "function") {
                        var e = 0;
                        this.timestampFunc = function() {
                            var a = process$1.hrtime(),
                                u = a[0] * 1e3 + a[1] / 1e6;
                            return e + u
                        }, e = Date.now() - this.timestampFunc()
                    } else if (typeof chrome == "object" && chrome.Interval) {
                        var d = Date.now(),
                            l = new chrome.Interval;
                        l.start(), this.timestampFunc = function() {
                            return d + l.microseconds() / 1e3
                        }
                    } else if (typeof performance == "object" && performance.now) {
                        var v = Date.now() - performance.now();
                        this.timestampFunc = function() {
                            return v + performance.now()
                        }
                    } else Date.now ? this.timestampFunc = function() {
                        return Date.now()
                    } : this.timestampFunc = function() {
                        return new Date().getTime()
                    }
                }, f
            }();
            n.Timer = i
        })(r || (r = {}));
        var r;
        (function(n) {
            var i = function() {
                function f(e) {
                    e === void 0 && (e = !0), this.MinimumSequenceLength = 4, this.MaximumSequenceLength = 31, this.MaximumMatchDistance = 32767, this.PrefixHashTableSize = 65537, this.inputBufferStreamOffset = 1, e && typeof Uint32Array == "function" ? this.prefixHashTable = new n.CompressorCustomHashTable(this.PrefixHashTableSize) : this.prefixHashTable = new n.CompressorSimpleHashTable(this.PrefixHashTableSize)
                }
                return f.prototype.compressBlock = function(e) {
                    if (e == null) throw new TypeError("compressBlock: undefined or null input received");
                    return typeof e == "string" && (e = n.encodeUTF8(e)), e = n.BufferTools.convertToUint8ArrayIfNeeded(e), this.compressUtf8Block(e)
                }, f.prototype.compressUtf8Block = function(e) {
                    if (!e || e.length == 0) return new Uint8Array(0);
                    var d = this.cropAndAddNewBytesToInputBuffer(e),
                        l = this.inputBuffer,
                        v = this.inputBuffer.length;
                    this.outputBuffer = new Uint8Array(e.length), this.outputBufferPosition = 0;
                    for (var a = 0, u = d; u < v; u++) {
                        var h = l[u],
                            p = u < a;
                        if (u > v - this.MinimumSequenceLength) {
                            p || this.outputRawByte(h);
                            continue
                        }
                        var b = this.getBucketIndexForPrefix(u);
                        if (!p) {
                            var g = this.findLongestMatch(u, b);
                            g != null && (this.outputPointerBytes(g.length, g.distance), a = u + g.length, p = !0)
                        }
                        p || this.outputRawByte(h);
                        var x = this.inputBufferStreamOffset + u;
                        this.prefixHashTable.addValueToBucket(b, x)
                    }
                    return this.outputBuffer.subarray(0, this.outputBufferPosition)
                }, f.prototype.findLongestMatch = function(e, d) {
                    var l = this.prefixHashTable.getArraySegmentForBucketIndex(d, this.reusableArraySegmentObject);
                    if (l == null) return null;
                    for (var v = this.inputBuffer, a, u = 0, h = 0; h < l.length; h++) {
                        var p = l.getInReversedOrder(h) - this.inputBufferStreamOffset,
                            b = e - p,
                            g = void 0;
                        if (a === void 0 ? g = this.MinimumSequenceLength - 1 : a < 128 && b >= 128 ? g = u + (u >>> 1) : g = u, b > this.MaximumMatchDistance || g >= this.MaximumSequenceLength || e + g >= v.length) break;
                        if (v[p + g] === v[e + g]) {
                            for (var x = 0;; x++)
                                if (e + x === v.length || v[p + x] !== v[e + x]) {
                                    x > g && (a = b, u = x);
                                    break
                                } else if (x === this.MaximumSequenceLength) return {
                                distance: b,
                                length: this.MaximumSequenceLength
                            }
                        }
                    }
                    return a !== void 0 ? {
                        distance: a,
                        length: u
                    } : null
                }, f.prototype.getBucketIndexForPrefix = function(e) {
                    return (this.inputBuffer[e] * 7880599 + this.inputBuffer[e + 1] * 39601 + this.inputBuffer[e + 2] * 199 + this.inputBuffer[e + 3]) % this.PrefixHashTableSize
                }, f.prototype.outputPointerBytes = function(e, d) {
                    d < 128 ? (this.outputRawByte(192 | e), this.outputRawByte(d)) : (this.outputRawByte(224 | e), this.outputRawByte(d >>> 8), this.outputRawByte(d & 255))
                }, f.prototype.outputRawByte = function(e) {
                    this.outputBuffer[this.outputBufferPosition++] = e
                }, f.prototype.cropAndAddNewBytesToInputBuffer = function(e) {
                    if (this.inputBuffer === void 0) return this.inputBuffer = e, 0;
                    var d = Math.min(this.inputBuffer.length, this.MaximumMatchDistance),
                        l = this.inputBuffer.length - d;
                    return this.inputBuffer = n.CompressionCommon.getCroppedAndAppendedByteArray(this.inputBuffer, l, d, e), this.inputBufferStreamOffset += l, d
                }, f
            }();
            n.Compressor = i
        })(r || (r = {}));
        var r;
        (function(n) {
            var i = function() {
                function f(e) {
                    this.minimumBucketCapacity = 4, this.maximumBucketCapacity = 64, this.bucketLocators = new Uint32Array(e * 2), this.storage = new Uint32Array(e * 2), this.storageIndex = 1
                }
                return f.prototype.addValueToBucket = function(e, d) {
                    e <<= 1, this.storageIndex >= this.storage.length >>> 1 && this.compact();
                    var l = this.bucketLocators[e],
                        v;
                    if (l === 0) l = this.storageIndex, v = 1, this.storage[this.storageIndex] = d, this.storageIndex += this.minimumBucketCapacity;
                    else {
                        v = this.bucketLocators[e + 1], v === this.maximumBucketCapacity - 1 && (v = this.truncateBucketToNewerElements(l, v, this.maximumBucketCapacity / 2));
                        var a = l + v;
                        this.storage[a] === 0 ? (this.storage[a] = d, a === this.storageIndex && (this.storageIndex += v)) : (n.ArrayTools.copyElements(this.storage, l, this.storage, this.storageIndex, v), l = this.storageIndex, this.storageIndex += v, this.storage[this.storageIndex++] = d, this.storageIndex += v), v++
                    }
                    this.bucketLocators[e] = l, this.bucketLocators[e + 1] = v
                }, f.prototype.truncateBucketToNewerElements = function(e, d, l) {
                    var v = e + d - l;
                    return n.ArrayTools.copyElements(this.storage, v, this.storage, e, l), n.ArrayTools.zeroElements(this.storage, e + l, d - l), l
                }, f.prototype.compact = function() {
                    var e = this.bucketLocators,
                        d = this.storage;
                    this.bucketLocators = new Uint32Array(this.bucketLocators.length), this.storageIndex = 1;
                    for (var l = 0; l < e.length; l += 2) {
                        var v = e[l + 1];
                        v !== 0 && (this.bucketLocators[l] = this.storageIndex, this.bucketLocators[l + 1] = v, this.storageIndex += Math.max(Math.min(v * 2, this.maximumBucketCapacity), this.minimumBucketCapacity))
                    }
                    this.storage = new Uint32Array(this.storageIndex * 8);
                    for (var l = 0; l < e.length; l += 2) {
                        var a = e[l];
                        if (a !== 0) {
                            var u = this.bucketLocators[l],
                                h = this.bucketLocators[l + 1];
                            n.ArrayTools.copyElements(d, a, this.storage, u, h)
                        }
                    }
                }, f.prototype.getArraySegmentForBucketIndex = function(e, d) {
                    e <<= 1;
                    var l = this.bucketLocators[e];
                    return l === 0 ? null : (d === void 0 && (d = new n.ArraySegment(this.storage, l, this.bucketLocators[e + 1])), d)
                }, f.prototype.getUsedBucketCount = function() {
                    return Math.floor(n.ArrayTools.countNonzeroValuesInArray(this.bucketLocators) / 2)
                }, f.prototype.getTotalElementCount = function() {
                    for (var e = 0, d = 0; d < this.bucketLocators.length; d += 2) e += this.bucketLocators[d + 1];
                    return e
                }, f
            }();
            n.CompressorCustomHashTable = i
        })(r || (r = {}));
        var r;
        (function(n) {
            var i = function() {
                function f(e) {
                    this.maximumBucketCapacity = 64, this.buckets = new Array(e)
                }
                return f.prototype.addValueToBucket = function(e, d) {
                    var l = this.buckets[e];
                    l === void 0 ? this.buckets[e] = [d] : (l.length === this.maximumBucketCapacity - 1 && n.ArrayTools.truncateStartingElements(l, this.maximumBucketCapacity / 2), l.push(d))
                }, f.prototype.getArraySegmentForBucketIndex = function(e, d) {
                    var l = this.buckets[e];
                    return l === void 0 ? null : (d === void 0 && (d = new n.ArraySegment(l, 0, l.length)), d)
                }, f.prototype.getUsedBucketCount = function() {
                    return n.ArrayTools.countNonzeroValuesInArray(this.buckets)
                }, f.prototype.getTotalElementCount = function() {
                    for (var e = 0, d = 0; d < this.buckets.length; d++) this.buckets[d] !== void 0 && (e += this.buckets[d].length);
                    return e
                }, f
            }();
            n.CompressorSimpleHashTable = i
        })(r || (r = {}));
        var r;
        (function(n) {
            var i = function() {
                function f() {
                    this.MaximumMatchDistance = 32767, this.outputPosition = 0
                }
                return f.prototype.decompressBlockToString = function(e) {
                    return e = n.BufferTools.convertToUint8ArrayIfNeeded(e), n.decodeUTF8(this.decompressBlock(e))
                }, f.prototype.decompressBlock = function(e) {
                    this.inputBufferRemainder && (e = n.ArrayTools.concatUint8Arrays([this.inputBufferRemainder, e]), this.inputBufferRemainder = void 0);
                    for (var d = this.cropOutputBufferToWindowAndInitialize(Math.max(e.length * 4, 1024)), l = 0, v = e.length; l < v; l++) {
                        var a = e[l];
                        if (a >>> 6 != 3) {
                            this.outputByte(a);
                            continue
                        }
                        var u = a >>> 5;
                        if (l == v - 1 || l == v - 2 && u == 7) {
                            this.inputBufferRemainder = e.subarray(l);
                            break
                        }
                        if (e[l + 1] >>> 7 === 1) this.outputByte(a);
                        else {
                            var h = a & 31,
                                p = void 0;
                            u == 6 ? (p = e[l + 1], l += 1) : (p = e[l + 1] << 8 | e[l + 2], l += 2);
                            for (var b = this.outputPosition - p, g = 0; g < h; g++) this.outputByte(this.outputBuffer[b + g])
                        }
                    }
                    return this.rollBackIfOutputBufferEndsWithATruncatedMultibyteSequence(), n.CompressionCommon.getCroppedBuffer(this.outputBuffer, d, this.outputPosition - d)
                }, f.prototype.outputByte = function(e) {
                    this.outputPosition === this.outputBuffer.length && (this.outputBuffer = n.ArrayTools.doubleByteArrayCapacity(this.outputBuffer)), this.outputBuffer[this.outputPosition++] = e
                }, f.prototype.cropOutputBufferToWindowAndInitialize = function(e) {
                    if (!this.outputBuffer) return this.outputBuffer = new Uint8Array(e), 0;
                    var d = Math.min(this.outputPosition, this.MaximumMatchDistance);
                    if (this.outputBuffer = n.CompressionCommon.getCroppedBuffer(this.outputBuffer, this.outputPosition - d, d, e), this.outputPosition = d, this.outputBufferRemainder) {
                        for (var l = 0; l < this.outputBufferRemainder.length; l++) this.outputByte(this.outputBufferRemainder[l]);
                        this.outputBufferRemainder = void 0
                    }
                    return d
                }, f.prototype.rollBackIfOutputBufferEndsWithATruncatedMultibyteSequence = function() {
                    for (var e = 1; e <= 4 && this.outputPosition - e >= 0; e++) {
                        var d = this.outputBuffer[this.outputPosition - e];
                        if (e < 4 && d >>> 3 === 30 || e < 3 && d >>> 4 === 14 || e < 2 && d >>> 5 === 6) {
                            this.outputBufferRemainder = this.outputBuffer.subarray(this.outputPosition - e, this.outputPosition), this.outputPosition -= e;
                            return
                        }
                    }
                }, f
            }();
            n.Decompressor = i
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                (function(f) {
                    var e = new Uint8Array([65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47]),
                        d = new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 255, 255, 255, 255]),
                        l = "=",
                        v = 61;
                    f.encode = function(a) {
                        return !a || a.length == 0 ? "" : n.runningInNodeJS() ? n.BufferTools.uint8ArrayToBuffer(a).toString("base64") : f.encodeWithJS(a)
                    }, f.decode = function(a) {
                        return a ? n.runningInNodeJS() ? n.BufferTools.bufferToUint8Array(Buffer.from(a, "base64")) : f.decodeWithJS(a) : new Uint8Array(0)
                    }, f.encodeWithJS = function(a, u) {
                        if (u === void 0 && (u = !0), !a || a.length == 0) return "";
                        for (var h = e, p = new n.StringBuilder, b, g = 0, x = a.length; g < x; g += 3) g <= x - 3 ? (b = a[g] << 16 | a[g + 1] << 8 | a[g + 2], p.appendCharCode(h[b >>> 18 & 63]), p.appendCharCode(h[b >>> 12 & 63]), p.appendCharCode(h[b >>> 6 & 63]), p.appendCharCode(h[b & 63]), b = 0) : g === x - 2 ? (b = a[g] << 16 | a[g + 1] << 8, p.appendCharCode(h[b >>> 18 & 63]), p.appendCharCode(h[b >>> 12 & 63]), p.appendCharCode(h[b >>> 6 & 63]), u && p.appendCharCode(v)) : g === x - 1 && (b = a[g] << 16, p.appendCharCode(h[b >>> 18 & 63]), p.appendCharCode(h[b >>> 12 & 63]), u && (p.appendCharCode(v), p.appendCharCode(v)));
                        return p.getOutputString()
                    }, f.decodeWithJS = function(a, u) {
                        if (!a || a.length == 0) return new Uint8Array(0);
                        var h = a.length % 4;
                        if (h === 1) throw new Error("Invalid Base64 string: length % 4 == 1");
                        h === 2 ? a += l + l : h === 3 && (a += l), u || (u = new Uint8Array(a.length));
                        for (var p = 0, b = a.length, g = 0; g < b; g += 4) {
                            var x = d[a.charCodeAt(g)] << 18 | d[a.charCodeAt(g + 1)] << 12 | d[a.charCodeAt(g + 2)] << 6 | d[a.charCodeAt(g + 3)];
                            u[p++] = x >>> 16 & 255, u[p++] = x >>> 8 & 255, u[p++] = x & 255
                        }
                        return a.charCodeAt(b - 1) == v && p--, a.charCodeAt(b - 2) == v && p--, u.subarray(0, p)
                    }
                })(i.Base64 || (i.Base64 = {}))
            })(n.Encoding || (n.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                (function(f) {
                    f.encode = function(e) {
                        if (e == null) throw new TypeError("BinaryString.encode: undefined or null input received");
                        if (e.length === 0) return "";
                        for (var d = e.length, l = new n.StringBuilder, v = 0, a = 1, u = 0; u < d; u += 2) {
                            var h = void 0;
                            u == d - 1 ? h = e[u] << 8 : h = e[u] << 8 | e[u + 1], l.appendCharCode(v << 16 - a | h >>> a), v = h & (1 << a) - 1, a === 15 ? (l.appendCharCode(v), v = 0, a = 1) : a += 1, u >= d - 2 && l.appendCharCode(v << 16 - a)
                        }
                        return l.appendCharCode(32768 | d % 2), l.getOutputString()
                    }, f.decode = function(e) {
                        if (typeof e != "string") throw new TypeError("BinaryString.decode: invalid input type");
                        if (e == "") return new Uint8Array(0);
                        for (var d = new Uint8Array(e.length * 3), l = 0, v = function(b) {
                                d[l++] = b >>> 8, d[l++] = b & 255
                            }, a = 0, u = 0, h = 0; h < e.length; h++) {
                            var p = e.charCodeAt(h);
                            if (p >= 32768) {
                                p == 32769 && l--, u = 0;
                                continue
                            }
                            u == 0 ? a = p : (v(a << u | p >>> 15 - u), a = p & (1 << 15 - u) - 1), u == 15 ? u = 0 : u += 1
                        }
                        return d.subarray(0, l)
                    }
                })(i.BinaryString || (i.BinaryString = {}))
            })(n.Encoding || (n.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                (function(f) {
                    f.encodeFromString = function(e, d) {
                        var l = e.charCodeAt(d);
                        if (l < 55296 || l > 56319) return l;
                        var v = e.charCodeAt(d + 1);
                        if (v >= 56320 && v <= 57343) return 65536 + ((l - 55296 << 10) + (v - 56320));
                        throw new Error("getUnicodeCodePoint: Received a lead surrogate character, char code " + l + ", followed by " + v + ", which is not a trailing surrogate character code.")
                    }, f.decodeToString = function(e) {
                        if (e <= 65535) return String.fromCharCode(e);
                        if (e <= 1114111) return String.fromCharCode(55296 + (e - 65536 >>> 10), 56320 + (e - 65536 & 1023));
                        throw new Error("getStringFromUnicodeCodePoint: A code point of " + e + " cannot be encoded in UTF-16")
                    }
                })(i.CodePoint || (i.CodePoint = {}))
            })(n.Encoding || (n.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                (function(f) {
                    var e = ["000", "001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "031", "032", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048", "049", "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "060", "061", "062", "063", "064", "065", "066", "067", "068", "069", "070", "071", "072", "073", "074", "075", "076", "077", "078", "079", "080", "081", "082", "083", "084", "085", "086", "087", "088", "089", "090", "091", "092", "093", "094", "095", "096", "097", "098", "099", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", "250", "251", "252", "253", "254", "255"];
                    f.encode = function(d) {
                        for (var l = [], v = 0; v < d.length; v++) l.push(e[d[v]]);
                        return l.join(" ")
                    }
                })(i.DecimalString || (i.DecimalString = {}))
            })(n.Encoding || (n.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                (function(f) {
                    f.encode = function(e) {
                        return i.BinaryString.encode(e).replace(/\0/g, "耂")
                    }, f.decode = function(e) {
                        return i.BinaryString.decode(e.replace(/\u8002/g, "\0"))
                    }
                })(i.StorageBinaryString || (i.StorageBinaryString = {}))
            })(n.Encoding || (n.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            (function(i) {
                (function(f) {
                    var e, d;
                    f.encode = function(l) {
                        return !l || l.length == 0 ? new Uint8Array(0) : n.runningInNodeJS() ? n.BufferTools.bufferToUint8Array(Buffer.from(l, "utf8")) : f.createNativeTextEncoderAndDecoderIfAvailable() ? e.encode(l) : f.encodeWithJS(l)
                    }, f.decode = function(l) {
                        return !l || l.length == 0 ? "" : n.runningInNodeJS() ? n.BufferTools.uint8ArrayToBuffer(l).toString("utf8") : f.createNativeTextEncoderAndDecoderIfAvailable() ? d.decode(l) : f.decodeWithJS(l)
                    }, f.encodeWithJS = function(l, v) {
                        if (!l || l.length == 0) return new Uint8Array(0);
                        v || (v = new Uint8Array(l.length * 4));
                        for (var a = 0, u = 0; u < l.length; u++) {
                            var h = i.CodePoint.encodeFromString(l, u);
                            if (h <= 127) v[a++] = h;
                            else if (h <= 2047) v[a++] = 192 | h >>> 6, v[a++] = 128 | h & 63;
                            else if (h <= 65535) v[a++] = 224 | h >>> 12, v[a++] = 128 | h >>> 6 & 63, v[a++] = 128 | h & 63;
                            else if (h <= 1114111) v[a++] = 240 | h >>> 18, v[a++] = 128 | h >>> 12 & 63, v[a++] = 128 | h >>> 6 & 63, v[a++] = 128 | h & 63, u++;
                            else throw new Error("Invalid UTF-16 string: Encountered a character unsupported by UTF-8/16 (RFC 3629)")
                        }
                        return v.subarray(0, a)
                    }, f.decodeWithJS = function(l, v, a) {
                        if (v === void 0 && (v = 0), !l || l.length == 0) return "";
                        a === void 0 && (a = l.length);
                        for (var u = new n.StringBuilder, h, p, b = v, g = a; b < g;) {
                            if (p = l[b], !(p >>> 7)) h = p, b += 1;
                            else if (p >>> 5 === 6) {
                                if (b + 1 >= a) throw new Error("Invalid UTF-8 stream: Truncated codepoint sequence encountered at position " + b);
                                h = (p & 31) << 6 | l[b + 1] & 63, b += 2
                            } else if (p >>> 4 === 14) {
                                if (b + 2 >= a) throw new Error("Invalid UTF-8 stream: Truncated codepoint sequence encountered at position " + b);
                                h = (p & 15) << 12 | (l[b + 1] & 63) << 6 | l[b + 2] & 63, b += 3
                            } else if (p >>> 3 === 30) {
                                if (b + 3 >= a) throw new Error("Invalid UTF-8 stream: Truncated codepoint sequence encountered at position " + b);
                                h = (p & 7) << 18 | (l[b + 1] & 63) << 12 | (l[b + 2] & 63) << 6 | l[b + 3] & 63, b += 4
                            } else throw new Error("Invalid UTF-8 stream: An invalid lead byte value encountered at position " + b);
                            u.appendCodePoint(h)
                        }
                        return u.getOutputString()
                    }, f.createNativeTextEncoderAndDecoderIfAvailable = function() {
                        return e ? !0 : typeof TextEncoder == "function" ? (e = new TextEncoder("utf-8"), d = new TextDecoder("utf-8"), !0) : !1
                    }
                })(i.UTF8 || (i.UTF8 = {}))
            })(n.Encoding || (n.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(n) {
            function i(R, k) {
                if (k === void 0 && (k = {}), R == null) throw new TypeError("compress: undefined or null input received");
                var I = n.CompressionCommon.detectCompressionSourceEncoding(R);
                k = n.ObjectTools.override({
                    inputEncoding: I,
                    outputEncoding: "ByteArray"
                }, k);
                var $ = new n.Compressor,
                    j = $.compressBlock(R);
                return n.CompressionCommon.encodeCompressedBytes(j, k.outputEncoding)
            }
            n.compress = i;

            function f(R, k) {
                if (k === void 0 && (k = {}), R == null) throw new TypeError("decompress: undefined or null input received");
                k = n.ObjectTools.override({
                    inputEncoding: "ByteArray",
                    outputEncoding: "String"
                }, k);
                var I = n.CompressionCommon.decodeCompressedBytes(R, k.inputEncoding),
                    $ = new n.Decompressor,
                    j = $.decompressBlock(I);
                return n.CompressionCommon.encodeDecompressedBytes(j, k.outputEncoding)
            }
            n.decompress = f;

            function e(R, k, I) {
                I == null && (I = function() {});
                var $;
                try {
                    $ = n.CompressionCommon.detectCompressionSourceEncoding(R)
                } catch (j) {
                    I(void 0, j);
                    return
                }
                k = n.ObjectTools.override({
                    inputEncoding: $,
                    outputEncoding: "ByteArray",
                    useWebWorker: !0,
                    blockSize: 65536
                }, k), n.enqueueImmediate(function() {
                    k.useWebWorker && n.WebWorker.createGlobalWorkerIfNeeded() ? n.WebWorker.compressAsync(R, k, I) : n.AsyncCompressor.compressAsync(R, k, I)
                })
            }
            n.compressAsync = e;

            function d(R, k, I) {
                if (I == null && (I = function() {}), R == null) {
                    I(void 0, new TypeError("decompressAsync: undefined or null input received"));
                    return
                }
                k = n.ObjectTools.override({
                    inputEncoding: "ByteArray",
                    outputEncoding: "String",
                    useWebWorker: !0,
                    blockSize: 65536
                }, k);
                var $ = n.BufferTools.convertToUint8ArrayIfNeeded(R);
                n.EventLoop.enqueueImmediate(function() {
                    k.useWebWorker && n.WebWorker.createGlobalWorkerIfNeeded() ? n.WebWorker.decompressAsync($, k, I) : n.AsyncDecompressor.decompressAsync(R, k, I)
                })
            }
            n.decompressAsync = d;

            function l() {
                return n.AsyncCompressor.createCompressionStream()
            }
            n.createCompressionStream = l;

            function v() {
                return n.AsyncDecompressor.createDecompressionStream()
            }
            n.createDecompressionStream = v;

            function a(R) {
                return n.Encoding.UTF8.encode(R)
            }
            n.encodeUTF8 = a;

            function u(R) {
                return n.Encoding.UTF8.decode(R)
            }
            n.decodeUTF8 = u;

            function h(R) {
                return n.Encoding.Base64.encode(R)
            }
            n.encodeBase64 = h;

            function p(R) {
                return n.Encoding.Base64.decode(R)
            }
            n.decodeBase64 = p;

            function b(R) {
                return n.Encoding.BinaryString.encode(R)
            }
            n.encodeBinaryString = b;

            function g(R) {
                return n.Encoding.BinaryString.decode(R)
            }
            n.decodeBinaryString = g;

            function x(R) {
                return n.Encoding.StorageBinaryString.encode(R)
            }
            n.encodeStorageBinaryString = x;

            function E(R) {
                return n.Encoding.StorageBinaryString.decode(R)
            }
            n.decodeStorageBinaryString = E
        })(r || (r = {}))
    }(lzutf8)), lzutf8.exports
}
var compact, hasRequiredCompact;

function requireCompact() {
    if (hasRequiredCompact) return compact;
    hasRequiredCompact = 1;
    const {
        pipe: s,
        curry: r,
        sort: n,
        difference: i,
        __: f
    } = require$$0, {
        recursiveReplace: e
    } = requireUtil(), d = requireLzutf8(), l = p => d.compress(p, {
        outputEncoding: "Buffer"
    }), v = r(d.decompress)(f, {
        inputEncoding: "Buffer",
        outputEncoding: "String"
    }), a = s(Buffer.from, v), u = (p, b) => {
        const g = b.reduce((I, $) => (I[$] = {}, I), {}),
            x = p.length;
        for (let I = 0; I < x; I++) {
            let $ = 1;
            for (; I < x && p[I] === p[I + 1];) $++, I++;
            if ($ >= 2) {
                let j = $;
                for (; j >= 2;) g[p[I]][j] = (g[p[I]][j] || 0) + Math.floor($ / j) * (j - 1), j--
            }
        }
        const E = [];
        for (const I in g)
            for (const $ in g[I]) E.push([I + $, g[I][$]]);
        let k = n((I, $) => $[1] - I[1], E).filter(I => I[0][1] === "2").slice(0, 2).map(I => I[0][0]);
        return k.length !== 2 && (k = k.concat(i(b, k).slice(0, 2 - k.length))), k.slice().sort()
    };
    return compact = {
        compress: l,
        decompress: a,
        zwcHuffMan: p => {
            const b = [p[0] + p[1], p[0] + p[2], p[0] + p[3], p[1] + p[2], p[1] + p[3], p[2] + p[3]],
                g = (k, I) => p[b.indexOf(k + I)],
                x = k => b[p.indexOf(k)].split("");
            return {
                shrink: k => {
                    const I = u(k, p.slice(0, 4));
                    return g(...I) + e(k, I.map($ => $ + $), [p[4], p[5]])
                },
                expand: k => {
                    const I = k[0],
                        $ = k.slice(1),
                        j = x(I);
                    return e($, [p[4], p[5]], j.map(O => O + O))
                }
            }
        }
    }, compact
}
var message, hasRequiredMessage;

function requireMessage() {
    if (hasRequiredMessage) return message;
    hasRequiredMessage = 1;
    const {
        pipe: s,
        intersection: r,
        indexOf: n,
        curry: i,
        __: f,
        slice: e,
        split: d,
        join: l,
        map: v
    } = require$$0, {
        zeroPad: a,
        nTobin: u,
        stepMap: h,
        binToByte: p
    } = requireUtil();
    return message = {
        zwcOperations: x => {
            const E = W => x[parseInt(W, 2)],
                R = s(n(f, x), u, a(2)),
                k = (W, J, D) => (W && J ? x[0] : J ? x[1] : x[2]) + h((y, t) => E(D[t] + D[t + 1]))(2, new Array(D.length).fill()).join(""),
                I = W => {
                    const J = x.indexOf(W[0]);
                    if (J === 0) return {
                        encrypt: !0,
                        integrity: !0
                    };
                    if (J === 1) return {
                        encrypt: !0,
                        integrity: !1
                    };
                    if (J === 2) return {
                        encrypt: !1,
                        integrity: !1
                    }
                },
                $ = i(k)(!0)(!0),
                j = i(k)(!1)(!0),
                O = i(k)(!1)(!1);
            return {
                detach: W => {
                    const D = W.split(" ").reduce((B, y) => {
                        const t = y.split("");
                        if (r(x, t).length !== 0) {
                            const _ = t.findIndex((w, q) => !~x.indexOf(w));
                            return y.slice(0, _)
                        }
                        return B
                    }, "");
                    if (!D) throw new Error("Invisible stream not detected! Please copy and paste the StegCloak text sent by the sender.");
                    return D
                },
                concealToData: W => {
                    const {
                        encrypt: J,
                        integrity: D
                    } = I(W);
                    return {
                        encrypt: J,
                        integrity: D,
                        data: s(e(1, 1 / 0), d(""), v(R), l(""), p)(W)
                    }
                },
                toConcealHmac: $,
                toConceal: j,
                noCrypt: O
            }
        },
        embed: (x, E) => {
            const R = x.split(" "),
                k = Math.floor(Math.random() * Math.floor(R.length / 2));
            return R.slice(0, k + 1).concat([E + R[k + 1]]).concat(R.slice(k + 2, R.length)).join(" ")
        }
    }, message
}
var stegcloak, hasRequiredStegcloak;

function requireStegcloak() {
    if (hasRequiredStegcloak) return stegcloak;
    hasRequiredStegcloak = 1;
    const s = require$$0,
        {
            encrypt: r,
            decrypt: n
        } = requireEncrypt(),
        {
            compress: i,
            decompress: f,
            zwcHuffMan: e
        } = requireCompact(),
        {
            zwcOperations: d,
            embed: l
        } = requireMessage(),
        v = ["‌", "‍", "⁡", "⁢", "⁣", "⁤"],
        {
            toConceal: a,
            toConcealHmac: u,
            concealToData: h,
            noCrypt: p,
            detach: b
        } = d(v),
        {
            shrink: g,
            expand: x
        } = e(v),
        {
            byteToBin: E,
            compliment: R
        } = requireUtil();
    class k {
        constructor($ = !0, j = !1) {
            this.encrypt = $, this.integrity = j
        }
        static get zwc() {
            return v
        }
        hide($, j, O = "This is a confidential text") {
            if (O.split(" ").length === 1) throw new Error("Minimum two words required");
            const H = this.integrity,
                X = this.encrypt,
                W = s.pipe(i, R)($),
                J = X ? r({
                    password: j,
                    data: W,
                    integrity: H
                }) : W,
                D = s.pipe(E, H && X ? u : X ? a : p, g)(J);
            return l(O, D)
        }
        reveal($, j) {
            const {
                data: O,
                integrity: H,
                encrypt: X
            } = s.pipe(b, x, h)($), W = X ? n({
                password: j,
                data: O,
                integrity: H
            }) : O;
            return s.pipe(R, f)(W)
        }
    }
    return stegcloak = k, stegcloak
}
var stegcloakExports = requireStegcloak();
const StegCloak = getDefaultExportFromCjs(stegcloakExports),
    getSecret = () => {
        const {
            decryptString: s
        } = new StringCrypto, r = document[s("c23c255b3a1fb2fedf42ed69d04942f9:4473665258554b335a4577725667643935513d3d", "GK")](s("84b8f50b09914dd59554cab4cb82f078:525a4759344a36757238527443585878485558307868447349446d5959337934", "GK"));
        if (r) {
            const n = r.getAttribute("content");
            if (n) return n.split("").reverse().join("")
        }
        return null
    },
    join = s => {
        const r = {
                roomId: s.roomId,
                name: s.name
            },
            n = getSecret();
        if (n) {
            const f = new StegCloak(!0, !1).hide(n, "BSKA", "Gimkit Web Client V3.1");
            r.clientType = f
        }
        request({
            url: "/api/matchmaker/join",
            data: r,
            success: i => {
                s.onSuccess && s.onSuccess(i)
            },
            error: i => {
                s.onError && s.onError(i)
            }
        })
    },
    JoinCodeScreen = s => {
        const [r, n] = reactExports.useState(""), [i, f] = reactExports.useState(""), [e, d] = reactExports.useState(), [l, v, a] = useBoolean(!1), [u, h, p] = useBoolean(!1), b = k => {
            let I = k;
            I || (I = r), !(!I || l) && (v(), submitCode({
                code: I,
                onSuccess: $ => {
                    a(), g($)
                },
                onError: $ => {
                    a(), n("");
                    const j = $ && $.message && $.message.text ? $.message.text : "An unknown error occurred";
                    staticMethods.error({
                        message: j,
                        placement: "bottomRight"
                    })
                }
            }))
        }, g = k => {
            k.roomId || k.groupId && (isLoggedIn() || (window.location.href = `/class/join/${k.groupId}?redirect=${encodeURIComponent(window.location.href)}`)), k.roomId && k.groupId && E({
                roomId: k.roomId
            }), d(k)
        }, x = () => {
            !e || !e.roomId || E({
                roomId: e.roomId
            })
        }, E = k => {
            u || (h(), join({
                roomId: k.roomId,
                name: i,
                onSuccess: I => {
                    s.setJoinLiveDetails({
                        serverUrl: I.serverUrl,
                        roomId: I.roomId,
                        intentId: I.intentId,
                        source: I.source
                    })
                },
                onError: I => {
                    var j;
                    const $ = (j = I == null ? void 0 : I.message) == null ? void 0 : j.text;
                    staticMethods.error({
                        message: $ || "Error joining game. Please refresh the page and try again.",
                        placement: "bottomRight"
                    }), p()
                }
            }))
        };
        reactExports.useEffect(() => {
            const k = getUrlVariable("gc");
            k && (n(k), b(k)), !k && isLoggedIn() && request({
                url: "/api/matchmaker/instant-join",
                success: I => {
                    I && I.code && (n(I.code), b(I.code))
                }
            })
        }, []);
        const R = () => e && e.roomId && !e.groupId ? jsxRuntimeExports.jsx(EnterName, {
            value: i,
            onValueChange: f,
            loading: u,
            submit: x,
            useRandomNamePicker: e.useRandomNamePicker
        }, "enter-name") : e && !e.roomId && e.groupId && e.groupName ? jsxRuntimeExports.jsx(JoinClass, {
            nameOfClass: e.groupName,
            link: `/class/join/${e.groupId}?redirect=${encodeURIComponent(window.location.href)}`
        }, "join-class") : jsxRuntimeExports.jsx(EnterCode, {
            value: r,
            onValueChange: n,
            loading: l || u,
            submit: b
        }, "enter-code");
        return jsxRuntimeExports.jsx(JoinBackgroundContainer, {
            children: jsxRuntimeExports.jsx(AnimatePresence, {
                initial: !0,
                mode: "wait",
                children: R()
            })
        })
    },
    ClassOption = s => {
        const r = `/class/join/${s.group._id}/?redirect=${encodeURIComponent(window.location.href)}`;
        return jsxRuntimeExports.jsx(AccessibleAnchor, {
            to: r,
            className: "maxWidth",
            children: jsxRuntimeExports.jsx(Card, {
                hoverable: !0,
                style: {
                    borderRadius: 8
                },
                bodyStyle: {
                    padding: 20
                },
                children: jsxRuntimeExports.jsxs(CardContainer, {
                    children: [jsxRuntimeExports.jsx("div", {
                        style: {
                            borderRadius: 5,
                            height: 40,
                            width: 40,
                            background: s.group.color
                        }
                    }), jsxRuntimeExports.jsx(RightSide, {
                        children: jsxRuntimeExports.jsx(Title, {
                            children: s.group.name
                        })
                    })]
                })
            })
        })
    },
    JoinClasses = s => {
        const r = () => s.groups.length ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsx(AccessText, {
                style: {
                    fontSize: isLoggedIn() ? 16 : 18
                },
                children: isLoggedIn() ? "To access this assignment, you'll have to join one of the classes it is assigned to. Choose a class below to join it." : "To access this assignment, select the class you're part of and authenticate in."
            }), jsxRuntimeExports.jsx(Divider, {}), s.groups.map((n, i) => jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [jsxRuntimeExports.jsx(ClassOption, {
                    group: n
                }), i + 1 !== s.groups.length ? jsxRuntimeExports.jsx("div", {
                    style: {
                        height: 10
                    }
                }) : null]
            }, n._id + "-join"))]
        }) : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsx(Divider, {}), jsxRuntimeExports.jsx(AccessText, {
                children: "This assignment is no longer available as it is assigned to a class that has been deleted."
            })]
        });
        return jsxRuntimeExports.jsx(JoinModal, {
            noImage: !!s.groups.length,
            customMaxWidth: 475,
            children: r()
        })
    },
    AccessText = dt.div`
  font-weight: ${FontWeights.Bold};
  text-align: center;
`,
    CardContainer = dt.div.attrs({
        className: "flex maxWidth vc"
    })`
  color: rgba(0, 0, 0, 0.9);
`,
    RightSide = dt.div`
  margin-left: 16px;
`,
    Title = dt.div`
  font-size: 14px;
  line-height: 1;
  font-weight: ${FontWeights.Bold};
`,
    DueDatePassed = s => {
        const r = dayjs(s.dueDate).format("MMMM Do"),
            n = dayjs(s.dueDate).format("ha");
        return jsxRuntimeExports.jsx(JoinModal, {
            noImage: !0,
            children: jsxRuntimeExports.jsxs(Container$1, {
                children: [jsxRuntimeExports.jsx("i", {
                    className: "far fa-alarm-exclamation",
                    style: {
                        color: "#f4511e",
                        fontSize: 38
                    }
                }), jsxRuntimeExports.jsx(Divider, {}), jsxRuntimeExports.jsxs(Text, {
                    children: ["The due date for this assignment was ", r, ", at", " ", n, ". It can no longer be completed."]
                })]
            })
        })
    },
    Container$1 = dt.div.attrs({
        className: "flex-column flex-center"
    })``,
    Text = dt.div`
  font-size: 16px;
  font-weight: ${FontWeights.Bold};
`,
    JoinAssignmentScreen = s => {
        const [r, n] = reactExports.useState(), [i, f] = reactExports.useState(""), [e, d, l] = useBoolean(!1);
        reactExports.useEffect(() => {
            request({
                url: "/api/matchmaker/pre-intent/assignment",
                data: {
                    assignmentId: s.assignmentId
                },
                success: u => {
                    if (u.canCreate && isLoggedIn()) {
                        v();
                        return
                    }
                    n(u)
                },
                error: () => {
                    window.location.href = "/join"
                }
            })
        }, []);
        const v = () => {
                e || (d(), request({
                    url: "/api/matchmaker/intent/assignment/create",
                    data: {
                        assignmentId: s.assignmentId,
                        name: i
                    },
                    success: u => {
                        s.setCreateMapDetails({
                            intentId: u
                        })
                    },
                    error: u => {
                        throwMessageError({
                            e: u,
                            default: {
                                title: "An unknown error occurred.",
                                content: "Please try again."
                            }
                        }), l()
                    }
                }))
            },
            a = () => r ? !r.canCreate && r.dueDate ? jsxRuntimeExports.jsx(DueDatePassed, {
                dueDate: r.dueDate
            }) : !r.canCreate && r.groups ? jsxRuntimeExports.jsx(JoinClasses, {
                groups: r.groups
            }) : jsxRuntimeExports.jsx(EnterName, {
                value: i,
                onValueChange: f,
                submit: v,
                loading: e
            }, "enter-name") : null;
        return jsxRuntimeExports.jsx(JoinBackgroundContainer, {
            children: jsxRuntimeExports.jsx(AnimatePresence, {
                initial: !0,
                mode: "wait",
                children: a()
            })
        })
    },
    Play = libExports.lazyWithPreload(() => __vitePreload(() => import("./index-25.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]))),
    MapApp = libExports.lazyWithPreload(() => __vitePreload(() => import("./App-41.js").then(s => s.bb), __vite__mapDeps([42, 1, 2, 43, 15, 13, 44, 45, 46, 47, 48, 6, 3, 49, 4, 50, 51, 35, 38, 39, 32, 52, 53, 54, 17, 55, 56, 57, 58, 24, 59, 60, 61, 62, 63, 16, 64, 65, 66, 67, 22, 37, 36, 68, 69, 70, 20, 71, 25, 40, 27, 12, 18, 19, 8, 9, 10, 11, 14, 23, 28, 72, 73, 74, 75, 76, 77, 78, 79, 33, 80]))),
    Join = () => {
        const [s, r] = useBoolean(!1), [n, i] = useBoolean(!1), [f, e] = reactExports.useState(), [d, l] = reactExports.useState(""), [v, a] = reactExports.useState(""), [u, h] = reactExports.useState(""), {
            assignmentId: p
        } = useParams();
        useTimeoutWhen(() => {
            window.location.reload()
        }, 1e3 * 60 * 60 * 10), reactExports.useEffect(() => {
            f && (f === ExperienceSource.original ? Play.preload() : MapApp.preload())
        }, [f]);
        const b = E => {
                l(E.serverUrl), a(E.roomId), h(E.intentId), e(E.source), r()
            },
            g = E => {
                i(), h(E.intentId), e(ExperienceSource.map), r()
            };
        if (s) return f === ExperienceSource.map ? jsxRuntimeExports.jsx(Container, {
            children: jsxRuntimeExports.jsx(MapApp, {
                joinDetails: n ? void 0 : {
                    serverUrl: d,
                    intentId: u,
                    roomId: v
                },
                createDetails: n ? {
                    intentId: u
                } : void 0
            })
        }) : jsxRuntimeExports.jsx(Container, {
            children: jsxRuntimeExports.jsx(Play, {
                joinDetails: {
                    serverUrl: d,
                    intentId: u,
                    roomId: v
                }
            })
        });
        const x = () => p ? jsxRuntimeExports.jsx(JoinAssignmentScreen, {
            assignmentId: p,
            setCreateMapDetails: g
        }) : jsxRuntimeExports.jsx(JoinCodeScreen, {
            setJoinLiveDetails: b
        });
        return jsxRuntimeExports.jsx(Container, {
            children: x()
        })
    },
    JoinContainer = () => (reactExports.useEffect(() => {
        document.querySelector('meta[name="theme-color"]').setAttribute("content", "#4252af")
    }, []), jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
        children: [jsxRuntimeExports.jsx(Title$1, {
            title: "Play Gimkit! - Enter game code here",
            description: "Join a game of Gimkit, an online strategic game show for the classroom."
        }), jsxRuntimeExports.jsx(GlobalStyle, {}), jsxRuntimeExports.jsx(reactExports.Suspense, {
            fallback: jsxRuntimeExports.jsx(Container, {
                children: jsxRuntimeExports.jsx(JoinBackgroundContainer, {})
            }),
            children: jsxRuntimeExports.jsx(Join, {})
        })]
    })),
    Container = dt.div.attrs({
        className: "flex-column scroll-y"
    })`
  flex: 1;
`,
    GlobalStyle = ft`
  html {
    height: 100%;
  }
  body {
    height: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    color: ${Colors.Black};
  }
`,
    App = Object.freeze(Object.defineProperty({
        __proto__: null,
        default: JoinContainer
    }, Symbol.toStringTag, {
        value: "Module"
    }));
export {
    App as A, Button$1 as B, LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME as L
};