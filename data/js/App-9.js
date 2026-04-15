const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/index-26.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/mobxreact.esm.js", "assets/QuizTypes.js", "assets/colors.js", "assets/howler.js", "assets/Codes.js", "assets/GimkitLiveQuestion.js", "assets/Text.js", "assets/getCloudinaryUrl.js", "assets/LazyLatexRenderer.js", "assets/clsx.m.js", "assets/inheritsLoose.js", "assets/Tooltip.js", "assets/polished.esm.js", "assets/index-1.js", "assets/motion.js", "assets/index-18.js", "assets/use-force-update.js", "assets/use-motion-value.js", "assets/index-27.js", "assets/___vite-browser-external_commonjs-proxy.js", "assets/index-9.js", "assets/index-3.js", "assets/index-6.js", "assets/confetti.js", "assets/CircularProgress.js", "assets/index-24.js", "assets/react.js", "assets/index-7.js", "assets/DownOutlined.js", "assets/FontAwesomeIcon.js", "assets/FillRemainingSpace.js", "assets/index-15.js", "assets/index-5.js", "assets/index-17.js", "assets/util.js", "assets/index-19.js", "assets/context.js", "assets/AccessibleAnchor.js", "assets/index-DehyGq21.css", "assets/App-41.js", "assets/Button.js", "assets/FixSpinePlugin.js", "assets/GetAssetPath.js", "assets/MapModeType.js", "assets/MapStyle.js", "assets/playSound.js", "assets/index-22.js", "assets/TutorialConsts.js", "assets/ActionButton.js", "assets/Centered.js", "assets/CapitalizeFirstLetter.js", "assets/index-4.js", "assets/index-2.js", "assets/index-14.js", "assets/EditOutlined.js", "assets/styleChecker.js", "assets/CheckOutlined.js", "assets/CopyOutlined.js", "assets/SixteenByNineScaler.js", "assets/index-21.js", "assets/index-23.js", "assets/progress.js", "assets/ElementIds.js", "assets/SeasonTicketName.js", "assets/useQuery.js", "assets/Shortcut.js", "assets/Names.js", "assets/useWillUnmount.js", "assets/use-transform.js", "assets/useIntervalWhen.js", "assets/index-10.js", "assets/move.js", "assets/react-flip-move.es.js", "assets/sounds.js", "assets/App-5.js", "assets/AnimatedBackground-2.js", "assets/useDebouncedValue.js", "assets/index-25.js"]))) => i.map(i => d[i]);
import {
    j as jsxRuntimeExports,
    e as Colors,
    b as ut,
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
    d as dayjs,
    t as throwMessageError,
    T as Title$1,
    ay as ht,
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
    r as requireSafeBuffer$2,
    a as requireEvents,
    b as requireDist$1,
    c as requireProcessNextickArgs,
    d as requireUtil$2,
    e as requireBrowser$c,
    f as requireString_decoder,
    g as requireStreamBrowserify,
    h as require_stream_readable$2,
    i as require_stream_writable$2,
    j as require_stream_duplex$2,
    k as require_stream_transform$2,
    l as require_stream_passthrough$2,
    m as requireEndOfStream,
    n as requirePipeline
} from "./index-17.js";
import {
    r as requireCallBound,
    a as requireIsTypedArray,
    b as requireType,
    c as requireUtil$1,
    d as requireInherits_browser
} from "./util.js";
import {
    A as AnimatePresence,
    u as useTimeoutWhen
} from "./index-18.js";
import {
    s as staticMethods
} from "./index-19.js";
import {
    A as AccessibleAnchor
} from "./AccessibleAnchor.js";
const JoinBackgroundContainer = a => jsxRuntimeExports.jsx(FillRemainingSpace, {
        children: jsxRuntimeExports.jsx(Container$5, {
            children: a.children
        })
    }),
    Container$5 = ut.div.attrs({
        className: "flex-center maxAll"
    })`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/assets/play/background.png') repeat 0 0;
  color: ${Colors.Black};
`,
    JoinInput = ut.input`
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
    getButtonColor = (a, r) => a === "disabled" ? Colors$1.DisabledGray : r || (a === "primary" ? Colors$1.PrimaryBlue : a === "secondary" ? Colors$1.SecondaryPurple : Colors$1.Black),
    Button = ut.div`
  box-sizing: border-box;
  padding: ${a=>a.size==="medium"?"12px 16px 12px":a.size==="large"?"13px 21px 13px":"8px 13px 8px"};
  font-size: ${a=>a.size==="medium"?17:a.size==="large"?23:15}px;
  background: ${a=>a.color};
  color: ${Colors$1.White};
  transition: background 0.2s ease;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
  display: inline-block;
  user-select: none;
  cursor: ${a=>a.type==="disabled"?"not-allowed":"pointer"};
  &:hover {
    background: ${a=>curriedLighten$1(.1,a.color)};
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
const JoinPrimaryButton = a => jsxRuntimeExports.jsx(Button$1, {
        id: a.id,
        type: "secondary",
        style: Object.assign(a.style || {}, {
            width: "100%"
        }),
        size: "small",
        label: jsxRuntimeExports.jsx("div", {
            className: "maxAll flex-center",
            children: a.loading ? jsxRuntimeExports.jsx(CircularProgress, {
                size: 22
            }) : jsxRuntimeExports.jsx("span", {
                children: a.label
            })
        }),
        onClick: a.onClick
    }),
    OUT_ANIM = {
        scale: .9,
        opacity: 0
    },
    IN_ANIM = {
        scale: 1,
        opacity: 1
    },
    JoinModal = a => jsxRuntimeExports.jsx(Container$4, {
        className: a.containerClassName,
        style: {
            maxWidth: a.customMaxWidth || 400
        },
        children: jsxRuntimeExports.jsxs(Modal, {
            initial: a.alreadyAnimatedIn ? IN_ANIM : OUT_ANIM,
            animate: IN_ANIM,
            exit: OUT_ANIM,
            transition: {
                duration: .4
            },
            className: a.className,
            children: [a.noImage ? null : jsxRuntimeExports.jsx("img", {
                src: "/client/img/svgLogo.svg",
                style: {
                    width: "70%",
                    maxWidth: 220
                }
            }), a.children]
        })
    }),
    Container$4 = ut.div.attrs({
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
    Modal = ut(motion.div).attrs({
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
    EnterCode = a => {
        const r = () => {
                !a.loading && a.submit && a.submit()
            },
            i = s => {
                a.onValueChange && a.onValueChange(s.target.value)
            },
            n = s => {
                s.key === "Enter" && r()
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
                value: a.value,
                onChange: i,
                onKeyDown: n,
                spellCheck: "false"
            }), jsxRuntimeExports.jsx(JoinPrimaryButton, {
                label: "Join",
                onClick: r,
                loading: a.loading
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
    FriendlyNamePicker = a => {
        const [r, i] = reactExports.useState(0), n = reactExports.useMemo(() => {
            let c = [];
            for (let l = 0; l < CHANCES; l++) c.push(generateName());
            return c
        }, []), s = reactExports.useMemo(() => n[r], [r]);
        reactExports.useEffect(() => {
            a.onNameChange(s)
        }, [s]);
        const e = reactExports.useMemo(() => r + 1 !== CHANCES, [r]),
            h = () => {
                e && i(c => c + 1)
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
                    value: s,
                    readOnly: !0,
                    spellcheck: "false"
                }), jsxRuntimeExports.jsx(Tooltip, {
                    title: e ? `Spin Again (${CHANCES-r-1} Left)` : "Out Of Spins!",
                    children: jsxRuntimeExports.jsx("div", {
                        style: {
                            marginLeft: 7
                        },
                        children: jsxRuntimeExports.jsx(Button$1, {
                            onClick: h,
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
    Container$3 = ut.div.attrs({
        className: "maxWidth flex-center flex-column"
    })`
  margin-bottom: 10px;
`;
ut.div`
  font-size: 16px;
  color: rgba(0, 0, 0, 0.8);
  font-style: italic;
  margin-bottom: 7px;
`;
const LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME = "play-again-last-used-name",
    EnterName = a => {
        const [r, i] = reactExports.useState(""), n = () => {
            (a.value || "").trim().length && !a.loading && a.submit && a.submit()
        }, s = h => {
            a.onValueChange && a.onValueChange(h.target.value)
        }, e = h => {
            h.key === "Enter" && n()
        };
        return reactExports.useEffect(() => {
            const h = localStorage.getItem(LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME);
            h && (i(h), localStorage.removeItem(LOCAL_STORAGE_PLAY_AGAIN_LAST_USED_NAME), a.onValueChange(h))
        }, []), reactExports.useEffect(() => {
            a.value && r && r === a.value && n()
        }, [r, a.value]), jsxRuntimeExports.jsxs(JoinModal, {
            children: [a.useRandomNamePicker ? jsxRuntimeExports.jsx(FriendlyNamePicker, {
                onNameChange: a.onValueChange
            }) : jsxRuntimeExports.jsx(JoinInput, {
                id: "player-name-input",
                style: {
                    marginTop: 14,
                    marginBottom: 7
                },
                placeholder: "Your Name",
                maxLength: 20,
                value: a.value,
                onChange: s,
                onKeyDown: e,
                spellcheck: "false"
            }), jsxRuntimeExports.jsx(JoinPrimaryButton, {
                id: "join-game-button",
                label: "Join",
                onClick: n,
                loading: a.loading
            })]
        })
    },
    JoinClass = a => jsxRuntimeExports.jsx(JoinModal, {
        noImage: !0,
        children: jsxRuntimeExports.jsxs(Container$2, {
            children: [jsxRuntimeExports.jsx(Image, {}), jsxRuntimeExports.jsx(Divider, {}), jsxRuntimeExports.jsxs(Text$1, {
                children: ["To access this game, you must join the ", jsxRuntimeExports.jsx("b", {
                    children: a.nameOfClass
                }), " ", "class."]
            }), jsxRuntimeExports.jsx(Button$2, {
                href: a.link,
                style: {
                    marginTop: 20
                },
                type: "primary",
                block: !0,
                children: "Join Class"
            })]
        })
    }),
    Container$2 = ut.div.attrs({
        className: "maxWidth flex-column flex-center"
    })``,
    Image = ut.img.attrs({
        src: "/client/img/svgLogo.svg"
    })`
  height: 30px;
`,
    Text$1 = ut.div`
  font-size: 16px;
`,
    submitCode = a => {
        const {
            code: r,
            onSuccess: i,
            onError: n
        } = a;
        if (r.length < 4 && inProductionOrStaging) {
            n && n({
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
            success: s => {
                i && i(s)
            },
            error: s => {
                n && n(s)
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
    var a = 65536,
        r = 4294967295;

    function i() {
        throw new Error(`Secure random number generation is not supported by this browser.
Use Chrome, Firefox or Internet Explorer 11`)
    }
    var n = requireSafeBuffer$2().Buffer,
        s = commonjsGlobal.crypto || commonjsGlobal.msCrypto;
    s && s.getRandomValues ? browser$b.exports = e : browser$b.exports = i;

    function e(h, c) {
        if (h > r) throw new RangeError("requested too many random bytes");
        var l = n.allocUnsafe(h);
        if (h > 0)
            if (h > a)
                for (var p = 0; p < h; p += a) s.getRandomValues(l.slice(p, p + a));
            else s.getRandomValues(l);
        return typeof c == "function" ? process$1.nextTick(function() {
            c(null, l)
        }) : l
    }
    return browser$b.exports
}
var isarray$2, hasRequiredIsarray$2;

function requireIsarray$2() {
    if (hasRequiredIsarray$2) return isarray$2;
    hasRequiredIsarray$2 = 1;
    var a = {}.toString;
    return isarray$2 = Array.isArray || function(r) {
        return a.call(r) == "[object Array]"
    }, isarray$2
}
var typedArrayBuffer, hasRequiredTypedArrayBuffer;

function requireTypedArrayBuffer() {
    if (hasRequiredTypedArrayBuffer) return typedArrayBuffer;
    hasRequiredTypedArrayBuffer = 1;
    var a = requireType(),
        r = requireCallBound(),
        i = r("TypedArray.prototype.buffer", !0),
        n = requireIsTypedArray();
    return typedArrayBuffer = i || function(e) {
        if (!n(e)) throw new a("Not a Typed Array");
        return e.buffer
    }, typedArrayBuffer
}
var toBuffer, hasRequiredToBuffer$2;

function requireToBuffer$2() {
    if (hasRequiredToBuffer$2) return toBuffer;
    hasRequiredToBuffer$2 = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireIsarray$2(),
        i = requireTypedArrayBuffer(),
        n = ArrayBuffer.isView || function(l) {
            try {
                return i(l), !0
            } catch {
                return !1
            }
        },
        s = typeof Uint8Array < "u",
        e = typeof ArrayBuffer < "u" && typeof Uint8Array < "u",
        h = e && (a.prototype instanceof Uint8Array || a.TYPED_ARRAY_SUPPORT);
    return toBuffer = function(l, p) {
        if (a.isBuffer(l)) return l.constructor && !("isBuffer" in l) ? a.from(l) : l;
        if (typeof l == "string") return a.from(l, p);
        if (e && n(l)) {
            if (l.byteLength === 0) return a.alloc(0);
            if (h) {
                var f = a.from(l.buffer, l.byteOffset, l.byteLength);
                if (f.byteLength === l.byteLength) return f
            }
            var m = l instanceof Uint8Array ? l : new Uint8Array(l.buffer, l.byteOffset, l.byteLength),
                w = a.from(m);
            if (w.length === l.byteLength) return w
        }
        if (s && l instanceof Uint8Array) return a.from(l);
        var x = r(l);
        if (x)
            for (var B = 0; B < l.length; B += 1) {
                var E = l[B];
                if (typeof E != "number" || E < 0 || E > 255 || ~~E !== E) throw new RangeError("Array items must be numbers in the range 0-255.")
            }
        if (x || a.isBuffer(l) && l.constructor && typeof l.constructor.isBuffer == "function" && l.constructor.isBuffer(l)) return a.from(l);
        throw new TypeError('The "data" argument must be a string, an Array, a Buffer, a Uint8Array, or a DataView.')
    }, toBuffer
}
var toBuffer_1$1, hasRequiredToBuffer$1;

function requireToBuffer$1() {
    if (hasRequiredToBuffer$1) return toBuffer_1$1;
    hasRequiredToBuffer$1 = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireToBuffer$2(),
        i = typeof Uint8Array < "u",
        n = i && typeof ArrayBuffer < "u",
        s = n && ArrayBuffer.isView;
    return toBuffer_1$1 = function(e, h) {
        if (typeof e == "string" || a.isBuffer(e) || i && e instanceof Uint8Array || s && s(e)) return r(e, h);
        throw new TypeError('The "data" argument must be a string, a Buffer, a Uint8Array, or a DataView')
    }, toBuffer_1$1
}
var readableBrowser$2 = {
        exports: {}
    },
    isarray$1, hasRequiredIsarray$1;

function requireIsarray$1() {
    if (hasRequiredIsarray$1) return isarray$1;
    hasRequiredIsarray$1 = 1;
    var a = {}.toString;
    return isarray$1 = Array.isArray || function(r) {
        return a.call(r) == "[object Array]"
    }, isarray$1
}
var streamBrowser$1, hasRequiredStreamBrowser$1;

function requireStreamBrowser$1() {
    return hasRequiredStreamBrowser$1 || (hasRequiredStreamBrowser$1 = 1, streamBrowser$1 = requireEvents().EventEmitter), streamBrowser$1
}
var safeBuffer$1 = {
        exports: {}
    },
    hasRequiredSafeBuffer$1;

function requireSafeBuffer$1() {
    return hasRequiredSafeBuffer$1 || (hasRequiredSafeBuffer$1 = 1, (function(a, r) {
        var i = requireDist$1(),
            n = i.Buffer;

        function s(h, c) {
            for (var l in h) c[l] = h[l]
        }
        n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? a.exports = i : (s(i, r), r.Buffer = e);

        function e(h, c, l) {
            return n(h, c, l)
        }
        s(n, e), e.from = function(h, c, l) {
            if (typeof h == "number") throw new TypeError("Argument must not be a number");
            return n(h, c, l)
        }, e.alloc = function(h, c, l) {
            if (typeof h != "number") throw new TypeError("Argument must be a number");
            var p = n(h);
            return c !== void 0 ? typeof l == "string" ? p.fill(c, l) : p.fill(c) : p.fill(0), p
        }, e.allocUnsafe = function(h) {
            if (typeof h != "number") throw new TypeError("Argument must be a number");
            return n(h)
        }, e.allocUnsafeSlow = function(h) {
            if (typeof h != "number") throw new TypeError("Argument must be a number");
            return i.SlowBuffer(h)
        }
    })(safeBuffer$1, safeBuffer$1.exports)), safeBuffer$1.exports
}
var BufferList$1 = {
        exports: {}
    },
    hasRequiredBufferList$1;

function requireBufferList$1() {
    return hasRequiredBufferList$1 || (hasRequiredBufferList$1 = 1, (function(a) {
        function r(e, h) {
            if (!(e instanceof h)) throw new TypeError("Cannot call a class as a function")
        }
        var i = requireSafeBuffer$1().Buffer,
            n = requireUtil$1();

        function s(e, h, c) {
            e.copy(h, c)
        }
        a.exports = (function() {
            function e() {
                r(this, e), this.head = null, this.tail = null, this.length = 0
            }
            return e.prototype.push = function(c) {
                var l = {
                    data: c,
                    next: null
                };
                this.length > 0 ? this.tail.next = l : this.head = l, this.tail = l, ++this.length
            }, e.prototype.unshift = function(c) {
                var l = {
                    data: c,
                    next: this.head
                };
                this.length === 0 && (this.tail = l), this.head = l, ++this.length
            }, e.prototype.shift = function() {
                if (this.length !== 0) {
                    var c = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, c
                }
            }, e.prototype.clear = function() {
                this.head = this.tail = null, this.length = 0
            }, e.prototype.join = function(c) {
                if (this.length === 0) return "";
                for (var l = this.head, p = "" + l.data; l = l.next;) p += c + l.data;
                return p
            }, e.prototype.concat = function(c) {
                if (this.length === 0) return i.alloc(0);
                for (var l = i.allocUnsafe(c >>> 0), p = this.head, f = 0; p;) s(p.data, l, f), f += p.data.length, p = p.next;
                return l
            }, e
        })(), n && n.inspect && n.inspect.custom && (a.exports.prototype[n.inspect.custom] = function() {
            var e = n.inspect({
                length: this.length
            });
            return this.constructor.name + " " + e
        })
    })(BufferList$1)), BufferList$1.exports
}
var destroy_1$1, hasRequiredDestroy$1;

function requireDestroy$1() {
    if (hasRequiredDestroy$1) return destroy_1$1;
    hasRequiredDestroy$1 = 1;
    var a = requireProcessNextickArgs();

    function r(s, e) {
        var h = this,
            c = this._readableState && this._readableState.destroyed,
            l = this._writableState && this._writableState.destroyed;
        return c || l ? (e ? e(s) : s && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, a.nextTick(n, this, s)) : a.nextTick(n, this, s)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(s || null, function(p) {
            !e && p ? h._writableState ? h._writableState.errorEmitted || (h._writableState.errorEmitted = !0, a.nextTick(n, h, p)) : a.nextTick(n, h, p) : e && e(p)
        }), this)
    }

    function i() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
    }

    function n(s, e) {
        s.emit("error", e)
    }
    return destroy_1$1 = {
        destroy: r,
        undestroy: i
    }, destroy_1$1
}
var _stream_writable$1, hasRequired_stream_writable$1;

function require_stream_writable$1() {
    if (hasRequired_stream_writable$1) return _stream_writable$1;
    hasRequired_stream_writable$1 = 1;
    var a = requireProcessNextickArgs();
    _stream_writable$1 = E;

    function r(v) {
        var g = this;
        this.next = null, this.entry = null, this.finish = function() {
            y(g, v)
        }
    }
    var i = !process$1.browser && ["v0.10", "v0.9."].indexOf(process$1.version.slice(0, 5)) > -1 ? setImmediate : a.nextTick,
        n;
    E.WritableState = x;
    var s = Object.create(requireUtil$2());
    s.inherits = requireInherits_browser();
    var e = {
            deprecate: requireBrowser$c()
        },
        h = requireStreamBrowser$1(),
        c = requireSafeBuffer$1().Buffer,
        l = (typeof commonjsGlobal < "u" ? commonjsGlobal : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function p(v) {
        return c.from(v)
    }

    function f(v) {
        return c.isBuffer(v) || v instanceof l
    }
    var m = requireDestroy$1();
    s.inherits(E, h);

    function w() {}

    function x(v, g) {
        n = n || require_stream_duplex$1(), v = v || {};
        var S = g instanceof n;
        this.objectMode = !!v.objectMode, S && (this.objectMode = this.objectMode || !!v.writableObjectMode);
        var _ = v.highWaterMark,
            M = v.writableHighWaterMark,
            d = this.objectMode ? 16 : 16 * 1024;
        _ || _ === 0 ? this.highWaterMark = _ : S && (M || M === 0) ? this.highWaterMark = M : this.highWaterMark = d, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var A = v.decodeStrings === !1;
        this.decodeStrings = !A, this.defaultEncoding = v.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(z) {
            G(g, z)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new r(this)
    }
    x.prototype.getBuffer = function() {
        for (var g = this.bufferedRequest, S = []; g;) S.push(g), g = g.next;
        return S
    }, (function() {
        try {
            Object.defineProperty(x.prototype, "buffer", {
                get: e.deprecate(function() {
                    return this.getBuffer()
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
            })
        } catch {}
    })();
    var B;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (B = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, {
        value: function(v) {
            return B.call(this, v) ? !0 : this !== E ? !1 : v && v._writableState instanceof x
        }
    })) : B = function(v) {
        return v instanceof this
    };

    function E(v) {
        if (n = n || require_stream_duplex$1(), !B.call(E, this) && !(this instanceof n)) return new E(v);
        this._writableState = new x(v, this), this.writable = !0, v && (typeof v.write == "function" && (this._write = v.write), typeof v.writev == "function" && (this._writev = v.writev), typeof v.destroy == "function" && (this._destroy = v.destroy), typeof v.final == "function" && (this._final = v.final)), h.call(this)
    }
    E.prototype.pipe = function() {
        this.emit("error", new Error("Cannot pipe, not readable"))
    };

    function C(v, g) {
        var S = new Error("write after end");
        v.emit("error", S), a.nextTick(g, S)
    }

    function $(v, g, S, _) {
        var M = !0,
            d = !1;
        return S === null ? d = new TypeError("May not write null values to stream") : typeof S != "string" && S !== void 0 && !g.objectMode && (d = new TypeError("Invalid non-string/buffer chunk")), d && (v.emit("error", d), a.nextTick(_, d), M = !1), M
    }
    E.prototype.write = function(v, g, S) {
        var _ = this._writableState,
            M = !1,
            d = !_.objectMode && f(v);
        return d && !c.isBuffer(v) && (v = p(v)), typeof g == "function" && (S = g, g = null), d ? g = "buffer" : g || (g = _.defaultEncoding), typeof S != "function" && (S = w), _.ended ? C(this, S) : (d || $(this, _, v, S)) && (_.pendingcb++, M = D(this, _, d, v, g, S)), M
    }, E.prototype.cork = function() {
        var v = this._writableState;
        v.corked++
    }, E.prototype.uncork = function() {
        var v = this._writableState;
        v.corked && (v.corked--, !v.writing && !v.corked && !v.bufferProcessing && v.bufferedRequest && Q(this, v))
    }, E.prototype.setDefaultEncoding = function(g) {
        if (typeof g == "string" && (g = g.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((g + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + g);
        return this._writableState.defaultEncoding = g, this
    };

    function I(v, g, S) {
        return !v.objectMode && v.decodeStrings !== !1 && typeof g == "string" && (g = c.from(g, S)), g
    }
    Object.defineProperty(E.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function D(v, g, S, _, M, d) {
        if (!S) {
            var A = I(g, _, M);
            _ !== A && (S = !0, M = "buffer", _ = A)
        }
        var z = g.objectMode ? 1 : _.length;
        g.length += z;
        var U = g.length < g.highWaterMark;
        if (U || (g.needDrain = !0), g.writing || g.corked) {
            var X = g.lastBufferedRequest;
            g.lastBufferedRequest = {
                chunk: _,
                encoding: M,
                isBuf: S,
                callback: d,
                next: null
            }, X ? X.next = g.lastBufferedRequest : g.bufferedRequest = g.lastBufferedRequest, g.bufferedRequestCount += 1
        } else j(v, g, !1, z, _, M, d);
        return U
    }

    function j(v, g, S, _, M, d, A) {
        g.writelen = _, g.writecb = A, g.writing = !0, g.sync = !0, S ? v._writev(M, g.onwrite) : v._write(M, d, g.onwrite), g.sync = !1
    }

    function O(v, g, S, _, M) {
        --g.pendingcb, S ? (a.nextTick(M, _), a.nextTick(t, v, g), v._writableState.errorEmitted = !0, v.emit("error", _)) : (M(_), v._writableState.errorEmitted = !0, v.emit("error", _), t(v, g))
    }

    function L(v) {
        v.writing = !1, v.writecb = null, v.length -= v.writelen, v.writelen = 0
    }

    function G(v, g) {
        var S = v._writableState,
            _ = S.sync,
            M = S.writecb;
        if (L(S), g) O(v, S, _, g, M);
        else {
            var d = P(S);
            !d && !S.corked && !S.bufferProcessing && S.bufferedRequest && Q(v, S), _ ? i(V, v, S, d, M) : V(v, S, d, M)
        }
    }

    function V(v, g, S, _) {
        S || K(v, g), g.pendingcb--, _(), t(v, g)
    }

    function K(v, g) {
        g.length === 0 && g.needDrain && (g.needDrain = !1, v.emit("drain"))
    }

    function Q(v, g) {
        g.bufferProcessing = !0;
        var S = g.bufferedRequest;
        if (v._writev && S && S.next) {
            var _ = g.bufferedRequestCount,
                M = new Array(_),
                d = g.corkedRequestsFree;
            d.entry = S;
            for (var A = 0, z = !0; S;) M[A] = S, S.isBuf || (z = !1), S = S.next, A += 1;
            M.allBuffers = z, j(v, g, !0, g.length, M, "", d.finish), g.pendingcb++, g.lastBufferedRequest = null, d.next ? (g.corkedRequestsFree = d.next, d.next = null) : g.corkedRequestsFree = new r(g), g.bufferedRequestCount = 0
        } else {
            for (; S;) {
                var U = S.chunk,
                    X = S.encoding,
                    R = S.callback,
                    k = g.objectMode ? 1 : U.length;
                if (j(v, g, !1, k, U, X, R), S = S.next, g.bufferedRequestCount--, g.writing) break
            }
            S === null && (g.lastBufferedRequest = null)
        }
        g.bufferedRequest = S, g.bufferProcessing = !1
    }
    E.prototype._write = function(v, g, S) {
        S(new Error("_write() is not implemented"))
    }, E.prototype._writev = null, E.prototype.end = function(v, g, S) {
        var _ = this._writableState;
        typeof v == "function" ? (S = v, v = null, g = null) : typeof g == "function" && (S = g, g = null), v != null && this.write(v, g), _.corked && (_.corked = 1, this.uncork()), _.ending || u(this, _, S)
    };

    function P(v) {
        return v.ending && v.length === 0 && v.bufferedRequest === null && !v.finished && !v.writing
    }

    function q(v, g) {
        v._final(function(S) {
            g.pendingcb--, S && v.emit("error", S), g.prefinished = !0, v.emit("prefinish"), t(v, g)
        })
    }

    function b(v, g) {
        !g.prefinished && !g.finalCalled && (typeof v._final == "function" ? (g.pendingcb++, g.finalCalled = !0, a.nextTick(q, v, g)) : (g.prefinished = !0, v.emit("prefinish")))
    }

    function t(v, g) {
        var S = P(g);
        return S && (b(v, g), g.pendingcb === 0 && (g.finished = !0, v.emit("finish"))), S
    }

    function u(v, g, S) {
        g.ending = !0, t(v, g), S && (g.finished ? a.nextTick(S) : v.once("finish", S)), g.ended = !0, v.writable = !1
    }

    function y(v, g, S) {
        var _ = v.entry;
        for (v.entry = null; _;) {
            var M = _.callback;
            g.pendingcb--, M(S), _ = _.next
        }
        g.corkedRequestsFree.next = v
    }
    return Object.defineProperty(E.prototype, "destroyed", {
        get: function() {
            return this._writableState === void 0 ? !1 : this._writableState.destroyed
        },
        set: function(v) {
            this._writableState && (this._writableState.destroyed = v)
        }
    }), E.prototype.destroy = m.destroy, E.prototype._undestroy = m.undestroy, E.prototype._destroy = function(v, g) {
        this.end(), g(v)
    }, _stream_writable$1
}
var _stream_duplex$1, hasRequired_stream_duplex$1;

function require_stream_duplex$1() {
    if (hasRequired_stream_duplex$1) return _stream_duplex$1;
    hasRequired_stream_duplex$1 = 1;
    var a = requireProcessNextickArgs(),
        r = Object.keys || function(m) {
            var w = [];
            for (var x in m) w.push(x);
            return w
        };
    _stream_duplex$1 = l;
    var i = Object.create(requireUtil$2());
    i.inherits = requireInherits_browser();
    var n = require_stream_readable$1(),
        s = require_stream_writable$1();
    i.inherits(l, n);
    for (var e = r(s.prototype), h = 0; h < e.length; h++) {
        var c = e[h];
        l.prototype[c] || (l.prototype[c] = s.prototype[c])
    }

    function l(m) {
        if (!(this instanceof l)) return new l(m);
        n.call(this, m), s.call(this, m), m && m.readable === !1 && (this.readable = !1), m && m.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, m && m.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", p)
    }
    Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function p() {
        this.allowHalfOpen || this._writableState.ended || a.nextTick(f, this)
    }

    function f(m) {
        m.end()
    }
    return Object.defineProperty(l.prototype, "destroyed", {
        get: function() {
            return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
        },
        set: function(m) {
            this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = m, this._writableState.destroyed = m)
        }
    }), l.prototype._destroy = function(m, w) {
        this.push(null), this.end(), a.nextTick(w, m)
    }, _stream_duplex$1
}
var _stream_readable$1, hasRequired_stream_readable$1;

function require_stream_readable$1() {
    if (hasRequired_stream_readable$1) return _stream_readable$1;
    hasRequired_stream_readable$1 = 1;
    var a = requireProcessNextickArgs();
    _stream_readable$1 = I;
    var r = requireIsarray$1(),
        i;
    I.ReadableState = $, requireEvents().EventEmitter;
    var n = function(R, k) {
            return R.listeners(k).length
        },
        s = requireStreamBrowser$1(),
        e = requireSafeBuffer$1().Buffer,
        h = (typeof commonjsGlobal < "u" ? commonjsGlobal : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function c(R) {
        return e.from(R)
    }

    function l(R) {
        return e.isBuffer(R) || R instanceof h
    }
    var p = Object.create(requireUtil$2());
    p.inherits = requireInherits_browser();
    var f = requireUtil$1(),
        m = void 0;
    f && f.debuglog ? m = f.debuglog("stream") : m = function() {};
    var w = requireBufferList$1(),
        x = requireDestroy$1(),
        B;
    p.inherits(I, s);
    var E = ["error", "close", "destroy", "pause", "resume"];

    function C(R, k, N) {
        if (typeof R.prependListener == "function") return R.prependListener(k, N);
        !R._events || !R._events[k] ? R.on(k, N) : r(R._events[k]) ? R._events[k].unshift(N) : R._events[k] = [N, R._events[k]]
    }

    function $(R, k) {
        i = i || require_stream_duplex$1(), R = R || {};
        var N = k instanceof i;
        this.objectMode = !!R.objectMode, N && (this.objectMode = this.objectMode || !!R.readableObjectMode);
        var W = R.highWaterMark,
            J = R.readableHighWaterMark,
            H = this.objectMode ? 16 : 16 * 1024;
        W || W === 0 ? this.highWaterMark = W : N && (J || J === 0) ? this.highWaterMark = J : this.highWaterMark = H, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new w, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = R.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, R.encoding && (B || (B = requireString_decoder().StringDecoder), this.decoder = new B(R.encoding), this.encoding = R.encoding)
    }

    function I(R) {
        if (i = i || require_stream_duplex$1(), !(this instanceof I)) return new I(R);
        this._readableState = new $(R, this), this.readable = !0, R && (typeof R.read == "function" && (this._read = R.read), typeof R.destroy == "function" && (this._destroy = R.destroy)), s.call(this)
    }
    Object.defineProperty(I.prototype, "destroyed", {
        get: function() {
            return this._readableState === void 0 ? !1 : this._readableState.destroyed
        },
        set: function(R) {
            this._readableState && (this._readableState.destroyed = R)
        }
    }), I.prototype.destroy = x.destroy, I.prototype._undestroy = x.undestroy, I.prototype._destroy = function(R, k) {
        this.push(null), k(R)
    }, I.prototype.push = function(R, k) {
        var N = this._readableState,
            W;
        return N.objectMode ? W = !0 : typeof R == "string" && (k = k || N.defaultEncoding, k !== N.encoding && (R = e.from(R, k), k = ""), W = !0), D(this, R, k, !1, W)
    }, I.prototype.unshift = function(R) {
        return D(this, R, null, !0, !1)
    };

    function D(R, k, N, W, J) {
        var H = R._readableState;
        if (k === null) H.reading = !1, Q(R, H);
        else {
            var Y;
            J || (Y = O(H, k)), Y ? R.emit("error", Y) : H.objectMode || k && k.length > 0 ? (typeof k != "string" && !H.objectMode && Object.getPrototypeOf(k) !== e.prototype && (k = c(k)), W ? H.endEmitted ? R.emit("error", new Error("stream.unshift() after end event")) : j(R, H, k, !0) : H.ended ? R.emit("error", new Error("stream.push() after EOF")) : (H.reading = !1, H.decoder && !N ? (k = H.decoder.write(k), H.objectMode || k.length !== 0 ? j(R, H, k, !1) : b(R, H)) : j(R, H, k, !1))) : W || (H.reading = !1)
        }
        return L(H)
    }

    function j(R, k, N, W) {
        k.flowing && k.length === 0 && !k.sync ? (R.emit("data", N), R.read(0)) : (k.length += k.objectMode ? 1 : N.length, W ? k.buffer.unshift(N) : k.buffer.push(N), k.needReadable && P(R)), b(R, k)
    }

    function O(R, k) {
        var N;
        return !l(k) && typeof k != "string" && k !== void 0 && !R.objectMode && (N = new TypeError("Invalid non-string/buffer chunk")), N
    }

    function L(R) {
        return !R.ended && (R.needReadable || R.length < R.highWaterMark || R.length === 0)
    }
    I.prototype.isPaused = function() {
        return this._readableState.flowing === !1
    }, I.prototype.setEncoding = function(R) {
        return B || (B = requireString_decoder().StringDecoder), this._readableState.decoder = new B(R), this._readableState.encoding = R, this
    };
    var G = 8388608;

    function V(R) {
        return R >= G ? R = G : (R--, R |= R >>> 1, R |= R >>> 2, R |= R >>> 4, R |= R >>> 8, R |= R >>> 16, R++), R
    }

    function K(R, k) {
        return R <= 0 || k.length === 0 && k.ended ? 0 : k.objectMode ? 1 : R !== R ? k.flowing && k.length ? k.buffer.head.data.length : k.length : (R > k.highWaterMark && (k.highWaterMark = V(R)), R <= k.length ? R : k.ended ? k.length : (k.needReadable = !0, 0))
    }
    I.prototype.read = function(R) {
        m("read", R), R = parseInt(R, 10);
        var k = this._readableState,
            N = R;
        if (R !== 0 && (k.emittedReadable = !1), R === 0 && k.needReadable && (k.length >= k.highWaterMark || k.ended)) return m("read: emitReadable", k.length, k.ended), k.length === 0 && k.ended ? z(this) : P(this), null;
        if (R = K(R, k), R === 0 && k.ended) return k.length === 0 && z(this), null;
        var W = k.needReadable;
        m("need readable", W), (k.length === 0 || k.length - R < k.highWaterMark) && (W = !0, m("length less than watermark", W)), k.ended || k.reading ? (W = !1, m("reading or ended", W)) : W && (m("do read"), k.reading = !0, k.sync = !0, k.length === 0 && (k.needReadable = !0), this._read(k.highWaterMark), k.sync = !1, k.reading || (R = K(N, k)));
        var J;
        return R > 0 ? J = _(R, k) : J = null, J === null ? (k.needReadable = !0, R = 0) : k.length -= R, k.length === 0 && (k.ended || (k.needReadable = !0), N !== R && k.ended && z(this)), J !== null && this.emit("data", J), J
    };

    function Q(R, k) {
        if (!k.ended) {
            if (k.decoder) {
                var N = k.decoder.end();
                N && N.length && (k.buffer.push(N), k.length += k.objectMode ? 1 : N.length)
            }
            k.ended = !0, P(R)
        }
    }

    function P(R) {
        var k = R._readableState;
        k.needReadable = !1, k.emittedReadable || (m("emitReadable", k.flowing), k.emittedReadable = !0, k.sync ? a.nextTick(q, R) : q(R))
    }

    function q(R) {
        m("emit readable"), R.emit("readable"), S(R)
    }

    function b(R, k) {
        k.readingMore || (k.readingMore = !0, a.nextTick(t, R, k))
    }

    function t(R, k) {
        for (var N = k.length; !k.reading && !k.flowing && !k.ended && k.length < k.highWaterMark && (m("maybeReadMore read 0"), R.read(0), N !== k.length);) N = k.length;
        k.readingMore = !1
    }
    I.prototype._read = function(R) {
        this.emit("error", new Error("_read() is not implemented"))
    }, I.prototype.pipe = function(R, k) {
        var N = this,
            W = this._readableState;
        switch (W.pipesCount) {
            case 0:
                W.pipes = R;
                break;
            case 1:
                W.pipes = [W.pipes, R];
                break;
            default:
                W.pipes.push(R);
                break
        }
        W.pipesCount += 1, m("pipe count=%d opts=%j", W.pipesCount, k);
        var J = (!k || k.end !== !1) && R !== process$1.stdout && R !== process$1.stderr,
            H = J ? ne : ae;
        W.endEmitted ? a.nextTick(H) : N.once("end", H), R.on("unpipe", Y);

        function Y(ee, De) {
            m("onunpipe"), ee === N && De && De.hasUnpiped === !1 && (De.hasUnpiped = !0, ye())
        }

        function ne() {
            m("onend"), R.end()
        }
        var re = u(N);
        R.on("drain", re);
        var Pe = !1;

        function ye() {
            m("cleanup"), R.removeListener("close", Z), R.removeListener("finish", _e), R.removeListener("drain", re), R.removeListener("error", me), R.removeListener("unpipe", Y), N.removeListener("end", ne), N.removeListener("end", ae), N.removeListener("data", je), Pe = !0, W.awaitDrain && (!R._writableState || R._writableState.needDrain) && re()
        }
        var te = !1;
        N.on("data", je);

        function je(ee) {
            m("ondata"), te = !1;
            var De = R.write(ee);
            De === !1 && !te && ((W.pipesCount === 1 && W.pipes === R || W.pipesCount > 1 && X(W.pipes, R) !== -1) && !Pe && (m("false write response, pause", W.awaitDrain), W.awaitDrain++, te = !0), N.pause())
        }

        function me(ee) {
            m("onerror", ee), ae(), R.removeListener("error", me), n(R, "error") === 0 && R.emit("error", ee)
        }
        C(R, "error", me);

        function Z() {
            R.removeListener("finish", _e), ae()
        }
        R.once("close", Z);

        function _e() {
            m("onfinish"), R.removeListener("close", Z), ae()
        }
        R.once("finish", _e);

        function ae() {
            m("unpipe"), N.unpipe(R)
        }
        return R.emit("pipe", N), W.flowing || (m("pipe resume"), N.resume()), R
    };

    function u(R) {
        return function() {
            var k = R._readableState;
            m("pipeOnDrain", k.awaitDrain), k.awaitDrain && k.awaitDrain--, k.awaitDrain === 0 && n(R, "data") && (k.flowing = !0, S(R))
        }
    }
    I.prototype.unpipe = function(R) {
        var k = this._readableState,
            N = {
                hasUnpiped: !1
            };
        if (k.pipesCount === 0) return this;
        if (k.pipesCount === 1) return R && R !== k.pipes ? this : (R || (R = k.pipes), k.pipes = null, k.pipesCount = 0, k.flowing = !1, R && R.emit("unpipe", this, N), this);
        if (!R) {
            var W = k.pipes,
                J = k.pipesCount;
            k.pipes = null, k.pipesCount = 0, k.flowing = !1;
            for (var H = 0; H < J; H++) W[H].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var Y = X(k.pipes, R);
        return Y === -1 ? this : (k.pipes.splice(Y, 1), k.pipesCount -= 1, k.pipesCount === 1 && (k.pipes = k.pipes[0]), R.emit("unpipe", this, N), this)
    }, I.prototype.on = function(R, k) {
        var N = s.prototype.on.call(this, R, k);
        if (R === "data") this._readableState.flowing !== !1 && this.resume();
        else if (R === "readable") {
            var W = this._readableState;
            !W.endEmitted && !W.readableListening && (W.readableListening = W.needReadable = !0, W.emittedReadable = !1, W.reading ? W.length && P(this) : a.nextTick(y, this))
        }
        return N
    }, I.prototype.addListener = I.prototype.on;

    function y(R) {
        m("readable nexttick read 0"), R.read(0)
    }
    I.prototype.resume = function() {
        var R = this._readableState;
        return R.flowing || (m("resume"), R.flowing = !0, v(this, R)), this
    };

    function v(R, k) {
        k.resumeScheduled || (k.resumeScheduled = !0, a.nextTick(g, R, k))
    }

    function g(R, k) {
        k.reading || (m("resume read 0"), R.read(0)), k.resumeScheduled = !1, k.awaitDrain = 0, R.emit("resume"), S(R), k.flowing && !k.reading && R.read(0)
    }
    I.prototype.pause = function() {
        return m("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (m("pause"), this._readableState.flowing = !1, this.emit("pause")), this
    };

    function S(R) {
        var k = R._readableState;
        for (m("flow", k.flowing); k.flowing && R.read() !== null;);
    }
    I.prototype.wrap = function(R) {
        var k = this,
            N = this._readableState,
            W = !1;
        R.on("end", function() {
            if (m("wrapped end"), N.decoder && !N.ended) {
                var Y = N.decoder.end();
                Y && Y.length && k.push(Y)
            }
            k.push(null)
        }), R.on("data", function(Y) {
            if (m("wrapped data"), N.decoder && (Y = N.decoder.write(Y)), !(N.objectMode && Y == null) && !(!N.objectMode && (!Y || !Y.length))) {
                var ne = k.push(Y);
                ne || (W = !0, R.pause())
            }
        });
        for (var J in R) this[J] === void 0 && typeof R[J] == "function" && (this[J] = (function(Y) {
            return function() {
                return R[Y].apply(R, arguments)
            }
        })(J));
        for (var H = 0; H < E.length; H++) R.on(E[H], this.emit.bind(this, E[H]));
        return this._read = function(Y) {
            m("wrapped _read", Y), W && (W = !1, R.resume())
        }, this
    }, Object.defineProperty(I.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }), I._fromList = _;

    function _(R, k) {
        if (k.length === 0) return null;
        var N;
        return k.objectMode ? N = k.buffer.shift() : !R || R >= k.length ? (k.decoder ? N = k.buffer.join("") : k.buffer.length === 1 ? N = k.buffer.head.data : N = k.buffer.concat(k.length), k.buffer.clear()) : N = M(R, k.buffer, k.decoder), N
    }

    function M(R, k, N) {
        var W;
        return R < k.head.data.length ? (W = k.head.data.slice(0, R), k.head.data = k.head.data.slice(R)) : R === k.head.data.length ? W = k.shift() : W = N ? d(R, k) : A(R, k), W
    }

    function d(R, k) {
        var N = k.head,
            W = 1,
            J = N.data;
        for (R -= J.length; N = N.next;) {
            var H = N.data,
                Y = R > H.length ? H.length : R;
            if (Y === H.length ? J += H : J += H.slice(0, R), R -= Y, R === 0) {
                Y === H.length ? (++W, N.next ? k.head = N.next : k.head = k.tail = null) : (k.head = N, N.data = H.slice(Y));
                break
            }++W
        }
        return k.length -= W, J
    }

    function A(R, k) {
        var N = e.allocUnsafe(R),
            W = k.head,
            J = 1;
        for (W.data.copy(N), R -= W.data.length; W = W.next;) {
            var H = W.data,
                Y = R > H.length ? H.length : R;
            if (H.copy(N, N.length - R, 0, Y), R -= Y, R === 0) {
                Y === H.length ? (++J, W.next ? k.head = W.next : k.head = k.tail = null) : (k.head = W, W.data = H.slice(Y));
                break
            }++J
        }
        return k.length -= J, N
    }

    function z(R) {
        var k = R._readableState;
        if (k.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        k.endEmitted || (k.ended = !0, a.nextTick(U, k, R))
    }

    function U(R, k) {
        !R.endEmitted && R.length === 0 && (R.endEmitted = !0, k.readable = !1, k.emit("end"))
    }

    function X(R, k) {
        for (var N = 0, W = R.length; N < W; N++)
            if (R[N] === k) return N;
        return -1
    }
    return _stream_readable$1
}
var _stream_transform$1, hasRequired_stream_transform$1;

function require_stream_transform$1() {
    if (hasRequired_stream_transform$1) return _stream_transform$1;
    hasRequired_stream_transform$1 = 1, _stream_transform$1 = n;
    var a = require_stream_duplex$1(),
        r = Object.create(requireUtil$2());
    r.inherits = requireInherits_browser(), r.inherits(n, a);

    function i(h, c) {
        var l = this._transformState;
        l.transforming = !1;
        var p = l.writecb;
        if (!p) return this.emit("error", new Error("write callback called multiple times"));
        l.writechunk = null, l.writecb = null, c != null && this.push(c), p(h);
        var f = this._readableState;
        f.reading = !1, (f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark)
    }

    function n(h) {
        if (!(this instanceof n)) return new n(h);
        a.call(this, h), this._transformState = {
            afterTransform: i.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, h && (typeof h.transform == "function" && (this._transform = h.transform), typeof h.flush == "function" && (this._flush = h.flush)), this.on("prefinish", s)
    }

    function s() {
        var h = this;
        typeof this._flush == "function" ? this._flush(function(c, l) {
            e(h, c, l)
        }) : e(this, null, null)
    }
    n.prototype.push = function(h, c) {
        return this._transformState.needTransform = !1, a.prototype.push.call(this, h, c)
    }, n.prototype._transform = function(h, c, l) {
        throw new Error("_transform() is not implemented")
    }, n.prototype._write = function(h, c, l) {
        var p = this._transformState;
        if (p.writecb = l, p.writechunk = h, p.writeencoding = c, !p.transforming) {
            var f = this._readableState;
            (p.needTransform || f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark)
        }
    }, n.prototype._read = function(h) {
        var c = this._transformState;
        c.writechunk !== null && c.writecb && !c.transforming ? (c.transforming = !0, this._transform(c.writechunk, c.writeencoding, c.afterTransform)) : c.needTransform = !0
    }, n.prototype._destroy = function(h, c) {
        var l = this;
        a.prototype._destroy.call(this, h, function(p) {
            c(p), l.emit("close")
        })
    };

    function e(h, c, l) {
        if (c) return h.emit("error", c);
        if (l != null && h.push(l), h._writableState.length) throw new Error("Calling transform done when ws.length != 0");
        if (h._transformState.transforming) throw new Error("Calling transform done when still transforming");
        return h.push(null)
    }
    return _stream_transform$1
}
var _stream_passthrough$1, hasRequired_stream_passthrough$1;

function require_stream_passthrough$1() {
    if (hasRequired_stream_passthrough$1) return _stream_passthrough$1;
    hasRequired_stream_passthrough$1 = 1, _stream_passthrough$1 = i;
    var a = require_stream_transform$1(),
        r = Object.create(requireUtil$2());
    r.inherits = requireInherits_browser(), r.inherits(i, a);

    function i(n) {
        if (!(this instanceof i)) return new i(n);
        a.call(this, n)
    }
    return i.prototype._transform = function(n, s, e) {
        e(null, n)
    }, _stream_passthrough$1
}
var hasRequiredReadableBrowser$2;

function requireReadableBrowser$2() {
    return hasRequiredReadableBrowser$2 || (hasRequiredReadableBrowser$2 = 1, (function(a, r) {
        r = a.exports = require_stream_readable$1(), r.Stream = r, r.Readable = r, r.Writable = require_stream_writable$1(), r.Duplex = require_stream_duplex$1(), r.Transform = require_stream_transform$1(), r.PassThrough = require_stream_passthrough$1()
    })(readableBrowser$2, readableBrowser$2.exports)), readableBrowser$2.exports
}
var hashBase, hasRequiredHashBase;

function requireHashBase() {
    if (hasRequiredHashBase) return hashBase;
    hasRequiredHashBase = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireToBuffer$1(),
        i = requireReadableBrowser$2().Transform,
        n = requireInherits_browser();

    function s(e) {
        i.call(this), this._block = a.allocUnsafe(e), this._blockSize = e, this._blockOffset = 0, this._length = [0, 0, 0, 0], this._finalized = !1
    }
    return n(s, i), s.prototype._transform = function(e, h, c) {
        var l = null;
        try {
            this.update(e, h)
        } catch (p) {
            l = p
        }
        c(l)
    }, s.prototype._flush = function(e) {
        var h = null;
        try {
            this.push(this.digest())
        } catch (c) {
            h = c
        }
        e(h)
    }, s.prototype.update = function(e, h) {
        if (this._finalized) throw new Error("Digest already called");
        for (var c = r(e, h), l = this._block, p = 0; this._blockOffset + c.length - p >= this._blockSize;) {
            for (var f = this._blockOffset; f < this._blockSize;) l[f] = c[p], f += 1, p += 1;
            this._update(), this._blockOffset = 0
        }
        for (; p < c.length;) l[this._blockOffset] = c[p], this._blockOffset += 1, p += 1;
        for (var m = 0, w = c.length * 8; w > 0; ++m) this._length[m] += w, w = this._length[m] / 4294967296 | 0, w > 0 && (this._length[m] -= 4294967296 * w);
        return this
    }, s.prototype._update = function() {
        throw new Error("_update is not implemented")
    }, s.prototype.digest = function(e) {
        if (this._finalized) throw new Error("Digest already called");
        this._finalized = !0;
        var h = this._digest();
        e !== void 0 && (h = h.toString(e)), this._block.fill(0), this._blockOffset = 0;
        for (var c = 0; c < 4; ++c) this._length[c] = 0;
        return h
    }, s.prototype._digest = function() {
        throw new Error("_digest is not implemented")
    }, hashBase = s, hashBase
}
var md5_js, hasRequiredMd5_js;

function requireMd5_js() {
    if (hasRequiredMd5_js) return md5_js;
    hasRequiredMd5_js = 1;
    var a = requireInherits_browser(),
        r = requireHashBase(),
        i = requireSafeBuffer$2().Buffer,
        n = new Array(16);

    function s() {
        r.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878
    }
    a(s, r), s.prototype._update = function() {
        for (var f = n, m = 0; m < 16; ++m) f[m] = this._block.readInt32LE(m * 4);
        var w = this._a,
            x = this._b,
            B = this._c,
            E = this._d;
        w = h(w, x, B, E, f[0], 3614090360, 7), E = h(E, w, x, B, f[1], 3905402710, 12), B = h(B, E, w, x, f[2], 606105819, 17), x = h(x, B, E, w, f[3], 3250441966, 22), w = h(w, x, B, E, f[4], 4118548399, 7), E = h(E, w, x, B, f[5], 1200080426, 12), B = h(B, E, w, x, f[6], 2821735955, 17), x = h(x, B, E, w, f[7], 4249261313, 22), w = h(w, x, B, E, f[8], 1770035416, 7), E = h(E, w, x, B, f[9], 2336552879, 12), B = h(B, E, w, x, f[10], 4294925233, 17), x = h(x, B, E, w, f[11], 2304563134, 22), w = h(w, x, B, E, f[12], 1804603682, 7), E = h(E, w, x, B, f[13], 4254626195, 12), B = h(B, E, w, x, f[14], 2792965006, 17), x = h(x, B, E, w, f[15], 1236535329, 22), w = c(w, x, B, E, f[1], 4129170786, 5), E = c(E, w, x, B, f[6], 3225465664, 9), B = c(B, E, w, x, f[11], 643717713, 14), x = c(x, B, E, w, f[0], 3921069994, 20), w = c(w, x, B, E, f[5], 3593408605, 5), E = c(E, w, x, B, f[10], 38016083, 9), B = c(B, E, w, x, f[15], 3634488961, 14), x = c(x, B, E, w, f[4], 3889429448, 20), w = c(w, x, B, E, f[9], 568446438, 5), E = c(E, w, x, B, f[14], 3275163606, 9), B = c(B, E, w, x, f[3], 4107603335, 14), x = c(x, B, E, w, f[8], 1163531501, 20), w = c(w, x, B, E, f[13], 2850285829, 5), E = c(E, w, x, B, f[2], 4243563512, 9), B = c(B, E, w, x, f[7], 1735328473, 14), x = c(x, B, E, w, f[12], 2368359562, 20), w = l(w, x, B, E, f[5], 4294588738, 4), E = l(E, w, x, B, f[8], 2272392833, 11), B = l(B, E, w, x, f[11], 1839030562, 16), x = l(x, B, E, w, f[14], 4259657740, 23), w = l(w, x, B, E, f[1], 2763975236, 4), E = l(E, w, x, B, f[4], 1272893353, 11), B = l(B, E, w, x, f[7], 4139469664, 16), x = l(x, B, E, w, f[10], 3200236656, 23), w = l(w, x, B, E, f[13], 681279174, 4), E = l(E, w, x, B, f[0], 3936430074, 11), B = l(B, E, w, x, f[3], 3572445317, 16), x = l(x, B, E, w, f[6], 76029189, 23), w = l(w, x, B, E, f[9], 3654602809, 4), E = l(E, w, x, B, f[12], 3873151461, 11), B = l(B, E, w, x, f[15], 530742520, 16), x = l(x, B, E, w, f[2], 3299628645, 23), w = p(w, x, B, E, f[0], 4096336452, 6), E = p(E, w, x, B, f[7], 1126891415, 10), B = p(B, E, w, x, f[14], 2878612391, 15), x = p(x, B, E, w, f[5], 4237533241, 21), w = p(w, x, B, E, f[12], 1700485571, 6), E = p(E, w, x, B, f[3], 2399980690, 10), B = p(B, E, w, x, f[10], 4293915773, 15), x = p(x, B, E, w, f[1], 2240044497, 21), w = p(w, x, B, E, f[8], 1873313359, 6), E = p(E, w, x, B, f[15], 4264355552, 10), B = p(B, E, w, x, f[6], 2734768916, 15), x = p(x, B, E, w, f[13], 1309151649, 21), w = p(w, x, B, E, f[4], 4149444226, 6), E = p(E, w, x, B, f[11], 3174756917, 10), B = p(B, E, w, x, f[2], 718787259, 15), x = p(x, B, E, w, f[9], 3951481745, 21), this._a = this._a + w | 0, this._b = this._b + x | 0, this._c = this._c + B | 0, this._d = this._d + E | 0
    }, s.prototype._digest = function() {
        this._block[this._blockOffset++] = 128, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var f = i.allocUnsafe(16);
        return f.writeInt32LE(this._a, 0), f.writeInt32LE(this._b, 4), f.writeInt32LE(this._c, 8), f.writeInt32LE(this._d, 12), f
    };

    function e(f, m) {
        return f << m | f >>> 32 - m
    }

    function h(f, m, w, x, B, E, C) {
        return e(f + (m & w | ~m & x) + B + E | 0, C) + m | 0
    }

    function c(f, m, w, x, B, E, C) {
        return e(f + (m & x | w & ~x) + B + E | 0, C) + m | 0
    }

    function l(f, m, w, x, B, E, C) {
        return e(f + (m ^ w ^ x) + B + E | 0, C) + m | 0
    }

    function p(f, m, w, x, B, E, C) {
        return e(f + (w ^ (m | ~x)) + B + E | 0, C) + m | 0
    }
    return md5_js = s, md5_js
}
var ripemd160, hasRequiredRipemd160;

function requireRipemd160() {
    if (hasRequiredRipemd160) return ripemd160;
    hasRequiredRipemd160 = 1;
    var a = requireDist$1().Buffer,
        r = requireInherits_browser(),
        i = requireHashBase(),
        n = new Array(16),
        s = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        e = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        h = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        c = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11],
        l = [0, 1518500249, 1859775393, 2400959708, 2840853838],
        p = [1352829926, 1548603684, 1836072691, 2053994217, 0];

    function f($, I) {
        return $ << I | $ >>> 32 - I
    }

    function m($, I, D, j, O, L, G, V) {
        return f($ + (I ^ D ^ j) + L + G | 0, V) + O | 0
    }

    function w($, I, D, j, O, L, G, V) {
        return f($ + (I & D | ~I & j) + L + G | 0, V) + O | 0
    }

    function x($, I, D, j, O, L, G, V) {
        return f($ + ((I | ~D) ^ j) + L + G | 0, V) + O | 0
    }

    function B($, I, D, j, O, L, G, V) {
        return f($ + (I & j | D & ~j) + L + G | 0, V) + O | 0
    }

    function E($, I, D, j, O, L, G, V) {
        return f($ + (I ^ (D | ~j)) + L + G | 0, V) + O | 0
    }

    function C() {
        i.call(this, 64), this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520
    }
    return r(C, i), C.prototype._update = function() {
        for (var $ = n, I = 0; I < 16; ++I) $[I] = this._block.readInt32LE(I * 4);
        for (var D = this._a | 0, j = this._b | 0, O = this._c | 0, L = this._d | 0, G = this._e | 0, V = this._a | 0, K = this._b | 0, Q = this._c | 0, P = this._d | 0, q = this._e | 0, b = 0; b < 80; b += 1) {
            var t, u;
            b < 16 ? (t = m(D, j, O, L, G, $[s[b]], l[0], h[b]), u = E(V, K, Q, P, q, $[e[b]], p[0], c[b])) : b < 32 ? (t = w(D, j, O, L, G, $[s[b]], l[1], h[b]), u = B(V, K, Q, P, q, $[e[b]], p[1], c[b])) : b < 48 ? (t = x(D, j, O, L, G, $[s[b]], l[2], h[b]), u = x(V, K, Q, P, q, $[e[b]], p[2], c[b])) : b < 64 ? (t = B(D, j, O, L, G, $[s[b]], l[3], h[b]), u = w(V, K, Q, P, q, $[e[b]], p[3], c[b])) : (t = E(D, j, O, L, G, $[s[b]], l[4], h[b]), u = m(V, K, Q, P, q, $[e[b]], p[4], c[b])), D = G, G = L, L = f(O, 10), O = j, j = t, V = q, q = P, P = f(Q, 10), Q = K, K = u
        }
        var y = this._b + O + P | 0;
        this._b = this._c + L + q | 0, this._c = this._d + G + V | 0, this._d = this._e + D + K | 0, this._e = this._a + j + Q | 0, this._a = y
    }, C.prototype._digest = function() {
        this._block[this._blockOffset] = 128, this._blockOffset += 1, this._blockOffset > 56 && (this._block.fill(0, this._blockOffset, 64), this._update(), this._blockOffset = 0), this._block.fill(0, this._blockOffset, 56), this._block.writeUInt32LE(this._length[0], 56), this._block.writeUInt32LE(this._length[1], 60), this._update();
        var $ = a.alloc ? a.alloc(20) : new a(20);
        return $.writeInt32LE(this._a, 0), $.writeInt32LE(this._b, 4), $.writeInt32LE(this._c, 8), $.writeInt32LE(this._d, 12), $.writeInt32LE(this._e, 16), $
    }, ripemd160 = C, ripemd160
}
var sha_js = {
        exports: {}
    },
    hash$1, hasRequiredHash$1;

function requireHash$1() {
    if (hasRequiredHash$1) return hash$1;
    hasRequiredHash$1 = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireToBuffer$2();

    function i(n, s) {
        this._block = a.alloc(n), this._finalSize = s, this._blockSize = n, this._len = 0
    }
    return i.prototype.update = function(n, s) {
        n = r(n, s || "utf8");
        for (var e = this._block, h = this._blockSize, c = n.length, l = this._len, p = 0; p < c;) {
            for (var f = l % h, m = Math.min(c - p, h - f), w = 0; w < m; w++) e[f + w] = n[p + w];
            l += m, p += m, l % h === 0 && this._update(e)
        }
        return this._len += c, this
    }, i.prototype.digest = function(n) {
        var s = this._len % this._blockSize;
        this._block[s] = 128, this._block.fill(0, s + 1), s >= this._finalSize && (this._update(this._block), this._block.fill(0));
        var e = this._len * 8;
        if (e <= 4294967295) this._block.writeUInt32BE(e, this._blockSize - 4);
        else {
            var h = (e & 4294967295) >>> 0,
                c = (e - h) / 4294967296;
            this._block.writeUInt32BE(c, this._blockSize - 8), this._block.writeUInt32BE(h, this._blockSize - 4)
        }
        this._update(this._block);
        var l = this._hash();
        return n ? l.toString(n) : l
    }, i.prototype._update = function() {
        throw new Error("_update must be implemented by subclass")
    }, hash$1 = i, hash$1
}
var sha$1, hasRequiredSha$1;

function requireSha$1() {
    if (hasRequiredSha$1) return sha$1;
    hasRequiredSha$1 = 1;
    var a = requireInherits_browser(),
        r = requireHash$1(),
        i = requireSafeBuffer$2().Buffer,
        n = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);

    function e() {
        this.init(), this._w = s, r.call(this, 64, 56)
    }
    a(e, r), e.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    };

    function h(p) {
        return p << 5 | p >>> 27
    }

    function c(p) {
        return p << 30 | p >>> 2
    }

    function l(p, f, m, w) {
        return p === 0 ? f & m | ~f & w : p === 2 ? f & m | f & w | m & w : f ^ m ^ w
    }
    return e.prototype._update = function(p) {
        for (var f = this._w, m = this._a | 0, w = this._b | 0, x = this._c | 0, B = this._d | 0, E = this._e | 0, C = 0; C < 16; ++C) f[C] = p.readInt32BE(C * 4);
        for (; C < 80; ++C) f[C] = f[C - 3] ^ f[C - 8] ^ f[C - 14] ^ f[C - 16];
        for (var $ = 0; $ < 80; ++$) {
            var I = ~~($ / 20),
                D = h(m) + l(I, w, x, B) + E + f[$] + n[I] | 0;
            E = B, B = x, x = c(w), w = m, m = D
        }
        this._a = m + this._a | 0, this._b = w + this._b | 0, this._c = x + this._c | 0, this._d = B + this._d | 0, this._e = E + this._e | 0
    }, e.prototype._hash = function() {
        var p = i.allocUnsafe(20);
        return p.writeInt32BE(this._a | 0, 0), p.writeInt32BE(this._b | 0, 4), p.writeInt32BE(this._c | 0, 8), p.writeInt32BE(this._d | 0, 12), p.writeInt32BE(this._e | 0, 16), p
    }, sha$1 = e, sha$1
}
var sha1, hasRequiredSha1;

function requireSha1() {
    if (hasRequiredSha1) return sha1;
    hasRequiredSha1 = 1;
    var a = requireInherits_browser(),
        r = requireHash$1(),
        i = requireSafeBuffer$2().Buffer,
        n = [1518500249, 1859775393, -1894007588, -899497514],
        s = new Array(80);

    function e() {
        this.init(), this._w = s, r.call(this, 64, 56)
    }
    a(e, r), e.prototype.init = function() {
        return this._a = 1732584193, this._b = 4023233417, this._c = 2562383102, this._d = 271733878, this._e = 3285377520, this
    };

    function h(f) {
        return f << 1 | f >>> 31
    }

    function c(f) {
        return f << 5 | f >>> 27
    }

    function l(f) {
        return f << 30 | f >>> 2
    }

    function p(f, m, w, x) {
        return f === 0 ? m & w | ~m & x : f === 2 ? m & w | m & x | w & x : m ^ w ^ x
    }
    return e.prototype._update = function(f) {
        for (var m = this._w, w = this._a | 0, x = this._b | 0, B = this._c | 0, E = this._d | 0, C = this._e | 0, $ = 0; $ < 16; ++$) m[$] = f.readInt32BE($ * 4);
        for (; $ < 80; ++$) m[$] = h(m[$ - 3] ^ m[$ - 8] ^ m[$ - 14] ^ m[$ - 16]);
        for (var I = 0; I < 80; ++I) {
            var D = ~~(I / 20),
                j = c(w) + p(D, x, B, E) + C + m[I] + n[D] | 0;
            C = E, E = B, B = l(x), x = w, w = j
        }
        this._a = w + this._a | 0, this._b = x + this._b | 0, this._c = B + this._c | 0, this._d = E + this._d | 0, this._e = C + this._e | 0
    }, e.prototype._hash = function() {
        var f = i.allocUnsafe(20);
        return f.writeInt32BE(this._a | 0, 0), f.writeInt32BE(this._b | 0, 4), f.writeInt32BE(this._c | 0, 8), f.writeInt32BE(this._d | 0, 12), f.writeInt32BE(this._e | 0, 16), f
    }, sha1 = e, sha1
}
var sha256$1, hasRequiredSha256;

function requireSha256() {
    if (hasRequiredSha256) return sha256$1;
    hasRequiredSha256 = 1;
    var a = requireInherits_browser(),
        r = requireHash$1(),
        i = requireSafeBuffer$2().Buffer,
        n = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298],
        s = new Array(64);

    function e() {
        this.init(), this._w = s, r.call(this, 64, 56)
    }
    a(e, r), e.prototype.init = function() {
        return this._a = 1779033703, this._b = 3144134277, this._c = 1013904242, this._d = 2773480762, this._e = 1359893119, this._f = 2600822924, this._g = 528734635, this._h = 1541459225, this
    };

    function h(w, x, B) {
        return B ^ w & (x ^ B)
    }

    function c(w, x, B) {
        return w & x | B & (w | x)
    }

    function l(w) {
        return (w >>> 2 | w << 30) ^ (w >>> 13 | w << 19) ^ (w >>> 22 | w << 10)
    }

    function p(w) {
        return (w >>> 6 | w << 26) ^ (w >>> 11 | w << 21) ^ (w >>> 25 | w << 7)
    }

    function f(w) {
        return (w >>> 7 | w << 25) ^ (w >>> 18 | w << 14) ^ w >>> 3
    }

    function m(w) {
        return (w >>> 17 | w << 15) ^ (w >>> 19 | w << 13) ^ w >>> 10
    }
    return e.prototype._update = function(w) {
        for (var x = this._w, B = this._a | 0, E = this._b | 0, C = this._c | 0, $ = this._d | 0, I = this._e | 0, D = this._f | 0, j = this._g | 0, O = this._h | 0, L = 0; L < 16; ++L) x[L] = w.readInt32BE(L * 4);
        for (; L < 64; ++L) x[L] = m(x[L - 2]) + x[L - 7] + f(x[L - 15]) + x[L - 16] | 0;
        for (var G = 0; G < 64; ++G) {
            var V = O + p(I) + h(I, D, j) + n[G] + x[G] | 0,
                K = l(B) + c(B, E, C) | 0;
            O = j, j = D, D = I, I = $ + V | 0, $ = C, C = E, E = B, B = V + K | 0
        }
        this._a = B + this._a | 0, this._b = E + this._b | 0, this._c = C + this._c | 0, this._d = $ + this._d | 0, this._e = I + this._e | 0, this._f = D + this._f | 0, this._g = j + this._g | 0, this._h = O + this._h | 0
    }, e.prototype._hash = function() {
        var w = i.allocUnsafe(32);
        return w.writeInt32BE(this._a, 0), w.writeInt32BE(this._b, 4), w.writeInt32BE(this._c, 8), w.writeInt32BE(this._d, 12), w.writeInt32BE(this._e, 16), w.writeInt32BE(this._f, 20), w.writeInt32BE(this._g, 24), w.writeInt32BE(this._h, 28), w
    }, sha256$1 = e, sha256$1
}
var sha224$1, hasRequiredSha224;

function requireSha224() {
    if (hasRequiredSha224) return sha224$1;
    hasRequiredSha224 = 1;
    var a = requireInherits_browser(),
        r = requireSha256(),
        i = requireHash$1(),
        n = requireSafeBuffer$2().Buffer,
        s = new Array(64);

    function e() {
        this.init(), this._w = s, i.call(this, 64, 56)
    }
    return a(e, r), e.prototype.init = function() {
        return this._a = 3238371032, this._b = 914150663, this._c = 812702999, this._d = 4144912697, this._e = 4290775857, this._f = 1750603025, this._g = 1694076839, this._h = 3204075428, this
    }, e.prototype._hash = function() {
        var h = n.allocUnsafe(28);
        return h.writeInt32BE(this._a, 0), h.writeInt32BE(this._b, 4), h.writeInt32BE(this._c, 8), h.writeInt32BE(this._d, 12), h.writeInt32BE(this._e, 16), h.writeInt32BE(this._f, 20), h.writeInt32BE(this._g, 24), h
    }, sha224$1 = e, sha224$1
}
var sha512$1, hasRequiredSha512;

function requireSha512() {
    if (hasRequiredSha512) return sha512$1;
    hasRequiredSha512 = 1;
    var a = requireInherits_browser(),
        r = requireHash$1(),
        i = requireSafeBuffer$2().Buffer,
        n = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591],
        s = new Array(160);

    function e() {
        this.init(), this._w = s, r.call(this, 128, 112)
    }
    a(e, r), e.prototype.init = function() {
        return this._ah = 1779033703, this._bh = 3144134277, this._ch = 1013904242, this._dh = 2773480762, this._eh = 1359893119, this._fh = 2600822924, this._gh = 528734635, this._hh = 1541459225, this._al = 4089235720, this._bl = 2227873595, this._cl = 4271175723, this._dl = 1595750129, this._el = 2917565137, this._fl = 725511199, this._gl = 4215389547, this._hl = 327033209, this
    };

    function h(E, C, $) {
        return $ ^ E & (C ^ $)
    }

    function c(E, C, $) {
        return E & C | $ & (E | C)
    }

    function l(E, C) {
        return (E >>> 28 | C << 4) ^ (C >>> 2 | E << 30) ^ (C >>> 7 | E << 25)
    }

    function p(E, C) {
        return (E >>> 14 | C << 18) ^ (E >>> 18 | C << 14) ^ (C >>> 9 | E << 23)
    }

    function f(E, C) {
        return (E >>> 1 | C << 31) ^ (E >>> 8 | C << 24) ^ E >>> 7
    }

    function m(E, C) {
        return (E >>> 1 | C << 31) ^ (E >>> 8 | C << 24) ^ (E >>> 7 | C << 25)
    }

    function w(E, C) {
        return (E >>> 19 | C << 13) ^ (C >>> 29 | E << 3) ^ E >>> 6
    }

    function x(E, C) {
        return (E >>> 19 | C << 13) ^ (C >>> 29 | E << 3) ^ (E >>> 6 | C << 26)
    }

    function B(E, C) {
        return E >>> 0 < C >>> 0 ? 1 : 0
    }
    return e.prototype._update = function(E) {
        for (var C = this._w, $ = this._ah | 0, I = this._bh | 0, D = this._ch | 0, j = this._dh | 0, O = this._eh | 0, L = this._fh | 0, G = this._gh | 0, V = this._hh | 0, K = this._al | 0, Q = this._bl | 0, P = this._cl | 0, q = this._dl | 0, b = this._el | 0, t = this._fl | 0, u = this._gl | 0, y = this._hl | 0, v = 0; v < 32; v += 2) C[v] = E.readInt32BE(v * 4), C[v + 1] = E.readInt32BE(v * 4 + 4);
        for (; v < 160; v += 2) {
            var g = C[v - 30],
                S = C[v - 30 + 1],
                _ = f(g, S),
                M = m(S, g);
            g = C[v - 4], S = C[v - 4 + 1];
            var d = w(g, S),
                A = x(S, g),
                z = C[v - 14],
                U = C[v - 14 + 1],
                X = C[v - 32],
                R = C[v - 32 + 1],
                k = M + U | 0,
                N = _ + z + B(k, M) | 0;
            k = k + A | 0, N = N + d + B(k, A) | 0, k = k + R | 0, N = N + X + B(k, R) | 0, C[v] = N, C[v + 1] = k
        }
        for (var W = 0; W < 160; W += 2) {
            N = C[W], k = C[W + 1];
            var J = c($, I, D),
                H = c(K, Q, P),
                Y = l($, K),
                ne = l(K, $),
                re = p(O, b),
                Pe = p(b, O),
                ye = n[W],
                te = n[W + 1],
                je = h(O, L, G),
                me = h(b, t, u),
                Z = y + Pe | 0,
                _e = V + re + B(Z, y) | 0;
            Z = Z + me | 0, _e = _e + je + B(Z, me) | 0, Z = Z + te | 0, _e = _e + ye + B(Z, te) | 0, Z = Z + k | 0, _e = _e + N + B(Z, k) | 0;
            var ae = ne + H | 0,
                ee = Y + J + B(ae, ne) | 0;
            V = G, y = u, G = L, u = t, L = O, t = b, b = q + Z | 0, O = j + _e + B(b, q) | 0, j = D, q = P, D = I, P = Q, I = $, Q = K, K = Z + ae | 0, $ = _e + ee + B(K, Z) | 0
        }
        this._al = this._al + K | 0, this._bl = this._bl + Q | 0, this._cl = this._cl + P | 0, this._dl = this._dl + q | 0, this._el = this._el + b | 0, this._fl = this._fl + t | 0, this._gl = this._gl + u | 0, this._hl = this._hl + y | 0, this._ah = this._ah + $ + B(this._al, K) | 0, this._bh = this._bh + I + B(this._bl, Q) | 0, this._ch = this._ch + D + B(this._cl, P) | 0, this._dh = this._dh + j + B(this._dl, q) | 0, this._eh = this._eh + O + B(this._el, b) | 0, this._fh = this._fh + L + B(this._fl, t) | 0, this._gh = this._gh + G + B(this._gl, u) | 0, this._hh = this._hh + V + B(this._hl, y) | 0
    }, e.prototype._hash = function() {
        var E = i.allocUnsafe(64);

        function C($, I, D) {
            E.writeInt32BE($, D), E.writeInt32BE(I, D + 4)
        }
        return C(this._ah, this._al, 0), C(this._bh, this._bl, 8), C(this._ch, this._cl, 16), C(this._dh, this._dl, 24), C(this._eh, this._el, 32), C(this._fh, this._fl, 40), C(this._gh, this._gl, 48), C(this._hh, this._hl, 56), E
    }, sha512$1 = e, sha512$1
}
var sha384$1, hasRequiredSha384;

function requireSha384() {
    if (hasRequiredSha384) return sha384$1;
    hasRequiredSha384 = 1;
    var a = requireInherits_browser(),
        r = requireSha512(),
        i = requireHash$1(),
        n = requireSafeBuffer$2().Buffer,
        s = new Array(160);

    function e() {
        this.init(), this._w = s, i.call(this, 128, 112)
    }
    return a(e, r), e.prototype.init = function() {
        return this._ah = 3418070365, this._bh = 1654270250, this._ch = 2438529370, this._dh = 355462360, this._eh = 1731405415, this._fh = 2394180231, this._gh = 3675008525, this._hh = 1203062813, this._al = 3238371032, this._bl = 914150663, this._cl = 812702999, this._dl = 4144912697, this._el = 4290775857, this._fl = 1750603025, this._gl = 1694076839, this._hl = 3204075428, this
    }, e.prototype._hash = function() {
        var h = n.allocUnsafe(48);

        function c(l, p, f) {
            h.writeInt32BE(l, f), h.writeInt32BE(p, f + 4)
        }
        return c(this._ah, this._al, 0), c(this._bh, this._bl, 8), c(this._ch, this._cl, 16), c(this._dh, this._dl, 24), c(this._eh, this._el, 32), c(this._fh, this._fl, 40), h
    }, sha384$1 = e, sha384$1
}
var hasRequiredSha_js;

function requireSha_js() {
    return hasRequiredSha_js || (hasRequiredSha_js = 1, (function(a) {
        a.exports = function(i) {
            var n = i.toLowerCase(),
                s = a.exports[n];
            if (!s) throw new Error(n + " is not supported (we accept pull requests)");
            return new s
        }, a.exports.sha = requireSha$1(), a.exports.sha1 = requireSha1(), a.exports.sha224 = requireSha224(), a.exports.sha256 = requireSha256(), a.exports.sha384 = requireSha384(), a.exports.sha512 = requireSha512()
    })(sha_js)), sha_js.exports
}
var cipherBase, hasRequiredCipherBase;

function requireCipherBase() {
    if (hasRequiredCipherBase) return cipherBase;
    hasRequiredCipherBase = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireStreamBrowserify().Transform,
        i = requireString_decoder().StringDecoder,
        n = requireInherits_browser(),
        s = requireToBuffer$2();

    function e(h) {
        r.call(this), this.hashMode = typeof h == "string", this.hashMode ? this[h] = this._finalOrDigest : this.final = this._finalOrDigest, this._final && (this.__final = this._final, this._final = null), this._decoder = null, this._encoding = null
    }
    return n(e, r), e.prototype.update = function(h, c, l) {
        var p = s(h, c),
            f = this._update(p);
        return this.hashMode ? this : (l && (f = this._toString(f, l)), f)
    }, e.prototype.setAutoPadding = function() {}, e.prototype.getAuthTag = function() {
        throw new Error("trying to get auth tag in unsupported state")
    }, e.prototype.setAuthTag = function() {
        throw new Error("trying to set auth tag in unsupported state")
    }, e.prototype.setAAD = function() {
        throw new Error("trying to set aad in unsupported state")
    }, e.prototype._transform = function(h, c, l) {
        var p;
        try {
            this.hashMode ? this._update(h) : this.push(this._update(h))
        } catch (f) {
            p = f
        } finally {
            l(p)
        }
    }, e.prototype._flush = function(h) {
        var c;
        try {
            this.push(this.__final())
        } catch (l) {
            c = l
        }
        h(c)
    }, e.prototype._finalOrDigest = function(h) {
        var c = this.__final() || a.alloc(0);
        return h && (c = this._toString(c, h, !0)), c
    }, e.prototype._toString = function(h, c, l) {
        if (this._decoder || (this._decoder = new i(c), this._encoding = c), this._encoding !== c) throw new Error("can’t switch encodings");
        var p = this._decoder.write(h);
        return l && (p += this._decoder.end()), p
    }, cipherBase = e, cipherBase
}
var browser$a, hasRequiredBrowser$a;

function requireBrowser$a() {
    if (hasRequiredBrowser$a) return browser$a;
    hasRequiredBrowser$a = 1;
    var a = requireInherits_browser(),
        r = requireMd5_js(),
        i = requireRipemd160(),
        n = requireSha_js(),
        s = requireCipherBase();

    function e(h) {
        s.call(this, "digest"), this._hash = h
    }
    return a(e, s), e.prototype._update = function(h) {
        this._hash.update(h)
    }, e.prototype._final = function() {
        return this._hash.digest()
    }, browser$a = function(c) {
        return c = c.toLowerCase(), c === "md5" ? new r : c === "rmd160" || c === "ripemd160" ? new i : new e(n(c))
    }, browser$a
}
var legacy, hasRequiredLegacy;

function requireLegacy() {
    if (hasRequiredLegacy) return legacy;
    hasRequiredLegacy = 1;
    var a = requireInherits_browser(),
        r = requireSafeBuffer$2().Buffer,
        i = requireCipherBase(),
        n = r.alloc(128),
        s = 64;

    function e(h, c) {
        i.call(this, "digest"), typeof c == "string" && (c = r.from(c)), this._alg = h, this._key = c, c.length > s ? c = h(c) : c.length < s && (c = r.concat([c, n], s));
        for (var l = this._ipad = r.allocUnsafe(s), p = this._opad = r.allocUnsafe(s), f = 0; f < s; f++) l[f] = c[f] ^ 54, p[f] = c[f] ^ 92;
        this._hash = [l]
    }
    return a(e, i), e.prototype._update = function(h) {
        this._hash.push(h)
    }, e.prototype._final = function() {
        var h = this._alg(r.concat(this._hash));
        return this._alg(r.concat([this._opad, h]))
    }, legacy = e, legacy
}
var md5, hasRequiredMd5;

function requireMd5() {
    if (hasRequiredMd5) return md5;
    hasRequiredMd5 = 1;
    var a = requireMd5_js();
    return md5 = function(r) {
        return new a().update(r).digest()
    }, md5
}
var browser$9, hasRequiredBrowser$9;

function requireBrowser$9() {
    if (hasRequiredBrowser$9) return browser$9;
    hasRequiredBrowser$9 = 1;
    var a = requireInherits_browser(),
        r = requireLegacy(),
        i = requireCipherBase(),
        n = requireSafeBuffer$2().Buffer,
        s = requireMd5(),
        e = requireRipemd160(),
        h = requireSha_js(),
        c = n.alloc(128);

    function l(p, f) {
        i.call(this, "digest"), typeof f == "string" && (f = n.from(f));
        var m = p === "sha512" || p === "sha384" ? 128 : 64;
        if (this._alg = p, this._key = f, f.length > m) {
            var w = p === "rmd160" ? new e : h(p);
            f = w.update(f).digest()
        } else f.length < m && (f = n.concat([f, c], m));
        for (var x = this._ipad = n.allocUnsafe(m), B = this._opad = n.allocUnsafe(m), E = 0; E < m; E++) x[E] = f[E] ^ 54, B[E] = f[E] ^ 92;
        this._hash = p === "rmd160" ? new e : h(p), this._hash.update(x)
    }
    return a(l, i), l.prototype._update = function(p) {
        this._hash.update(p)
    }, l.prototype._final = function() {
        var p = this._hash.digest(),
            f = this._alg === "rmd160" ? new e : h(this._alg);
        return f.update(this._opad).update(p).digest()
    }, browser$9 = function(f, m) {
        return f = f.toLowerCase(), f === "rmd160" || f === "ripemd160" ? new l("rmd160", m) : f === "md5" ? new r(s, m) : new l(f, m)
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
    var a = isFinite,
        r = Math.pow(2, 30) - 1;
    return precondition = function(i, n) {
        if (typeof i != "number") throw new TypeError("Iterations not a number");
        if (i < 0 || !a(i)) throw new TypeError("Bad iterations");
        if (typeof n != "number") throw new TypeError("Key length not a number");
        if (n < 0 || n > r || n !== n) throw new TypeError("Bad key length")
    }, precondition
}
var defaultEncoding_1, hasRequiredDefaultEncoding;

function requireDefaultEncoding() {
    if (hasRequiredDefaultEncoding) return defaultEncoding_1;
    hasRequiredDefaultEncoding = 1;
    var a;
    if (commonjsGlobal.process && commonjsGlobal.process.browser) a = "utf-8";
    else if (commonjsGlobal.process && commonjsGlobal.process.version) {
        var r = parseInt(process$1.version.split(".")[0].slice(1), 10);
        a = r >= 6 ? "utf-8" : "binary"
    } else a = "utf-8";
    return defaultEncoding_1 = a, defaultEncoding_1
}
var toBuffer_1, hasRequiredToBuffer;

function requireToBuffer() {
    if (hasRequiredToBuffer) return toBuffer_1;
    hasRequiredToBuffer = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireToBuffer$2(),
        i = typeof Uint8Array < "u",
        n = i && typeof ArrayBuffer < "u",
        s = n && ArrayBuffer.isView;
    return toBuffer_1 = function(e, h, c) {
        if (typeof e == "string" || a.isBuffer(e) || i && e instanceof Uint8Array || s && s(e)) return r(e, h);
        throw new TypeError(c + " must be a string, a Buffer, a Uint8Array, or a DataView")
    }, toBuffer_1
}
var syncBrowser, hasRequiredSyncBrowser;

function requireSyncBrowser() {
    if (hasRequiredSyncBrowser) return syncBrowser;
    hasRequiredSyncBrowser = 1;
    var a = requireMd5(),
        r = requireRipemd160(),
        i = requireSha_js(),
        n = requireSafeBuffer$2().Buffer,
        s = requirePrecondition(),
        e = requireDefaultEncoding(),
        h = requireToBuffer(),
        c = n.alloc(128),
        l = {
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
        p = {
            __proto__: null,
            "sha-1": "sha1",
            "sha-224": "sha224",
            "sha-256": "sha256",
            "sha-384": "sha384",
            "sha-512": "sha512",
            "ripemd-160": "ripemd160"
        };

    function f(B) {
        return new r().update(B).digest()
    }

    function m(B) {
        function E(C) {
            return i(B).update(C).digest()
        }
        return B === "rmd160" || B === "ripemd160" ? f : B === "md5" ? a : E
    }

    function w(B, E, C) {
        var $ = m(B),
            I = B === "sha512" || B === "sha384" ? 128 : 64;
        E.length > I ? E = $(E) : E.length < I && (E = n.concat([E, c], I));
        for (var D = n.allocUnsafe(I + l[B]), j = n.allocUnsafe(I + l[B]), O = 0; O < I; O++) D[O] = E[O] ^ 54, j[O] = E[O] ^ 92;
        var L = n.allocUnsafe(I + C + 4);
        D.copy(L, 0, 0, I), this.ipad1 = L, this.ipad2 = D, this.opad = j, this.alg = B, this.blocksize = I, this.hash = $, this.size = l[B]
    }
    w.prototype.run = function(B, E) {
        B.copy(E, this.blocksize);
        var C = this.hash(E);
        return C.copy(this.opad, this.blocksize), this.hash(this.opad)
    };

    function x(B, E, C, $, I) {
        s(C, $), B = h(B, e, "Password"), E = h(E, e, "Salt");
        var D = (I || "sha1").toLowerCase(),
            j = p[D] || D,
            O = l[j];
        if (typeof O != "number" || !O) throw new TypeError("Digest algorithm not supported: " + I);
        var L = new w(j, B, E.length),
            G = n.allocUnsafe($),
            V = n.allocUnsafe(E.length + 4);
        E.copy(V, 0, 0, E.length);
        for (var K = 0, Q = O, P = Math.ceil($ / Q), q = 1; q <= P; q++) {
            V.writeUInt32BE(q, E.length);
            for (var b = L.run(V, L.ipad1), t = b, u = 1; u < C; u++) {
                t = L.run(t, L.ipad2);
                for (var y = 0; y < Q; y++) b[y] ^= t[y]
            }
            b.copy(G, K), K += Q
        }
        return G
    }
    return syncBrowser = x, syncBrowser
}
var async, hasRequiredAsync;

function requireAsync() {
    if (hasRequiredAsync) return async;
    hasRequiredAsync = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requirePrecondition(),
        i = requireDefaultEncoding(),
        n = requireSyncBrowser(),
        s = requireToBuffer(),
        e, h = commonjsGlobal.crypto && commonjsGlobal.crypto.subtle,
        c = {
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
        l = [],
        p;

    function f() {
        return p || (commonjsGlobal.process && commonjsGlobal.process.nextTick ? p = commonjsGlobal.process.nextTick : commonjsGlobal.queueMicrotask ? p = commonjsGlobal.queueMicrotask : commonjsGlobal.setImmediate ? p = commonjsGlobal.setImmediate : p = commonjsGlobal.setTimeout, p)
    }

    function m(B, E, C, $, I) {
        return h.importKey("raw", B, {
            name: "PBKDF2"
        }, !1, ["deriveBits"]).then(function(D) {
            return h.deriveBits({
                name: "PBKDF2",
                salt: E,
                iterations: C,
                hash: {
                    name: I
                }
            }, D, $ << 3)
        }).then(function(D) {
            return a.from(D)
        })
    }

    function w(B) {
        if (commonjsGlobal.process && !commonjsGlobal.process.browser || !h || !h.importKey || !h.deriveBits) return Promise.resolve(!1);
        if (l[B] !== void 0) return l[B];
        e = e || a.alloc(8);
        var E = m(e, e, 10, 128, B).then(function() {
            return !0
        }, function() {
            return !1
        });
        return l[B] = E, E
    }

    function x(B, E) {
        B.then(function(C) {
            f()(function() {
                E(null, C)
            })
        }, function(C) {
            f()(function() {
                E(C)
            })
        })
    }
    return async = function(B, E, C, $, I, D) {
        if (typeof I == "function" && (D = I, I = void 0), r(C, $), B = s(B, i, "Password"), E = s(E, i, "Salt"), typeof D != "function") throw new Error("No callback provided to pbkdf2");
        I = I || "sha1";
        var j = c[I.toLowerCase()];
        if (!j || typeof commonjsGlobal.Promise != "function") {
            f()(function() {
                var O;
                try {
                    O = n(B, E, C, $, I)
                } catch (L) {
                    D(L);
                    return
                }
                D(null, O)
            });
            return
        }
        x(w(j).then(function(O) {
            return O ? m(B, E, C, $, j) : n(B, E, C, $, I)
        }), D)
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
    hasRequiredUtils$3 = 1, utils$3.readUInt32BE = function(s, e) {
        var h = s[0 + e] << 24 | s[1 + e] << 16 | s[2 + e] << 8 | s[3 + e];
        return h >>> 0
    }, utils$3.writeUInt32BE = function(s, e, h) {
        s[0 + h] = e >>> 24, s[1 + h] = e >>> 16 & 255, s[2 + h] = e >>> 8 & 255, s[3 + h] = e & 255
    }, utils$3.ip = function(s, e, h, c) {
        for (var l = 0, p = 0, f = 6; f >= 0; f -= 2) {
            for (var m = 0; m <= 24; m += 8) l <<= 1, l |= e >>> m + f & 1;
            for (var m = 0; m <= 24; m += 8) l <<= 1, l |= s >>> m + f & 1
        }
        for (var f = 6; f >= 0; f -= 2) {
            for (var m = 1; m <= 25; m += 8) p <<= 1, p |= e >>> m + f & 1;
            for (var m = 1; m <= 25; m += 8) p <<= 1, p |= s >>> m + f & 1
        }
        h[c + 0] = l >>> 0, h[c + 1] = p >>> 0
    }, utils$3.rip = function(s, e, h, c) {
        for (var l = 0, p = 0, f = 0; f < 4; f++)
            for (var m = 24; m >= 0; m -= 8) l <<= 1, l |= e >>> m + f & 1, l <<= 1, l |= s >>> m + f & 1;
        for (var f = 4; f < 8; f++)
            for (var m = 24; m >= 0; m -= 8) p <<= 1, p |= e >>> m + f & 1, p <<= 1, p |= s >>> m + f & 1;
        h[c + 0] = l >>> 0, h[c + 1] = p >>> 0
    }, utils$3.pc1 = function(s, e, h, c) {
        for (var l = 0, p = 0, f = 7; f >= 5; f--) {
            for (var m = 0; m <= 24; m += 8) l <<= 1, l |= e >> m + f & 1;
            for (var m = 0; m <= 24; m += 8) l <<= 1, l |= s >> m + f & 1
        }
        for (var m = 0; m <= 24; m += 8) l <<= 1, l |= e >> m + f & 1;
        for (var f = 1; f <= 3; f++) {
            for (var m = 0; m <= 24; m += 8) p <<= 1, p |= e >> m + f & 1;
            for (var m = 0; m <= 24; m += 8) p <<= 1, p |= s >> m + f & 1
        }
        for (var m = 0; m <= 24; m += 8) p <<= 1, p |= s >> m + f & 1;
        h[c + 0] = l >>> 0, h[c + 1] = p >>> 0
    }, utils$3.r28shl = function(s, e) {
        return s << e & 268435455 | s >>> 28 - e
    };
    var a = [14, 11, 17, 4, 27, 23, 25, 0, 13, 22, 7, 18, 5, 9, 16, 24, 2, 20, 12, 21, 1, 8, 15, 26, 15, 4, 25, 19, 9, 1, 26, 16, 5, 11, 23, 8, 12, 7, 17, 0, 22, 3, 10, 14, 6, 20, 27, 24];
    utils$3.pc2 = function(s, e, h, c) {
        for (var l = 0, p = 0, f = a.length >>> 1, m = 0; m < f; m++) l <<= 1, l |= s >>> a[m] & 1;
        for (var m = f; m < a.length; m++) p <<= 1, p |= e >>> a[m] & 1;
        h[c + 0] = l >>> 0, h[c + 1] = p >>> 0
    }, utils$3.expand = function(s, e, h) {
        var c = 0,
            l = 0;
        c = (s & 1) << 5 | s >>> 27;
        for (var p = 23; p >= 15; p -= 4) c <<= 6, c |= s >>> p & 63;
        for (var p = 11; p >= 3; p -= 4) l |= s >>> p & 63, l <<= 6;
        l |= (s & 31) << 1 | s >>> 31, e[h + 0] = c >>> 0, e[h + 1] = l >>> 0
    };
    var r = [14, 0, 4, 15, 13, 7, 1, 4, 2, 14, 15, 2, 11, 13, 8, 1, 3, 10, 10, 6, 6, 12, 12, 11, 5, 9, 9, 5, 0, 3, 7, 8, 4, 15, 1, 12, 14, 8, 8, 2, 13, 4, 6, 9, 2, 1, 11, 7, 15, 5, 12, 11, 9, 3, 7, 14, 3, 10, 10, 0, 5, 6, 0, 13, 15, 3, 1, 13, 8, 4, 14, 7, 6, 15, 11, 2, 3, 8, 4, 14, 9, 12, 7, 0, 2, 1, 13, 10, 12, 6, 0, 9, 5, 11, 10, 5, 0, 13, 14, 8, 7, 10, 11, 1, 10, 3, 4, 15, 13, 4, 1, 2, 5, 11, 8, 6, 12, 7, 6, 12, 9, 0, 3, 5, 2, 14, 15, 9, 10, 13, 0, 7, 9, 0, 14, 9, 6, 3, 3, 4, 15, 6, 5, 10, 1, 2, 13, 8, 12, 5, 7, 14, 11, 12, 4, 11, 2, 15, 8, 1, 13, 1, 6, 10, 4, 13, 9, 0, 8, 6, 15, 9, 3, 8, 0, 7, 11, 4, 1, 15, 2, 14, 12, 3, 5, 11, 10, 5, 14, 2, 7, 12, 7, 13, 13, 8, 14, 11, 3, 5, 0, 6, 6, 15, 9, 0, 10, 3, 1, 4, 2, 7, 8, 2, 5, 12, 11, 1, 12, 10, 4, 14, 15, 9, 10, 3, 6, 15, 9, 0, 0, 6, 12, 10, 11, 1, 7, 13, 13, 8, 15, 9, 1, 4, 3, 5, 14, 11, 5, 12, 2, 7, 8, 2, 4, 14, 2, 14, 12, 11, 4, 2, 1, 12, 7, 4, 10, 7, 11, 13, 6, 1, 8, 5, 5, 0, 3, 15, 15, 10, 13, 3, 0, 9, 14, 8, 9, 6, 4, 11, 2, 8, 1, 12, 11, 7, 10, 1, 13, 14, 7, 2, 8, 13, 15, 6, 9, 15, 12, 0, 5, 9, 6, 10, 3, 4, 0, 5, 14, 3, 12, 10, 1, 15, 10, 4, 15, 2, 9, 7, 2, 12, 6, 9, 8, 5, 0, 6, 13, 1, 3, 13, 4, 14, 14, 0, 7, 11, 5, 3, 11, 8, 9, 4, 14, 3, 15, 2, 5, 12, 2, 9, 8, 5, 12, 15, 3, 10, 7, 11, 0, 14, 4, 1, 10, 7, 1, 6, 13, 0, 11, 8, 6, 13, 4, 13, 11, 0, 2, 11, 14, 7, 15, 4, 0, 9, 8, 1, 13, 10, 3, 14, 12, 3, 9, 5, 7, 12, 5, 2, 10, 15, 6, 8, 1, 6, 1, 6, 4, 11, 11, 13, 13, 8, 12, 1, 3, 4, 7, 10, 14, 7, 10, 9, 15, 5, 6, 0, 8, 15, 0, 14, 5, 2, 9, 3, 2, 12, 13, 1, 2, 15, 8, 13, 4, 8, 6, 10, 15, 3, 11, 7, 1, 4, 10, 12, 9, 5, 3, 6, 14, 11, 5, 0, 0, 14, 12, 9, 7, 2, 7, 2, 11, 1, 4, 14, 1, 7, 9, 4, 12, 10, 14, 8, 2, 13, 0, 15, 6, 12, 10, 9, 13, 0, 15, 3, 3, 5, 5, 6, 8, 11];
    utils$3.substitute = function(s, e) {
        for (var h = 0, c = 0; c < 4; c++) {
            var l = s >>> 18 - c * 6 & 63,
                p = r[c * 64 + l];
            h <<= 4, h |= p
        }
        for (var c = 0; c < 4; c++) {
            var l = e >>> 18 - c * 6 & 63,
                p = r[256 + c * 64 + l];
            h <<= 4, h |= p
        }
        return h >>> 0
    };
    var i = [16, 25, 12, 11, 3, 20, 4, 15, 31, 17, 9, 6, 27, 14, 1, 22, 30, 24, 8, 18, 0, 5, 29, 23, 13, 19, 2, 26, 10, 21, 28, 7];
    return utils$3.permute = function(s) {
        for (var e = 0, h = 0; h < i.length; h++) e <<= 1, e |= s >>> i[h] & 1;
        return e >>> 0
    }, utils$3.padSplit = function(s, e, h) {
        for (var c = s.toString(2); c.length < e;) c = "0" + c;
        for (var l = [], p = 0; p < e; p += h) l.push(c.slice(p, p + h));
        return l.join(" ")
    }, utils$3
}
var minimalisticAssert, hasRequiredMinimalisticAssert;

function requireMinimalisticAssert() {
    if (hasRequiredMinimalisticAssert) return minimalisticAssert;
    hasRequiredMinimalisticAssert = 1, minimalisticAssert = a;

    function a(r, i) {
        if (!r) throw new Error(i || "Assertion failed")
    }
    return a.equal = function(i, n, s) {
        if (i != n) throw new Error(s || "Assertion failed: " + i + " != " + n)
    }, minimalisticAssert
}
var cipher, hasRequiredCipher;

function requireCipher() {
    if (hasRequiredCipher) return cipher;
    hasRequiredCipher = 1;
    var a = requireMinimalisticAssert();

    function r(i) {
        this.options = i, this.type = this.options.type, this.blockSize = 8, this._init(), this.buffer = new Array(this.blockSize), this.bufferOff = 0, this.padding = i.padding !== !1
    }
    return cipher = r, r.prototype._init = function() {}, r.prototype.update = function(n) {
        return n.length === 0 ? [] : this.type === "decrypt" ? this._updateDecrypt(n) : this._updateEncrypt(n)
    }, r.prototype._buffer = function(n, s) {
        for (var e = Math.min(this.buffer.length - this.bufferOff, n.length - s), h = 0; h < e; h++) this.buffer[this.bufferOff + h] = n[s + h];
        return this.bufferOff += e, e
    }, r.prototype._flushBuffer = function(n, s) {
        return this._update(this.buffer, 0, n, s), this.bufferOff = 0, this.blockSize
    }, r.prototype._updateEncrypt = function(n) {
        var s = 0,
            e = 0,
            h = (this.bufferOff + n.length) / this.blockSize | 0,
            c = new Array(h * this.blockSize);
        this.bufferOff !== 0 && (s += this._buffer(n, s), this.bufferOff === this.buffer.length && (e += this._flushBuffer(c, e)));
        for (var l = n.length - (n.length - s) % this.blockSize; s < l; s += this.blockSize) this._update(n, s, c, e), e += this.blockSize;
        for (; s < n.length; s++, this.bufferOff++) this.buffer[this.bufferOff] = n[s];
        return c
    }, r.prototype._updateDecrypt = function(n) {
        for (var s = 0, e = 0, h = Math.ceil((this.bufferOff + n.length) / this.blockSize) - 1, c = new Array(h * this.blockSize); h > 0; h--) s += this._buffer(n, s), e += this._flushBuffer(c, e);
        return s += this._buffer(n, s), c
    }, r.prototype.final = function(n) {
        var s;
        n && (s = this.update(n));
        var e;
        return this.type === "encrypt" ? e = this._finalEncrypt() : e = this._finalDecrypt(), s ? s.concat(e) : e
    }, r.prototype._pad = function(n, s) {
        if (s === 0) return !1;
        for (; s < n.length;) n[s++] = 0;
        return !0
    }, r.prototype._finalEncrypt = function() {
        if (!this._pad(this.buffer, this.bufferOff)) return [];
        var n = new Array(this.blockSize);
        return this._update(this.buffer, 0, n, 0), n
    }, r.prototype._unpad = function(n) {
        return n
    }, r.prototype._finalDecrypt = function() {
        a.equal(this.bufferOff, this.blockSize, "Not enough data to decrypt");
        var n = new Array(this.blockSize);
        return this._flushBuffer(n, 0), this._unpad(n)
    }, cipher
}
var des, hasRequiredDes$1;

function requireDes$1() {
    if (hasRequiredDes$1) return des;
    hasRequiredDes$1 = 1;
    var a = requireMinimalisticAssert(),
        r = requireInherits_browser(),
        i = requireUtils$3(),
        n = requireCipher();

    function s() {
        this.tmp = new Array(2), this.keys = null
    }

    function e(c) {
        n.call(this, c);
        var l = new s;
        this._desState = l, this.deriveKeys(l, c.key)
    }
    r(e, n), des = e, e.create = function(l) {
        return new e(l)
    };
    var h = [1, 1, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 1];
    return e.prototype.deriveKeys = function(l, p) {
        l.keys = new Array(32), a.equal(p.length, this.blockSize, "Invalid key length");
        var f = i.readUInt32BE(p, 0),
            m = i.readUInt32BE(p, 4);
        i.pc1(f, m, l.tmp, 0), f = l.tmp[0], m = l.tmp[1];
        for (var w = 0; w < l.keys.length; w += 2) {
            var x = h[w >>> 1];
            f = i.r28shl(f, x), m = i.r28shl(m, x), i.pc2(f, m, l.keys, w)
        }
    }, e.prototype._update = function(l, p, f, m) {
        var w = this._desState,
            x = i.readUInt32BE(l, p),
            B = i.readUInt32BE(l, p + 4);
        i.ip(x, B, w.tmp, 0), x = w.tmp[0], B = w.tmp[1], this.type === "encrypt" ? this._encrypt(w, x, B, w.tmp, 0) : this._decrypt(w, x, B, w.tmp, 0), x = w.tmp[0], B = w.tmp[1], i.writeUInt32BE(f, x, m), i.writeUInt32BE(f, B, m + 4)
    }, e.prototype._pad = function(l, p) {
        if (this.padding === !1) return !1;
        for (var f = l.length - p, m = p; m < l.length; m++) l[m] = f;
        return !0
    }, e.prototype._unpad = function(l) {
        if (this.padding === !1) return l;
        for (var p = l[l.length - 1], f = l.length - p; f < l.length; f++) a.equal(l[f], p);
        return l.slice(0, l.length - p)
    }, e.prototype._encrypt = function(l, p, f, m, w) {
        for (var x = p, B = f, E = 0; E < l.keys.length; E += 2) {
            var C = l.keys[E],
                $ = l.keys[E + 1];
            i.expand(B, l.tmp, 0), C ^= l.tmp[0], $ ^= l.tmp[1];
            var I = i.substitute(C, $),
                D = i.permute(I),
                j = B;
            B = (x ^ D) >>> 0, x = j
        }
        i.rip(B, x, m, w)
    }, e.prototype._decrypt = function(l, p, f, m, w) {
        for (var x = f, B = p, E = l.keys.length - 2; E >= 0; E -= 2) {
            var C = l.keys[E],
                $ = l.keys[E + 1];
            i.expand(x, l.tmp, 0), C ^= l.tmp[0], $ ^= l.tmp[1];
            var I = i.substitute(C, $),
                D = i.permute(I),
                j = x;
            x = (B ^ D) >>> 0, B = j
        }
        i.rip(x, B, m, w)
    }, des
}
var cbc$1 = {},
    hasRequiredCbc$1;

function requireCbc$1() {
    if (hasRequiredCbc$1) return cbc$1;
    hasRequiredCbc$1 = 1;
    var a = requireMinimalisticAssert(),
        r = requireInherits_browser(),
        i = {};

    function n(e) {
        a.equal(e.length, 8, "Invalid IV length"), this.iv = new Array(8);
        for (var h = 0; h < this.iv.length; h++) this.iv[h] = e[h]
    }

    function s(e) {
        function h(f) {
            e.call(this, f), this._cbcInit()
        }
        r(h, e);
        for (var c = Object.keys(i), l = 0; l < c.length; l++) {
            var p = c[l];
            h.prototype[p] = i[p]
        }
        return h.create = function(m) {
            return new h(m)
        }, h
    }
    return cbc$1.instantiate = s, i._cbcInit = function() {
        var h = new n(this.options.iv);
        this._cbcState = h
    }, i._update = function(h, c, l, p) {
        var f = this._cbcState,
            m = this.constructor.super_.prototype,
            w = f.iv;
        if (this.type === "encrypt") {
            for (var x = 0; x < this.blockSize; x++) w[x] ^= h[c + x];
            m._update.call(this, w, 0, l, p);
            for (var x = 0; x < this.blockSize; x++) w[x] = l[p + x]
        } else {
            m._update.call(this, h, c, l, p);
            for (var x = 0; x < this.blockSize; x++) l[p + x] ^= w[x];
            for (var x = 0; x < this.blockSize; x++) w[x] = h[c + x]
        }
    }, cbc$1
}
var ede, hasRequiredEde;

function requireEde() {
    if (hasRequiredEde) return ede;
    hasRequiredEde = 1;
    var a = requireMinimalisticAssert(),
        r = requireInherits_browser(),
        i = requireCipher(),
        n = requireDes$1();

    function s(h, c) {
        a.equal(c.length, 24, "Invalid key length");
        var l = c.slice(0, 8),
            p = c.slice(8, 16),
            f = c.slice(16, 24);
        h === "encrypt" ? this.ciphers = [n.create({
            type: "encrypt",
            key: l
        }), n.create({
            type: "decrypt",
            key: p
        }), n.create({
            type: "encrypt",
            key: f
        })] : this.ciphers = [n.create({
            type: "decrypt",
            key: f
        }), n.create({
            type: "encrypt",
            key: p
        }), n.create({
            type: "decrypt",
            key: l
        })]
    }

    function e(h) {
        i.call(this, h);
        var c = new s(this.type, this.options.key);
        this._edeState = c
    }
    return r(e, i), ede = e, e.create = function(c) {
        return new e(c)
    }, e.prototype._update = function(c, l, p, f) {
        var m = this._edeState;
        m.ciphers[0]._update(c, l, p, f), m.ciphers[1]._update(p, f, p, f), m.ciphers[2]._update(p, f, p, f)
    }, e.prototype._pad = n.prototype._pad, e.prototype._unpad = n.prototype._unpad, ede
}
var hasRequiredDes;

function requireDes() {
    return hasRequiredDes || (hasRequiredDes = 1, des$1.utils = requireUtils$3(), des$1.Cipher = requireCipher(), des$1.DES = requireDes$1(), des$1.CBC = requireCbc$1(), des$1.EDE = requireEde()), des$1
}
var browserifyDes, hasRequiredBrowserifyDes;

function requireBrowserifyDes() {
    if (hasRequiredBrowserifyDes) return browserifyDes;
    hasRequiredBrowserifyDes = 1;
    var a = requireCipherBase(),
        r = requireDes(),
        i = requireInherits_browser(),
        n = requireSafeBuffer$2().Buffer,
        s = {
            "des-ede3-cbc": r.CBC.instantiate(r.EDE),
            "des-ede3": r.EDE,
            "des-ede-cbc": r.CBC.instantiate(r.EDE),
            "des-ede": r.EDE,
            "des-cbc": r.CBC.instantiate(r.DES),
            "des-ecb": r.DES
        };
    s.des = s["des-cbc"], s.des3 = s["des-ede3-cbc"], browserifyDes = e, i(e, a);

    function e(h) {
        a.call(this);
        var c = h.mode.toLowerCase(),
            l = s[c],
            p;
        h.decrypt ? p = "decrypt" : p = "encrypt";
        var f = h.key;
        n.isBuffer(f) || (f = n.from(f)), (c === "des-ede" || c === "des-ede-cbc") && (f = n.concat([f, f.slice(0, 8)]));
        var m = h.iv;
        n.isBuffer(m) || (m = n.from(m)), this._des = l.create({
            key: f,
            iv: m,
            type: p
        })
    }
    return e.prototype._update = function(h) {
        return n.from(this._des.update(h))
    }, e.prototype._final = function() {
        return n.from(this._des.final())
    }, browserifyDes
}
var browser$6 = {},
    encrypter = {},
    ecb = {},
    hasRequiredEcb;

function requireEcb() {
    return hasRequiredEcb || (hasRequiredEcb = 1, ecb.encrypt = function(a, r) {
        return a._cipher.encryptBlock(r)
    }, ecb.decrypt = function(a, r) {
        return a._cipher.decryptBlock(r)
    }), ecb
}
var cbc = {},
    bufferXor, hasRequiredBufferXor;

function requireBufferXor() {
    return hasRequiredBufferXor || (hasRequiredBufferXor = 1, bufferXor = function(r, i) {
        for (var n = Math.min(r.length, i.length), s = new Buffer(n), e = 0; e < n; ++e) s[e] = r[e] ^ i[e];
        return s
    }), bufferXor
}
var hasRequiredCbc;

function requireCbc() {
    if (hasRequiredCbc) return cbc;
    hasRequiredCbc = 1;
    var a = requireBufferXor();
    return cbc.encrypt = function(r, i) {
        var n = a(i, r._prev);
        return r._prev = r._cipher.encryptBlock(n), r._prev
    }, cbc.decrypt = function(r, i) {
        var n = r._prev;
        r._prev = i;
        var s = r._cipher.decryptBlock(i);
        return a(s, n)
    }, cbc
}
var cfb = {},
    hasRequiredCfb;

function requireCfb() {
    if (hasRequiredCfb) return cfb;
    hasRequiredCfb = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireBufferXor();

    function i(n, s, e) {
        var h = s.length,
            c = r(s, n._cache);
        return n._cache = n._cache.slice(h), n._prev = a.concat([n._prev, e ? s : c]), c
    }
    return cfb.encrypt = function(n, s, e) {
        for (var h = a.allocUnsafe(0), c; s.length;)
            if (n._cache.length === 0 && (n._cache = n._cipher.encryptBlock(n._prev), n._prev = a.allocUnsafe(0)), n._cache.length <= s.length) c = n._cache.length, h = a.concat([h, i(n, s.slice(0, c), e)]), s = s.slice(c);
            else {
                h = a.concat([h, i(n, s, e)]);
                break
            } return h
    }, cfb
}
var cfb8 = {},
    hasRequiredCfb8;

function requireCfb8() {
    if (hasRequiredCfb8) return cfb8;
    hasRequiredCfb8 = 1;
    var a = requireSafeBuffer$2().Buffer;

    function r(i, n, s) {
        var e = i._cipher.encryptBlock(i._prev),
            h = e[0] ^ n;
        return i._prev = a.concat([i._prev.slice(1), a.from([s ? n : h])]), h
    }
    return cfb8.encrypt = function(i, n, s) {
        for (var e = n.length, h = a.allocUnsafe(e), c = -1; ++c < e;) h[c] = r(i, n[c], s);
        return h
    }, cfb8
}
var cfb1 = {},
    hasRequiredCfb1;

function requireCfb1() {
    if (hasRequiredCfb1) return cfb1;
    hasRequiredCfb1 = 1;
    var a = requireSafeBuffer$2().Buffer;

    function r(n, s, e) {
        for (var h, c = -1, l = 8, p = 0, f, m; ++c < l;) h = n._cipher.encryptBlock(n._prev), f = s & 1 << 7 - c ? 128 : 0, m = h[0] ^ f, p += (m & 128) >> c % 8, n._prev = i(n._prev, e ? f : m);
        return p
    }

    function i(n, s) {
        var e = n.length,
            h = -1,
            c = a.allocUnsafe(n.length);
        for (n = a.concat([n, a.from([s])]); ++h < e;) c[h] = n[h] << 1 | n[h + 1] >> 7;
        return c
    }
    return cfb1.encrypt = function(n, s, e) {
        for (var h = s.length, c = a.allocUnsafe(h), l = -1; ++l < h;) c[l] = r(n, s[l], e);
        return c
    }, cfb1
}
var ofb = {},
    hasRequiredOfb;

function requireOfb() {
    if (hasRequiredOfb) return ofb;
    hasRequiredOfb = 1;
    var a = requireBufferXor();

    function r(i) {
        return i._prev = i._cipher.encryptBlock(i._prev), i._prev
    }
    return ofb.encrypt = function(i, n) {
        for (; i._cache.length < n.length;) i._cache = Buffer.concat([i._cache, r(i)]);
        var s = i._cache.slice(0, n.length);
        return i._cache = i._cache.slice(n.length), a(n, s)
    }, ofb
}
var ctr = {},
    incr32_1, hasRequiredIncr32;

function requireIncr32() {
    if (hasRequiredIncr32) return incr32_1;
    hasRequiredIncr32 = 1;

    function a(r) {
        for (var i = r.length, n; i--;)
            if (n = r.readUInt8(i), n === 255) r.writeUInt8(0, i);
            else {
                n++, r.writeUInt8(n, i);
                break
            }
    }
    return incr32_1 = a, incr32_1
}
var hasRequiredCtr;

function requireCtr() {
    if (hasRequiredCtr) return ctr;
    hasRequiredCtr = 1;
    var a = requireBufferXor(),
        r = requireSafeBuffer$2().Buffer,
        i = requireIncr32();

    function n(e) {
        var h = e._cipher.encryptBlockRaw(e._prev);
        return i(e._prev), h
    }
    var s = 16;
    return ctr.encrypt = function(e, h) {
        var c = Math.ceil(h.length / s),
            l = e._cache.length;
        e._cache = r.concat([e._cache, r.allocUnsafe(c * s)]);
        for (var p = 0; p < c; p++) {
            var f = n(e),
                m = l + p * s;
            e._cache.writeUInt32BE(f[0], m + 0), e._cache.writeUInt32BE(f[1], m + 4), e._cache.writeUInt32BE(f[2], m + 8), e._cache.writeUInt32BE(f[3], m + 12)
        }
        var w = e._cache.slice(0, h.length);
        return e._cache = e._cache.slice(h.length), a(h, w)
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
    var a = {
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
    for (var i in r) r[i].module = a[r[i].mode];
    return modes_1 = r, modes_1
}
var aes = {},
    hasRequiredAes;

function requireAes() {
    if (hasRequiredAes) return aes;
    hasRequiredAes = 1;
    var a = requireSafeBuffer$2().Buffer;

    function r(c) {
        a.isBuffer(c) || (c = a.from(c));
        for (var l = c.length / 4 | 0, p = new Array(l), f = 0; f < l; f++) p[f] = c.readUInt32BE(f * 4);
        return p
    }

    function i(c) {
        for (var l = 0; l < c.length; c++) c[l] = 0
    }

    function n(c, l, p, f, m) {
        for (var w = p[0], x = p[1], B = p[2], E = p[3], C = c[0] ^ l[0], $ = c[1] ^ l[1], I = c[2] ^ l[2], D = c[3] ^ l[3], j, O, L, G, V = 4, K = 1; K < m; K++) j = w[C >>> 24] ^ x[$ >>> 16 & 255] ^ B[I >>> 8 & 255] ^ E[D & 255] ^ l[V++], O = w[$ >>> 24] ^ x[I >>> 16 & 255] ^ B[D >>> 8 & 255] ^ E[C & 255] ^ l[V++], L = w[I >>> 24] ^ x[D >>> 16 & 255] ^ B[C >>> 8 & 255] ^ E[$ & 255] ^ l[V++], G = w[D >>> 24] ^ x[C >>> 16 & 255] ^ B[$ >>> 8 & 255] ^ E[I & 255] ^ l[V++], C = j, $ = O, I = L, D = G;
        return j = (f[C >>> 24] << 24 | f[$ >>> 16 & 255] << 16 | f[I >>> 8 & 255] << 8 | f[D & 255]) ^ l[V++], O = (f[$ >>> 24] << 24 | f[I >>> 16 & 255] << 16 | f[D >>> 8 & 255] << 8 | f[C & 255]) ^ l[V++], L = (f[I >>> 24] << 24 | f[D >>> 16 & 255] << 16 | f[C >>> 8 & 255] << 8 | f[$ & 255]) ^ l[V++], G = (f[D >>> 24] << 24 | f[C >>> 16 & 255] << 16 | f[$ >>> 8 & 255] << 8 | f[I & 255]) ^ l[V++], j = j >>> 0, O = O >>> 0, L = L >>> 0, G = G >>> 0, [j, O, L, G]
    }
    var s = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
        e = (function() {
            for (var c = new Array(256), l = 0; l < 256; l++) l < 128 ? c[l] = l << 1 : c[l] = l << 1 ^ 283;
            for (var p = [], f = [], m = [
                    [],
                    [],
                    [],
                    []
                ], w = [
                    [],
                    [],
                    [],
                    []
                ], x = 0, B = 0, E = 0; E < 256; ++E) {
                var C = B ^ B << 1 ^ B << 2 ^ B << 3 ^ B << 4;
                C = C >>> 8 ^ C & 255 ^ 99, p[x] = C, f[C] = x;
                var $ = c[x],
                    I = c[$],
                    D = c[I],
                    j = c[C] * 257 ^ C * 16843008;
                m[0][x] = j << 24 | j >>> 8, m[1][x] = j << 16 | j >>> 16, m[2][x] = j << 8 | j >>> 24, m[3][x] = j, j = D * 16843009 ^ I * 65537 ^ $ * 257 ^ x * 16843008, w[0][C] = j << 24 | j >>> 8, w[1][C] = j << 16 | j >>> 16, w[2][C] = j << 8 | j >>> 24, w[3][C] = j, x === 0 ? x = B = 1 : (x = $ ^ c[c[c[D ^ $]]], B ^= c[c[B]])
            }
            return {
                SBOX: p,
                INV_SBOX: f,
                SUB_MIX: m,
                INV_SUB_MIX: w
            }
        })();

    function h(c) {
        this._key = r(c), this._reset()
    }
    return h.blockSize = 16, h.keySize = 256 / 8, h.prototype.blockSize = h.blockSize, h.prototype.keySize = h.keySize, h.prototype._reset = function() {
        for (var c = this._key, l = c.length, p = l + 6, f = (p + 1) * 4, m = [], w = 0; w < l; w++) m[w] = c[w];
        for (w = l; w < f; w++) {
            var x = m[w - 1];
            w % l === 0 ? (x = x << 8 | x >>> 24, x = e.SBOX[x >>> 24] << 24 | e.SBOX[x >>> 16 & 255] << 16 | e.SBOX[x >>> 8 & 255] << 8 | e.SBOX[x & 255], x ^= s[w / l | 0] << 24) : l > 6 && w % l === 4 && (x = e.SBOX[x >>> 24] << 24 | e.SBOX[x >>> 16 & 255] << 16 | e.SBOX[x >>> 8 & 255] << 8 | e.SBOX[x & 255]), m[w] = m[w - l] ^ x
        }
        for (var B = [], E = 0; E < f; E++) {
            var C = f - E,
                $ = m[C - (E % 4 ? 0 : 4)];
            E < 4 || C <= 4 ? B[E] = $ : B[E] = e.INV_SUB_MIX[0][e.SBOX[$ >>> 24]] ^ e.INV_SUB_MIX[1][e.SBOX[$ >>> 16 & 255]] ^ e.INV_SUB_MIX[2][e.SBOX[$ >>> 8 & 255]] ^ e.INV_SUB_MIX[3][e.SBOX[$ & 255]]
        }
        this._nRounds = p, this._keySchedule = m, this._invKeySchedule = B
    }, h.prototype.encryptBlockRaw = function(c) {
        return c = r(c), n(c, this._keySchedule, e.SUB_MIX, e.SBOX, this._nRounds)
    }, h.prototype.encryptBlock = function(c) {
        var l = this.encryptBlockRaw(c),
            p = a.allocUnsafe(16);
        return p.writeUInt32BE(l[0], 0), p.writeUInt32BE(l[1], 4), p.writeUInt32BE(l[2], 8), p.writeUInt32BE(l[3], 12), p
    }, h.prototype.decryptBlock = function(c) {
        c = r(c);
        var l = c[1];
        c[1] = c[3], c[3] = l;
        var p = n(c, this._invKeySchedule, e.INV_SUB_MIX, e.INV_SBOX, this._nRounds),
            f = a.allocUnsafe(16);
        return f.writeUInt32BE(p[0], 0), f.writeUInt32BE(p[3], 4), f.writeUInt32BE(p[2], 8), f.writeUInt32BE(p[1], 12), f
    }, h.prototype.scrub = function() {
        i(this._keySchedule), i(this._invKeySchedule), i(this._key)
    }, aes.AES = h, aes
}
var ghash, hasRequiredGhash;

function requireGhash() {
    if (hasRequiredGhash) return ghash;
    hasRequiredGhash = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = a.alloc(16, 0);

    function i(e) {
        return [e.readUInt32BE(0), e.readUInt32BE(4), e.readUInt32BE(8), e.readUInt32BE(12)]
    }

    function n(e) {
        var h = a.allocUnsafe(16);
        return h.writeUInt32BE(e[0] >>> 0, 0), h.writeUInt32BE(e[1] >>> 0, 4), h.writeUInt32BE(e[2] >>> 0, 8), h.writeUInt32BE(e[3] >>> 0, 12), h
    }

    function s(e) {
        this.h = e, this.state = a.alloc(16, 0), this.cache = a.allocUnsafe(0)
    }
    return s.prototype.ghash = function(e) {
        for (var h = -1; ++h < e.length;) this.state[h] ^= e[h];
        this._multiply()
    }, s.prototype._multiply = function() {
        for (var e = i(this.h), h = [0, 0, 0, 0], c, l, p, f = -1; ++f < 128;) {
            for (l = (this.state[~~(f / 8)] & 1 << 7 - f % 8) !== 0, l && (h[0] ^= e[0], h[1] ^= e[1], h[2] ^= e[2], h[3] ^= e[3]), p = (e[3] & 1) !== 0, c = 3; c > 0; c--) e[c] = e[c] >>> 1 | (e[c - 1] & 1) << 31;
            e[0] = e[0] >>> 1, p && (e[0] = e[0] ^ 225 << 24)
        }
        this.state = n(h)
    }, s.prototype.update = function(e) {
        this.cache = a.concat([this.cache, e]);
        for (var h; this.cache.length >= 16;) h = this.cache.slice(0, 16), this.cache = this.cache.slice(16), this.ghash(h)
    }, s.prototype.final = function(e, h) {
        return this.cache.length && this.ghash(a.concat([this.cache, r], 16)), this.ghash(n([0, e, 0, h])), this.state
    }, ghash = s, ghash
}
var authCipher, hasRequiredAuthCipher;

function requireAuthCipher() {
    if (hasRequiredAuthCipher) return authCipher;
    hasRequiredAuthCipher = 1;
    var a = requireAes(),
        r = requireSafeBuffer$2().Buffer,
        i = requireCipherBase(),
        n = requireInherits_browser(),
        s = requireGhash(),
        e = requireBufferXor(),
        h = requireIncr32();

    function c(f, m) {
        var w = 0;
        f.length !== m.length && w++;
        for (var x = Math.min(f.length, m.length), B = 0; B < x; ++B) w += f[B] ^ m[B];
        return w
    }

    function l(f, m, w) {
        if (m.length === 12) return f._finID = r.concat([m, r.from([0, 0, 0, 1])]), r.concat([m, r.from([0, 0, 0, 2])]);
        var x = new s(w),
            B = m.length,
            E = B % 16;
        x.update(m), E && (E = 16 - E, x.update(r.alloc(E, 0))), x.update(r.alloc(8, 0));
        var C = B * 8,
            $ = r.alloc(8);
        $.writeUIntBE(C, 0, 8), x.update($), f._finID = x.state;
        var I = r.from(f._finID);
        return h(I), I
    }

    function p(f, m, w, x) {
        i.call(this);
        var B = r.alloc(4, 0);
        this._cipher = new a.AES(m);
        var E = this._cipher.encryptBlock(B);
        this._ghash = new s(E), w = l(this, w, E), this._prev = r.from(w), this._cache = r.allocUnsafe(0), this._secCache = r.allocUnsafe(0), this._decrypt = x, this._alen = 0, this._len = 0, this._mode = f, this._authTag = null, this._called = !1
    }
    return n(p, i), p.prototype._update = function(f) {
        if (!this._called && this._alen) {
            var m = 16 - this._alen % 16;
            m < 16 && (m = r.alloc(m, 0), this._ghash.update(m))
        }
        this._called = !0;
        var w = this._mode.encrypt(this, f);
        return this._decrypt ? this._ghash.update(f) : this._ghash.update(w), this._len += f.length, w
    }, p.prototype._final = function() {
        if (this._decrypt && !this._authTag) throw new Error("Unsupported state or unable to authenticate data");
        var f = e(this._ghash.final(this._alen * 8, this._len * 8), this._cipher.encryptBlock(this._finID));
        if (this._decrypt && c(f, this._authTag)) throw new Error("Unsupported state or unable to authenticate data");
        this._authTag = f, this._cipher.scrub()
    }, p.prototype.getAuthTag = function() {
        if (this._decrypt || !r.isBuffer(this._authTag)) throw new Error("Attempting to get auth tag in unsupported state");
        return this._authTag
    }, p.prototype.setAuthTag = function(m) {
        if (!this._decrypt) throw new Error("Attempting to set auth tag in unsupported state");
        this._authTag = m
    }, p.prototype.setAAD = function(m) {
        if (this._called) throw new Error("Attempting to set AAD in unsupported state");
        this._ghash.update(m), this._alen += m.length
    }, authCipher = p, authCipher
}
var streamCipher, hasRequiredStreamCipher;

function requireStreamCipher() {
    if (hasRequiredStreamCipher) return streamCipher;
    hasRequiredStreamCipher = 1;
    var a = requireAes(),
        r = requireSafeBuffer$2().Buffer,
        i = requireCipherBase(),
        n = requireInherits_browser();

    function s(e, h, c, l) {
        i.call(this), this._cipher = new a.AES(h), this._prev = r.from(c), this._cache = r.allocUnsafe(0), this._secCache = r.allocUnsafe(0), this._decrypt = l, this._mode = e
    }
    return n(s, i), s.prototype._update = function(e) {
        return this._mode.encrypt(this, e, this._decrypt)
    }, s.prototype._final = function() {
        this._cipher.scrub()
    }, streamCipher = s, streamCipher
}
var evp_bytestokey, hasRequiredEvp_bytestokey;

function requireEvp_bytestokey() {
    if (hasRequiredEvp_bytestokey) return evp_bytestokey;
    hasRequiredEvp_bytestokey = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireMd5_js();

    function i(n, s, e, h) {
        if (a.isBuffer(n) || (n = a.from(n, "binary")), s && (a.isBuffer(s) || (s = a.from(s, "binary")), s.length !== 8)) throw new RangeError("salt should be Buffer with 8 byte length");
        for (var c = e / 8, l = a.alloc(c), p = a.alloc(h || 0), f = a.alloc(0); c > 0 || h > 0;) {
            var m = new r;
            m.update(f), m.update(n), s && m.update(s), f = m.digest();
            var w = 0;
            if (c > 0) {
                var x = l.length - c;
                w = Math.min(c, f.length), f.copy(l, x, 0, w), c -= w
            }
            if (w < f.length && h > 0) {
                var B = p.length - h,
                    E = Math.min(h, f.length - w);
                f.copy(p, B, w, w + E), h -= E
            }
        }
        return f.fill(0), {
            key: l,
            iv: p
        }
    }
    return evp_bytestokey = i, evp_bytestokey
}
var hasRequiredEncrypter;

function requireEncrypter() {
    if (hasRequiredEncrypter) return encrypter;
    hasRequiredEncrypter = 1;
    var a = requireModes$1(),
        r = requireAuthCipher(),
        i = requireSafeBuffer$2().Buffer,
        n = requireStreamCipher(),
        s = requireCipherBase(),
        e = requireAes(),
        h = requireEvp_bytestokey(),
        c = requireInherits_browser();

    function l(x, B, E) {
        s.call(this), this._cache = new f, this._cipher = new e.AES(B), this._prev = i.from(E), this._mode = x, this._autopadding = !0
    }
    c(l, s), l.prototype._update = function(x) {
        this._cache.add(x);
        for (var B, E, C = []; B = this._cache.get();) E = this._mode.encrypt(this, B), C.push(E);
        return i.concat(C)
    };
    var p = i.alloc(16, 16);
    l.prototype._final = function() {
        var x = this._cache.flush();
        if (this._autopadding) return x = this._mode.encrypt(this, x), this._cipher.scrub(), x;
        if (!x.equals(p)) throw this._cipher.scrub(), new Error("data not multiple of block length")
    }, l.prototype.setAutoPadding = function(x) {
        return this._autopadding = !!x, this
    };

    function f() {
        this.cache = i.allocUnsafe(0)
    }
    f.prototype.add = function(x) {
        this.cache = i.concat([this.cache, x])
    }, f.prototype.get = function() {
        if (this.cache.length > 15) {
            var x = this.cache.slice(0, 16);
            return this.cache = this.cache.slice(16), x
        }
        return null
    }, f.prototype.flush = function() {
        for (var x = 16 - this.cache.length, B = i.allocUnsafe(x), E = -1; ++E < x;) B.writeUInt8(x, E);
        return i.concat([this.cache, B])
    };

    function m(x, B, E) {
        var C = a[x.toLowerCase()];
        if (!C) throw new TypeError("invalid suite type");
        if (typeof B == "string" && (B = i.from(B)), B.length !== C.key / 8) throw new TypeError("invalid key length " + B.length);
        if (typeof E == "string" && (E = i.from(E)), C.mode !== "GCM" && E.length !== C.iv) throw new TypeError("invalid iv length " + E.length);
        return C.type === "stream" ? new n(C.module, B, E) : C.type === "auth" ? new r(C.module, B, E) : new l(C.module, B, E)
    }

    function w(x, B) {
        var E = a[x.toLowerCase()];
        if (!E) throw new TypeError("invalid suite type");
        var C = h(B, !1, E.key, E.iv);
        return m(x, C.key, C.iv)
    }
    return encrypter.createCipheriv = m, encrypter.createCipher = w, encrypter
}
var decrypter = {},
    hasRequiredDecrypter;

function requireDecrypter() {
    if (hasRequiredDecrypter) return decrypter;
    hasRequiredDecrypter = 1;
    var a = requireAuthCipher(),
        r = requireSafeBuffer$2().Buffer,
        i = requireModes$1(),
        n = requireStreamCipher(),
        s = requireCipherBase(),
        e = requireAes(),
        h = requireEvp_bytestokey(),
        c = requireInherits_browser();

    function l(x, B, E) {
        s.call(this), this._cache = new p, this._last = void 0, this._cipher = new e.AES(B), this._prev = r.from(E), this._mode = x, this._autopadding = !0
    }
    c(l, s), l.prototype._update = function(x) {
        this._cache.add(x);
        for (var B, E, C = []; B = this._cache.get(this._autopadding);) E = this._mode.decrypt(this, B), C.push(E);
        return r.concat(C)
    }, l.prototype._final = function() {
        var x = this._cache.flush();
        if (this._autopadding) return f(this._mode.decrypt(this, x));
        if (x) throw new Error("data not multiple of block length")
    }, l.prototype.setAutoPadding = function(x) {
        return this._autopadding = !!x, this
    };

    function p() {
        this.cache = r.allocUnsafe(0)
    }
    p.prototype.add = function(x) {
        this.cache = r.concat([this.cache, x])
    }, p.prototype.get = function(x) {
        var B;
        if (x) {
            if (this.cache.length > 16) return B = this.cache.slice(0, 16), this.cache = this.cache.slice(16), B
        } else if (this.cache.length >= 16) return B = this.cache.slice(0, 16), this.cache = this.cache.slice(16), B;
        return null
    }, p.prototype.flush = function() {
        if (this.cache.length) return this.cache
    };

    function f(x) {
        var B = x[15];
        if (B < 1 || B > 16) throw new Error("unable to decrypt data");
        for (var E = -1; ++E < B;)
            if (x[E + (16 - B)] !== B) throw new Error("unable to decrypt data");
        if (B !== 16) return x.slice(0, 16 - B)
    }

    function m(x, B, E) {
        var C = i[x.toLowerCase()];
        if (!C) throw new TypeError("invalid suite type");
        if (typeof E == "string" && (E = r.from(E)), C.mode !== "GCM" && E.length !== C.iv) throw new TypeError("invalid iv length " + E.length);
        if (typeof B == "string" && (B = r.from(B)), B.length !== C.key / 8) throw new TypeError("invalid key length " + B.length);
        return C.type === "stream" ? new n(C.module, B, E, !0) : C.type === "auth" ? new a(C.module, B, E, !0) : new l(C.module, B, E)
    }

    function w(x, B) {
        var E = i[x.toLowerCase()];
        if (!E) throw new TypeError("invalid suite type");
        var C = h(B, !1, E.key, E.iv);
        return m(x, C.key, C.iv)
    }
    return decrypter.createDecipher = w, decrypter.createDecipheriv = m, decrypter
}
var hasRequiredBrowser$7;

function requireBrowser$7() {
    if (hasRequiredBrowser$7) return browser$6;
    hasRequiredBrowser$7 = 1;
    var a = requireEncrypter(),
        r = requireDecrypter(),
        i = require$$2;

    function n() {
        return Object.keys(i)
    }
    return browser$6.createCipher = browser$6.Cipher = a.createCipher, browser$6.createCipheriv = browser$6.Cipheriv = a.createCipheriv, browser$6.createDecipher = browser$6.Decipher = r.createDecipher, browser$6.createDecipheriv = browser$6.Decipheriv = r.createDecipheriv, browser$6.listCiphers = browser$6.getCiphers = n, browser$6
}
var modes = {},
    hasRequiredModes;

function requireModes() {
    return hasRequiredModes || (hasRequiredModes = 1, (function(a) {
        a["des-ecb"] = {
            key: 8,
            iv: 0
        }, a["des-cbc"] = a.des = {
            key: 8,
            iv: 8
        }, a["des-ede3-cbc"] = a.des3 = {
            key: 24,
            iv: 8
        }, a["des-ede3"] = {
            key: 24,
            iv: 0
        }, a["des-ede-cbc"] = {
            key: 16,
            iv: 8
        }, a["des-ede"] = {
            key: 16,
            iv: 0
        }
    })(modes)), modes
}
var hasRequiredBrowser$6;

function requireBrowser$6() {
    if (hasRequiredBrowser$6) return browser$7;
    hasRequiredBrowser$6 = 1;
    var a = requireBrowserifyDes(),
        r = requireBrowser$7(),
        i = requireModes$1(),
        n = requireModes(),
        s = requireEvp_bytestokey();

    function e(f, m) {
        f = f.toLowerCase();
        var w, x;
        if (i[f]) w = i[f].key, x = i[f].iv;
        else if (n[f]) w = n[f].key * 8, x = n[f].iv;
        else throw new TypeError("invalid suite type");
        var B = s(m, !1, w, x);
        return c(f, B.key, B.iv)
    }

    function h(f, m) {
        f = f.toLowerCase();
        var w, x;
        if (i[f]) w = i[f].key, x = i[f].iv;
        else if (n[f]) w = n[f].key * 8, x = n[f].iv;
        else throw new TypeError("invalid suite type");
        var B = s(m, !1, w, x);
        return l(f, B.key, B.iv)
    }

    function c(f, m, w) {
        if (f = f.toLowerCase(), i[f]) return r.createCipheriv(f, m, w);
        if (n[f]) return new a({
            key: m,
            iv: w,
            mode: f
        });
        throw new TypeError("invalid suite type")
    }

    function l(f, m, w) {
        if (f = f.toLowerCase(), i[f]) return r.createDecipheriv(f, m, w);
        if (n[f]) return new a({
            key: m,
            iv: w,
            mode: f,
            decrypt: !0
        });
        throw new TypeError("invalid suite type")
    }

    function p() {
        return Object.keys(n).concat(r.getCiphers())
    }
    return browser$7.createCipher = browser$7.Cipher = e, browser$7.createCipheriv = browser$7.Cipheriv = c, browser$7.createDecipher = browser$7.Decipher = h, browser$7.createDecipheriv = browser$7.Decipheriv = l, browser$7.listCiphers = browser$7.getCiphers = p, browser$7
}
var browser$5 = {},
    bn$5 = {
        exports: {}
    },
    bn$4 = bn$5.exports,
    hasRequiredBn$2;

function requireBn$2() {
    return hasRequiredBn$2 || (hasRequiredBn$2 = 1, (function(a) {
        (function(r, i) {
            function n(P, q) {
                if (!P) throw new Error(q || "Assertion failed")
            }

            function s(P, q) {
                P.super_ = q;
                var b = function() {};
                b.prototype = q.prototype, P.prototype = new b, P.prototype.constructor = P
            }

            function e(P, q, b) {
                if (e.isBN(P)) return P;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, P !== null && ((q === "le" || q === "be") && (b = q, q = 10), this._init(P || 0, q || 10, b || "be"))
            }
            typeof r == "object" ? r.exports = e : i.BN = e, e.BN = e, e.wordSize = 26;
            var h;
            try {
                typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = requireDist$1().Buffer
            } catch {}
            e.isBN = function(q) {
                return q instanceof e ? !0 : q !== null && typeof q == "object" && q.constructor.wordSize === e.wordSize && Array.isArray(q.words)
            }, e.max = function(q, b) {
                return q.cmp(b) > 0 ? q : b
            }, e.min = function(q, b) {
                return q.cmp(b) < 0 ? q : b
            }, e.prototype._init = function(q, b, t) {
                if (typeof q == "number") return this._initNumber(q, b, t);
                if (typeof q == "object") return this._initArray(q, b, t);
                b === "hex" && (b = 16), n(b === (b | 0) && b >= 2 && b <= 36), q = q.toString().replace(/\s+/g, "");
                var u = 0;
                q[0] === "-" && (u++, this.negative = 1), u < q.length && (b === 16 ? this._parseHex(q, u, t) : (this._parseBase(q, b, u), t === "le" && this._initArray(this.toArray(), b, t)))
            }, e.prototype._initNumber = function(q, b, t) {
                q < 0 && (this.negative = 1, q = -q), q < 67108864 ? (this.words = [q & 67108863], this.length = 1) : q < 4503599627370496 ? (this.words = [q & 67108863, q / 67108864 & 67108863], this.length = 2) : (n(q < 9007199254740992), this.words = [q & 67108863, q / 67108864 & 67108863, 1], this.length = 3), t === "le" && this._initArray(this.toArray(), b, t)
            }, e.prototype._initArray = function(q, b, t) {
                if (n(typeof q.length == "number"), q.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(q.length / 3), this.words = new Array(this.length);
                for (var u = 0; u < this.length; u++) this.words[u] = 0;
                var y, v, g = 0;
                if (t === "be")
                    for (u = q.length - 1, y = 0; u >= 0; u -= 3) v = q[u] | q[u - 1] << 8 | q[u - 2] << 16, this.words[y] |= v << g & 67108863, this.words[y + 1] = v >>> 26 - g & 67108863, g += 24, g >= 26 && (g -= 26, y++);
                else if (t === "le")
                    for (u = 0, y = 0; u < q.length; u += 3) v = q[u] | q[u + 1] << 8 | q[u + 2] << 16, this.words[y] |= v << g & 67108863, this.words[y + 1] = v >>> 26 - g & 67108863, g += 24, g >= 26 && (g -= 26, y++);
                return this.strip()
            };

            function c(P, q) {
                var b = P.charCodeAt(q);
                return b >= 65 && b <= 70 ? b - 55 : b >= 97 && b <= 102 ? b - 87 : b - 48 & 15
            }

            function l(P, q, b) {
                var t = c(P, b);
                return b - 1 >= q && (t |= c(P, b - 1) << 4), t
            }
            e.prototype._parseHex = function(q, b, t) {
                this.length = Math.ceil((q.length - b) / 6), this.words = new Array(this.length);
                for (var u = 0; u < this.length; u++) this.words[u] = 0;
                var y = 0,
                    v = 0,
                    g;
                if (t === "be")
                    for (u = q.length - 1; u >= b; u -= 2) g = l(q, b, u) << y, this.words[v] |= g & 67108863, y >= 18 ? (y -= 18, v += 1, this.words[v] |= g >>> 26) : y += 8;
                else {
                    var S = q.length - b;
                    for (u = S % 2 === 0 ? b + 1 : b; u < q.length; u += 2) g = l(q, b, u) << y, this.words[v] |= g & 67108863, y >= 18 ? (y -= 18, v += 1, this.words[v] |= g >>> 26) : y += 8
                }
                this.strip()
            };

            function p(P, q, b, t) {
                for (var u = 0, y = Math.min(P.length, b), v = q; v < y; v++) {
                    var g = P.charCodeAt(v) - 48;
                    u *= t, g >= 49 ? u += g - 49 + 10 : g >= 17 ? u += g - 17 + 10 : u += g
                }
                return u
            }
            e.prototype._parseBase = function(q, b, t) {
                this.words = [0], this.length = 1;
                for (var u = 0, y = 1; y <= 67108863; y *= b) u++;
                u--, y = y / b | 0;
                for (var v = q.length - t, g = v % u, S = Math.min(v, v - g) + t, _ = 0, M = t; M < S; M += u) _ = p(q, M, M + u, b), this.imuln(y), this.words[0] + _ < 67108864 ? this.words[0] += _ : this._iaddn(_);
                if (g !== 0) {
                    var d = 1;
                    for (_ = p(q, M, q.length, b), M = 0; M < g; M++) d *= b;
                    this.imuln(d), this.words[0] + _ < 67108864 ? this.words[0] += _ : this._iaddn(_)
                }
                this.strip()
            }, e.prototype.copy = function(q) {
                q.words = new Array(this.length);
                for (var b = 0; b < this.length; b++) q.words[b] = this.words[b];
                q.length = this.length, q.negative = this.negative, q.red = this.red
            }, e.prototype.clone = function() {
                var q = new e(null);
                return this.copy(q), q
            }, e.prototype._expand = function(q) {
                for (; this.length < q;) this.words[this.length++] = 0;
                return this
            }, e.prototype.strip = function() {
                for (; this.length > 1 && this.words[this.length - 1] === 0;) this.length--;
                return this._normSign()
            }, e.prototype._normSign = function() {
                return this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
            }, e.prototype.inspect = function() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            };
            var f = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                m = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                w = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            e.prototype.toString = function(q, b) {
                q = q || 10, b = b | 0 || 1;
                var t;
                if (q === 16 || q === "hex") {
                    t = "";
                    for (var u = 0, y = 0, v = 0; v < this.length; v++) {
                        var g = this.words[v],
                            S = ((g << u | y) & 16777215).toString(16);
                        y = g >>> 24 - u & 16777215, u += 2, u >= 26 && (u -= 26, v--), y !== 0 || v !== this.length - 1 ? t = f[6 - S.length] + S + t : t = S + t
                    }
                    for (y !== 0 && (t = y.toString(16) + t); t.length % b !== 0;) t = "0" + t;
                    return this.negative !== 0 && (t = "-" + t), t
                }
                if (q === (q | 0) && q >= 2 && q <= 36) {
                    var _ = m[q],
                        M = w[q];
                    t = "";
                    var d = this.clone();
                    for (d.negative = 0; !d.isZero();) {
                        var A = d.modn(M).toString(q);
                        d = d.idivn(M), d.isZero() ? t = A + t : t = f[_ - A.length] + A + t
                    }
                    for (this.isZero() && (t = "0" + t); t.length % b !== 0;) t = "0" + t;
                    return this.negative !== 0 && (t = "-" + t), t
                }
                n(!1, "Base should be between 2 and 36")
            }, e.prototype.toNumber = function() {
                var q = this.words[0];
                return this.length === 2 ? q += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? q += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -q : q
            }, e.prototype.toJSON = function() {
                return this.toString(16)
            }, e.prototype.toBuffer = function(q, b) {
                return n(typeof h < "u"), this.toArrayLike(h, q, b)
            }, e.prototype.toArray = function(q, b) {
                return this.toArrayLike(Array, q, b)
            }, e.prototype.toArrayLike = function(q, b, t) {
                var u = this.byteLength(),
                    y = t || Math.max(1, u);
                n(u <= y, "byte array longer than desired length"), n(y > 0, "Requested array length <= 0"), this.strip();
                var v = b === "le",
                    g = new q(y),
                    S, _, M = this.clone();
                if (v) {
                    for (_ = 0; !M.isZero(); _++) S = M.andln(255), M.iushrn(8), g[_] = S;
                    for (; _ < y; _++) g[_] = 0
                } else {
                    for (_ = 0; _ < y - u; _++) g[_] = 0;
                    for (_ = 0; !M.isZero(); _++) S = M.andln(255), M.iushrn(8), g[y - _ - 1] = S
                }
                return g
            }, Math.clz32 ? e.prototype._countBits = function(q) {
                return 32 - Math.clz32(q)
            } : e.prototype._countBits = function(q) {
                var b = q,
                    t = 0;
                return b >= 4096 && (t += 13, b >>>= 13), b >= 64 && (t += 7, b >>>= 7), b >= 8 && (t += 4, b >>>= 4), b >= 2 && (t += 2, b >>>= 2), t + b
            }, e.prototype._zeroBits = function(q) {
                if (q === 0) return 26;
                var b = q,
                    t = 0;
                return (b & 8191) === 0 && (t += 13, b >>>= 13), (b & 127) === 0 && (t += 7, b >>>= 7), (b & 15) === 0 && (t += 4, b >>>= 4), (b & 3) === 0 && (t += 2, b >>>= 2), (b & 1) === 0 && t++, t
            }, e.prototype.bitLength = function() {
                var q = this.words[this.length - 1],
                    b = this._countBits(q);
                return (this.length - 1) * 26 + b
            };

            function x(P) {
                for (var q = new Array(P.bitLength()), b = 0; b < q.length; b++) {
                    var t = b / 26 | 0,
                        u = b % 26;
                    q[b] = (P.words[t] & 1 << u) >>> u
                }
                return q
            }
            e.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var q = 0, b = 0; b < this.length; b++) {
                    var t = this._zeroBits(this.words[b]);
                    if (q += t, t !== 26) break
                }
                return q
            }, e.prototype.byteLength = function() {
                return Math.ceil(this.bitLength() / 8)
            }, e.prototype.toTwos = function(q) {
                return this.negative !== 0 ? this.abs().inotn(q).iaddn(1) : this.clone()
            }, e.prototype.fromTwos = function(q) {
                return this.testn(q - 1) ? this.notn(q).iaddn(1).ineg() : this.clone()
            }, e.prototype.isNeg = function() {
                return this.negative !== 0
            }, e.prototype.neg = function() {
                return this.clone().ineg()
            }, e.prototype.ineg = function() {
                return this.isZero() || (this.negative ^= 1), this
            }, e.prototype.iuor = function(q) {
                for (; this.length < q.length;) this.words[this.length++] = 0;
                for (var b = 0; b < q.length; b++) this.words[b] = this.words[b] | q.words[b];
                return this.strip()
            }, e.prototype.ior = function(q) {
                return n((this.negative | q.negative) === 0), this.iuor(q)
            }, e.prototype.or = function(q) {
                return this.length > q.length ? this.clone().ior(q) : q.clone().ior(this)
            }, e.prototype.uor = function(q) {
                return this.length > q.length ? this.clone().iuor(q) : q.clone().iuor(this)
            }, e.prototype.iuand = function(q) {
                var b;
                this.length > q.length ? b = q : b = this;
                for (var t = 0; t < b.length; t++) this.words[t] = this.words[t] & q.words[t];
                return this.length = b.length, this.strip()
            }, e.prototype.iand = function(q) {
                return n((this.negative | q.negative) === 0), this.iuand(q)
            }, e.prototype.and = function(q) {
                return this.length > q.length ? this.clone().iand(q) : q.clone().iand(this)
            }, e.prototype.uand = function(q) {
                return this.length > q.length ? this.clone().iuand(q) : q.clone().iuand(this)
            }, e.prototype.iuxor = function(q) {
                var b, t;
                this.length > q.length ? (b = this, t = q) : (b = q, t = this);
                for (var u = 0; u < t.length; u++) this.words[u] = b.words[u] ^ t.words[u];
                if (this !== b)
                    for (; u < b.length; u++) this.words[u] = b.words[u];
                return this.length = b.length, this.strip()
            }, e.prototype.ixor = function(q) {
                return n((this.negative | q.negative) === 0), this.iuxor(q)
            }, e.prototype.xor = function(q) {
                return this.length > q.length ? this.clone().ixor(q) : q.clone().ixor(this)
            }, e.prototype.uxor = function(q) {
                return this.length > q.length ? this.clone().iuxor(q) : q.clone().iuxor(this)
            }, e.prototype.inotn = function(q) {
                n(typeof q == "number" && q >= 0);
                var b = Math.ceil(q / 26) | 0,
                    t = q % 26;
                this._expand(b), t > 0 && b--;
                for (var u = 0; u < b; u++) this.words[u] = ~this.words[u] & 67108863;
                return t > 0 && (this.words[u] = ~this.words[u] & 67108863 >> 26 - t), this.strip()
            }, e.prototype.notn = function(q) {
                return this.clone().inotn(q)
            }, e.prototype.setn = function(q, b) {
                n(typeof q == "number" && q >= 0);
                var t = q / 26 | 0,
                    u = q % 26;
                return this._expand(t + 1), b ? this.words[t] = this.words[t] | 1 << u : this.words[t] = this.words[t] & ~(1 << u), this.strip()
            }, e.prototype.iadd = function(q) {
                var b;
                if (this.negative !== 0 && q.negative === 0) return this.negative = 0, b = this.isub(q), this.negative ^= 1, this._normSign();
                if (this.negative === 0 && q.negative !== 0) return q.negative = 0, b = this.isub(q), q.negative = 1, b._normSign();
                var t, u;
                this.length > q.length ? (t = this, u = q) : (t = q, u = this);
                for (var y = 0, v = 0; v < u.length; v++) b = (t.words[v] | 0) + (u.words[v] | 0) + y, this.words[v] = b & 67108863, y = b >>> 26;
                for (; y !== 0 && v < t.length; v++) b = (t.words[v] | 0) + y, this.words[v] = b & 67108863, y = b >>> 26;
                if (this.length = t.length, y !== 0) this.words[this.length] = y, this.length++;
                else if (t !== this)
                    for (; v < t.length; v++) this.words[v] = t.words[v];
                return this
            }, e.prototype.add = function(q) {
                var b;
                return q.negative !== 0 && this.negative === 0 ? (q.negative = 0, b = this.sub(q), q.negative ^= 1, b) : q.negative === 0 && this.negative !== 0 ? (this.negative = 0, b = q.sub(this), this.negative = 1, b) : this.length > q.length ? this.clone().iadd(q) : q.clone().iadd(this)
            }, e.prototype.isub = function(q) {
                if (q.negative !== 0) {
                    q.negative = 0;
                    var b = this.iadd(q);
                    return q.negative = 1, b._normSign()
                } else if (this.negative !== 0) return this.negative = 0, this.iadd(q), this.negative = 1, this._normSign();
                var t = this.cmp(q);
                if (t === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                var u, y;
                t > 0 ? (u = this, y = q) : (u = q, y = this);
                for (var v = 0, g = 0; g < y.length; g++) b = (u.words[g] | 0) - (y.words[g] | 0) + v, v = b >> 26, this.words[g] = b & 67108863;
                for (; v !== 0 && g < u.length; g++) b = (u.words[g] | 0) + v, v = b >> 26, this.words[g] = b & 67108863;
                if (v === 0 && g < u.length && u !== this)
                    for (; g < u.length; g++) this.words[g] = u.words[g];
                return this.length = Math.max(this.length, g), u !== this && (this.negative = 1), this.strip()
            }, e.prototype.sub = function(q) {
                return this.clone().isub(q)
            };

            function B(P, q, b) {
                b.negative = q.negative ^ P.negative;
                var t = P.length + q.length | 0;
                b.length = t, t = t - 1 | 0;
                var u = P.words[0] | 0,
                    y = q.words[0] | 0,
                    v = u * y,
                    g = v & 67108863,
                    S = v / 67108864 | 0;
                b.words[0] = g;
                for (var _ = 1; _ < t; _++) {
                    for (var M = S >>> 26, d = S & 67108863, A = Math.min(_, q.length - 1), z = Math.max(0, _ - P.length + 1); z <= A; z++) {
                        var U = _ - z | 0;
                        u = P.words[U] | 0, y = q.words[z] | 0, v = u * y + d, M += v / 67108864 | 0, d = v & 67108863
                    }
                    b.words[_] = d | 0, S = M | 0
                }
                return S !== 0 ? b.words[_] = S | 0 : b.length--, b.strip()
            }
            var E = function(q, b, t) {
                var u = q.words,
                    y = b.words,
                    v = t.words,
                    g = 0,
                    S, _, M, d = u[0] | 0,
                    A = d & 8191,
                    z = d >>> 13,
                    U = u[1] | 0,
                    X = U & 8191,
                    R = U >>> 13,
                    k = u[2] | 0,
                    N = k & 8191,
                    W = k >>> 13,
                    J = u[3] | 0,
                    H = J & 8191,
                    Y = J >>> 13,
                    ne = u[4] | 0,
                    re = ne & 8191,
                    Pe = ne >>> 13,
                    ye = u[5] | 0,
                    te = ye & 8191,
                    je = ye >>> 13,
                    me = u[6] | 0,
                    Z = me & 8191,
                    _e = me >>> 13,
                    ae = u[7] | 0,
                    ee = ae & 8191,
                    De = ae >>> 13,
                    ge = u[8] | 0,
                    ie = ge & 8191,
                    Ne = ge >>> 13,
                    Me = u[9] | 0,
                    fe = Me & 8191,
                    Te = Me >>> 13,
                    Se = y[0] | 0,
                    se = Se & 8191,
                    Oe = Se >>> 13,
                    qe = y[1] | 0,
                    oe = qe & 8191,
                    Le = qe >>> 13,
                    Be = y[2] | 0,
                    ue = Be & 8191,
                    We = Be >>> 13,
                    Ee = y[3] | 0,
                    he = Ee & 8191,
                    ze = Ee >>> 13,
                    Ae = y[4] | 0,
                    ce = Ae & 8191,
                    Ue = Ae >>> 13,
                    Re = y[5] | 0,
                    de = Re & 8191,
                    He = Re >>> 13,
                    ke = y[6] | 0,
                    le = ke & 8191,
                    Ke = ke >>> 13,
                    Ce = y[7] | 0,
                    pe = Ce & 8191,
                    Fe = Ce >>> 13,
                    Ie = y[8] | 0,
                    ve = Ie & 8191,
                    Xe = Ie >>> 13,
                    $e = y[9] | 0,
                    be = $e & 8191,
                    Ge = $e >>> 13;
                t.negative = q.negative ^ b.negative, t.length = 19, S = Math.imul(A, se), _ = Math.imul(A, Oe), _ = _ + Math.imul(z, se) | 0, M = Math.imul(z, Oe);
                var we = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (we >>> 26) | 0, we &= 67108863, S = Math.imul(X, se), _ = Math.imul(X, Oe), _ = _ + Math.imul(R, se) | 0, M = Math.imul(R, Oe), S = S + Math.imul(A, oe) | 0, _ = _ + Math.imul(A, Le) | 0, _ = _ + Math.imul(z, oe) | 0, M = M + Math.imul(z, Le) | 0;
                var xe = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (xe >>> 26) | 0, xe &= 67108863, S = Math.imul(N, se), _ = Math.imul(N, Oe), _ = _ + Math.imul(W, se) | 0, M = Math.imul(W, Oe), S = S + Math.imul(X, oe) | 0, _ = _ + Math.imul(X, Le) | 0, _ = _ + Math.imul(R, oe) | 0, M = M + Math.imul(R, Le) | 0, S = S + Math.imul(A, ue) | 0, _ = _ + Math.imul(A, We) | 0, _ = _ + Math.imul(z, ue) | 0, M = M + Math.imul(z, We) | 0;
                var Ve = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, S = Math.imul(H, se), _ = Math.imul(H, Oe), _ = _ + Math.imul(Y, se) | 0, M = Math.imul(Y, Oe), S = S + Math.imul(N, oe) | 0, _ = _ + Math.imul(N, Le) | 0, _ = _ + Math.imul(W, oe) | 0, M = M + Math.imul(W, Le) | 0, S = S + Math.imul(X, ue) | 0, _ = _ + Math.imul(X, We) | 0, _ = _ + Math.imul(R, ue) | 0, M = M + Math.imul(R, We) | 0, S = S + Math.imul(A, he) | 0, _ = _ + Math.imul(A, ze) | 0, _ = _ + Math.imul(z, he) | 0, M = M + Math.imul(z, ze) | 0;
                var Je = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, S = Math.imul(re, se), _ = Math.imul(re, Oe), _ = _ + Math.imul(Pe, se) | 0, M = Math.imul(Pe, Oe), S = S + Math.imul(H, oe) | 0, _ = _ + Math.imul(H, Le) | 0, _ = _ + Math.imul(Y, oe) | 0, M = M + Math.imul(Y, Le) | 0, S = S + Math.imul(N, ue) | 0, _ = _ + Math.imul(N, We) | 0, _ = _ + Math.imul(W, ue) | 0, M = M + Math.imul(W, We) | 0, S = S + Math.imul(X, he) | 0, _ = _ + Math.imul(X, ze) | 0, _ = _ + Math.imul(R, he) | 0, M = M + Math.imul(R, ze) | 0, S = S + Math.imul(A, ce) | 0, _ = _ + Math.imul(A, Ue) | 0, _ = _ + Math.imul(z, ce) | 0, M = M + Math.imul(z, Ue) | 0;
                var Ye = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, S = Math.imul(te, se), _ = Math.imul(te, Oe), _ = _ + Math.imul(je, se) | 0, M = Math.imul(je, Oe), S = S + Math.imul(re, oe) | 0, _ = _ + Math.imul(re, Le) | 0, _ = _ + Math.imul(Pe, oe) | 0, M = M + Math.imul(Pe, Le) | 0, S = S + Math.imul(H, ue) | 0, _ = _ + Math.imul(H, We) | 0, _ = _ + Math.imul(Y, ue) | 0, M = M + Math.imul(Y, We) | 0, S = S + Math.imul(N, he) | 0, _ = _ + Math.imul(N, ze) | 0, _ = _ + Math.imul(W, he) | 0, M = M + Math.imul(W, ze) | 0, S = S + Math.imul(X, ce) | 0, _ = _ + Math.imul(X, Ue) | 0, _ = _ + Math.imul(R, ce) | 0, M = M + Math.imul(R, Ue) | 0, S = S + Math.imul(A, de) | 0, _ = _ + Math.imul(A, He) | 0, _ = _ + Math.imul(z, de) | 0, M = M + Math.imul(z, He) | 0;
                var Qe = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, S = Math.imul(Z, se), _ = Math.imul(Z, Oe), _ = _ + Math.imul(_e, se) | 0, M = Math.imul(_e, Oe), S = S + Math.imul(te, oe) | 0, _ = _ + Math.imul(te, Le) | 0, _ = _ + Math.imul(je, oe) | 0, M = M + Math.imul(je, Le) | 0, S = S + Math.imul(re, ue) | 0, _ = _ + Math.imul(re, We) | 0, _ = _ + Math.imul(Pe, ue) | 0, M = M + Math.imul(Pe, We) | 0, S = S + Math.imul(H, he) | 0, _ = _ + Math.imul(H, ze) | 0, _ = _ + Math.imul(Y, he) | 0, M = M + Math.imul(Y, ze) | 0, S = S + Math.imul(N, ce) | 0, _ = _ + Math.imul(N, Ue) | 0, _ = _ + Math.imul(W, ce) | 0, M = M + Math.imul(W, Ue) | 0, S = S + Math.imul(X, de) | 0, _ = _ + Math.imul(X, He) | 0, _ = _ + Math.imul(R, de) | 0, M = M + Math.imul(R, He) | 0, S = S + Math.imul(A, le) | 0, _ = _ + Math.imul(A, Ke) | 0, _ = _ + Math.imul(z, le) | 0, M = M + Math.imul(z, Ke) | 0;
                var Ze = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, S = Math.imul(ee, se), _ = Math.imul(ee, Oe), _ = _ + Math.imul(De, se) | 0, M = Math.imul(De, Oe), S = S + Math.imul(Z, oe) | 0, _ = _ + Math.imul(Z, Le) | 0, _ = _ + Math.imul(_e, oe) | 0, M = M + Math.imul(_e, Le) | 0, S = S + Math.imul(te, ue) | 0, _ = _ + Math.imul(te, We) | 0, _ = _ + Math.imul(je, ue) | 0, M = M + Math.imul(je, We) | 0, S = S + Math.imul(re, he) | 0, _ = _ + Math.imul(re, ze) | 0, _ = _ + Math.imul(Pe, he) | 0, M = M + Math.imul(Pe, ze) | 0, S = S + Math.imul(H, ce) | 0, _ = _ + Math.imul(H, Ue) | 0, _ = _ + Math.imul(Y, ce) | 0, M = M + Math.imul(Y, Ue) | 0, S = S + Math.imul(N, de) | 0, _ = _ + Math.imul(N, He) | 0, _ = _ + Math.imul(W, de) | 0, M = M + Math.imul(W, He) | 0, S = S + Math.imul(X, le) | 0, _ = _ + Math.imul(X, Ke) | 0, _ = _ + Math.imul(R, le) | 0, M = M + Math.imul(R, Ke) | 0, S = S + Math.imul(A, pe) | 0, _ = _ + Math.imul(A, Fe) | 0, _ = _ + Math.imul(z, pe) | 0, M = M + Math.imul(z, Fe) | 0;
                var er = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, S = Math.imul(ie, se), _ = Math.imul(ie, Oe), _ = _ + Math.imul(Ne, se) | 0, M = Math.imul(Ne, Oe), S = S + Math.imul(ee, oe) | 0, _ = _ + Math.imul(ee, Le) | 0, _ = _ + Math.imul(De, oe) | 0, M = M + Math.imul(De, Le) | 0, S = S + Math.imul(Z, ue) | 0, _ = _ + Math.imul(Z, We) | 0, _ = _ + Math.imul(_e, ue) | 0, M = M + Math.imul(_e, We) | 0, S = S + Math.imul(te, he) | 0, _ = _ + Math.imul(te, ze) | 0, _ = _ + Math.imul(je, he) | 0, M = M + Math.imul(je, ze) | 0, S = S + Math.imul(re, ce) | 0, _ = _ + Math.imul(re, Ue) | 0, _ = _ + Math.imul(Pe, ce) | 0, M = M + Math.imul(Pe, Ue) | 0, S = S + Math.imul(H, de) | 0, _ = _ + Math.imul(H, He) | 0, _ = _ + Math.imul(Y, de) | 0, M = M + Math.imul(Y, He) | 0, S = S + Math.imul(N, le) | 0, _ = _ + Math.imul(N, Ke) | 0, _ = _ + Math.imul(W, le) | 0, M = M + Math.imul(W, Ke) | 0, S = S + Math.imul(X, pe) | 0, _ = _ + Math.imul(X, Fe) | 0, _ = _ + Math.imul(R, pe) | 0, M = M + Math.imul(R, Fe) | 0, S = S + Math.imul(A, ve) | 0, _ = _ + Math.imul(A, Xe) | 0, _ = _ + Math.imul(z, ve) | 0, M = M + Math.imul(z, Xe) | 0;
                var rr = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, S = Math.imul(fe, se), _ = Math.imul(fe, Oe), _ = _ + Math.imul(Te, se) | 0, M = Math.imul(Te, Oe), S = S + Math.imul(ie, oe) | 0, _ = _ + Math.imul(ie, Le) | 0, _ = _ + Math.imul(Ne, oe) | 0, M = M + Math.imul(Ne, Le) | 0, S = S + Math.imul(ee, ue) | 0, _ = _ + Math.imul(ee, We) | 0, _ = _ + Math.imul(De, ue) | 0, M = M + Math.imul(De, We) | 0, S = S + Math.imul(Z, he) | 0, _ = _ + Math.imul(Z, ze) | 0, _ = _ + Math.imul(_e, he) | 0, M = M + Math.imul(_e, ze) | 0, S = S + Math.imul(te, ce) | 0, _ = _ + Math.imul(te, Ue) | 0, _ = _ + Math.imul(je, ce) | 0, M = M + Math.imul(je, Ue) | 0, S = S + Math.imul(re, de) | 0, _ = _ + Math.imul(re, He) | 0, _ = _ + Math.imul(Pe, de) | 0, M = M + Math.imul(Pe, He) | 0, S = S + Math.imul(H, le) | 0, _ = _ + Math.imul(H, Ke) | 0, _ = _ + Math.imul(Y, le) | 0, M = M + Math.imul(Y, Ke) | 0, S = S + Math.imul(N, pe) | 0, _ = _ + Math.imul(N, Fe) | 0, _ = _ + Math.imul(W, pe) | 0, M = M + Math.imul(W, Fe) | 0, S = S + Math.imul(X, ve) | 0, _ = _ + Math.imul(X, Xe) | 0, _ = _ + Math.imul(R, ve) | 0, M = M + Math.imul(R, Xe) | 0, S = S + Math.imul(A, be) | 0, _ = _ + Math.imul(A, Ge) | 0, _ = _ + Math.imul(z, be) | 0, M = M + Math.imul(z, Ge) | 0;
                var tr = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (tr >>> 26) | 0, tr &= 67108863, S = Math.imul(fe, oe), _ = Math.imul(fe, Le), _ = _ + Math.imul(Te, oe) | 0, M = Math.imul(Te, Le), S = S + Math.imul(ie, ue) | 0, _ = _ + Math.imul(ie, We) | 0, _ = _ + Math.imul(Ne, ue) | 0, M = M + Math.imul(Ne, We) | 0, S = S + Math.imul(ee, he) | 0, _ = _ + Math.imul(ee, ze) | 0, _ = _ + Math.imul(De, he) | 0, M = M + Math.imul(De, ze) | 0, S = S + Math.imul(Z, ce) | 0, _ = _ + Math.imul(Z, Ue) | 0, _ = _ + Math.imul(_e, ce) | 0, M = M + Math.imul(_e, Ue) | 0, S = S + Math.imul(te, de) | 0, _ = _ + Math.imul(te, He) | 0, _ = _ + Math.imul(je, de) | 0, M = M + Math.imul(je, He) | 0, S = S + Math.imul(re, le) | 0, _ = _ + Math.imul(re, Ke) | 0, _ = _ + Math.imul(Pe, le) | 0, M = M + Math.imul(Pe, Ke) | 0, S = S + Math.imul(H, pe) | 0, _ = _ + Math.imul(H, Fe) | 0, _ = _ + Math.imul(Y, pe) | 0, M = M + Math.imul(Y, Fe) | 0, S = S + Math.imul(N, ve) | 0, _ = _ + Math.imul(N, Xe) | 0, _ = _ + Math.imul(W, ve) | 0, M = M + Math.imul(W, Xe) | 0, S = S + Math.imul(X, be) | 0, _ = _ + Math.imul(X, Ge) | 0, _ = _ + Math.imul(R, be) | 0, M = M + Math.imul(R, Ge) | 0;
                var ir = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, S = Math.imul(fe, ue), _ = Math.imul(fe, We), _ = _ + Math.imul(Te, ue) | 0, M = Math.imul(Te, We), S = S + Math.imul(ie, he) | 0, _ = _ + Math.imul(ie, ze) | 0, _ = _ + Math.imul(Ne, he) | 0, M = M + Math.imul(Ne, ze) | 0, S = S + Math.imul(ee, ce) | 0, _ = _ + Math.imul(ee, Ue) | 0, _ = _ + Math.imul(De, ce) | 0, M = M + Math.imul(De, Ue) | 0, S = S + Math.imul(Z, de) | 0, _ = _ + Math.imul(Z, He) | 0, _ = _ + Math.imul(_e, de) | 0, M = M + Math.imul(_e, He) | 0, S = S + Math.imul(te, le) | 0, _ = _ + Math.imul(te, Ke) | 0, _ = _ + Math.imul(je, le) | 0, M = M + Math.imul(je, Ke) | 0, S = S + Math.imul(re, pe) | 0, _ = _ + Math.imul(re, Fe) | 0, _ = _ + Math.imul(Pe, pe) | 0, M = M + Math.imul(Pe, Fe) | 0, S = S + Math.imul(H, ve) | 0, _ = _ + Math.imul(H, Xe) | 0, _ = _ + Math.imul(Y, ve) | 0, M = M + Math.imul(Y, Xe) | 0, S = S + Math.imul(N, be) | 0, _ = _ + Math.imul(N, Ge) | 0, _ = _ + Math.imul(W, be) | 0, M = M + Math.imul(W, Ge) | 0;
                var nr = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, S = Math.imul(fe, he), _ = Math.imul(fe, ze), _ = _ + Math.imul(Te, he) | 0, M = Math.imul(Te, ze), S = S + Math.imul(ie, ce) | 0, _ = _ + Math.imul(ie, Ue) | 0, _ = _ + Math.imul(Ne, ce) | 0, M = M + Math.imul(Ne, Ue) | 0, S = S + Math.imul(ee, de) | 0, _ = _ + Math.imul(ee, He) | 0, _ = _ + Math.imul(De, de) | 0, M = M + Math.imul(De, He) | 0, S = S + Math.imul(Z, le) | 0, _ = _ + Math.imul(Z, Ke) | 0, _ = _ + Math.imul(_e, le) | 0, M = M + Math.imul(_e, Ke) | 0, S = S + Math.imul(te, pe) | 0, _ = _ + Math.imul(te, Fe) | 0, _ = _ + Math.imul(je, pe) | 0, M = M + Math.imul(je, Fe) | 0, S = S + Math.imul(re, ve) | 0, _ = _ + Math.imul(re, Xe) | 0, _ = _ + Math.imul(Pe, ve) | 0, M = M + Math.imul(Pe, Xe) | 0, S = S + Math.imul(H, be) | 0, _ = _ + Math.imul(H, Ge) | 0, _ = _ + Math.imul(Y, be) | 0, M = M + Math.imul(Y, Ge) | 0;
                var ar = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, S = Math.imul(fe, ce), _ = Math.imul(fe, Ue), _ = _ + Math.imul(Te, ce) | 0, M = Math.imul(Te, Ue), S = S + Math.imul(ie, de) | 0, _ = _ + Math.imul(ie, He) | 0, _ = _ + Math.imul(Ne, de) | 0, M = M + Math.imul(Ne, He) | 0, S = S + Math.imul(ee, le) | 0, _ = _ + Math.imul(ee, Ke) | 0, _ = _ + Math.imul(De, le) | 0, M = M + Math.imul(De, Ke) | 0, S = S + Math.imul(Z, pe) | 0, _ = _ + Math.imul(Z, Fe) | 0, _ = _ + Math.imul(_e, pe) | 0, M = M + Math.imul(_e, Fe) | 0, S = S + Math.imul(te, ve) | 0, _ = _ + Math.imul(te, Xe) | 0, _ = _ + Math.imul(je, ve) | 0, M = M + Math.imul(je, Xe) | 0, S = S + Math.imul(re, be) | 0, _ = _ + Math.imul(re, Ge) | 0, _ = _ + Math.imul(Pe, be) | 0, M = M + Math.imul(Pe, Ge) | 0;
                var fr = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, S = Math.imul(fe, de), _ = Math.imul(fe, He), _ = _ + Math.imul(Te, de) | 0, M = Math.imul(Te, He), S = S + Math.imul(ie, le) | 0, _ = _ + Math.imul(ie, Ke) | 0, _ = _ + Math.imul(Ne, le) | 0, M = M + Math.imul(Ne, Ke) | 0, S = S + Math.imul(ee, pe) | 0, _ = _ + Math.imul(ee, Fe) | 0, _ = _ + Math.imul(De, pe) | 0, M = M + Math.imul(De, Fe) | 0, S = S + Math.imul(Z, ve) | 0, _ = _ + Math.imul(Z, Xe) | 0, _ = _ + Math.imul(_e, ve) | 0, M = M + Math.imul(_e, Xe) | 0, S = S + Math.imul(te, be) | 0, _ = _ + Math.imul(te, Ge) | 0, _ = _ + Math.imul(je, be) | 0, M = M + Math.imul(je, Ge) | 0;
                var sr = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, S = Math.imul(fe, le), _ = Math.imul(fe, Ke), _ = _ + Math.imul(Te, le) | 0, M = Math.imul(Te, Ke), S = S + Math.imul(ie, pe) | 0, _ = _ + Math.imul(ie, Fe) | 0, _ = _ + Math.imul(Ne, pe) | 0, M = M + Math.imul(Ne, Fe) | 0, S = S + Math.imul(ee, ve) | 0, _ = _ + Math.imul(ee, Xe) | 0, _ = _ + Math.imul(De, ve) | 0, M = M + Math.imul(De, Xe) | 0, S = S + Math.imul(Z, be) | 0, _ = _ + Math.imul(Z, Ge) | 0, _ = _ + Math.imul(_e, be) | 0, M = M + Math.imul(_e, Ge) | 0;
                var ur = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, S = Math.imul(fe, pe), _ = Math.imul(fe, Fe), _ = _ + Math.imul(Te, pe) | 0, M = Math.imul(Te, Fe), S = S + Math.imul(ie, ve) | 0, _ = _ + Math.imul(ie, Xe) | 0, _ = _ + Math.imul(Ne, ve) | 0, M = M + Math.imul(Ne, Xe) | 0, S = S + Math.imul(ee, be) | 0, _ = _ + Math.imul(ee, Ge) | 0, _ = _ + Math.imul(De, be) | 0, M = M + Math.imul(De, Ge) | 0;
                var hr = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, S = Math.imul(fe, ve), _ = Math.imul(fe, Xe), _ = _ + Math.imul(Te, ve) | 0, M = Math.imul(Te, Xe), S = S + Math.imul(ie, be) | 0, _ = _ + Math.imul(ie, Ge) | 0, _ = _ + Math.imul(Ne, be) | 0, M = M + Math.imul(Ne, Ge) | 0;
                var cr = (g + S | 0) + ((_ & 8191) << 13) | 0;
                g = (M + (_ >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, S = Math.imul(fe, be), _ = Math.imul(fe, Ge), _ = _ + Math.imul(Te, be) | 0, M = Math.imul(Te, Ge);
                var dr = (g + S | 0) + ((_ & 8191) << 13) | 0;
                return g = (M + (_ >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, v[0] = we, v[1] = xe, v[2] = Ve, v[3] = Je, v[4] = Ye, v[5] = Qe, v[6] = Ze, v[7] = er, v[8] = rr, v[9] = tr, v[10] = ir, v[11] = nr, v[12] = ar, v[13] = fr, v[14] = sr, v[15] = ur, v[16] = hr, v[17] = cr, v[18] = dr, g !== 0 && (v[19] = g, t.length++), t
            };
            Math.imul || (E = B);

            function C(P, q, b) {
                b.negative = q.negative ^ P.negative, b.length = P.length + q.length;
                for (var t = 0, u = 0, y = 0; y < b.length - 1; y++) {
                    var v = u;
                    u = 0;
                    for (var g = t & 67108863, S = Math.min(y, q.length - 1), _ = Math.max(0, y - P.length + 1); _ <= S; _++) {
                        var M = y - _,
                            d = P.words[M] | 0,
                            A = q.words[_] | 0,
                            z = d * A,
                            U = z & 67108863;
                        v = v + (z / 67108864 | 0) | 0, U = U + g | 0, g = U & 67108863, v = v + (U >>> 26) | 0, u += v >>> 26, v &= 67108863
                    }
                    b.words[y] = g, t = v, v = u
                }
                return t !== 0 ? b.words[y] = t : b.length--, b.strip()
            }

            function $(P, q, b) {
                var t = new I;
                return t.mulp(P, q, b)
            }
            e.prototype.mulTo = function(q, b) {
                var t, u = this.length + q.length;
                return this.length === 10 && q.length === 10 ? t = E(this, q, b) : u < 63 ? t = B(this, q, b) : u < 1024 ? t = C(this, q, b) : t = $(this, q, b), t
            };

            function I(P, q) {
                this.x = P, this.y = q
            }
            I.prototype.makeRBT = function(q) {
                for (var b = new Array(q), t = e.prototype._countBits(q) - 1, u = 0; u < q; u++) b[u] = this.revBin(u, t, q);
                return b
            }, I.prototype.revBin = function(q, b, t) {
                if (q === 0 || q === t - 1) return q;
                for (var u = 0, y = 0; y < b; y++) u |= (q & 1) << b - y - 1, q >>= 1;
                return u
            }, I.prototype.permute = function(q, b, t, u, y, v) {
                for (var g = 0; g < v; g++) u[g] = b[q[g]], y[g] = t[q[g]]
            }, I.prototype.transform = function(q, b, t, u, y, v) {
                this.permute(v, q, b, t, u, y);
                for (var g = 1; g < y; g <<= 1)
                    for (var S = g << 1, _ = Math.cos(2 * Math.PI / S), M = Math.sin(2 * Math.PI / S), d = 0; d < y; d += S)
                        for (var A = _, z = M, U = 0; U < g; U++) {
                            var X = t[d + U],
                                R = u[d + U],
                                k = t[d + U + g],
                                N = u[d + U + g],
                                W = A * k - z * N;
                            N = A * N + z * k, k = W, t[d + U] = X + k, u[d + U] = R + N, t[d + U + g] = X - k, u[d + U + g] = R - N, U !== S && (W = _ * A - M * z, z = _ * z + M * A, A = W)
                        }
            }, I.prototype.guessLen13b = function(q, b) {
                var t = Math.max(b, q) | 1,
                    u = t & 1,
                    y = 0;
                for (t = t / 2 | 0; t; t = t >>> 1) y++;
                return 1 << y + 1 + u
            }, I.prototype.conjugate = function(q, b, t) {
                if (!(t <= 1))
                    for (var u = 0; u < t / 2; u++) {
                        var y = q[u];
                        q[u] = q[t - u - 1], q[t - u - 1] = y, y = b[u], b[u] = -b[t - u - 1], b[t - u - 1] = -y
                    }
            }, I.prototype.normalize13b = function(q, b) {
                for (var t = 0, u = 0; u < b / 2; u++) {
                    var y = Math.round(q[2 * u + 1] / b) * 8192 + Math.round(q[2 * u] / b) + t;
                    q[u] = y & 67108863, y < 67108864 ? t = 0 : t = y / 67108864 | 0
                }
                return q
            }, I.prototype.convert13b = function(q, b, t, u) {
                for (var y = 0, v = 0; v < b; v++) y = y + (q[v] | 0), t[2 * v] = y & 8191, y = y >>> 13, t[2 * v + 1] = y & 8191, y = y >>> 13;
                for (v = 2 * b; v < u; ++v) t[v] = 0;
                n(y === 0), n((y & -8192) === 0)
            }, I.prototype.stub = function(q) {
                for (var b = new Array(q), t = 0; t < q; t++) b[t] = 0;
                return b
            }, I.prototype.mulp = function(q, b, t) {
                var u = 2 * this.guessLen13b(q.length, b.length),
                    y = this.makeRBT(u),
                    v = this.stub(u),
                    g = new Array(u),
                    S = new Array(u),
                    _ = new Array(u),
                    M = new Array(u),
                    d = new Array(u),
                    A = new Array(u),
                    z = t.words;
                z.length = u, this.convert13b(q.words, q.length, g, u), this.convert13b(b.words, b.length, M, u), this.transform(g, v, S, _, u, y), this.transform(M, v, d, A, u, y);
                for (var U = 0; U < u; U++) {
                    var X = S[U] * d[U] - _[U] * A[U];
                    _[U] = S[U] * A[U] + _[U] * d[U], S[U] = X
                }
                return this.conjugate(S, _, u), this.transform(S, _, z, v, u, y), this.conjugate(z, v, u), this.normalize13b(z, u), t.negative = q.negative ^ b.negative, t.length = q.length + b.length, t.strip()
            }, e.prototype.mul = function(q) {
                var b = new e(null);
                return b.words = new Array(this.length + q.length), this.mulTo(q, b)
            }, e.prototype.mulf = function(q) {
                var b = new e(null);
                return b.words = new Array(this.length + q.length), $(this, q, b)
            }, e.prototype.imul = function(q) {
                return this.clone().mulTo(q, this)
            }, e.prototype.imuln = function(q) {
                n(typeof q == "number"), n(q < 67108864);
                for (var b = 0, t = 0; t < this.length; t++) {
                    var u = (this.words[t] | 0) * q,
                        y = (u & 67108863) + (b & 67108863);
                    b >>= 26, b += u / 67108864 | 0, b += y >>> 26, this.words[t] = y & 67108863
                }
                return b !== 0 && (this.words[t] = b, this.length++), this.length = q === 0 ? 1 : this.length, this
            }, e.prototype.muln = function(q) {
                return this.clone().imuln(q)
            }, e.prototype.sqr = function() {
                return this.mul(this)
            }, e.prototype.isqr = function() {
                return this.imul(this.clone())
            }, e.prototype.pow = function(q) {
                var b = x(q);
                if (b.length === 0) return new e(1);
                for (var t = this, u = 0; u < b.length && b[u] === 0; u++, t = t.sqr());
                if (++u < b.length)
                    for (var y = t.sqr(); u < b.length; u++, y = y.sqr()) b[u] !== 0 && (t = t.mul(y));
                return t
            }, e.prototype.iushln = function(q) {
                n(typeof q == "number" && q >= 0);
                var b = q % 26,
                    t = (q - b) / 26,
                    u = 67108863 >>> 26 - b << 26 - b,
                    y;
                if (b !== 0) {
                    var v = 0;
                    for (y = 0; y < this.length; y++) {
                        var g = this.words[y] & u,
                            S = (this.words[y] | 0) - g << b;
                        this.words[y] = S | v, v = g >>> 26 - b
                    }
                    v && (this.words[y] = v, this.length++)
                }
                if (t !== 0) {
                    for (y = this.length - 1; y >= 0; y--) this.words[y + t] = this.words[y];
                    for (y = 0; y < t; y++) this.words[y] = 0;
                    this.length += t
                }
                return this.strip()
            }, e.prototype.ishln = function(q) {
                return n(this.negative === 0), this.iushln(q)
            }, e.prototype.iushrn = function(q, b, t) {
                n(typeof q == "number" && q >= 0);
                var u;
                b ? u = (b - b % 26) / 26 : u = 0;
                var y = q % 26,
                    v = Math.min((q - y) / 26, this.length),
                    g = 67108863 ^ 67108863 >>> y << y,
                    S = t;
                if (u -= v, u = Math.max(0, u), S) {
                    for (var _ = 0; _ < v; _++) S.words[_] = this.words[_];
                    S.length = v
                }
                if (v !== 0)
                    if (this.length > v)
                        for (this.length -= v, _ = 0; _ < this.length; _++) this.words[_] = this.words[_ + v];
                    else this.words[0] = 0, this.length = 1;
                var M = 0;
                for (_ = this.length - 1; _ >= 0 && (M !== 0 || _ >= u); _--) {
                    var d = this.words[_] | 0;
                    this.words[_] = M << 26 - y | d >>> y, M = d & g
                }
                return S && M !== 0 && (S.words[S.length++] = M), this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip()
            }, e.prototype.ishrn = function(q, b, t) {
                return n(this.negative === 0), this.iushrn(q, b, t)
            }, e.prototype.shln = function(q) {
                return this.clone().ishln(q)
            }, e.prototype.ushln = function(q) {
                return this.clone().iushln(q)
            }, e.prototype.shrn = function(q) {
                return this.clone().ishrn(q)
            }, e.prototype.ushrn = function(q) {
                return this.clone().iushrn(q)
            }, e.prototype.testn = function(q) {
                n(typeof q == "number" && q >= 0);
                var b = q % 26,
                    t = (q - b) / 26,
                    u = 1 << b;
                if (this.length <= t) return !1;
                var y = this.words[t];
                return !!(y & u)
            }, e.prototype.imaskn = function(q) {
                n(typeof q == "number" && q >= 0);
                var b = q % 26,
                    t = (q - b) / 26;
                if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= t) return this;
                if (b !== 0 && t++, this.length = Math.min(t, this.length), b !== 0) {
                    var u = 67108863 ^ 67108863 >>> b << b;
                    this.words[this.length - 1] &= u
                }
                return this.length === 0 && (this.words[0] = 0, this.length = 1), this.strip()
            }, e.prototype.maskn = function(q) {
                return this.clone().imaskn(q)
            }, e.prototype.iaddn = function(q) {
                return n(typeof q == "number"), n(q < 67108864), q < 0 ? this.isubn(-q) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) < q ? (this.words[0] = q - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(q), this.negative = 1, this) : this._iaddn(q)
            }, e.prototype._iaddn = function(q) {
                this.words[0] += q;
                for (var b = 0; b < this.length && this.words[b] >= 67108864; b++) this.words[b] -= 67108864, b === this.length - 1 ? this.words[b + 1] = 1 : this.words[b + 1]++;
                return this.length = Math.max(this.length, b + 1), this
            }, e.prototype.isubn = function(q) {
                if (n(typeof q == "number"), n(q < 67108864), q < 0) return this.iaddn(-q);
                if (this.negative !== 0) return this.negative = 0, this.iaddn(q), this.negative = 1, this;
                if (this.words[0] -= q, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var b = 0; b < this.length && this.words[b] < 0; b++) this.words[b] += 67108864, this.words[b + 1] -= 1;
                return this.strip()
            }, e.prototype.addn = function(q) {
                return this.clone().iaddn(q)
            }, e.prototype.subn = function(q) {
                return this.clone().isubn(q)
            }, e.prototype.iabs = function() {
                return this.negative = 0, this
            }, e.prototype.abs = function() {
                return this.clone().iabs()
            }, e.prototype._ishlnsubmul = function(q, b, t) {
                var u = q.length + t,
                    y;
                this._expand(u);
                var v, g = 0;
                for (y = 0; y < q.length; y++) {
                    v = (this.words[y + t] | 0) + g;
                    var S = (q.words[y] | 0) * b;
                    v -= S & 67108863, g = (v >> 26) - (S / 67108864 | 0), this.words[y + t] = v & 67108863
                }
                for (; y < this.length - t; y++) v = (this.words[y + t] | 0) + g, g = v >> 26, this.words[y + t] = v & 67108863;
                if (g === 0) return this.strip();
                for (n(g === -1), g = 0, y = 0; y < this.length; y++) v = -(this.words[y] | 0) + g, g = v >> 26, this.words[y] = v & 67108863;
                return this.negative = 1, this.strip()
            }, e.prototype._wordDiv = function(q, b) {
                var t = this.length - q.length,
                    u = this.clone(),
                    y = q,
                    v = y.words[y.length - 1] | 0,
                    g = this._countBits(v);
                t = 26 - g, t !== 0 && (y = y.ushln(t), u.iushln(t), v = y.words[y.length - 1] | 0);
                var S = u.length - y.length,
                    _;
                if (b !== "mod") {
                    _ = new e(null), _.length = S + 1, _.words = new Array(_.length);
                    for (var M = 0; M < _.length; M++) _.words[M] = 0
                }
                var d = u.clone()._ishlnsubmul(y, 1, S);
                d.negative === 0 && (u = d, _ && (_.words[S] = 1));
                for (var A = S - 1; A >= 0; A--) {
                    var z = (u.words[y.length + A] | 0) * 67108864 + (u.words[y.length + A - 1] | 0);
                    for (z = Math.min(z / v | 0, 67108863), u._ishlnsubmul(y, z, A); u.negative !== 0;) z--, u.negative = 0, u._ishlnsubmul(y, 1, A), u.isZero() || (u.negative ^= 1);
                    _ && (_.words[A] = z)
                }
                return _ && _.strip(), u.strip(), b !== "div" && t !== 0 && u.iushrn(t), {
                    div: _ || null,
                    mod: u
                }
            }, e.prototype.divmod = function(q, b, t) {
                if (n(!q.isZero()), this.isZero()) return {
                    div: new e(0),
                    mod: new e(0)
                };
                var u, y, v;
                return this.negative !== 0 && q.negative === 0 ? (v = this.neg().divmod(q, b), b !== "mod" && (u = v.div.neg()), b !== "div" && (y = v.mod.neg(), t && y.negative !== 0 && y.iadd(q)), {
                    div: u,
                    mod: y
                }) : this.negative === 0 && q.negative !== 0 ? (v = this.divmod(q.neg(), b), b !== "mod" && (u = v.div.neg()), {
                    div: u,
                    mod: v.mod
                }) : (this.negative & q.negative) !== 0 ? (v = this.neg().divmod(q.neg(), b), b !== "div" && (y = v.mod.neg(), t && y.negative !== 0 && y.isub(q)), {
                    div: v.div,
                    mod: y
                }) : q.length > this.length || this.cmp(q) < 0 ? {
                    div: new e(0),
                    mod: this
                } : q.length === 1 ? b === "div" ? {
                    div: this.divn(q.words[0]),
                    mod: null
                } : b === "mod" ? {
                    div: null,
                    mod: new e(this.modn(q.words[0]))
                } : {
                    div: this.divn(q.words[0]),
                    mod: new e(this.modn(q.words[0]))
                } : this._wordDiv(q, b)
            }, e.prototype.div = function(q) {
                return this.divmod(q, "div", !1).div
            }, e.prototype.mod = function(q) {
                return this.divmod(q, "mod", !1).mod
            }, e.prototype.umod = function(q) {
                return this.divmod(q, "mod", !0).mod
            }, e.prototype.divRound = function(q) {
                var b = this.divmod(q);
                if (b.mod.isZero()) return b.div;
                var t = b.div.negative !== 0 ? b.mod.isub(q) : b.mod,
                    u = q.ushrn(1),
                    y = q.andln(1),
                    v = t.cmp(u);
                return v < 0 || y === 1 && v === 0 ? b.div : b.div.negative !== 0 ? b.div.isubn(1) : b.div.iaddn(1)
            }, e.prototype.modn = function(q) {
                n(q <= 67108863);
                for (var b = (1 << 26) % q, t = 0, u = this.length - 1; u >= 0; u--) t = (b * t + (this.words[u] | 0)) % q;
                return t
            }, e.prototype.idivn = function(q) {
                n(q <= 67108863);
                for (var b = 0, t = this.length - 1; t >= 0; t--) {
                    var u = (this.words[t] | 0) + b * 67108864;
                    this.words[t] = u / q | 0, b = u % q
                }
                return this.strip()
            }, e.prototype.divn = function(q) {
                return this.clone().idivn(q)
            }, e.prototype.egcd = function(q) {
                n(q.negative === 0), n(!q.isZero());
                var b = this,
                    t = q.clone();
                b.negative !== 0 ? b = b.umod(q) : b = b.clone();
                for (var u = new e(1), y = new e(0), v = new e(0), g = new e(1), S = 0; b.isEven() && t.isEven();) b.iushrn(1), t.iushrn(1), ++S;
                for (var _ = t.clone(), M = b.clone(); !b.isZero();) {
                    for (var d = 0, A = 1;
                        (b.words[0] & A) === 0 && d < 26; ++d, A <<= 1);
                    if (d > 0)
                        for (b.iushrn(d); d-- > 0;)(u.isOdd() || y.isOdd()) && (u.iadd(_), y.isub(M)), u.iushrn(1), y.iushrn(1);
                    for (var z = 0, U = 1;
                        (t.words[0] & U) === 0 && z < 26; ++z, U <<= 1);
                    if (z > 0)
                        for (t.iushrn(z); z-- > 0;)(v.isOdd() || g.isOdd()) && (v.iadd(_), g.isub(M)), v.iushrn(1), g.iushrn(1);
                    b.cmp(t) >= 0 ? (b.isub(t), u.isub(v), y.isub(g)) : (t.isub(b), v.isub(u), g.isub(y))
                }
                return {
                    a: v,
                    b: g,
                    gcd: t.iushln(S)
                }
            }, e.prototype._invmp = function(q) {
                n(q.negative === 0), n(!q.isZero());
                var b = this,
                    t = q.clone();
                b.negative !== 0 ? b = b.umod(q) : b = b.clone();
                for (var u = new e(1), y = new e(0), v = t.clone(); b.cmpn(1) > 0 && t.cmpn(1) > 0;) {
                    for (var g = 0, S = 1;
                        (b.words[0] & S) === 0 && g < 26; ++g, S <<= 1);
                    if (g > 0)
                        for (b.iushrn(g); g-- > 0;) u.isOdd() && u.iadd(v), u.iushrn(1);
                    for (var _ = 0, M = 1;
                        (t.words[0] & M) === 0 && _ < 26; ++_, M <<= 1);
                    if (_ > 0)
                        for (t.iushrn(_); _-- > 0;) y.isOdd() && y.iadd(v), y.iushrn(1);
                    b.cmp(t) >= 0 ? (b.isub(t), u.isub(y)) : (t.isub(b), y.isub(u))
                }
                var d;
                return b.cmpn(1) === 0 ? d = u : d = y, d.cmpn(0) < 0 && d.iadd(q), d
            }, e.prototype.gcd = function(q) {
                if (this.isZero()) return q.abs();
                if (q.isZero()) return this.abs();
                var b = this.clone(),
                    t = q.clone();
                b.negative = 0, t.negative = 0;
                for (var u = 0; b.isEven() && t.isEven(); u++) b.iushrn(1), t.iushrn(1);
                do {
                    for (; b.isEven();) b.iushrn(1);
                    for (; t.isEven();) t.iushrn(1);
                    var y = b.cmp(t);
                    if (y < 0) {
                        var v = b;
                        b = t, t = v
                    } else if (y === 0 || t.cmpn(1) === 0) break;
                    b.isub(t)
                } while (!0);
                return t.iushln(u)
            }, e.prototype.invm = function(q) {
                return this.egcd(q).a.umod(q)
            }, e.prototype.isEven = function() {
                return (this.words[0] & 1) === 0
            }, e.prototype.isOdd = function() {
                return (this.words[0] & 1) === 1
            }, e.prototype.andln = function(q) {
                return this.words[0] & q
            }, e.prototype.bincn = function(q) {
                n(typeof q == "number");
                var b = q % 26,
                    t = (q - b) / 26,
                    u = 1 << b;
                if (this.length <= t) return this._expand(t + 1), this.words[t] |= u, this;
                for (var y = u, v = t; y !== 0 && v < this.length; v++) {
                    var g = this.words[v] | 0;
                    g += y, y = g >>> 26, g &= 67108863, this.words[v] = g
                }
                return y !== 0 && (this.words[v] = y, this.length++), this
            }, e.prototype.isZero = function() {
                return this.length === 1 && this.words[0] === 0
            }, e.prototype.cmpn = function(q) {
                var b = q < 0;
                if (this.negative !== 0 && !b) return -1;
                if (this.negative === 0 && b) return 1;
                this.strip();
                var t;
                if (this.length > 1) t = 1;
                else {
                    b && (q = -q), n(q <= 67108863, "Number is too big");
                    var u = this.words[0] | 0;
                    t = u === q ? 0 : u < q ? -1 : 1
                }
                return this.negative !== 0 ? -t | 0 : t
            }, e.prototype.cmp = function(q) {
                if (this.negative !== 0 && q.negative === 0) return -1;
                if (this.negative === 0 && q.negative !== 0) return 1;
                var b = this.ucmp(q);
                return this.negative !== 0 ? -b | 0 : b
            }, e.prototype.ucmp = function(q) {
                if (this.length > q.length) return 1;
                if (this.length < q.length) return -1;
                for (var b = 0, t = this.length - 1; t >= 0; t--) {
                    var u = this.words[t] | 0,
                        y = q.words[t] | 0;
                    if (u !== y) {
                        u < y ? b = -1 : u > y && (b = 1);
                        break
                    }
                }
                return b
            }, e.prototype.gtn = function(q) {
                return this.cmpn(q) === 1
            }, e.prototype.gt = function(q) {
                return this.cmp(q) === 1
            }, e.prototype.gten = function(q) {
                return this.cmpn(q) >= 0
            }, e.prototype.gte = function(q) {
                return this.cmp(q) >= 0
            }, e.prototype.ltn = function(q) {
                return this.cmpn(q) === -1
            }, e.prototype.lt = function(q) {
                return this.cmp(q) === -1
            }, e.prototype.lten = function(q) {
                return this.cmpn(q) <= 0
            }, e.prototype.lte = function(q) {
                return this.cmp(q) <= 0
            }, e.prototype.eqn = function(q) {
                return this.cmpn(q) === 0
            }, e.prototype.eq = function(q) {
                return this.cmp(q) === 0
            }, e.red = function(q) {
                return new K(q)
            }, e.prototype.toRed = function(q) {
                return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), q.convertTo(this)._forceRed(q)
            }, e.prototype.fromRed = function() {
                return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, e.prototype._forceRed = function(q) {
                return this.red = q, this
            }, e.prototype.forceRed = function(q) {
                return n(!this.red, "Already a number in reduction context"), this._forceRed(q)
            }, e.prototype.redAdd = function(q) {
                return n(this.red, "redAdd works only with red numbers"), this.red.add(this, q)
            }, e.prototype.redIAdd = function(q) {
                return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, q)
            }, e.prototype.redSub = function(q) {
                return n(this.red, "redSub works only with red numbers"), this.red.sub(this, q)
            }, e.prototype.redISub = function(q) {
                return n(this.red, "redISub works only with red numbers"), this.red.isub(this, q)
            }, e.prototype.redShl = function(q) {
                return n(this.red, "redShl works only with red numbers"), this.red.shl(this, q)
            }, e.prototype.redMul = function(q) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, q), this.red.mul(this, q)
            }, e.prototype.redIMul = function(q) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, q), this.red.imul(this, q)
            }, e.prototype.redSqr = function() {
                return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, e.prototype.redISqr = function() {
                return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, e.prototype.redSqrt = function() {
                return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, e.prototype.redInvm = function() {
                return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, e.prototype.redNeg = function() {
                return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, e.prototype.redPow = function(q) {
                return n(this.red && !q.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, q)
            };
            var D = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function j(P, q) {
                this.name = P, this.p = new e(q, 16), this.n = this.p.bitLength(), this.k = new e(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }
            j.prototype._tmp = function() {
                var q = new e(null);
                return q.words = new Array(Math.ceil(this.n / 13)), q
            }, j.prototype.ireduce = function(q) {
                var b = q,
                    t;
                do this.split(b, this.tmp), b = this.imulK(b), b = b.iadd(this.tmp), t = b.bitLength(); while (t > this.n);
                var u = t < this.n ? -1 : b.ucmp(this.p);
                return u === 0 ? (b.words[0] = 0, b.length = 1) : u > 0 ? b.isub(this.p) : b.strip !== void 0 ? b.strip() : b._strip(), b
            }, j.prototype.split = function(q, b) {
                q.iushrn(this.n, 0, b)
            }, j.prototype.imulK = function(q) {
                return q.imul(this.k)
            };

            function O() {
                j.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            s(O, j), O.prototype.split = function(q, b) {
                for (var t = 4194303, u = Math.min(q.length, 9), y = 0; y < u; y++) b.words[y] = q.words[y];
                if (b.length = u, q.length <= 9) {
                    q.words[0] = 0, q.length = 1;
                    return
                }
                var v = q.words[9];
                for (b.words[b.length++] = v & t, y = 10; y < q.length; y++) {
                    var g = q.words[y] | 0;
                    q.words[y - 10] = (g & t) << 4 | v >>> 22, v = g
                }
                v >>>= 22, q.words[y - 10] = v, v === 0 && q.length > 10 ? q.length -= 10 : q.length -= 9
            }, O.prototype.imulK = function(q) {
                q.words[q.length] = 0, q.words[q.length + 1] = 0, q.length += 2;
                for (var b = 0, t = 0; t < q.length; t++) {
                    var u = q.words[t] | 0;
                    b += u * 977, q.words[t] = b & 67108863, b = u * 64 + (b / 67108864 | 0)
                }
                return q.words[q.length - 1] === 0 && (q.length--, q.words[q.length - 1] === 0 && q.length--), q
            };

            function L() {
                j.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            s(L, j);

            function G() {
                j.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            s(G, j);

            function V() {
                j.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            s(V, j), V.prototype.imulK = function(q) {
                for (var b = 0, t = 0; t < q.length; t++) {
                    var u = (q.words[t] | 0) * 19 + b,
                        y = u & 67108863;
                    u >>>= 26, q.words[t] = y, b = u
                }
                return b !== 0 && (q.words[q.length++] = b), q
            }, e._prime = function(q) {
                if (D[q]) return D[q];
                var b;
                if (q === "k256") b = new O;
                else if (q === "p224") b = new L;
                else if (q === "p192") b = new G;
                else if (q === "p25519") b = new V;
                else throw new Error("Unknown prime " + q);
                return D[q] = b, b
            };

            function K(P) {
                if (typeof P == "string") {
                    var q = e._prime(P);
                    this.m = q.p, this.prime = q
                } else n(P.gtn(1), "modulus must be greater than 1"), this.m = P, this.prime = null
            }
            K.prototype._verify1 = function(q) {
                n(q.negative === 0, "red works only with positives"), n(q.red, "red works only with red numbers")
            }, K.prototype._verify2 = function(q, b) {
                n((q.negative | b.negative) === 0, "red works only with positives"), n(q.red && q.red === b.red, "red works only with red numbers")
            }, K.prototype.imod = function(q) {
                return this.prime ? this.prime.ireduce(q)._forceRed(this) : q.umod(this.m)._forceRed(this)
            }, K.prototype.neg = function(q) {
                return q.isZero() ? q.clone() : this.m.sub(q)._forceRed(this)
            }, K.prototype.add = function(q, b) {
                this._verify2(q, b);
                var t = q.add(b);
                return t.cmp(this.m) >= 0 && t.isub(this.m), t._forceRed(this)
            }, K.prototype.iadd = function(q, b) {
                this._verify2(q, b);
                var t = q.iadd(b);
                return t.cmp(this.m) >= 0 && t.isub(this.m), t
            }, K.prototype.sub = function(q, b) {
                this._verify2(q, b);
                var t = q.sub(b);
                return t.cmpn(0) < 0 && t.iadd(this.m), t._forceRed(this)
            }, K.prototype.isub = function(q, b) {
                this._verify2(q, b);
                var t = q.isub(b);
                return t.cmpn(0) < 0 && t.iadd(this.m), t
            }, K.prototype.shl = function(q, b) {
                return this._verify1(q), this.imod(q.ushln(b))
            }, K.prototype.imul = function(q, b) {
                return this._verify2(q, b), this.imod(q.imul(b))
            }, K.prototype.mul = function(q, b) {
                return this._verify2(q, b), this.imod(q.mul(b))
            }, K.prototype.isqr = function(q) {
                return this.imul(q, q.clone())
            }, K.prototype.sqr = function(q) {
                return this.mul(q, q)
            }, K.prototype.sqrt = function(q) {
                if (q.isZero()) return q.clone();
                var b = this.m.andln(3);
                if (n(b % 2 === 1), b === 3) {
                    var t = this.m.add(new e(1)).iushrn(2);
                    return this.pow(q, t)
                }
                for (var u = this.m.subn(1), y = 0; !u.isZero() && u.andln(1) === 0;) y++, u.iushrn(1);
                n(!u.isZero());
                var v = new e(1).toRed(this),
                    g = v.redNeg(),
                    S = this.m.subn(1).iushrn(1),
                    _ = this.m.bitLength();
                for (_ = new e(2 * _ * _).toRed(this); this.pow(_, S).cmp(g) !== 0;) _.redIAdd(g);
                for (var M = this.pow(_, u), d = this.pow(q, u.addn(1).iushrn(1)), A = this.pow(q, u), z = y; A.cmp(v) !== 0;) {
                    for (var U = A, X = 0; U.cmp(v) !== 0; X++) U = U.redSqr();
                    n(X < z);
                    var R = this.pow(M, new e(1).iushln(z - X - 1));
                    d = d.redMul(R), M = R.redSqr(), A = A.redMul(M), z = X
                }
                return d
            }, K.prototype.invm = function(q) {
                var b = q._invmp(this.m);
                return b.negative !== 0 ? (b.negative = 0, this.imod(b).redNeg()) : this.imod(b)
            }, K.prototype.pow = function(q, b) {
                if (b.isZero()) return new e(1).toRed(this);
                if (b.cmpn(1) === 0) return q.clone();
                var t = 4,
                    u = new Array(1 << t);
                u[0] = new e(1).toRed(this), u[1] = q;
                for (var y = 2; y < u.length; y++) u[y] = this.mul(u[y - 1], q);
                var v = u[0],
                    g = 0,
                    S = 0,
                    _ = b.bitLength() % 26;
                for (_ === 0 && (_ = 26), y = b.length - 1; y >= 0; y--) {
                    for (var M = b.words[y], d = _ - 1; d >= 0; d--) {
                        var A = M >> d & 1;
                        if (v !== u[0] && (v = this.sqr(v)), A === 0 && g === 0) {
                            S = 0;
                            continue
                        }
                        g <<= 1, g |= A, S++, !(S !== t && (y !== 0 || d !== 0)) && (v = this.mul(v, u[g]), S = 0, g = 0)
                    }
                    _ = 26
                }
                return v
            }, K.prototype.convertTo = function(q) {
                var b = q.umod(this.m);
                return b === q ? b.clone() : b
            }, K.prototype.convertFrom = function(q) {
                var b = q.clone();
                return b.red = null, b
            }, e.mont = function(q) {
                return new Q(q)
            };

            function Q(P) {
                K.call(this, P), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new e(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            s(Q, K), Q.prototype.convertTo = function(q) {
                return this.imod(q.ushln(this.shift))
            }, Q.prototype.convertFrom = function(q) {
                var b = this.imod(q.mul(this.rinv));
                return b.red = null, b
            }, Q.prototype.imul = function(q, b) {
                if (q.isZero() || b.isZero()) return q.words[0] = 0, q.length = 1, q;
                var t = q.imul(b),
                    u = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    y = t.isub(u).iushrn(this.shift),
                    v = y;
                return y.cmp(this.m) >= 0 ? v = y.isub(this.m) : y.cmpn(0) < 0 && (v = y.iadd(this.m)), v._forceRed(this)
            }, Q.prototype.mul = function(q, b) {
                if (q.isZero() || b.isZero()) return new e(0)._forceRed(this);
                var t = q.mul(b),
                    u = t.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    y = t.isub(u).iushrn(this.shift),
                    v = y;
                return y.cmp(this.m) >= 0 ? v = y.isub(this.m) : y.cmpn(0) < 0 && (v = y.iadd(this.m)), v._forceRed(this)
            }, Q.prototype.invm = function(q) {
                var b = this.imod(q._invmp(this.m).mul(this.r2));
                return b._forceRed(this)
            }
        })(a, bn$4)
    })(bn$5)), bn$5.exports
}
var brorand = {
        exports: {}
    },
    hasRequiredBrorand;

function requireBrorand() {
    if (hasRequiredBrorand) return brorand.exports;
    hasRequiredBrorand = 1;
    var a;
    brorand.exports = function(s) {
        return a || (a = new r(null)), a.generate(s)
    };

    function r(n) {
        this.rand = n
    }
    if (brorand.exports.Rand = r, r.prototype.generate = function(s) {
            return this._rand(s)
        }, r.prototype._rand = function(s) {
            if (this.rand.getBytes) return this.rand.getBytes(s);
            for (var e = new Uint8Array(s), h = 0; h < e.length; h++) e[h] = this.rand.getByte();
            return e
        }, typeof self == "object") self.crypto && self.crypto.getRandomValues ? r.prototype._rand = function(s) {
        var e = new Uint8Array(s);
        return self.crypto.getRandomValues(e), e
    } : self.msCrypto && self.msCrypto.getRandomValues ? r.prototype._rand = function(s) {
        var e = new Uint8Array(s);
        return self.msCrypto.getRandomValues(e), e
    } : typeof window == "object" && (r.prototype._rand = function() {
        throw new Error("Not implemented yet")
    });
    else try {
        var i = requireCryptoBrowserify();
        if (typeof i.randomBytes != "function") throw new Error("Not supported");
        r.prototype._rand = function(s) {
            return i.randomBytes(s)
        }
    } catch {}
    return brorand.exports
}
var mr, hasRequiredMr;

function requireMr() {
    if (hasRequiredMr) return mr;
    hasRequiredMr = 1;
    var a = requireBn$2(),
        r = requireBrorand();

    function i(n) {
        this.rand = n || new r.Rand
    }
    return mr = i, i.create = function(s) {
        return new i(s)
    }, i.prototype._randbelow = function(s) {
        var e = s.bitLength(),
            h = Math.ceil(e / 8);
        do var c = new a(this.rand.generate(h)); while (c.cmp(s) >= 0);
        return c
    }, i.prototype._randrange = function(s, e) {
        var h = e.sub(s);
        return s.add(this._randbelow(h))
    }, i.prototype.test = function(s, e, h) {
        var c = s.bitLength(),
            l = a.mont(s),
            p = new a(1).toRed(l);
        e || (e = Math.max(1, c / 48 | 0));
        for (var f = s.subn(1), m = 0; !f.testn(m); m++);
        for (var w = s.shrn(m), x = f.toRed(l), B = !0; e > 0; e--) {
            var E = this._randrange(new a(2), f);
            h && h(E);
            var C = E.toRed(l).redPow(w);
            if (!(C.cmp(p) === 0 || C.cmp(x) === 0)) {
                for (var $ = 1; $ < m; $++) {
                    if (C = C.redSqr(), C.cmp(p) === 0) return !1;
                    if (C.cmp(x) === 0) break
                }
                if ($ === m) return !1
            }
        }
        return B
    }, i.prototype.getDivisor = function(s, e) {
        var h = s.bitLength(),
            c = a.mont(s),
            l = new a(1).toRed(c);
        e || (e = Math.max(1, h / 48 | 0));
        for (var p = s.subn(1), f = 0; !p.testn(f); f++);
        for (var m = s.shrn(f), w = p.toRed(c); e > 0; e--) {
            var x = this._randrange(new a(2), p),
                B = s.gcd(x);
            if (B.cmpn(1) !== 0) return B;
            var E = x.toRed(c).redPow(m);
            if (!(E.cmp(l) === 0 || E.cmp(w) === 0)) {
                for (var C = 1; C < f; C++) {
                    if (E = E.redSqr(), E.cmp(l) === 0) return E.fromRed().subn(1).gcd(s);
                    if (E.cmp(w) === 0) break
                }
                if (C === f) return E = E.redSqr(), E.fromRed().subn(1).gcd(s)
            }
        }
        return !1
    }, mr
}
var generatePrime, hasRequiredGeneratePrime;

function requireGeneratePrime() {
    if (hasRequiredGeneratePrime) return generatePrime;
    hasRequiredGeneratePrime = 1;
    var a = requireBrowser$b();
    generatePrime = C, C.simpleSieve = B, C.fermatTest = E;
    var r = requireBn$2(),
        i = new r(24),
        n = requireMr(),
        s = new n,
        e = new r(1),
        h = new r(2),
        c = new r(5);
    new r(16), new r(8);
    var l = new r(10),
        p = new r(3);
    new r(7);
    var f = new r(11),
        m = new r(4);
    new r(12);
    var w = null;

    function x() {
        if (w !== null) return w;
        var $ = 1048576,
            I = [];
        I[0] = 2;
        for (var D = 1, j = 3; j < $; j += 2) {
            for (var O = Math.ceil(Math.sqrt(j)), L = 0; L < D && I[L] <= O && j % I[L] !== 0; L++);
            D !== L && I[L] <= O || (I[D++] = j)
        }
        return w = I, I
    }

    function B($) {
        for (var I = x(), D = 0; D < I.length; D++)
            if ($.modn(I[D]) === 0) return $.cmpn(I[D]) === 0;
        return !0
    }

    function E($) {
        var I = r.mont($);
        return h.toRed(I).redPow($.subn(1)).fromRed().cmpn(1) === 0
    }

    function C($, I) {
        if ($ < 16) return I === 2 || I === 5 ? new r([140, 123]) : new r([140, 39]);
        I = new r(I);
        for (var D, j;;) {
            for (D = new r(a(Math.ceil($ / 8))); D.bitLength() > $;) D.ishrn(1);
            if (D.isEven() && D.iadd(e), D.testn(1) || D.iadd(h), I.cmp(h)) {
                if (!I.cmp(c))
                    for (; D.mod(l).cmp(p);) D.iadd(m)
            } else
                for (; D.mod(i).cmp(f);) D.iadd(m);
            if (j = D.shrn(1), B(j) && B(D) && E(j) && E(D) && s.test(j) && s.test(D)) return D
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
    var a = requireBn$2(),
        r = requireMr(),
        i = new r,
        n = new a(24),
        s = new a(11),
        e = new a(10),
        h = new a(3),
        c = new a(7),
        l = requireGeneratePrime(),
        p = requireBrowser$b();
    dh = B;

    function f(C, $) {
        return $ = $ || "utf8", Buffer.isBuffer(C) || (C = new Buffer(C, $)), this._pub = new a(C), this
    }

    function m(C, $) {
        return $ = $ || "utf8", Buffer.isBuffer(C) || (C = new Buffer(C, $)), this._priv = new a(C), this
    }
    var w = {};

    function x(C, $) {
        var I = $.toString("hex"),
            D = [I, C.toString(16)].join("_");
        if (D in w) return w[D];
        var j = 0;
        if (C.isEven() || !l.simpleSieve || !l.fermatTest(C) || !i.test(C)) return j += 1, I === "02" || I === "05" ? j += 8 : j += 4, w[D] = j, j;
        i.test(C.shrn(1)) || (j += 2);
        var O;
        switch (I) {
            case "02":
                C.mod(n).cmp(s) && (j += 8);
                break;
            case "05":
                O = C.mod(e), O.cmp(h) && O.cmp(c) && (j += 8);
                break;
            default:
                j += 4
        }
        return w[D] = j, j
    }

    function B(C, $, I) {
        this.setGenerator($), this.__prime = new a(C), this._prime = a.mont(this.__prime), this._primeLen = C.length, this._pub = void 0, this._priv = void 0, this._primeCode = void 0, I ? (this.setPublicKey = f, this.setPrivateKey = m) : this._primeCode = 8
    }
    Object.defineProperty(B.prototype, "verifyError", {
        enumerable: !0,
        get: function() {
            return typeof this._primeCode != "number" && (this._primeCode = x(this.__prime, this.__gen)), this._primeCode
        }
    }), B.prototype.generateKeys = function() {
        return this._priv || (this._priv = new a(p(this._primeLen))), this._pub = this._gen.toRed(this._prime).redPow(this._priv).fromRed(), this.getPublicKey()
    }, B.prototype.computeSecret = function(C) {
        C = new a(C), C = C.toRed(this._prime);
        var $ = C.redPow(this._priv).fromRed(),
            I = new Buffer($.toArray()),
            D = this.getPrime();
        if (I.length < D.length) {
            var j = new Buffer(D.length - I.length);
            j.fill(0), I = Buffer.concat([j, I])
        }
        return I
    }, B.prototype.getPublicKey = function($) {
        return E(this._pub, $)
    }, B.prototype.getPrivateKey = function($) {
        return E(this._priv, $)
    }, B.prototype.getPrime = function(C) {
        return E(this.__prime, C)
    }, B.prototype.getGenerator = function(C) {
        return E(this._gen, C)
    }, B.prototype.setGenerator = function(C, $) {
        return $ = $ || "utf8", Buffer.isBuffer(C) || (C = new Buffer(C, $)), this.__gen = C, this._gen = new a(C), this
    };

    function E(C, $) {
        var I = new Buffer(C.toArray());
        return $ ? I.toString($) : I
    }
    return dh
}
var hasRequiredBrowser$5;

function requireBrowser$5() {
    if (hasRequiredBrowser$5) return browser$5;
    hasRequiredBrowser$5 = 1;
    var a = requireGeneratePrime(),
        r = require$$1$1,
        i = requireDh();

    function n(h) {
        var c = new Buffer(r[h].prime, "hex"),
            l = new Buffer(r[h].gen, "hex");
        return new i(c, l)
    }
    var s = {
        binary: !0,
        hex: !0,
        base64: !0
    };

    function e(h, c, l, p) {
        return Buffer.isBuffer(c) || s[c] === void 0 ? e(h, "binary", c, l) : (c = c || "binary", p = p || "binary", l = l || new Buffer([2]), Buffer.isBuffer(l) || (l = new Buffer(l, p)), typeof h == "number" ? new i(a(h, l), l, !0) : (Buffer.isBuffer(h) || (h = new Buffer(h, c)), new i(h, l, !0)))
    }
    return browser$5.DiffieHellmanGroup = browser$5.createDiffieHellmanGroup = browser$5.getDiffieHellman = n, browser$5.createDiffieHellman = browser$5.DiffieHellman = e, browser$5
}
var readableBrowser$1 = {
        exports: {}
    },
    isarray, hasRequiredIsarray;

function requireIsarray() {
    if (hasRequiredIsarray) return isarray;
    hasRequiredIsarray = 1;
    var a = {}.toString;
    return isarray = Array.isArray || function(r) {
        return a.call(r) == "[object Array]"
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
    return hasRequiredSafeBuffer || (hasRequiredSafeBuffer = 1, (function(a, r) {
        var i = requireDist$1(),
            n = i.Buffer;

        function s(h, c) {
            for (var l in h) c[l] = h[l]
        }
        n.from && n.alloc && n.allocUnsafe && n.allocUnsafeSlow ? a.exports = i : (s(i, r), r.Buffer = e);

        function e(h, c, l) {
            return n(h, c, l)
        }
        s(n, e), e.from = function(h, c, l) {
            if (typeof h == "number") throw new TypeError("Argument must not be a number");
            return n(h, c, l)
        }, e.alloc = function(h, c, l) {
            if (typeof h != "number") throw new TypeError("Argument must be a number");
            var p = n(h);
            return c !== void 0 ? typeof l == "string" ? p.fill(c, l) : p.fill(c) : p.fill(0), p
        }, e.allocUnsafe = function(h) {
            if (typeof h != "number") throw new TypeError("Argument must be a number");
            return n(h)
        }, e.allocUnsafeSlow = function(h) {
            if (typeof h != "number") throw new TypeError("Argument must be a number");
            return i.SlowBuffer(h)
        }
    })(safeBuffer, safeBuffer.exports)), safeBuffer.exports
}
var BufferList = {
        exports: {}
    },
    hasRequiredBufferList;

function requireBufferList() {
    return hasRequiredBufferList || (hasRequiredBufferList = 1, (function(a) {
        function r(e, h) {
            if (!(e instanceof h)) throw new TypeError("Cannot call a class as a function")
        }
        var i = requireSafeBuffer().Buffer,
            n = requireUtil$1();

        function s(e, h, c) {
            e.copy(h, c)
        }
        a.exports = (function() {
            function e() {
                r(this, e), this.head = null, this.tail = null, this.length = 0
            }
            return e.prototype.push = function(c) {
                var l = {
                    data: c,
                    next: null
                };
                this.length > 0 ? this.tail.next = l : this.head = l, this.tail = l, ++this.length
            }, e.prototype.unshift = function(c) {
                var l = {
                    data: c,
                    next: this.head
                };
                this.length === 0 && (this.tail = l), this.head = l, ++this.length
            }, e.prototype.shift = function() {
                if (this.length !== 0) {
                    var c = this.head.data;
                    return this.length === 1 ? this.head = this.tail = null : this.head = this.head.next, --this.length, c
                }
            }, e.prototype.clear = function() {
                this.head = this.tail = null, this.length = 0
            }, e.prototype.join = function(c) {
                if (this.length === 0) return "";
                for (var l = this.head, p = "" + l.data; l = l.next;) p += c + l.data;
                return p
            }, e.prototype.concat = function(c) {
                if (this.length === 0) return i.alloc(0);
                for (var l = i.allocUnsafe(c >>> 0), p = this.head, f = 0; p;) s(p.data, l, f), f += p.data.length, p = p.next;
                return l
            }, e
        })(), n && n.inspect && n.inspect.custom && (a.exports.prototype[n.inspect.custom] = function() {
            var e = n.inspect({
                length: this.length
            });
            return this.constructor.name + " " + e
        })
    })(BufferList)), BufferList.exports
}
var destroy_1, hasRequiredDestroy;

function requireDestroy() {
    if (hasRequiredDestroy) return destroy_1;
    hasRequiredDestroy = 1;
    var a = requireProcessNextickArgs();

    function r(s, e) {
        var h = this,
            c = this._readableState && this._readableState.destroyed,
            l = this._writableState && this._writableState.destroyed;
        return c || l ? (e ? e(s) : s && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, a.nextTick(n, this, s)) : a.nextTick(n, this, s)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(s || null, function(p) {
            !e && p ? h._writableState ? h._writableState.errorEmitted || (h._writableState.errorEmitted = !0, a.nextTick(n, h, p)) : a.nextTick(n, h, p) : e && e(p)
        }), this)
    }

    function i() {
        this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
    }

    function n(s, e) {
        s.emit("error", e)
    }
    return destroy_1 = {
        destroy: r,
        undestroy: i
    }, destroy_1
}
var _stream_writable, hasRequired_stream_writable;

function require_stream_writable() {
    if (hasRequired_stream_writable) return _stream_writable;
    hasRequired_stream_writable = 1;
    var a = requireProcessNextickArgs();
    _stream_writable = E;

    function r(v) {
        var g = this;
        this.next = null, this.entry = null, this.finish = function() {
            y(g, v)
        }
    }
    var i = !process$1.browser && ["v0.10", "v0.9."].indexOf(process$1.version.slice(0, 5)) > -1 ? setImmediate : a.nextTick,
        n;
    E.WritableState = x;
    var s = Object.create(requireUtil$2());
    s.inherits = requireInherits_browser();
    var e = {
            deprecate: requireBrowser$c()
        },
        h = requireStreamBrowser(),
        c = requireSafeBuffer().Buffer,
        l = (typeof commonjsGlobal < "u" ? commonjsGlobal : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function p(v) {
        return c.from(v)
    }

    function f(v) {
        return c.isBuffer(v) || v instanceof l
    }
    var m = requireDestroy();
    s.inherits(E, h);

    function w() {}

    function x(v, g) {
        n = n || require_stream_duplex(), v = v || {};
        var S = g instanceof n;
        this.objectMode = !!v.objectMode, S && (this.objectMode = this.objectMode || !!v.writableObjectMode);
        var _ = v.highWaterMark,
            M = v.writableHighWaterMark,
            d = this.objectMode ? 16 : 16 * 1024;
        _ || _ === 0 ? this.highWaterMark = _ : S && (M || M === 0) ? this.highWaterMark = M : this.highWaterMark = d, this.highWaterMark = Math.floor(this.highWaterMark), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
        var A = v.decodeStrings === !1;
        this.decodeStrings = !A, this.defaultEncoding = v.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(z) {
            G(g, z)
        }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.bufferedRequestCount = 0, this.corkedRequestsFree = new r(this)
    }
    x.prototype.getBuffer = function() {
        for (var g = this.bufferedRequest, S = []; g;) S.push(g), g = g.next;
        return S
    }, (function() {
        try {
            Object.defineProperty(x.prototype, "buffer", {
                get: e.deprecate(function() {
                    return this.getBuffer()
                }, "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
            })
        } catch {}
    })();
    var B;
    typeof Symbol == "function" && Symbol.hasInstance && typeof Function.prototype[Symbol.hasInstance] == "function" ? (B = Function.prototype[Symbol.hasInstance], Object.defineProperty(E, Symbol.hasInstance, {
        value: function(v) {
            return B.call(this, v) ? !0 : this !== E ? !1 : v && v._writableState instanceof x
        }
    })) : B = function(v) {
        return v instanceof this
    };

    function E(v) {
        if (n = n || require_stream_duplex(), !B.call(E, this) && !(this instanceof n)) return new E(v);
        this._writableState = new x(v, this), this.writable = !0, v && (typeof v.write == "function" && (this._write = v.write), typeof v.writev == "function" && (this._writev = v.writev), typeof v.destroy == "function" && (this._destroy = v.destroy), typeof v.final == "function" && (this._final = v.final)), h.call(this)
    }
    E.prototype.pipe = function() {
        this.emit("error", new Error("Cannot pipe, not readable"))
    };

    function C(v, g) {
        var S = new Error("write after end");
        v.emit("error", S), a.nextTick(g, S)
    }

    function $(v, g, S, _) {
        var M = !0,
            d = !1;
        return S === null ? d = new TypeError("May not write null values to stream") : typeof S != "string" && S !== void 0 && !g.objectMode && (d = new TypeError("Invalid non-string/buffer chunk")), d && (v.emit("error", d), a.nextTick(_, d), M = !1), M
    }
    E.prototype.write = function(v, g, S) {
        var _ = this._writableState,
            M = !1,
            d = !_.objectMode && f(v);
        return d && !c.isBuffer(v) && (v = p(v)), typeof g == "function" && (S = g, g = null), d ? g = "buffer" : g || (g = _.defaultEncoding), typeof S != "function" && (S = w), _.ended ? C(this, S) : (d || $(this, _, v, S)) && (_.pendingcb++, M = D(this, _, d, v, g, S)), M
    }, E.prototype.cork = function() {
        var v = this._writableState;
        v.corked++
    }, E.prototype.uncork = function() {
        var v = this._writableState;
        v.corked && (v.corked--, !v.writing && !v.corked && !v.bufferProcessing && v.bufferedRequest && Q(this, v))
    }, E.prototype.setDefaultEncoding = function(g) {
        if (typeof g == "string" && (g = g.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((g + "").toLowerCase()) > -1)) throw new TypeError("Unknown encoding: " + g);
        return this._writableState.defaultEncoding = g, this
    };

    function I(v, g, S) {
        return !v.objectMode && v.decodeStrings !== !1 && typeof g == "string" && (g = c.from(g, S)), g
    }
    Object.defineProperty(E.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function D(v, g, S, _, M, d) {
        if (!S) {
            var A = I(g, _, M);
            _ !== A && (S = !0, M = "buffer", _ = A)
        }
        var z = g.objectMode ? 1 : _.length;
        g.length += z;
        var U = g.length < g.highWaterMark;
        if (U || (g.needDrain = !0), g.writing || g.corked) {
            var X = g.lastBufferedRequest;
            g.lastBufferedRequest = {
                chunk: _,
                encoding: M,
                isBuf: S,
                callback: d,
                next: null
            }, X ? X.next = g.lastBufferedRequest : g.bufferedRequest = g.lastBufferedRequest, g.bufferedRequestCount += 1
        } else j(v, g, !1, z, _, M, d);
        return U
    }

    function j(v, g, S, _, M, d, A) {
        g.writelen = _, g.writecb = A, g.writing = !0, g.sync = !0, S ? v._writev(M, g.onwrite) : v._write(M, d, g.onwrite), g.sync = !1
    }

    function O(v, g, S, _, M) {
        --g.pendingcb, S ? (a.nextTick(M, _), a.nextTick(t, v, g), v._writableState.errorEmitted = !0, v.emit("error", _)) : (M(_), v._writableState.errorEmitted = !0, v.emit("error", _), t(v, g))
    }

    function L(v) {
        v.writing = !1, v.writecb = null, v.length -= v.writelen, v.writelen = 0
    }

    function G(v, g) {
        var S = v._writableState,
            _ = S.sync,
            M = S.writecb;
        if (L(S), g) O(v, S, _, g, M);
        else {
            var d = P(S);
            !d && !S.corked && !S.bufferProcessing && S.bufferedRequest && Q(v, S), _ ? i(V, v, S, d, M) : V(v, S, d, M)
        }
    }

    function V(v, g, S, _) {
        S || K(v, g), g.pendingcb--, _(), t(v, g)
    }

    function K(v, g) {
        g.length === 0 && g.needDrain && (g.needDrain = !1, v.emit("drain"))
    }

    function Q(v, g) {
        g.bufferProcessing = !0;
        var S = g.bufferedRequest;
        if (v._writev && S && S.next) {
            var _ = g.bufferedRequestCount,
                M = new Array(_),
                d = g.corkedRequestsFree;
            d.entry = S;
            for (var A = 0, z = !0; S;) M[A] = S, S.isBuf || (z = !1), S = S.next, A += 1;
            M.allBuffers = z, j(v, g, !0, g.length, M, "", d.finish), g.pendingcb++, g.lastBufferedRequest = null, d.next ? (g.corkedRequestsFree = d.next, d.next = null) : g.corkedRequestsFree = new r(g), g.bufferedRequestCount = 0
        } else {
            for (; S;) {
                var U = S.chunk,
                    X = S.encoding,
                    R = S.callback,
                    k = g.objectMode ? 1 : U.length;
                if (j(v, g, !1, k, U, X, R), S = S.next, g.bufferedRequestCount--, g.writing) break
            }
            S === null && (g.lastBufferedRequest = null)
        }
        g.bufferedRequest = S, g.bufferProcessing = !1
    }
    E.prototype._write = function(v, g, S) {
        S(new Error("_write() is not implemented"))
    }, E.prototype._writev = null, E.prototype.end = function(v, g, S) {
        var _ = this._writableState;
        typeof v == "function" ? (S = v, v = null, g = null) : typeof g == "function" && (S = g, g = null), v != null && this.write(v, g), _.corked && (_.corked = 1, this.uncork()), _.ending || u(this, _, S)
    };

    function P(v) {
        return v.ending && v.length === 0 && v.bufferedRequest === null && !v.finished && !v.writing
    }

    function q(v, g) {
        v._final(function(S) {
            g.pendingcb--, S && v.emit("error", S), g.prefinished = !0, v.emit("prefinish"), t(v, g)
        })
    }

    function b(v, g) {
        !g.prefinished && !g.finalCalled && (typeof v._final == "function" ? (g.pendingcb++, g.finalCalled = !0, a.nextTick(q, v, g)) : (g.prefinished = !0, v.emit("prefinish")))
    }

    function t(v, g) {
        var S = P(g);
        return S && (b(v, g), g.pendingcb === 0 && (g.finished = !0, v.emit("finish"))), S
    }

    function u(v, g, S) {
        g.ending = !0, t(v, g), S && (g.finished ? a.nextTick(S) : v.once("finish", S)), g.ended = !0, v.writable = !1
    }

    function y(v, g, S) {
        var _ = v.entry;
        for (v.entry = null; _;) {
            var M = _.callback;
            g.pendingcb--, M(S), _ = _.next
        }
        g.corkedRequestsFree.next = v
    }
    return Object.defineProperty(E.prototype, "destroyed", {
        get: function() {
            return this._writableState === void 0 ? !1 : this._writableState.destroyed
        },
        set: function(v) {
            this._writableState && (this._writableState.destroyed = v)
        }
    }), E.prototype.destroy = m.destroy, E.prototype._undestroy = m.undestroy, E.prototype._destroy = function(v, g) {
        this.end(), g(v)
    }, _stream_writable
}
var _stream_duplex, hasRequired_stream_duplex;

function require_stream_duplex() {
    if (hasRequired_stream_duplex) return _stream_duplex;
    hasRequired_stream_duplex = 1;
    var a = requireProcessNextickArgs(),
        r = Object.keys || function(m) {
            var w = [];
            for (var x in m) w.push(x);
            return w
        };
    _stream_duplex = l;
    var i = Object.create(requireUtil$2());
    i.inherits = requireInherits_browser();
    var n = require_stream_readable(),
        s = require_stream_writable();
    i.inherits(l, n);
    for (var e = r(s.prototype), h = 0; h < e.length; h++) {
        var c = e[h];
        l.prototype[c] || (l.prototype[c] = s.prototype[c])
    }

    function l(m) {
        if (!(this instanceof l)) return new l(m);
        n.call(this, m), s.call(this, m), m && m.readable === !1 && (this.readable = !1), m && m.writable === !1 && (this.writable = !1), this.allowHalfOpen = !0, m && m.allowHalfOpen === !1 && (this.allowHalfOpen = !1), this.once("end", p)
    }
    Object.defineProperty(l.prototype, "writableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._writableState.highWaterMark
        }
    });

    function p() {
        this.allowHalfOpen || this._writableState.ended || a.nextTick(f, this)
    }

    function f(m) {
        m.end()
    }
    return Object.defineProperty(l.prototype, "destroyed", {
        get: function() {
            return this._readableState === void 0 || this._writableState === void 0 ? !1 : this._readableState.destroyed && this._writableState.destroyed
        },
        set: function(m) {
            this._readableState === void 0 || this._writableState === void 0 || (this._readableState.destroyed = m, this._writableState.destroyed = m)
        }
    }), l.prototype._destroy = function(m, w) {
        this.push(null), this.end(), a.nextTick(w, m)
    }, _stream_duplex
}
var _stream_readable, hasRequired_stream_readable;

function require_stream_readable() {
    if (hasRequired_stream_readable) return _stream_readable;
    hasRequired_stream_readable = 1;
    var a = requireProcessNextickArgs();
    _stream_readable = I;
    var r = requireIsarray(),
        i;
    I.ReadableState = $, requireEvents().EventEmitter;
    var n = function(R, k) {
            return R.listeners(k).length
        },
        s = requireStreamBrowser(),
        e = requireSafeBuffer().Buffer,
        h = (typeof commonjsGlobal < "u" ? commonjsGlobal : typeof window < "u" ? window : typeof self < "u" ? self : {}).Uint8Array || function() {};

    function c(R) {
        return e.from(R)
    }

    function l(R) {
        return e.isBuffer(R) || R instanceof h
    }
    var p = Object.create(requireUtil$2());
    p.inherits = requireInherits_browser();
    var f = requireUtil$1(),
        m = void 0;
    f && f.debuglog ? m = f.debuglog("stream") : m = function() {};
    var w = requireBufferList(),
        x = requireDestroy(),
        B;
    p.inherits(I, s);
    var E = ["error", "close", "destroy", "pause", "resume"];

    function C(R, k, N) {
        if (typeof R.prependListener == "function") return R.prependListener(k, N);
        !R._events || !R._events[k] ? R.on(k, N) : r(R._events[k]) ? R._events[k].unshift(N) : R._events[k] = [N, R._events[k]]
    }

    function $(R, k) {
        i = i || require_stream_duplex(), R = R || {};
        var N = k instanceof i;
        this.objectMode = !!R.objectMode, N && (this.objectMode = this.objectMode || !!R.readableObjectMode);
        var W = R.highWaterMark,
            J = R.readableHighWaterMark,
            H = this.objectMode ? 16 : 16 * 1024;
        W || W === 0 ? this.highWaterMark = W : N && (J || J === 0) ? this.highWaterMark = J : this.highWaterMark = H, this.highWaterMark = Math.floor(this.highWaterMark), this.buffer = new w, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.destroyed = !1, this.defaultEncoding = R.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, R.encoding && (B || (B = requireString_decoder().StringDecoder), this.decoder = new B(R.encoding), this.encoding = R.encoding)
    }

    function I(R) {
        if (i = i || require_stream_duplex(), !(this instanceof I)) return new I(R);
        this._readableState = new $(R, this), this.readable = !0, R && (typeof R.read == "function" && (this._read = R.read), typeof R.destroy == "function" && (this._destroy = R.destroy)), s.call(this)
    }
    Object.defineProperty(I.prototype, "destroyed", {
        get: function() {
            return this._readableState === void 0 ? !1 : this._readableState.destroyed
        },
        set: function(R) {
            this._readableState && (this._readableState.destroyed = R)
        }
    }), I.prototype.destroy = x.destroy, I.prototype._undestroy = x.undestroy, I.prototype._destroy = function(R, k) {
        this.push(null), k(R)
    }, I.prototype.push = function(R, k) {
        var N = this._readableState,
            W;
        return N.objectMode ? W = !0 : typeof R == "string" && (k = k || N.defaultEncoding, k !== N.encoding && (R = e.from(R, k), k = ""), W = !0), D(this, R, k, !1, W)
    }, I.prototype.unshift = function(R) {
        return D(this, R, null, !0, !1)
    };

    function D(R, k, N, W, J) {
        var H = R._readableState;
        if (k === null) H.reading = !1, Q(R, H);
        else {
            var Y;
            J || (Y = O(H, k)), Y ? R.emit("error", Y) : H.objectMode || k && k.length > 0 ? (typeof k != "string" && !H.objectMode && Object.getPrototypeOf(k) !== e.prototype && (k = c(k)), W ? H.endEmitted ? R.emit("error", new Error("stream.unshift() after end event")) : j(R, H, k, !0) : H.ended ? R.emit("error", new Error("stream.push() after EOF")) : (H.reading = !1, H.decoder && !N ? (k = H.decoder.write(k), H.objectMode || k.length !== 0 ? j(R, H, k, !1) : b(R, H)) : j(R, H, k, !1))) : W || (H.reading = !1)
        }
        return L(H)
    }

    function j(R, k, N, W) {
        k.flowing && k.length === 0 && !k.sync ? (R.emit("data", N), R.read(0)) : (k.length += k.objectMode ? 1 : N.length, W ? k.buffer.unshift(N) : k.buffer.push(N), k.needReadable && P(R)), b(R, k)
    }

    function O(R, k) {
        var N;
        return !l(k) && typeof k != "string" && k !== void 0 && !R.objectMode && (N = new TypeError("Invalid non-string/buffer chunk")), N
    }

    function L(R) {
        return !R.ended && (R.needReadable || R.length < R.highWaterMark || R.length === 0)
    }
    I.prototype.isPaused = function() {
        return this._readableState.flowing === !1
    }, I.prototype.setEncoding = function(R) {
        return B || (B = requireString_decoder().StringDecoder), this._readableState.decoder = new B(R), this._readableState.encoding = R, this
    };
    var G = 8388608;

    function V(R) {
        return R >= G ? R = G : (R--, R |= R >>> 1, R |= R >>> 2, R |= R >>> 4, R |= R >>> 8, R |= R >>> 16, R++), R
    }

    function K(R, k) {
        return R <= 0 || k.length === 0 && k.ended ? 0 : k.objectMode ? 1 : R !== R ? k.flowing && k.length ? k.buffer.head.data.length : k.length : (R > k.highWaterMark && (k.highWaterMark = V(R)), R <= k.length ? R : k.ended ? k.length : (k.needReadable = !0, 0))
    }
    I.prototype.read = function(R) {
        m("read", R), R = parseInt(R, 10);
        var k = this._readableState,
            N = R;
        if (R !== 0 && (k.emittedReadable = !1), R === 0 && k.needReadable && (k.length >= k.highWaterMark || k.ended)) return m("read: emitReadable", k.length, k.ended), k.length === 0 && k.ended ? z(this) : P(this), null;
        if (R = K(R, k), R === 0 && k.ended) return k.length === 0 && z(this), null;
        var W = k.needReadable;
        m("need readable", W), (k.length === 0 || k.length - R < k.highWaterMark) && (W = !0, m("length less than watermark", W)), k.ended || k.reading ? (W = !1, m("reading or ended", W)) : W && (m("do read"), k.reading = !0, k.sync = !0, k.length === 0 && (k.needReadable = !0), this._read(k.highWaterMark), k.sync = !1, k.reading || (R = K(N, k)));
        var J;
        return R > 0 ? J = _(R, k) : J = null, J === null ? (k.needReadable = !0, R = 0) : k.length -= R, k.length === 0 && (k.ended || (k.needReadable = !0), N !== R && k.ended && z(this)), J !== null && this.emit("data", J), J
    };

    function Q(R, k) {
        if (!k.ended) {
            if (k.decoder) {
                var N = k.decoder.end();
                N && N.length && (k.buffer.push(N), k.length += k.objectMode ? 1 : N.length)
            }
            k.ended = !0, P(R)
        }
    }

    function P(R) {
        var k = R._readableState;
        k.needReadable = !1, k.emittedReadable || (m("emitReadable", k.flowing), k.emittedReadable = !0, k.sync ? a.nextTick(q, R) : q(R))
    }

    function q(R) {
        m("emit readable"), R.emit("readable"), S(R)
    }

    function b(R, k) {
        k.readingMore || (k.readingMore = !0, a.nextTick(t, R, k))
    }

    function t(R, k) {
        for (var N = k.length; !k.reading && !k.flowing && !k.ended && k.length < k.highWaterMark && (m("maybeReadMore read 0"), R.read(0), N !== k.length);) N = k.length;
        k.readingMore = !1
    }
    I.prototype._read = function(R) {
        this.emit("error", new Error("_read() is not implemented"))
    }, I.prototype.pipe = function(R, k) {
        var N = this,
            W = this._readableState;
        switch (W.pipesCount) {
            case 0:
                W.pipes = R;
                break;
            case 1:
                W.pipes = [W.pipes, R];
                break;
            default:
                W.pipes.push(R);
                break
        }
        W.pipesCount += 1, m("pipe count=%d opts=%j", W.pipesCount, k);
        var J = (!k || k.end !== !1) && R !== process$1.stdout && R !== process$1.stderr,
            H = J ? ne : ae;
        W.endEmitted ? a.nextTick(H) : N.once("end", H), R.on("unpipe", Y);

        function Y(ee, De) {
            m("onunpipe"), ee === N && De && De.hasUnpiped === !1 && (De.hasUnpiped = !0, ye())
        }

        function ne() {
            m("onend"), R.end()
        }
        var re = u(N);
        R.on("drain", re);
        var Pe = !1;

        function ye() {
            m("cleanup"), R.removeListener("close", Z), R.removeListener("finish", _e), R.removeListener("drain", re), R.removeListener("error", me), R.removeListener("unpipe", Y), N.removeListener("end", ne), N.removeListener("end", ae), N.removeListener("data", je), Pe = !0, W.awaitDrain && (!R._writableState || R._writableState.needDrain) && re()
        }
        var te = !1;
        N.on("data", je);

        function je(ee) {
            m("ondata"), te = !1;
            var De = R.write(ee);
            De === !1 && !te && ((W.pipesCount === 1 && W.pipes === R || W.pipesCount > 1 && X(W.pipes, R) !== -1) && !Pe && (m("false write response, pause", W.awaitDrain), W.awaitDrain++, te = !0), N.pause())
        }

        function me(ee) {
            m("onerror", ee), ae(), R.removeListener("error", me), n(R, "error") === 0 && R.emit("error", ee)
        }
        C(R, "error", me);

        function Z() {
            R.removeListener("finish", _e), ae()
        }
        R.once("close", Z);

        function _e() {
            m("onfinish"), R.removeListener("close", Z), ae()
        }
        R.once("finish", _e);

        function ae() {
            m("unpipe"), N.unpipe(R)
        }
        return R.emit("pipe", N), W.flowing || (m("pipe resume"), N.resume()), R
    };

    function u(R) {
        return function() {
            var k = R._readableState;
            m("pipeOnDrain", k.awaitDrain), k.awaitDrain && k.awaitDrain--, k.awaitDrain === 0 && n(R, "data") && (k.flowing = !0, S(R))
        }
    }
    I.prototype.unpipe = function(R) {
        var k = this._readableState,
            N = {
                hasUnpiped: !1
            };
        if (k.pipesCount === 0) return this;
        if (k.pipesCount === 1) return R && R !== k.pipes ? this : (R || (R = k.pipes), k.pipes = null, k.pipesCount = 0, k.flowing = !1, R && R.emit("unpipe", this, N), this);
        if (!R) {
            var W = k.pipes,
                J = k.pipesCount;
            k.pipes = null, k.pipesCount = 0, k.flowing = !1;
            for (var H = 0; H < J; H++) W[H].emit("unpipe", this, {
                hasUnpiped: !1
            });
            return this
        }
        var Y = X(k.pipes, R);
        return Y === -1 ? this : (k.pipes.splice(Y, 1), k.pipesCount -= 1, k.pipesCount === 1 && (k.pipes = k.pipes[0]), R.emit("unpipe", this, N), this)
    }, I.prototype.on = function(R, k) {
        var N = s.prototype.on.call(this, R, k);
        if (R === "data") this._readableState.flowing !== !1 && this.resume();
        else if (R === "readable") {
            var W = this._readableState;
            !W.endEmitted && !W.readableListening && (W.readableListening = W.needReadable = !0, W.emittedReadable = !1, W.reading ? W.length && P(this) : a.nextTick(y, this))
        }
        return N
    }, I.prototype.addListener = I.prototype.on;

    function y(R) {
        m("readable nexttick read 0"), R.read(0)
    }
    I.prototype.resume = function() {
        var R = this._readableState;
        return R.flowing || (m("resume"), R.flowing = !0, v(this, R)), this
    };

    function v(R, k) {
        k.resumeScheduled || (k.resumeScheduled = !0, a.nextTick(g, R, k))
    }

    function g(R, k) {
        k.reading || (m("resume read 0"), R.read(0)), k.resumeScheduled = !1, k.awaitDrain = 0, R.emit("resume"), S(R), k.flowing && !k.reading && R.read(0)
    }
    I.prototype.pause = function() {
        return m("call pause flowing=%j", this._readableState.flowing), this._readableState.flowing !== !1 && (m("pause"), this._readableState.flowing = !1, this.emit("pause")), this
    };

    function S(R) {
        var k = R._readableState;
        for (m("flow", k.flowing); k.flowing && R.read() !== null;);
    }
    I.prototype.wrap = function(R) {
        var k = this,
            N = this._readableState,
            W = !1;
        R.on("end", function() {
            if (m("wrapped end"), N.decoder && !N.ended) {
                var Y = N.decoder.end();
                Y && Y.length && k.push(Y)
            }
            k.push(null)
        }), R.on("data", function(Y) {
            if (m("wrapped data"), N.decoder && (Y = N.decoder.write(Y)), !(N.objectMode && Y == null) && !(!N.objectMode && (!Y || !Y.length))) {
                var ne = k.push(Y);
                ne || (W = !0, R.pause())
            }
        });
        for (var J in R) this[J] === void 0 && typeof R[J] == "function" && (this[J] = (function(Y) {
            return function() {
                return R[Y].apply(R, arguments)
            }
        })(J));
        for (var H = 0; H < E.length; H++) R.on(E[H], this.emit.bind(this, E[H]));
        return this._read = function(Y) {
            m("wrapped _read", Y), W && (W = !1, R.resume())
        }, this
    }, Object.defineProperty(I.prototype, "readableHighWaterMark", {
        enumerable: !1,
        get: function() {
            return this._readableState.highWaterMark
        }
    }), I._fromList = _;

    function _(R, k) {
        if (k.length === 0) return null;
        var N;
        return k.objectMode ? N = k.buffer.shift() : !R || R >= k.length ? (k.decoder ? N = k.buffer.join("") : k.buffer.length === 1 ? N = k.buffer.head.data : N = k.buffer.concat(k.length), k.buffer.clear()) : N = M(R, k.buffer, k.decoder), N
    }

    function M(R, k, N) {
        var W;
        return R < k.head.data.length ? (W = k.head.data.slice(0, R), k.head.data = k.head.data.slice(R)) : R === k.head.data.length ? W = k.shift() : W = N ? d(R, k) : A(R, k), W
    }

    function d(R, k) {
        var N = k.head,
            W = 1,
            J = N.data;
        for (R -= J.length; N = N.next;) {
            var H = N.data,
                Y = R > H.length ? H.length : R;
            if (Y === H.length ? J += H : J += H.slice(0, R), R -= Y, R === 0) {
                Y === H.length ? (++W, N.next ? k.head = N.next : k.head = k.tail = null) : (k.head = N, N.data = H.slice(Y));
                break
            }++W
        }
        return k.length -= W, J
    }

    function A(R, k) {
        var N = e.allocUnsafe(R),
            W = k.head,
            J = 1;
        for (W.data.copy(N), R -= W.data.length; W = W.next;) {
            var H = W.data,
                Y = R > H.length ? H.length : R;
            if (H.copy(N, N.length - R, 0, Y), R -= Y, R === 0) {
                Y === H.length ? (++J, W.next ? k.head = W.next : k.head = k.tail = null) : (k.head = W, W.data = H.slice(Y));
                break
            }++J
        }
        return k.length -= J, N
    }

    function z(R) {
        var k = R._readableState;
        if (k.length > 0) throw new Error('"endReadable()" called on non-empty stream');
        k.endEmitted || (k.ended = !0, a.nextTick(U, k, R))
    }

    function U(R, k) {
        !R.endEmitted && R.length === 0 && (R.endEmitted = !0, k.readable = !1, k.emit("end"))
    }

    function X(R, k) {
        for (var N = 0, W = R.length; N < W; N++)
            if (R[N] === k) return N;
        return -1
    }
    return _stream_readable
}
var _stream_transform, hasRequired_stream_transform;

function require_stream_transform() {
    if (hasRequired_stream_transform) return _stream_transform;
    hasRequired_stream_transform = 1, _stream_transform = n;
    var a = require_stream_duplex(),
        r = Object.create(requireUtil$2());
    r.inherits = requireInherits_browser(), r.inherits(n, a);

    function i(h, c) {
        var l = this._transformState;
        l.transforming = !1;
        var p = l.writecb;
        if (!p) return this.emit("error", new Error("write callback called multiple times"));
        l.writechunk = null, l.writecb = null, c != null && this.push(c), p(h);
        var f = this._readableState;
        f.reading = !1, (f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark)
    }

    function n(h) {
        if (!(this instanceof n)) return new n(h);
        a.call(this, h), this._transformState = {
            afterTransform: i.bind(this),
            needTransform: !1,
            transforming: !1,
            writecb: null,
            writechunk: null,
            writeencoding: null
        }, this._readableState.needReadable = !0, this._readableState.sync = !1, h && (typeof h.transform == "function" && (this._transform = h.transform), typeof h.flush == "function" && (this._flush = h.flush)), this.on("prefinish", s)
    }

    function s() {
        var h = this;
        typeof this._flush == "function" ? this._flush(function(c, l) {
            e(h, c, l)
        }) : e(this, null, null)
    }
    n.prototype.push = function(h, c) {
        return this._transformState.needTransform = !1, a.prototype.push.call(this, h, c)
    }, n.prototype._transform = function(h, c, l) {
        throw new Error("_transform() is not implemented")
    }, n.prototype._write = function(h, c, l) {
        var p = this._transformState;
        if (p.writecb = l, p.writechunk = h, p.writeencoding = c, !p.transforming) {
            var f = this._readableState;
            (p.needTransform || f.needReadable || f.length < f.highWaterMark) && this._read(f.highWaterMark)
        }
    }, n.prototype._read = function(h) {
        var c = this._transformState;
        c.writechunk !== null && c.writecb && !c.transforming ? (c.transforming = !0, this._transform(c.writechunk, c.writeencoding, c.afterTransform)) : c.needTransform = !0
    }, n.prototype._destroy = function(h, c) {
        var l = this;
        a.prototype._destroy.call(this, h, function(p) {
            c(p), l.emit("close")
        })
    };

    function e(h, c, l) {
        if (c) return h.emit("error", c);
        if (l != null && h.push(l), h._writableState.length) throw new Error("Calling transform done when ws.length != 0");
        if (h._transformState.transforming) throw new Error("Calling transform done when still transforming");
        return h.push(null)
    }
    return _stream_transform
}
var _stream_passthrough, hasRequired_stream_passthrough;

function require_stream_passthrough() {
    if (hasRequired_stream_passthrough) return _stream_passthrough;
    hasRequired_stream_passthrough = 1, _stream_passthrough = i;
    var a = require_stream_transform(),
        r = Object.create(requireUtil$2());
    r.inherits = requireInherits_browser(), r.inherits(i, a);

    function i(n) {
        if (!(this instanceof i)) return new i(n);
        a.call(this, n)
    }
    return i.prototype._transform = function(n, s, e) {
        e(null, n)
    }, _stream_passthrough
}
var hasRequiredReadableBrowser$1;

function requireReadableBrowser$1() {
    return hasRequiredReadableBrowser$1 || (hasRequiredReadableBrowser$1 = 1, (function(a, r) {
        r = a.exports = require_stream_readable(), r.Stream = r, r.Readable = r, r.Writable = require_stream_writable(), r.Duplex = require_stream_duplex(), r.Transform = require_stream_transform(), r.PassThrough = require_stream_passthrough()
    })(readableBrowser$1, readableBrowser$1.exports)), readableBrowser$1.exports
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
    return hasRequiredBn$1 || (hasRequiredBn$1 = 1, (function(a) {
        (function(r, i) {
            function n(b, t) {
                if (!b) throw new Error(t || "Assertion failed")
            }

            function s(b, t) {
                b.super_ = t;
                var u = function() {};
                u.prototype = t.prototype, b.prototype = new u, b.prototype.constructor = b
            }

            function e(b, t, u) {
                if (e.isBN(b)) return b;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, b !== null && ((t === "le" || t === "be") && (u = t, t = 10), this._init(b || 0, t || 10, u || "be"))
            }
            typeof r == "object" ? r.exports = e : i.BN = e, e.BN = e, e.wordSize = 26;
            var h;
            try {
                typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = requireDist$1().Buffer
            } catch {}
            e.isBN = function(t) {
                return t instanceof e ? !0 : t !== null && typeof t == "object" && t.constructor.wordSize === e.wordSize && Array.isArray(t.words)
            }, e.max = function(t, u) {
                return t.cmp(u) > 0 ? t : u
            }, e.min = function(t, u) {
                return t.cmp(u) < 0 ? t : u
            }, e.prototype._init = function(t, u, y) {
                if (typeof t == "number") return this._initNumber(t, u, y);
                if (typeof t == "object") return this._initArray(t, u, y);
                u === "hex" && (u = 16), n(u === (u | 0) && u >= 2 && u <= 36), t = t.toString().replace(/\s+/g, "");
                var v = 0;
                t[0] === "-" && (v++, this.negative = 1), v < t.length && (u === 16 ? this._parseHex(t, v, y) : (this._parseBase(t, u, v), y === "le" && this._initArray(this.toArray(), u, y)))
            }, e.prototype._initNumber = function(t, u, y) {
                t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [t & 67108863, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [t & 67108863, t / 67108864 & 67108863, 1], this.length = 3), y === "le" && this._initArray(this.toArray(), u, y)
            }, e.prototype._initArray = function(t, u, y) {
                if (n(typeof t.length == "number"), t.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                for (var v = 0; v < this.length; v++) this.words[v] = 0;
                var g, S, _ = 0;
                if (y === "be")
                    for (v = t.length - 1, g = 0; v >= 0; v -= 3) S = t[v] | t[v - 1] << 8 | t[v - 2] << 16, this.words[g] |= S << _ & 67108863, this.words[g + 1] = S >>> 26 - _ & 67108863, _ += 24, _ >= 26 && (_ -= 26, g++);
                else if (y === "le")
                    for (v = 0, g = 0; v < t.length; v += 3) S = t[v] | t[v + 1] << 8 | t[v + 2] << 16, this.words[g] |= S << _ & 67108863, this.words[g + 1] = S >>> 26 - _ & 67108863, _ += 24, _ >= 26 && (_ -= 26, g++);
                return this._strip()
            };

            function c(b, t) {
                var u = b.charCodeAt(t);
                if (u >= 48 && u <= 57) return u - 48;
                if (u >= 65 && u <= 70) return u - 55;
                if (u >= 97 && u <= 102) return u - 87;
                n(!1, "Invalid character in " + b)
            }

            function l(b, t, u) {
                var y = c(b, u);
                return u - 1 >= t && (y |= c(b, u - 1) << 4), y
            }
            e.prototype._parseHex = function(t, u, y) {
                this.length = Math.ceil((t.length - u) / 6), this.words = new Array(this.length);
                for (var v = 0; v < this.length; v++) this.words[v] = 0;
                var g = 0,
                    S = 0,
                    _;
                if (y === "be")
                    for (v = t.length - 1; v >= u; v -= 2) _ = l(t, u, v) << g, this.words[S] |= _ & 67108863, g >= 18 ? (g -= 18, S += 1, this.words[S] |= _ >>> 26) : g += 8;
                else {
                    var M = t.length - u;
                    for (v = M % 2 === 0 ? u + 1 : u; v < t.length; v += 2) _ = l(t, u, v) << g, this.words[S] |= _ & 67108863, g >= 18 ? (g -= 18, S += 1, this.words[S] |= _ >>> 26) : g += 8
                }
                this._strip()
            };

            function p(b, t, u, y) {
                for (var v = 0, g = 0, S = Math.min(b.length, u), _ = t; _ < S; _++) {
                    var M = b.charCodeAt(_) - 48;
                    v *= y, M >= 49 ? g = M - 49 + 10 : M >= 17 ? g = M - 17 + 10 : g = M, n(M >= 0 && g < y, "Invalid character"), v += g
                }
                return v
            }
            e.prototype._parseBase = function(t, u, y) {
                this.words = [0], this.length = 1;
                for (var v = 0, g = 1; g <= 67108863; g *= u) v++;
                v--, g = g / u | 0;
                for (var S = t.length - y, _ = S % v, M = Math.min(S, S - _) + y, d = 0, A = y; A < M; A += v) d = p(t, A, A + v, u), this.imuln(g), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
                if (_ !== 0) {
                    var z = 1;
                    for (d = p(t, A, t.length, u), A = 0; A < _; A++) z *= u;
                    this.imuln(z), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d)
                }
                this._strip()
            }, e.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for (var u = 0; u < this.length; u++) t.words[u] = this.words[u];
                t.length = this.length, t.negative = this.negative, t.red = this.red
            };

            function f(b, t) {
                b.words = t.words, b.length = t.length, b.negative = t.negative, b.red = t.red
            }
            if (e.prototype._move = function(t) {
                    f(t, this)
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
                e.prototype[Symbol.for("nodejs.util.inspect.custom")] = m
            } catch {
                e.prototype.inspect = m
            } else e.prototype.inspect = m;

            function m() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var w = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                x = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                B = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            e.prototype.toString = function(t, u) {
                t = t || 10, u = u | 0 || 1;
                var y;
                if (t === 16 || t === "hex") {
                    y = "";
                    for (var v = 0, g = 0, S = 0; S < this.length; S++) {
                        var _ = this.words[S],
                            M = ((_ << v | g) & 16777215).toString(16);
                        g = _ >>> 24 - v & 16777215, v += 2, v >= 26 && (v -= 26, S--), g !== 0 || S !== this.length - 1 ? y = w[6 - M.length] + M + y : y = M + y
                    }
                    for (g !== 0 && (y = g.toString(16) + y); y.length % u !== 0;) y = "0" + y;
                    return this.negative !== 0 && (y = "-" + y), y
                }
                if (t === (t | 0) && t >= 2 && t <= 36) {
                    var d = x[t],
                        A = B[t];
                    y = "";
                    var z = this.clone();
                    for (z.negative = 0; !z.isZero();) {
                        var U = z.modrn(A).toString(t);
                        z = z.idivn(A), z.isZero() ? y = U + y : y = w[d - U.length] + U + y
                    }
                    for (this.isZero() && (y = "0" + y); y.length % u !== 0;) y = "0" + y;
                    return this.negative !== 0 && (y = "-" + y), y
                }
                n(!1, "Base should be between 2 and 36")
            }, e.prototype.toNumber = function() {
                var t = this.words[0];
                return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t
            }, e.prototype.toJSON = function() {
                return this.toString(16, 2)
            }, h && (e.prototype.toBuffer = function(t, u) {
                return this.toArrayLike(h, t, u)
            }), e.prototype.toArray = function(t, u) {
                return this.toArrayLike(Array, t, u)
            };
            var E = function(t, u) {
                return t.allocUnsafe ? t.allocUnsafe(u) : new t(u)
            };
            e.prototype.toArrayLike = function(t, u, y) {
                this._strip();
                var v = this.byteLength(),
                    g = y || Math.max(1, v);
                n(v <= g, "byte array longer than desired length"), n(g > 0, "Requested array length <= 0");
                var S = E(t, g),
                    _ = u === "le" ? "LE" : "BE";
                return this["_toArrayLike" + _](S, v), S
            }, e.prototype._toArrayLikeLE = function(t, u) {
                for (var y = 0, v = 0, g = 0, S = 0; g < this.length; g++) {
                    var _ = this.words[g] << S | v;
                    t[y++] = _ & 255, y < t.length && (t[y++] = _ >> 8 & 255), y < t.length && (t[y++] = _ >> 16 & 255), S === 6 ? (y < t.length && (t[y++] = _ >> 24 & 255), v = 0, S = 0) : (v = _ >>> 24, S += 2)
                }
                if (y < t.length)
                    for (t[y++] = v; y < t.length;) t[y++] = 0
            }, e.prototype._toArrayLikeBE = function(t, u) {
                for (var y = t.length - 1, v = 0, g = 0, S = 0; g < this.length; g++) {
                    var _ = this.words[g] << S | v;
                    t[y--] = _ & 255, y >= 0 && (t[y--] = _ >> 8 & 255), y >= 0 && (t[y--] = _ >> 16 & 255), S === 6 ? (y >= 0 && (t[y--] = _ >> 24 & 255), v = 0, S = 0) : (v = _ >>> 24, S += 2)
                }
                if (y >= 0)
                    for (t[y--] = v; y >= 0;) t[y--] = 0
            }, Math.clz32 ? e.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            } : e.prototype._countBits = function(t) {
                var u = t,
                    y = 0;
                return u >= 4096 && (y += 13, u >>>= 13), u >= 64 && (y += 7, u >>>= 7), u >= 8 && (y += 4, u >>>= 4), u >= 2 && (y += 2, u >>>= 2), y + u
            }, e.prototype._zeroBits = function(t) {
                if (t === 0) return 26;
                var u = t,
                    y = 0;
                return (u & 8191) === 0 && (y += 13, u >>>= 13), (u & 127) === 0 && (y += 7, u >>>= 7), (u & 15) === 0 && (y += 4, u >>>= 4), (u & 3) === 0 && (y += 2, u >>>= 2), (u & 1) === 0 && y++, y
            }, e.prototype.bitLength = function() {
                var t = this.words[this.length - 1],
                    u = this._countBits(t);
                return (this.length - 1) * 26 + u
            };

            function C(b) {
                for (var t = new Array(b.bitLength()), u = 0; u < t.length; u++) {
                    var y = u / 26 | 0,
                        v = u % 26;
                    t[u] = b.words[y] >>> v & 1
                }
                return t
            }
            e.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var t = 0, u = 0; u < this.length; u++) {
                    var y = this._zeroBits(this.words[u]);
                    if (t += y, y !== 26) break
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
                for (var u = 0; u < t.length; u++) this.words[u] = this.words[u] | t.words[u];
                return this._strip()
            }, e.prototype.ior = function(t) {
                return n((this.negative | t.negative) === 0), this.iuor(t)
            }, e.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }, e.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }, e.prototype.iuand = function(t) {
                var u;
                this.length > t.length ? u = t : u = this;
                for (var y = 0; y < u.length; y++) this.words[y] = this.words[y] & t.words[y];
                return this.length = u.length, this._strip()
            }, e.prototype.iand = function(t) {
                return n((this.negative | t.negative) === 0), this.iuand(t)
            }, e.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }, e.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }, e.prototype.iuxor = function(t) {
                var u, y;
                this.length > t.length ? (u = this, y = t) : (u = t, y = this);
                for (var v = 0; v < y.length; v++) this.words[v] = u.words[v] ^ y.words[v];
                if (this !== u)
                    for (; v < u.length; v++) this.words[v] = u.words[v];
                return this.length = u.length, this._strip()
            }, e.prototype.ixor = function(t) {
                return n((this.negative | t.negative) === 0), this.iuxor(t)
            }, e.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }, e.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }, e.prototype.inotn = function(t) {
                n(typeof t == "number" && t >= 0);
                var u = Math.ceil(t / 26) | 0,
                    y = t % 26;
                this._expand(u), y > 0 && u--;
                for (var v = 0; v < u; v++) this.words[v] = ~this.words[v] & 67108863;
                return y > 0 && (this.words[v] = ~this.words[v] & 67108863 >> 26 - y), this._strip()
            }, e.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }, e.prototype.setn = function(t, u) {
                n(typeof t == "number" && t >= 0);
                var y = t / 26 | 0,
                    v = t % 26;
                return this._expand(y + 1), u ? this.words[y] = this.words[y] | 1 << v : this.words[y] = this.words[y] & ~(1 << v), this._strip()
            }, e.prototype.iadd = function(t) {
                var u;
                if (this.negative !== 0 && t.negative === 0) return this.negative = 0, u = this.isub(t), this.negative ^= 1, this._normSign();
                if (this.negative === 0 && t.negative !== 0) return t.negative = 0, u = this.isub(t), t.negative = 1, u._normSign();
                var y, v;
                this.length > t.length ? (y = this, v = t) : (y = t, v = this);
                for (var g = 0, S = 0; S < v.length; S++) u = (y.words[S] | 0) + (v.words[S] | 0) + g, this.words[S] = u & 67108863, g = u >>> 26;
                for (; g !== 0 && S < y.length; S++) u = (y.words[S] | 0) + g, this.words[S] = u & 67108863, g = u >>> 26;
                if (this.length = y.length, g !== 0) this.words[this.length] = g, this.length++;
                else if (y !== this)
                    for (; S < y.length; S++) this.words[S] = y.words[S];
                return this
            }, e.prototype.add = function(t) {
                var u;
                return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, u = this.sub(t), t.negative ^= 1, u) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, u = t.sub(this), this.negative = 1, u) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }, e.prototype.isub = function(t) {
                if (t.negative !== 0) {
                    t.negative = 0;
                    var u = this.iadd(t);
                    return t.negative = 1, u._normSign()
                } else if (this.negative !== 0) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                var y = this.cmp(t);
                if (y === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                var v, g;
                y > 0 ? (v = this, g = t) : (v = t, g = this);
                for (var S = 0, _ = 0; _ < g.length; _++) u = (v.words[_] | 0) - (g.words[_] | 0) + S, S = u >> 26, this.words[_] = u & 67108863;
                for (; S !== 0 && _ < v.length; _++) u = (v.words[_] | 0) + S, S = u >> 26, this.words[_] = u & 67108863;
                if (S === 0 && _ < v.length && v !== this)
                    for (; _ < v.length; _++) this.words[_] = v.words[_];
                return this.length = Math.max(this.length, _), v !== this && (this.negative = 1), this._strip()
            }, e.prototype.sub = function(t) {
                return this.clone().isub(t)
            };

            function $(b, t, u) {
                u.negative = t.negative ^ b.negative;
                var y = b.length + t.length | 0;
                u.length = y, y = y - 1 | 0;
                var v = b.words[0] | 0,
                    g = t.words[0] | 0,
                    S = v * g,
                    _ = S & 67108863,
                    M = S / 67108864 | 0;
                u.words[0] = _;
                for (var d = 1; d < y; d++) {
                    for (var A = M >>> 26, z = M & 67108863, U = Math.min(d, t.length - 1), X = Math.max(0, d - b.length + 1); X <= U; X++) {
                        var R = d - X | 0;
                        v = b.words[R] | 0, g = t.words[X] | 0, S = v * g + z, A += S / 67108864 | 0, z = S & 67108863
                    }
                    u.words[d] = z | 0, M = A | 0
                }
                return M !== 0 ? u.words[d] = M | 0 : u.length--, u._strip()
            }
            var I = function(t, u, y) {
                var v = t.words,
                    g = u.words,
                    S = y.words,
                    _ = 0,
                    M, d, A, z = v[0] | 0,
                    U = z & 8191,
                    X = z >>> 13,
                    R = v[1] | 0,
                    k = R & 8191,
                    N = R >>> 13,
                    W = v[2] | 0,
                    J = W & 8191,
                    H = W >>> 13,
                    Y = v[3] | 0,
                    ne = Y & 8191,
                    re = Y >>> 13,
                    Pe = v[4] | 0,
                    ye = Pe & 8191,
                    te = Pe >>> 13,
                    je = v[5] | 0,
                    me = je & 8191,
                    Z = je >>> 13,
                    _e = v[6] | 0,
                    ae = _e & 8191,
                    ee = _e >>> 13,
                    De = v[7] | 0,
                    ge = De & 8191,
                    ie = De >>> 13,
                    Ne = v[8] | 0,
                    Me = Ne & 8191,
                    fe = Ne >>> 13,
                    Te = v[9] | 0,
                    Se = Te & 8191,
                    se = Te >>> 13,
                    Oe = g[0] | 0,
                    qe = Oe & 8191,
                    oe = Oe >>> 13,
                    Le = g[1] | 0,
                    Be = Le & 8191,
                    ue = Le >>> 13,
                    We = g[2] | 0,
                    Ee = We & 8191,
                    he = We >>> 13,
                    ze = g[3] | 0,
                    Ae = ze & 8191,
                    ce = ze >>> 13,
                    Ue = g[4] | 0,
                    Re = Ue & 8191,
                    de = Ue >>> 13,
                    He = g[5] | 0,
                    ke = He & 8191,
                    le = He >>> 13,
                    Ke = g[6] | 0,
                    Ce = Ke & 8191,
                    pe = Ke >>> 13,
                    Fe = g[7] | 0,
                    Ie = Fe & 8191,
                    ve = Fe >>> 13,
                    Xe = g[8] | 0,
                    $e = Xe & 8191,
                    be = Xe >>> 13,
                    Ge = g[9] | 0,
                    we = Ge & 8191,
                    xe = Ge >>> 13;
                y.negative = t.negative ^ u.negative, y.length = 19, M = Math.imul(U, qe), d = Math.imul(U, oe), d = d + Math.imul(X, qe) | 0, A = Math.imul(X, oe);
                var Ve = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, M = Math.imul(k, qe), d = Math.imul(k, oe), d = d + Math.imul(N, qe) | 0, A = Math.imul(N, oe), M = M + Math.imul(U, Be) | 0, d = d + Math.imul(U, ue) | 0, d = d + Math.imul(X, Be) | 0, A = A + Math.imul(X, ue) | 0;
                var Je = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, M = Math.imul(J, qe), d = Math.imul(J, oe), d = d + Math.imul(H, qe) | 0, A = Math.imul(H, oe), M = M + Math.imul(k, Be) | 0, d = d + Math.imul(k, ue) | 0, d = d + Math.imul(N, Be) | 0, A = A + Math.imul(N, ue) | 0, M = M + Math.imul(U, Ee) | 0, d = d + Math.imul(U, he) | 0, d = d + Math.imul(X, Ee) | 0, A = A + Math.imul(X, he) | 0;
                var Ye = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, M = Math.imul(ne, qe), d = Math.imul(ne, oe), d = d + Math.imul(re, qe) | 0, A = Math.imul(re, oe), M = M + Math.imul(J, Be) | 0, d = d + Math.imul(J, ue) | 0, d = d + Math.imul(H, Be) | 0, A = A + Math.imul(H, ue) | 0, M = M + Math.imul(k, Ee) | 0, d = d + Math.imul(k, he) | 0, d = d + Math.imul(N, Ee) | 0, A = A + Math.imul(N, he) | 0, M = M + Math.imul(U, Ae) | 0, d = d + Math.imul(U, ce) | 0, d = d + Math.imul(X, Ae) | 0, A = A + Math.imul(X, ce) | 0;
                var Qe = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, M = Math.imul(ye, qe), d = Math.imul(ye, oe), d = d + Math.imul(te, qe) | 0, A = Math.imul(te, oe), M = M + Math.imul(ne, Be) | 0, d = d + Math.imul(ne, ue) | 0, d = d + Math.imul(re, Be) | 0, A = A + Math.imul(re, ue) | 0, M = M + Math.imul(J, Ee) | 0, d = d + Math.imul(J, he) | 0, d = d + Math.imul(H, Ee) | 0, A = A + Math.imul(H, he) | 0, M = M + Math.imul(k, Ae) | 0, d = d + Math.imul(k, ce) | 0, d = d + Math.imul(N, Ae) | 0, A = A + Math.imul(N, ce) | 0, M = M + Math.imul(U, Re) | 0, d = d + Math.imul(U, de) | 0, d = d + Math.imul(X, Re) | 0, A = A + Math.imul(X, de) | 0;
                var Ze = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, M = Math.imul(me, qe), d = Math.imul(me, oe), d = d + Math.imul(Z, qe) | 0, A = Math.imul(Z, oe), M = M + Math.imul(ye, Be) | 0, d = d + Math.imul(ye, ue) | 0, d = d + Math.imul(te, Be) | 0, A = A + Math.imul(te, ue) | 0, M = M + Math.imul(ne, Ee) | 0, d = d + Math.imul(ne, he) | 0, d = d + Math.imul(re, Ee) | 0, A = A + Math.imul(re, he) | 0, M = M + Math.imul(J, Ae) | 0, d = d + Math.imul(J, ce) | 0, d = d + Math.imul(H, Ae) | 0, A = A + Math.imul(H, ce) | 0, M = M + Math.imul(k, Re) | 0, d = d + Math.imul(k, de) | 0, d = d + Math.imul(N, Re) | 0, A = A + Math.imul(N, de) | 0, M = M + Math.imul(U, ke) | 0, d = d + Math.imul(U, le) | 0, d = d + Math.imul(X, ke) | 0, A = A + Math.imul(X, le) | 0;
                var er = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, M = Math.imul(ae, qe), d = Math.imul(ae, oe), d = d + Math.imul(ee, qe) | 0, A = Math.imul(ee, oe), M = M + Math.imul(me, Be) | 0, d = d + Math.imul(me, ue) | 0, d = d + Math.imul(Z, Be) | 0, A = A + Math.imul(Z, ue) | 0, M = M + Math.imul(ye, Ee) | 0, d = d + Math.imul(ye, he) | 0, d = d + Math.imul(te, Ee) | 0, A = A + Math.imul(te, he) | 0, M = M + Math.imul(ne, Ae) | 0, d = d + Math.imul(ne, ce) | 0, d = d + Math.imul(re, Ae) | 0, A = A + Math.imul(re, ce) | 0, M = M + Math.imul(J, Re) | 0, d = d + Math.imul(J, de) | 0, d = d + Math.imul(H, Re) | 0, A = A + Math.imul(H, de) | 0, M = M + Math.imul(k, ke) | 0, d = d + Math.imul(k, le) | 0, d = d + Math.imul(N, ke) | 0, A = A + Math.imul(N, le) | 0, M = M + Math.imul(U, Ce) | 0, d = d + Math.imul(U, pe) | 0, d = d + Math.imul(X, Ce) | 0, A = A + Math.imul(X, pe) | 0;
                var rr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, M = Math.imul(ge, qe), d = Math.imul(ge, oe), d = d + Math.imul(ie, qe) | 0, A = Math.imul(ie, oe), M = M + Math.imul(ae, Be) | 0, d = d + Math.imul(ae, ue) | 0, d = d + Math.imul(ee, Be) | 0, A = A + Math.imul(ee, ue) | 0, M = M + Math.imul(me, Ee) | 0, d = d + Math.imul(me, he) | 0, d = d + Math.imul(Z, Ee) | 0, A = A + Math.imul(Z, he) | 0, M = M + Math.imul(ye, Ae) | 0, d = d + Math.imul(ye, ce) | 0, d = d + Math.imul(te, Ae) | 0, A = A + Math.imul(te, ce) | 0, M = M + Math.imul(ne, Re) | 0, d = d + Math.imul(ne, de) | 0, d = d + Math.imul(re, Re) | 0, A = A + Math.imul(re, de) | 0, M = M + Math.imul(J, ke) | 0, d = d + Math.imul(J, le) | 0, d = d + Math.imul(H, ke) | 0, A = A + Math.imul(H, le) | 0, M = M + Math.imul(k, Ce) | 0, d = d + Math.imul(k, pe) | 0, d = d + Math.imul(N, Ce) | 0, A = A + Math.imul(N, pe) | 0, M = M + Math.imul(U, Ie) | 0, d = d + Math.imul(U, ve) | 0, d = d + Math.imul(X, Ie) | 0, A = A + Math.imul(X, ve) | 0;
                var tr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (tr >>> 26) | 0, tr &= 67108863, M = Math.imul(Me, qe), d = Math.imul(Me, oe), d = d + Math.imul(fe, qe) | 0, A = Math.imul(fe, oe), M = M + Math.imul(ge, Be) | 0, d = d + Math.imul(ge, ue) | 0, d = d + Math.imul(ie, Be) | 0, A = A + Math.imul(ie, ue) | 0, M = M + Math.imul(ae, Ee) | 0, d = d + Math.imul(ae, he) | 0, d = d + Math.imul(ee, Ee) | 0, A = A + Math.imul(ee, he) | 0, M = M + Math.imul(me, Ae) | 0, d = d + Math.imul(me, ce) | 0, d = d + Math.imul(Z, Ae) | 0, A = A + Math.imul(Z, ce) | 0, M = M + Math.imul(ye, Re) | 0, d = d + Math.imul(ye, de) | 0, d = d + Math.imul(te, Re) | 0, A = A + Math.imul(te, de) | 0, M = M + Math.imul(ne, ke) | 0, d = d + Math.imul(ne, le) | 0, d = d + Math.imul(re, ke) | 0, A = A + Math.imul(re, le) | 0, M = M + Math.imul(J, Ce) | 0, d = d + Math.imul(J, pe) | 0, d = d + Math.imul(H, Ce) | 0, A = A + Math.imul(H, pe) | 0, M = M + Math.imul(k, Ie) | 0, d = d + Math.imul(k, ve) | 0, d = d + Math.imul(N, Ie) | 0, A = A + Math.imul(N, ve) | 0, M = M + Math.imul(U, $e) | 0, d = d + Math.imul(U, be) | 0, d = d + Math.imul(X, $e) | 0, A = A + Math.imul(X, be) | 0;
                var ir = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, M = Math.imul(Se, qe), d = Math.imul(Se, oe), d = d + Math.imul(se, qe) | 0, A = Math.imul(se, oe), M = M + Math.imul(Me, Be) | 0, d = d + Math.imul(Me, ue) | 0, d = d + Math.imul(fe, Be) | 0, A = A + Math.imul(fe, ue) | 0, M = M + Math.imul(ge, Ee) | 0, d = d + Math.imul(ge, he) | 0, d = d + Math.imul(ie, Ee) | 0, A = A + Math.imul(ie, he) | 0, M = M + Math.imul(ae, Ae) | 0, d = d + Math.imul(ae, ce) | 0, d = d + Math.imul(ee, Ae) | 0, A = A + Math.imul(ee, ce) | 0, M = M + Math.imul(me, Re) | 0, d = d + Math.imul(me, de) | 0, d = d + Math.imul(Z, Re) | 0, A = A + Math.imul(Z, de) | 0, M = M + Math.imul(ye, ke) | 0, d = d + Math.imul(ye, le) | 0, d = d + Math.imul(te, ke) | 0, A = A + Math.imul(te, le) | 0, M = M + Math.imul(ne, Ce) | 0, d = d + Math.imul(ne, pe) | 0, d = d + Math.imul(re, Ce) | 0, A = A + Math.imul(re, pe) | 0, M = M + Math.imul(J, Ie) | 0, d = d + Math.imul(J, ve) | 0, d = d + Math.imul(H, Ie) | 0, A = A + Math.imul(H, ve) | 0, M = M + Math.imul(k, $e) | 0, d = d + Math.imul(k, be) | 0, d = d + Math.imul(N, $e) | 0, A = A + Math.imul(N, be) | 0, M = M + Math.imul(U, we) | 0, d = d + Math.imul(U, xe) | 0, d = d + Math.imul(X, we) | 0, A = A + Math.imul(X, xe) | 0;
                var nr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, M = Math.imul(Se, Be), d = Math.imul(Se, ue), d = d + Math.imul(se, Be) | 0, A = Math.imul(se, ue), M = M + Math.imul(Me, Ee) | 0, d = d + Math.imul(Me, he) | 0, d = d + Math.imul(fe, Ee) | 0, A = A + Math.imul(fe, he) | 0, M = M + Math.imul(ge, Ae) | 0, d = d + Math.imul(ge, ce) | 0, d = d + Math.imul(ie, Ae) | 0, A = A + Math.imul(ie, ce) | 0, M = M + Math.imul(ae, Re) | 0, d = d + Math.imul(ae, de) | 0, d = d + Math.imul(ee, Re) | 0, A = A + Math.imul(ee, de) | 0, M = M + Math.imul(me, ke) | 0, d = d + Math.imul(me, le) | 0, d = d + Math.imul(Z, ke) | 0, A = A + Math.imul(Z, le) | 0, M = M + Math.imul(ye, Ce) | 0, d = d + Math.imul(ye, pe) | 0, d = d + Math.imul(te, Ce) | 0, A = A + Math.imul(te, pe) | 0, M = M + Math.imul(ne, Ie) | 0, d = d + Math.imul(ne, ve) | 0, d = d + Math.imul(re, Ie) | 0, A = A + Math.imul(re, ve) | 0, M = M + Math.imul(J, $e) | 0, d = d + Math.imul(J, be) | 0, d = d + Math.imul(H, $e) | 0, A = A + Math.imul(H, be) | 0, M = M + Math.imul(k, we) | 0, d = d + Math.imul(k, xe) | 0, d = d + Math.imul(N, we) | 0, A = A + Math.imul(N, xe) | 0;
                var ar = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, M = Math.imul(Se, Ee), d = Math.imul(Se, he), d = d + Math.imul(se, Ee) | 0, A = Math.imul(se, he), M = M + Math.imul(Me, Ae) | 0, d = d + Math.imul(Me, ce) | 0, d = d + Math.imul(fe, Ae) | 0, A = A + Math.imul(fe, ce) | 0, M = M + Math.imul(ge, Re) | 0, d = d + Math.imul(ge, de) | 0, d = d + Math.imul(ie, Re) | 0, A = A + Math.imul(ie, de) | 0, M = M + Math.imul(ae, ke) | 0, d = d + Math.imul(ae, le) | 0, d = d + Math.imul(ee, ke) | 0, A = A + Math.imul(ee, le) | 0, M = M + Math.imul(me, Ce) | 0, d = d + Math.imul(me, pe) | 0, d = d + Math.imul(Z, Ce) | 0, A = A + Math.imul(Z, pe) | 0, M = M + Math.imul(ye, Ie) | 0, d = d + Math.imul(ye, ve) | 0, d = d + Math.imul(te, Ie) | 0, A = A + Math.imul(te, ve) | 0, M = M + Math.imul(ne, $e) | 0, d = d + Math.imul(ne, be) | 0, d = d + Math.imul(re, $e) | 0, A = A + Math.imul(re, be) | 0, M = M + Math.imul(J, we) | 0, d = d + Math.imul(J, xe) | 0, d = d + Math.imul(H, we) | 0, A = A + Math.imul(H, xe) | 0;
                var fr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, M = Math.imul(Se, Ae), d = Math.imul(Se, ce), d = d + Math.imul(se, Ae) | 0, A = Math.imul(se, ce), M = M + Math.imul(Me, Re) | 0, d = d + Math.imul(Me, de) | 0, d = d + Math.imul(fe, Re) | 0, A = A + Math.imul(fe, de) | 0, M = M + Math.imul(ge, ke) | 0, d = d + Math.imul(ge, le) | 0, d = d + Math.imul(ie, ke) | 0, A = A + Math.imul(ie, le) | 0, M = M + Math.imul(ae, Ce) | 0, d = d + Math.imul(ae, pe) | 0, d = d + Math.imul(ee, Ce) | 0, A = A + Math.imul(ee, pe) | 0, M = M + Math.imul(me, Ie) | 0, d = d + Math.imul(me, ve) | 0, d = d + Math.imul(Z, Ie) | 0, A = A + Math.imul(Z, ve) | 0, M = M + Math.imul(ye, $e) | 0, d = d + Math.imul(ye, be) | 0, d = d + Math.imul(te, $e) | 0, A = A + Math.imul(te, be) | 0, M = M + Math.imul(ne, we) | 0, d = d + Math.imul(ne, xe) | 0, d = d + Math.imul(re, we) | 0, A = A + Math.imul(re, xe) | 0;
                var sr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, M = Math.imul(Se, Re), d = Math.imul(Se, de), d = d + Math.imul(se, Re) | 0, A = Math.imul(se, de), M = M + Math.imul(Me, ke) | 0, d = d + Math.imul(Me, le) | 0, d = d + Math.imul(fe, ke) | 0, A = A + Math.imul(fe, le) | 0, M = M + Math.imul(ge, Ce) | 0, d = d + Math.imul(ge, pe) | 0, d = d + Math.imul(ie, Ce) | 0, A = A + Math.imul(ie, pe) | 0, M = M + Math.imul(ae, Ie) | 0, d = d + Math.imul(ae, ve) | 0, d = d + Math.imul(ee, Ie) | 0, A = A + Math.imul(ee, ve) | 0, M = M + Math.imul(me, $e) | 0, d = d + Math.imul(me, be) | 0, d = d + Math.imul(Z, $e) | 0, A = A + Math.imul(Z, be) | 0, M = M + Math.imul(ye, we) | 0, d = d + Math.imul(ye, xe) | 0, d = d + Math.imul(te, we) | 0, A = A + Math.imul(te, xe) | 0;
                var ur = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, M = Math.imul(Se, ke), d = Math.imul(Se, le), d = d + Math.imul(se, ke) | 0, A = Math.imul(se, le), M = M + Math.imul(Me, Ce) | 0, d = d + Math.imul(Me, pe) | 0, d = d + Math.imul(fe, Ce) | 0, A = A + Math.imul(fe, pe) | 0, M = M + Math.imul(ge, Ie) | 0, d = d + Math.imul(ge, ve) | 0, d = d + Math.imul(ie, Ie) | 0, A = A + Math.imul(ie, ve) | 0, M = M + Math.imul(ae, $e) | 0, d = d + Math.imul(ae, be) | 0, d = d + Math.imul(ee, $e) | 0, A = A + Math.imul(ee, be) | 0, M = M + Math.imul(me, we) | 0, d = d + Math.imul(me, xe) | 0, d = d + Math.imul(Z, we) | 0, A = A + Math.imul(Z, xe) | 0;
                var hr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, M = Math.imul(Se, Ce), d = Math.imul(Se, pe), d = d + Math.imul(se, Ce) | 0, A = Math.imul(se, pe), M = M + Math.imul(Me, Ie) | 0, d = d + Math.imul(Me, ve) | 0, d = d + Math.imul(fe, Ie) | 0, A = A + Math.imul(fe, ve) | 0, M = M + Math.imul(ge, $e) | 0, d = d + Math.imul(ge, be) | 0, d = d + Math.imul(ie, $e) | 0, A = A + Math.imul(ie, be) | 0, M = M + Math.imul(ae, we) | 0, d = d + Math.imul(ae, xe) | 0, d = d + Math.imul(ee, we) | 0, A = A + Math.imul(ee, xe) | 0;
                var cr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, M = Math.imul(Se, Ie), d = Math.imul(Se, ve), d = d + Math.imul(se, Ie) | 0, A = Math.imul(se, ve), M = M + Math.imul(Me, $e) | 0, d = d + Math.imul(Me, be) | 0, d = d + Math.imul(fe, $e) | 0, A = A + Math.imul(fe, be) | 0, M = M + Math.imul(ge, we) | 0, d = d + Math.imul(ge, xe) | 0, d = d + Math.imul(ie, we) | 0, A = A + Math.imul(ie, xe) | 0;
                var dr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, M = Math.imul(Se, $e), d = Math.imul(Se, be), d = d + Math.imul(se, $e) | 0, A = Math.imul(se, be), M = M + Math.imul(Me, we) | 0, d = d + Math.imul(Me, xe) | 0, d = d + Math.imul(fe, we) | 0, A = A + Math.imul(fe, xe) | 0;
                var lr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, M = Math.imul(Se, we), d = Math.imul(Se, xe), d = d + Math.imul(se, we) | 0, A = Math.imul(se, xe);
                var pr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                return _ = (A + (d >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, S[0] = Ve, S[1] = Je, S[2] = Ye, S[3] = Qe, S[4] = Ze, S[5] = er, S[6] = rr, S[7] = tr, S[8] = ir, S[9] = nr, S[10] = ar, S[11] = fr, S[12] = sr, S[13] = ur, S[14] = hr, S[15] = cr, S[16] = dr, S[17] = lr, S[18] = pr, _ !== 0 && (S[19] = _, y.length++), y
            };
            Math.imul || (I = $);

            function D(b, t, u) {
                u.negative = t.negative ^ b.negative, u.length = b.length + t.length;
                for (var y = 0, v = 0, g = 0; g < u.length - 1; g++) {
                    var S = v;
                    v = 0;
                    for (var _ = y & 67108863, M = Math.min(g, t.length - 1), d = Math.max(0, g - b.length + 1); d <= M; d++) {
                        var A = g - d,
                            z = b.words[A] | 0,
                            U = t.words[d] | 0,
                            X = z * U,
                            R = X & 67108863;
                        S = S + (X / 67108864 | 0) | 0, R = R + _ | 0, _ = R & 67108863, S = S + (R >>> 26) | 0, v += S >>> 26, S &= 67108863
                    }
                    u.words[g] = _, y = S, S = v
                }
                return y !== 0 ? u.words[g] = y : u.length--, u._strip()
            }

            function j(b, t, u) {
                return D(b, t, u)
            }
            e.prototype.mulTo = function(t, u) {
                var y, v = this.length + t.length;
                return this.length === 10 && t.length === 10 ? y = I(this, t, u) : v < 63 ? y = $(this, t, u) : v < 1024 ? y = D(this, t, u) : y = j(this, t, u), y
            }, e.prototype.mul = function(t) {
                var u = new e(null);
                return u.words = new Array(this.length + t.length), this.mulTo(t, u)
            }, e.prototype.mulf = function(t) {
                var u = new e(null);
                return u.words = new Array(this.length + t.length), j(this, t, u)
            }, e.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }, e.prototype.imuln = function(t) {
                var u = t < 0;
                u && (t = -t), n(typeof t == "number"), n(t < 67108864);
                for (var y = 0, v = 0; v < this.length; v++) {
                    var g = (this.words[v] | 0) * t,
                        S = (g & 67108863) + (y & 67108863);
                    y >>= 26, y += g / 67108864 | 0, y += S >>> 26, this.words[v] = S & 67108863
                }
                return y !== 0 && (this.words[v] = y, this.length++), this.length = t === 0 ? 1 : this.length, u ? this.ineg() : this
            }, e.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }, e.prototype.sqr = function() {
                return this.mul(this)
            }, e.prototype.isqr = function() {
                return this.imul(this.clone())
            }, e.prototype.pow = function(t) {
                var u = C(t);
                if (u.length === 0) return new e(1);
                for (var y = this, v = 0; v < u.length && u[v] === 0; v++, y = y.sqr());
                if (++v < u.length)
                    for (var g = y.sqr(); v < u.length; v++, g = g.sqr()) u[v] !== 0 && (y = y.mul(g));
                return y
            }, e.prototype.iushln = function(t) {
                n(typeof t == "number" && t >= 0);
                var u = t % 26,
                    y = (t - u) / 26,
                    v = 67108863 >>> 26 - u << 26 - u,
                    g;
                if (u !== 0) {
                    var S = 0;
                    for (g = 0; g < this.length; g++) {
                        var _ = this.words[g] & v,
                            M = (this.words[g] | 0) - _ << u;
                        this.words[g] = M | S, S = _ >>> 26 - u
                    }
                    S && (this.words[g] = S, this.length++)
                }
                if (y !== 0) {
                    for (g = this.length - 1; g >= 0; g--) this.words[g + y] = this.words[g];
                    for (g = 0; g < y; g++) this.words[g] = 0;
                    this.length += y
                }
                return this._strip()
            }, e.prototype.ishln = function(t) {
                return n(this.negative === 0), this.iushln(t)
            }, e.prototype.iushrn = function(t, u, y) {
                n(typeof t == "number" && t >= 0);
                var v;
                u ? v = (u - u % 26) / 26 : v = 0;
                var g = t % 26,
                    S = Math.min((t - g) / 26, this.length),
                    _ = 67108863 ^ 67108863 >>> g << g,
                    M = y;
                if (v -= S, v = Math.max(0, v), M) {
                    for (var d = 0; d < S; d++) M.words[d] = this.words[d];
                    M.length = S
                }
                if (S !== 0)
                    if (this.length > S)
                        for (this.length -= S, d = 0; d < this.length; d++) this.words[d] = this.words[d + S];
                    else this.words[0] = 0, this.length = 1;
                var A = 0;
                for (d = this.length - 1; d >= 0 && (A !== 0 || d >= v); d--) {
                    var z = this.words[d] | 0;
                    this.words[d] = A << 26 - g | z >>> g, A = z & _
                }
                return M && A !== 0 && (M.words[M.length++] = A), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
            }, e.prototype.ishrn = function(t, u, y) {
                return n(this.negative === 0), this.iushrn(t, u, y)
            }, e.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }, e.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }, e.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }, e.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }, e.prototype.testn = function(t) {
                n(typeof t == "number" && t >= 0);
                var u = t % 26,
                    y = (t - u) / 26,
                    v = 1 << u;
                if (this.length <= y) return !1;
                var g = this.words[y];
                return !!(g & v)
            }, e.prototype.imaskn = function(t) {
                n(typeof t == "number" && t >= 0);
                var u = t % 26,
                    y = (t - u) / 26;
                if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= y) return this;
                if (u !== 0 && y++, this.length = Math.min(y, this.length), u !== 0) {
                    var v = 67108863 ^ 67108863 >>> u << u;
                    this.words[this.length - 1] &= v
                }
                return this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
            }, e.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }, e.prototype.iaddn = function(t) {
                return n(typeof t == "number"), n(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
            }, e.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var u = 0; u < this.length && this.words[u] >= 67108864; u++) this.words[u] -= 67108864, u === this.length - 1 ? this.words[u + 1] = 1 : this.words[u + 1]++;
                return this.length = Math.max(this.length, u + 1), this
            }, e.prototype.isubn = function(t) {
                if (n(typeof t == "number"), n(t < 67108864), t < 0) return this.iaddn(-t);
                if (this.negative !== 0) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                if (this.words[0] -= t, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var u = 0; u < this.length && this.words[u] < 0; u++) this.words[u] += 67108864, this.words[u + 1] -= 1;
                return this._strip()
            }, e.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }, e.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }, e.prototype.iabs = function() {
                return this.negative = 0, this
            }, e.prototype.abs = function() {
                return this.clone().iabs()
            }, e.prototype._ishlnsubmul = function(t, u, y) {
                var v = t.length + y,
                    g;
                this._expand(v);
                var S, _ = 0;
                for (g = 0; g < t.length; g++) {
                    S = (this.words[g + y] | 0) + _;
                    var M = (t.words[g] | 0) * u;
                    S -= M & 67108863, _ = (S >> 26) - (M / 67108864 | 0), this.words[g + y] = S & 67108863
                }
                for (; g < this.length - y; g++) S = (this.words[g + y] | 0) + _, _ = S >> 26, this.words[g + y] = S & 67108863;
                if (_ === 0) return this._strip();
                for (n(_ === -1), _ = 0, g = 0; g < this.length; g++) S = -(this.words[g] | 0) + _, _ = S >> 26, this.words[g] = S & 67108863;
                return this.negative = 1, this._strip()
            }, e.prototype._wordDiv = function(t, u) {
                var y = this.length - t.length,
                    v = this.clone(),
                    g = t,
                    S = g.words[g.length - 1] | 0,
                    _ = this._countBits(S);
                y = 26 - _, y !== 0 && (g = g.ushln(y), v.iushln(y), S = g.words[g.length - 1] | 0);
                var M = v.length - g.length,
                    d;
                if (u !== "mod") {
                    d = new e(null), d.length = M + 1, d.words = new Array(d.length);
                    for (var A = 0; A < d.length; A++) d.words[A] = 0
                }
                var z = v.clone()._ishlnsubmul(g, 1, M);
                z.negative === 0 && (v = z, d && (d.words[M] = 1));
                for (var U = M - 1; U >= 0; U--) {
                    var X = (v.words[g.length + U] | 0) * 67108864 + (v.words[g.length + U - 1] | 0);
                    for (X = Math.min(X / S | 0, 67108863), v._ishlnsubmul(g, X, U); v.negative !== 0;) X--, v.negative = 0, v._ishlnsubmul(g, 1, U), v.isZero() || (v.negative ^= 1);
                    d && (d.words[U] = X)
                }
                return d && d._strip(), v._strip(), u !== "div" && y !== 0 && v.iushrn(y), {
                    div: d || null,
                    mod: v
                }
            }, e.prototype.divmod = function(t, u, y) {
                if (n(!t.isZero()), this.isZero()) return {
                    div: new e(0),
                    mod: new e(0)
                };
                var v, g, S;
                return this.negative !== 0 && t.negative === 0 ? (S = this.neg().divmod(t, u), u !== "mod" && (v = S.div.neg()), u !== "div" && (g = S.mod.neg(), y && g.negative !== 0 && g.iadd(t)), {
                    div: v,
                    mod: g
                }) : this.negative === 0 && t.negative !== 0 ? (S = this.divmod(t.neg(), u), u !== "mod" && (v = S.div.neg()), {
                    div: v,
                    mod: S.mod
                }) : (this.negative & t.negative) !== 0 ? (S = this.neg().divmod(t.neg(), u), u !== "div" && (g = S.mod.neg(), y && g.negative !== 0 && g.isub(t)), {
                    div: S.div,
                    mod: g
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new e(0),
                    mod: this
                } : t.length === 1 ? u === "div" ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : u === "mod" ? {
                    div: null,
                    mod: new e(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new e(this.modrn(t.words[0]))
                } : this._wordDiv(t, u)
            }, e.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }, e.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }, e.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }, e.prototype.divRound = function(t) {
                var u = this.divmod(t);
                if (u.mod.isZero()) return u.div;
                var y = u.div.negative !== 0 ? u.mod.isub(t) : u.mod,
                    v = t.ushrn(1),
                    g = t.andln(1),
                    S = y.cmp(v);
                return S < 0 || g === 1 && S === 0 ? u.div : u.div.negative !== 0 ? u.div.isubn(1) : u.div.iaddn(1)
            }, e.prototype.modrn = function(t) {
                var u = t < 0;
                u && (t = -t), n(t <= 67108863);
                for (var y = (1 << 26) % t, v = 0, g = this.length - 1; g >= 0; g--) v = (y * v + (this.words[g] | 0)) % t;
                return u ? -v : v
            }, e.prototype.modn = function(t) {
                return this.modrn(t)
            }, e.prototype.idivn = function(t) {
                var u = t < 0;
                u && (t = -t), n(t <= 67108863);
                for (var y = 0, v = this.length - 1; v >= 0; v--) {
                    var g = (this.words[v] | 0) + y * 67108864;
                    this.words[v] = g / t | 0, y = g % t
                }
                return this._strip(), u ? this.ineg() : this
            }, e.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }, e.prototype.egcd = function(t) {
                n(t.negative === 0), n(!t.isZero());
                var u = this,
                    y = t.clone();
                u.negative !== 0 ? u = u.umod(t) : u = u.clone();
                for (var v = new e(1), g = new e(0), S = new e(0), _ = new e(1), M = 0; u.isEven() && y.isEven();) u.iushrn(1), y.iushrn(1), ++M;
                for (var d = y.clone(), A = u.clone(); !u.isZero();) {
                    for (var z = 0, U = 1;
                        (u.words[0] & U) === 0 && z < 26; ++z, U <<= 1);
                    if (z > 0)
                        for (u.iushrn(z); z-- > 0;)(v.isOdd() || g.isOdd()) && (v.iadd(d), g.isub(A)), v.iushrn(1), g.iushrn(1);
                    for (var X = 0, R = 1;
                        (y.words[0] & R) === 0 && X < 26; ++X, R <<= 1);
                    if (X > 0)
                        for (y.iushrn(X); X-- > 0;)(S.isOdd() || _.isOdd()) && (S.iadd(d), _.isub(A)), S.iushrn(1), _.iushrn(1);
                    u.cmp(y) >= 0 ? (u.isub(y), v.isub(S), g.isub(_)) : (y.isub(u), S.isub(v), _.isub(g))
                }
                return {
                    a: S,
                    b: _,
                    gcd: y.iushln(M)
                }
            }, e.prototype._invmp = function(t) {
                n(t.negative === 0), n(!t.isZero());
                var u = this,
                    y = t.clone();
                u.negative !== 0 ? u = u.umod(t) : u = u.clone();
                for (var v = new e(1), g = new e(0), S = y.clone(); u.cmpn(1) > 0 && y.cmpn(1) > 0;) {
                    for (var _ = 0, M = 1;
                        (u.words[0] & M) === 0 && _ < 26; ++_, M <<= 1);
                    if (_ > 0)
                        for (u.iushrn(_); _-- > 0;) v.isOdd() && v.iadd(S), v.iushrn(1);
                    for (var d = 0, A = 1;
                        (y.words[0] & A) === 0 && d < 26; ++d, A <<= 1);
                    if (d > 0)
                        for (y.iushrn(d); d-- > 0;) g.isOdd() && g.iadd(S), g.iushrn(1);
                    u.cmp(y) >= 0 ? (u.isub(y), v.isub(g)) : (y.isub(u), g.isub(v))
                }
                var z;
                return u.cmpn(1) === 0 ? z = v : z = g, z.cmpn(0) < 0 && z.iadd(t), z
            }, e.prototype.gcd = function(t) {
                if (this.isZero()) return t.abs();
                if (t.isZero()) return this.abs();
                var u = this.clone(),
                    y = t.clone();
                u.negative = 0, y.negative = 0;
                for (var v = 0; u.isEven() && y.isEven(); v++) u.iushrn(1), y.iushrn(1);
                do {
                    for (; u.isEven();) u.iushrn(1);
                    for (; y.isEven();) y.iushrn(1);
                    var g = u.cmp(y);
                    if (g < 0) {
                        var S = u;
                        u = y, y = S
                    } else if (g === 0 || y.cmpn(1) === 0) break;
                    u.isub(y)
                } while (!0);
                return y.iushln(v)
            }, e.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }, e.prototype.isEven = function() {
                return (this.words[0] & 1) === 0
            }, e.prototype.isOdd = function() {
                return (this.words[0] & 1) === 1
            }, e.prototype.andln = function(t) {
                return this.words[0] & t
            }, e.prototype.bincn = function(t) {
                n(typeof t == "number");
                var u = t % 26,
                    y = (t - u) / 26,
                    v = 1 << u;
                if (this.length <= y) return this._expand(y + 1), this.words[y] |= v, this;
                for (var g = v, S = y; g !== 0 && S < this.length; S++) {
                    var _ = this.words[S] | 0;
                    _ += g, g = _ >>> 26, _ &= 67108863, this.words[S] = _
                }
                return g !== 0 && (this.words[S] = g, this.length++), this
            }, e.prototype.isZero = function() {
                return this.length === 1 && this.words[0] === 0
            }, e.prototype.cmpn = function(t) {
                var u = t < 0;
                if (this.negative !== 0 && !u) return -1;
                if (this.negative === 0 && u) return 1;
                this._strip();
                var y;
                if (this.length > 1) y = 1;
                else {
                    u && (t = -t), n(t <= 67108863, "Number is too big");
                    var v = this.words[0] | 0;
                    y = v === t ? 0 : v < t ? -1 : 1
                }
                return this.negative !== 0 ? -y | 0 : y
            }, e.prototype.cmp = function(t) {
                if (this.negative !== 0 && t.negative === 0) return -1;
                if (this.negative === 0 && t.negative !== 0) return 1;
                var u = this.ucmp(t);
                return this.negative !== 0 ? -u | 0 : u
            }, e.prototype.ucmp = function(t) {
                if (this.length > t.length) return 1;
                if (this.length < t.length) return -1;
                for (var u = 0, y = this.length - 1; y >= 0; y--) {
                    var v = this.words[y] | 0,
                        g = t.words[y] | 0;
                    if (v !== g) {
                        v < g ? u = -1 : v > g && (u = 1);
                        break
                    }
                }
                return u
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
                return new P(t)
            }, e.prototype.toRed = function(t) {
                return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t)
            }, e.prototype.fromRed = function() {
                return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, e.prototype._forceRed = function(t) {
                return this.red = t, this
            }, e.prototype.forceRed = function(t) {
                return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
            }, e.prototype.redAdd = function(t) {
                return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
            }, e.prototype.redIAdd = function(t) {
                return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
            }, e.prototype.redSub = function(t) {
                return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
            }, e.prototype.redISub = function(t) {
                return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
            }, e.prototype.redShl = function(t) {
                return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
            }, e.prototype.redMul = function(t) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
            }, e.prototype.redIMul = function(t) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
            }, e.prototype.redSqr = function() {
                return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, e.prototype.redISqr = function() {
                return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, e.prototype.redSqrt = function() {
                return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, e.prototype.redInvm = function() {
                return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, e.prototype.redNeg = function() {
                return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, e.prototype.redPow = function(t) {
                return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
            };
            var O = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function L(b, t) {
                this.name = b, this.p = new e(t, 16), this.n = this.p.bitLength(), this.k = new e(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }
            L.prototype._tmp = function() {
                var t = new e(null);
                return t.words = new Array(Math.ceil(this.n / 13)), t
            }, L.prototype.ireduce = function(t) {
                var u = t,
                    y;
                do this.split(u, this.tmp), u = this.imulK(u), u = u.iadd(this.tmp), y = u.bitLength(); while (y > this.n);
                var v = y < this.n ? -1 : u.ucmp(this.p);
                return v === 0 ? (u.words[0] = 0, u.length = 1) : v > 0 ? u.isub(this.p) : u.strip !== void 0 ? u.strip() : u._strip(), u
            }, L.prototype.split = function(t, u) {
                t.iushrn(this.n, 0, u)
            }, L.prototype.imulK = function(t) {
                return t.imul(this.k)
            };

            function G() {
                L.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            s(G, L), G.prototype.split = function(t, u) {
                for (var y = 4194303, v = Math.min(t.length, 9), g = 0; g < v; g++) u.words[g] = t.words[g];
                if (u.length = v, t.length <= 9) {
                    t.words[0] = 0, t.length = 1;
                    return
                }
                var S = t.words[9];
                for (u.words[u.length++] = S & y, g = 10; g < t.length; g++) {
                    var _ = t.words[g] | 0;
                    t.words[g - 10] = (_ & y) << 4 | S >>> 22, S = _
                }
                S >>>= 22, t.words[g - 10] = S, S === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9
            }, G.prototype.imulK = function(t) {
                t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                for (var u = 0, y = 0; y < t.length; y++) {
                    var v = t.words[y] | 0;
                    u += v * 977, t.words[y] = u & 67108863, u = v * 64 + (u / 67108864 | 0)
                }
                return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t
            };

            function V() {
                L.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            s(V, L);

            function K() {
                L.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            s(K, L);

            function Q() {
                L.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            s(Q, L), Q.prototype.imulK = function(t) {
                for (var u = 0, y = 0; y < t.length; y++) {
                    var v = (t.words[y] | 0) * 19 + u,
                        g = v & 67108863;
                    v >>>= 26, t.words[y] = g, u = v
                }
                return u !== 0 && (t.words[t.length++] = u), t
            }, e._prime = function(t) {
                if (O[t]) return O[t];
                var u;
                if (t === "k256") u = new G;
                else if (t === "p224") u = new V;
                else if (t === "p192") u = new K;
                else if (t === "p25519") u = new Q;
                else throw new Error("Unknown prime " + t);
                return O[t] = u, u
            };

            function P(b) {
                if (typeof b == "string") {
                    var t = e._prime(b);
                    this.m = t.p, this.prime = t
                } else n(b.gtn(1), "modulus must be greater than 1"), this.m = b, this.prime = null
            }
            P.prototype._verify1 = function(t) {
                n(t.negative === 0, "red works only with positives"), n(t.red, "red works only with red numbers")
            }, P.prototype._verify2 = function(t, u) {
                n((t.negative | u.negative) === 0, "red works only with positives"), n(t.red && t.red === u.red, "red works only with red numbers")
            }, P.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (f(t, t.umod(this.m)._forceRed(this)), t)
            }, P.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }, P.prototype.add = function(t, u) {
                this._verify2(t, u);
                var y = t.add(u);
                return y.cmp(this.m) >= 0 && y.isub(this.m), y._forceRed(this)
            }, P.prototype.iadd = function(t, u) {
                this._verify2(t, u);
                var y = t.iadd(u);
                return y.cmp(this.m) >= 0 && y.isub(this.m), y
            }, P.prototype.sub = function(t, u) {
                this._verify2(t, u);
                var y = t.sub(u);
                return y.cmpn(0) < 0 && y.iadd(this.m), y._forceRed(this)
            }, P.prototype.isub = function(t, u) {
                this._verify2(t, u);
                var y = t.isub(u);
                return y.cmpn(0) < 0 && y.iadd(this.m), y
            }, P.prototype.shl = function(t, u) {
                return this._verify1(t), this.imod(t.ushln(u))
            }, P.prototype.imul = function(t, u) {
                return this._verify2(t, u), this.imod(t.imul(u))
            }, P.prototype.mul = function(t, u) {
                return this._verify2(t, u), this.imod(t.mul(u))
            }, P.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }, P.prototype.sqr = function(t) {
                return this.mul(t, t)
            }, P.prototype.sqrt = function(t) {
                if (t.isZero()) return t.clone();
                var u = this.m.andln(3);
                if (n(u % 2 === 1), u === 3) {
                    var y = this.m.add(new e(1)).iushrn(2);
                    return this.pow(t, y)
                }
                for (var v = this.m.subn(1), g = 0; !v.isZero() && v.andln(1) === 0;) g++, v.iushrn(1);
                n(!v.isZero());
                var S = new e(1).toRed(this),
                    _ = S.redNeg(),
                    M = this.m.subn(1).iushrn(1),
                    d = this.m.bitLength();
                for (d = new e(2 * d * d).toRed(this); this.pow(d, M).cmp(_) !== 0;) d.redIAdd(_);
                for (var A = this.pow(d, v), z = this.pow(t, v.addn(1).iushrn(1)), U = this.pow(t, v), X = g; U.cmp(S) !== 0;) {
                    for (var R = U, k = 0; R.cmp(S) !== 0; k++) R = R.redSqr();
                    n(k < X);
                    var N = this.pow(A, new e(1).iushln(X - k - 1));
                    z = z.redMul(N), A = N.redSqr(), U = U.redMul(A), X = k
                }
                return z
            }, P.prototype.invm = function(t) {
                var u = t._invmp(this.m);
                return u.negative !== 0 ? (u.negative = 0, this.imod(u).redNeg()) : this.imod(u)
            }, P.prototype.pow = function(t, u) {
                if (u.isZero()) return new e(1).toRed(this);
                if (u.cmpn(1) === 0) return t.clone();
                var y = 4,
                    v = new Array(1 << y);
                v[0] = new e(1).toRed(this), v[1] = t;
                for (var g = 2; g < v.length; g++) v[g] = this.mul(v[g - 1], t);
                var S = v[0],
                    _ = 0,
                    M = 0,
                    d = u.bitLength() % 26;
                for (d === 0 && (d = 26), g = u.length - 1; g >= 0; g--) {
                    for (var A = u.words[g], z = d - 1; z >= 0; z--) {
                        var U = A >> z & 1;
                        if (S !== v[0] && (S = this.sqr(S)), U === 0 && _ === 0) {
                            M = 0;
                            continue
                        }
                        _ <<= 1, _ |= U, M++, !(M !== y && (g !== 0 || z !== 0)) && (S = this.mul(S, v[_]), M = 0, _ = 0)
                    }
                    d = 26
                }
                return S
            }, P.prototype.convertTo = function(t) {
                var u = t.umod(this.m);
                return u === t ? u.clone() : u
            }, P.prototype.convertFrom = function(t) {
                var u = t.clone();
                return u.red = null, u
            }, e.mont = function(t) {
                return new q(t)
            };

            function q(b) {
                P.call(this, b), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new e(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            s(q, P), q.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }, q.prototype.convertFrom = function(t) {
                var u = this.imod(t.mul(this.rinv));
                return u.red = null, u
            }, q.prototype.imul = function(t, u) {
                if (t.isZero() || u.isZero()) return t.words[0] = 0, t.length = 1, t;
                var y = t.imul(u),
                    v = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    g = y.isub(v).iushrn(this.shift),
                    S = g;
                return g.cmp(this.m) >= 0 ? S = g.isub(this.m) : g.cmpn(0) < 0 && (S = g.iadd(this.m)), S._forceRed(this)
            }, q.prototype.mul = function(t, u) {
                if (t.isZero() || u.isZero()) return new e(0)._forceRed(this);
                var y = t.mul(u),
                    v = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    g = y.isub(v).iushrn(this.shift),
                    S = g;
                return g.cmp(this.m) >= 0 ? S = g.isub(this.m) : g.cmpn(0) < 0 && (S = g.iadd(this.m)), S._forceRed(this)
            }, q.prototype.invm = function(t) {
                var u = this.imod(t._invmp(this.m).mul(this.r2));
                return u._forceRed(this)
            }
        })(a, bn$2)
    })(bn$3)), bn$3.exports
}
var browserifyRsa, hasRequiredBrowserifyRsa;

function requireBrowserifyRsa() {
    if (hasRequiredBrowserifyRsa) return browserifyRsa;
    hasRequiredBrowserifyRsa = 1;
    var a = requireBn$1(),
        r = requireBrowser$b(),
        i = requireSafeBuffer$2().Buffer;

    function n(h) {
        var c = h.modulus.byteLength(),
            l;
        do l = new a(r(c)); while (l.cmp(h.modulus) >= 0 || !l.umod(h.prime1) || !l.umod(h.prime2));
        return l
    }

    function s(h) {
        var c = n(h),
            l = c.toRed(a.mont(h.modulus)).redPow(new a(h.publicExponent)).fromRed();
        return {
            blinder: l,
            unblinder: c.invm(h.modulus)
        }
    }

    function e(h, c) {
        var l = s(c),
            p = c.modulus.byteLength(),
            f = new a(h).mul(l.blinder).umod(c.modulus),
            m = f.toRed(a.mont(c.prime1)),
            w = f.toRed(a.mont(c.prime2)),
            x = c.coefficient,
            B = c.prime1,
            E = c.prime2,
            C = m.redPow(c.exponent1).fromRed(),
            $ = w.redPow(c.exponent2).fromRed(),
            I = C.isub($).imul(x).umod(B).imul(E);
        return $.iadd(I).imul(l.unblinder).umod(c.modulus).toArrayLike(i, "be", p)
    }
    return e.getr = n, browserifyRsa = e, browserifyRsa
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
    return hasRequiredUtils$2 || (hasRequiredUtils$2 = 1, (function(a) {
        var r = a;

        function i(e, h) {
            if (Array.isArray(e)) return e.slice();
            if (!e) return [];
            var c = [];
            if (typeof e != "string") {
                for (var l = 0; l < e.length; l++) c[l] = e[l] | 0;
                return c
            }
            if (h === "hex") {
                e = e.replace(/[^a-z0-9]+/ig, ""), e.length % 2 !== 0 && (e = "0" + e);
                for (var l = 0; l < e.length; l += 2) c.push(parseInt(e[l] + e[l + 1], 16))
            } else
                for (var l = 0; l < e.length; l++) {
                    var p = e.charCodeAt(l),
                        f = p >> 8,
                        m = p & 255;
                    f ? c.push(f, m) : c.push(m)
                }
            return c
        }
        r.toArray = i;

        function n(e) {
            return e.length === 1 ? "0" + e : e
        }
        r.zero2 = n;

        function s(e) {
            for (var h = "", c = 0; c < e.length; c++) h += n(e[c].toString(16));
            return h
        }
        r.toHex = s, r.encode = function(h, c) {
            return c === "hex" ? s(h) : h
        }
    })(utils$1)), utils$1
}
var hasRequiredUtils$1;

function requireUtils$1() {
    return hasRequiredUtils$1 || (hasRequiredUtils$1 = 1, (function(a) {
        var r = a,
            i = requireBn$2(),
            n = requireMinimalisticAssert(),
            s = requireUtils$2();
        r.assert = n, r.toArray = s.toArray, r.zero2 = s.zero2, r.toHex = s.toHex, r.encode = s.encode;

        function e(f, m, w) {
            var x = new Array(Math.max(f.bitLength(), w) + 1),
                B;
            for (B = 0; B < x.length; B += 1) x[B] = 0;
            var E = 1 << m + 1,
                C = f.clone();
            for (B = 0; B < x.length; B++) {
                var $, I = C.andln(E - 1);
                C.isOdd() ? (I > (E >> 1) - 1 ? $ = (E >> 1) - I : $ = I, C.isubn($)) : $ = 0, x[B] = $, C.iushrn(1)
            }
            return x
        }
        r.getNAF = e;

        function h(f, m) {
            var w = [
                [],
                []
            ];
            f = f.clone(), m = m.clone();
            for (var x = 0, B = 0, E; f.cmpn(-x) > 0 || m.cmpn(-B) > 0;) {
                var C = f.andln(3) + x & 3,
                    $ = m.andln(3) + B & 3;
                C === 3 && (C = -1), $ === 3 && ($ = -1);
                var I;
                (C & 1) === 0 ? I = 0 : (E = f.andln(7) + x & 7, (E === 3 || E === 5) && $ === 2 ? I = -C : I = C), w[0].push(I);
                var D;
                ($ & 1) === 0 ? D = 0 : (E = m.andln(7) + B & 7, (E === 3 || E === 5) && C === 2 ? D = -$ : D = $), w[1].push(D), 2 * x === I + 1 && (x = 1 - x), 2 * B === D + 1 && (B = 1 - B), f.iushrn(1), m.iushrn(1)
            }
            return w
        }
        r.getJSF = h;

        function c(f, m, w) {
            var x = "_" + m;
            f.prototype[m] = function() {
                return this[x] !== void 0 ? this[x] : this[x] = w.call(this)
            }
        }
        r.cachedProperty = c;

        function l(f) {
            return typeof f == "string" ? r.toArray(f, "hex") : f
        }
        r.parseBytes = l;

        function p(f) {
            return new i(f, "hex", "le")
        }
        r.intFromLE = p
    })(utils$2)), utils$2
}
var curve = {},
    base$1, hasRequiredBase$1;

function requireBase$1() {
    if (hasRequiredBase$1) return base$1;
    hasRequiredBase$1 = 1;
    var a = requireBn$2(),
        r = requireUtils$1(),
        i = r.getNAF,
        n = r.getJSF,
        s = r.assert;

    function e(c, l) {
        this.type = c, this.p = new a(l.p, 16), this.red = l.prime ? a.red(l.prime) : a.mont(this.p), this.zero = new a(0).toRed(this.red), this.one = new a(1).toRed(this.red), this.two = new a(2).toRed(this.red), this.n = l.n && new a(l.n, 16), this.g = l.g && this.pointFromJSON(l.g, l.gRed), this._wnafT1 = new Array(4), this._wnafT2 = new Array(4), this._wnafT3 = new Array(4), this._wnafT4 = new Array(4), this._bitLength = this.n ? this.n.bitLength() : 0;
        var p = this.n && this.p.div(this.n);
        !p || p.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red))
    }
    base$1 = e, e.prototype.point = function() {
        throw new Error("Not implemented")
    }, e.prototype.validate = function() {
        throw new Error("Not implemented")
    }, e.prototype._fixedNafMul = function(l, p) {
        s(l.precomputed);
        var f = l._getDoubles(),
            m = i(p, 1, this._bitLength),
            w = (1 << f.step + 1) - (f.step % 2 === 0 ? 2 : 1);
        w /= 3;
        var x = [],
            B, E;
        for (B = 0; B < m.length; B += f.step) {
            E = 0;
            for (var C = B + f.step - 1; C >= B; C--) E = (E << 1) + m[C];
            x.push(E)
        }
        for (var $ = this.jpoint(null, null, null), I = this.jpoint(null, null, null), D = w; D > 0; D--) {
            for (B = 0; B < x.length; B++) E = x[B], E === D ? I = I.mixedAdd(f.points[B]) : E === -D && (I = I.mixedAdd(f.points[B].neg()));
            $ = $.add(I)
        }
        return $.toP()
    }, e.prototype._wnafMul = function(l, p) {
        var f = 4,
            m = l._getNAFPoints(f);
        f = m.wnd;
        for (var w = m.points, x = i(p, f, this._bitLength), B = this.jpoint(null, null, null), E = x.length - 1; E >= 0; E--) {
            for (var C = 0; E >= 0 && x[E] === 0; E--) C++;
            if (E >= 0 && C++, B = B.dblp(C), E < 0) break;
            var $ = x[E];
            s($ !== 0), l.type === "affine" ? $ > 0 ? B = B.mixedAdd(w[$ - 1 >> 1]) : B = B.mixedAdd(w[-$ - 1 >> 1].neg()) : $ > 0 ? B = B.add(w[$ - 1 >> 1]) : B = B.add(w[-$ - 1 >> 1].neg())
        }
        return l.type === "affine" ? B.toP() : B
    }, e.prototype._wnafMulAdd = function(l, p, f, m, w) {
        var x = this._wnafT1,
            B = this._wnafT2,
            E = this._wnafT3,
            C = 0,
            $, I, D;
        for ($ = 0; $ < m; $++) {
            D = p[$];
            var j = D._getNAFPoints(l);
            x[$] = j.wnd, B[$] = j.points
        }
        for ($ = m - 1; $ >= 1; $ -= 2) {
            var O = $ - 1,
                L = $;
            if (x[O] !== 1 || x[L] !== 1) {
                E[O] = i(f[O], x[O], this._bitLength), E[L] = i(f[L], x[L], this._bitLength), C = Math.max(E[O].length, C), C = Math.max(E[L].length, C);
                continue
            }
            var G = [p[O], null, null, p[L]];
            p[O].y.cmp(p[L].y) === 0 ? (G[1] = p[O].add(p[L]), G[2] = p[O].toJ().mixedAdd(p[L].neg())) : p[O].y.cmp(p[L].y.redNeg()) === 0 ? (G[1] = p[O].toJ().mixedAdd(p[L]), G[2] = p[O].add(p[L].neg())) : (G[1] = p[O].toJ().mixedAdd(p[L]), G[2] = p[O].toJ().mixedAdd(p[L].neg()));
            var V = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
                K = n(f[O], f[L]);
            for (C = Math.max(K[0].length, C), E[O] = new Array(C), E[L] = new Array(C), I = 0; I < C; I++) {
                var Q = K[0][I] | 0,
                    P = K[1][I] | 0;
                E[O][I] = V[(Q + 1) * 3 + (P + 1)], E[L][I] = 0, B[O] = G
            }
        }
        var q = this.jpoint(null, null, null),
            b = this._wnafT4;
        for ($ = C; $ >= 0; $--) {
            for (var t = 0; $ >= 0;) {
                var u = !0;
                for (I = 0; I < m; I++) b[I] = E[I][$] | 0, b[I] !== 0 && (u = !1);
                if (!u) break;
                t++, $--
            }
            if ($ >= 0 && t++, q = q.dblp(t), $ < 0) break;
            for (I = 0; I < m; I++) {
                var y = b[I];
                y !== 0 && (y > 0 ? D = B[I][y - 1 >> 1] : y < 0 && (D = B[I][-y - 1 >> 1].neg()), D.type === "affine" ? q = q.mixedAdd(D) : q = q.add(D))
            }
        }
        for ($ = 0; $ < m; $++) B[$] = null;
        return w ? q : q.toP()
    };

    function h(c, l) {
        this.curve = c, this.type = l, this.precomputed = null
    }
    return e.BasePoint = h, h.prototype.eq = function() {
        throw new Error("Not implemented")
    }, h.prototype.validate = function() {
        return this.curve.validate(this)
    }, e.prototype.decodePoint = function(l, p) {
        l = r.toArray(l, p);
        var f = this.p.byteLength();
        if ((l[0] === 4 || l[0] === 6 || l[0] === 7) && l.length - 1 === 2 * f) {
            l[0] === 6 ? s(l[l.length - 1] % 2 === 0) : l[0] === 7 && s(l[l.length - 1] % 2 === 1);
            var m = this.point(l.slice(1, 1 + f), l.slice(1 + f, 1 + 2 * f));
            return m
        } else if ((l[0] === 2 || l[0] === 3) && l.length - 1 === f) return this.pointFromX(l.slice(1, 1 + f), l[0] === 3);
        throw new Error("Unknown point format")
    }, h.prototype.encodeCompressed = function(l) {
        return this.encode(l, !0)
    }, h.prototype._encode = function(l) {
        var p = this.curve.p.byteLength(),
            f = this.getX().toArray("be", p);
        return l ? [this.getY().isEven() ? 2 : 3].concat(f) : [4].concat(f, this.getY().toArray("be", p))
    }, h.prototype.encode = function(l, p) {
        return r.encode(this._encode(p), l)
    }, h.prototype.precompute = function(l) {
        if (this.precomputed) return this;
        var p = {
            doubles: null,
            naf: null,
            beta: null
        };
        return p.naf = this._getNAFPoints(8), p.doubles = this._getDoubles(4, l), p.beta = this._getBeta(), this.precomputed = p, this
    }, h.prototype._hasDoubles = function(l) {
        if (!this.precomputed) return !1;
        var p = this.precomputed.doubles;
        return p ? p.points.length >= Math.ceil((l.bitLength() + 1) / p.step) : !1
    }, h.prototype._getDoubles = function(l, p) {
        if (this.precomputed && this.precomputed.doubles) return this.precomputed.doubles;
        for (var f = [this], m = this, w = 0; w < p; w += l) {
            for (var x = 0; x < l; x++) m = m.dbl();
            f.push(m)
        }
        return {
            step: l,
            points: f
        }
    }, h.prototype._getNAFPoints = function(l) {
        if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
        for (var p = [this], f = (1 << l) - 1, m = f === 1 ? null : this.dbl(), w = 1; w < f; w++) p[w] = p[w - 1].add(m);
        return {
            wnd: l,
            points: p
        }
    }, h.prototype._getBeta = function() {
        return null
    }, h.prototype.dblp = function(l) {
        for (var p = this, f = 0; f < l; f++) p = p.dbl();
        return p
    }, base$1
}
var short, hasRequiredShort;

function requireShort() {
    if (hasRequiredShort) return short;
    hasRequiredShort = 1;
    var a = requireUtils$1(),
        r = requireBn$2(),
        i = requireInherits_browser(),
        n = requireBase$1(),
        s = a.assert;

    function e(l) {
        n.call(this, "short", l), this.a = new r(l.a, 16).toRed(this.red), this.b = new r(l.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = this.a.fromRed().cmpn(0) === 0, this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0, this.endo = this._getEndomorphism(l), this._endoWnafT1 = new Array(4), this._endoWnafT2 = new Array(4)
    }
    i(e, n), short = e, e.prototype._getEndomorphism = function(p) {
        if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
            var f, m;
            if (p.beta) f = new r(p.beta, 16).toRed(this.red);
            else {
                var w = this._getEndoRoots(this.p);
                f = w[0].cmp(w[1]) < 0 ? w[0] : w[1], f = f.toRed(this.red)
            }
            if (p.lambda) m = new r(p.lambda, 16);
            else {
                var x = this._getEndoRoots(this.n);
                this.g.mul(x[0]).x.cmp(this.g.x.redMul(f)) === 0 ? m = x[0] : (m = x[1], s(this.g.mul(m).x.cmp(this.g.x.redMul(f)) === 0))
            }
            var B;
            return p.basis ? B = p.basis.map(function(E) {
                return {
                    a: new r(E.a, 16),
                    b: new r(E.b, 16)
                }
            }) : B = this._getEndoBasis(m), {
                beta: f,
                lambda: m,
                basis: B
            }
        }
    }, e.prototype._getEndoRoots = function(p) {
        var f = p === this.p ? this.red : r.mont(p),
            m = new r(2).toRed(f).redInvm(),
            w = m.redNeg(),
            x = new r(3).toRed(f).redNeg().redSqrt().redMul(m),
            B = w.redAdd(x).fromRed(),
            E = w.redSub(x).fromRed();
        return [B, E]
    }, e.prototype._getEndoBasis = function(p) {
        for (var f = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), m = p, w = this.n.clone(), x = new r(1), B = new r(0), E = new r(0), C = new r(1), $, I, D, j, O, L, G, V = 0, K, Q; m.cmpn(0) !== 0;) {
            var P = w.div(m);
            K = w.sub(P.mul(m)), Q = E.sub(P.mul(x));
            var q = C.sub(P.mul(B));
            if (!D && K.cmp(f) < 0) $ = G.neg(), I = x, D = K.neg(), j = Q;
            else if (D && ++V === 2) break;
            G = K, w = m, m = K, E = x, x = Q, C = B, B = q
        }
        O = K.neg(), L = Q;
        var b = D.sqr().add(j.sqr()),
            t = O.sqr().add(L.sqr());
        return t.cmp(b) >= 0 && (O = $, L = I), D.negative && (D = D.neg(), j = j.neg()), O.negative && (O = O.neg(), L = L.neg()), [{
            a: D,
            b: j
        }, {
            a: O,
            b: L
        }]
    }, e.prototype._endoSplit = function(p) {
        var f = this.endo.basis,
            m = f[0],
            w = f[1],
            x = w.b.mul(p).divRound(this.n),
            B = m.b.neg().mul(p).divRound(this.n),
            E = x.mul(m.a),
            C = B.mul(w.a),
            $ = x.mul(m.b),
            I = B.mul(w.b),
            D = p.sub(E).sub(C),
            j = $.add(I).neg();
        return {
            k1: D,
            k2: j
        }
    }, e.prototype.pointFromX = function(p, f) {
        p = new r(p, 16), p.red || (p = p.toRed(this.red));
        var m = p.redSqr().redMul(p).redIAdd(p.redMul(this.a)).redIAdd(this.b),
            w = m.redSqrt();
        if (w.redSqr().redSub(m).cmp(this.zero) !== 0) throw new Error("invalid point");
        var x = w.fromRed().isOdd();
        return (f && !x || !f && x) && (w = w.redNeg()), this.point(p, w)
    }, e.prototype.validate = function(p) {
        if (p.inf) return !0;
        var f = p.x,
            m = p.y,
            w = this.a.redMul(f),
            x = f.redSqr().redMul(f).redIAdd(w).redIAdd(this.b);
        return m.redSqr().redISub(x).cmpn(0) === 0
    }, e.prototype._endoWnafMulAdd = function(p, f, m) {
        for (var w = this._endoWnafT1, x = this._endoWnafT2, B = 0; B < p.length; B++) {
            var E = this._endoSplit(f[B]),
                C = p[B],
                $ = C._getBeta();
            E.k1.negative && (E.k1.ineg(), C = C.neg(!0)), E.k2.negative && (E.k2.ineg(), $ = $.neg(!0)), w[B * 2] = C, w[B * 2 + 1] = $, x[B * 2] = E.k1, x[B * 2 + 1] = E.k2
        }
        for (var I = this._wnafMulAdd(1, w, x, B * 2, m), D = 0; D < B * 2; D++) w[D] = null, x[D] = null;
        return I
    };

    function h(l, p, f, m) {
        n.BasePoint.call(this, l, "affine"), p === null && f === null ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new r(p, 16), this.y = new r(f, 16), m && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.inf = !1)
    }
    i(h, n.BasePoint), e.prototype.point = function(p, f, m) {
        return new h(this, p, f, m)
    }, e.prototype.pointFromJSON = function(p, f) {
        return h.fromJSON(this, p, f)
    }, h.prototype._getBeta = function() {
        if (this.curve.endo) {
            var p = this.precomputed;
            if (p && p.beta) return p.beta;
            var f = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
            if (p) {
                var m = this.curve,
                    w = function(x) {
                        return m.point(x.x.redMul(m.endo.beta), x.y)
                    };
                p.beta = f, f.precomputed = {
                    beta: null,
                    naf: p.naf && {
                        wnd: p.naf.wnd,
                        points: p.naf.points.map(w)
                    },
                    doubles: p.doubles && {
                        step: p.doubles.step,
                        points: p.doubles.points.map(w)
                    }
                }
            }
            return f
        }
    }, h.prototype.toJSON = function() {
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
    }, h.fromJSON = function(p, f, m) {
        typeof f == "string" && (f = JSON.parse(f));
        var w = p.point(f[0], f[1], m);
        if (!f[2]) return w;

        function x(E) {
            return p.point(E[0], E[1], m)
        }
        var B = f[2];
        return w.precomputed = {
            beta: null,
            doubles: B.doubles && {
                step: B.doubles.step,
                points: [w].concat(B.doubles.points.map(x))
            },
            naf: B.naf && {
                wnd: B.naf.wnd,
                points: [w].concat(B.naf.points.map(x))
            }
        }, w
    }, h.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + ">"
    }, h.prototype.isInfinity = function() {
        return this.inf
    }, h.prototype.add = function(p) {
        if (this.inf) return p;
        if (p.inf) return this;
        if (this.eq(p)) return this.dbl();
        if (this.neg().eq(p)) return this.curve.point(null, null);
        if (this.x.cmp(p.x) === 0) return this.curve.point(null, null);
        var f = this.y.redSub(p.y);
        f.cmpn(0) !== 0 && (f = f.redMul(this.x.redSub(p.x).redInvm()));
        var m = f.redSqr().redISub(this.x).redISub(p.x),
            w = f.redMul(this.x.redSub(m)).redISub(this.y);
        return this.curve.point(m, w)
    }, h.prototype.dbl = function() {
        if (this.inf) return this;
        var p = this.y.redAdd(this.y);
        if (p.cmpn(0) === 0) return this.curve.point(null, null);
        var f = this.curve.a,
            m = this.x.redSqr(),
            w = p.redInvm(),
            x = m.redAdd(m).redIAdd(m).redIAdd(f).redMul(w),
            B = x.redSqr().redISub(this.x.redAdd(this.x)),
            E = x.redMul(this.x.redSub(B)).redISub(this.y);
        return this.curve.point(B, E)
    }, h.prototype.getX = function() {
        return this.x.fromRed()
    }, h.prototype.getY = function() {
        return this.y.fromRed()
    }, h.prototype.mul = function(p) {
        return p = new r(p, 16), this.isInfinity() ? this : this._hasDoubles(p) ? this.curve._fixedNafMul(this, p) : this.curve.endo ? this.curve._endoWnafMulAdd([this], [p]) : this.curve._wnafMul(this, p)
    }, h.prototype.mulAdd = function(p, f, m) {
        var w = [this, f],
            x = [p, m];
        return this.curve.endo ? this.curve._endoWnafMulAdd(w, x) : this.curve._wnafMulAdd(1, w, x, 2)
    }, h.prototype.jmulAdd = function(p, f, m) {
        var w = [this, f],
            x = [p, m];
        return this.curve.endo ? this.curve._endoWnafMulAdd(w, x, !0) : this.curve._wnafMulAdd(1, w, x, 2, !0)
    }, h.prototype.eq = function(p) {
        return this === p || this.inf === p.inf && (this.inf || this.x.cmp(p.x) === 0 && this.y.cmp(p.y) === 0)
    }, h.prototype.neg = function(p) {
        if (this.inf) return this;
        var f = this.curve.point(this.x, this.y.redNeg());
        if (p && this.precomputed) {
            var m = this.precomputed,
                w = function(x) {
                    return x.neg()
                };
            f.precomputed = {
                naf: m.naf && {
                    wnd: m.naf.wnd,
                    points: m.naf.points.map(w)
                },
                doubles: m.doubles && {
                    step: m.doubles.step,
                    points: m.doubles.points.map(w)
                }
            }
        }
        return f
    }, h.prototype.toJ = function() {
        if (this.inf) return this.curve.jpoint(null, null, null);
        var p = this.curve.jpoint(this.x, this.y, this.curve.one);
        return p
    };

    function c(l, p, f, m) {
        n.BasePoint.call(this, l, "jacobian"), p === null && f === null && m === null ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new r(0)) : (this.x = new r(p, 16), this.y = new r(f, 16), this.z = new r(m, 16)), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one
    }
    return i(c, n.BasePoint), e.prototype.jpoint = function(p, f, m) {
        return new c(this, p, f, m)
    }, c.prototype.toP = function() {
        if (this.isInfinity()) return this.curve.point(null, null);
        var p = this.z.redInvm(),
            f = p.redSqr(),
            m = this.x.redMul(f),
            w = this.y.redMul(f).redMul(p);
        return this.curve.point(m, w)
    }, c.prototype.neg = function() {
        return this.curve.jpoint(this.x, this.y.redNeg(), this.z)
    }, c.prototype.add = function(p) {
        if (this.isInfinity()) return p;
        if (p.isInfinity()) return this;
        var f = p.z.redSqr(),
            m = this.z.redSqr(),
            w = this.x.redMul(f),
            x = p.x.redMul(m),
            B = this.y.redMul(f.redMul(p.z)),
            E = p.y.redMul(m.redMul(this.z)),
            C = w.redSub(x),
            $ = B.redSub(E);
        if (C.cmpn(0) === 0) return $.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
        var I = C.redSqr(),
            D = I.redMul(C),
            j = w.redMul(I),
            O = $.redSqr().redIAdd(D).redISub(j).redISub(j),
            L = $.redMul(j.redISub(O)).redISub(B.redMul(D)),
            G = this.z.redMul(p.z).redMul(C);
        return this.curve.jpoint(O, L, G)
    }, c.prototype.mixedAdd = function(p) {
        if (this.isInfinity()) return p.toJ();
        if (p.isInfinity()) return this;
        var f = this.z.redSqr(),
            m = this.x,
            w = p.x.redMul(f),
            x = this.y,
            B = p.y.redMul(f).redMul(this.z),
            E = m.redSub(w),
            C = x.redSub(B);
        if (E.cmpn(0) === 0) return C.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
        var $ = E.redSqr(),
            I = $.redMul(E),
            D = m.redMul($),
            j = C.redSqr().redIAdd(I).redISub(D).redISub(D),
            O = C.redMul(D.redISub(j)).redISub(x.redMul(I)),
            L = this.z.redMul(E);
        return this.curve.jpoint(j, O, L)
    }, c.prototype.dblp = function(p) {
        if (p === 0) return this;
        if (this.isInfinity()) return this;
        if (!p) return this.dbl();
        var f;
        if (this.curve.zeroA || this.curve.threeA) {
            var m = this;
            for (f = 0; f < p; f++) m = m.dbl();
            return m
        }
        var w = this.curve.a,
            x = this.curve.tinv,
            B = this.x,
            E = this.y,
            C = this.z,
            $ = C.redSqr().redSqr(),
            I = E.redAdd(E);
        for (f = 0; f < p; f++) {
            var D = B.redSqr(),
                j = I.redSqr(),
                O = j.redSqr(),
                L = D.redAdd(D).redIAdd(D).redIAdd(w.redMul($)),
                G = B.redMul(j),
                V = L.redSqr().redISub(G.redAdd(G)),
                K = G.redISub(V),
                Q = L.redMul(K);
            Q = Q.redIAdd(Q).redISub(O);
            var P = I.redMul(C);
            f + 1 < p && ($ = $.redMul(O)), B = V, C = P, I = Q
        }
        return this.curve.jpoint(B, I.redMul(x), C)
    }, c.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl()
    }, c.prototype._zeroDbl = function() {
        var p, f, m;
        if (this.zOne) {
            var w = this.x.redSqr(),
                x = this.y.redSqr(),
                B = x.redSqr(),
                E = this.x.redAdd(x).redSqr().redISub(w).redISub(B);
            E = E.redIAdd(E);
            var C = w.redAdd(w).redIAdd(w),
                $ = C.redSqr().redISub(E).redISub(E),
                I = B.redIAdd(B);
            I = I.redIAdd(I), I = I.redIAdd(I), p = $, f = C.redMul(E.redISub($)).redISub(I), m = this.y.redAdd(this.y)
        } else {
            var D = this.x.redSqr(),
                j = this.y.redSqr(),
                O = j.redSqr(),
                L = this.x.redAdd(j).redSqr().redISub(D).redISub(O);
            L = L.redIAdd(L);
            var G = D.redAdd(D).redIAdd(D),
                V = G.redSqr(),
                K = O.redIAdd(O);
            K = K.redIAdd(K), K = K.redIAdd(K), p = V.redISub(L).redISub(L), f = G.redMul(L.redISub(p)).redISub(K), m = this.y.redMul(this.z), m = m.redIAdd(m)
        }
        return this.curve.jpoint(p, f, m)
    }, c.prototype._threeDbl = function() {
        var p, f, m;
        if (this.zOne) {
            var w = this.x.redSqr(),
                x = this.y.redSqr(),
                B = x.redSqr(),
                E = this.x.redAdd(x).redSqr().redISub(w).redISub(B);
            E = E.redIAdd(E);
            var C = w.redAdd(w).redIAdd(w).redIAdd(this.curve.a),
                $ = C.redSqr().redISub(E).redISub(E);
            p = $;
            var I = B.redIAdd(B);
            I = I.redIAdd(I), I = I.redIAdd(I), f = C.redMul(E.redISub($)).redISub(I), m = this.y.redAdd(this.y)
        } else {
            var D = this.z.redSqr(),
                j = this.y.redSqr(),
                O = this.x.redMul(j),
                L = this.x.redSub(D).redMul(this.x.redAdd(D));
            L = L.redAdd(L).redIAdd(L);
            var G = O.redIAdd(O);
            G = G.redIAdd(G);
            var V = G.redAdd(G);
            p = L.redSqr().redISub(V), m = this.y.redAdd(this.z).redSqr().redISub(j).redISub(D);
            var K = j.redSqr();
            K = K.redIAdd(K), K = K.redIAdd(K), K = K.redIAdd(K), f = L.redMul(G.redISub(p)).redISub(K)
        }
        return this.curve.jpoint(p, f, m)
    }, c.prototype._dbl = function() {
        var p = this.curve.a,
            f = this.x,
            m = this.y,
            w = this.z,
            x = w.redSqr().redSqr(),
            B = f.redSqr(),
            E = m.redSqr(),
            C = B.redAdd(B).redIAdd(B).redIAdd(p.redMul(x)),
            $ = f.redAdd(f);
        $ = $.redIAdd($);
        var I = $.redMul(E),
            D = C.redSqr().redISub(I.redAdd(I)),
            j = I.redISub(D),
            O = E.redSqr();
        O = O.redIAdd(O), O = O.redIAdd(O), O = O.redIAdd(O);
        var L = C.redMul(j).redISub(O),
            G = m.redAdd(m).redMul(w);
        return this.curve.jpoint(D, L, G)
    }, c.prototype.trpl = function() {
        if (!this.curve.zeroA) return this.dbl().add(this);
        var p = this.x.redSqr(),
            f = this.y.redSqr(),
            m = this.z.redSqr(),
            w = f.redSqr(),
            x = p.redAdd(p).redIAdd(p),
            B = x.redSqr(),
            E = this.x.redAdd(f).redSqr().redISub(p).redISub(w);
        E = E.redIAdd(E), E = E.redAdd(E).redIAdd(E), E = E.redISub(B);
        var C = E.redSqr(),
            $ = w.redIAdd(w);
        $ = $.redIAdd($), $ = $.redIAdd($), $ = $.redIAdd($);
        var I = x.redIAdd(E).redSqr().redISub(B).redISub(C).redISub($),
            D = f.redMul(I);
        D = D.redIAdd(D), D = D.redIAdd(D);
        var j = this.x.redMul(C).redISub(D);
        j = j.redIAdd(j), j = j.redIAdd(j);
        var O = this.y.redMul(I.redMul($.redISub(I)).redISub(E.redMul(C)));
        O = O.redIAdd(O), O = O.redIAdd(O), O = O.redIAdd(O);
        var L = this.z.redAdd(E).redSqr().redISub(m).redISub(C);
        return this.curve.jpoint(j, O, L)
    }, c.prototype.mul = function(p, f) {
        return p = new r(p, f), this.curve._wnafMul(this, p)
    }, c.prototype.eq = function(p) {
        if (p.type === "affine") return this.eq(p.toJ());
        if (this === p) return !0;
        var f = this.z.redSqr(),
            m = p.z.redSqr();
        if (this.x.redMul(m).redISub(p.x.redMul(f)).cmpn(0) !== 0) return !1;
        var w = f.redMul(this.z),
            x = m.redMul(p.z);
        return this.y.redMul(x).redISub(p.y.redMul(w)).cmpn(0) === 0
    }, c.prototype.eqXToP = function(p) {
        var f = this.z.redSqr(),
            m = p.toRed(this.curve.red).redMul(f);
        if (this.x.cmp(m) === 0) return !0;
        for (var w = p.clone(), x = this.curve.redN.redMul(f);;) {
            if (w.iadd(this.curve.n), w.cmp(this.curve.p) >= 0) return !1;
            if (m.redIAdd(x), this.x.cmp(m) === 0) return !0
        }
    }, c.prototype.inspect = function() {
        return this.isInfinity() ? "<EC JPoint Infinity>" : "<EC JPoint x: " + this.x.toString(16, 2) + " y: " + this.y.toString(16, 2) + " z: " + this.z.toString(16, 2) + ">"
    }, c.prototype.isInfinity = function() {
        return this.z.cmpn(0) === 0
    }, short
}
var mont, hasRequiredMont;

function requireMont() {
    if (hasRequiredMont) return mont;
    hasRequiredMont = 1;
    var a = requireBn$2(),
        r = requireInherits_browser(),
        i = requireBase$1(),
        n = requireUtils$1();

    function s(h) {
        i.call(this, "mont", h), this.a = new a(h.a, 16).toRed(this.red), this.b = new a(h.b, 16).toRed(this.red), this.i4 = new a(4).toRed(this.red).redInvm(), this.two = new a(2).toRed(this.red), this.a24 = this.i4.redMul(this.a.redAdd(this.two))
    }
    r(s, i), mont = s, s.prototype.validate = function(c) {
        var l = c.normalize().x,
            p = l.redSqr(),
            f = p.redMul(l).redAdd(p.redMul(this.a)).redAdd(l),
            m = f.redSqrt();
        return m.redSqr().cmp(f) === 0
    };

    function e(h, c, l) {
        i.BasePoint.call(this, h, "projective"), c === null && l === null ? (this.x = this.curve.one, this.z = this.curve.zero) : (this.x = new a(c, 16), this.z = new a(l, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)))
    }
    return r(e, i.BasePoint), s.prototype.decodePoint = function(c, l) {
        return this.point(n.toArray(c, l), 1)
    }, s.prototype.point = function(c, l) {
        return new e(this, c, l)
    }, s.prototype.pointFromJSON = function(c) {
        return e.fromJSON(this, c)
    }, e.prototype.precompute = function() {}, e.prototype._encode = function() {
        return this.getX().toArray("be", this.curve.p.byteLength())
    }, e.fromJSON = function(c, l) {
        return new e(c, l[0], l[1] || c.one)
    }, e.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, e.prototype.isInfinity = function() {
        return this.z.cmpn(0) === 0
    }, e.prototype.dbl = function() {
        var c = this.x.redAdd(this.z),
            l = c.redSqr(),
            p = this.x.redSub(this.z),
            f = p.redSqr(),
            m = l.redSub(f),
            w = l.redMul(f),
            x = m.redMul(f.redAdd(this.curve.a24.redMul(m)));
        return this.curve.point(w, x)
    }, e.prototype.add = function() {
        throw new Error("Not supported on Montgomery curve")
    }, e.prototype.diffAdd = function(c, l) {
        var p = this.x.redAdd(this.z),
            f = this.x.redSub(this.z),
            m = c.x.redAdd(c.z),
            w = c.x.redSub(c.z),
            x = w.redMul(p),
            B = m.redMul(f),
            E = l.z.redMul(x.redAdd(B).redSqr()),
            C = l.x.redMul(x.redISub(B).redSqr());
        return this.curve.point(E, C)
    }, e.prototype.mul = function(c) {
        for (var l = c.clone(), p = this, f = this.curve.point(null, null), m = this, w = []; l.cmpn(0) !== 0; l.iushrn(1)) w.push(l.andln(1));
        for (var x = w.length - 1; x >= 0; x--) w[x] === 0 ? (p = p.diffAdd(f, m), f = f.dbl()) : (f = p.diffAdd(f, m), p = p.dbl());
        return f
    }, e.prototype.mulAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }, e.prototype.jumlAdd = function() {
        throw new Error("Not supported on Montgomery curve")
    }, e.prototype.eq = function(c) {
        return this.getX().cmp(c.getX()) === 0
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
    var a = requireUtils$1(),
        r = requireBn$2(),
        i = requireInherits_browser(),
        n = requireBase$1(),
        s = a.assert;

    function e(c) {
        this.twisted = (c.a | 0) !== 1, this.mOneA = this.twisted && (c.a | 0) === -1, this.extended = this.mOneA, n.call(this, "edwards", c), this.a = new r(c.a, 16).umod(this.red.m), this.a = this.a.toRed(this.red), this.c = new r(c.c, 16).toRed(this.red), this.c2 = this.c.redSqr(), this.d = new r(c.d, 16).toRed(this.red), this.dd = this.d.redAdd(this.d), s(!this.twisted || this.c.fromRed().cmpn(1) === 0), this.oneC = (c.c | 0) === 1
    }
    i(e, n), edwards = e, e.prototype._mulA = function(l) {
        return this.mOneA ? l.redNeg() : this.a.redMul(l)
    }, e.prototype._mulC = function(l) {
        return this.oneC ? l : this.c.redMul(l)
    }, e.prototype.jpoint = function(l, p, f, m) {
        return this.point(l, p, f, m)
    }, e.prototype.pointFromX = function(l, p) {
        l = new r(l, 16), l.red || (l = l.toRed(this.red));
        var f = l.redSqr(),
            m = this.c2.redSub(this.a.redMul(f)),
            w = this.one.redSub(this.c2.redMul(this.d).redMul(f)),
            x = m.redMul(w.redInvm()),
            B = x.redSqrt();
        if (B.redSqr().redSub(x).cmp(this.zero) !== 0) throw new Error("invalid point");
        var E = B.fromRed().isOdd();
        return (p && !E || !p && E) && (B = B.redNeg()), this.point(l, B)
    }, e.prototype.pointFromY = function(l, p) {
        l = new r(l, 16), l.red || (l = l.toRed(this.red));
        var f = l.redSqr(),
            m = f.redSub(this.c2),
            w = f.redMul(this.d).redMul(this.c2).redSub(this.a),
            x = m.redMul(w.redInvm());
        if (x.cmp(this.zero) === 0) {
            if (p) throw new Error("invalid point");
            return this.point(this.zero, l)
        }
        var B = x.redSqrt();
        if (B.redSqr().redSub(x).cmp(this.zero) !== 0) throw new Error("invalid point");
        return B.fromRed().isOdd() !== p && (B = B.redNeg()), this.point(B, l)
    }, e.prototype.validate = function(l) {
        if (l.isInfinity()) return !0;
        l.normalize();
        var p = l.x.redSqr(),
            f = l.y.redSqr(),
            m = p.redMul(this.a).redAdd(f),
            w = this.c2.redMul(this.one.redAdd(this.d.redMul(p).redMul(f)));
        return m.cmp(w) === 0
    };

    function h(c, l, p, f, m) {
        n.BasePoint.call(this, c, "projective"), l === null && p === null && f === null ? (this.x = this.curve.zero, this.y = this.curve.one, this.z = this.curve.one, this.t = this.curve.zero, this.zOne = !0) : (this.x = new r(l, 16), this.y = new r(p, 16), this.z = f ? new r(f, 16) : this.curve.one, this.t = m && new r(m, 16), this.x.red || (this.x = this.x.toRed(this.curve.red)), this.y.red || (this.y = this.y.toRed(this.curve.red)), this.z.red || (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), this.zOne = this.z === this.curve.one, this.curve.extended && !this.t && (this.t = this.x.redMul(this.y), this.zOne || (this.t = this.t.redMul(this.z.redInvm()))))
    }
    return i(h, n.BasePoint), e.prototype.pointFromJSON = function(l) {
        return h.fromJSON(this, l)
    }, e.prototype.point = function(l, p, f, m) {
        return new h(this, l, p, f, m)
    }, h.fromJSON = function(l, p) {
        return new h(l, p[0], p[1], p[2])
    }, h.prototype.inspect = function() {
        return this.isInfinity() ? "<EC Point Infinity>" : "<EC Point x: " + this.x.fromRed().toString(16, 2) + " y: " + this.y.fromRed().toString(16, 2) + " z: " + this.z.fromRed().toString(16, 2) + ">"
    }, h.prototype.isInfinity = function() {
        return this.x.cmpn(0) === 0 && (this.y.cmp(this.z) === 0 || this.zOne && this.y.cmp(this.curve.c) === 0)
    }, h.prototype._extDbl = function() {
        var l = this.x.redSqr(),
            p = this.y.redSqr(),
            f = this.z.redSqr();
        f = f.redIAdd(f);
        var m = this.curve._mulA(l),
            w = this.x.redAdd(this.y).redSqr().redISub(l).redISub(p),
            x = m.redAdd(p),
            B = x.redSub(f),
            E = m.redSub(p),
            C = w.redMul(B),
            $ = x.redMul(E),
            I = w.redMul(E),
            D = B.redMul(x);
        return this.curve.point(C, $, D, I)
    }, h.prototype._projDbl = function() {
        var l = this.x.redAdd(this.y).redSqr(),
            p = this.x.redSqr(),
            f = this.y.redSqr(),
            m, w, x, B, E, C;
        if (this.curve.twisted) {
            B = this.curve._mulA(p);
            var $ = B.redAdd(f);
            this.zOne ? (m = l.redSub(p).redSub(f).redMul($.redSub(this.curve.two)), w = $.redMul(B.redSub(f)), x = $.redSqr().redSub($).redSub($)) : (E = this.z.redSqr(), C = $.redSub(E).redISub(E), m = l.redSub(p).redISub(f).redMul(C), w = $.redMul(B.redSub(f)), x = $.redMul(C))
        } else B = p.redAdd(f), E = this.curve._mulC(this.z).redSqr(), C = B.redSub(E).redSub(E), m = this.curve._mulC(l.redISub(B)).redMul(C), w = this.curve._mulC(B).redMul(p.redISub(f)), x = B.redMul(C);
        return this.curve.point(m, w, x)
    }, h.prototype.dbl = function() {
        return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl()
    }, h.prototype._extAdd = function(l) {
        var p = this.y.redSub(this.x).redMul(l.y.redSub(l.x)),
            f = this.y.redAdd(this.x).redMul(l.y.redAdd(l.x)),
            m = this.t.redMul(this.curve.dd).redMul(l.t),
            w = this.z.redMul(l.z.redAdd(l.z)),
            x = f.redSub(p),
            B = w.redSub(m),
            E = w.redAdd(m),
            C = f.redAdd(p),
            $ = x.redMul(B),
            I = E.redMul(C),
            D = x.redMul(C),
            j = B.redMul(E);
        return this.curve.point($, I, j, D)
    }, h.prototype._projAdd = function(l) {
        var p = this.z.redMul(l.z),
            f = p.redSqr(),
            m = this.x.redMul(l.x),
            w = this.y.redMul(l.y),
            x = this.curve.d.redMul(m).redMul(w),
            B = f.redSub(x),
            E = f.redAdd(x),
            C = this.x.redAdd(this.y).redMul(l.x.redAdd(l.y)).redISub(m).redISub(w),
            $ = p.redMul(B).redMul(C),
            I, D;
        return this.curve.twisted ? (I = p.redMul(E).redMul(w.redSub(this.curve._mulA(m))), D = B.redMul(E)) : (I = p.redMul(E).redMul(w.redSub(m)), D = this.curve._mulC(B).redMul(E)), this.curve.point($, I, D)
    }, h.prototype.add = function(l) {
        return this.isInfinity() ? l : l.isInfinity() ? this : this.curve.extended ? this._extAdd(l) : this._projAdd(l)
    }, h.prototype.mul = function(l) {
        return this._hasDoubles(l) ? this.curve._fixedNafMul(this, l) : this.curve._wnafMul(this, l)
    }, h.prototype.mulAdd = function(l, p, f) {
        return this.curve._wnafMulAdd(1, [this, p], [l, f], 2, !1)
    }, h.prototype.jmulAdd = function(l, p, f) {
        return this.curve._wnafMulAdd(1, [this, p], [l, f], 2, !0)
    }, h.prototype.normalize = function() {
        if (this.zOne) return this;
        var l = this.z.redInvm();
        return this.x = this.x.redMul(l), this.y = this.y.redMul(l), this.t && (this.t = this.t.redMul(l)), this.z = this.curve.one, this.zOne = !0, this
    }, h.prototype.neg = function() {
        return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg())
    }, h.prototype.getX = function() {
        return this.normalize(), this.x.fromRed()
    }, h.prototype.getY = function() {
        return this.normalize(), this.y.fromRed()
    }, h.prototype.eq = function(l) {
        return this === l || this.getX().cmp(l.getX()) === 0 && this.getY().cmp(l.getY()) === 0
    }, h.prototype.eqXToP = function(l) {
        var p = l.toRed(this.curve.red).redMul(this.z);
        if (this.x.cmp(p) === 0) return !0;
        for (var f = l.clone(), m = this.curve.redN.redMul(this.z);;) {
            if (f.iadd(this.curve.n), f.cmp(this.curve.p) >= 0) return !1;
            if (p.redIAdd(m), this.x.cmp(p) === 0) return !0
        }
    }, h.prototype.toP = h.prototype.normalize, h.prototype.mixedAdd = h.prototype.add, edwards
}
var hasRequiredCurve;

function requireCurve() {
    return hasRequiredCurve || (hasRequiredCurve = 1, (function(a) {
        var r = a;
        r.base = requireBase$1(), r.short = requireShort(), r.mont = requireMont(), r.edwards = requireEdwards()
    })(curve)), curve
}
var curves = {},
    hash = {},
    utils = {},
    hasRequiredUtils;

function requireUtils() {
    if (hasRequiredUtils) return utils;
    hasRequiredUtils = 1;
    var a = requireMinimalisticAssert(),
        r = requireInherits_browser();
    utils.inherits = r;

    function i(q, b) {
        return (q.charCodeAt(b) & 64512) !== 55296 || b < 0 || b + 1 >= q.length ? !1 : (q.charCodeAt(b + 1) & 64512) === 56320
    }

    function n(q, b) {
        if (Array.isArray(q)) return q.slice();
        if (!q) return [];
        var t = [];
        if (typeof q == "string")
            if (b) {
                if (b === "hex")
                    for (q = q.replace(/[^a-z0-9]+/ig, ""), q.length % 2 !== 0 && (q = "0" + q), y = 0; y < q.length; y += 2) t.push(parseInt(q[y] + q[y + 1], 16))
            } else
                for (var u = 0, y = 0; y < q.length; y++) {
                    var v = q.charCodeAt(y);
                    v < 128 ? t[u++] = v : v < 2048 ? (t[u++] = v >> 6 | 192, t[u++] = v & 63 | 128) : i(q, y) ? (v = 65536 + ((v & 1023) << 10) + (q.charCodeAt(++y) & 1023), t[u++] = v >> 18 | 240, t[u++] = v >> 12 & 63 | 128, t[u++] = v >> 6 & 63 | 128, t[u++] = v & 63 | 128) : (t[u++] = v >> 12 | 224, t[u++] = v >> 6 & 63 | 128, t[u++] = v & 63 | 128)
                } else
                    for (y = 0; y < q.length; y++) t[y] = q[y] | 0;
        return t
    }
    utils.toArray = n;

    function s(q) {
        for (var b = "", t = 0; t < q.length; t++) b += c(q[t].toString(16));
        return b
    }
    utils.toHex = s;

    function e(q) {
        var b = q >>> 24 | q >>> 8 & 65280 | q << 8 & 16711680 | (q & 255) << 24;
        return b >>> 0
    }
    utils.htonl = e;

    function h(q, b) {
        for (var t = "", u = 0; u < q.length; u++) {
            var y = q[u];
            b === "little" && (y = e(y)), t += l(y.toString(16))
        }
        return t
    }
    utils.toHex32 = h;

    function c(q) {
        return q.length === 1 ? "0" + q : q
    }
    utils.zero2 = c;

    function l(q) {
        return q.length === 7 ? "0" + q : q.length === 6 ? "00" + q : q.length === 5 ? "000" + q : q.length === 4 ? "0000" + q : q.length === 3 ? "00000" + q : q.length === 2 ? "000000" + q : q.length === 1 ? "0000000" + q : q
    }
    utils.zero8 = l;

    function p(q, b, t, u) {
        var y = t - b;
        a(y % 4 === 0);
        for (var v = new Array(y / 4), g = 0, S = b; g < v.length; g++, S += 4) {
            var _;
            u === "big" ? _ = q[S] << 24 | q[S + 1] << 16 | q[S + 2] << 8 | q[S + 3] : _ = q[S + 3] << 24 | q[S + 2] << 16 | q[S + 1] << 8 | q[S], v[g] = _ >>> 0
        }
        return v
    }
    utils.join32 = p;

    function f(q, b) {
        for (var t = new Array(q.length * 4), u = 0, y = 0; u < q.length; u++, y += 4) {
            var v = q[u];
            b === "big" ? (t[y] = v >>> 24, t[y + 1] = v >>> 16 & 255, t[y + 2] = v >>> 8 & 255, t[y + 3] = v & 255) : (t[y + 3] = v >>> 24, t[y + 2] = v >>> 16 & 255, t[y + 1] = v >>> 8 & 255, t[y] = v & 255)
        }
        return t
    }
    utils.split32 = f;

    function m(q, b) {
        return q >>> b | q << 32 - b
    }
    utils.rotr32 = m;

    function w(q, b) {
        return q << b | q >>> 32 - b
    }
    utils.rotl32 = w;

    function x(q, b) {
        return q + b >>> 0
    }
    utils.sum32 = x;

    function B(q, b, t) {
        return q + b + t >>> 0
    }
    utils.sum32_3 = B;

    function E(q, b, t, u) {
        return q + b + t + u >>> 0
    }
    utils.sum32_4 = E;

    function C(q, b, t, u, y) {
        return q + b + t + u + y >>> 0
    }
    utils.sum32_5 = C;

    function $(q, b, t, u) {
        var y = q[b],
            v = q[b + 1],
            g = u + v >>> 0,
            S = (g < u ? 1 : 0) + t + y;
        q[b] = S >>> 0, q[b + 1] = g
    }
    utils.sum64 = $;

    function I(q, b, t, u) {
        var y = b + u >>> 0,
            v = (y < b ? 1 : 0) + q + t;
        return v >>> 0
    }
    utils.sum64_hi = I;

    function D(q, b, t, u) {
        var y = b + u;
        return y >>> 0
    }
    utils.sum64_lo = D;

    function j(q, b, t, u, y, v, g, S) {
        var _ = 0,
            M = b;
        M = M + u >>> 0, _ += M < b ? 1 : 0, M = M + v >>> 0, _ += M < v ? 1 : 0, M = M + S >>> 0, _ += M < S ? 1 : 0;
        var d = q + t + y + g + _;
        return d >>> 0
    }
    utils.sum64_4_hi = j;

    function O(q, b, t, u, y, v, g, S) {
        var _ = b + u + v + S;
        return _ >>> 0
    }
    utils.sum64_4_lo = O;

    function L(q, b, t, u, y, v, g, S, _, M) {
        var d = 0,
            A = b;
        A = A + u >>> 0, d += A < b ? 1 : 0, A = A + v >>> 0, d += A < v ? 1 : 0, A = A + S >>> 0, d += A < S ? 1 : 0, A = A + M >>> 0, d += A < M ? 1 : 0;
        var z = q + t + y + g + _ + d;
        return z >>> 0
    }
    utils.sum64_5_hi = L;

    function G(q, b, t, u, y, v, g, S, _, M) {
        var d = b + u + v + S + M;
        return d >>> 0
    }
    utils.sum64_5_lo = G;

    function V(q, b, t) {
        var u = b << 32 - t | q >>> t;
        return u >>> 0
    }
    utils.rotr64_hi = V;

    function K(q, b, t) {
        var u = q << 32 - t | b >>> t;
        return u >>> 0
    }
    utils.rotr64_lo = K;

    function Q(q, b, t) {
        return q >>> t
    }
    utils.shr64_hi = Q;

    function P(q, b, t) {
        var u = q << 32 - t | b >>> t;
        return u >>> 0
    }
    return utils.shr64_lo = P, utils
}
var common$1 = {},
    hasRequiredCommon$1;

function requireCommon$1() {
    if (hasRequiredCommon$1) return common$1;
    hasRequiredCommon$1 = 1;
    var a = requireUtils(),
        r = requireMinimalisticAssert();

    function i() {
        this.pending = null, this.pendingTotal = 0, this.blockSize = this.constructor.blockSize, this.outSize = this.constructor.outSize, this.hmacStrength = this.constructor.hmacStrength, this.padLength = this.constructor.padLength / 8, this.endian = "big", this._delta8 = this.blockSize / 8, this._delta32 = this.blockSize / 32
    }
    return common$1.BlockHash = i, i.prototype.update = function(s, e) {
        if (s = a.toArray(s, e), this.pending ? this.pending = this.pending.concat(s) : this.pending = s, this.pendingTotal += s.length, this.pending.length >= this._delta8) {
            s = this.pending;
            var h = s.length % this._delta8;
            this.pending = s.slice(s.length - h, s.length), this.pending.length === 0 && (this.pending = null), s = a.join32(s, 0, s.length - h, this.endian);
            for (var c = 0; c < s.length; c += this._delta32) this._update(s, c, c + this._delta32)
        }
        return this
    }, i.prototype.digest = function(s) {
        return this.update(this._pad()), r(this.pending === null), this._digest(s)
    }, i.prototype._pad = function() {
        var s = this.pendingTotal,
            e = this._delta8,
            h = e - (s + this.padLength) % e,
            c = new Array(h + this.padLength);
        c[0] = 128;
        for (var l = 1; l < h; l++) c[l] = 0;
        if (s <<= 3, this.endian === "big") {
            for (var p = 8; p < this.padLength; p++) c[l++] = 0;
            c[l++] = 0, c[l++] = 0, c[l++] = 0, c[l++] = 0, c[l++] = s >>> 24 & 255, c[l++] = s >>> 16 & 255, c[l++] = s >>> 8 & 255, c[l++] = s & 255
        } else
            for (c[l++] = s & 255, c[l++] = s >>> 8 & 255, c[l++] = s >>> 16 & 255, c[l++] = s >>> 24 & 255, c[l++] = 0, c[l++] = 0, c[l++] = 0, c[l++] = 0, p = 8; p < this.padLength; p++) c[l++] = 0;
        return c
    }, common$1
}
var sha = {},
    common = {},
    hasRequiredCommon;

function requireCommon() {
    if (hasRequiredCommon) return common;
    hasRequiredCommon = 1;
    var a = requireUtils(),
        r = a.rotr32;

    function i(f, m, w, x) {
        if (f === 0) return n(m, w, x);
        if (f === 1 || f === 3) return e(m, w, x);
        if (f === 2) return s(m, w, x)
    }
    common.ft_1 = i;

    function n(f, m, w) {
        return f & m ^ ~f & w
    }
    common.ch32 = n;

    function s(f, m, w) {
        return f & m ^ f & w ^ m & w
    }
    common.maj32 = s;

    function e(f, m, w) {
        return f ^ m ^ w
    }
    common.p32 = e;

    function h(f) {
        return r(f, 2) ^ r(f, 13) ^ r(f, 22)
    }
    common.s0_256 = h;

    function c(f) {
        return r(f, 6) ^ r(f, 11) ^ r(f, 25)
    }
    common.s1_256 = c;

    function l(f) {
        return r(f, 7) ^ r(f, 18) ^ f >>> 3
    }
    common.g0_256 = l;

    function p(f) {
        return r(f, 17) ^ r(f, 19) ^ f >>> 10
    }
    return common.g1_256 = p, common
}
var _1, hasRequired_1;

function require_1() {
    if (hasRequired_1) return _1;
    hasRequired_1 = 1;
    var a = requireUtils(),
        r = requireCommon$1(),
        i = requireCommon(),
        n = a.rotl32,
        s = a.sum32,
        e = a.sum32_5,
        h = i.ft_1,
        c = r.BlockHash,
        l = [1518500249, 1859775393, 2400959708, 3395469782];

    function p() {
        if (!(this instanceof p)) return new p;
        c.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.W = new Array(80)
    }
    return a.inherits(p, c), _1 = p, p.blockSize = 512, p.outSize = 160, p.hmacStrength = 80, p.padLength = 64, p.prototype._update = function(m, w) {
        for (var x = this.W, B = 0; B < 16; B++) x[B] = m[w + B];
        for (; B < x.length; B++) x[B] = n(x[B - 3] ^ x[B - 8] ^ x[B - 14] ^ x[B - 16], 1);
        var E = this.h[0],
            C = this.h[1],
            $ = this.h[2],
            I = this.h[3],
            D = this.h[4];
        for (B = 0; B < x.length; B++) {
            var j = ~~(B / 20),
                O = e(n(E, 5), h(j, C, $, I), D, x[B], l[j]);
            D = I, I = $, $ = n(C, 30), C = E, E = O
        }
        this.h[0] = s(this.h[0], E), this.h[1] = s(this.h[1], C), this.h[2] = s(this.h[2], $), this.h[3] = s(this.h[3], I), this.h[4] = s(this.h[4], D)
    }, p.prototype._digest = function(m) {
        return m === "hex" ? a.toHex32(this.h, "big") : a.split32(this.h, "big")
    }, _1
}
var _256, hasRequired_256;

function require_256() {
    if (hasRequired_256) return _256;
    hasRequired_256 = 1;
    var a = requireUtils(),
        r = requireCommon$1(),
        i = requireCommon(),
        n = requireMinimalisticAssert(),
        s = a.sum32,
        e = a.sum32_4,
        h = a.sum32_5,
        c = i.ch32,
        l = i.maj32,
        p = i.s0_256,
        f = i.s1_256,
        m = i.g0_256,
        w = i.g1_256,
        x = r.BlockHash,
        B = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298];

    function E() {
        if (!(this instanceof E)) return new E;
        x.call(this), this.h = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225], this.k = B, this.W = new Array(64)
    }
    return a.inherits(E, x), _256 = E, E.blockSize = 512, E.outSize = 256, E.hmacStrength = 192, E.padLength = 64, E.prototype._update = function($, I) {
        for (var D = this.W, j = 0; j < 16; j++) D[j] = $[I + j];
        for (; j < D.length; j++) D[j] = e(w(D[j - 2]), D[j - 7], m(D[j - 15]), D[j - 16]);
        var O = this.h[0],
            L = this.h[1],
            G = this.h[2],
            V = this.h[3],
            K = this.h[4],
            Q = this.h[5],
            P = this.h[6],
            q = this.h[7];
        for (n(this.k.length === D.length), j = 0; j < D.length; j++) {
            var b = h(q, f(K), c(K, Q, P), this.k[j], D[j]),
                t = s(p(O), l(O, L, G));
            q = P, P = Q, Q = K, K = s(V, b), V = G, G = L, L = O, O = s(b, t)
        }
        this.h[0] = s(this.h[0], O), this.h[1] = s(this.h[1], L), this.h[2] = s(this.h[2], G), this.h[3] = s(this.h[3], V), this.h[4] = s(this.h[4], K), this.h[5] = s(this.h[5], Q), this.h[6] = s(this.h[6], P), this.h[7] = s(this.h[7], q)
    }, E.prototype._digest = function($) {
        return $ === "hex" ? a.toHex32(this.h, "big") : a.split32(this.h, "big")
    }, _256
}
var _224, hasRequired_224;

function require_224() {
    if (hasRequired_224) return _224;
    hasRequired_224 = 1;
    var a = requireUtils(),
        r = require_256();

    function i() {
        if (!(this instanceof i)) return new i;
        r.call(this), this.h = [3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428]
    }
    return a.inherits(i, r), _224 = i, i.blockSize = 512, i.outSize = 224, i.hmacStrength = 192, i.padLength = 64, i.prototype._digest = function(s) {
        return s === "hex" ? a.toHex32(this.h.slice(0, 7), "big") : a.split32(this.h.slice(0, 7), "big")
    }, _224
}
var _512, hasRequired_512;

function require_512() {
    if (hasRequired_512) return _512;
    hasRequired_512 = 1;
    var a = requireUtils(),
        r = requireCommon$1(),
        i = requireMinimalisticAssert(),
        n = a.rotr64_hi,
        s = a.rotr64_lo,
        e = a.shr64_hi,
        h = a.shr64_lo,
        c = a.sum64,
        l = a.sum64_hi,
        p = a.sum64_lo,
        f = a.sum64_4_hi,
        m = a.sum64_4_lo,
        w = a.sum64_5_hi,
        x = a.sum64_5_lo,
        B = r.BlockHash,
        E = [1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591];

    function C() {
        if (!(this instanceof C)) return new C;
        B.call(this), this.h = [1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723, 2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199, 528734635, 4215389547, 1541459225, 327033209], this.k = E, this.W = new Array(160)
    }
    a.inherits(C, B), _512 = C, C.blockSize = 1024, C.outSize = 512, C.hmacStrength = 192, C.padLength = 128, C.prototype._prepareBlock = function(t, u) {
        for (var y = this.W, v = 0; v < 32; v++) y[v] = t[u + v];
        for (; v < y.length; v += 2) {
            var g = P(y[v - 4], y[v - 3]),
                S = q(y[v - 4], y[v - 3]),
                _ = y[v - 14],
                M = y[v - 13],
                d = K(y[v - 30], y[v - 29]),
                A = Q(y[v - 30], y[v - 29]),
                z = y[v - 32],
                U = y[v - 31];
            y[v] = f(g, S, _, M, d, A, z, U), y[v + 1] = m(g, S, _, M, d, A, z, U)
        }
    }, C.prototype._update = function(t, u) {
        this._prepareBlock(t, u);
        var y = this.W,
            v = this.h[0],
            g = this.h[1],
            S = this.h[2],
            _ = this.h[3],
            M = this.h[4],
            d = this.h[5],
            A = this.h[6],
            z = this.h[7],
            U = this.h[8],
            X = this.h[9],
            R = this.h[10],
            k = this.h[11],
            N = this.h[12],
            W = this.h[13],
            J = this.h[14],
            H = this.h[15];
        i(this.k.length === y.length);
        for (var Y = 0; Y < y.length; Y += 2) {
            var ne = J,
                re = H,
                Pe = G(U, X),
                ye = V(U, X),
                te = $(U, X, R, k, N),
                je = I(U, X, R, k, N, W),
                me = this.k[Y],
                Z = this.k[Y + 1],
                _e = y[Y],
                ae = y[Y + 1],
                ee = w(ne, re, Pe, ye, te, je, me, Z, _e, ae),
                De = x(ne, re, Pe, ye, te, je, me, Z, _e, ae);
            ne = O(v, g), re = L(v, g), Pe = D(v, g, S, _, M), ye = j(v, g, S, _, M, d);
            var ge = l(ne, re, Pe, ye),
                ie = p(ne, re, Pe, ye);
            J = N, H = W, N = R, W = k, R = U, k = X, U = l(A, z, ee, De), X = p(z, z, ee, De), A = M, z = d, M = S, d = _, S = v, _ = g, v = l(ee, De, ge, ie), g = p(ee, De, ge, ie)
        }
        c(this.h, 0, v, g), c(this.h, 2, S, _), c(this.h, 4, M, d), c(this.h, 6, A, z), c(this.h, 8, U, X), c(this.h, 10, R, k), c(this.h, 12, N, W), c(this.h, 14, J, H)
    }, C.prototype._digest = function(t) {
        return t === "hex" ? a.toHex32(this.h, "big") : a.split32(this.h, "big")
    };

    function $(b, t, u, y, v) {
        var g = b & u ^ ~b & v;
        return g < 0 && (g += 4294967296), g
    }

    function I(b, t, u, y, v, g) {
        var S = t & y ^ ~t & g;
        return S < 0 && (S += 4294967296), S
    }

    function D(b, t, u, y, v) {
        var g = b & u ^ b & v ^ u & v;
        return g < 0 && (g += 4294967296), g
    }

    function j(b, t, u, y, v, g) {
        var S = t & y ^ t & g ^ y & g;
        return S < 0 && (S += 4294967296), S
    }

    function O(b, t) {
        var u = n(b, t, 28),
            y = n(t, b, 2),
            v = n(t, b, 7),
            g = u ^ y ^ v;
        return g < 0 && (g += 4294967296), g
    }

    function L(b, t) {
        var u = s(b, t, 28),
            y = s(t, b, 2),
            v = s(t, b, 7),
            g = u ^ y ^ v;
        return g < 0 && (g += 4294967296), g
    }

    function G(b, t) {
        var u = n(b, t, 14),
            y = n(b, t, 18),
            v = n(t, b, 9),
            g = u ^ y ^ v;
        return g < 0 && (g += 4294967296), g
    }

    function V(b, t) {
        var u = s(b, t, 14),
            y = s(b, t, 18),
            v = s(t, b, 9),
            g = u ^ y ^ v;
        return g < 0 && (g += 4294967296), g
    }

    function K(b, t) {
        var u = n(b, t, 1),
            y = n(b, t, 8),
            v = e(b, t, 7),
            g = u ^ y ^ v;
        return g < 0 && (g += 4294967296), g
    }

    function Q(b, t) {
        var u = s(b, t, 1),
            y = s(b, t, 8),
            v = h(b, t, 7),
            g = u ^ y ^ v;
        return g < 0 && (g += 4294967296), g
    }

    function P(b, t) {
        var u = n(b, t, 19),
            y = n(t, b, 29),
            v = e(b, t, 6),
            g = u ^ y ^ v;
        return g < 0 && (g += 4294967296), g
    }

    function q(b, t) {
        var u = s(b, t, 19),
            y = s(t, b, 29),
            v = h(b, t, 6),
            g = u ^ y ^ v;
        return g < 0 && (g += 4294967296), g
    }
    return _512
}
var _384, hasRequired_384;

function require_384() {
    if (hasRequired_384) return _384;
    hasRequired_384 = 1;
    var a = requireUtils(),
        r = require_512();

    function i() {
        if (!(this instanceof i)) return new i;
        r.call(this), this.h = [3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999, 355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025, 3675008525, 1694076839, 1203062813, 3204075428]
    }
    return a.inherits(i, r), _384 = i, i.blockSize = 1024, i.outSize = 384, i.hmacStrength = 192, i.padLength = 128, i.prototype._digest = function(s) {
        return s === "hex" ? a.toHex32(this.h.slice(0, 12), "big") : a.split32(this.h.slice(0, 12), "big")
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
    var a = requireUtils(),
        r = requireCommon$1(),
        i = a.rotl32,
        n = a.sum32,
        s = a.sum32_3,
        e = a.sum32_4,
        h = r.BlockHash;

    function c() {
        if (!(this instanceof c)) return new c;
        h.call(this), this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520], this.endian = "little"
    }
    a.inherits(c, h), ripemd.ripemd160 = c, c.blockSize = 512, c.outSize = 160, c.hmacStrength = 192, c.padLength = 64, c.prototype._update = function(C, $) {
        for (var I = this.h[0], D = this.h[1], j = this.h[2], O = this.h[3], L = this.h[4], G = I, V = D, K = j, Q = O, P = L, q = 0; q < 80; q++) {
            var b = n(i(e(I, l(q, D, j, O), C[m[q] + $], p(q)), x[q]), L);
            I = L, L = O, O = i(j, 10), j = D, D = b, b = n(i(e(G, l(79 - q, V, K, Q), C[w[q] + $], f(q)), B[q]), P), G = P, P = Q, Q = i(K, 10), K = V, V = b
        }
        b = s(this.h[1], j, Q), this.h[1] = s(this.h[2], O, P), this.h[2] = s(this.h[3], L, G), this.h[3] = s(this.h[4], I, V), this.h[4] = s(this.h[0], D, K), this.h[0] = b
    }, c.prototype._digest = function(C) {
        return C === "hex" ? a.toHex32(this.h, "little") : a.split32(this.h, "little")
    };

    function l(E, C, $, I) {
        return E <= 15 ? C ^ $ ^ I : E <= 31 ? C & $ | ~C & I : E <= 47 ? (C | ~$) ^ I : E <= 63 ? C & I | $ & ~I : C ^ ($ | ~I)
    }

    function p(E) {
        return E <= 15 ? 0 : E <= 31 ? 1518500249 : E <= 47 ? 1859775393 : E <= 63 ? 2400959708 : 2840853838
    }

    function f(E) {
        return E <= 15 ? 1352829926 : E <= 31 ? 1548603684 : E <= 47 ? 1836072691 : E <= 63 ? 2053994217 : 0
    }
    var m = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6, 15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13, 11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9, 7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13],
        w = [5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5, 10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10, 0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10, 4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11],
        x = [11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9, 7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13, 6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9, 15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6],
        B = [8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8, 9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14, 13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5, 12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11];
    return ripemd
}
var hmac, hasRequiredHmac;

function requireHmac() {
    if (hasRequiredHmac) return hmac;
    hasRequiredHmac = 1;
    var a = requireUtils(),
        r = requireMinimalisticAssert();

    function i(n, s, e) {
        if (!(this instanceof i)) return new i(n, s, e);
        this.Hash = n, this.blockSize = n.blockSize / 8, this.outSize = n.outSize / 8, this.inner = null, this.outer = null, this._init(a.toArray(s, e))
    }
    return hmac = i, i.prototype._init = function(s) {
        s.length > this.blockSize && (s = new this.Hash().update(s).digest()), r(s.length <= this.blockSize);
        for (var e = s.length; e < this.blockSize; e++) s.push(0);
        for (e = 0; e < s.length; e++) s[e] ^= 54;
        for (this.inner = new this.Hash().update(s), e = 0; e < s.length; e++) s[e] ^= 106;
        this.outer = new this.Hash().update(s)
    }, i.prototype.update = function(s, e) {
        return this.inner.update(s, e), this
    }, i.prototype.digest = function(s) {
        return this.outer.update(this.inner.digest()), this.outer.digest(s)
    }, hmac
}
var hasRequiredHash;

function requireHash() {
    return hasRequiredHash || (hasRequiredHash = 1, (function(a) {
        var r = a;
        r.utils = requireUtils(), r.common = requireCommon$1(), r.sha = requireSha(), r.ripemd = requireRipemd(), r.hmac = requireHmac(), r.sha1 = r.sha.sha1, r.sha256 = r.sha.sha256, r.sha224 = r.sha.sha224, r.sha384 = r.sha.sha384, r.sha512 = r.sha.sha512, r.ripemd160 = r.ripemd.ripemd160
    })(hash)), hash
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
    return hasRequiredCurves || (hasRequiredCurves = 1, (function(a) {
        var r = a,
            i = requireHash(),
            n = requireCurve(),
            s = requireUtils$1(),
            e = s.assert;

        function h(p) {
            p.type === "short" ? this.curve = new n.short(p) : p.type === "edwards" ? this.curve = new n.edwards(p) : this.curve = new n.mont(p), this.g = this.curve.g, this.n = this.curve.n, this.hash = p.hash, e(this.g.validate(), "Invalid curve"), e(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O")
        }
        r.PresetCurve = h;

        function c(p, f) {
            Object.defineProperty(r, p, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    var m = new h(f);
                    return Object.defineProperty(r, p, {
                        configurable: !0,
                        enumerable: !0,
                        value: m
                    }), m
                }
            })
        }
        c("p192", {
            type: "short",
            prime: "p192",
            p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
            b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
            n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
            hash: i.sha256,
            gRed: !1,
            g: ["188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012", "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811"]
        }), c("p224", {
            type: "short",
            prime: "p224",
            p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
            a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
            b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
            n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
            hash: i.sha256,
            gRed: !1,
            g: ["b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21", "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34"]
        }), c("p256", {
            type: "short",
            prime: null,
            p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
            a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
            b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
            n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
            hash: i.sha256,
            gRed: !1,
            g: ["6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296", "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5"]
        }), c("p384", {
            type: "short",
            prime: null,
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
            a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
            b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
            n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
            hash: i.sha384,
            gRed: !1,
            g: ["aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7", "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f"]
        }), c("p521", {
            type: "short",
            prime: null,
            p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
            a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
            b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
            n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
            hash: i.sha512,
            gRed: !1,
            g: ["000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66", "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650"]
        }), c("curve25519", {
            type: "mont",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "76d06",
            b: "1",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: i.sha256,
            gRed: !1,
            g: ["9"]
        }), c("ed25519", {
            type: "edwards",
            prime: "p25519",
            p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
            a: "-1",
            c: "1",
            d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
            n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
            hash: i.sha256,
            gRed: !1,
            g: ["216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a", "6666666666666666666666666666666666666666666666666666666666666658"]
        });
        var l;
        try {
            l = requireSecp256k1()
        } catch {
            l = void 0
        }
        c("secp256k1", {
            type: "short",
            prime: "k256",
            p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
            a: "0",
            b: "7",
            n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
            h: "1",
            hash: i.sha256,
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
            g: ["79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798", "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8", l]
        })
    })(curves)), curves
}
var hmacDrbg, hasRequiredHmacDrbg;

function requireHmacDrbg() {
    if (hasRequiredHmacDrbg) return hmacDrbg;
    hasRequiredHmacDrbg = 1;
    var a = requireHash(),
        r = requireUtils$2(),
        i = requireMinimalisticAssert();

    function n(s) {
        if (!(this instanceof n)) return new n(s);
        this.hash = s.hash, this.predResist = !!s.predResist, this.outLen = this.hash.outSize, this.minEntropy = s.minEntropy || this.hash.hmacStrength, this._reseed = null, this.reseedInterval = null, this.K = null, this.V = null;
        var e = r.toArray(s.entropy, s.entropyEnc || "hex"),
            h = r.toArray(s.nonce, s.nonceEnc || "hex"),
            c = r.toArray(s.pers, s.persEnc || "hex");
        i(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._init(e, h, c)
    }
    return hmacDrbg = n, n.prototype._init = function(e, h, c) {
        var l = e.concat(h).concat(c);
        this.K = new Array(this.outLen / 8), this.V = new Array(this.outLen / 8);
        for (var p = 0; p < this.V.length; p++) this.K[p] = 0, this.V[p] = 1;
        this._update(l), this._reseed = 1, this.reseedInterval = 281474976710656
    }, n.prototype._hmac = function() {
        return new a.hmac(this.hash, this.K)
    }, n.prototype._update = function(e) {
        var h = this._hmac().update(this.V).update([0]);
        e && (h = h.update(e)), this.K = h.digest(), this.V = this._hmac().update(this.V).digest(), e && (this.K = this._hmac().update(this.V).update([1]).update(e).digest(), this.V = this._hmac().update(this.V).digest())
    }, n.prototype.reseed = function(e, h, c, l) {
        typeof h != "string" && (l = c, c = h, h = null), e = r.toArray(e, h), c = r.toArray(c, l), i(e.length >= this.minEntropy / 8, "Not enough entropy. Minimum is: " + this.minEntropy + " bits"), this._update(e.concat(c || [])), this._reseed = 1
    }, n.prototype.generate = function(e, h, c, l) {
        if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
        typeof h != "string" && (l = c, c = h, h = null), c && (c = r.toArray(c, l || "hex"), this._update(c));
        for (var p = []; p.length < e;) this.V = this._hmac().update(this.V).digest(), p = p.concat(this.V);
        var f = p.slice(0, e);
        return this._update(c), this._reseed++, r.encode(f, h)
    }, hmacDrbg
}
var key$1, hasRequiredKey$1;

function requireKey$1() {
    if (hasRequiredKey$1) return key$1;
    hasRequiredKey$1 = 1;
    var a = requireBn$2(),
        r = requireUtils$1(),
        i = r.assert;

    function n(s, e) {
        this.ec = s, this.priv = null, this.pub = null, e.priv && this._importPrivate(e.priv, e.privEnc), e.pub && this._importPublic(e.pub, e.pubEnc)
    }
    return key$1 = n, n.fromPublic = function(e, h, c) {
        return h instanceof n ? h : new n(e, {
            pub: h,
            pubEnc: c
        })
    }, n.fromPrivate = function(e, h, c) {
        return h instanceof n ? h : new n(e, {
            priv: h,
            privEnc: c
        })
    }, n.prototype.validate = function() {
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
    }, n.prototype.getPublic = function(e, h) {
        return typeof e == "string" && (h = e, e = null), this.pub || (this.pub = this.ec.g.mul(this.priv)), h ? this.pub.encode(h, e) : this.pub
    }, n.prototype.getPrivate = function(e) {
        return e === "hex" ? this.priv.toString(16, 2) : this.priv
    }, n.prototype._importPrivate = function(e, h) {
        this.priv = new a(e, h || 16), this.priv = this.priv.umod(this.ec.curve.n)
    }, n.prototype._importPublic = function(e, h) {
        if (e.x || e.y) {
            this.ec.curve.type === "mont" ? i(e.x, "Need x coordinate") : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") && i(e.x && e.y, "Need both x and y coordinate"), this.pub = this.ec.curve.point(e.x, e.y);
            return
        }
        this.pub = this.ec.curve.decodePoint(e, h)
    }, n.prototype.derive = function(e) {
        return e.validate() || i(e.validate(), "public point not validated"), e.mul(this.priv).getX()
    }, n.prototype.sign = function(e, h, c) {
        return this.ec.sign(e, this, h, c)
    }, n.prototype.verify = function(e, h, c) {
        return this.ec.verify(e, h, this, void 0, c)
    }, n.prototype.inspect = function() {
        return "<Key priv: " + (this.priv && this.priv.toString(16, 2)) + " pub: " + (this.pub && this.pub.inspect()) + " >"
    }, key$1
}
var signature$1, hasRequiredSignature$1;

function requireSignature$1() {
    if (hasRequiredSignature$1) return signature$1;
    hasRequiredSignature$1 = 1;
    var a = requireBn$2(),
        r = requireUtils$1(),
        i = r.assert;

    function n(l, p) {
        if (l instanceof n) return l;
        this._importDER(l, p) || (i(l.r && l.s, "Signature without r or s"), this.r = new a(l.r, 16), this.s = new a(l.s, 16), l.recoveryParam === void 0 ? this.recoveryParam = null : this.recoveryParam = l.recoveryParam)
    }
    signature$1 = n;

    function s() {
        this.place = 0
    }

    function e(l, p) {
        var f = l[p.place++];
        if (!(f & 128)) return f;
        var m = f & 15;
        if (m === 0 || m > 4 || l[p.place] === 0) return !1;
        for (var w = 0, x = 0, B = p.place; x < m; x++, B++) w <<= 8, w |= l[B], w >>>= 0;
        return w <= 127 ? !1 : (p.place = B, w)
    }

    function h(l) {
        for (var p = 0, f = l.length - 1; !l[p] && !(l[p + 1] & 128) && p < f;) p++;
        return p === 0 ? l : l.slice(p)
    }
    n.prototype._importDER = function(p, f) {
        p = r.toArray(p, f);
        var m = new s;
        if (p[m.place++] !== 48) return !1;
        var w = e(p, m);
        if (w === !1 || w + m.place !== p.length || p[m.place++] !== 2) return !1;
        var x = e(p, m);
        if (x === !1 || (p[m.place] & 128) !== 0) return !1;
        var B = p.slice(m.place, x + m.place);
        if (m.place += x, p[m.place++] !== 2) return !1;
        var E = e(p, m);
        if (E === !1 || p.length !== E + m.place || (p[m.place] & 128) !== 0) return !1;
        var C = p.slice(m.place, E + m.place);
        if (B[0] === 0)
            if (B[1] & 128) B = B.slice(1);
            else return !1;
        if (C[0] === 0)
            if (C[1] & 128) C = C.slice(1);
            else return !1;
        return this.r = new a(B), this.s = new a(C), this.recoveryParam = null, !0
    };

    function c(l, p) {
        if (p < 128) {
            l.push(p);
            return
        }
        var f = 1 + (Math.log(p) / Math.LN2 >>> 3);
        for (l.push(f | 128); --f;) l.push(p >>> (f << 3) & 255);
        l.push(p)
    }
    return n.prototype.toDER = function(p) {
        var f = this.r.toArray(),
            m = this.s.toArray();
        for (f[0] & 128 && (f = [0].concat(f)), m[0] & 128 && (m = [0].concat(m)), f = h(f), m = h(m); !m[0] && !(m[1] & 128);) m = m.slice(1);
        var w = [2];
        c(w, f.length), w = w.concat(f), w.push(2), c(w, m.length);
        var x = w.concat(m),
            B = [48];
        return c(B, x.length), B = B.concat(x), r.encode(B, p)
    }, signature$1
}
var ec, hasRequiredEc;

function requireEc() {
    if (hasRequiredEc) return ec;
    hasRequiredEc = 1;
    var a = requireBn$2(),
        r = requireHmacDrbg(),
        i = requireUtils$1(),
        n = requireCurves(),
        s = requireBrorand(),
        e = i.assert,
        h = requireKey$1(),
        c = requireSignature$1();

    function l(p) {
        if (!(this instanceof l)) return new l(p);
        typeof p == "string" && (e(Object.prototype.hasOwnProperty.call(n, p), "Unknown curve " + p), p = n[p]), p instanceof n.PresetCurve && (p = {
            curve: p
        }), this.curve = p.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = p.curve.g, this.g.precompute(p.curve.n.bitLength() + 1), this.hash = p.hash || p.curve.hash
    }
    return ec = l, l.prototype.keyPair = function(f) {
        return new h(this, f)
    }, l.prototype.keyFromPrivate = function(f, m) {
        return h.fromPrivate(this, f, m)
    }, l.prototype.keyFromPublic = function(f, m) {
        return h.fromPublic(this, f, m)
    }, l.prototype.genKeyPair = function(f) {
        f || (f = {});
        for (var m = new r({
                hash: this.hash,
                pers: f.pers,
                persEnc: f.persEnc || "utf8",
                entropy: f.entropy || s(this.hash.hmacStrength),
                entropyEnc: f.entropy && f.entropyEnc || "utf8",
                nonce: this.n.toArray()
            }), w = this.n.byteLength(), x = this.n.sub(new a(2));;) {
            var B = new a(m.generate(w));
            if (!(B.cmp(x) > 0)) return B.iaddn(1), this.keyFromPrivate(B)
        }
    }, l.prototype._truncateToN = function(f, m, w) {
        var x;
        if (a.isBN(f) || typeof f == "number") f = new a(f, 16), x = f.byteLength();
        else if (typeof f == "object") x = f.length, f = new a(f, 16);
        else {
            var B = f.toString();
            x = B.length + 1 >>> 1, f = new a(B, 16)
        }
        typeof w != "number" && (w = x * 8);
        var E = w - this.n.bitLength();
        return E > 0 && (f = f.ushrn(E)), !m && f.cmp(this.n) >= 0 ? f.sub(this.n) : f
    }, l.prototype.sign = function(f, m, w, x) {
        if (typeof w == "object" && (x = w, w = null), x || (x = {}), typeof f != "string" && typeof f != "number" && !a.isBN(f)) {
            e(typeof f == "object" && f && typeof f.length == "number", "Expected message to be an array-like, a hex string, or a BN instance"), e(f.length >>> 0 === f.length);
            for (var B = 0; B < f.length; B++) e((f[B] & 255) === f[B])
        }
        m = this.keyFromPrivate(m, w), f = this._truncateToN(f, !1, x.msgBitLength), e(!f.isNeg(), "Can not sign a negative message");
        var E = this.n.byteLength(),
            C = m.getPrivate().toArray("be", E),
            $ = f.toArray("be", E);
        e(new a($).eq(f), "Can not sign message");
        for (var I = new r({
                hash: this.hash,
                entropy: C,
                nonce: $,
                pers: x.pers,
                persEnc: x.persEnc || "utf8"
            }), D = this.n.sub(new a(1)), j = 0;; j++) {
            var O = x.k ? x.k(j) : new a(I.generate(this.n.byteLength()));
            if (O = this._truncateToN(O, !0), !(O.cmpn(1) <= 0 || O.cmp(D) >= 0)) {
                var L = this.g.mul(O);
                if (!L.isInfinity()) {
                    var G = L.getX(),
                        V = G.umod(this.n);
                    if (V.cmpn(0) !== 0) {
                        var K = O.invm(this.n).mul(V.mul(m.getPrivate()).iadd(f));
                        if (K = K.umod(this.n), K.cmpn(0) !== 0) {
                            var Q = (L.getY().isOdd() ? 1 : 0) | (G.cmp(V) !== 0 ? 2 : 0);
                            return x.canonical && K.cmp(this.nh) > 0 && (K = this.n.sub(K), Q ^= 1), new c({
                                r: V,
                                s: K,
                                recoveryParam: Q
                            })
                        }
                    }
                }
            }
        }
    }, l.prototype.verify = function(f, m, w, x, B) {
        B || (B = {}), f = this._truncateToN(f, !1, B.msgBitLength), w = this.keyFromPublic(w, x), m = new c(m, "hex");
        var E = m.r,
            C = m.s;
        if (E.cmpn(1) < 0 || E.cmp(this.n) >= 0 || C.cmpn(1) < 0 || C.cmp(this.n) >= 0) return !1;
        var $ = C.invm(this.n),
            I = $.mul(f).umod(this.n),
            D = $.mul(E).umod(this.n),
            j;
        return this.curve._maxwellTrick ? (j = this.g.jmulAdd(I, w.getPublic(), D), j.isInfinity() ? !1 : j.eqXToP(E)) : (j = this.g.mulAdd(I, w.getPublic(), D), j.isInfinity() ? !1 : j.getX().umod(this.n).cmp(E) === 0)
    }, l.prototype.recoverPubKey = function(p, f, m, w) {
        e((3 & m) === m, "The recovery param is more than two bits"), f = new c(f, w);
        var x = this.n,
            B = new a(p),
            E = f.r,
            C = f.s,
            $ = m & 1,
            I = m >> 1;
        if (E.cmp(this.curve.p.umod(this.curve.n)) >= 0 && I) throw new Error("Unable to find sencond key candinate");
        I ? E = this.curve.pointFromX(E.add(this.curve.n), $) : E = this.curve.pointFromX(E, $);
        var D = f.r.invm(x),
            j = x.sub(B).mul(D).umod(x),
            O = C.mul(D).umod(x);
        return this.g.mulAdd(j, E, O)
    }, l.prototype.getKeyRecoveryParam = function(p, f, m, w) {
        if (f = new c(f, w), f.recoveryParam !== null) return f.recoveryParam;
        for (var x = 0; x < 4; x++) {
            var B;
            try {
                B = this.recoverPubKey(p, f, x)
            } catch {
                continue
            }
            if (B.eq(m)) return x
        }
        throw new Error("Unable to find valid recovery factor")
    }, ec
}
var key, hasRequiredKey;

function requireKey() {
    if (hasRequiredKey) return key;
    hasRequiredKey = 1;
    var a = requireUtils$1(),
        r = a.assert,
        i = a.parseBytes,
        n = a.cachedProperty;

    function s(e, h) {
        this.eddsa = e, this._secret = i(h.secret), e.isPoint(h.pub) ? this._pub = h.pub : this._pubBytes = i(h.pub)
    }
    return s.fromPublic = function(h, c) {
        return c instanceof s ? c : new s(h, {
            pub: c
        })
    }, s.fromSecret = function(h, c) {
        return c instanceof s ? c : new s(h, {
            secret: c
        })
    }, s.prototype.secret = function() {
        return this._secret
    }, n(s, "pubBytes", function() {
        return this.eddsa.encodePoint(this.pub())
    }), n(s, "pub", function() {
        return this._pubBytes ? this.eddsa.decodePoint(this._pubBytes) : this.eddsa.g.mul(this.priv())
    }), n(s, "privBytes", function() {
        var h = this.eddsa,
            c = this.hash(),
            l = h.encodingLength - 1,
            p = c.slice(0, h.encodingLength);
        return p[0] &= 248, p[l] &= 127, p[l] |= 64, p
    }), n(s, "priv", function() {
        return this.eddsa.decodeInt(this.privBytes())
    }), n(s, "hash", function() {
        return this.eddsa.hash().update(this.secret()).digest()
    }), n(s, "messagePrefix", function() {
        return this.hash().slice(this.eddsa.encodingLength)
    }), s.prototype.sign = function(h) {
        return r(this._secret, "KeyPair can only verify"), this.eddsa.sign(h, this)
    }, s.prototype.verify = function(h, c) {
        return this.eddsa.verify(h, c, this)
    }, s.prototype.getSecret = function(h) {
        return r(this._secret, "KeyPair is public only"), a.encode(this.secret(), h)
    }, s.prototype.getPublic = function(h) {
        return a.encode(this.pubBytes(), h)
    }, key = s, key
}
var signature, hasRequiredSignature;

function requireSignature() {
    if (hasRequiredSignature) return signature;
    hasRequiredSignature = 1;
    var a = requireBn$2(),
        r = requireUtils$1(),
        i = r.assert,
        n = r.cachedProperty,
        s = r.parseBytes;

    function e(h, c) {
        this.eddsa = h, typeof c != "object" && (c = s(c)), Array.isArray(c) && (i(c.length === h.encodingLength * 2, "Signature has invalid size"), c = {
            R: c.slice(0, h.encodingLength),
            S: c.slice(h.encodingLength)
        }), i(c.R && c.S, "Signature without R or S"), h.isPoint(c.R) && (this._R = c.R), c.S instanceof a && (this._S = c.S), this._Rencoded = Array.isArray(c.R) ? c.R : c.Rencoded, this._Sencoded = Array.isArray(c.S) ? c.S : c.Sencoded
    }
    return n(e, "S", function() {
        return this.eddsa.decodeInt(this.Sencoded())
    }), n(e, "R", function() {
        return this.eddsa.decodePoint(this.Rencoded())
    }), n(e, "Rencoded", function() {
        return this.eddsa.encodePoint(this.R())
    }), n(e, "Sencoded", function() {
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
    var a = requireHash(),
        r = requireCurves(),
        i = requireUtils$1(),
        n = i.assert,
        s = i.parseBytes,
        e = requireKey(),
        h = requireSignature();

    function c(l) {
        if (n(l === "ed25519", "only tested with ed25519 so far"), !(this instanceof c)) return new c(l);
        l = r[l].curve, this.curve = l, this.g = l.g, this.g.precompute(l.n.bitLength() + 1), this.pointClass = l.point().constructor, this.encodingLength = Math.ceil(l.n.bitLength() / 8), this.hash = a.sha512
    }
    return eddsa = c, c.prototype.sign = function(p, f) {
        p = s(p);
        var m = this.keyFromSecret(f),
            w = this.hashInt(m.messagePrefix(), p),
            x = this.g.mul(w),
            B = this.encodePoint(x),
            E = this.hashInt(B, m.pubBytes(), p).mul(m.priv()),
            C = w.add(E).umod(this.curve.n);
        return this.makeSignature({
            R: x,
            S: C,
            Rencoded: B
        })
    }, c.prototype.verify = function(p, f, m) {
        if (p = s(p), f = this.makeSignature(f), f.S().gte(f.eddsa.curve.n) || f.S().isNeg()) return !1;
        var w = this.keyFromPublic(m),
            x = this.hashInt(f.Rencoded(), w.pubBytes(), p),
            B = this.g.mul(f.S()),
            E = f.R().add(w.pub().mul(x));
        return E.eq(B)
    }, c.prototype.hashInt = function() {
        for (var p = this.hash(), f = 0; f < arguments.length; f++) p.update(arguments[f]);
        return i.intFromLE(p.digest()).umod(this.curve.n)
    }, c.prototype.keyFromPublic = function(p) {
        return e.fromPublic(this, p)
    }, c.prototype.keyFromSecret = function(p) {
        return e.fromSecret(this, p)
    }, c.prototype.makeSignature = function(p) {
        return p instanceof h ? p : new h(this, p)
    }, c.prototype.encodePoint = function(p) {
        var f = p.getY().toArray("le", this.encodingLength);
        return f[this.encodingLength - 1] |= p.getX().isOdd() ? 128 : 0, f
    }, c.prototype.decodePoint = function(p) {
        p = i.parseBytes(p);
        var f = p.length - 1,
            m = p.slice(0, f).concat(p[f] & -129),
            w = (p[f] & 128) !== 0,
            x = i.intFromLE(m);
        return this.curve.pointFromY(x, w)
    }, c.prototype.encodeInt = function(p) {
        return p.toArray("le", this.encodingLength)
    }, c.prototype.decodeInt = function(p) {
        return i.intFromLE(p)
    }, c.prototype.isPoint = function(p) {
        return p instanceof this.pointClass
    }, eddsa
}
var hasRequiredElliptic;

function requireElliptic() {
    return hasRequiredElliptic || (hasRequiredElliptic = 1, (function(a) {
        var r = a;
        r.version = require$$0$1.version, r.utils = requireUtils$1(), r.rand = requireBrorand(), r.curve = requireCurve(), r.curves = requireCurves(), r.ec = requireEc(), r.eddsa = requireEddsa()
    })(elliptic)), elliptic
}
var bn$1 = {
        exports: {}
    },
    bn = bn$1.exports,
    hasRequiredBn;

function requireBn() {
    return hasRequiredBn || (hasRequiredBn = 1, (function(a) {
        (function(r, i) {
            function n(b, t) {
                if (!b) throw new Error(t || "Assertion failed")
            }

            function s(b, t) {
                b.super_ = t;
                var u = function() {};
                u.prototype = t.prototype, b.prototype = new u, b.prototype.constructor = b
            }

            function e(b, t, u) {
                if (e.isBN(b)) return b;
                this.negative = 0, this.words = null, this.length = 0, this.red = null, b !== null && ((t === "le" || t === "be") && (u = t, t = 10), this._init(b || 0, t || 10, u || "be"))
            }
            typeof r == "object" ? r.exports = e : i.BN = e, e.BN = e, e.wordSize = 26;
            var h;
            try {
                typeof window < "u" && typeof window.Buffer < "u" ? h = window.Buffer : h = requireDist$1().Buffer
            } catch {}
            e.isBN = function(t) {
                return t instanceof e ? !0 : t !== null && typeof t == "object" && t.constructor.wordSize === e.wordSize && Array.isArray(t.words)
            }, e.max = function(t, u) {
                return t.cmp(u) > 0 ? t : u
            }, e.min = function(t, u) {
                return t.cmp(u) < 0 ? t : u
            }, e.prototype._init = function(t, u, y) {
                if (typeof t == "number") return this._initNumber(t, u, y);
                if (typeof t == "object") return this._initArray(t, u, y);
                u === "hex" && (u = 16), n(u === (u | 0) && u >= 2 && u <= 36), t = t.toString().replace(/\s+/g, "");
                var v = 0;
                t[0] === "-" && (v++, this.negative = 1), v < t.length && (u === 16 ? this._parseHex(t, v, y) : (this._parseBase(t, u, v), y === "le" && this._initArray(this.toArray(), u, y)))
            }, e.prototype._initNumber = function(t, u, y) {
                t < 0 && (this.negative = 1, t = -t), t < 67108864 ? (this.words = [t & 67108863], this.length = 1) : t < 4503599627370496 ? (this.words = [t & 67108863, t / 67108864 & 67108863], this.length = 2) : (n(t < 9007199254740992), this.words = [t & 67108863, t / 67108864 & 67108863, 1], this.length = 3), y === "le" && this._initArray(this.toArray(), u, y)
            }, e.prototype._initArray = function(t, u, y) {
                if (n(typeof t.length == "number"), t.length <= 0) return this.words = [0], this.length = 1, this;
                this.length = Math.ceil(t.length / 3), this.words = new Array(this.length);
                for (var v = 0; v < this.length; v++) this.words[v] = 0;
                var g, S, _ = 0;
                if (y === "be")
                    for (v = t.length - 1, g = 0; v >= 0; v -= 3) S = t[v] | t[v - 1] << 8 | t[v - 2] << 16, this.words[g] |= S << _ & 67108863, this.words[g + 1] = S >>> 26 - _ & 67108863, _ += 24, _ >= 26 && (_ -= 26, g++);
                else if (y === "le")
                    for (v = 0, g = 0; v < t.length; v += 3) S = t[v] | t[v + 1] << 8 | t[v + 2] << 16, this.words[g] |= S << _ & 67108863, this.words[g + 1] = S >>> 26 - _ & 67108863, _ += 24, _ >= 26 && (_ -= 26, g++);
                return this._strip()
            };

            function c(b, t) {
                var u = b.charCodeAt(t);
                if (u >= 48 && u <= 57) return u - 48;
                if (u >= 65 && u <= 70) return u - 55;
                if (u >= 97 && u <= 102) return u - 87;
                n(!1, "Invalid character in " + b)
            }

            function l(b, t, u) {
                var y = c(b, u);
                return u - 1 >= t && (y |= c(b, u - 1) << 4), y
            }
            e.prototype._parseHex = function(t, u, y) {
                this.length = Math.ceil((t.length - u) / 6), this.words = new Array(this.length);
                for (var v = 0; v < this.length; v++) this.words[v] = 0;
                var g = 0,
                    S = 0,
                    _;
                if (y === "be")
                    for (v = t.length - 1; v >= u; v -= 2) _ = l(t, u, v) << g, this.words[S] |= _ & 67108863, g >= 18 ? (g -= 18, S += 1, this.words[S] |= _ >>> 26) : g += 8;
                else {
                    var M = t.length - u;
                    for (v = M % 2 === 0 ? u + 1 : u; v < t.length; v += 2) _ = l(t, u, v) << g, this.words[S] |= _ & 67108863, g >= 18 ? (g -= 18, S += 1, this.words[S] |= _ >>> 26) : g += 8
                }
                this._strip()
            };

            function p(b, t, u, y) {
                for (var v = 0, g = 0, S = Math.min(b.length, u), _ = t; _ < S; _++) {
                    var M = b.charCodeAt(_) - 48;
                    v *= y, M >= 49 ? g = M - 49 + 10 : M >= 17 ? g = M - 17 + 10 : g = M, n(M >= 0 && g < y, "Invalid character"), v += g
                }
                return v
            }
            e.prototype._parseBase = function(t, u, y) {
                this.words = [0], this.length = 1;
                for (var v = 0, g = 1; g <= 67108863; g *= u) v++;
                v--, g = g / u | 0;
                for (var S = t.length - y, _ = S % v, M = Math.min(S, S - _) + y, d = 0, A = y; A < M; A += v) d = p(t, A, A + v, u), this.imuln(g), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d);
                if (_ !== 0) {
                    var z = 1;
                    for (d = p(t, A, t.length, u), A = 0; A < _; A++) z *= u;
                    this.imuln(z), this.words[0] + d < 67108864 ? this.words[0] += d : this._iaddn(d)
                }
                this._strip()
            }, e.prototype.copy = function(t) {
                t.words = new Array(this.length);
                for (var u = 0; u < this.length; u++) t.words[u] = this.words[u];
                t.length = this.length, t.negative = this.negative, t.red = this.red
            };

            function f(b, t) {
                b.words = t.words, b.length = t.length, b.negative = t.negative, b.red = t.red
            }
            if (e.prototype._move = function(t) {
                    f(t, this)
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
                e.prototype[Symbol.for("nodejs.util.inspect.custom")] = m
            } catch {
                e.prototype.inspect = m
            } else e.prototype.inspect = m;

            function m() {
                return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">"
            }
            var w = ["", "0", "00", "000", "0000", "00000", "000000", "0000000", "00000000", "000000000", "0000000000", "00000000000", "000000000000", "0000000000000", "00000000000000", "000000000000000", "0000000000000000", "00000000000000000", "000000000000000000", "0000000000000000000", "00000000000000000000", "000000000000000000000", "0000000000000000000000", "00000000000000000000000", "000000000000000000000000", "0000000000000000000000000"],
                x = [0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
                B = [0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607, 16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536, 11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101, 5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368, 20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875, 60466176];
            e.prototype.toString = function(t, u) {
                t = t || 10, u = u | 0 || 1;
                var y;
                if (t === 16 || t === "hex") {
                    y = "";
                    for (var v = 0, g = 0, S = 0; S < this.length; S++) {
                        var _ = this.words[S],
                            M = ((_ << v | g) & 16777215).toString(16);
                        g = _ >>> 24 - v & 16777215, v += 2, v >= 26 && (v -= 26, S--), g !== 0 || S !== this.length - 1 ? y = w[6 - M.length] + M + y : y = M + y
                    }
                    for (g !== 0 && (y = g.toString(16) + y); y.length % u !== 0;) y = "0" + y;
                    return this.negative !== 0 && (y = "-" + y), y
                }
                if (t === (t | 0) && t >= 2 && t <= 36) {
                    var d = x[t],
                        A = B[t];
                    y = "";
                    var z = this.clone();
                    for (z.negative = 0; !z.isZero();) {
                        var U = z.modrn(A).toString(t);
                        z = z.idivn(A), z.isZero() ? y = U + y : y = w[d - U.length] + U + y
                    }
                    for (this.isZero() && (y = "0" + y); y.length % u !== 0;) y = "0" + y;
                    return this.negative !== 0 && (y = "-" + y), y
                }
                n(!1, "Base should be between 2 and 36")
            }, e.prototype.toNumber = function() {
                var t = this.words[0];
                return this.length === 2 ? t += this.words[1] * 67108864 : this.length === 3 && this.words[2] === 1 ? t += 4503599627370496 + this.words[1] * 67108864 : this.length > 2 && n(!1, "Number can only safely store up to 53 bits"), this.negative !== 0 ? -t : t
            }, e.prototype.toJSON = function() {
                return this.toString(16, 2)
            }, h && (e.prototype.toBuffer = function(t, u) {
                return this.toArrayLike(h, t, u)
            }), e.prototype.toArray = function(t, u) {
                return this.toArrayLike(Array, t, u)
            };
            var E = function(t, u) {
                return t.allocUnsafe ? t.allocUnsafe(u) : new t(u)
            };
            e.prototype.toArrayLike = function(t, u, y) {
                this._strip();
                var v = this.byteLength(),
                    g = y || Math.max(1, v);
                n(v <= g, "byte array longer than desired length"), n(g > 0, "Requested array length <= 0");
                var S = E(t, g),
                    _ = u === "le" ? "LE" : "BE";
                return this["_toArrayLike" + _](S, v), S
            }, e.prototype._toArrayLikeLE = function(t, u) {
                for (var y = 0, v = 0, g = 0, S = 0; g < this.length; g++) {
                    var _ = this.words[g] << S | v;
                    t[y++] = _ & 255, y < t.length && (t[y++] = _ >> 8 & 255), y < t.length && (t[y++] = _ >> 16 & 255), S === 6 ? (y < t.length && (t[y++] = _ >> 24 & 255), v = 0, S = 0) : (v = _ >>> 24, S += 2)
                }
                if (y < t.length)
                    for (t[y++] = v; y < t.length;) t[y++] = 0
            }, e.prototype._toArrayLikeBE = function(t, u) {
                for (var y = t.length - 1, v = 0, g = 0, S = 0; g < this.length; g++) {
                    var _ = this.words[g] << S | v;
                    t[y--] = _ & 255, y >= 0 && (t[y--] = _ >> 8 & 255), y >= 0 && (t[y--] = _ >> 16 & 255), S === 6 ? (y >= 0 && (t[y--] = _ >> 24 & 255), v = 0, S = 0) : (v = _ >>> 24, S += 2)
                }
                if (y >= 0)
                    for (t[y--] = v; y >= 0;) t[y--] = 0
            }, Math.clz32 ? e.prototype._countBits = function(t) {
                return 32 - Math.clz32(t)
            } : e.prototype._countBits = function(t) {
                var u = t,
                    y = 0;
                return u >= 4096 && (y += 13, u >>>= 13), u >= 64 && (y += 7, u >>>= 7), u >= 8 && (y += 4, u >>>= 4), u >= 2 && (y += 2, u >>>= 2), y + u
            }, e.prototype._zeroBits = function(t) {
                if (t === 0) return 26;
                var u = t,
                    y = 0;
                return (u & 8191) === 0 && (y += 13, u >>>= 13), (u & 127) === 0 && (y += 7, u >>>= 7), (u & 15) === 0 && (y += 4, u >>>= 4), (u & 3) === 0 && (y += 2, u >>>= 2), (u & 1) === 0 && y++, y
            }, e.prototype.bitLength = function() {
                var t = this.words[this.length - 1],
                    u = this._countBits(t);
                return (this.length - 1) * 26 + u
            };

            function C(b) {
                for (var t = new Array(b.bitLength()), u = 0; u < t.length; u++) {
                    var y = u / 26 | 0,
                        v = u % 26;
                    t[u] = b.words[y] >>> v & 1
                }
                return t
            }
            e.prototype.zeroBits = function() {
                if (this.isZero()) return 0;
                for (var t = 0, u = 0; u < this.length; u++) {
                    var y = this._zeroBits(this.words[u]);
                    if (t += y, y !== 26) break
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
                for (var u = 0; u < t.length; u++) this.words[u] = this.words[u] | t.words[u];
                return this._strip()
            }, e.prototype.ior = function(t) {
                return n((this.negative | t.negative) === 0), this.iuor(t)
            }, e.prototype.or = function(t) {
                return this.length > t.length ? this.clone().ior(t) : t.clone().ior(this)
            }, e.prototype.uor = function(t) {
                return this.length > t.length ? this.clone().iuor(t) : t.clone().iuor(this)
            }, e.prototype.iuand = function(t) {
                var u;
                this.length > t.length ? u = t : u = this;
                for (var y = 0; y < u.length; y++) this.words[y] = this.words[y] & t.words[y];
                return this.length = u.length, this._strip()
            }, e.prototype.iand = function(t) {
                return n((this.negative | t.negative) === 0), this.iuand(t)
            }, e.prototype.and = function(t) {
                return this.length > t.length ? this.clone().iand(t) : t.clone().iand(this)
            }, e.prototype.uand = function(t) {
                return this.length > t.length ? this.clone().iuand(t) : t.clone().iuand(this)
            }, e.prototype.iuxor = function(t) {
                var u, y;
                this.length > t.length ? (u = this, y = t) : (u = t, y = this);
                for (var v = 0; v < y.length; v++) this.words[v] = u.words[v] ^ y.words[v];
                if (this !== u)
                    for (; v < u.length; v++) this.words[v] = u.words[v];
                return this.length = u.length, this._strip()
            }, e.prototype.ixor = function(t) {
                return n((this.negative | t.negative) === 0), this.iuxor(t)
            }, e.prototype.xor = function(t) {
                return this.length > t.length ? this.clone().ixor(t) : t.clone().ixor(this)
            }, e.prototype.uxor = function(t) {
                return this.length > t.length ? this.clone().iuxor(t) : t.clone().iuxor(this)
            }, e.prototype.inotn = function(t) {
                n(typeof t == "number" && t >= 0);
                var u = Math.ceil(t / 26) | 0,
                    y = t % 26;
                this._expand(u), y > 0 && u--;
                for (var v = 0; v < u; v++) this.words[v] = ~this.words[v] & 67108863;
                return y > 0 && (this.words[v] = ~this.words[v] & 67108863 >> 26 - y), this._strip()
            }, e.prototype.notn = function(t) {
                return this.clone().inotn(t)
            }, e.prototype.setn = function(t, u) {
                n(typeof t == "number" && t >= 0);
                var y = t / 26 | 0,
                    v = t % 26;
                return this._expand(y + 1), u ? this.words[y] = this.words[y] | 1 << v : this.words[y] = this.words[y] & ~(1 << v), this._strip()
            }, e.prototype.iadd = function(t) {
                var u;
                if (this.negative !== 0 && t.negative === 0) return this.negative = 0, u = this.isub(t), this.negative ^= 1, this._normSign();
                if (this.negative === 0 && t.negative !== 0) return t.negative = 0, u = this.isub(t), t.negative = 1, u._normSign();
                var y, v;
                this.length > t.length ? (y = this, v = t) : (y = t, v = this);
                for (var g = 0, S = 0; S < v.length; S++) u = (y.words[S] | 0) + (v.words[S] | 0) + g, this.words[S] = u & 67108863, g = u >>> 26;
                for (; g !== 0 && S < y.length; S++) u = (y.words[S] | 0) + g, this.words[S] = u & 67108863, g = u >>> 26;
                if (this.length = y.length, g !== 0) this.words[this.length] = g, this.length++;
                else if (y !== this)
                    for (; S < y.length; S++) this.words[S] = y.words[S];
                return this
            }, e.prototype.add = function(t) {
                var u;
                return t.negative !== 0 && this.negative === 0 ? (t.negative = 0, u = this.sub(t), t.negative ^= 1, u) : t.negative === 0 && this.negative !== 0 ? (this.negative = 0, u = t.sub(this), this.negative = 1, u) : this.length > t.length ? this.clone().iadd(t) : t.clone().iadd(this)
            }, e.prototype.isub = function(t) {
                if (t.negative !== 0) {
                    t.negative = 0;
                    var u = this.iadd(t);
                    return t.negative = 1, u._normSign()
                } else if (this.negative !== 0) return this.negative = 0, this.iadd(t), this.negative = 1, this._normSign();
                var y = this.cmp(t);
                if (y === 0) return this.negative = 0, this.length = 1, this.words[0] = 0, this;
                var v, g;
                y > 0 ? (v = this, g = t) : (v = t, g = this);
                for (var S = 0, _ = 0; _ < g.length; _++) u = (v.words[_] | 0) - (g.words[_] | 0) + S, S = u >> 26, this.words[_] = u & 67108863;
                for (; S !== 0 && _ < v.length; _++) u = (v.words[_] | 0) + S, S = u >> 26, this.words[_] = u & 67108863;
                if (S === 0 && _ < v.length && v !== this)
                    for (; _ < v.length; _++) this.words[_] = v.words[_];
                return this.length = Math.max(this.length, _), v !== this && (this.negative = 1), this._strip()
            }, e.prototype.sub = function(t) {
                return this.clone().isub(t)
            };

            function $(b, t, u) {
                u.negative = t.negative ^ b.negative;
                var y = b.length + t.length | 0;
                u.length = y, y = y - 1 | 0;
                var v = b.words[0] | 0,
                    g = t.words[0] | 0,
                    S = v * g,
                    _ = S & 67108863,
                    M = S / 67108864 | 0;
                u.words[0] = _;
                for (var d = 1; d < y; d++) {
                    for (var A = M >>> 26, z = M & 67108863, U = Math.min(d, t.length - 1), X = Math.max(0, d - b.length + 1); X <= U; X++) {
                        var R = d - X | 0;
                        v = b.words[R] | 0, g = t.words[X] | 0, S = v * g + z, A += S / 67108864 | 0, z = S & 67108863
                    }
                    u.words[d] = z | 0, M = A | 0
                }
                return M !== 0 ? u.words[d] = M | 0 : u.length--, u._strip()
            }
            var I = function(t, u, y) {
                var v = t.words,
                    g = u.words,
                    S = y.words,
                    _ = 0,
                    M, d, A, z = v[0] | 0,
                    U = z & 8191,
                    X = z >>> 13,
                    R = v[1] | 0,
                    k = R & 8191,
                    N = R >>> 13,
                    W = v[2] | 0,
                    J = W & 8191,
                    H = W >>> 13,
                    Y = v[3] | 0,
                    ne = Y & 8191,
                    re = Y >>> 13,
                    Pe = v[4] | 0,
                    ye = Pe & 8191,
                    te = Pe >>> 13,
                    je = v[5] | 0,
                    me = je & 8191,
                    Z = je >>> 13,
                    _e = v[6] | 0,
                    ae = _e & 8191,
                    ee = _e >>> 13,
                    De = v[7] | 0,
                    ge = De & 8191,
                    ie = De >>> 13,
                    Ne = v[8] | 0,
                    Me = Ne & 8191,
                    fe = Ne >>> 13,
                    Te = v[9] | 0,
                    Se = Te & 8191,
                    se = Te >>> 13,
                    Oe = g[0] | 0,
                    qe = Oe & 8191,
                    oe = Oe >>> 13,
                    Le = g[1] | 0,
                    Be = Le & 8191,
                    ue = Le >>> 13,
                    We = g[2] | 0,
                    Ee = We & 8191,
                    he = We >>> 13,
                    ze = g[3] | 0,
                    Ae = ze & 8191,
                    ce = ze >>> 13,
                    Ue = g[4] | 0,
                    Re = Ue & 8191,
                    de = Ue >>> 13,
                    He = g[5] | 0,
                    ke = He & 8191,
                    le = He >>> 13,
                    Ke = g[6] | 0,
                    Ce = Ke & 8191,
                    pe = Ke >>> 13,
                    Fe = g[7] | 0,
                    Ie = Fe & 8191,
                    ve = Fe >>> 13,
                    Xe = g[8] | 0,
                    $e = Xe & 8191,
                    be = Xe >>> 13,
                    Ge = g[9] | 0,
                    we = Ge & 8191,
                    xe = Ge >>> 13;
                y.negative = t.negative ^ u.negative, y.length = 19, M = Math.imul(U, qe), d = Math.imul(U, oe), d = d + Math.imul(X, qe) | 0, A = Math.imul(X, oe);
                var Ve = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Ve >>> 26) | 0, Ve &= 67108863, M = Math.imul(k, qe), d = Math.imul(k, oe), d = d + Math.imul(N, qe) | 0, A = Math.imul(N, oe), M = M + Math.imul(U, Be) | 0, d = d + Math.imul(U, ue) | 0, d = d + Math.imul(X, Be) | 0, A = A + Math.imul(X, ue) | 0;
                var Je = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Je >>> 26) | 0, Je &= 67108863, M = Math.imul(J, qe), d = Math.imul(J, oe), d = d + Math.imul(H, qe) | 0, A = Math.imul(H, oe), M = M + Math.imul(k, Be) | 0, d = d + Math.imul(k, ue) | 0, d = d + Math.imul(N, Be) | 0, A = A + Math.imul(N, ue) | 0, M = M + Math.imul(U, Ee) | 0, d = d + Math.imul(U, he) | 0, d = d + Math.imul(X, Ee) | 0, A = A + Math.imul(X, he) | 0;
                var Ye = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Ye >>> 26) | 0, Ye &= 67108863, M = Math.imul(ne, qe), d = Math.imul(ne, oe), d = d + Math.imul(re, qe) | 0, A = Math.imul(re, oe), M = M + Math.imul(J, Be) | 0, d = d + Math.imul(J, ue) | 0, d = d + Math.imul(H, Be) | 0, A = A + Math.imul(H, ue) | 0, M = M + Math.imul(k, Ee) | 0, d = d + Math.imul(k, he) | 0, d = d + Math.imul(N, Ee) | 0, A = A + Math.imul(N, he) | 0, M = M + Math.imul(U, Ae) | 0, d = d + Math.imul(U, ce) | 0, d = d + Math.imul(X, Ae) | 0, A = A + Math.imul(X, ce) | 0;
                var Qe = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Qe >>> 26) | 0, Qe &= 67108863, M = Math.imul(ye, qe), d = Math.imul(ye, oe), d = d + Math.imul(te, qe) | 0, A = Math.imul(te, oe), M = M + Math.imul(ne, Be) | 0, d = d + Math.imul(ne, ue) | 0, d = d + Math.imul(re, Be) | 0, A = A + Math.imul(re, ue) | 0, M = M + Math.imul(J, Ee) | 0, d = d + Math.imul(J, he) | 0, d = d + Math.imul(H, Ee) | 0, A = A + Math.imul(H, he) | 0, M = M + Math.imul(k, Ae) | 0, d = d + Math.imul(k, ce) | 0, d = d + Math.imul(N, Ae) | 0, A = A + Math.imul(N, ce) | 0, M = M + Math.imul(U, Re) | 0, d = d + Math.imul(U, de) | 0, d = d + Math.imul(X, Re) | 0, A = A + Math.imul(X, de) | 0;
                var Ze = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (Ze >>> 26) | 0, Ze &= 67108863, M = Math.imul(me, qe), d = Math.imul(me, oe), d = d + Math.imul(Z, qe) | 0, A = Math.imul(Z, oe), M = M + Math.imul(ye, Be) | 0, d = d + Math.imul(ye, ue) | 0, d = d + Math.imul(te, Be) | 0, A = A + Math.imul(te, ue) | 0, M = M + Math.imul(ne, Ee) | 0, d = d + Math.imul(ne, he) | 0, d = d + Math.imul(re, Ee) | 0, A = A + Math.imul(re, he) | 0, M = M + Math.imul(J, Ae) | 0, d = d + Math.imul(J, ce) | 0, d = d + Math.imul(H, Ae) | 0, A = A + Math.imul(H, ce) | 0, M = M + Math.imul(k, Re) | 0, d = d + Math.imul(k, de) | 0, d = d + Math.imul(N, Re) | 0, A = A + Math.imul(N, de) | 0, M = M + Math.imul(U, ke) | 0, d = d + Math.imul(U, le) | 0, d = d + Math.imul(X, ke) | 0, A = A + Math.imul(X, le) | 0;
                var er = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (er >>> 26) | 0, er &= 67108863, M = Math.imul(ae, qe), d = Math.imul(ae, oe), d = d + Math.imul(ee, qe) | 0, A = Math.imul(ee, oe), M = M + Math.imul(me, Be) | 0, d = d + Math.imul(me, ue) | 0, d = d + Math.imul(Z, Be) | 0, A = A + Math.imul(Z, ue) | 0, M = M + Math.imul(ye, Ee) | 0, d = d + Math.imul(ye, he) | 0, d = d + Math.imul(te, Ee) | 0, A = A + Math.imul(te, he) | 0, M = M + Math.imul(ne, Ae) | 0, d = d + Math.imul(ne, ce) | 0, d = d + Math.imul(re, Ae) | 0, A = A + Math.imul(re, ce) | 0, M = M + Math.imul(J, Re) | 0, d = d + Math.imul(J, de) | 0, d = d + Math.imul(H, Re) | 0, A = A + Math.imul(H, de) | 0, M = M + Math.imul(k, ke) | 0, d = d + Math.imul(k, le) | 0, d = d + Math.imul(N, ke) | 0, A = A + Math.imul(N, le) | 0, M = M + Math.imul(U, Ce) | 0, d = d + Math.imul(U, pe) | 0, d = d + Math.imul(X, Ce) | 0, A = A + Math.imul(X, pe) | 0;
                var rr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (rr >>> 26) | 0, rr &= 67108863, M = Math.imul(ge, qe), d = Math.imul(ge, oe), d = d + Math.imul(ie, qe) | 0, A = Math.imul(ie, oe), M = M + Math.imul(ae, Be) | 0, d = d + Math.imul(ae, ue) | 0, d = d + Math.imul(ee, Be) | 0, A = A + Math.imul(ee, ue) | 0, M = M + Math.imul(me, Ee) | 0, d = d + Math.imul(me, he) | 0, d = d + Math.imul(Z, Ee) | 0, A = A + Math.imul(Z, he) | 0, M = M + Math.imul(ye, Ae) | 0, d = d + Math.imul(ye, ce) | 0, d = d + Math.imul(te, Ae) | 0, A = A + Math.imul(te, ce) | 0, M = M + Math.imul(ne, Re) | 0, d = d + Math.imul(ne, de) | 0, d = d + Math.imul(re, Re) | 0, A = A + Math.imul(re, de) | 0, M = M + Math.imul(J, ke) | 0, d = d + Math.imul(J, le) | 0, d = d + Math.imul(H, ke) | 0, A = A + Math.imul(H, le) | 0, M = M + Math.imul(k, Ce) | 0, d = d + Math.imul(k, pe) | 0, d = d + Math.imul(N, Ce) | 0, A = A + Math.imul(N, pe) | 0, M = M + Math.imul(U, Ie) | 0, d = d + Math.imul(U, ve) | 0, d = d + Math.imul(X, Ie) | 0, A = A + Math.imul(X, ve) | 0;
                var tr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (tr >>> 26) | 0, tr &= 67108863, M = Math.imul(Me, qe), d = Math.imul(Me, oe), d = d + Math.imul(fe, qe) | 0, A = Math.imul(fe, oe), M = M + Math.imul(ge, Be) | 0, d = d + Math.imul(ge, ue) | 0, d = d + Math.imul(ie, Be) | 0, A = A + Math.imul(ie, ue) | 0, M = M + Math.imul(ae, Ee) | 0, d = d + Math.imul(ae, he) | 0, d = d + Math.imul(ee, Ee) | 0, A = A + Math.imul(ee, he) | 0, M = M + Math.imul(me, Ae) | 0, d = d + Math.imul(me, ce) | 0, d = d + Math.imul(Z, Ae) | 0, A = A + Math.imul(Z, ce) | 0, M = M + Math.imul(ye, Re) | 0, d = d + Math.imul(ye, de) | 0, d = d + Math.imul(te, Re) | 0, A = A + Math.imul(te, de) | 0, M = M + Math.imul(ne, ke) | 0, d = d + Math.imul(ne, le) | 0, d = d + Math.imul(re, ke) | 0, A = A + Math.imul(re, le) | 0, M = M + Math.imul(J, Ce) | 0, d = d + Math.imul(J, pe) | 0, d = d + Math.imul(H, Ce) | 0, A = A + Math.imul(H, pe) | 0, M = M + Math.imul(k, Ie) | 0, d = d + Math.imul(k, ve) | 0, d = d + Math.imul(N, Ie) | 0, A = A + Math.imul(N, ve) | 0, M = M + Math.imul(U, $e) | 0, d = d + Math.imul(U, be) | 0, d = d + Math.imul(X, $e) | 0, A = A + Math.imul(X, be) | 0;
                var ir = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (ir >>> 26) | 0, ir &= 67108863, M = Math.imul(Se, qe), d = Math.imul(Se, oe), d = d + Math.imul(se, qe) | 0, A = Math.imul(se, oe), M = M + Math.imul(Me, Be) | 0, d = d + Math.imul(Me, ue) | 0, d = d + Math.imul(fe, Be) | 0, A = A + Math.imul(fe, ue) | 0, M = M + Math.imul(ge, Ee) | 0, d = d + Math.imul(ge, he) | 0, d = d + Math.imul(ie, Ee) | 0, A = A + Math.imul(ie, he) | 0, M = M + Math.imul(ae, Ae) | 0, d = d + Math.imul(ae, ce) | 0, d = d + Math.imul(ee, Ae) | 0, A = A + Math.imul(ee, ce) | 0, M = M + Math.imul(me, Re) | 0, d = d + Math.imul(me, de) | 0, d = d + Math.imul(Z, Re) | 0, A = A + Math.imul(Z, de) | 0, M = M + Math.imul(ye, ke) | 0, d = d + Math.imul(ye, le) | 0, d = d + Math.imul(te, ke) | 0, A = A + Math.imul(te, le) | 0, M = M + Math.imul(ne, Ce) | 0, d = d + Math.imul(ne, pe) | 0, d = d + Math.imul(re, Ce) | 0, A = A + Math.imul(re, pe) | 0, M = M + Math.imul(J, Ie) | 0, d = d + Math.imul(J, ve) | 0, d = d + Math.imul(H, Ie) | 0, A = A + Math.imul(H, ve) | 0, M = M + Math.imul(k, $e) | 0, d = d + Math.imul(k, be) | 0, d = d + Math.imul(N, $e) | 0, A = A + Math.imul(N, be) | 0, M = M + Math.imul(U, we) | 0, d = d + Math.imul(U, xe) | 0, d = d + Math.imul(X, we) | 0, A = A + Math.imul(X, xe) | 0;
                var nr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (nr >>> 26) | 0, nr &= 67108863, M = Math.imul(Se, Be), d = Math.imul(Se, ue), d = d + Math.imul(se, Be) | 0, A = Math.imul(se, ue), M = M + Math.imul(Me, Ee) | 0, d = d + Math.imul(Me, he) | 0, d = d + Math.imul(fe, Ee) | 0, A = A + Math.imul(fe, he) | 0, M = M + Math.imul(ge, Ae) | 0, d = d + Math.imul(ge, ce) | 0, d = d + Math.imul(ie, Ae) | 0, A = A + Math.imul(ie, ce) | 0, M = M + Math.imul(ae, Re) | 0, d = d + Math.imul(ae, de) | 0, d = d + Math.imul(ee, Re) | 0, A = A + Math.imul(ee, de) | 0, M = M + Math.imul(me, ke) | 0, d = d + Math.imul(me, le) | 0, d = d + Math.imul(Z, ke) | 0, A = A + Math.imul(Z, le) | 0, M = M + Math.imul(ye, Ce) | 0, d = d + Math.imul(ye, pe) | 0, d = d + Math.imul(te, Ce) | 0, A = A + Math.imul(te, pe) | 0, M = M + Math.imul(ne, Ie) | 0, d = d + Math.imul(ne, ve) | 0, d = d + Math.imul(re, Ie) | 0, A = A + Math.imul(re, ve) | 0, M = M + Math.imul(J, $e) | 0, d = d + Math.imul(J, be) | 0, d = d + Math.imul(H, $e) | 0, A = A + Math.imul(H, be) | 0, M = M + Math.imul(k, we) | 0, d = d + Math.imul(k, xe) | 0, d = d + Math.imul(N, we) | 0, A = A + Math.imul(N, xe) | 0;
                var ar = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (ar >>> 26) | 0, ar &= 67108863, M = Math.imul(Se, Ee), d = Math.imul(Se, he), d = d + Math.imul(se, Ee) | 0, A = Math.imul(se, he), M = M + Math.imul(Me, Ae) | 0, d = d + Math.imul(Me, ce) | 0, d = d + Math.imul(fe, Ae) | 0, A = A + Math.imul(fe, ce) | 0, M = M + Math.imul(ge, Re) | 0, d = d + Math.imul(ge, de) | 0, d = d + Math.imul(ie, Re) | 0, A = A + Math.imul(ie, de) | 0, M = M + Math.imul(ae, ke) | 0, d = d + Math.imul(ae, le) | 0, d = d + Math.imul(ee, ke) | 0, A = A + Math.imul(ee, le) | 0, M = M + Math.imul(me, Ce) | 0, d = d + Math.imul(me, pe) | 0, d = d + Math.imul(Z, Ce) | 0, A = A + Math.imul(Z, pe) | 0, M = M + Math.imul(ye, Ie) | 0, d = d + Math.imul(ye, ve) | 0, d = d + Math.imul(te, Ie) | 0, A = A + Math.imul(te, ve) | 0, M = M + Math.imul(ne, $e) | 0, d = d + Math.imul(ne, be) | 0, d = d + Math.imul(re, $e) | 0, A = A + Math.imul(re, be) | 0, M = M + Math.imul(J, we) | 0, d = d + Math.imul(J, xe) | 0, d = d + Math.imul(H, we) | 0, A = A + Math.imul(H, xe) | 0;
                var fr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (fr >>> 26) | 0, fr &= 67108863, M = Math.imul(Se, Ae), d = Math.imul(Se, ce), d = d + Math.imul(se, Ae) | 0, A = Math.imul(se, ce), M = M + Math.imul(Me, Re) | 0, d = d + Math.imul(Me, de) | 0, d = d + Math.imul(fe, Re) | 0, A = A + Math.imul(fe, de) | 0, M = M + Math.imul(ge, ke) | 0, d = d + Math.imul(ge, le) | 0, d = d + Math.imul(ie, ke) | 0, A = A + Math.imul(ie, le) | 0, M = M + Math.imul(ae, Ce) | 0, d = d + Math.imul(ae, pe) | 0, d = d + Math.imul(ee, Ce) | 0, A = A + Math.imul(ee, pe) | 0, M = M + Math.imul(me, Ie) | 0, d = d + Math.imul(me, ve) | 0, d = d + Math.imul(Z, Ie) | 0, A = A + Math.imul(Z, ve) | 0, M = M + Math.imul(ye, $e) | 0, d = d + Math.imul(ye, be) | 0, d = d + Math.imul(te, $e) | 0, A = A + Math.imul(te, be) | 0, M = M + Math.imul(ne, we) | 0, d = d + Math.imul(ne, xe) | 0, d = d + Math.imul(re, we) | 0, A = A + Math.imul(re, xe) | 0;
                var sr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (sr >>> 26) | 0, sr &= 67108863, M = Math.imul(Se, Re), d = Math.imul(Se, de), d = d + Math.imul(se, Re) | 0, A = Math.imul(se, de), M = M + Math.imul(Me, ke) | 0, d = d + Math.imul(Me, le) | 0, d = d + Math.imul(fe, ke) | 0, A = A + Math.imul(fe, le) | 0, M = M + Math.imul(ge, Ce) | 0, d = d + Math.imul(ge, pe) | 0, d = d + Math.imul(ie, Ce) | 0, A = A + Math.imul(ie, pe) | 0, M = M + Math.imul(ae, Ie) | 0, d = d + Math.imul(ae, ve) | 0, d = d + Math.imul(ee, Ie) | 0, A = A + Math.imul(ee, ve) | 0, M = M + Math.imul(me, $e) | 0, d = d + Math.imul(me, be) | 0, d = d + Math.imul(Z, $e) | 0, A = A + Math.imul(Z, be) | 0, M = M + Math.imul(ye, we) | 0, d = d + Math.imul(ye, xe) | 0, d = d + Math.imul(te, we) | 0, A = A + Math.imul(te, xe) | 0;
                var ur = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (ur >>> 26) | 0, ur &= 67108863, M = Math.imul(Se, ke), d = Math.imul(Se, le), d = d + Math.imul(se, ke) | 0, A = Math.imul(se, le), M = M + Math.imul(Me, Ce) | 0, d = d + Math.imul(Me, pe) | 0, d = d + Math.imul(fe, Ce) | 0, A = A + Math.imul(fe, pe) | 0, M = M + Math.imul(ge, Ie) | 0, d = d + Math.imul(ge, ve) | 0, d = d + Math.imul(ie, Ie) | 0, A = A + Math.imul(ie, ve) | 0, M = M + Math.imul(ae, $e) | 0, d = d + Math.imul(ae, be) | 0, d = d + Math.imul(ee, $e) | 0, A = A + Math.imul(ee, be) | 0, M = M + Math.imul(me, we) | 0, d = d + Math.imul(me, xe) | 0, d = d + Math.imul(Z, we) | 0, A = A + Math.imul(Z, xe) | 0;
                var hr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (hr >>> 26) | 0, hr &= 67108863, M = Math.imul(Se, Ce), d = Math.imul(Se, pe), d = d + Math.imul(se, Ce) | 0, A = Math.imul(se, pe), M = M + Math.imul(Me, Ie) | 0, d = d + Math.imul(Me, ve) | 0, d = d + Math.imul(fe, Ie) | 0, A = A + Math.imul(fe, ve) | 0, M = M + Math.imul(ge, $e) | 0, d = d + Math.imul(ge, be) | 0, d = d + Math.imul(ie, $e) | 0, A = A + Math.imul(ie, be) | 0, M = M + Math.imul(ae, we) | 0, d = d + Math.imul(ae, xe) | 0, d = d + Math.imul(ee, we) | 0, A = A + Math.imul(ee, xe) | 0;
                var cr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (cr >>> 26) | 0, cr &= 67108863, M = Math.imul(Se, Ie), d = Math.imul(Se, ve), d = d + Math.imul(se, Ie) | 0, A = Math.imul(se, ve), M = M + Math.imul(Me, $e) | 0, d = d + Math.imul(Me, be) | 0, d = d + Math.imul(fe, $e) | 0, A = A + Math.imul(fe, be) | 0, M = M + Math.imul(ge, we) | 0, d = d + Math.imul(ge, xe) | 0, d = d + Math.imul(ie, we) | 0, A = A + Math.imul(ie, xe) | 0;
                var dr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (dr >>> 26) | 0, dr &= 67108863, M = Math.imul(Se, $e), d = Math.imul(Se, be), d = d + Math.imul(se, $e) | 0, A = Math.imul(se, be), M = M + Math.imul(Me, we) | 0, d = d + Math.imul(Me, xe) | 0, d = d + Math.imul(fe, we) | 0, A = A + Math.imul(fe, xe) | 0;
                var lr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                _ = (A + (d >>> 13) | 0) + (lr >>> 26) | 0, lr &= 67108863, M = Math.imul(Se, we), d = Math.imul(Se, xe), d = d + Math.imul(se, we) | 0, A = Math.imul(se, xe);
                var pr = (_ + M | 0) + ((d & 8191) << 13) | 0;
                return _ = (A + (d >>> 13) | 0) + (pr >>> 26) | 0, pr &= 67108863, S[0] = Ve, S[1] = Je, S[2] = Ye, S[3] = Qe, S[4] = Ze, S[5] = er, S[6] = rr, S[7] = tr, S[8] = ir, S[9] = nr, S[10] = ar, S[11] = fr, S[12] = sr, S[13] = ur, S[14] = hr, S[15] = cr, S[16] = dr, S[17] = lr, S[18] = pr, _ !== 0 && (S[19] = _, y.length++), y
            };
            Math.imul || (I = $);

            function D(b, t, u) {
                u.negative = t.negative ^ b.negative, u.length = b.length + t.length;
                for (var y = 0, v = 0, g = 0; g < u.length - 1; g++) {
                    var S = v;
                    v = 0;
                    for (var _ = y & 67108863, M = Math.min(g, t.length - 1), d = Math.max(0, g - b.length + 1); d <= M; d++) {
                        var A = g - d,
                            z = b.words[A] | 0,
                            U = t.words[d] | 0,
                            X = z * U,
                            R = X & 67108863;
                        S = S + (X / 67108864 | 0) | 0, R = R + _ | 0, _ = R & 67108863, S = S + (R >>> 26) | 0, v += S >>> 26, S &= 67108863
                    }
                    u.words[g] = _, y = S, S = v
                }
                return y !== 0 ? u.words[g] = y : u.length--, u._strip()
            }

            function j(b, t, u) {
                return D(b, t, u)
            }
            e.prototype.mulTo = function(t, u) {
                var y, v = this.length + t.length;
                return this.length === 10 && t.length === 10 ? y = I(this, t, u) : v < 63 ? y = $(this, t, u) : v < 1024 ? y = D(this, t, u) : y = j(this, t, u), y
            }, e.prototype.mul = function(t) {
                var u = new e(null);
                return u.words = new Array(this.length + t.length), this.mulTo(t, u)
            }, e.prototype.mulf = function(t) {
                var u = new e(null);
                return u.words = new Array(this.length + t.length), j(this, t, u)
            }, e.prototype.imul = function(t) {
                return this.clone().mulTo(t, this)
            }, e.prototype.imuln = function(t) {
                var u = t < 0;
                u && (t = -t), n(typeof t == "number"), n(t < 67108864);
                for (var y = 0, v = 0; v < this.length; v++) {
                    var g = (this.words[v] | 0) * t,
                        S = (g & 67108863) + (y & 67108863);
                    y >>= 26, y += g / 67108864 | 0, y += S >>> 26, this.words[v] = S & 67108863
                }
                return y !== 0 && (this.words[v] = y, this.length++), this.length = t === 0 ? 1 : this.length, u ? this.ineg() : this
            }, e.prototype.muln = function(t) {
                return this.clone().imuln(t)
            }, e.prototype.sqr = function() {
                return this.mul(this)
            }, e.prototype.isqr = function() {
                return this.imul(this.clone())
            }, e.prototype.pow = function(t) {
                var u = C(t);
                if (u.length === 0) return new e(1);
                for (var y = this, v = 0; v < u.length && u[v] === 0; v++, y = y.sqr());
                if (++v < u.length)
                    for (var g = y.sqr(); v < u.length; v++, g = g.sqr()) u[v] !== 0 && (y = y.mul(g));
                return y
            }, e.prototype.iushln = function(t) {
                n(typeof t == "number" && t >= 0);
                var u = t % 26,
                    y = (t - u) / 26,
                    v = 67108863 >>> 26 - u << 26 - u,
                    g;
                if (u !== 0) {
                    var S = 0;
                    for (g = 0; g < this.length; g++) {
                        var _ = this.words[g] & v,
                            M = (this.words[g] | 0) - _ << u;
                        this.words[g] = M | S, S = _ >>> 26 - u
                    }
                    S && (this.words[g] = S, this.length++)
                }
                if (y !== 0) {
                    for (g = this.length - 1; g >= 0; g--) this.words[g + y] = this.words[g];
                    for (g = 0; g < y; g++) this.words[g] = 0;
                    this.length += y
                }
                return this._strip()
            }, e.prototype.ishln = function(t) {
                return n(this.negative === 0), this.iushln(t)
            }, e.prototype.iushrn = function(t, u, y) {
                n(typeof t == "number" && t >= 0);
                var v;
                u ? v = (u - u % 26) / 26 : v = 0;
                var g = t % 26,
                    S = Math.min((t - g) / 26, this.length),
                    _ = 67108863 ^ 67108863 >>> g << g,
                    M = y;
                if (v -= S, v = Math.max(0, v), M) {
                    for (var d = 0; d < S; d++) M.words[d] = this.words[d];
                    M.length = S
                }
                if (S !== 0)
                    if (this.length > S)
                        for (this.length -= S, d = 0; d < this.length; d++) this.words[d] = this.words[d + S];
                    else this.words[0] = 0, this.length = 1;
                var A = 0;
                for (d = this.length - 1; d >= 0 && (A !== 0 || d >= v); d--) {
                    var z = this.words[d] | 0;
                    this.words[d] = A << 26 - g | z >>> g, A = z & _
                }
                return M && A !== 0 && (M.words[M.length++] = A), this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
            }, e.prototype.ishrn = function(t, u, y) {
                return n(this.negative === 0), this.iushrn(t, u, y)
            }, e.prototype.shln = function(t) {
                return this.clone().ishln(t)
            }, e.prototype.ushln = function(t) {
                return this.clone().iushln(t)
            }, e.prototype.shrn = function(t) {
                return this.clone().ishrn(t)
            }, e.prototype.ushrn = function(t) {
                return this.clone().iushrn(t)
            }, e.prototype.testn = function(t) {
                n(typeof t == "number" && t >= 0);
                var u = t % 26,
                    y = (t - u) / 26,
                    v = 1 << u;
                if (this.length <= y) return !1;
                var g = this.words[y];
                return !!(g & v)
            }, e.prototype.imaskn = function(t) {
                n(typeof t == "number" && t >= 0);
                var u = t % 26,
                    y = (t - u) / 26;
                if (n(this.negative === 0, "imaskn works only with positive numbers"), this.length <= y) return this;
                if (u !== 0 && y++, this.length = Math.min(y, this.length), u !== 0) {
                    var v = 67108863 ^ 67108863 >>> u << u;
                    this.words[this.length - 1] &= v
                }
                return this.length === 0 && (this.words[0] = 0, this.length = 1), this._strip()
            }, e.prototype.maskn = function(t) {
                return this.clone().imaskn(t)
            }, e.prototype.iaddn = function(t) {
                return n(typeof t == "number"), n(t < 67108864), t < 0 ? this.isubn(-t) : this.negative !== 0 ? this.length === 1 && (this.words[0] | 0) <= t ? (this.words[0] = t - (this.words[0] | 0), this.negative = 0, this) : (this.negative = 0, this.isubn(t), this.negative = 1, this) : this._iaddn(t)
            }, e.prototype._iaddn = function(t) {
                this.words[0] += t;
                for (var u = 0; u < this.length && this.words[u] >= 67108864; u++) this.words[u] -= 67108864, u === this.length - 1 ? this.words[u + 1] = 1 : this.words[u + 1]++;
                return this.length = Math.max(this.length, u + 1), this
            }, e.prototype.isubn = function(t) {
                if (n(typeof t == "number"), n(t < 67108864), t < 0) return this.iaddn(-t);
                if (this.negative !== 0) return this.negative = 0, this.iaddn(t), this.negative = 1, this;
                if (this.words[0] -= t, this.length === 1 && this.words[0] < 0) this.words[0] = -this.words[0], this.negative = 1;
                else
                    for (var u = 0; u < this.length && this.words[u] < 0; u++) this.words[u] += 67108864, this.words[u + 1] -= 1;
                return this._strip()
            }, e.prototype.addn = function(t) {
                return this.clone().iaddn(t)
            }, e.prototype.subn = function(t) {
                return this.clone().isubn(t)
            }, e.prototype.iabs = function() {
                return this.negative = 0, this
            }, e.prototype.abs = function() {
                return this.clone().iabs()
            }, e.prototype._ishlnsubmul = function(t, u, y) {
                var v = t.length + y,
                    g;
                this._expand(v);
                var S, _ = 0;
                for (g = 0; g < t.length; g++) {
                    S = (this.words[g + y] | 0) + _;
                    var M = (t.words[g] | 0) * u;
                    S -= M & 67108863, _ = (S >> 26) - (M / 67108864 | 0), this.words[g + y] = S & 67108863
                }
                for (; g < this.length - y; g++) S = (this.words[g + y] | 0) + _, _ = S >> 26, this.words[g + y] = S & 67108863;
                if (_ === 0) return this._strip();
                for (n(_ === -1), _ = 0, g = 0; g < this.length; g++) S = -(this.words[g] | 0) + _, _ = S >> 26, this.words[g] = S & 67108863;
                return this.negative = 1, this._strip()
            }, e.prototype._wordDiv = function(t, u) {
                var y = this.length - t.length,
                    v = this.clone(),
                    g = t,
                    S = g.words[g.length - 1] | 0,
                    _ = this._countBits(S);
                y = 26 - _, y !== 0 && (g = g.ushln(y), v.iushln(y), S = g.words[g.length - 1] | 0);
                var M = v.length - g.length,
                    d;
                if (u !== "mod") {
                    d = new e(null), d.length = M + 1, d.words = new Array(d.length);
                    for (var A = 0; A < d.length; A++) d.words[A] = 0
                }
                var z = v.clone()._ishlnsubmul(g, 1, M);
                z.negative === 0 && (v = z, d && (d.words[M] = 1));
                for (var U = M - 1; U >= 0; U--) {
                    var X = (v.words[g.length + U] | 0) * 67108864 + (v.words[g.length + U - 1] | 0);
                    for (X = Math.min(X / S | 0, 67108863), v._ishlnsubmul(g, X, U); v.negative !== 0;) X--, v.negative = 0, v._ishlnsubmul(g, 1, U), v.isZero() || (v.negative ^= 1);
                    d && (d.words[U] = X)
                }
                return d && d._strip(), v._strip(), u !== "div" && y !== 0 && v.iushrn(y), {
                    div: d || null,
                    mod: v
                }
            }, e.prototype.divmod = function(t, u, y) {
                if (n(!t.isZero()), this.isZero()) return {
                    div: new e(0),
                    mod: new e(0)
                };
                var v, g, S;
                return this.negative !== 0 && t.negative === 0 ? (S = this.neg().divmod(t, u), u !== "mod" && (v = S.div.neg()), u !== "div" && (g = S.mod.neg(), y && g.negative !== 0 && g.iadd(t)), {
                    div: v,
                    mod: g
                }) : this.negative === 0 && t.negative !== 0 ? (S = this.divmod(t.neg(), u), u !== "mod" && (v = S.div.neg()), {
                    div: v,
                    mod: S.mod
                }) : (this.negative & t.negative) !== 0 ? (S = this.neg().divmod(t.neg(), u), u !== "div" && (g = S.mod.neg(), y && g.negative !== 0 && g.isub(t)), {
                    div: S.div,
                    mod: g
                }) : t.length > this.length || this.cmp(t) < 0 ? {
                    div: new e(0),
                    mod: this
                } : t.length === 1 ? u === "div" ? {
                    div: this.divn(t.words[0]),
                    mod: null
                } : u === "mod" ? {
                    div: null,
                    mod: new e(this.modrn(t.words[0]))
                } : {
                    div: this.divn(t.words[0]),
                    mod: new e(this.modrn(t.words[0]))
                } : this._wordDiv(t, u)
            }, e.prototype.div = function(t) {
                return this.divmod(t, "div", !1).div
            }, e.prototype.mod = function(t) {
                return this.divmod(t, "mod", !1).mod
            }, e.prototype.umod = function(t) {
                return this.divmod(t, "mod", !0).mod
            }, e.prototype.divRound = function(t) {
                var u = this.divmod(t);
                if (u.mod.isZero()) return u.div;
                var y = u.div.negative !== 0 ? u.mod.isub(t) : u.mod,
                    v = t.ushrn(1),
                    g = t.andln(1),
                    S = y.cmp(v);
                return S < 0 || g === 1 && S === 0 ? u.div : u.div.negative !== 0 ? u.div.isubn(1) : u.div.iaddn(1)
            }, e.prototype.modrn = function(t) {
                var u = t < 0;
                u && (t = -t), n(t <= 67108863);
                for (var y = (1 << 26) % t, v = 0, g = this.length - 1; g >= 0; g--) v = (y * v + (this.words[g] | 0)) % t;
                return u ? -v : v
            }, e.prototype.modn = function(t) {
                return this.modrn(t)
            }, e.prototype.idivn = function(t) {
                var u = t < 0;
                u && (t = -t), n(t <= 67108863);
                for (var y = 0, v = this.length - 1; v >= 0; v--) {
                    var g = (this.words[v] | 0) + y * 67108864;
                    this.words[v] = g / t | 0, y = g % t
                }
                return this._strip(), u ? this.ineg() : this
            }, e.prototype.divn = function(t) {
                return this.clone().idivn(t)
            }, e.prototype.egcd = function(t) {
                n(t.negative === 0), n(!t.isZero());
                var u = this,
                    y = t.clone();
                u.negative !== 0 ? u = u.umod(t) : u = u.clone();
                for (var v = new e(1), g = new e(0), S = new e(0), _ = new e(1), M = 0; u.isEven() && y.isEven();) u.iushrn(1), y.iushrn(1), ++M;
                for (var d = y.clone(), A = u.clone(); !u.isZero();) {
                    for (var z = 0, U = 1;
                        (u.words[0] & U) === 0 && z < 26; ++z, U <<= 1);
                    if (z > 0)
                        for (u.iushrn(z); z-- > 0;)(v.isOdd() || g.isOdd()) && (v.iadd(d), g.isub(A)), v.iushrn(1), g.iushrn(1);
                    for (var X = 0, R = 1;
                        (y.words[0] & R) === 0 && X < 26; ++X, R <<= 1);
                    if (X > 0)
                        for (y.iushrn(X); X-- > 0;)(S.isOdd() || _.isOdd()) && (S.iadd(d), _.isub(A)), S.iushrn(1), _.iushrn(1);
                    u.cmp(y) >= 0 ? (u.isub(y), v.isub(S), g.isub(_)) : (y.isub(u), S.isub(v), _.isub(g))
                }
                return {
                    a: S,
                    b: _,
                    gcd: y.iushln(M)
                }
            }, e.prototype._invmp = function(t) {
                n(t.negative === 0), n(!t.isZero());
                var u = this,
                    y = t.clone();
                u.negative !== 0 ? u = u.umod(t) : u = u.clone();
                for (var v = new e(1), g = new e(0), S = y.clone(); u.cmpn(1) > 0 && y.cmpn(1) > 0;) {
                    for (var _ = 0, M = 1;
                        (u.words[0] & M) === 0 && _ < 26; ++_, M <<= 1);
                    if (_ > 0)
                        for (u.iushrn(_); _-- > 0;) v.isOdd() && v.iadd(S), v.iushrn(1);
                    for (var d = 0, A = 1;
                        (y.words[0] & A) === 0 && d < 26; ++d, A <<= 1);
                    if (d > 0)
                        for (y.iushrn(d); d-- > 0;) g.isOdd() && g.iadd(S), g.iushrn(1);
                    u.cmp(y) >= 0 ? (u.isub(y), v.isub(g)) : (y.isub(u), g.isub(v))
                }
                var z;
                return u.cmpn(1) === 0 ? z = v : z = g, z.cmpn(0) < 0 && z.iadd(t), z
            }, e.prototype.gcd = function(t) {
                if (this.isZero()) return t.abs();
                if (t.isZero()) return this.abs();
                var u = this.clone(),
                    y = t.clone();
                u.negative = 0, y.negative = 0;
                for (var v = 0; u.isEven() && y.isEven(); v++) u.iushrn(1), y.iushrn(1);
                do {
                    for (; u.isEven();) u.iushrn(1);
                    for (; y.isEven();) y.iushrn(1);
                    var g = u.cmp(y);
                    if (g < 0) {
                        var S = u;
                        u = y, y = S
                    } else if (g === 0 || y.cmpn(1) === 0) break;
                    u.isub(y)
                } while (!0);
                return y.iushln(v)
            }, e.prototype.invm = function(t) {
                return this.egcd(t).a.umod(t)
            }, e.prototype.isEven = function() {
                return (this.words[0] & 1) === 0
            }, e.prototype.isOdd = function() {
                return (this.words[0] & 1) === 1
            }, e.prototype.andln = function(t) {
                return this.words[0] & t
            }, e.prototype.bincn = function(t) {
                n(typeof t == "number");
                var u = t % 26,
                    y = (t - u) / 26,
                    v = 1 << u;
                if (this.length <= y) return this._expand(y + 1), this.words[y] |= v, this;
                for (var g = v, S = y; g !== 0 && S < this.length; S++) {
                    var _ = this.words[S] | 0;
                    _ += g, g = _ >>> 26, _ &= 67108863, this.words[S] = _
                }
                return g !== 0 && (this.words[S] = g, this.length++), this
            }, e.prototype.isZero = function() {
                return this.length === 1 && this.words[0] === 0
            }, e.prototype.cmpn = function(t) {
                var u = t < 0;
                if (this.negative !== 0 && !u) return -1;
                if (this.negative === 0 && u) return 1;
                this._strip();
                var y;
                if (this.length > 1) y = 1;
                else {
                    u && (t = -t), n(t <= 67108863, "Number is too big");
                    var v = this.words[0] | 0;
                    y = v === t ? 0 : v < t ? -1 : 1
                }
                return this.negative !== 0 ? -y | 0 : y
            }, e.prototype.cmp = function(t) {
                if (this.negative !== 0 && t.negative === 0) return -1;
                if (this.negative === 0 && t.negative !== 0) return 1;
                var u = this.ucmp(t);
                return this.negative !== 0 ? -u | 0 : u
            }, e.prototype.ucmp = function(t) {
                if (this.length > t.length) return 1;
                if (this.length < t.length) return -1;
                for (var u = 0, y = this.length - 1; y >= 0; y--) {
                    var v = this.words[y] | 0,
                        g = t.words[y] | 0;
                    if (v !== g) {
                        v < g ? u = -1 : v > g && (u = 1);
                        break
                    }
                }
                return u
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
                return new P(t)
            }, e.prototype.toRed = function(t) {
                return n(!this.red, "Already a number in reduction context"), n(this.negative === 0, "red works only with positives"), t.convertTo(this)._forceRed(t)
            }, e.prototype.fromRed = function() {
                return n(this.red, "fromRed works only with numbers in reduction context"), this.red.convertFrom(this)
            }, e.prototype._forceRed = function(t) {
                return this.red = t, this
            }, e.prototype.forceRed = function(t) {
                return n(!this.red, "Already a number in reduction context"), this._forceRed(t)
            }, e.prototype.redAdd = function(t) {
                return n(this.red, "redAdd works only with red numbers"), this.red.add(this, t)
            }, e.prototype.redIAdd = function(t) {
                return n(this.red, "redIAdd works only with red numbers"), this.red.iadd(this, t)
            }, e.prototype.redSub = function(t) {
                return n(this.red, "redSub works only with red numbers"), this.red.sub(this, t)
            }, e.prototype.redISub = function(t) {
                return n(this.red, "redISub works only with red numbers"), this.red.isub(this, t)
            }, e.prototype.redShl = function(t) {
                return n(this.red, "redShl works only with red numbers"), this.red.shl(this, t)
            }, e.prototype.redMul = function(t) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.mul(this, t)
            }, e.prototype.redIMul = function(t) {
                return n(this.red, "redMul works only with red numbers"), this.red._verify2(this, t), this.red.imul(this, t)
            }, e.prototype.redSqr = function() {
                return n(this.red, "redSqr works only with red numbers"), this.red._verify1(this), this.red.sqr(this)
            }, e.prototype.redISqr = function() {
                return n(this.red, "redISqr works only with red numbers"), this.red._verify1(this), this.red.isqr(this)
            }, e.prototype.redSqrt = function() {
                return n(this.red, "redSqrt works only with red numbers"), this.red._verify1(this), this.red.sqrt(this)
            }, e.prototype.redInvm = function() {
                return n(this.red, "redInvm works only with red numbers"), this.red._verify1(this), this.red.invm(this)
            }, e.prototype.redNeg = function() {
                return n(this.red, "redNeg works only with red numbers"), this.red._verify1(this), this.red.neg(this)
            }, e.prototype.redPow = function(t) {
                return n(this.red && !t.red, "redPow(normalNum)"), this.red._verify1(this), this.red.pow(this, t)
            };
            var O = {
                k256: null,
                p224: null,
                p192: null,
                p25519: null
            };

            function L(b, t) {
                this.name = b, this.p = new e(t, 16), this.n = this.p.bitLength(), this.k = new e(1).iushln(this.n).isub(this.p), this.tmp = this._tmp()
            }
            L.prototype._tmp = function() {
                var t = new e(null);
                return t.words = new Array(Math.ceil(this.n / 13)), t
            }, L.prototype.ireduce = function(t) {
                var u = t,
                    y;
                do this.split(u, this.tmp), u = this.imulK(u), u = u.iadd(this.tmp), y = u.bitLength(); while (y > this.n);
                var v = y < this.n ? -1 : u.ucmp(this.p);
                return v === 0 ? (u.words[0] = 0, u.length = 1) : v > 0 ? u.isub(this.p) : u.strip !== void 0 ? u.strip() : u._strip(), u
            }, L.prototype.split = function(t, u) {
                t.iushrn(this.n, 0, u)
            }, L.prototype.imulK = function(t) {
                return t.imul(this.k)
            };

            function G() {
                L.call(this, "k256", "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f")
            }
            s(G, L), G.prototype.split = function(t, u) {
                for (var y = 4194303, v = Math.min(t.length, 9), g = 0; g < v; g++) u.words[g] = t.words[g];
                if (u.length = v, t.length <= 9) {
                    t.words[0] = 0, t.length = 1;
                    return
                }
                var S = t.words[9];
                for (u.words[u.length++] = S & y, g = 10; g < t.length; g++) {
                    var _ = t.words[g] | 0;
                    t.words[g - 10] = (_ & y) << 4 | S >>> 22, S = _
                }
                S >>>= 22, t.words[g - 10] = S, S === 0 && t.length > 10 ? t.length -= 10 : t.length -= 9
            }, G.prototype.imulK = function(t) {
                t.words[t.length] = 0, t.words[t.length + 1] = 0, t.length += 2;
                for (var u = 0, y = 0; y < t.length; y++) {
                    var v = t.words[y] | 0;
                    u += v * 977, t.words[y] = u & 67108863, u = v * 64 + (u / 67108864 | 0)
                }
                return t.words[t.length - 1] === 0 && (t.length--, t.words[t.length - 1] === 0 && t.length--), t
            };

            function V() {
                L.call(this, "p224", "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001")
            }
            s(V, L);

            function K() {
                L.call(this, "p192", "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff")
            }
            s(K, L);

            function Q() {
                L.call(this, "25519", "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed")
            }
            s(Q, L), Q.prototype.imulK = function(t) {
                for (var u = 0, y = 0; y < t.length; y++) {
                    var v = (t.words[y] | 0) * 19 + u,
                        g = v & 67108863;
                    v >>>= 26, t.words[y] = g, u = v
                }
                return u !== 0 && (t.words[t.length++] = u), t
            }, e._prime = function(t) {
                if (O[t]) return O[t];
                var u;
                if (t === "k256") u = new G;
                else if (t === "p224") u = new V;
                else if (t === "p192") u = new K;
                else if (t === "p25519") u = new Q;
                else throw new Error("Unknown prime " + t);
                return O[t] = u, u
            };

            function P(b) {
                if (typeof b == "string") {
                    var t = e._prime(b);
                    this.m = t.p, this.prime = t
                } else n(b.gtn(1), "modulus must be greater than 1"), this.m = b, this.prime = null
            }
            P.prototype._verify1 = function(t) {
                n(t.negative === 0, "red works only with positives"), n(t.red, "red works only with red numbers")
            }, P.prototype._verify2 = function(t, u) {
                n((t.negative | u.negative) === 0, "red works only with positives"), n(t.red && t.red === u.red, "red works only with red numbers")
            }, P.prototype.imod = function(t) {
                return this.prime ? this.prime.ireduce(t)._forceRed(this) : (f(t, t.umod(this.m)._forceRed(this)), t)
            }, P.prototype.neg = function(t) {
                return t.isZero() ? t.clone() : this.m.sub(t)._forceRed(this)
            }, P.prototype.add = function(t, u) {
                this._verify2(t, u);
                var y = t.add(u);
                return y.cmp(this.m) >= 0 && y.isub(this.m), y._forceRed(this)
            }, P.prototype.iadd = function(t, u) {
                this._verify2(t, u);
                var y = t.iadd(u);
                return y.cmp(this.m) >= 0 && y.isub(this.m), y
            }, P.prototype.sub = function(t, u) {
                this._verify2(t, u);
                var y = t.sub(u);
                return y.cmpn(0) < 0 && y.iadd(this.m), y._forceRed(this)
            }, P.prototype.isub = function(t, u) {
                this._verify2(t, u);
                var y = t.isub(u);
                return y.cmpn(0) < 0 && y.iadd(this.m), y
            }, P.prototype.shl = function(t, u) {
                return this._verify1(t), this.imod(t.ushln(u))
            }, P.prototype.imul = function(t, u) {
                return this._verify2(t, u), this.imod(t.imul(u))
            }, P.prototype.mul = function(t, u) {
                return this._verify2(t, u), this.imod(t.mul(u))
            }, P.prototype.isqr = function(t) {
                return this.imul(t, t.clone())
            }, P.prototype.sqr = function(t) {
                return this.mul(t, t)
            }, P.prototype.sqrt = function(t) {
                if (t.isZero()) return t.clone();
                var u = this.m.andln(3);
                if (n(u % 2 === 1), u === 3) {
                    var y = this.m.add(new e(1)).iushrn(2);
                    return this.pow(t, y)
                }
                for (var v = this.m.subn(1), g = 0; !v.isZero() && v.andln(1) === 0;) g++, v.iushrn(1);
                n(!v.isZero());
                var S = new e(1).toRed(this),
                    _ = S.redNeg(),
                    M = this.m.subn(1).iushrn(1),
                    d = this.m.bitLength();
                for (d = new e(2 * d * d).toRed(this); this.pow(d, M).cmp(_) !== 0;) d.redIAdd(_);
                for (var A = this.pow(d, v), z = this.pow(t, v.addn(1).iushrn(1)), U = this.pow(t, v), X = g; U.cmp(S) !== 0;) {
                    for (var R = U, k = 0; R.cmp(S) !== 0; k++) R = R.redSqr();
                    n(k < X);
                    var N = this.pow(A, new e(1).iushln(X - k - 1));
                    z = z.redMul(N), A = N.redSqr(), U = U.redMul(A), X = k
                }
                return z
            }, P.prototype.invm = function(t) {
                var u = t._invmp(this.m);
                return u.negative !== 0 ? (u.negative = 0, this.imod(u).redNeg()) : this.imod(u)
            }, P.prototype.pow = function(t, u) {
                if (u.isZero()) return new e(1).toRed(this);
                if (u.cmpn(1) === 0) return t.clone();
                var y = 4,
                    v = new Array(1 << y);
                v[0] = new e(1).toRed(this), v[1] = t;
                for (var g = 2; g < v.length; g++) v[g] = this.mul(v[g - 1], t);
                var S = v[0],
                    _ = 0,
                    M = 0,
                    d = u.bitLength() % 26;
                for (d === 0 && (d = 26), g = u.length - 1; g >= 0; g--) {
                    for (var A = u.words[g], z = d - 1; z >= 0; z--) {
                        var U = A >> z & 1;
                        if (S !== v[0] && (S = this.sqr(S)), U === 0 && _ === 0) {
                            M = 0;
                            continue
                        }
                        _ <<= 1, _ |= U, M++, !(M !== y && (g !== 0 || z !== 0)) && (S = this.mul(S, v[_]), M = 0, _ = 0)
                    }
                    d = 26
                }
                return S
            }, P.prototype.convertTo = function(t) {
                var u = t.umod(this.m);
                return u === t ? u.clone() : u
            }, P.prototype.convertFrom = function(t) {
                var u = t.clone();
                return u.red = null, u
            }, e.mont = function(t) {
                return new q(t)
            };

            function q(b) {
                P.call(this, b), this.shift = this.m.bitLength(), this.shift % 26 !== 0 && (this.shift += 26 - this.shift % 26), this.r = new e(1).iushln(this.shift), this.r2 = this.imod(this.r.sqr()), this.rinv = this.r._invmp(this.m), this.minv = this.rinv.mul(this.r).isubn(1).div(this.m), this.minv = this.minv.umod(this.r), this.minv = this.r.sub(this.minv)
            }
            s(q, P), q.prototype.convertTo = function(t) {
                return this.imod(t.ushln(this.shift))
            }, q.prototype.convertFrom = function(t) {
                var u = this.imod(t.mul(this.rinv));
                return u.red = null, u
            }, q.prototype.imul = function(t, u) {
                if (t.isZero() || u.isZero()) return t.words[0] = 0, t.length = 1, t;
                var y = t.imul(u),
                    v = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    g = y.isub(v).iushrn(this.shift),
                    S = g;
                return g.cmp(this.m) >= 0 ? S = g.isub(this.m) : g.cmpn(0) < 0 && (S = g.iadd(this.m)), S._forceRed(this)
            }, q.prototype.mul = function(t, u) {
                if (t.isZero() || u.isZero()) return new e(0)._forceRed(this);
                var y = t.mul(u),
                    v = y.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
                    g = y.isub(v).iushrn(this.shift),
                    S = g;
                return g.cmp(this.m) >= 0 ? S = g.isub(this.m) : g.cmpn(0) < 0 && (S = g.iadd(this.m)), S._forceRed(this)
            }, q.prototype.invm = function(t) {
                var u = this.imod(t._invmp(this.m).mul(this.r2));
                return u._forceRed(this)
            }
        })(a, bn)
    })(bn$1)), bn$1.exports
}
var asn1$1 = {},
    asn1 = {},
    api = {},
    vmBrowserify = {},
    hasRequiredVmBrowserify;

function requireVmBrowserify() {
    return hasRequiredVmBrowserify || (hasRequiredVmBrowserify = 1, (function(exports$1) {
        var indexOf = function(a, r) {
                if (a.indexOf) return a.indexOf(r);
                for (var i = 0; i < a.length; i++)
                    if (a[i] === r) return i;
                return -1
            },
            Object_keys = function(a) {
                if (Object.keys) return Object.keys(a);
                var r = [];
                for (var i in a) r.push(i);
                return r
            },
            forEach = function(a, r) {
                if (a.forEach) return a.forEach(r);
                for (var i = 0; i < a.length; i++) r(a[i], i, a)
            },
            defineProp = (function() {
                try {
                    return Object.defineProperty({}, "_", {}),
                        function(a, r, i) {
                            Object.defineProperty(a, r, {
                                writable: !0,
                                enumerable: !1,
                                configurable: !0,
                                value: i
                            })
                        }
                } catch {
                    return function(r, i, n) {
                        r[i] = n
                    }
                }
            })(),
            globals = ["Array", "Boolean", "Date", "Error", "EvalError", "Function", "Infinity", "JSON", "Math", "NaN", "Number", "Object", "RangeError", "ReferenceError", "RegExp", "String", "SyntaxError", "TypeError", "URIError", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "escape", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "undefined", "unescape"];

        function Context() {}
        Context.prototype = {};
        var Script = exports$1.Script = function(r) {
            if (!(this instanceof Script)) return new Script(r);
            this.code = r
        };
        Script.prototype.runInContext = function(a) {
            if (!(a instanceof Context)) throw new TypeError("needs a 'context' argument.");
            var r = document.createElement("iframe");
            r.style || (r.style = {}), r.style.display = "none", document.body.appendChild(r);
            var i = r.contentWindow,
                n = i.eval,
                s = i.execScript;
            !n && s && (s.call(i, "null"), n = i.eval), forEach(Object_keys(a), function(c) {
                i[c] = a[c]
            }), forEach(globals, function(c) {
                a[c] && (i[c] = a[c])
            });
            var e = Object_keys(i),
                h = n.call(i, this.code);
            return forEach(Object_keys(i), function(c) {
                (c in a || indexOf(e, c) === -1) && (a[c] = i[c])
            }), forEach(globals, function(c) {
                c in a || defineProp(a, c, i[c])
            }), document.body.removeChild(r), h
        }, Script.prototype.runInThisContext = function() {
            return eval(this.code)
        }, Script.prototype.runInNewContext = function(a) {
            var r = Script.createContext(a),
                i = this.runInContext(r);
            return a && forEach(Object_keys(r), function(n) {
                a[n] = r[n]
            }), i
        }, forEach(Object_keys(Script.prototype), function(a) {
            exports$1[a] = Script[a] = function(r) {
                var i = Script(r);
                return i[a].apply(i, [].slice.call(arguments, 1))
            }
        }), exports$1.isContext = function(a) {
            return a instanceof Context
        }, exports$1.createScript = function(a) {
            return exports$1.Script(a)
        }, exports$1.createContext = Script.createContext = function(a) {
            var r = new Context;
            return typeof a == "object" && forEach(Object_keys(a), function(i) {
                r[i] = a[i]
            }), r
        }
    })(vmBrowserify)), vmBrowserify
}
var hasRequiredApi;

function requireApi() {
    return hasRequiredApi || (hasRequiredApi = 1, (function(a) {
        var r = requireAsn1$1(),
            i = requireInherits_browser(),
            n = a;
        n.define = function(h, c) {
            return new s(h, c)
        };

        function s(e, h) {
            this.name = e, this.body = h, this.decoders = {}, this.encoders = {}
        }
        s.prototype._createNamed = function(h) {
            var c;
            try {
                c = requireVmBrowserify().runInThisContext("(function " + this.name + `(entity) {
  this._initNamed(entity);
})`)
            } catch {
                c = function(p) {
                    this._initNamed(p)
                }
            }
            return i(c, h), c.prototype._initNamed = function(p) {
                h.call(this, p)
            }, new c(this)
        }, s.prototype._getDecoder = function(h) {
            return h = h || "der", this.decoders.hasOwnProperty(h) || (this.decoders[h] = this._createNamed(r.decoders[h])), this.decoders[h]
        }, s.prototype.decode = function(h, c, l) {
            return this._getDecoder(c).decode(h, l)
        }, s.prototype._getEncoder = function(h) {
            return h = h || "der", this.encoders.hasOwnProperty(h) || (this.encoders[h] = this._createNamed(r.encoders[h])), this.encoders[h]
        }, s.prototype.encode = function(h, c, l) {
            return this._getEncoder(c).encode(h, l)
        }
    })(api)), api
}
var base = {},
    reporter = {},
    hasRequiredReporter;

function requireReporter() {
    if (hasRequiredReporter) return reporter;
    hasRequiredReporter = 1;
    var a = requireInherits_browser();

    function r(n) {
        this._reporterState = {
            obj: null,
            path: [],
            options: n || {},
            errors: []
        }
    }
    reporter.Reporter = r, r.prototype.isError = function(s) {
        return s instanceof i
    }, r.prototype.save = function() {
        var s = this._reporterState;
        return {
            obj: s.obj,
            pathLen: s.path.length
        }
    }, r.prototype.restore = function(s) {
        var e = this._reporterState;
        e.obj = s.obj, e.path = e.path.slice(0, s.pathLen)
    }, r.prototype.enterKey = function(s) {
        return this._reporterState.path.push(s)
    }, r.prototype.exitKey = function(s) {
        var e = this._reporterState;
        e.path = e.path.slice(0, s - 1)
    }, r.prototype.leaveKey = function(s, e, h) {
        var c = this._reporterState;
        this.exitKey(s), c.obj !== null && (c.obj[e] = h)
    }, r.prototype.path = function() {
        return this._reporterState.path.join("/")
    }, r.prototype.enterObject = function() {
        var s = this._reporterState,
            e = s.obj;
        return s.obj = {}, e
    }, r.prototype.leaveObject = function(s) {
        var e = this._reporterState,
            h = e.obj;
        return e.obj = s, h
    }, r.prototype.error = function(s) {
        var e, h = this._reporterState,
            c = s instanceof i;
        if (c ? e = s : e = new i(h.path.map(function(l) {
                return "[" + JSON.stringify(l) + "]"
            }).join(""), s.message || s, s.stack), !h.options.partial) throw e;
        return c || h.errors.push(e), e
    }, r.prototype.wrapResult = function(s) {
        var e = this._reporterState;
        return e.options.partial ? {
            result: this.isError(s) ? null : s,
            errors: e.errors
        } : s
    };

    function i(n, s) {
        this.path = n, this.rethrow(s)
    }
    return a(i, Error), i.prototype.rethrow = function(s) {
        if (this.message = s + " at: " + (this.path || "(shallow)"), Error.captureStackTrace && Error.captureStackTrace(this, i), !this.stack) try {
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
    var a = requireInherits_browser(),
        r = requireBase().Reporter,
        i = requireDist$1().Buffer;

    function n(e, h) {
        if (r.call(this, h), !i.isBuffer(e)) {
            this.error("Input not Buffer");
            return
        }
        this.base = e, this.offset = 0, this.length = e.length
    }
    a(n, r), buffer.DecoderBuffer = n, n.prototype.save = function() {
        return {
            offset: this.offset,
            reporter: r.prototype.save.call(this)
        }
    }, n.prototype.restore = function(h) {
        var c = new n(this.base);
        return c.offset = h.offset, c.length = this.offset, this.offset = h.offset, r.prototype.restore.call(this, h.reporter), c
    }, n.prototype.isEmpty = function() {
        return this.offset === this.length
    }, n.prototype.readUInt8 = function(h) {
        return this.offset + 1 <= this.length ? this.base.readUInt8(this.offset++, !0) : this.error(h || "DecoderBuffer overrun")
    }, n.prototype.skip = function(h, c) {
        if (!(this.offset + h <= this.length)) return this.error(c || "DecoderBuffer overrun");
        var l = new n(this.base);
        return l._reporterState = this._reporterState, l.offset = this.offset, l.length = this.offset + h, this.offset += h, l
    }, n.prototype.raw = function(h) {
        return this.base.slice(h ? h.offset : this.offset, this.length)
    };

    function s(e, h) {
        if (Array.isArray(e)) this.length = 0, this.value = e.map(function(c) {
            return c instanceof s || (c = new s(c, h)), this.length += c.length, c
        }, this);
        else if (typeof e == "number") {
            if (!(0 <= e && e <= 255)) return h.error("non-byte EncoderBuffer value");
            this.value = e, this.length = 1
        } else if (typeof e == "string") this.value = e, this.length = i.byteLength(e);
        else if (i.isBuffer(e)) this.value = e, this.length = e.length;
        else return h.error("Unsupported type: " + typeof e)
    }
    return buffer.EncoderBuffer = s, s.prototype.join = function(h, c) {
        return h || (h = new i(this.length)), c || (c = 0), this.length === 0 || (Array.isArray(this.value) ? this.value.forEach(function(l) {
            l.join(h, c), c += l.length
        }) : (typeof this.value == "number" ? h[c] = this.value : typeof this.value == "string" ? h.write(this.value, c) : i.isBuffer(this.value) && this.value.copy(h, c), c += this.length)), h
    }, buffer
}
var node, hasRequiredNode;

function requireNode() {
    if (hasRequiredNode) return node;
    hasRequiredNode = 1;
    var a = requireBase().Reporter,
        r = requireBase().EncoderBuffer,
        i = requireBase().DecoderBuffer,
        n = requireMinimalisticAssert(),
        s = ["seq", "seqof", "set", "setof", "objid", "bool", "gentime", "utctime", "null_", "enum", "int", "objDesc", "bitstr", "bmpstr", "charstr", "genstr", "graphstr", "ia5str", "iso646str", "numstr", "octstr", "printstr", "t61str", "unistr", "utf8str", "videostr"],
        e = ["key", "obj", "use", "optional", "explicit", "implicit", "def", "choice", "any", "contains"].concat(s),
        h = ["_peekTag", "_decodeTag", "_use", "_decodeStr", "_decodeObjid", "_decodeTime", "_decodeNull", "_decodeInt", "_decodeBool", "_decodeList", "_encodeComposite", "_encodeStr", "_encodeObjid", "_encodeTime", "_encodeNull", "_encodeInt", "_encodeBool"];

    function c(p, f) {
        var m = {};
        this._baseState = m, m.enc = p, m.parent = f || null, m.children = null, m.tag = null, m.args = null, m.reverseArgs = null, m.choice = null, m.optional = !1, m.any = !1, m.obj = !1, m.use = null, m.useDecoder = null, m.key = null, m.default = null, m.explicit = null, m.implicit = null, m.contains = null, m.parent || (m.children = [], this._wrap())
    }
    node = c;
    var l = ["enc", "parent", "children", "tag", "args", "reverseArgs", "choice", "optional", "any", "obj", "use", "alteredUse", "key", "default", "explicit", "implicit", "contains"];
    return c.prototype.clone = function() {
        var f = this._baseState,
            m = {};
        l.forEach(function(x) {
            m[x] = f[x]
        });
        var w = new this.constructor(m.parent);
        return w._baseState = m, w
    }, c.prototype._wrap = function() {
        var f = this._baseState;
        e.forEach(function(m) {
            this[m] = function() {
                var x = new this.constructor(this);
                return f.children.push(x), x[m].apply(x, arguments)
            }
        }, this)
    }, c.prototype._init = function(f) {
        var m = this._baseState;
        n(m.parent === null), f.call(this), m.children = m.children.filter(function(w) {
            return w._baseState.parent === this
        }, this), n.equal(m.children.length, 1, "Root node can have only one child")
    }, c.prototype._useArgs = function(f) {
        var m = this._baseState,
            w = f.filter(function(x) {
                return x instanceof this.constructor
            }, this);
        f = f.filter(function(x) {
            return !(x instanceof this.constructor)
        }, this), w.length !== 0 && (n(m.children === null), m.children = w, w.forEach(function(x) {
            x._baseState.parent = this
        }, this)), f.length !== 0 && (n(m.args === null), m.args = f, m.reverseArgs = f.map(function(x) {
            if (typeof x != "object" || x.constructor !== Object) return x;
            var B = {};
            return Object.keys(x).forEach(function(E) {
                E == (E | 0) && (E |= 0);
                var C = x[E];
                B[C] = E
            }), B
        }))
    }, h.forEach(function(p) {
        c.prototype[p] = function() {
            var m = this._baseState;
            throw new Error(p + " not implemented for encoding: " + m.enc)
        }
    }), s.forEach(function(p) {
        c.prototype[p] = function() {
            var m = this._baseState,
                w = Array.prototype.slice.call(arguments);
            return n(m.tag === null), m.tag = p, this._useArgs(w), this
        }
    }), c.prototype.use = function(f) {
        n(f);
        var m = this._baseState;
        return n(m.use === null), m.use = f, this
    }, c.prototype.optional = function() {
        var f = this._baseState;
        return f.optional = !0, this
    }, c.prototype.def = function(f) {
        var m = this._baseState;
        return n(m.default === null), m.default = f, m.optional = !0, this
    }, c.prototype.explicit = function(f) {
        var m = this._baseState;
        return n(m.explicit === null && m.implicit === null), m.explicit = f, this
    }, c.prototype.implicit = function(f) {
        var m = this._baseState;
        return n(m.explicit === null && m.implicit === null), m.implicit = f, this
    }, c.prototype.obj = function() {
        var f = this._baseState,
            m = Array.prototype.slice.call(arguments);
        return f.obj = !0, m.length !== 0 && this._useArgs(m), this
    }, c.prototype.key = function(f) {
        var m = this._baseState;
        return n(m.key === null), m.key = f, this
    }, c.prototype.any = function() {
        var f = this._baseState;
        return f.any = !0, this
    }, c.prototype.choice = function(f) {
        var m = this._baseState;
        return n(m.choice === null), m.choice = f, this._useArgs(Object.keys(f).map(function(w) {
            return f[w]
        })), this
    }, c.prototype.contains = function(f) {
        var m = this._baseState;
        return n(m.use === null), m.contains = f, this
    }, c.prototype._decode = function(f, m) {
        var w = this._baseState;
        if (w.parent === null) return f.wrapResult(w.children[0]._decode(f, m));
        var x = w.default,
            B = !0,
            E = null;
        if (w.key !== null && (E = f.enterKey(w.key)), w.optional) {
            var C = null;
            if (w.explicit !== null ? C = w.explicit : w.implicit !== null ? C = w.implicit : w.tag !== null && (C = w.tag), C === null && !w.any) {
                var $ = f.save();
                try {
                    w.choice === null ? this._decodeGeneric(w.tag, f, m) : this._decodeChoice(f, m), B = !0
                } catch {
                    B = !1
                }
                f.restore($)
            } else if (B = this._peekTag(f, C, w.any), f.isError(B)) return B
        }
        var I;
        if (w.obj && B && (I = f.enterObject()), B) {
            if (w.explicit !== null) {
                var D = this._decodeTag(f, w.explicit);
                if (f.isError(D)) return D;
                f = D
            }
            var j = f.offset;
            if (w.use === null && w.choice === null) {
                if (w.any) var $ = f.save();
                var O = this._decodeTag(f, w.implicit !== null ? w.implicit : w.tag, w.any);
                if (f.isError(O)) return O;
                w.any ? x = f.raw($) : f = O
            }
            if (m && m.track && w.tag !== null && m.track(f.path(), j, f.length, "tagged"), m && m.track && w.tag !== null && m.track(f.path(), f.offset, f.length, "content"), w.any ? x = x : w.choice === null ? x = this._decodeGeneric(w.tag, f, m) : x = this._decodeChoice(f, m), f.isError(x)) return x;
            if (!w.any && w.choice === null && w.children !== null && w.children.forEach(function(V) {
                    V._decode(f, m)
                }), w.contains && (w.tag === "octstr" || w.tag === "bitstr")) {
                var L = new i(x);
                x = this._getUse(w.contains, f._reporterState.obj)._decode(L, m)
            }
        }
        return w.obj && B && (x = f.leaveObject(I)), w.key !== null && (x !== null || B === !0) ? f.leaveKey(E, w.key, x) : E !== null && f.exitKey(E), x
    }, c.prototype._decodeGeneric = function(f, m, w) {
        var x = this._baseState;
        return f === "seq" || f === "set" ? null : f === "seqof" || f === "setof" ? this._decodeList(m, f, x.args[0], w) : /str$/.test(f) ? this._decodeStr(m, f, w) : f === "objid" && x.args ? this._decodeObjid(m, x.args[0], x.args[1], w) : f === "objid" ? this._decodeObjid(m, null, null, w) : f === "gentime" || f === "utctime" ? this._decodeTime(m, f, w) : f === "null_" ? this._decodeNull(m, w) : f === "bool" ? this._decodeBool(m, w) : f === "objDesc" ? this._decodeStr(m, f, w) : f === "int" || f === "enum" ? this._decodeInt(m, x.args && x.args[0], w) : x.use !== null ? this._getUse(x.use, m._reporterState.obj)._decode(m, w) : m.error("unknown tag: " + f)
    }, c.prototype._getUse = function(f, m) {
        var w = this._baseState;
        return w.useDecoder = this._use(f, m), n(w.useDecoder._baseState.parent === null), w.useDecoder = w.useDecoder._baseState.children[0], w.implicit !== w.useDecoder._baseState.implicit && (w.useDecoder = w.useDecoder.clone(), w.useDecoder._baseState.implicit = w.implicit), w.useDecoder
    }, c.prototype._decodeChoice = function(f, m) {
        var w = this._baseState,
            x = null,
            B = !1;
        return Object.keys(w.choice).some(function(E) {
            var C = f.save(),
                $ = w.choice[E];
            try {
                var I = $._decode(f, m);
                if (f.isError(I)) return !1;
                x = {
                    type: E,
                    value: I
                }, B = !0
            } catch {
                return f.restore(C), !1
            }
            return !0
        }, this), B ? x : f.error("Choice not matched")
    }, c.prototype._createEncoderBuffer = function(f) {
        return new r(f, this.reporter)
    }, c.prototype._encode = function(f, m, w) {
        var x = this._baseState;
        if (!(x.default !== null && x.default === f)) {
            var B = this._encodeValue(f, m, w);
            if (B !== void 0 && !this._skipDefault(B, m, w)) return B
        }
    }, c.prototype._encodeValue = function(f, m, w) {
        var x = this._baseState;
        if (x.parent === null) return x.children[0]._encode(f, m || new a);
        var $ = null;
        if (this.reporter = m, x.optional && f === void 0)
            if (x.default !== null) f = x.default;
            else return;
        var B = null,
            E = !1;
        if (x.any) $ = this._createEncoderBuffer(f);
        else if (x.choice) $ = this._encodeChoice(f, m);
        else if (x.contains) B = this._getUse(x.contains, w)._encode(f, m), E = !0;
        else if (x.children) B = x.children.map(function(j) {
            if (j._baseState.tag === "null_") return j._encode(null, m, f);
            if (j._baseState.key === null) return m.error("Child should have a key");
            var O = m.enterKey(j._baseState.key);
            if (typeof f != "object") return m.error("Child expected, but input is not object");
            var L = j._encode(f[j._baseState.key], m, f);
            return m.leaveKey(O), L
        }, this).filter(function(j) {
            return j
        }), B = this._createEncoderBuffer(B);
        else if (x.tag === "seqof" || x.tag === "setof") {
            if (!(x.args && x.args.length === 1)) return m.error("Too many args for : " + x.tag);
            if (!Array.isArray(f)) return m.error("seqof/setof, but data is not Array");
            var C = this.clone();
            C._baseState.implicit = null, B = this._createEncoderBuffer(f.map(function(j) {
                var O = this._baseState;
                return this._getUse(O.args[0], f)._encode(j, m)
            }, C))
        } else x.use !== null ? $ = this._getUse(x.use, w)._encode(f, m) : (B = this._encodePrimitive(x.tag, f), E = !0);
        var $;
        if (!x.any && x.choice === null) {
            var I = x.implicit !== null ? x.implicit : x.tag,
                D = x.implicit === null ? "universal" : "context";
            I === null ? x.use === null && m.error("Tag could be omitted only for .use()") : x.use === null && ($ = this._encodeComposite(I, E, D, B))
        }
        return x.explicit !== null && ($ = this._encodeComposite(x.explicit, !1, "context", $)), $
    }, c.prototype._encodeChoice = function(f, m) {
        var w = this._baseState,
            x = w.choice[f.type];
        return x || n(!1, f.type + " not found in " + JSON.stringify(Object.keys(w.choice))), x._encode(f.value, m)
    }, c.prototype._encodePrimitive = function(f, m) {
        var w = this._baseState;
        if (/str$/.test(f)) return this._encodeStr(m, f);
        if (f === "objid" && w.args) return this._encodeObjid(m, w.reverseArgs[0], w.args[1]);
        if (f === "objid") return this._encodeObjid(m, null, null);
        if (f === "gentime" || f === "utctime") return this._encodeTime(m, f);
        if (f === "null_") return this._encodeNull();
        if (f === "int" || f === "enum") return this._encodeInt(m, w.args && w.reverseArgs[0]);
        if (f === "bool") return this._encodeBool(m);
        if (f === "objDesc") return this._encodeStr(m, f);
        throw new Error("Unsupported tag: " + f)
    }, c.prototype._isNumstr = function(f) {
        return /^[0-9 ]*$/.test(f)
    }, c.prototype._isPrintstr = function(f) {
        return /^[A-Za-z0-9 '\(\)\+,\-\.\/:=\?]*$/.test(f)
    }, node
}
var hasRequiredBase;

function requireBase() {
    return hasRequiredBase || (hasRequiredBase = 1, (function(a) {
        var r = a;
        r.Reporter = requireReporter().Reporter, r.DecoderBuffer = requireBuffer().DecoderBuffer, r.EncoderBuffer = requireBuffer().EncoderBuffer, r.Node = requireNode()
    })(base)), base
}
var constants = {},
    der = {},
    hasRequiredDer$2;

function requireDer$2() {
    return hasRequiredDer$2 || (hasRequiredDer$2 = 1, (function(a) {
        var r = requireConstants();
        a.tagClass = {
            0: "universal",
            1: "application",
            2: "context",
            3: "private"
        }, a.tagClassByName = r._reverse(a.tagClass), a.tag = {
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
        }, a.tagByName = r._reverse(a.tag)
    })(der)), der
}
var hasRequiredConstants;

function requireConstants() {
    return hasRequiredConstants || (hasRequiredConstants = 1, (function(a) {
        var r = a;
        r._reverse = function(n) {
            var s = {};
            return Object.keys(n).forEach(function(e) {
                (e | 0) == e && (e = e | 0);
                var h = n[e];
                s[h] = e
            }), s
        }, r.der = requireDer$2()
    })(constants)), constants
}
var decoders = {},
    der_1$1, hasRequiredDer$1;

function requireDer$1() {
    if (hasRequiredDer$1) return der_1$1;
    hasRequiredDer$1 = 1;
    var a = requireInherits_browser(),
        r = requireAsn1$1(),
        i = r.base,
        n = r.bignum,
        s = r.constants.der;

    function e(p) {
        this.enc = "der", this.name = p.name, this.entity = p, this.tree = new h, this.tree._init(p.body)
    }
    der_1$1 = e, e.prototype.decode = function(f, m) {
        return f instanceof i.DecoderBuffer || (f = new i.DecoderBuffer(f, m)), this.tree._decode(f, m)
    };

    function h(p) {
        i.Node.call(this, "der", p)
    }
    a(h, i.Node), h.prototype._peekTag = function(f, m, w) {
        if (f.isEmpty()) return !1;
        var x = f.save(),
            B = c(f, 'Failed to peek tag: "' + m + '"');
        return f.isError(B) ? B : (f.restore(x), B.tag === m || B.tagStr === m || B.tagStr + "of" === m || w)
    }, h.prototype._decodeTag = function(f, m, w) {
        var x = c(f, 'Failed to decode tag of "' + m + '"');
        if (f.isError(x)) return x;
        var B = l(f, x.primitive, 'Failed to get length of "' + m + '"');
        if (f.isError(B)) return B;
        if (!w && x.tag !== m && x.tagStr !== m && x.tagStr + "of" !== m) return f.error('Failed to match tag: "' + m + '"');
        if (x.primitive || B !== null) return f.skip(B, 'Failed to match body of: "' + m + '"');
        var E = f.save(),
            C = this._skipUntilEnd(f, 'Failed to skip indefinite length body: "' + this.tag + '"');
        return f.isError(C) ? C : (B = f.offset - E.offset, f.restore(E), f.skip(B, 'Failed to match body of: "' + m + '"'))
    }, h.prototype._skipUntilEnd = function(f, m) {
        for (;;) {
            var w = c(f, m);
            if (f.isError(w)) return w;
            var x = l(f, w.primitive, m);
            if (f.isError(x)) return x;
            var B;
            if (w.primitive || x !== null ? B = f.skip(x) : B = this._skipUntilEnd(f, m), f.isError(B)) return B;
            if (w.tagStr === "end") break
        }
    }, h.prototype._decodeList = function(f, m, w, x) {
        for (var B = []; !f.isEmpty();) {
            var E = this._peekTag(f, "end");
            if (f.isError(E)) return E;
            var C = w.decode(f, "der", x);
            if (f.isError(C) && E) break;
            B.push(C)
        }
        return B
    }, h.prototype._decodeStr = function(f, m) {
        if (m === "bitstr") {
            var w = f.readUInt8();
            return f.isError(w) ? w : {
                unused: w,
                data: f.raw()
            }
        } else if (m === "bmpstr") {
            var x = f.raw();
            if (x.length % 2 === 1) return f.error("Decoding of string type: bmpstr length mismatch");
            for (var B = "", E = 0; E < x.length / 2; E++) B += String.fromCharCode(x.readUInt16BE(E * 2));
            return B
        } else if (m === "numstr") {
            var C = f.raw().toString("ascii");
            return this._isNumstr(C) ? C : f.error("Decoding of string type: numstr unsupported characters")
        } else {
            if (m === "octstr") return f.raw();
            if (m === "objDesc") return f.raw();
            if (m === "printstr") {
                var $ = f.raw().toString("ascii");
                return this._isPrintstr($) ? $ : f.error("Decoding of string type: printstr unsupported characters")
            } else return /str$/.test(m) ? f.raw().toString() : f.error("Decoding of string type: " + m + " unsupported")
        }
    }, h.prototype._decodeObjid = function(f, m, w) {
        for (var x, B = [], E = 0; !f.isEmpty();) {
            var C = f.readUInt8();
            E <<= 7, E |= C & 127, (C & 128) === 0 && (B.push(E), E = 0)
        }
        C & 128 && B.push(E);
        var $ = B[0] / 40 | 0,
            I = B[0] % 40;
        if (w ? x = B : x = [$, I].concat(B.slice(1)), m) {
            var D = m[x.join(" ")];
            D === void 0 && (D = m[x.join(".")]), D !== void 0 && (x = D)
        }
        return x
    }, h.prototype._decodeTime = function(f, m) {
        var w = f.raw().toString();
        if (m === "gentime") var x = w.slice(0, 4) | 0,
            B = w.slice(4, 6) | 0,
            E = w.slice(6, 8) | 0,
            C = w.slice(8, 10) | 0,
            $ = w.slice(10, 12) | 0,
            I = w.slice(12, 14) | 0;
        else if (m === "utctime") {
            var x = w.slice(0, 2) | 0,
                B = w.slice(2, 4) | 0,
                E = w.slice(4, 6) | 0,
                C = w.slice(6, 8) | 0,
                $ = w.slice(8, 10) | 0,
                I = w.slice(10, 12) | 0;
            x < 70 ? x = 2e3 + x : x = 1900 + x
        } else return f.error("Decoding " + m + " time is not supported yet");
        return Date.UTC(x, B - 1, E, C, $, I, 0)
    }, h.prototype._decodeNull = function(f) {
        return null
    }, h.prototype._decodeBool = function(f) {
        var m = f.readUInt8();
        return f.isError(m) ? m : m !== 0
    }, h.prototype._decodeInt = function(f, m) {
        var w = f.raw(),
            x = new n(w);
        return m && (x = m[x.toString(10)] || x), x
    }, h.prototype._use = function(f, m) {
        return typeof f == "function" && (f = f(m)), f._getDecoder("der").tree
    };

    function c(p, f) {
        var m = p.readUInt8(f);
        if (p.isError(m)) return m;
        var w = s.tagClass[m >> 6],
            x = (m & 32) === 0;
        if ((m & 31) === 31) {
            var B = m;
            for (m = 0;
                (B & 128) === 128;) {
                if (B = p.readUInt8(f), p.isError(B)) return B;
                m <<= 7, m |= B & 127
            }
        } else m &= 31;
        var E = s.tag[m];
        return {
            cls: w,
            primitive: x,
            tag: m,
            tagStr: E
        }
    }

    function l(p, f, m) {
        var w = p.readUInt8(m);
        if (p.isError(w)) return w;
        if (!f && w === 128) return null;
        if ((w & 128) === 0) return w;
        var x = w & 127;
        if (x > 4) return p.error("length octect is too long");
        w = 0;
        for (var B = 0; B < x; B++) {
            w <<= 8;
            var E = p.readUInt8(m);
            if (p.isError(E)) return E;
            w |= E
        }
        return w
    }
    return der_1$1
}
var pem$1, hasRequiredPem$1;

function requirePem$1() {
    if (hasRequiredPem$1) return pem$1;
    hasRequiredPem$1 = 1;
    var a = requireInherits_browser(),
        r = requireDist$1().Buffer,
        i = requireDer$1();

    function n(s) {
        i.call(this, s), this.enc = "pem"
    }
    return a(n, i), pem$1 = n, n.prototype.decode = function(e, h) {
        for (var c = e.toString().split(/[\r\n]+/g), l = h.label.toUpperCase(), p = /^-----(BEGIN|END) ([^-]+)-----$/, f = -1, m = -1, w = 0; w < c.length; w++) {
            var x = c[w].match(p);
            if (x !== null && x[2] === l)
                if (f === -1) {
                    if (x[1] !== "BEGIN") break;
                    f = w
                } else {
                    if (x[1] !== "END") break;
                    m = w;
                    break
                }
        }
        if (f === -1 || m === -1) throw new Error("PEM section not found for: " + l);
        var B = c.slice(f + 1, m).join("");
        B.replace(/[^a-z0-9\+\/=]+/gi, "");
        var E = new r(B, "base64");
        return i.prototype.decode.call(this, E, h)
    }, pem$1
}
var hasRequiredDecoders;

function requireDecoders() {
    return hasRequiredDecoders || (hasRequiredDecoders = 1, (function(a) {
        var r = a;
        r.der = requireDer$1(), r.pem = requirePem$1()
    })(decoders)), decoders
}
var encoders = {},
    der_1, hasRequiredDer;

function requireDer() {
    if (hasRequiredDer) return der_1;
    hasRequiredDer = 1;
    var a = requireInherits_browser(),
        r = requireDist$1().Buffer,
        i = requireAsn1$1(),
        n = i.base,
        s = i.constants.der;

    function e(p) {
        this.enc = "der", this.name = p.name, this.entity = p, this.tree = new h, this.tree._init(p.body)
    }
    der_1 = e, e.prototype.encode = function(f, m) {
        return this.tree._encode(f, m).join()
    };

    function h(p) {
        n.Node.call(this, "der", p)
    }
    a(h, n.Node), h.prototype._encodeComposite = function(f, m, w, x) {
        var B = l(f, m, w, this.reporter);
        if (x.length < 128) {
            var $ = new r(2);
            return $[0] = B, $[1] = x.length, this._createEncoderBuffer([$, x])
        }
        for (var E = 1, C = x.length; C >= 256; C >>= 8) E++;
        var $ = new r(2 + E);
        $[0] = B, $[1] = 128 | E;
        for (var C = 1 + E, I = x.length; I > 0; C--, I >>= 8) $[C] = I & 255;
        return this._createEncoderBuffer([$, x])
    }, h.prototype._encodeStr = function(f, m) {
        if (m === "bitstr") return this._createEncoderBuffer([f.unused | 0, f.data]);
        if (m === "bmpstr") {
            for (var w = new r(f.length * 2), x = 0; x < f.length; x++) w.writeUInt16BE(f.charCodeAt(x), x * 2);
            return this._createEncoderBuffer(w)
        } else return m === "numstr" ? this._isNumstr(f) ? this._createEncoderBuffer(f) : this.reporter.error("Encoding of string type: numstr supports only digits and space") : m === "printstr" ? this._isPrintstr(f) ? this._createEncoderBuffer(f) : this.reporter.error("Encoding of string type: printstr supports only latin upper and lower case letters, digits, space, apostrophe, left and rigth parenthesis, plus sign, comma, hyphen, dot, slash, colon, equal sign, question mark") : /str$/.test(m) ? this._createEncoderBuffer(f) : m === "objDesc" ? this._createEncoderBuffer(f) : this.reporter.error("Encoding of string type: " + m + " unsupported")
    }, h.prototype._encodeObjid = function(f, m, w) {
        if (typeof f == "string") {
            if (!m) return this.reporter.error("string objid given, but no values map found");
            if (!m.hasOwnProperty(f)) return this.reporter.error("objid not found in values map");
            f = m[f].split(/[\s\.]+/g);
            for (var x = 0; x < f.length; x++) f[x] |= 0
        } else if (Array.isArray(f)) {
            f = f.slice();
            for (var x = 0; x < f.length; x++) f[x] |= 0
        }
        if (!Array.isArray(f)) return this.reporter.error("objid() should be either array or string, got: " + JSON.stringify(f));
        if (!w) {
            if (f[1] >= 40) return this.reporter.error("Second objid identifier OOB");
            f.splice(0, 2, f[0] * 40 + f[1])
        }
        for (var B = 0, x = 0; x < f.length; x++) {
            var E = f[x];
            for (B++; E >= 128; E >>= 7) B++
        }
        for (var C = new r(B), $ = C.length - 1, x = f.length - 1; x >= 0; x--) {
            var E = f[x];
            for (C[$--] = E & 127;
                (E >>= 7) > 0;) C[$--] = 128 | E & 127
        }
        return this._createEncoderBuffer(C)
    };

    function c(p) {
        return p < 10 ? "0" + p : p
    }
    h.prototype._encodeTime = function(f, m) {
        var w, x = new Date(f);
        return m === "gentime" ? w = [c(x.getFullYear()), c(x.getUTCMonth() + 1), c(x.getUTCDate()), c(x.getUTCHours()), c(x.getUTCMinutes()), c(x.getUTCSeconds()), "Z"].join("") : m === "utctime" ? w = [c(x.getFullYear() % 100), c(x.getUTCMonth() + 1), c(x.getUTCDate()), c(x.getUTCHours()), c(x.getUTCMinutes()), c(x.getUTCSeconds()), "Z"].join("") : this.reporter.error("Encoding " + m + " time is not supported yet"), this._encodeStr(w, "octstr")
    }, h.prototype._encodeNull = function() {
        return this._createEncoderBuffer("")
    }, h.prototype._encodeInt = function(f, m) {
        if (typeof f == "string") {
            if (!m) return this.reporter.error("String int or enum given, but no values map");
            if (!m.hasOwnProperty(f)) return this.reporter.error("Values map doesn't contain: " + JSON.stringify(f));
            f = m[f]
        }
        if (typeof f != "number" && !r.isBuffer(f)) {
            var w = f.toArray();
            !f.sign && w[0] & 128 && w.unshift(0), f = new r(w)
        }
        if (r.isBuffer(f)) {
            var x = f.length;
            f.length === 0 && x++;
            var E = new r(x);
            return f.copy(E), f.length === 0 && (E[0] = 0), this._createEncoderBuffer(E)
        }
        if (f < 128) return this._createEncoderBuffer(f);
        if (f < 256) return this._createEncoderBuffer([0, f]);
        for (var x = 1, B = f; B >= 256; B >>= 8) x++;
        for (var E = new Array(x), B = E.length - 1; B >= 0; B--) E[B] = f & 255, f >>= 8;
        return E[0] & 128 && E.unshift(0), this._createEncoderBuffer(new r(E))
    }, h.prototype._encodeBool = function(f) {
        return this._createEncoderBuffer(f ? 255 : 0)
    }, h.prototype._use = function(f, m) {
        return typeof f == "function" && (f = f(m)), f._getEncoder("der").tree
    }, h.prototype._skipDefault = function(f, m, w) {
        var x = this._baseState,
            B;
        if (x.default === null) return !1;
        var E = f.join();
        if (x.defaultBuffer === void 0 && (x.defaultBuffer = this._encodeValue(x.default, m, w).join()), E.length !== x.defaultBuffer.length) return !1;
        for (B = 0; B < E.length; B++)
            if (E[B] !== x.defaultBuffer[B]) return !1;
        return !0
    };

    function l(p, f, m, w) {
        var x;
        if (p === "seqof" ? p = "seq" : p === "setof" && (p = "set"), s.tagByName.hasOwnProperty(p)) x = s.tagByName[p];
        else if (typeof p == "number" && (p | 0) === p) x = p;
        else return w.error("Unknown tag: " + p);
        return x >= 31 ? w.error("Multi-octet tag encoding unsupported") : (f || (x |= 32), x |= s.tagClassByName[m || "universal"] << 6, x)
    }
    return der_1
}
var pem, hasRequiredPem;

function requirePem() {
    if (hasRequiredPem) return pem;
    hasRequiredPem = 1;
    var a = requireInherits_browser(),
        r = requireDer();

    function i(n) {
        r.call(this, n), this.enc = "pem"
    }
    return a(i, r), pem = i, i.prototype.encode = function(s, e) {
        for (var h = r.prototype.encode.call(this, s), c = h.toString("base64"), l = ["-----BEGIN " + e.label + "-----"], p = 0; p < c.length; p += 64) l.push(c.slice(p, p + 64));
        return l.push("-----END " + e.label + "-----"), l.join(`
`)
    }, pem
}
var hasRequiredEncoders;

function requireEncoders() {
    return hasRequiredEncoders || (hasRequiredEncoders = 1, (function(a) {
        var r = a;
        r.der = requireDer(), r.pem = requirePem()
    })(encoders)), encoders
}
var hasRequiredAsn1$1;

function requireAsn1$1() {
    return hasRequiredAsn1$1 || (hasRequiredAsn1$1 = 1, (function(a) {
        var r = a;
        r.bignum = requireBn$2(), r.define = requireApi().define, r.base = requireBase(), r.constants = requireConstants(), r.decoders = requireDecoders(), r.encoders = requireEncoders()
    })(asn1)), asn1
}
var certificate, hasRequiredCertificate;

function requireCertificate() {
    if (hasRequiredCertificate) return certificate;
    hasRequiredCertificate = 1;
    var a = requireAsn1$1(),
        r = a.define("Time", function() {
            this.choice({
                utcTime: this.utctime(),
                generalTime: this.gentime()
            })
        }),
        i = a.define("AttributeTypeValue", function() {
            this.seq().obj(this.key("type").objid(), this.key("value").any())
        }),
        n = a.define("AlgorithmIdentifier", function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("parameters").optional(), this.key("curve").objid().optional())
        }),
        s = a.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(n), this.key("subjectPublicKey").bitstr())
        }),
        e = a.define("RelativeDistinguishedName", function() {
            this.setof(i)
        }),
        h = a.define("RDNSequence", function() {
            this.seqof(e)
        }),
        c = a.define("Name", function() {
            this.choice({
                rdnSequence: this.use(h)
            })
        }),
        l = a.define("Validity", function() {
            this.seq().obj(this.key("notBefore").use(r), this.key("notAfter").use(r))
        }),
        p = a.define("Extension", function() {
            this.seq().obj(this.key("extnID").objid(), this.key("critical").bool().def(!1), this.key("extnValue").octstr())
        }),
        f = a.define("TBSCertificate", function() {
            this.seq().obj(this.key("version").explicit(0).int().optional(), this.key("serialNumber").int(), this.key("signature").use(n), this.key("issuer").use(c), this.key("validity").use(l), this.key("subject").use(c), this.key("subjectPublicKeyInfo").use(s), this.key("issuerUniqueID").implicit(1).bitstr().optional(), this.key("subjectUniqueID").implicit(2).bitstr().optional(), this.key("extensions").explicit(3).seqof(p).optional())
        }),
        m = a.define("X509Certificate", function() {
            this.seq().obj(this.key("tbsCertificate").use(f), this.key("signatureAlgorithm").use(n), this.key("signatureValue").bitstr())
        });
    return certificate = m, certificate
}
var hasRequiredAsn1;

function requireAsn1() {
    if (hasRequiredAsn1) return asn1$1;
    hasRequiredAsn1 = 1;
    var a = requireAsn1$1();
    asn1$1.certificate = requireCertificate();
    var r = a.define("RSAPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("modulus").int(), this.key("publicExponent").int(), this.key("privateExponent").int(), this.key("prime1").int(), this.key("prime2").int(), this.key("exponent1").int(), this.key("exponent2").int(), this.key("coefficient").int())
    });
    asn1$1.RSAPrivateKey = r;
    var i = a.define("RSAPublicKey", function() {
        this.seq().obj(this.key("modulus").int(), this.key("publicExponent").int())
    });
    asn1$1.RSAPublicKey = i;
    var n = a.define("AlgorithmIdentifier", function() {
            this.seq().obj(this.key("algorithm").objid(), this.key("none").null_().optional(), this.key("curve").objid().optional(), this.key("params").seq().obj(this.key("p").int(), this.key("q").int(), this.key("g").int()).optional())
        }),
        s = a.define("SubjectPublicKeyInfo", function() {
            this.seq().obj(this.key("algorithm").use(n), this.key("subjectPublicKey").bitstr())
        });
    asn1$1.PublicKey = s;
    var e = a.define("PrivateKeyInfo", function() {
        this.seq().obj(this.key("version").int(), this.key("algorithm").use(n), this.key("subjectPrivateKey").octstr())
    });
    asn1$1.PrivateKey = e;
    var h = a.define("EncryptedPrivateKeyInfo", function() {
        this.seq().obj(this.key("algorithm").seq().obj(this.key("id").objid(), this.key("decrypt").seq().obj(this.key("kde").seq().obj(this.key("id").objid(), this.key("kdeparams").seq().obj(this.key("salt").octstr(), this.key("iters").int())), this.key("cipher").seq().obj(this.key("algo").objid(), this.key("iv").octstr()))), this.key("subjectPrivateKey").octstr())
    });
    asn1$1.EncryptedPrivateKey = h;
    var c = a.define("DSAPrivateKey", function() {
        this.seq().obj(this.key("version").int(), this.key("p").int(), this.key("q").int(), this.key("g").int(), this.key("pub_key").int(), this.key("priv_key").int())
    });
    asn1$1.DSAPrivateKey = c, asn1$1.DSAparam = a.define("DSAparam", function() {
        this.int()
    });
    var l = a.define("ECParameters", function() {
            this.choice({
                namedCurve: this.objid()
            })
        }),
        p = a.define("ECPrivateKey", function() {
            this.seq().obj(this.key("version").int(), this.key("privateKey").octstr(), this.key("parameters").optional().explicit(0).use(l), this.key("publicKey").optional().explicit(1).bitstr())
        });
    return asn1$1.ECPrivateKey = p, asn1$1.signature = a.define("signature", function() {
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
    var a = /Proc-Type: 4,ENCRYPTED[\n\r]+DEK-Info: AES-((?:128)|(?:192)|(?:256))-CBC,([0-9A-H]+)[\n\r]+([0-9A-z\n\r+/=]+)[\n\r]+/m,
        r = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----/m,
        i = /^-----BEGIN ((?:.*? KEY)|CERTIFICATE)-----([0-9A-z\n\r+/=]+)-----END \1-----$/m,
        n = requireEvp_bytestokey(),
        s = requireBrowser$7(),
        e = requireSafeBuffer$2().Buffer;
    return fixProc = function(h, c) {
        var l = h.toString(),
            p = l.match(a),
            f;
        if (p) {
            var w = "aes" + p[1],
                x = e.from(p[2], "hex"),
                B = e.from(p[3].replace(/[\r\n]/g, ""), "base64"),
                E = n(c, x.slice(0, 8), parseInt(p[1], 10)).key,
                C = [],
                $ = s.createDecipheriv(w, E, x);
            C.push($.update(B)), C.push($.final()), f = e.concat(C)
        } else {
            var m = l.match(i);
            f = e.from(m[2].replace(/[\r\n]/g, ""), "base64")
        }
        var I = l.match(r)[1];
        return {
            tag: I,
            data: f
        }
    }, fixProc
}
var parseAsn1, hasRequiredParseAsn1;

function requireParseAsn1() {
    if (hasRequiredParseAsn1) return parseAsn1;
    hasRequiredParseAsn1 = 1;
    var a = requireAsn1(),
        r = require$$1,
        i = requireFixProc(),
        n = requireBrowser$7(),
        s = requireBrowser$8().pbkdf2Sync,
        e = requireSafeBuffer$2().Buffer;

    function h(l, p) {
        var f = l.algorithm.decrypt.kde.kdeparams.salt,
            m = parseInt(l.algorithm.decrypt.kde.kdeparams.iters.toString(), 10),
            w = r[l.algorithm.decrypt.cipher.algo.join(".")],
            x = l.algorithm.decrypt.cipher.iv,
            B = l.subjectPrivateKey,
            E = parseInt(w.split("-")[1], 10) / 8,
            C = s(p, f, m, E, "sha1"),
            $ = n.createDecipheriv(w, C, x),
            I = [];
        return I.push($.update(B)), I.push($.final()), e.concat(I)
    }

    function c(l) {
        var p;
        typeof l == "object" && !e.isBuffer(l) && (p = l.passphrase, l = l.key), typeof l == "string" && (l = e.from(l));
        var f = i(l, p),
            m = f.tag,
            w = f.data,
            x, B;
        switch (m) {
            case "CERTIFICATE":
                B = a.certificate.decode(w, "der").tbsCertificate.subjectPublicKeyInfo;
            case "PUBLIC KEY":
                switch (B || (B = a.PublicKey.decode(w, "der")), x = B.algorithm.algorithm.join("."), x) {
                    case "1.2.840.113549.1.1.1":
                        return a.RSAPublicKey.decode(B.subjectPublicKey.data, "der");
                    case "1.2.840.10045.2.1":
                        return B.subjectPrivateKey = B.subjectPublicKey, {
                            type: "ec",
                            data: B
                        };
                    case "1.2.840.10040.4.1":
                        return B.algorithm.params.pub_key = a.DSAparam.decode(B.subjectPublicKey.data, "der"), {
                            type: "dsa",
                            data: B.algorithm.params
                        };
                    default:
                        throw new Error("unknown key id " + x)
                }
            case "ENCRYPTED PRIVATE KEY":
                w = a.EncryptedPrivateKey.decode(w, "der"), w = h(w, p);
            case "PRIVATE KEY":
                switch (B = a.PrivateKey.decode(w, "der"), x = B.algorithm.algorithm.join("."), x) {
                    case "1.2.840.113549.1.1.1":
                        return a.RSAPrivateKey.decode(B.subjectPrivateKey, "der");
                    case "1.2.840.10045.2.1":
                        return {
                            curve: B.algorithm.curve, privateKey: a.ECPrivateKey.decode(B.subjectPrivateKey, "der").privateKey
                        };
                    case "1.2.840.10040.4.1":
                        return B.algorithm.params.priv_key = a.DSAparam.decode(B.subjectPrivateKey, "der"), {
                            type: "dsa",
                            params: B.algorithm.params
                        };
                    default:
                        throw new Error("unknown key id " + x)
                }
            case "RSA PUBLIC KEY":
                return a.RSAPublicKey.decode(w, "der");
            case "RSA PRIVATE KEY":
                return a.RSAPrivateKey.decode(w, "der");
            case "DSA PRIVATE KEY":
                return {
                    type: "dsa", params: a.DSAPrivateKey.decode(w, "der")
                };
            case "EC PRIVATE KEY":
                return w = a.ECPrivateKey.decode(w, "der"), {
                    curve: w.parameters.value,
                    privateKey: w.privateKey
                };
            default:
                throw new Error("unknown key type " + m)
        }
    }
    return c.signature = a.signature, parseAsn1 = c, parseAsn1
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
    var a = requireSafeBuffer$2().Buffer,
        r = requireBrowser$9(),
        i = requireBrowserifyRsa(),
        n = requireElliptic().ec,
        s = requireBn(),
        e = requireParseAsn1(),
        h = require$$4,
        c = 1;

    function l($, I, D, j, O) {
        var L = e(I);
        if (L.curve) {
            if (j !== "ecdsa" && j !== "ecdsa/rsa") throw new Error("wrong private key type");
            return p($, L)
        } else if (L.type === "dsa") {
            if (j !== "dsa") throw new Error("wrong private key type");
            return f($, L, D)
        }
        if (j !== "rsa" && j !== "ecdsa/rsa") throw new Error("wrong private key type");
        if (I.padding !== void 0 && I.padding !== c) throw new Error("illegal or unsupported padding mode");
        $ = a.concat([O, $]);
        for (var G = L.modulus.byteLength(), V = [0, 1]; $.length + V.length + 1 < G;) V.push(255);
        V.push(0);
        for (var K = -1; ++K < $.length;) V.push($[K]);
        var Q = i(V, L);
        return Q
    }

    function p($, I) {
        var D = h[I.curve.join(".")];
        if (!D) throw new Error("unknown curve " + I.curve.join("."));
        var j = new n(D),
            O = j.keyFromPrivate(I.privateKey),
            L = O.sign($);
        return a.from(L.toDER())
    }

    function f($, I, D) {
        for (var j = I.params.priv_key, O = I.params.p, L = I.params.q, G = I.params.g, V = new s(0), K, Q = x($, L).mod(L), P = !1, q = w(j, L, $, D); P === !1;) K = E(L, q, D), V = C(G, K, O, L), P = K.invm(L).imul(Q.add(j.mul(V))).mod(L), P.cmpn(0) === 0 && (P = !1, V = new s(0));
        return m(V, P)
    }

    function m($, I) {
        $ = $.toArray(), I = I.toArray(), $[0] & 128 && ($ = [0].concat($)), I[0] & 128 && (I = [0].concat(I));
        var D = $.length + I.length + 4,
            j = [48, D, 2, $.length];
        return j = j.concat($, [2, I.length], I), a.from(j)
    }

    function w($, I, D, j) {
        if ($ = a.from($.toArray()), $.length < I.byteLength()) {
            var O = a.alloc(I.byteLength() - $.length);
            $ = a.concat([O, $])
        }
        var L = D.length,
            G = B(D, I),
            V = a.alloc(L);
        V.fill(1);
        var K = a.alloc(L);
        return K = r(j, K).update(V).update(a.from([0])).update($).update(G).digest(), V = r(j, K).update(V).digest(), K = r(j, K).update(V).update(a.from([1])).update($).update(G).digest(), V = r(j, K).update(V).digest(), {
            k: K,
            v: V
        }
    }

    function x($, I) {
        var D = new s($),
            j = ($.length << 3) - I.bitLength();
        return j > 0 && D.ishrn(j), D
    }

    function B($, I) {
        $ = x($, I), $ = $.mod(I);
        var D = a.from($.toArray());
        if (D.length < I.byteLength()) {
            var j = a.alloc(I.byteLength() - D.length);
            D = a.concat([j, D])
        }
        return D
    }

    function E($, I, D) {
        var j, O;
        do {
            for (j = a.alloc(0); j.length * 8 < $.bitLength();) I.v = r(D, I.k).update(I.v).digest(), j = a.concat([j, I.v]);
            O = x(j, $), I.k = r(D, I.k).update(I.v).update(a.from([0])).digest(), I.v = r(D, I.k).update(I.v).digest()
        } while (O.cmp($) !== -1);
        return O
    }

    function C($, I, D, j) {
        return $.toRed(s.mont(D)).redPow(I).fromRed().mod(j)
    }
    return sign.exports = l, sign.exports.getKey = w, sign.exports.makeKey = E, sign.exports
}
var verify_1, hasRequiredVerify;

function requireVerify() {
    if (hasRequiredVerify) return verify_1;
    hasRequiredVerify = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireBn(),
        i = requireElliptic().ec,
        n = requireParseAsn1(),
        s = require$$4;

    function e(p, f, m, w, x) {
        var B = n(m);
        if (B.type === "ec") {
            if (w !== "ecdsa" && w !== "ecdsa/rsa") throw new Error("wrong public key type");
            return h(p, f, B)
        } else if (B.type === "dsa") {
            if (w !== "dsa") throw new Error("wrong public key type");
            return c(p, f, B)
        }
        if (w !== "rsa" && w !== "ecdsa/rsa") throw new Error("wrong public key type");
        f = a.concat([x, f]);
        for (var E = B.modulus.byteLength(), C = [1], $ = 0; f.length + C.length + 2 < E;) C.push(255), $ += 1;
        C.push(0);
        for (var I = -1; ++I < f.length;) C.push(f[I]);
        C = a.from(C);
        var D = r.mont(B.modulus);
        p = new r(p).toRed(D), p = p.redPow(new r(B.publicExponent)), p = a.from(p.fromRed().toArray());
        var j = $ < 8 ? 1 : 0;
        for (E = Math.min(p.length, C.length), p.length !== C.length && (j = 1), I = -1; ++I < E;) j |= p[I] ^ C[I];
        return j === 0
    }

    function h(p, f, m) {
        var w = s[m.data.algorithm.curve.join(".")];
        if (!w) throw new Error("unknown curve " + m.data.algorithm.curve.join("."));
        var x = new i(w),
            B = m.data.subjectPrivateKey.data;
        return x.verify(f, p, B)
    }

    function c(p, f, m) {
        var w = m.data.p,
            x = m.data.q,
            B = m.data.g,
            E = m.data.pub_key,
            C = n.signature.decode(p, "der"),
            $ = C.s,
            I = C.r;
        l($, x), l(I, x);
        var D = r.mont(w),
            j = $.invm(x),
            O = B.toRed(D).redPow(new r(f).mul(j).mod(x)).fromRed().mul(E.toRed(D).redPow(I.mul(j).mod(x)).fromRed()).mod(w).mod(x);
        return O.cmp(I) === 0
    }

    function l(p, f) {
        if (p.cmpn(0) <= 0) throw new Error("invalid sig");
        if (p.cmp(f) >= 0) throw new Error("invalid sig")
    }
    return verify_1 = e, verify_1
}
var browser$4, hasRequiredBrowser$4;

function requireBrowser$4() {
    if (hasRequiredBrowser$4) return browser$4;
    hasRequiredBrowser$4 = 1;
    var a = requireSafeBuffer$2().Buffer,
        r = requireBrowser$a(),
        i = requireReadableBrowser$1(),
        n = requireInherits_browser(),
        s = requireSign(),
        e = requireVerify(),
        h = require$$6;
    Object.keys(h).forEach(function(m) {
        h[m].id = a.from(h[m].id, "hex"), h[m.toLowerCase()] = h[m]
    });

    function c(m) {
        i.Writable.call(this);
        var w = h[m];
        if (!w) throw new Error("Unknown message digest");
        this._hashType = w.hash, this._hash = r(w.hash), this._tag = w.id, this._signType = w.sign
    }
    n(c, i.Writable), c.prototype._write = function(w, x, B) {
        this._hash.update(w), B()
    }, c.prototype.update = function(w, x) {
        return this._hash.update(typeof w == "string" ? a.from(w, x) : w), this
    }, c.prototype.sign = function(w, x) {
        this.end();
        var B = this._hash.digest(),
            E = s(B, w, this._hashType, this._signType, this._tag);
        return x ? E.toString(x) : E
    };

    function l(m) {
        i.Writable.call(this);
        var w = h[m];
        if (!w) throw new Error("Unknown message digest");
        this._hash = r(w.hash), this._tag = w.id, this._signType = w.sign
    }
    n(l, i.Writable), l.prototype._write = function(w, x, B) {
        this._hash.update(w), B()
    }, l.prototype.update = function(w, x) {
        return this._hash.update(typeof w == "string" ? a.from(w, x) : w), this
    }, l.prototype.verify = function(w, x, B) {
        var E = typeof x == "string" ? a.from(x, B) : x;
        this.end();
        var C = this._hash.digest();
        return e(E, C, w, this._signType, this._tag)
    };

    function p(m) {
        return new c(m)
    }

    function f(m) {
        return new l(m)
    }
    return browser$4 = {
        Sign: p,
        Verify: f,
        createSign: p,
        createVerify: f
    }, browser$4
}
var browser$3, hasRequiredBrowser$3;

function requireBrowser$3() {
    if (hasRequiredBrowser$3) return browser$3;
    hasRequiredBrowser$3 = 1;
    var a = requireElliptic(),
        r = requireBn$2();
    browser$3 = function(h) {
        return new n(h)
    };
    var i = {
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
    i.p224 = i.secp224r1, i.p256 = i.secp256r1 = i.prime256v1, i.p192 = i.secp192r1 = i.prime192v1, i.p384 = i.secp384r1, i.p521 = i.secp521r1;

    function n(e) {
        this.curveType = i[e], this.curveType || (this.curveType = {
            name: e
        }), this.curve = new a.ec(this.curveType.name), this.keys = void 0
    }
    n.prototype.generateKeys = function(e, h) {
        return this.keys = this.curve.genKeyPair(), this.getPublicKey(e, h)
    }, n.prototype.computeSecret = function(e, h, c) {
        h = h || "utf8", Buffer.isBuffer(e) || (e = new Buffer(e, h));
        var l = this.curve.keyFromPublic(e).getPublic(),
            p = l.mul(this.keys.getPrivate()).getX();
        return s(p, c, this.curveType.byteLength)
    }, n.prototype.getPublicKey = function(e, h) {
        var c = this.keys.getPublic(h === "compressed", !0);
        return h === "hybrid" && (c[c.length - 1] % 2 ? c[0] = 7 : c[0] = 6), s(c, e)
    }, n.prototype.getPrivateKey = function(e) {
        return s(this.keys.getPrivate(), e)
    }, n.prototype.setPublicKey = function(e, h) {
        return h = h || "utf8", Buffer.isBuffer(e) || (e = new Buffer(e, h)), this.keys._importPublic(e), this
    }, n.prototype.setPrivateKey = function(e, h) {
        h = h || "utf8", Buffer.isBuffer(e) || (e = new Buffer(e, h));
        var c = new r(e);
        return c = c.toString(16), this.keys = this.curve.genKeyPair(), this.keys._importPrivate(c), this
    };

    function s(e, h, c) {
        Array.isArray(e) || (e = e.toArray());
        var l = new Buffer(e);
        if (c && l.length < c) {
            var p = new Buffer(c - l.length);
            p.fill(0), l = Buffer.concat([p, l])
        }
        return h ? l.toString(h) : l
    }
    return browser$3
}
var browser$2 = {},
    mgf, hasRequiredMgf;

function requireMgf() {
    if (hasRequiredMgf) return mgf;
    hasRequiredMgf = 1;
    var a = requireBrowser$a(),
        r = requireSafeBuffer$2().Buffer;
    mgf = function(n, s) {
        for (var e = r.alloc(0), h = 0, c; e.length < s;) c = i(h++), e = r.concat([e, a("sha1").update(n).update(c).digest()]);
        return e.slice(0, s)
    };

    function i(n) {
        var s = r.allocUnsafe(4);
        return s.writeUInt32BE(n, 0), s
    }
    return mgf
}
var xor$1, hasRequiredXor;

function requireXor() {
    return hasRequiredXor || (hasRequiredXor = 1, xor$1 = function(r, i) {
        for (var n = r.length, s = -1; ++s < n;) r[s] ^= i[s];
        return r
    }), xor$1
}
var withPublic_1, hasRequiredWithPublic;

function requireWithPublic() {
    if (hasRequiredWithPublic) return withPublic_1;
    hasRequiredWithPublic = 1;
    var a = requireBn$2(),
        r = requireSafeBuffer$2().Buffer;

    function i(n, s) {
        return r.from(n.toRed(a.mont(s.modulus)).redPow(new a(s.publicExponent)).fromRed().toArray())
    }
    return withPublic_1 = i, withPublic_1
}
var publicEncrypt, hasRequiredPublicEncrypt;

function requirePublicEncrypt() {
    if (hasRequiredPublicEncrypt) return publicEncrypt;
    hasRequiredPublicEncrypt = 1;
    var a = requireParseAsn1(),
        r = requireBrowser$b(),
        i = requireBrowser$a(),
        n = requireMgf(),
        s = requireXor(),
        e = requireBn$2(),
        h = requireWithPublic(),
        c = requireBrowserifyRsa(),
        l = requireSafeBuffer$2().Buffer;
    publicEncrypt = function(x, B, E) {
        var C;
        x.padding ? C = x.padding : E ? C = 1 : C = 4;
        var $ = a(x),
            I;
        if (C === 4) I = p($, B);
        else if (C === 1) I = f($, B, E);
        else if (C === 3) {
            if (I = new e(B), I.cmp($.modulus) >= 0) throw new Error("data too long for modulus")
        } else throw new Error("unknown padding");
        return E ? c(I, $) : h(I, $)
    };

    function p(w, x) {
        var B = w.modulus.byteLength(),
            E = x.length,
            C = i("sha1").update(l.alloc(0)).digest(),
            $ = C.length,
            I = 2 * $;
        if (E > B - I - 2) throw new Error("message too long");
        var D = l.alloc(B - E - I - 2),
            j = B - $ - 1,
            O = r($),
            L = s(l.concat([C, D, l.alloc(1, 1), x], j), n(O, j)),
            G = s(O, n(L, $));
        return new e(l.concat([l.alloc(1), G, L], B))
    }

    function f(w, x, B) {
        var E = x.length,
            C = w.modulus.byteLength();
        if (E > C - 11) throw new Error("message too long");
        var $;
        return B ? $ = l.alloc(C - E - 3, 255) : $ = m(C - E - 3), new e(l.concat([l.from([0, B ? 1 : 2]), $, l.alloc(1), x], C))
    }

    function m(w) {
        for (var x = l.allocUnsafe(w), B = 0, E = r(w * 2), C = 0, $; B < w;) C === E.length && (E = r(w * 2), C = 0), $ = E[C++], $ && (x[B++] = $);
        return x
    }
    return publicEncrypt
}
var privateDecrypt, hasRequiredPrivateDecrypt;

function requirePrivateDecrypt() {
    if (hasRequiredPrivateDecrypt) return privateDecrypt;
    hasRequiredPrivateDecrypt = 1;
    var a = requireParseAsn1(),
        r = requireMgf(),
        i = requireXor(),
        n = requireBn$2(),
        s = requireBrowserifyRsa(),
        e = requireBrowser$a(),
        h = requireWithPublic(),
        c = requireSafeBuffer$2().Buffer;
    privateDecrypt = function(w, x, B) {
        var E;
        w.padding ? E = w.padding : B ? E = 1 : E = 4;
        var C = a(w),
            $ = C.modulus.byteLength();
        if (x.length > $ || new n(x).cmp(C.modulus) >= 0) throw new Error("decryption error");
        var I;
        B ? I = h(new n(x), C) : I = s(x, C);
        var D = c.alloc($ - I.length);
        if (I = c.concat([D, I], $), E === 4) return l(C, I);
        if (E === 1) return p(C, I, B);
        if (E === 3) return I;
        throw new Error("unknown padding")
    };

    function l(m, w) {
        var x = m.modulus.byteLength(),
            B = e("sha1").update(c.alloc(0)).digest(),
            E = B.length;
        if (w[0] !== 0) throw new Error("decryption error");
        var C = w.slice(1, E + 1),
            $ = w.slice(E + 1),
            I = i(C, r($, E)),
            D = i($, r(I, x - E - 1));
        if (f(B, D.slice(0, E))) throw new Error("decryption error");
        for (var j = E; D[j] === 0;) j++;
        if (D[j++] !== 1) throw new Error("decryption error");
        return D.slice(j)
    }

    function p(m, w, x) {
        for (var B = w.slice(0, 2), E = 2, C = 0; w[E++] !== 0;)
            if (E >= w.length) {
                C++;
                break
            } var $ = w.slice(2, E - 1);
        if ((B.toString("hex") !== "0002" && !x || B.toString("hex") !== "0001" && x) && C++, $.length < 8 && C++, C) throw new Error("decryption error");
        return w.slice(E)
    }

    function f(m, w) {
        m = c.from(m), w = c.from(w);
        var x = 0,
            B = m.length;
        m.length !== w.length && (x++, B = Math.min(m.length, w.length));
        for (var E = -1; ++E < B;) x += m[E] ^ w[E];
        return x
    }
    return privateDecrypt
}
var hasRequiredBrowser$2;

function requireBrowser$2() {
    return hasRequiredBrowser$2 || (hasRequiredBrowser$2 = 1, (function(a) {
        a.publicEncrypt = requirePublicEncrypt(), a.privateDecrypt = requirePrivateDecrypt(), a.privateEncrypt = function(i, n) {
            return a.publicEncrypt(i, n, !0)
        }, a.publicDecrypt = function(i, n) {
            return a.privateDecrypt(i, n, !0)
        }
    })(browser$2)), browser$2
}
var browser$1 = {},
    hasRequiredBrowser$1;

function requireBrowser$1() {
    if (hasRequiredBrowser$1) return browser$1;
    hasRequiredBrowser$1 = 1;

    function a() {
        throw new Error(`secure random number generation not supported by this browser
use chrome, FireFox or Internet Explorer 11`)
    }
    var r = requireSafeBuffer$2(),
        i = requireBrowser$b(),
        n = r.Buffer,
        s = r.kMaxLength,
        e = commonjsGlobal.crypto || commonjsGlobal.msCrypto,
        h = Math.pow(2, 32) - 1;

    function c(w, x) {
        if (typeof w != "number" || w !== w) throw new TypeError("offset must be a number");
        if (w > h || w < 0) throw new TypeError("offset must be a uint32");
        if (w > s || w > x) throw new RangeError("offset out of range")
    }

    function l(w, x, B) {
        if (typeof w != "number" || w !== w) throw new TypeError("size must be a number");
        if (w > h || w < 0) throw new TypeError("size must be a uint32");
        if (w + x > B || w > s) throw new RangeError("buffer too small")
    }
    e && e.getRandomValues || !process$1.browser ? (browser$1.randomFill = p, browser$1.randomFillSync = m) : (browser$1.randomFill = a, browser$1.randomFillSync = a);

    function p(w, x, B, E) {
        if (!n.isBuffer(w) && !(w instanceof commonjsGlobal.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
        if (typeof x == "function") E = x, x = 0, B = w.length;
        else if (typeof B == "function") E = B, B = w.length - x;
        else if (typeof E != "function") throw new TypeError('"cb" argument must be a function');
        return c(x, w.length), l(B, x, w.length), f(w, x, B, E)
    }

    function f(w, x, B, E) {
        if (process$1.browser) {
            var C = w.buffer,
                $ = new Uint8Array(C, x, B);
            if (e.getRandomValues($), E) {
                process$1.nextTick(function() {
                    E(null, w)
                });
                return
            }
            return w
        }
        if (E) {
            i(B, function(D, j) {
                if (D) return E(D);
                j.copy(w, x), E(null, w)
            });
            return
        }
        var I = i(B);
        return I.copy(w, x), w
    }

    function m(w, x, B) {
        if (typeof x > "u" && (x = 0), !n.isBuffer(w) && !(w instanceof commonjsGlobal.Uint8Array)) throw new TypeError('"buf" argument must be a Buffer or Uint8Array');
        return c(x, w.length), B === void 0 && (B = w.length - x), l(B, x, w.length), f(w, x, B)
    }
    return browser$1
}
var hasRequiredCryptoBrowserify;

function requireCryptoBrowserify() {
    if (hasRequiredCryptoBrowserify) return cryptoBrowserify;
    hasRequiredCryptoBrowserify = 1, cryptoBrowserify.randomBytes = cryptoBrowserify.rng = cryptoBrowserify.pseudoRandomBytes = cryptoBrowserify.prng = requireBrowser$b(), cryptoBrowserify.createHash = cryptoBrowserify.Hash = requireBrowser$a(), cryptoBrowserify.createHmac = cryptoBrowserify.Hmac = requireBrowser$9();
    var a = requireAlgos(),
        r = Object.keys(a),
        i = ["sha1", "sha224", "sha256", "sha384", "sha512", "md5", "rmd160"].concat(r);
    cryptoBrowserify.getHashes = function() {
        return i
    };
    var n = requireBrowser$8();
    cryptoBrowserify.pbkdf2 = n.pbkdf2, cryptoBrowserify.pbkdf2Sync = n.pbkdf2Sync;
    var s = requireBrowser$6();
    cryptoBrowserify.Cipher = s.Cipher, cryptoBrowserify.createCipher = s.createCipher, cryptoBrowserify.Cipheriv = s.Cipheriv, cryptoBrowserify.createCipheriv = s.createCipheriv, cryptoBrowserify.Decipher = s.Decipher, cryptoBrowserify.createDecipher = s.createDecipher, cryptoBrowserify.Decipheriv = s.Decipheriv, cryptoBrowserify.createDecipheriv = s.createDecipheriv, cryptoBrowserify.getCiphers = s.getCiphers, cryptoBrowserify.listCiphers = s.listCiphers;
    var e = requireBrowser$5();
    cryptoBrowserify.DiffieHellmanGroup = e.DiffieHellmanGroup, cryptoBrowserify.createDiffieHellmanGroup = e.createDiffieHellmanGroup, cryptoBrowserify.getDiffieHellman = e.getDiffieHellman, cryptoBrowserify.createDiffieHellman = e.createDiffieHellman, cryptoBrowserify.DiffieHellman = e.DiffieHellman;
    var h = requireBrowser$4();
    cryptoBrowserify.createSign = h.createSign, cryptoBrowserify.Sign = h.Sign, cryptoBrowserify.createVerify = h.createVerify, cryptoBrowserify.Verify = h.Verify, cryptoBrowserify.createECDH = requireBrowser$3();
    var c = requireBrowser$2();
    cryptoBrowserify.publicEncrypt = c.publicEncrypt, cryptoBrowserify.privateEncrypt = c.privateEncrypt, cryptoBrowserify.publicDecrypt = c.publicDecrypt, cryptoBrowserify.privateDecrypt = c.privateDecrypt;
    var l = requireBrowser$1();
    return cryptoBrowserify.randomFill = l.randomFill, cryptoBrowserify.randomFillSync = l.randomFillSync, cryptoBrowserify.createCredentials = function() {
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
    var a = requireCryptoBrowserify(),
        r = (function() {
            function i(n) {
                var s = this;
                this.deriveKey = function(e, h) {
                    var c = Object.assign({}, i.defaultDeriveKeyOpts, h),
                        l = c.salt,
                        p = c.iterations,
                        f = c.digest;
                    return a.pbkdf2Sync(e, l, p, 32, f)
                }, this.encryptString = function(e, h) {
                    var c = s.deriveKey(h, s._deriveKeyOptions),
                        l = a.randomBytes(16),
                        p = a.createCipheriv("aes-256-gcm", c, l),
                        f = p.update(e.toString(), "utf8", "base64");
                    f += p.final("base64");
                    var m = Buffer.from(f).toString("hex");
                    return l.toString("hex") + ":" + m
                }, this.decryptString = function(e, h) {
                    var c = s.deriveKey(h, s._deriveKeyOptions),
                        l = e.toString().split(":");
                    if (l.length !== 2) throw new Error("Incorrect format for encrypted string: " + e);
                    var p = l[0],
                        f = l[1],
                        m = Buffer.from(p, "hex"),
                        w = Buffer.from(f, "hex").toString();
                    return a.createDecipheriv("aes-256-gcm", c, m).update(w, "base64").toString()
                }, n && (this._deriveKeyOptions = n)
            }
            return i.defaultDeriveKeyOpts = {
                salt: "s41t",
                iterations: 1,
                digest: "sha512"
            }, i
        })();
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

function _isPlaceholder(a) {
    return a != null && typeof a == "object" && a["@@functional/placeholder"] === !0
}

function _curry1(a) {
    return function r(i) {
        return arguments.length === 0 || _isPlaceholder(i) ? r : a.apply(this, arguments)
    }
}

function _curry2(a) {
    return function r(i, n) {
        switch (arguments.length) {
            case 0:
                return r;
            case 1:
                return _isPlaceholder(i) ? r : _curry1(function(s) {
                    return a(i, s)
                });
            default:
                return _isPlaceholder(i) && _isPlaceholder(n) ? r : _isPlaceholder(i) ? _curry1(function(s) {
                    return a(s, n)
                }) : _isPlaceholder(n) ? _curry1(function(s) {
                    return a(i, s)
                }) : a(i, n)
        }
    }
}
var add = _curry2(function a(r, i) {
    return Number(r) + Number(i)
});

function _concat(a, r) {
    a = a || [], r = r || [];
    var i, n = a.length,
        s = r.length,
        e = [];
    for (i = 0; i < n;) e[e.length] = a[i], i += 1;
    for (i = 0; i < s;) e[e.length] = r[i], i += 1;
    return e
}

function _arity(a, r) {
    switch (a) {
        case 0:
            return function() {
                return r.apply(this, arguments)
            };
        case 1:
            return function(i) {
                return r.apply(this, arguments)
            };
        case 2:
            return function(i, n) {
                return r.apply(this, arguments)
            };
        case 3:
            return function(i, n, s) {
                return r.apply(this, arguments)
            };
        case 4:
            return function(i, n, s, e) {
                return r.apply(this, arguments)
            };
        case 5:
            return function(i, n, s, e, h) {
                return r.apply(this, arguments)
            };
        case 6:
            return function(i, n, s, e, h, c) {
                return r.apply(this, arguments)
            };
        case 7:
            return function(i, n, s, e, h, c, l) {
                return r.apply(this, arguments)
            };
        case 8:
            return function(i, n, s, e, h, c, l, p) {
                return r.apply(this, arguments)
            };
        case 9:
            return function(i, n, s, e, h, c, l, p, f) {
                return r.apply(this, arguments)
            };
        case 10:
            return function(i, n, s, e, h, c, l, p, f, m) {
                return r.apply(this, arguments)
            };
        default:
            throw new Error("First argument to _arity must be a non-negative integer no greater than ten")
    }
}

function _curryN(a, r, i) {
    return function() {
        for (var n = [], s = 0, e = a, h = 0; h < r.length || s < arguments.length;) {
            var c;
            h < r.length && (!_isPlaceholder(r[h]) || s >= arguments.length) ? c = r[h] : (c = arguments[s], s += 1), n[h] = c, _isPlaceholder(c) || (e -= 1), h += 1
        }
        return e <= 0 ? i.apply(this, n) : _arity(e, _curryN(a, n, i))
    }
}
var curryN = _curry2(function a(r, i) {
        return r === 1 ? _curry1(i) : _arity(r, _curryN(r, [], i))
    }),
    addIndex = _curry1(function a(r) {
        return curryN(r.length, function() {
            var i = 0,
                n = arguments[0],
                s = arguments[arguments.length - 1],
                e = Array.prototype.slice.call(arguments, 0);
            return e[0] = function() {
                var h = n.apply(this, _concat(arguments, [i, s]));
                return i += 1, h
            }, r.apply(this, e)
        })
    });

function _curry3(a) {
    return function r(i, n, s) {
        switch (arguments.length) {
            case 0:
                return r;
            case 1:
                return _isPlaceholder(i) ? r : _curry2(function(e, h) {
                    return a(i, e, h)
                });
            case 2:
                return _isPlaceholder(i) && _isPlaceholder(n) ? r : _isPlaceholder(i) ? _curry2(function(e, h) {
                    return a(e, n, h)
                }) : _isPlaceholder(n) ? _curry2(function(e, h) {
                    return a(i, e, h)
                }) : _curry1(function(e) {
                    return a(i, n, e)
                });
            default:
                return _isPlaceholder(i) && _isPlaceholder(n) && _isPlaceholder(s) ? r : _isPlaceholder(i) && _isPlaceholder(n) ? _curry2(function(e, h) {
                    return a(e, h, s)
                }) : _isPlaceholder(i) && _isPlaceholder(s) ? _curry2(function(e, h) {
                    return a(e, n, h)
                }) : _isPlaceholder(n) && _isPlaceholder(s) ? _curry2(function(e, h) {
                    return a(i, e, h)
                }) : _isPlaceholder(i) ? _curry1(function(e) {
                    return a(e, n, s)
                }) : _isPlaceholder(n) ? _curry1(function(e) {
                    return a(i, e, s)
                }) : _isPlaceholder(s) ? _curry1(function(e) {
                    return a(i, n, e)
                }) : a(i, n, s)
        }
    }
}
var adjust = _curry3(function a(r, i, n) {
    if (r >= n.length || r < -n.length) return n;
    var s = r < 0 ? n.length : 0,
        e = s + r,
        h = _concat(n);
    return h[e] = i(n[e]), h
});
const _isArray = Array.isArray || function a(r) {
    return r != null && r.length >= 0 && Object.prototype.toString.call(r) === "[object Array]"
};

function _isTransformer(a) {
    return a != null && typeof a["@@transducer/step"] == "function"
}

function _dispatchable(a, r, i) {
    return function() {
        if (arguments.length === 0) return i();
        var n = Array.prototype.slice.call(arguments, 0),
            s = n.pop();
        if (!_isArray(s)) {
            for (var e = 0; e < a.length;) {
                if (typeof s[a[e]] == "function") return s[a[e]].apply(s, n);
                e += 1
            }
            if (_isTransformer(s)) {
                var h = r.apply(null, n);
                return h(s)
            }
        }
        return i.apply(this, arguments)
    }
}

function _reduced(a) {
    return a && a["@@transducer/reduced"] ? a : {
        "@@transducer/value": a,
        "@@transducer/reduced": !0
    }
}
const _xfBase = {
    init: function() {
        return this.xf["@@transducer/init"]()
    },
    result: function(a) {
        return this.xf["@@transducer/result"](a)
    }
};
var XAll = (function() {
        function a(r, i) {
            this.xf = i, this.f = r, this.all = !0
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            return this.all && (r = this.xf["@@transducer/step"](r, !0)), this.xf["@@transducer/result"](r)
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.f(i) || (this.all = !1, r = _reduced(this.xf["@@transducer/step"](r, !1))), r
        }, a
    })(),
    _xall = _curry2(function a(r, i) {
        return new XAll(r, i)
    }),
    all = _curry2(_dispatchable(["all"], _xall, function a(r, i) {
        for (var n = 0; n < i.length;) {
            if (!r(i[n])) return !1;
            n += 1
        }
        return !0
    })),
    max = _curry2(function a(r, i) {
        return i > r ? i : r
    });

function _map(a, r) {
    for (var i = 0, n = r.length, s = Array(n); i < n;) s[i] = a(r[i]), i += 1;
    return s
}

function _isString(a) {
    return Object.prototype.toString.call(a) === "[object String]"
}
var _isArrayLike = _curry1(function a(r) {
        return _isArray(r) ? !0 : !r || typeof r != "object" || _isString(r) ? !1 : r.nodeType === 1 ? !!r.length : r.length === 0 ? !0 : r.length > 0 ? r.hasOwnProperty(0) && r.hasOwnProperty(r.length - 1) : !1
    }),
    XWrap = (function() {
        function a(r) {
            this.f = r
        }
        return a.prototype["@@transducer/init"] = function() {
            throw new Error("init not implemented on XWrap")
        }, a.prototype["@@transducer/result"] = function(r) {
            return r
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.f(r, i)
        }, a
    })();

function _xwrap(a) {
    return new XWrap(a)
}
var bind = _curry2(function a(r, i) {
    return _arity(r.length, function() {
        return r.apply(i, arguments)
    })
});

function _arrayReduce(a, r, i) {
    for (var n = 0, s = i.length; n < s;) {
        if (r = a["@@transducer/step"](r, i[n]), r && r["@@transducer/reduced"]) {
            r = r["@@transducer/value"];
            break
        }
        n += 1
    }
    return a["@@transducer/result"](r)
}

function _iterableReduce(a, r, i) {
    for (var n = i.next(); !n.done;) {
        if (r = a["@@transducer/step"](r, n.value), r && r["@@transducer/reduced"]) {
            r = r["@@transducer/value"];
            break
        }
        n = i.next()
    }
    return a["@@transducer/result"](r)
}

function _methodReduce(a, r, i, n) {
    return a["@@transducer/result"](i[n](bind(a["@@transducer/step"], a), r))
}
var symIterator = typeof Symbol < "u" ? Symbol.iterator : "@@iterator";

function _reduce(a, r, i) {
    if (typeof a == "function" && (a = _xwrap(a)), _isArrayLike(i)) return _arrayReduce(a, r, i);
    if (typeof i["fantasy-land/reduce"] == "function") return _methodReduce(a, r, i, "fantasy-land/reduce");
    if (i[symIterator] != null) return _iterableReduce(a, r, i[symIterator]());
    if (typeof i.next == "function") return _iterableReduce(a, r, i);
    if (typeof i.reduce == "function") return _methodReduce(a, r, i, "reduce");
    throw new TypeError("reduce: list must be array or iterable")
}
var XMap = (function() {
        function a(r, i) {
            this.xf = i, this.f = r
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = _xfBase.result, a.prototype["@@transducer/step"] = function(r, i) {
            return this.xf["@@transducer/step"](r, this.f(i))
        }, a
    })(),
    _xmap = _curry2(function a(r, i) {
        return new XMap(r, i)
    });

function _has(a, r) {
    return Object.prototype.hasOwnProperty.call(r, a)
}
var toString$1 = Object.prototype.toString,
    _isArguments = (function() {
        return toString$1.call(arguments) === "[object Arguments]" ? function(r) {
            return toString$1.call(r) === "[object Arguments]"
        } : function(r) {
            return _has("callee", r)
        }
    })(),
    hasEnumBug = !{
        toString: null
    }.propertyIsEnumerable("toString"),
    nonEnumerableProps = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"],
    hasArgsEnumBug = (function() {
        return arguments.propertyIsEnumerable("length")
    })(),
    contains$1 = function a(r, i) {
        for (var n = 0; n < r.length;) {
            if (r[n] === i) return !0;
            n += 1
        }
        return !1
    },
    keys = _curry1(typeof Object.keys == "function" && !hasArgsEnumBug ? function a(r) {
        return Object(r) !== r ? [] : Object.keys(r)
    } : function a(r) {
        if (Object(r) !== r) return [];
        var i, n, s = [],
            e = hasArgsEnumBug && _isArguments(r);
        for (i in r) _has(i, r) && (!e || i !== "length") && (s[s.length] = i);
        if (hasEnumBug)
            for (n = nonEnumerableProps.length - 1; n >= 0;) i = nonEnumerableProps[n], _has(i, r) && !contains$1(s, i) && (s[s.length] = i), n -= 1;
        return s
    }),
    map = _curry2(_dispatchable(["fantasy-land/map", "map"], _xmap, function a(r, i) {
        switch (Object.prototype.toString.call(i)) {
            case "[object Function]":
                return curryN(i.length, function() {
                    return r.call(this, i.apply(this, arguments))
                });
            case "[object Object]":
                return _reduce(function(n, s) {
                    return n[s] = r(i[s]), n
                }, {}, keys(i));
            default:
                return _map(r, i)
        }
    }));
const _isInteger = Number.isInteger || function a(r) {
    return r << 0 === r
};
var nth = _curry2(function a(r, i) {
        var n = r < 0 ? i.length + r : r;
        return _isString(i) ? i.charAt(n) : i[n]
    }),
    paths = _curry2(function a(r, i) {
        return r.map(function(n) {
            for (var s = i, e = 0, h; e < n.length;) {
                if (s == null) return;
                h = n[e], s = _isInteger(h) ? nth(h, s) : s[h], e += 1
            }
            return s
        })
    }),
    path = _curry2(function a(r, i) {
        return paths([r], i)[0]
    }),
    prop = _curry2(function a(r, i) {
        return path([r], i)
    }),
    pluck = _curry2(function a(r, i) {
        return map(prop(r), i)
    }),
    reduce = _curry3(_reduce),
    allPass = _curry1(function a(r) {
        return curryN(reduce(max, 0, pluck("length", r)), function() {
            for (var i = 0, n = r.length; i < n;) {
                if (!r[i].apply(this, arguments)) return !1;
                i += 1
            }
            return !0
        })
    }),
    always = _curry1(function a(r) {
        return function() {
            return r
        }
    }),
    and = _curry2(function a(r, i) {
        return r && i
    }),
    XAny = (function() {
        function a(r, i) {
            this.xf = i, this.f = r, this.any = !1
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            return this.any || (r = this.xf["@@transducer/step"](r, !1)), this.xf["@@transducer/result"](r)
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.f(i) && (this.any = !0, r = _reduced(this.xf["@@transducer/step"](r, !0))), r
        }, a
    })(),
    _xany = _curry2(function a(r, i) {
        return new XAny(r, i)
    }),
    any = _curry2(_dispatchable(["any"], _xany, function a(r, i) {
        for (var n = 0; n < i.length;) {
            if (r(i[n])) return !0;
            n += 1
        }
        return !1
    })),
    anyPass = _curry1(function a(r) {
        return curryN(reduce(max, 0, pluck("length", r)), function() {
            for (var i = 0, n = r.length; i < n;) {
                if (r[i].apply(this, arguments)) return !0;
                i += 1
            }
            return !1
        })
    }),
    ap = _curry2(function a(r, i) {
        return typeof i["fantasy-land/ap"] == "function" ? i["fantasy-land/ap"](r) : typeof r.ap == "function" ? r.ap(i) : typeof r == "function" ? function(n) {
            return r(n)(i(n))
        } : _reduce(function(n, s) {
            return _concat(n, map(s, i))
        }, [], r)
    });

function _aperture(a, r) {
    for (var i = 0, n = r.length - (a - 1), s = new Array(n >= 0 ? n : 0); i < n;) s[i] = Array.prototype.slice.call(r, i, i + a), i += 1;
    return s
}
var XAperture = (function() {
        function a(r, i) {
            this.xf = i, this.pos = 0, this.full = !1, this.acc = new Array(r)
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            return this.acc = null, this.xf["@@transducer/result"](r)
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.store(i), this.full ? this.xf["@@transducer/step"](r, this.getCopy()) : r
        }, a.prototype.store = function(r) {
            this.acc[this.pos] = r, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
        }, a.prototype.getCopy = function() {
            return _concat(Array.prototype.slice.call(this.acc, this.pos), Array.prototype.slice.call(this.acc, 0, this.pos))
        }, a
    })(),
    _xaperture = _curry2(function a(r, i) {
        return new XAperture(r, i)
    }),
    aperture = _curry2(_dispatchable([], _xaperture, _aperture)),
    append = _curry2(function a(r, i) {
        return _concat(i, [r])
    }),
    apply = _curry2(function a(r, i) {
        return r.apply(this, i)
    }),
    values = _curry1(function a(r) {
        for (var i = keys(r), n = i.length, s = [], e = 0; e < n;) s[e] = r[i[e]], e += 1;
        return s
    });

function mapValues(a, r) {
    return keys(r).reduce(function(i, n) {
        return i[n] = a(r[n]), i
    }, {})
}
var applySpec = _curry1(function a(r) {
        return r = mapValues(function(i) {
            return typeof i == "function" ? i : a(i)
        }, r), curryN(reduce(max, 0, pluck("length", values(r))), function() {
            var i = arguments;
            return mapValues(function(n) {
                return apply(n, i)
            }, r)
        })
    }),
    applyTo = _curry2(function a(r, i) {
        return i(r)
    }),
    ascend = _curry3(function a(r, i, n) {
        var s = r(i),
            e = r(n);
        return s < e ? -1 : s > e ? 1 : 0
    }),
    assoc = _curry3(function a(r, i, n) {
        var s = {};
        for (var e in n) s[e] = n[e];
        return s[r] = i, s
    }),
    isNil = _curry1(function a(r) {
        return r == null
    }),
    assocPath = _curry3(function a(r, i, n) {
        if (r.length === 0) return i;
        var s = r[0];
        if (r.length > 1) {
            var e = !isNil(n) && _has(s, n) ? n[s] : _isInteger(r[1]) ? [] : {};
            i = a(Array.prototype.slice.call(r, 1), i, e)
        }
        if (_isInteger(s) && _isArray(n)) {
            var h = [].concat(n);
            return h[s] = i, h
        } else return assoc(s, i, n)
    }),
    nAry = _curry2(function a(r, i) {
        switch (r) {
            case 0:
                return function() {
                    return i.call(this)
                };
            case 1:
                return function(n) {
                    return i.call(this, n)
                };
            case 2:
                return function(n, s) {
                    return i.call(this, n, s)
                };
            case 3:
                return function(n, s, e) {
                    return i.call(this, n, s, e)
                };
            case 4:
                return function(n, s, e, h) {
                    return i.call(this, n, s, e, h)
                };
            case 5:
                return function(n, s, e, h, c) {
                    return i.call(this, n, s, e, h, c)
                };
            case 6:
                return function(n, s, e, h, c, l) {
                    return i.call(this, n, s, e, h, c, l)
                };
            case 7:
                return function(n, s, e, h, c, l, p) {
                    return i.call(this, n, s, e, h, c, l, p)
                };
            case 8:
                return function(n, s, e, h, c, l, p, f) {
                    return i.call(this, n, s, e, h, c, l, p, f)
                };
            case 9:
                return function(n, s, e, h, c, l, p, f, m) {
                    return i.call(this, n, s, e, h, c, l, p, f, m)
                };
            case 10:
                return function(n, s, e, h, c, l, p, f, m, w) {
                    return i.call(this, n, s, e, h, c, l, p, f, m, w)
                };
            default:
                throw new Error("First argument to nAry must be a non-negative integer no greater than ten")
        }
    }),
    binary = _curry1(function a(r) {
        return nAry(2, r)
    });

function _isFunction(a) {
    var r = Object.prototype.toString.call(a);
    return r === "[object Function]" || r === "[object AsyncFunction]" || r === "[object GeneratorFunction]" || r === "[object AsyncGeneratorFunction]"
}
var liftN = _curry2(function a(r, i) {
        var n = curryN(r, i);
        return curryN(r, function() {
            return _reduce(ap, map(n, arguments[0]), Array.prototype.slice.call(arguments, 1))
        })
    }),
    lift = _curry1(function a(r) {
        return liftN(r.length, r)
    }),
    both = _curry2(function a(r, i) {
        return _isFunction(r) ? function() {
            return r.apply(this, arguments) && i.apply(this, arguments)
        } : lift(and)(r, i)
    }),
    curry = _curry1(function a(r) {
        return curryN(r.length, r)
    }),
    call = curry(function a(r) {
        return r.apply(this, Array.prototype.slice.call(arguments, 1))
    });

function _makeFlat(a) {
    return function r(i) {
        for (var n, s, e, h = [], c = 0, l = i.length; c < l;) {
            if (_isArrayLike(i[c]))
                for (n = a ? r(i[c]) : i[c], e = 0, s = n.length; e < s;) h[h.length] = n[e], e += 1;
            else h[h.length] = i[c];
            c += 1
        }
        return h
    }
}

function _forceReduced(a) {
    return {
        "@@transducer/value": a,
        "@@transducer/reduced": !0
    }
}
var preservingReduced = function(a) {
        return {
            "@@transducer/init": _xfBase.init,
            "@@transducer/result": function(r) {
                return a["@@transducer/result"](r)
            },
            "@@transducer/step": function(r, i) {
                var n = a["@@transducer/step"](r, i);
                return n["@@transducer/reduced"] ? _forceReduced(n) : n
            }
        }
    },
    _flatCat = function a(r) {
        var i = preservingReduced(r);
        return {
            "@@transducer/init": _xfBase.init,
            "@@transducer/result": function(n) {
                return i["@@transducer/result"](n)
            },
            "@@transducer/step": function(n, s) {
                return _isArrayLike(s) ? _reduce(i, n, s) : _reduce(i, n, [s])
            }
        }
    },
    _xchain = _curry2(function a(r, i) {
        return map(r, _flatCat(i))
    }),
    chain = _curry2(_dispatchable(["fantasy-land/chain", "chain"], _xchain, function a(r, i) {
        return typeof i == "function" ? function(n) {
            return r(i(n))(n)
        } : _makeFlat(!1)(map(r, i))
    })),
    clamp = _curry3(function a(r, i, n) {
        if (r > i) throw new Error("min must not be greater than max in clamp(min, max, value)");
        return n < r ? r : n > i ? i : n
    });

function _cloneRegExp(a) {
    return new RegExp(a.source, (a.global ? "g" : "") + (a.ignoreCase ? "i" : "") + (a.multiline ? "m" : "") + (a.sticky ? "y" : "") + (a.unicode ? "u" : ""))
}
var type = _curry1(function a(r) {
    return r === null ? "Null" : r === void 0 ? "Undefined" : Object.prototype.toString.call(r).slice(8, -1)
});

function _clone(a, r, i, n) {
    var s = function(h) {
        for (var c = r.length, l = 0; l < c;) {
            if (a === r[l]) return i[l];
            l += 1
        }
        r[l + 1] = a, i[l + 1] = h;
        for (var p in a) h[p] = n ? _clone(a[p], r, i, !0) : a[p];
        return h
    };
    switch (type(a)) {
        case "Object":
            return s({});
        case "Array":
            return s([]);
        case "Date":
            return new Date(a.valueOf());
        case "RegExp":
            return _cloneRegExp(a);
        default:
            return a
    }
}
var clone = _curry1(function a(r) {
        return r != null && typeof r.clone == "function" ? r.clone() : _clone(r, [], [], !0)
    }),
    comparator = _curry1(function a(r) {
        return function(i, n) {
            return r(i, n) ? -1 : r(n, i) ? 1 : 0
        }
    }),
    not = _curry1(function a(r) {
        return !r
    }),
    complement = lift(not);

function _pipe(a, r) {
    return function() {
        return r.call(this, a.apply(this, arguments))
    }
}

function _checkForMethod(a, r) {
    return function() {
        var i = arguments.length;
        if (i === 0) return r();
        var n = arguments[i - 1];
        return _isArray(n) || typeof n[a] != "function" ? r.apply(this, arguments) : n[a].apply(n, Array.prototype.slice.call(arguments, 0, i - 1))
    }
}
var slice = _curry3(_checkForMethod("slice", function a(r, i, n) {
        return Array.prototype.slice.call(n, r, i)
    })),
    tail = _curry1(_checkForMethod("tail", slice(1, 1 / 0)));

function pipe() {
    if (arguments.length === 0) throw new Error("pipe requires at least one argument");
    return _arity(arguments[0].length, reduce(_pipe, arguments[0], tail(arguments)))
}
var reverse = _curry1(function a(r) {
    return _isString(r) ? r.split("").reverse().join("") : Array.prototype.slice.call(r, 0).reverse()
});

function compose() {
    if (arguments.length === 0) throw new Error("compose requires at least one argument");
    return pipe.apply(this, reverse(arguments))
}

function composeK() {
    if (arguments.length === 0) throw new Error("composeK requires at least one argument");
    var a = Array.prototype.slice.call(arguments),
        r = a.pop();
    return compose(compose.apply(this, map(chain, a)), r)
}

function _pipeP(a, r) {
    return function() {
        var i = this;
        return a.apply(i, arguments).then(function(n) {
            return r.call(i, n)
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

function _identity(a) {
    return a
}
var identity = _curry1(_identity),
    pipeWith = _curry2(function a(r, i) {
        if (i.length <= 0) return identity;
        var n = head(i),
            s = tail(i);
        return _arity(n.length, function() {
            return _reduce(function(e, h) {
                return r.call(this, h, e)
            }, n.apply(this, arguments), s)
        })
    }),
    composeWith = _curry2(function a(r, i) {
        return pipeWith.apply(this, [r, reverse(i)])
    });

function _arrayFromIterator(a) {
    for (var r = [], i; !(i = a.next()).done;) r.push(i.value);
    return r
}

function _includesWith(a, r, i) {
    for (var n = 0, s = i.length; n < s;) {
        if (a(r, i[n])) return !0;
        n += 1
    }
    return !1
}

function _functionName(a) {
    var r = String(a).match(/^function (\w*)/);
    return r == null ? "" : r[1]
}

function _objectIs(a, r) {
    return a === r ? a !== 0 || 1 / a === 1 / r : a !== a && r !== r
}
const _objectIs$1 = typeof Object.is == "function" ? Object.is : _objectIs;

function _uniqContentEquals(a, r, i, n) {
    var s = _arrayFromIterator(a),
        e = _arrayFromIterator(r);

    function h(c, l) {
        return _equals(c, l, i.slice(), n.slice())
    }
    return !_includesWith(function(c, l) {
        return !_includesWith(h, l, c)
    }, e, s)
}

function _equals(a, r, i, n) {
    if (_objectIs$1(a, r)) return !0;
    var s = type(a);
    if (s !== type(r) || a == null || r == null) return !1;
    if (typeof a["fantasy-land/equals"] == "function" || typeof r["fantasy-land/equals"] == "function") return typeof a["fantasy-land/equals"] == "function" && a["fantasy-land/equals"](r) && typeof r["fantasy-land/equals"] == "function" && r["fantasy-land/equals"](a);
    if (typeof a.equals == "function" || typeof r.equals == "function") return typeof a.equals == "function" && a.equals(r) && typeof r.equals == "function" && r.equals(a);
    switch (s) {
        case "Arguments":
        case "Array":
        case "Object":
            if (typeof a.constructor == "function" && _functionName(a.constructor) === "Promise") return a === r;
            break;
        case "Boolean":
        case "Number":
        case "String":
            if (!(typeof a == typeof r && _objectIs$1(a.valueOf(), r.valueOf()))) return !1;
            break;
        case "Date":
            if (!_objectIs$1(a.valueOf(), r.valueOf())) return !1;
            break;
        case "Error":
            return a.name === r.name && a.message === r.message;
        case "RegExp":
            if (!(a.source === r.source && a.global === r.global && a.ignoreCase === r.ignoreCase && a.multiline === r.multiline && a.sticky === r.sticky && a.unicode === r.unicode)) return !1;
            break
    }
    for (var e = i.length - 1; e >= 0;) {
        if (i[e] === a) return n[e] === r;
        e -= 1
    }
    switch (s) {
        case "Map":
            return a.size !== r.size ? !1 : _uniqContentEquals(a.entries(), r.entries(), i.concat([a]), n.concat([r]));
        case "Set":
            return a.size !== r.size ? !1 : _uniqContentEquals(a.values(), r.values(), i.concat([a]), n.concat([r]));
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
    var h = keys(a);
    if (h.length !== keys(r).length) return !1;
    var c = i.concat([a]),
        l = n.concat([r]);
    for (e = h.length - 1; e >= 0;) {
        var p = h[e];
        if (!(_has(p, r) && _equals(r[p], a[p], c, l))) return !1;
        e -= 1
    }
    return !0
}
var equals = _curry2(function a(r, i) {
    return _equals(r, i, [], [])
});

function _indexOf(a, r, i) {
    var n, s;
    if (typeof a.indexOf == "function") switch (typeof r) {
        case "number":
            if (r === 0) {
                for (n = 1 / r; i < a.length;) {
                    if (s = a[i], s === 0 && 1 / s === n) return i;
                    i += 1
                }
                return -1
            } else if (r !== r) {
                for (; i < a.length;) {
                    if (s = a[i], typeof s == "number" && s !== s) return i;
                    i += 1
                }
                return -1
            }
            return a.indexOf(r, i);
        case "string":
        case "boolean":
        case "function":
        case "undefined":
            return a.indexOf(r, i);
        case "object":
            if (r === null) return a.indexOf(r, i)
    }
    for (; i < a.length;) {
        if (equals(a[i], r)) return i;
        i += 1
    }
    return -1
}

function _includes(a, r) {
    return _indexOf(r, a, 0) >= 0
}

function _quote(a) {
    var r = a.replace(/\\/g, "\\\\").replace(/[\b]/g, "\\b").replace(/\f/g, "\\f").replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/\v/g, "\\v").replace(/\0/g, "\\0");
    return '"' + r.replace(/"/g, '\\"') + '"'
}
var pad = function a(r) {
        return (r < 10 ? "0" : "") + r
    },
    _toISOString = typeof Date.prototype.toISOString == "function" ? function a(r) {
        return r.toISOString()
    } : function a(r) {
        return r.getUTCFullYear() + "-" + pad(r.getUTCMonth() + 1) + "-" + pad(r.getUTCDate()) + "T" + pad(r.getUTCHours()) + ":" + pad(r.getUTCMinutes()) + ":" + pad(r.getUTCSeconds()) + "." + (r.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + "Z"
    };

function _complement(a) {
    return function() {
        return !a.apply(this, arguments)
    }
}

function _filter(a, r) {
    for (var i = 0, n = r.length, s = []; i < n;) a(r[i]) && (s[s.length] = r[i]), i += 1;
    return s
}

function _isObject(a) {
    return Object.prototype.toString.call(a) === "[object Object]"
}
var XFilter = (function() {
        function a(r, i) {
            this.xf = i, this.f = r
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = _xfBase.result, a.prototype["@@transducer/step"] = function(r, i) {
            return this.f(i) ? this.xf["@@transducer/step"](r, i) : r
        }, a
    })(),
    _xfilter = _curry2(function a(r, i) {
        return new XFilter(r, i)
    }),
    filter = _curry2(_dispatchable(["filter"], _xfilter, function(a, r) {
        return _isObject(r) ? _reduce(function(i, n) {
            return a(r[n]) && (i[n] = r[n]), i
        }, {}, keys(r)) : _filter(a, r)
    })),
    reject = _curry2(function a(r, i) {
        return filter(_complement(r), i)
    });

function _toString(a, r) {
    var i = function(h) {
            var c = r.concat([a]);
            return _includes(h, c) ? "<Circular>" : _toString(h, c)
        },
        n = function(e, h) {
            return _map(function(c) {
                return _quote(c) + ": " + i(e[c])
            }, h.slice().sort())
        };
    switch (Object.prototype.toString.call(a)) {
        case "[object Arguments]":
            return "(function() { return arguments; }(" + _map(i, a).join(", ") + "))";
        case "[object Array]":
            return "[" + _map(i, a).concat(n(a, reject(function(e) {
                return /^\d+$/.test(e)
            }, keys(a)))).join(", ") + "]";
        case "[object Boolean]":
            return typeof a == "object" ? "new Boolean(" + i(a.valueOf()) + ")" : a.toString();
        case "[object Date]":
            return "new Date(" + (isNaN(a.valueOf()) ? i(NaN) : _quote(_toISOString(a))) + ")";
        case "[object Null]":
            return "null";
        case "[object Number]":
            return typeof a == "object" ? "new Number(" + i(a.valueOf()) + ")" : 1 / a === -1 / 0 ? "-0" : a.toString(10);
        case "[object String]":
            return typeof a == "object" ? "new String(" + i(a.valueOf()) + ")" : _quote(a);
        case "[object Undefined]":
            return "undefined";
        default:
            if (typeof a.toString == "function") {
                var s = a.toString();
                if (s !== "[object Object]") return s
            }
            return "{" + n(a, keys(a)).join(", ") + "}"
    }
}
var toString = _curry1(function a(r) {
        return _toString(r, [])
    }),
    concat = _curry2(function a(r, i) {
        if (_isArray(r)) {
            if (_isArray(i)) return r.concat(i);
            throw new TypeError(toString(i) + " is not an array")
        }
        if (_isString(r)) {
            if (_isString(i)) return r + i;
            throw new TypeError(toString(i) + " is not a string")
        }
        if (r != null && _isFunction(r["fantasy-land/concat"])) return r["fantasy-land/concat"](i);
        if (r != null && _isFunction(r.concat)) return r.concat(i);
        throw new TypeError(toString(r) + ' does not have a method named "concat" or "fantasy-land/concat"')
    }),
    cond = _curry1(function a(r) {
        var i = reduce(max, 0, map(function(n) {
            return n[0].length
        }, r));
        return _arity(i, function() {
            for (var n = 0; n < r.length;) {
                if (r[n][0].apply(this, arguments)) return r[n][1].apply(this, arguments);
                n += 1
            }
        })
    }),
    constructN = _curry2(function a(r, i) {
        if (r > 10) throw new Error("Constructor with greater than ten arguments");
        return r === 0 ? function() {
            return new i
        } : curry(nAry(r, function(n, s, e, h, c, l, p, f, m, w) {
            switch (arguments.length) {
                case 1:
                    return new i(n);
                case 2:
                    return new i(n, s);
                case 3:
                    return new i(n, s, e);
                case 4:
                    return new i(n, s, e, h);
                case 5:
                    return new i(n, s, e, h, c);
                case 6:
                    return new i(n, s, e, h, c, l);
                case 7:
                    return new i(n, s, e, h, c, l, p);
                case 8:
                    return new i(n, s, e, h, c, l, p, f);
                case 9:
                    return new i(n, s, e, h, c, l, p, f, m);
                case 10:
                    return new i(n, s, e, h, c, l, p, f, m, w)
            }
        }))
    }),
    construct = _curry1(function a(r) {
        return constructN(r.length, r)
    }),
    contains = _curry2(_includes),
    converge = _curry2(function a(r, i) {
        return curryN(reduce(max, 0, pluck("length", i)), function() {
            var n = arguments,
                s = this;
            return r.apply(s, _map(function(e) {
                return e.apply(s, n)
            }, i))
        })
    }),
    XReduceBy = (function() {
        function a(r, i, n, s) {
            this.valueFn = r, this.valueAcc = i, this.keyFn = n, this.xf = s, this.inputs = {}
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            var i;
            for (i in this.inputs)
                if (_has(i, this.inputs) && (r = this.xf["@@transducer/step"](r, this.inputs[i]), r["@@transducer/reduced"])) {
                    r = r["@@transducer/value"];
                    break
                } return this.inputs = null, this.xf["@@transducer/result"](r)
        }, a.prototype["@@transducer/step"] = function(r, i) {
            var n = this.keyFn(i);
            return this.inputs[n] = this.inputs[n] || [n, this.valueAcc], this.inputs[n][1] = this.valueFn(this.inputs[n][1], i), r
        }, a
    })(),
    _xreduceBy = _curryN(4, [], function a(r, i, n, s) {
        return new XReduceBy(r, i, n, s)
    }),
    reduceBy = _curryN(4, [], _dispatchable([], _xreduceBy, function a(r, i, n, s) {
        return _reduce(function(e, h) {
            var c = n(h);
            return e[c] = r(_has(c, e) ? e[c] : _clone(i, [], [], !1), h), e
        }, {}, s)
    })),
    countBy = reduceBy(function(a, r) {
        return a + 1
    }, 0),
    dec = add(-1),
    defaultTo = _curry2(function a(r, i) {
        return i == null || i !== i ? r : i
    }),
    descend = _curry3(function a(r, i, n) {
        var s = r(i),
            e = r(n);
        return s > e ? -1 : s < e ? 1 : 0
    }),
    _Set = (function() {
        function a() {
            this._nativeSet = typeof Set == "function" ? new Set : null, this._items = {}
        }
        return a.prototype.add = function(r) {
            return !hasOrAdd(r, !0, this)
        }, a.prototype.has = function(r) {
            return hasOrAdd(r, !1, this)
        }, a
    })();

function hasOrAdd(a, r, i) {
    var n = typeof a,
        s, e;
    switch (n) {
        case "string":
        case "number":
            return a === 0 && 1 / a === -1 / 0 ? i._items["-0"] ? !0 : (r && (i._items["-0"] = !0), !1) : i._nativeSet !== null ? r ? (s = i._nativeSet.size, i._nativeSet.add(a), e = i._nativeSet.size, e === s) : i._nativeSet.has(a) : n in i._items ? a in i._items[n] ? !0 : (r && (i._items[n][a] = !0), !1) : (r && (i._items[n] = {}, i._items[n][a] = !0), !1);
        case "boolean":
            if (n in i._items) {
                var h = a ? 1 : 0;
                return i._items[n][h] ? !0 : (r && (i._items[n][h] = !0), !1)
            } else return r && (i._items[n] = a ? [!1, !0] : [!0, !1]), !1;
        case "function":
            return i._nativeSet !== null ? r ? (s = i._nativeSet.size, i._nativeSet.add(a), e = i._nativeSet.size, e === s) : i._nativeSet.has(a) : n in i._items ? _includes(a, i._items[n]) ? !0 : (r && i._items[n].push(a), !1) : (r && (i._items[n] = [a]), !1);
        case "undefined":
            return i._items[n] ? !0 : (r && (i._items[n] = !0), !1);
        case "object":
            if (a === null) return i._items.null ? !0 : (r && (i._items.null = !0), !1);
        default:
            return n = Object.prototype.toString.call(a), n in i._items ? _includes(a, i._items[n]) ? !0 : (r && i._items[n].push(a), !1) : (r && (i._items[n] = [a]), !1)
    }
}
var difference = _curry2(function a(r, i) {
        for (var n = [], s = 0, e = r.length, h = i.length, c = new _Set, l = 0; l < h; l += 1) c.add(i[l]);
        for (; s < e;) c.add(r[s]) && (n[n.length] = r[s]), s += 1;
        return n
    }),
    differenceWith = _curry3(function a(r, i, n) {
        for (var s = [], e = 0, h = i.length; e < h;) !_includesWith(r, i[e], n) && !_includesWith(r, i[e], s) && s.push(i[e]), e += 1;
        return s
    }),
    dissoc = _curry2(function a(r, i) {
        var n = {};
        for (var s in i) n[s] = i[s];
        return delete n[r], n
    }),
    remove = _curry3(function a(r, i, n) {
        var s = Array.prototype.slice.call(n, 0);
        return s.splice(r, i), s
    }),
    update = _curry3(function a(r, i, n) {
        return adjust(r, always(i), n)
    }),
    dissocPath = _curry2(function a(r, i) {
        switch (r.length) {
            case 0:
                return i;
            case 1:
                return _isInteger(r[0]) && _isArray(i) ? remove(r[0], 1, i) : dissoc(r[0], i);
            default:
                var n = r[0],
                    s = Array.prototype.slice.call(r, 1);
                return i[n] == null ? i : _isInteger(n) && _isArray(i) ? update(n, a(s, i[n]), i) : assoc(n, a(s, i[n]), i)
        }
    }),
    divide = _curry2(function a(r, i) {
        return r / i
    }),
    XDrop = (function() {
        function a(r, i) {
            this.xf = i, this.n = r
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = _xfBase.result, a.prototype["@@transducer/step"] = function(r, i) {
            return this.n > 0 ? (this.n -= 1, r) : this.xf["@@transducer/step"](r, i)
        }, a
    })(),
    _xdrop = _curry2(function a(r, i) {
        return new XDrop(r, i)
    }),
    drop = _curry2(_dispatchable(["drop"], _xdrop, function a(r, i) {
        return slice(Math.max(0, r), 1 / 0, i)
    })),
    XTake = (function() {
        function a(r, i) {
            this.xf = i, this.n = r, this.i = 0
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = _xfBase.result, a.prototype["@@transducer/step"] = function(r, i) {
            this.i += 1;
            var n = this.n === 0 ? r : this.xf["@@transducer/step"](r, i);
            return this.n >= 0 && this.i >= this.n ? _reduced(n) : n
        }, a
    })(),
    _xtake = _curry2(function a(r, i) {
        return new XTake(r, i)
    }),
    take = _curry2(_dispatchable(["take"], _xtake, function a(r, i) {
        return slice(0, r < 0 ? 1 / 0 : r, i)
    }));

function dropLast$1(a, r) {
    return take(a < r.length ? r.length - a : 0, r)
}
var XDropLast = (function() {
        function a(r, i) {
            this.xf = i, this.pos = 0, this.full = !1, this.acc = new Array(r)
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            return this.acc = null, this.xf["@@transducer/result"](r)
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.full && (r = this.xf["@@transducer/step"](r, this.acc[this.pos])), this.store(i), r
        }, a.prototype.store = function(r) {
            this.acc[this.pos] = r, this.pos += 1, this.pos === this.acc.length && (this.pos = 0, this.full = !0)
        }, a
    })(),
    _xdropLast = _curry2(function a(r, i) {
        return new XDropLast(r, i)
    }),
    dropLast = _curry2(_dispatchable([], _xdropLast, dropLast$1));

function dropLastWhile$1(a, r) {
    for (var i = r.length - 1; i >= 0 && a(r[i]);) i -= 1;
    return slice(0, i + 1, r)
}
var XDropLastWhile = (function() {
        function a(r, i) {
            this.f = r, this.retained = [], this.xf = i
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            return this.retained = null, this.xf["@@transducer/result"](r)
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.f(i) ? this.retain(r, i) : this.flush(r, i)
        }, a.prototype.flush = function(r, i) {
            return r = _reduce(this.xf["@@transducer/step"], r, this.retained), this.retained = [], this.xf["@@transducer/step"](r, i)
        }, a.prototype.retain = function(r, i) {
            return this.retained.push(i), r
        }, a
    })(),
    _xdropLastWhile = _curry2(function a(r, i) {
        return new XDropLastWhile(r, i)
    }),
    dropLastWhile = _curry2(_dispatchable([], _xdropLastWhile, dropLastWhile$1)),
    XDropRepeatsWith = (function() {
        function a(r, i) {
            this.xf = i, this.pred = r, this.lastValue = void 0, this.seenFirstValue = !1
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = _xfBase.result, a.prototype["@@transducer/step"] = function(r, i) {
            var n = !1;
            return this.seenFirstValue ? this.pred(this.lastValue, i) && (n = !0) : this.seenFirstValue = !0, this.lastValue = i, n ? r : this.xf["@@transducer/step"](r, i)
        }, a
    })(),
    _xdropRepeatsWith = _curry2(function a(r, i) {
        return new XDropRepeatsWith(r, i)
    }),
    last = nth(-1),
    dropRepeatsWith = _curry2(_dispatchable([], _xdropRepeatsWith, function a(r, i) {
        var n = [],
            s = 1,
            e = i.length;
        if (e !== 0)
            for (n[0] = i[0]; s < e;) r(last(n), i[s]) || (n[n.length] = i[s]), s += 1;
        return n
    })),
    dropRepeats = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals))),
    XDropWhile = (function() {
        function a(r, i) {
            this.xf = i, this.f = r
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = _xfBase.result, a.prototype["@@transducer/step"] = function(r, i) {
            if (this.f) {
                if (this.f(i)) return r;
                this.f = null
            }
            return this.xf["@@transducer/step"](r, i)
        }, a
    })(),
    _xdropWhile = _curry2(function a(r, i) {
        return new XDropWhile(r, i)
    }),
    dropWhile = _curry2(_dispatchable(["dropWhile"], _xdropWhile, function a(r, i) {
        for (var n = 0, s = i.length; n < s && r(i[n]);) n += 1;
        return slice(n, 1 / 0, i)
    })),
    or = _curry2(function a(r, i) {
        return r || i
    }),
    either = _curry2(function a(r, i) {
        return _isFunction(r) ? function() {
            return r.apply(this, arguments) || i.apply(this, arguments)
        } : lift(or)(r, i)
    }),
    empty = _curry1(function a(r) {
        return r != null && typeof r["fantasy-land/empty"] == "function" ? r["fantasy-land/empty"]() : r != null && r.constructor != null && typeof r.constructor["fantasy-land/empty"] == "function" ? r.constructor["fantasy-land/empty"]() : r != null && typeof r.empty == "function" ? r.empty() : r != null && r.constructor != null && typeof r.constructor.empty == "function" ? r.constructor.empty() : _isArray(r) ? [] : _isString(r) ? "" : _isObject(r) ? {} : _isArguments(r) ? (function() {
            return arguments
        })() : void 0
    }),
    takeLast = _curry2(function a(r, i) {
        return drop(r >= 0 ? i.length - r : 0, i)
    }),
    endsWith = _curry2(function(a, r) {
        return equals(takeLast(a.length, r), a)
    }),
    eqBy = _curry3(function a(r, i, n) {
        return equals(r(i), r(n))
    }),
    eqProps = _curry3(function a(r, i, n) {
        return equals(i[r], n[r])
    }),
    evolve = _curry2(function a(r, i) {
        var n = i instanceof Array ? [] : {},
            s, e, h;
        for (e in i) s = r[e], h = typeof s, n[e] = h === "function" ? s(i[e]) : s && h === "object" ? a(s, i[e]) : i[e];
        return n
    }),
    XFind = (function() {
        function a(r, i) {
            this.xf = i, this.f = r, this.found = !1
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            return this.found || (r = this.xf["@@transducer/step"](r, void 0)), this.xf["@@transducer/result"](r)
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.f(i) && (this.found = !0, r = _reduced(this.xf["@@transducer/step"](r, i))), r
        }, a
    })(),
    _xfind = _curry2(function a(r, i) {
        return new XFind(r, i)
    }),
    find = _curry2(_dispatchable(["find"], _xfind, function a(r, i) {
        for (var n = 0, s = i.length; n < s;) {
            if (r(i[n])) return i[n];
            n += 1
        }
    })),
    XFindIndex = (function() {
        function a(r, i) {
            this.xf = i, this.f = r, this.idx = -1, this.found = !1
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            return this.found || (r = this.xf["@@transducer/step"](r, -1)), this.xf["@@transducer/result"](r)
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.idx += 1, this.f(i) && (this.found = !0, r = _reduced(this.xf["@@transducer/step"](r, this.idx))), r
        }, a
    })(),
    _xfindIndex = _curry2(function a(r, i) {
        return new XFindIndex(r, i)
    }),
    findIndex = _curry2(_dispatchable([], _xfindIndex, function a(r, i) {
        for (var n = 0, s = i.length; n < s;) {
            if (r(i[n])) return n;
            n += 1
        }
        return -1
    })),
    XFindLast = (function() {
        function a(r, i) {
            this.xf = i, this.f = r
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            return this.xf["@@transducer/result"](this.xf["@@transducer/step"](r, this.last))
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.f(i) && (this.last = i), r
        }, a
    })(),
    _xfindLast = _curry2(function a(r, i) {
        return new XFindLast(r, i)
    }),
    findLast = _curry2(_dispatchable([], _xfindLast, function a(r, i) {
        for (var n = i.length - 1; n >= 0;) {
            if (r(i[n])) return i[n];
            n -= 1
        }
    })),
    XFindLastIndex = (function() {
        function a(r, i) {
            this.xf = i, this.f = r, this.idx = -1, this.lastIdx = -1
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = function(r) {
            return this.xf["@@transducer/result"](this.xf["@@transducer/step"](r, this.lastIdx))
        }, a.prototype["@@transducer/step"] = function(r, i) {
            return this.idx += 1, this.f(i) && (this.lastIdx = this.idx), r
        }, a
    })(),
    _xfindLastIndex = _curry2(function a(r, i) {
        return new XFindLastIndex(r, i)
    }),
    findLastIndex = _curry2(_dispatchable([], _xfindLastIndex, function a(r, i) {
        for (var n = i.length - 1; n >= 0;) {
            if (r(i[n])) return n;
            n -= 1
        }
        return -1
    })),
    flatten = _curry1(_makeFlat(!0)),
    flip = _curry1(function a(r) {
        return curryN(r.length, function(i, n) {
            var s = Array.prototype.slice.call(arguments, 0);
            return s[0] = n, s[1] = i, r.apply(this, s)
        })
    }),
    forEach = _curry2(_checkForMethod("forEach", function a(r, i) {
        for (var n = i.length, s = 0; s < n;) r(i[s]), s += 1;
        return i
    })),
    forEachObjIndexed = _curry2(function a(r, i) {
        for (var n = keys(i), s = 0; s < n.length;) {
            var e = n[s];
            r(i[e], e, i), s += 1
        }
        return i
    }),
    fromPairs = _curry1(function a(r) {
        for (var i = {}, n = 0; n < r.length;) i[r[n][0]] = r[n][1], n += 1;
        return i
    }),
    groupBy = _curry2(_checkForMethod("groupBy", reduceBy(function(a, r) {
        return a == null && (a = []), a.push(r), a
    }, null))),
    groupWith = _curry2(function(a, r) {
        for (var i = [], n = 0, s = r.length; n < s;) {
            for (var e = n + 1; e < s && a(r[e - 1], r[e]);) e += 1;
            i.push(r.slice(n, e)), n = e
        }
        return i
    }),
    gt = _curry2(function a(r, i) {
        return r > i
    }),
    gte = _curry2(function a(r, i) {
        return r >= i
    }),
    hasPath = _curry2(function a(r, i) {
        if (r.length === 0 || isNil(i)) return !1;
        for (var n = i, s = 0; s < r.length;)
            if (!isNil(n) && _has(r[s], n)) n = n[r[s]], s += 1;
            else return !1;
        return !0
    }),
    has = _curry2(function a(r, i) {
        return hasPath([r], i)
    }),
    hasIn = _curry2(function a(r, i) {
        return r in i
    }),
    identical = _curry2(_objectIs$1),
    ifElse = _curry3(function a(r, i, n) {
        return curryN(Math.max(r.length, i.length, n.length), function() {
            return r.apply(this, arguments) ? i.apply(this, arguments) : n.apply(this, arguments)
        })
    }),
    inc = add(1),
    includes = _curry2(_includes),
    indexBy = reduceBy(function(a, r) {
        return r
    }, null),
    indexOf = _curry2(function a(r, i) {
        return typeof i.indexOf == "function" && !_isArray(i) ? i.indexOf(r) : _indexOf(i, r, 0)
    }),
    init = slice(0, -1),
    innerJoin = _curry3(function a(r, i, n) {
        return _filter(function(s) {
            return _includesWith(r, s, n)
        }, i)
    }),
    insert = _curry3(function a(r, i, n) {
        r = r < n.length && r >= 0 ? r : n.length;
        var s = Array.prototype.slice.call(n, 0);
        return s.splice(r, 0, i), s
    }),
    insertAll = _curry3(function a(r, i, n) {
        return r = r < n.length && r >= 0 ? r : n.length, [].concat(Array.prototype.slice.call(n, 0, r), i, Array.prototype.slice.call(n, r))
    }),
    uniqBy = _curry2(function a(r, i) {
        for (var n = new _Set, s = [], e = 0, h, c; e < i.length;) c = i[e], h = r(c), n.add(h) && s.push(c), e += 1;
        return s
    }),
    uniq = uniqBy(identity),
    intersection = _curry2(function a(r, i) {
        var n, s;
        return r.length > i.length ? (n = r, s = i) : (n = i, s = r), uniq(_filter(flip(_includes)(n), s))
    }),
    intersperse = _curry2(_checkForMethod("intersperse", function a(r, i) {
        for (var n = [], s = 0, e = i.length; s < e;) s === e - 1 ? n.push(i[s]) : n.push(i[s], r), s += 1;
        return n
    }));

function _objectAssign(a) {
    if (a == null) throw new TypeError("Cannot convert undefined or null to object");
    for (var r = Object(a), i = 1, n = arguments.length; i < n;) {
        var s = arguments[i];
        if (s != null)
            for (var e in s) _has(e, s) && (r[e] = s[e]);
        i += 1
    }
    return r
}
const _objectAssign$1 = typeof Object.assign == "function" ? Object.assign : _objectAssign;
var objOf = _curry2(function a(r, i) {
        var n = {};
        return n[r] = i, n
    }),
    _stepCatArray = {
        "@@transducer/init": Array,
        "@@transducer/step": function(a, r) {
            return a.push(r), a
        },
        "@@transducer/result": _identity
    },
    _stepCatString = {
        "@@transducer/init": String,
        "@@transducer/step": function(a, r) {
            return a + r
        },
        "@@transducer/result": _identity
    },
    _stepCatObject = {
        "@@transducer/init": Object,
        "@@transducer/step": function(a, r) {
            return _objectAssign$1(a, _isArrayLike(r) ? objOf(r[0], r[1]) : r)
        },
        "@@transducer/result": _identity
    };

function _stepCat(a) {
    if (_isTransformer(a)) return a;
    if (_isArrayLike(a)) return _stepCatArray;
    if (typeof a == "string") return _stepCatString;
    if (typeof a == "object") return _stepCatObject;
    throw new Error("Cannot create transformer for " + a)
}
var into = _curry3(function a(r, i, n) {
        return _isTransformer(r) ? _reduce(i(r), r["@@transducer/init"](), n) : _reduce(i(_stepCat(r)), _clone(r, [], [], !1), n)
    }),
    invert = _curry1(function a(r) {
        for (var i = keys(r), n = i.length, s = 0, e = {}; s < n;) {
            var h = i[s],
                c = r[h],
                l = _has(c, e) ? e[c] : e[c] = [];
            l[l.length] = h, s += 1
        }
        return e
    }),
    invertObj = _curry1(function a(r) {
        for (var i = keys(r), n = i.length, s = 0, e = {}; s < n;) {
            var h = i[s];
            e[r[h]] = h, s += 1
        }
        return e
    }),
    invoker = _curry2(function a(r, i) {
        return curryN(r + 1, function() {
            var n = arguments[r];
            if (n != null && _isFunction(n[i])) return n[i].apply(n, Array.prototype.slice.call(arguments, 0, r));
            throw new TypeError(toString(n) + ' does not have a method named "' + i + '"')
        })
    }),
    is = _curry2(function a(r, i) {
        return i != null && i.constructor === r || i instanceof r
    }),
    isEmpty = _curry1(function a(r) {
        return r != null && equals(r, empty(r))
    }),
    join$1 = invoker(1, "join"),
    juxt = _curry1(function a(r) {
        return converge(function() {
            return Array.prototype.slice.call(arguments, 0)
        }, r)
    }),
    keysIn = _curry1(function a(r) {
        var i, n = [];
        for (i in r) n[n.length] = i;
        return n
    }),
    lastIndexOf = _curry2(function a(r, i) {
        if (typeof i.lastIndexOf == "function" && !_isArray(i)) return i.lastIndexOf(r);
        for (var n = i.length - 1; n >= 0;) {
            if (equals(i[n], r)) return n;
            n -= 1
        }
        return -1
    });

function _isNumber(a) {
    return Object.prototype.toString.call(a) === "[object Number]"
}
var length = _curry1(function a(r) {
        return r != null && _isNumber(r.length) ? r.length : NaN
    }),
    lens = _curry2(function a(r, i) {
        return function(n) {
            return function(s) {
                return map(function(e) {
                    return i(e, s)
                }, n(r(s)))
            }
        }
    }),
    lensIndex = _curry1(function a(r) {
        return lens(nth(r), update(r))
    }),
    lensPath = _curry1(function a(r) {
        return lens(path(r), assocPath(r))
    }),
    lensProp = _curry1(function a(r) {
        return lens(prop(r), assoc(r))
    }),
    lt = _curry2(function a(r, i) {
        return r < i
    }),
    lte = _curry2(function a(r, i) {
        return r <= i
    }),
    mapAccum = _curry3(function a(r, i, n) {
        for (var s = 0, e = n.length, h = [], c = [i]; s < e;) c = r(c[0], n[s]), h[s] = c[1], s += 1;
        return [c[0], h]
    }),
    mapAccumRight = _curry3(function a(r, i, n) {
        for (var s = n.length - 1, e = [], h = [i]; s >= 0;) h = r(h[0], n[s]), e[s] = h[1], s -= 1;
        return [h[0], e]
    }),
    mapObjIndexed = _curry2(function a(r, i) {
        return _reduce(function(n, s) {
            return n[s] = r(i[s], s, i), n
        }, {}, keys(i))
    }),
    match = _curry2(function a(r, i) {
        return i.match(r) || []
    }),
    mathMod = _curry2(function a(r, i) {
        return _isInteger(r) ? !_isInteger(i) || i < 1 ? NaN : (r % i + i) % i : NaN
    }),
    maxBy = _curry3(function a(r, i, n) {
        return r(n) > r(i) ? n : i
    }),
    sum = reduce(add, 0),
    mean = _curry1(function a(r) {
        return sum(r) / r.length
    }),
    median = _curry1(function a(r) {
        var i = r.length;
        if (i === 0) return NaN;
        var n = 2 - i % 2,
            s = (i - n) / 2;
        return mean(Array.prototype.slice.call(r, 0).sort(function(e, h) {
            return e < h ? -1 : e > h ? 1 : 0
        }).slice(s, s + n))
    }),
    memoizeWith = _curry2(function a(r, i) {
        var n = {};
        return _arity(i.length, function() {
            var s = r.apply(this, arguments);
            return _has(s, n) || (n[s] = i.apply(this, arguments)), n[s]
        })
    }),
    merge = _curry2(function a(r, i) {
        return _objectAssign$1({}, r, i)
    }),
    mergeAll = _curry1(function a(r) {
        return _objectAssign$1.apply(null, [{}].concat(r))
    }),
    mergeWithKey = _curry3(function a(r, i, n) {
        var s = {},
            e;
        for (e in i) _has(e, i) && (s[e] = _has(e, n) ? r(e, i[e], n[e]) : i[e]);
        for (e in n) _has(e, n) && !_has(e, s) && (s[e] = n[e]);
        return s
    }),
    mergeDeepWithKey = _curry3(function a(r, i, n) {
        return mergeWithKey(function(s, e, h) {
            return _isObject(e) && _isObject(h) ? a(r, e, h) : r(s, e, h)
        }, i, n)
    }),
    mergeDeepLeft = _curry2(function a(r, i) {
        return mergeDeepWithKey(function(n, s, e) {
            return s
        }, r, i)
    }),
    mergeDeepRight = _curry2(function a(r, i) {
        return mergeDeepWithKey(function(n, s, e) {
            return e
        }, r, i)
    }),
    mergeDeepWith = _curry3(function a(r, i, n) {
        return mergeDeepWithKey(function(s, e, h) {
            return r(e, h)
        }, i, n)
    }),
    mergeLeft = _curry2(function a(r, i) {
        return _objectAssign$1({}, i, r)
    }),
    mergeRight = _curry2(function a(r, i) {
        return _objectAssign$1({}, r, i)
    }),
    mergeWith = _curry3(function a(r, i, n) {
        return mergeWithKey(function(s, e, h) {
            return r(e, h)
        }, i, n)
    }),
    min = _curry2(function a(r, i) {
        return i < r ? i : r
    }),
    minBy = _curry3(function a(r, i, n) {
        return r(n) < r(i) ? n : i
    }),
    modulo = _curry2(function a(r, i) {
        return r % i
    }),
    move = _curry3(function(a, r, i) {
        var n = i.length,
            s = i.slice(),
            e = a < 0 ? n + a : a,
            h = r < 0 ? n + r : r,
            c = s.splice(e, 1);
        return e < 0 || e >= i.length || h < 0 || h >= i.length ? i : [].concat(s.slice(0, h)).concat(c).concat(s.slice(h, i.length))
    }),
    multiply = _curry2(function a(r, i) {
        return r * i
    }),
    negate = _curry1(function a(r) {
        return -r
    }),
    none = _curry2(function a(r, i) {
        return all(_complement(r), i)
    }),
    nthArg = _curry1(function a(r) {
        var i = r < 0 ? 1 : r + 1;
        return curryN(i, function() {
            return nth(r, arguments)
        })
    }),
    o = _curry3(function a(r, i, n) {
        return r(i(n))
    });

function _of(a) {
    return [a]
}
var of = _curry1(_of), omit = _curry2(function a(r, i) {
    for (var n = {}, s = {}, e = 0, h = r.length; e < h;) s[r[e]] = 1, e += 1;
    for (var c in i) s.hasOwnProperty(c) || (n[c] = i[c]);
    return n
}), once = _curry1(function a(r) {
    var i = !1,
        n;
    return _arity(r.length, function() {
        return i || (i = !0, n = r.apply(this, arguments)), n
    })
});

function _assertPromise(a, r) {
    if (r == null || !_isFunction(r.then)) throw new TypeError("`" + a + "` expected a Promise, received " + _toString(r, []))
}
var otherwise = _curry2(function a(r, i) {
        return _assertPromise("otherwise", i), i.then(null, r)
    }),
    Identity = function(a) {
        return {
            value: a,
            map: function(r) {
                return Identity(r(a))
            }
        }
    },
    over = _curry3(function a(r, i, n) {
        return r(function(s) {
            return Identity(i(s))
        })(n).value
    }),
    pair = _curry2(function a(r, i) {
        return [r, i]
    });

function _createPartialApplicator(a) {
    return _curry2(function(r, i) {
        return _arity(Math.max(0, r.length - i.length), function() {
            return r.apply(this, a(i, arguments))
        })
    })
}
var partial = _createPartialApplicator(_concat),
    partialRight = _createPartialApplicator(flip(_concat)),
    partition = juxt([filter, reject]),
    pathEq = _curry3(function a(r, i, n) {
        return equals(path(r, n), i)
    }),
    pathOr = _curry3(function a(r, i, n) {
        return defaultTo(r, path(i, n))
    }),
    pathSatisfies = _curry3(function a(r, i, n) {
        return r(path(i, n))
    }),
    pick = _curry2(function a(r, i) {
        for (var n = {}, s = 0; s < r.length;) r[s] in i && (n[r[s]] = i[r[s]]), s += 1;
        return n
    }),
    pickAll = _curry2(function a(r, i) {
        for (var n = {}, s = 0, e = r.length; s < e;) {
            var h = r[s];
            n[h] = i[h], s += 1
        }
        return n
    }),
    pickBy = _curry2(function a(r, i) {
        var n = {};
        for (var s in i) r(i[s], s, i) && (n[s] = i[s]);
        return n
    });

function pipeK() {
    if (arguments.length === 0) throw new Error("pipeK requires at least one argument");
    return composeK.apply(this, reverse(arguments))
}
var prepend = _curry2(function a(r, i) {
        return _concat([r], i)
    }),
    product = reduce(multiply, 1),
    useWith = _curry2(function a(r, i) {
        return curryN(i.length, function() {
            for (var n = [], s = 0; s < i.length;) n.push(i[s].call(this, arguments[s])), s += 1;
            return r.apply(this, n.concat(Array.prototype.slice.call(arguments, i.length)))
        })
    }),
    project = useWith(_map, [pickAll, identity]),
    propEq = _curry3(function a(r, i, n) {
        return equals(i, n[r])
    }),
    propIs = _curry3(function a(r, i, n) {
        return is(r, n[i])
    }),
    propOr = _curry3(function a(r, i, n) {
        return pathOr(r, [i], n)
    }),
    propSatisfies = _curry3(function a(r, i, n) {
        return r(n[i])
    }),
    props = _curry2(function a(r, i) {
        return r.map(function(n) {
            return path([n], i)
        })
    }),
    range = _curry2(function a(r, i) {
        if (!(_isNumber(r) && _isNumber(i))) throw new TypeError("Both arguments to range must be numbers");
        for (var n = [], s = r; s < i;) n.push(s), s += 1;
        return n
    }),
    reduceRight = _curry3(function a(r, i, n) {
        for (var s = n.length - 1; s >= 0;) i = r(n[s], i), s -= 1;
        return i
    }),
    reduceWhile = _curryN(4, [], function a(r, i, n, s) {
        return _reduce(function(e, h) {
            return r(e, h) ? i(e, h) : _reduced(e)
        }, n, s)
    }),
    reduced = _curry1(_reduced),
    times = _curry2(function a(r, i) {
        var n = Number(i),
            s = 0,
            e;
        if (n < 0 || isNaN(n)) throw new RangeError("n must be a non-negative number");
        for (e = new Array(n); s < n;) e[s] = r(s), s += 1;
        return e
    }),
    repeat = _curry2(function a(r, i) {
        return times(always(r), i)
    }),
    replace = _curry3(function a(r, i, n) {
        return n.replace(r, i)
    }),
    scan = _curry3(function a(r, i, n) {
        for (var s = 0, e = n.length, h = [i]; s < e;) i = r(i, n[s]), h[s + 1] = i, s += 1;
        return h
    }),
    sequence = _curry2(function a(r, i) {
        return typeof i.sequence == "function" ? i.sequence(r) : reduceRight(function(n, s) {
            return ap(map(prepend, n), s)
        }, r([]), i)
    }),
    set = _curry3(function a(r, i, n) {
        return over(r, always(i), n)
    }),
    sort = _curry2(function a(r, i) {
        return Array.prototype.slice.call(i, 0).sort(r)
    }),
    sortBy = _curry2(function a(r, i) {
        return Array.prototype.slice.call(i, 0).sort(function(n, s) {
            var e = r(n),
                h = r(s);
            return e < h ? -1 : e > h ? 1 : 0
        })
    }),
    sortWith = _curry2(function a(r, i) {
        return Array.prototype.slice.call(i, 0).sort(function(n, s) {
            for (var e = 0, h = 0; e === 0 && h < r.length;) e = r[h](n, s), h += 1;
            return e
        })
    }),
    split = invoker(1, "split"),
    splitAt = _curry2(function a(r, i) {
        return [slice(0, r, i), slice(r, length(i), i)]
    }),
    splitEvery = _curry2(function a(r, i) {
        if (r <= 0) throw new Error("First argument to splitEvery must be a positive integer");
        for (var n = [], s = 0; s < i.length;) n.push(slice(s, s += r, i));
        return n
    }),
    splitWhen = _curry2(function a(r, i) {
        for (var n = 0, s = i.length, e = []; n < s && !r(i[n]);) e.push(i[n]), n += 1;
        return [e, Array.prototype.slice.call(i, n)]
    }),
    startsWith = _curry2(function(a, r) {
        return equals(take(a.length, r), a)
    }),
    subtract = _curry2(function a(r, i) {
        return Number(r) - Number(i)
    }),
    symmetricDifference = _curry2(function a(r, i) {
        return concat(difference(r, i), difference(i, r))
    }),
    symmetricDifferenceWith = _curry3(function a(r, i, n) {
        return concat(differenceWith(r, i, n), differenceWith(r, n, i))
    }),
    takeLastWhile = _curry2(function a(r, i) {
        for (var n = i.length - 1; n >= 0 && r(i[n]);) n -= 1;
        return slice(n + 1, 1 / 0, i)
    }),
    XTakeWhile = (function() {
        function a(r, i) {
            this.xf = i, this.f = r
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = _xfBase.result, a.prototype["@@transducer/step"] = function(r, i) {
            return this.f(i) ? this.xf["@@transducer/step"](r, i) : _reduced(r)
        }, a
    })(),
    _xtakeWhile = _curry2(function a(r, i) {
        return new XTakeWhile(r, i)
    }),
    takeWhile = _curry2(_dispatchable(["takeWhile"], _xtakeWhile, function a(r, i) {
        for (var n = 0, s = i.length; n < s && r(i[n]);) n += 1;
        return slice(0, n, i)
    })),
    XTap = (function() {
        function a(r, i) {
            this.xf = i, this.f = r
        }
        return a.prototype["@@transducer/init"] = _xfBase.init, a.prototype["@@transducer/result"] = _xfBase.result, a.prototype["@@transducer/step"] = function(r, i) {
            return this.f(i), this.xf["@@transducer/step"](r, i)
        }, a
    })(),
    _xtap = _curry2(function a(r, i) {
        return new XTap(r, i)
    }),
    tap = _curry2(_dispatchable([], _xtap, function a(r, i) {
        return r(i), i
    }));

function _isRegExp(a) {
    return Object.prototype.toString.call(a) === "[object RegExp]"
}
var test = _curry2(function a(r, i) {
        if (!_isRegExp(r)) throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received " + toString(r));
        return _cloneRegExp(r).test(i)
    }),
    andThen = _curry2(function a(r, i) {
        return _assertPromise("andThen", i), i.then(r)
    }),
    toLower = invoker(0, "toLowerCase"),
    toPairs = _curry1(function a(r) {
        var i = [];
        for (var n in r) _has(n, r) && (i[i.length] = [n, r[n]]);
        return i
    }),
    toPairsIn = _curry1(function a(r) {
        var i = [];
        for (var n in r) i[i.length] = [n, r[n]];
        return i
    }),
    toUpper = invoker(0, "toUpperCase"),
    transduce = curryN(4, function a(r, i, n, s) {
        return _reduce(r(typeof i == "function" ? _xwrap(i) : i), n, s)
    }),
    transpose = _curry1(function a(r) {
        for (var i = 0, n = []; i < r.length;) {
            for (var s = r[i], e = 0; e < s.length;) typeof n[e] > "u" && (n[e] = []), n[e].push(s[e]), e += 1;
            i += 1
        }
        return n
    }),
    traverse = _curry3(function a(r, i, n) {
        return typeof n["fantasy-land/traverse"] == "function" ? n["fantasy-land/traverse"](i, r) : sequence(r, map(i, n))
    }),
    ws = `	
\v\f\r                　\u2028\u2029\uFEFF`,
    zeroWidth = "​",
    hasProtoTrim = typeof String.prototype.trim == "function",
    trim = _curry1(!hasProtoTrim || ws.trim() || !zeroWidth.trim() ? function a(r) {
        var i = new RegExp("^[" + ws + "][" + ws + "]*"),
            n = new RegExp("[" + ws + "][" + ws + "]*$");
        return r.replace(i, "").replace(n, "")
    } : function a(r) {
        return r.trim()
    }),
    tryCatch = _curry2(function a(r, i) {
        return _arity(r.length, function() {
            try {
                return r.apply(this, arguments)
            } catch (n) {
                return i.apply(this, _concat([n], arguments))
            }
        })
    }),
    unapply = _curry1(function a(r) {
        return function() {
            return r(Array.prototype.slice.call(arguments, 0))
        }
    }),
    unary = _curry1(function a(r) {
        return nAry(1, r)
    }),
    uncurryN = _curry2(function a(r, i) {
        return curryN(r, function() {
            for (var n = 1, s = i, e = 0, h; n <= r && typeof s == "function";) h = n === r ? arguments.length : e + s.length, s = s.apply(this, Array.prototype.slice.call(arguments, e, h)), n += 1, e = h;
            return s
        })
    }),
    unfold = _curry2(function a(r, i) {
        for (var n = r(i), s = []; n && n.length;) s[s.length] = n[0], n = r(n[1]);
        return s
    }),
    union = _curry2(compose(uniq, _concat)),
    uniqWith = _curry2(function a(r, i) {
        for (var n = 0, s = i.length, e = [], h; n < s;) h = i[n], _includesWith(r, h, e) || (e[e.length] = h), n += 1;
        return e
    }),
    unionWith = _curry3(function a(r, i, n) {
        return uniqWith(r, _concat(i, n))
    }),
    unless = _curry3(function a(r, i, n) {
        return r(n) ? n : i(n)
    }),
    unnest = chain(_identity),
    until = _curry3(function a(r, i, n) {
        for (var s = n; !r(s);) s = i(s);
        return s
    }),
    valuesIn = _curry1(function a(r) {
        var i, n = [];
        for (i in r) n[n.length] = r[i];
        return n
    }),
    Const = function(a) {
        return {
            value: a,
            "fantasy-land/map": function() {
                return this
            }
        }
    },
    view = _curry2(function a(r, i) {
        return r(Const)(i).value
    }),
    when = _curry3(function a(r, i, n) {
        return r(n) ? i(n) : n
    }),
    where = _curry2(function a(r, i) {
        for (var n in r)
            if (_has(n, r) && !r[n](i[n])) return !1;
        return !0
    }),
    whereEq = _curry2(function a(r, i) {
        return where(map(equals, r), i)
    }),
    without = _curry2(function(a, r) {
        return reject(flip(_includes)(a), r)
    }),
    xor = _curry2(function a(r, i) {
        return !!(!r ^ !i)
    }),
    xprod = _curry2(function a(r, i) {
        for (var n = 0, s = r.length, e, h = i.length, c = []; n < s;) {
            for (e = 0; e < h;) c[c.length] = [r[n], i[e]], e += 1;
            n += 1
        }
        return c
    }),
    zip = _curry2(function a(r, i) {
        for (var n = [], s = 0, e = Math.min(r.length, i.length); s < e;) n[s] = [r[s], i[s]], s += 1;
        return n
    }),
    zipObj = _curry2(function a(r, i) {
        for (var n = 0, s = Math.min(r.length, i.length), e = {}; n < s;) e[r[n]] = i[n], n += 1;
        return e
    }),
    zipWith = _curry3(function a(r, i, n) {
        for (var s = [], e = 0, h = Math.min(i.length, n.length); e < h;) s[e] = r(i[e], n[e]), e += 1;
        return s
    }),
    thunkify = _curry1(function a(r) {
        return curryN(r.length, function() {
            var n = arguments;
            return function() {
                return r.apply(this, n)
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
    hasRequiredBrowser = 1, browser = a;

    function a(r, i) {
        if (!Buffer.isBuffer(r)) throw new TypeError("First argument must be a buffer");
        if (!Buffer.isBuffer(i)) throw new TypeError("Second argument must be a buffer");
        if (r.length !== i.length) throw new TypeError("Input buffers must have the same length");
        for (var n = r.length, s = 0, e = -1; ++e < n;) s |= r[e] ^ i[e];
        return s === 0
    }
    return browser
}
var util, hasRequiredUtil;

function requireUtil() {
    if (hasRequiredUtil) return util;
    hasRequiredUtil = 1;
    const a = requireSafeBuffer$2().Buffer,
        {
            map: r,
            join: i,
            pipe: n,
            slice: s,
            curry: e,
            flip: h,
            dropLast: c,
            isEmpty: l,
            takeLast: p
        } = require$$0,
        f = L => ~L,
        m = (L, G, V = L.length) => n(B, s(G, V), x)(L),
        w = a.concat,
        x = a.from,
        B = L => Uint8Array.from(L),
        E = L => L.toString(2),
        C = n(B, r(f)),
        $ = e((L, G, V) => V.map((K, Q, P) => {
            if (Q % G === 0) return L(K, Q, P)
        }).filter((K, Q) => Q % G === 0)),
        I = (L, G, V) => {
            if (l(G) && l(V)) return L;
            const [K] = p(1, G), [Q] = p(1, V);
            return L = L.replace(new RegExp(K, "g"), Q), I(L, c(1, G), c(1, V))
        },
        D = e((L, G) => {
            var V = "";
            for (let K = 0; K < L; K++) V += "0";
            return V.slice(String(G).length) + G
        }),
        j = n(Array.from, r(E), r(D(8)), i(""));
    return util = {
        toBuffer: x,
        byarr: B,
        compliment: C,
        byteToBin: j,
        nTobin: E,
        zeroPad: D,
        binToByte: L => {
            var G = [];
            for (let V = 0; V < L.length; V += 8) G.push(n(s(V, V + 8), h(parseInt)(2))(L));
            return new Uint8Array(G)
        },
        concatBuff: w,
        buffSlice: m,
        stepMap: $,
        recursiveReplace: I
    }, util
}
var encrypt_1, hasRequiredEncrypt;

function requireEncrypt() {
    if (hasRequiredEncrypt) return encrypt_1;
    hasRequiredEncrypt = 1;
    const a = requireBrowser$6(),
        {
            createCipheriv: r,
            createDecipheriv: i
        } = a,
        n = requireBrowser$b(),
        s = requireBrowser$8().pbkdf2Sync,
        e = requireBrowser$9(),
        {
            curry: h
        } = require$$0,
        c = requireBrowser(),
        {
            toBuffer: l,
            concatBuff: p,
            buffSlice: f
        } = requireUtil(),
        m = ($, I) => s($, I, 1e4, 48, "sha512"),
        w = $ => {
            const I = n(8),
                {
                    iv: D,
                    key: j,
                    secret: O
                } = E($, I),
                L = r("aes-256-ctr", j, D),
                G = p([L.update(O, "utf8"), L.final()]);
            if ($.integrity) {
                const V = e("sha256", j).update(O).digest();
                return p([I, V, G])
            }
            return p([I, G])
        },
        x = $ => {
            const {
                iv: I,
                key: D,
                secret: j,
                hmacData: O
            } = C($, null), L = i("aes-256-ctr", D, I), G = p([L.update(j, "utf8"), L.final()]);
            if ($.integrity) {
                const V = e("sha256", D).update(G).digest();
                if (!c(O, V)) throw new Error("Wrong password or Wrong payload (Hmac Integrity failure) ")
            }
            return G
        },
        B = ($, I, D) => {
            const j = l(I.data),
                O = {};
            $ === "encrypt" ? O.secret = j : $ === "decrypt" && (D = f(j, 0, 8), I.integrity ? (O.hmacData = f(j, 8, 40), O.secret = f(j, 40)) : O.secret = f(j, 8));
            const L = m(I.password, D);
            return O.iv = f(L, 0, 16), O.key = f(L, 16), O
        },
        E = h(B)("encrypt"),
        C = h(B)("decrypt");
    return encrypt_1 = {
        encrypt: w,
        decrypt: x
    }, encrypt_1
}
var lzutf8 = {
        exports: {}
    },
    readableBrowser = {
        exports: {}
    },
    hasRequiredReadableBrowser;

function requireReadableBrowser() {
    return hasRequiredReadableBrowser || (hasRequiredReadableBrowser = 1, (function(a, r) {
        r = a.exports = require_stream_readable$2(), r.Stream = r, r.Readable = r, r.Writable = require_stream_writable$2(), r.Duplex = require_stream_duplex$2(), r.Transform = require_stream_transform$2(), r.PassThrough = require_stream_passthrough$2(), r.finished = requireEndOfStream(), r.pipeline = requirePipeline()
    })(readableBrowser, readableBrowser.exports)), readableBrowser.exports
}
var hasRequiredLzutf8;

function requireLzutf8() {
    return hasRequiredLzutf8 || (hasRequiredLzutf8 = 1, (function(a) {
        var r;
        (function(i) {
            i.runningInNodeJS = function() {
                return typeof process$1 == "object" && typeof process$1.versions == "object" && typeof process$1.versions.node == "string"
            }, i.runningInMainNodeJSModule = function() {
                return i.runningInNodeJS() && require.main === a
            }, i.commonJSAvailable = function() {
                return !0
            }, i.runningInWebWorker = function() {
                return typeof window > "u" && typeof self == "object" && typeof self.addEventListener == "function" && typeof self.close == "function"
            }, i.runningInNodeChildProcess = function() {
                return i.runningInNodeJS() && typeof process$1.send == "function"
            }, i.runningInNullOrigin = function() {
                return typeof window != "object" || typeof window.location != "object" || typeof document != "object" ? !1 : document.location.protocol !== "http:" && document.location.protocol !== "https:"
            }, i.webWorkersAvailable = function() {
                return !(typeof Worker != "function" || i.runningInNullOrigin() || i.runningInNodeJS() || navigator && navigator.userAgent && navigator.userAgent.indexOf("Android 4.3") >= 0)
            }, i.log = function(n, s) {
                s === void 0 && (s = !1), typeof console == "object" && (console.log(n), s && typeof document == "object" && (document.body.innerHTML += n + "<br/>"))
            }, i.createErrorMessage = function(n, s) {
                if (s === void 0 && (s = "Unhandled exception"), n == null) return s;
                if (s += ": ", typeof n.content == "object") {
                    if (i.runningInNodeJS()) return s + n.content.stack;
                    var e = JSON.stringify(n.content);
                    return e !== "{}" ? s + e : s + n.content
                } else return typeof n.content == "string" ? s + n.content : s + n
            }, i.printExceptionAndStackTraceToConsole = function(n, s) {
                s === void 0 && (s = "Unhandled exception"), i.log(i.createErrorMessage(n, s))
            }, i.getGlobalObject = function() {
                return typeof commonjsGlobal == "object" ? commonjsGlobal : typeof window == "object" ? window : typeof self == "object" ? self : {}
            }, i.toString = Object.prototype.toString, i.commonJSAvailable() && (a.exports = i)
        })(r || (r = {})), (function(i) {
            if (typeof Uint8Array == "function" && new Uint8Array(1).subarray(1).byteLength !== 0) {
                var n = function(c, l) {
                        var p = function(m, w, x) {
                            return m < w ? w : m > x ? x : m
                        };
                        c = c | 0, l = l | 0, arguments.length < 1 && (c = 0), arguments.length < 2 && (l = this.length), c < 0 && (c = this.length + c), l < 0 && (l = this.length + l), c = p(c, 0, this.length), l = p(l, 0, this.length);
                        var f = l - c;
                        return f < 0 && (f = 0), new this.constructor(this.buffer, this.byteOffset + c * this.BYTES_PER_ELEMENT, f)
                    },
                    s = ["Int8Array", "Uint8Array", "Uint8ClampedArray", "Int16Array", "Uint16Array", "Int32Array", "Uint32Array", "Float32Array", "Float64Array"],
                    e = void 0;
                if (typeof window == "object" ? e = window : typeof self == "object" && (e = self), e !== void 0)
                    for (var h = 0; h < s.length; h++) e[s[h]] && (e[s[h]].prototype.subarray = n)
            }
        })();
        var r;
        (function(i) {
            var n = (function() {
                function s() {}
                return s.compressAsync = function(e, h, c) {
                    var l = new i.Timer,
                        p = new i.Compressor;
                    if (!c) throw new TypeError("compressAsync: No callback argument given");
                    if (typeof e == "string") e = i.encodeUTF8(e);
                    else if (e == null || !(e instanceof Uint8Array)) {
                        c(void 0, new TypeError("compressAsync: Invalid input argument, only 'string' and 'Uint8Array' are supported"));
                        return
                    }
                    var f = i.ArrayTools.splitByteArray(e, h.blockSize),
                        m = [],
                        w = function(x) {
                            if (x < f.length) {
                                var B = void 0;
                                try {
                                    B = p.compressBlock(f[x])
                                } catch (C) {
                                    c(void 0, C);
                                    return
                                }
                                m.push(B), l.getElapsedTime() <= 20 ? w(x + 1) : (i.enqueueImmediate(function() {
                                    return w(x + 1)
                                }), l.restart())
                            } else {
                                var E = i.ArrayTools.concatUint8Arrays(m);
                                i.enqueueImmediate(function() {
                                    var C;
                                    try {
                                        C = i.CompressionCommon.encodeCompressedBytes(E, h.outputEncoding)
                                    } catch ($) {
                                        c(void 0, $);
                                        return
                                    }
                                    i.enqueueImmediate(function() {
                                        return c(C)
                                    })
                                })
                            }
                        };
                    i.enqueueImmediate(function() {
                        return w(0)
                    })
                }, s.createCompressionStream = function() {
                    var e = new i.Compressor,
                        h = requireReadableBrowser(),
                        c = new h.Transform({
                            decodeStrings: !0,
                            highWaterMark: 65536
                        });
                    return c._transform = function(l, p, f) {
                        var m;
                        try {
                            m = i.BufferTools.uint8ArrayToBuffer(e.compressBlock(i.BufferTools.bufferToUint8Array(l)))
                        } catch (w) {
                            c.emit("error", w);
                            return
                        }
                        c.push(m), f()
                    }, c
                }, s
            })();
            i.AsyncCompressor = n
        })(r || (r = {}));
        var r;
        (function(i) {
            var n = (function() {
                function s() {}
                return s.decompressAsync = function(e, h, c) {
                    if (!c) throw new TypeError("decompressAsync: No callback argument given");
                    var l = new i.Timer;
                    try {
                        e = i.CompressionCommon.decodeCompressedBytes(e, h.inputEncoding)
                    } catch (x) {
                        c(void 0, x);
                        return
                    }
                    var p = new i.Decompressor,
                        f = i.ArrayTools.splitByteArray(e, h.blockSize),
                        m = [],
                        w = function(x) {
                            if (x < f.length) {
                                var B = void 0;
                                try {
                                    B = p.decompressBlock(f[x])
                                } catch (C) {
                                    c(void 0, C);
                                    return
                                }
                                m.push(B), l.getElapsedTime() <= 20 ? w(x + 1) : (i.enqueueImmediate(function() {
                                    return w(x + 1)
                                }), l.restart())
                            } else {
                                var E = i.ArrayTools.concatUint8Arrays(m);
                                i.enqueueImmediate(function() {
                                    var C;
                                    try {
                                        C = i.CompressionCommon.encodeDecompressedBytes(E, h.outputEncoding)
                                    } catch ($) {
                                        c(void 0, $);
                                        return
                                    }
                                    i.enqueueImmediate(function() {
                                        return c(C)
                                    })
                                })
                            }
                        };
                    i.enqueueImmediate(function() {
                        return w(0)
                    })
                }, s.createDecompressionStream = function() {
                    var e = new i.Decompressor,
                        h = requireReadableBrowser(),
                        c = new h.Transform({
                            decodeStrings: !0,
                            highWaterMark: 65536
                        });
                    return c._transform = function(l, p, f) {
                        var m;
                        try {
                            m = i.BufferTools.uint8ArrayToBuffer(e.decompressBlock(i.BufferTools.bufferToUint8Array(l)))
                        } catch (w) {
                            c.emit("error", w);
                            return
                        }
                        c.push(m), f()
                    }, c
                }, s
            })();
            i.AsyncDecompressor = n
        })(r || (r = {}));
        var r;
        (function(i) {
            var n;
            (function(s) {
                s.compressAsync = function(e, h, c) {
                    if (h.inputEncoding == "ByteArray" && !(e instanceof Uint8Array)) {
                        c(void 0, new TypeError("compressAsync: input is not a Uint8Array"));
                        return
                    }
                    var l = {
                            token: Math.random().toString(),
                            type: "compress",
                            data: e,
                            inputEncoding: h.inputEncoding,
                            outputEncoding: h.outputEncoding
                        },
                        p = function(f) {
                            var m = f.data;
                            !m || m.token != l.token || (s.globalWorker.removeEventListener("message", p), m.type == "error" ? c(void 0, new Error(m.error)) : c(m.data))
                        };
                    s.globalWorker.addEventListener("message", p), s.globalWorker.postMessage(l, [])
                }, s.decompressAsync = function(e, h, c) {
                    var l = {
                            token: Math.random().toString(),
                            type: "decompress",
                            data: e,
                            inputEncoding: h.inputEncoding,
                            outputEncoding: h.outputEncoding
                        },
                        p = function(f) {
                            var m = f.data;
                            !m || m.token != l.token || (s.globalWorker.removeEventListener("message", p), m.type == "error" ? c(void 0, new Error(m.error)) : c(m.data))
                        };
                    s.globalWorker.addEventListener("message", p), s.globalWorker.postMessage(l, [])
                }, s.installWebWorkerIfNeeded = function() {
                    typeof self == "object" && self.document === void 0 && self.addEventListener != null && (self.addEventListener("message", function(e) {
                        var h = e.data;
                        if (h.type == "compress") {
                            var c = void 0;
                            try {
                                c = i.compress(h.data, {
                                    outputEncoding: h.outputEncoding
                                })
                            } catch (f) {
                                self.postMessage({
                                    token: h.token,
                                    type: "error",
                                    error: i.createErrorMessage(f)
                                }, []);
                                return
                            }
                            var l = {
                                token: h.token,
                                type: "compressionResult",
                                data: c,
                                encoding: h.outputEncoding
                            };
                            l.data instanceof Uint8Array && navigator.appVersion.indexOf("MSIE 10") === -1 ? self.postMessage(l, [l.data.buffer]) : self.postMessage(l, [])
                        } else if (h.type == "decompress") {
                            var p = void 0;
                            try {
                                p = i.decompress(h.data, {
                                    inputEncoding: h.inputEncoding,
                                    outputEncoding: h.outputEncoding
                                })
                            } catch (m) {
                                self.postMessage({
                                    token: h.token,
                                    type: "error",
                                    error: i.createErrorMessage(m)
                                }, []);
                                return
                            }
                            var l = {
                                token: h.token,
                                type: "decompressionResult",
                                data: p,
                                encoding: h.outputEncoding
                            };
                            l.data instanceof Uint8Array && navigator.appVersion.indexOf("MSIE 10") === -1 ? self.postMessage(l, [l.data.buffer]) : self.postMessage(l, [])
                        }
                    }), self.addEventListener("error", function(e) {
                        i.log(i.createErrorMessage(e.error, "Unexpected LZUTF8 WebWorker exception"))
                    }))
                }, s.createGlobalWorkerIfNeeded = function() {
                    if (s.globalWorker) return !0;
                    if (!i.webWorkersAvailable()) return !1;
                    if (!s.scriptURI && typeof document == "object") {
                        var e = document.getElementById("lzutf8");
                        e != null && (s.scriptURI = e.getAttribute("src") || void 0)
                    }
                    return s.scriptURI ? (s.globalWorker = new Worker(s.scriptURI), !0) : !1
                }, s.terminate = function() {
                    s.globalWorker && (s.globalWorker.terminate(), s.globalWorker = void 0)
                }
            })(n = i.WebWorker || (i.WebWorker = {})), n.installWebWorkerIfNeeded()
        })(r || (r = {}));
        var r;
        (function(i) {
            var n = (function() {
                function s(e, h, c) {
                    this.container = e, this.startPosition = h, this.length = c
                }
                return s.prototype.get = function(e) {
                    return this.container[this.startPosition + e]
                }, s.prototype.getInReversedOrder = function(e) {
                    return this.container[this.startPosition + this.length - 1 - e]
                }, s.prototype.set = function(e, h) {
                    this.container[this.startPosition + e] = h
                }, s
            })();
            i.ArraySegment = n
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                n.copyElements = function(s, e, h, c, l) {
                    for (; l--;) h[c++] = s[e++]
                }, n.zeroElements = function(s, e, h) {
                    for (; h--;) s[e++] = 0
                }, n.countNonzeroValuesInArray = function(s) {
                    for (var e = 0, h = 0; h < s.length; h++) s[h] && e++;
                    return e
                }, n.truncateStartingElements = function(s, e) {
                    if (s.length <= e) throw new RangeError("truncateStartingElements: Requested length should be smaller than array length");
                    for (var h = s.length - e, c = 0; c < e; c++) s[c] = s[h + c];
                    s.length = e
                }, n.doubleByteArrayCapacity = function(s) {
                    var e = new Uint8Array(s.length * 2);
                    return e.set(s), e
                }, n.concatUint8Arrays = function(s) {
                    for (var e = 0, h = 0, c = s; h < c.length; h++) {
                        var l = c[h];
                        e += l.length
                    }
                    for (var p = new Uint8Array(e), f = 0, m = 0, w = s; m < w.length; m++) {
                        var l = w[m];
                        p.set(l, f), f += l.length
                    }
                    return p
                }, n.splitByteArray = function(s, e) {
                    for (var h = [], c = 0; c < s.length;) {
                        var l = Math.min(e, s.length - c);
                        h.push(s.subarray(c, c + l)), c += l
                    }
                    return h
                }
            })(i.ArrayTools || (i.ArrayTools = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                n.convertToUint8ArrayIfNeeded = function(s) {
                    return typeof Buffer == "function" && Buffer.isBuffer(s) ? n.bufferToUint8Array(s) : s
                }, n.uint8ArrayToBuffer = function(s) {
                    if (Buffer.prototype instanceof Uint8Array) {
                        var e = new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
                        return Object.setPrototypeOf(e, Buffer.prototype), e
                    } else {
                        for (var h = s.length, c = new Buffer(h), l = 0; l < h; l++) c[l] = s[l];
                        return c
                    }
                }, n.bufferToUint8Array = function(s) {
                    if (Buffer.prototype instanceof Uint8Array) return new Uint8Array(s.buffer, s.byteOffset, s.byteLength);
                    for (var e = s.length, h = new Uint8Array(e), c = 0; c < e; c++) h[c] = s[c];
                    return h
                }
            })(i.BufferTools || (i.BufferTools = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                n.getCroppedBuffer = function(s, e, h, c) {
                    c === void 0 && (c = 0);
                    var l = new Uint8Array(h + c);
                    return l.set(s.subarray(e, e + h)), l
                }, n.getCroppedAndAppendedByteArray = function(s, e, h, c) {
                    return i.ArrayTools.concatUint8Arrays([s.subarray(e, e + h), c])
                }, n.detectCompressionSourceEncoding = function(s) {
                    if (s == null) throw new TypeError("detectCompressionSourceEncoding: input is null or undefined");
                    if (typeof s == "string") return "String";
                    if (s instanceof Uint8Array || typeof Buffer == "function" && Buffer.isBuffer(s)) return "ByteArray";
                    throw new TypeError("detectCompressionSourceEncoding: input must be of type 'string', 'Uint8Array' or 'Buffer'")
                }, n.encodeCompressedBytes = function(s, e) {
                    switch (e) {
                        case "ByteArray":
                            return s;
                        case "Buffer":
                            return i.BufferTools.uint8ArrayToBuffer(s);
                        case "Base64":
                            return i.encodeBase64(s);
                        case "BinaryString":
                            return i.encodeBinaryString(s);
                        case "StorageBinaryString":
                            return i.encodeStorageBinaryString(s);
                        default:
                            throw new TypeError("encodeCompressedBytes: invalid output encoding requested")
                    }
                }, n.decodeCompressedBytes = function(s, e) {
                    if (e == null) throw new TypeError("decodeCompressedData: Input is null or undefined");
                    switch (e) {
                        case "ByteArray":
                        case "Buffer":
                            var h = i.BufferTools.convertToUint8ArrayIfNeeded(s);
                            if (!(h instanceof Uint8Array)) throw new TypeError("decodeCompressedData: 'ByteArray' or 'Buffer' input type was specified but input is not a Uint8Array or Buffer");
                            return h;
                        case "Base64":
                            if (typeof s != "string") throw new TypeError("decodeCompressedData: 'Base64' input type was specified but input is not a string");
                            return i.decodeBase64(s);
                        case "BinaryString":
                            if (typeof s != "string") throw new TypeError("decodeCompressedData: 'BinaryString' input type was specified but input is not a string");
                            return i.decodeBinaryString(s);
                        case "StorageBinaryString":
                            if (typeof s != "string") throw new TypeError("decodeCompressedData: 'StorageBinaryString' input type was specified but input is not a string");
                            return i.decodeStorageBinaryString(s);
                        default:
                            throw new TypeError("decodeCompressedData: invalid input encoding requested: '" + e + "'")
                    }
                }, n.encodeDecompressedBytes = function(s, e) {
                    switch (e) {
                        case "String":
                            return i.decodeUTF8(s);
                        case "ByteArray":
                            return s;
                        case "Buffer":
                            if (typeof Buffer != "function") throw new TypeError("encodeDecompressedBytes: a 'Buffer' type was specified but is not supported at the current envirnment");
                            return i.BufferTools.uint8ArrayToBuffer(s);
                        default:
                            throw new TypeError("encodeDecompressedBytes: invalid output encoding requested")
                    }
                }
            })(i.CompressionCommon || (i.CompressionCommon = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            var n;
            (function(s) {
                var e = [],
                    h;
                s.enqueueImmediate = function(c) {
                    e.push(c), e.length === 1 && h()
                }, s.initializeScheduler = function() {
                    var c = function() {
                        for (var m = 0, w = e; m < w.length; m++) {
                            var x = w[m];
                            try {
                                x.call(void 0)
                            } catch (B) {
                                i.printExceptionAndStackTraceToConsole(B, "enqueueImmediate exception")
                            }
                        }
                        e.length = 0
                    };
                    if (i.runningInNodeJS() && (h = function() {
                            return setImmediate(function() {
                                return c()
                            })
                        }), typeof window == "object" && typeof window.addEventListener == "function" && typeof window.postMessage == "function") {
                        var l = "enqueueImmediate-" + Math.random().toString();
                        window.addEventListener("message", function(m) {
                            m.data === l && c()
                        });
                        var p;
                        i.runningInNullOrigin() ? p = "*" : p = window.location.href, h = function() {
                            return window.postMessage(l, p)
                        }
                    } else if (typeof MessageChannel == "function" && typeof MessagePort == "function") {
                        var f = new MessageChannel;
                        f.port1.onmessage = function() {
                            return c()
                        }, h = function() {
                            return f.port2.postMessage(0)
                        }
                    } else h = function() {
                        return setTimeout(function() {
                            return c()
                        }, 0)
                    }
                }, s.initializeScheduler()
            })(n = i.EventLoop || (i.EventLoop = {})), i.enqueueImmediate = function(s) {
                return n.enqueueImmediate(s)
            }
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                n.override = function(s, e) {
                    return n.extend(s, e)
                }, n.extend = function(s, e) {
                    if (s == null) throw new TypeError("obj is null or undefined");
                    if (typeof s != "object") throw new TypeError("obj is not an object");
                    if (e == null && (e = {}), typeof e != "object") throw new TypeError("newProperties is not an object");
                    if (e != null)
                        for (var h in e) s[h] = e[h];
                    return s
                }
            })(i.ObjectTools || (i.ObjectTools = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            i.getRandomIntegerInRange = function(n, s) {
                return n + Math.floor(Math.random() * (s - n))
            }, i.getRandomUTF16StringOfLength = function(n) {
                for (var s = "", e = 0; e < n; e++) {
                    var h = void 0;
                    do h = i.getRandomIntegerInRange(0, 1114112); while (h >= 55296 && h <= 57343);
                    s += i.Encoding.CodePoint.decodeToString(h)
                }
                return s
            }
        })(r || (r = {}));
        var r;
        (function(i) {
            var n = (function() {
                function s(e) {
                    e === void 0 && (e = 1024), this.outputBufferCapacity = e, this.outputPosition = 0, this.outputString = "", this.outputBuffer = new Uint16Array(this.outputBufferCapacity)
                }
                return s.prototype.appendCharCode = function(e) {
                    this.outputBuffer[this.outputPosition++] = e, this.outputPosition === this.outputBufferCapacity && this.flushBufferToOutputString()
                }, s.prototype.appendCharCodes = function(e) {
                    for (var h = 0, c = e.length; h < c; h++) this.appendCharCode(e[h])
                }, s.prototype.appendString = function(e) {
                    for (var h = 0, c = e.length; h < c; h++) this.appendCharCode(e.charCodeAt(h))
                }, s.prototype.appendCodePoint = function(e) {
                    if (e <= 65535) this.appendCharCode(e);
                    else if (e <= 1114111) this.appendCharCode(55296 + (e - 65536 >>> 10)), this.appendCharCode(56320 + (e - 65536 & 1023));
                    else throw new Error("appendCodePoint: A code point of " + e + " cannot be encoded in UTF-16")
                }, s.prototype.getOutputString = function() {
                    return this.flushBufferToOutputString(), this.outputString
                }, s.prototype.flushBufferToOutputString = function() {
                    this.outputPosition === this.outputBufferCapacity ? this.outputString += String.fromCharCode.apply(null, this.outputBuffer) : this.outputString += String.fromCharCode.apply(null, this.outputBuffer.subarray(0, this.outputPosition)), this.outputPosition = 0
                }, s
            })();
            i.StringBuilder = n
        })(r || (r = {}));
        var r;
        (function(i) {
            var n = (function() {
                function s() {
                    this.restart()
                }
                return s.prototype.restart = function() {
                    this.startTime = s.getTimestamp()
                }, s.prototype.getElapsedTime = function() {
                    return s.getTimestamp() - this.startTime
                }, s.prototype.getElapsedTimeAndRestart = function() {
                    var e = this.getElapsedTime();
                    return this.restart(), e
                }, s.prototype.logAndRestart = function(e, h) {
                    h === void 0 && (h = !0);
                    var c = this.getElapsedTime(),
                        l = e + ": " + c.toFixed(3) + "ms";
                    return i.log(l, h), this.restart(), c
                }, s.getTimestamp = function() {
                    return this.timestampFunc || this.createGlobalTimestampFunction(), this.timestampFunc()
                }, s.getMicrosecondTimestamp = function() {
                    return Math.floor(s.getTimestamp() * 1e3)
                }, s.createGlobalTimestampFunction = function() {
                    if (typeof process$1 == "object" && typeof process$1.hrtime == "function") {
                        var e = 0;
                        this.timestampFunc = function() {
                            var p = process$1.hrtime(),
                                f = p[0] * 1e3 + p[1] / 1e6;
                            return e + f
                        }, e = Date.now() - this.timestampFunc()
                    } else if (typeof chrome == "object" && chrome.Interval) {
                        var h = Date.now(),
                            c = new chrome.Interval;
                        c.start(), this.timestampFunc = function() {
                            return h + c.microseconds() / 1e3
                        }
                    } else if (typeof performance == "object" && performance.now) {
                        var l = Date.now() - performance.now();
                        this.timestampFunc = function() {
                            return l + performance.now()
                        }
                    } else Date.now ? this.timestampFunc = function() {
                        return Date.now()
                    } : this.timestampFunc = function() {
                        return new Date().getTime()
                    }
                }, s
            })();
            i.Timer = n
        })(r || (r = {}));
        var r;
        (function(i) {
            var n = (function() {
                function s(e) {
                    e === void 0 && (e = !0), this.MinimumSequenceLength = 4, this.MaximumSequenceLength = 31, this.MaximumMatchDistance = 32767, this.PrefixHashTableSize = 65537, this.inputBufferStreamOffset = 1, e && typeof Uint32Array == "function" ? this.prefixHashTable = new i.CompressorCustomHashTable(this.PrefixHashTableSize) : this.prefixHashTable = new i.CompressorSimpleHashTable(this.PrefixHashTableSize)
                }
                return s.prototype.compressBlock = function(e) {
                    if (e == null) throw new TypeError("compressBlock: undefined or null input received");
                    return typeof e == "string" && (e = i.encodeUTF8(e)), e = i.BufferTools.convertToUint8ArrayIfNeeded(e), this.compressUtf8Block(e)
                }, s.prototype.compressUtf8Block = function(e) {
                    if (!e || e.length == 0) return new Uint8Array(0);
                    var h = this.cropAndAddNewBytesToInputBuffer(e),
                        c = this.inputBuffer,
                        l = this.inputBuffer.length;
                    this.outputBuffer = new Uint8Array(e.length), this.outputBufferPosition = 0;
                    for (var p = 0, f = h; f < l; f++) {
                        var m = c[f],
                            w = f < p;
                        if (f > l - this.MinimumSequenceLength) {
                            w || this.outputRawByte(m);
                            continue
                        }
                        var x = this.getBucketIndexForPrefix(f);
                        if (!w) {
                            var B = this.findLongestMatch(f, x);
                            B != null && (this.outputPointerBytes(B.length, B.distance), p = f + B.length, w = !0)
                        }
                        w || this.outputRawByte(m);
                        var E = this.inputBufferStreamOffset + f;
                        this.prefixHashTable.addValueToBucket(x, E)
                    }
                    return this.outputBuffer.subarray(0, this.outputBufferPosition)
                }, s.prototype.findLongestMatch = function(e, h) {
                    var c = this.prefixHashTable.getArraySegmentForBucketIndex(h, this.reusableArraySegmentObject);
                    if (c == null) return null;
                    for (var l = this.inputBuffer, p, f = 0, m = 0; m < c.length; m++) {
                        var w = c.getInReversedOrder(m) - this.inputBufferStreamOffset,
                            x = e - w,
                            B = void 0;
                        if (p === void 0 ? B = this.MinimumSequenceLength - 1 : p < 128 && x >= 128 ? B = f + (f >>> 1) : B = f, x > this.MaximumMatchDistance || B >= this.MaximumSequenceLength || e + B >= l.length) break;
                        if (l[w + B] === l[e + B]) {
                            for (var E = 0;; E++)
                                if (e + E === l.length || l[w + E] !== l[e + E]) {
                                    E > B && (p = x, f = E);
                                    break
                                } else if (E === this.MaximumSequenceLength) return {
                                distance: x,
                                length: this.MaximumSequenceLength
                            }
                        }
                    }
                    return p !== void 0 ? {
                        distance: p,
                        length: f
                    } : null
                }, s.prototype.getBucketIndexForPrefix = function(e) {
                    return (this.inputBuffer[e] * 7880599 + this.inputBuffer[e + 1] * 39601 + this.inputBuffer[e + 2] * 199 + this.inputBuffer[e + 3]) % this.PrefixHashTableSize
                }, s.prototype.outputPointerBytes = function(e, h) {
                    h < 128 ? (this.outputRawByte(192 | e), this.outputRawByte(h)) : (this.outputRawByte(224 | e), this.outputRawByte(h >>> 8), this.outputRawByte(h & 255))
                }, s.prototype.outputRawByte = function(e) {
                    this.outputBuffer[this.outputBufferPosition++] = e
                }, s.prototype.cropAndAddNewBytesToInputBuffer = function(e) {
                    if (this.inputBuffer === void 0) return this.inputBuffer = e, 0;
                    var h = Math.min(this.inputBuffer.length, this.MaximumMatchDistance),
                        c = this.inputBuffer.length - h;
                    return this.inputBuffer = i.CompressionCommon.getCroppedAndAppendedByteArray(this.inputBuffer, c, h, e), this.inputBufferStreamOffset += c, h
                }, s
            })();
            i.Compressor = n
        })(r || (r = {}));
        var r;
        (function(i) {
            var n = (function() {
                function s(e) {
                    this.minimumBucketCapacity = 4, this.maximumBucketCapacity = 64, this.bucketLocators = new Uint32Array(e * 2), this.storage = new Uint32Array(e * 2), this.storageIndex = 1
                }
                return s.prototype.addValueToBucket = function(e, h) {
                    e <<= 1, this.storageIndex >= this.storage.length >>> 1 && this.compact();
                    var c = this.bucketLocators[e],
                        l;
                    if (c === 0) c = this.storageIndex, l = 1, this.storage[this.storageIndex] = h, this.storageIndex += this.minimumBucketCapacity;
                    else {
                        l = this.bucketLocators[e + 1], l === this.maximumBucketCapacity - 1 && (l = this.truncateBucketToNewerElements(c, l, this.maximumBucketCapacity / 2));
                        var p = c + l;
                        this.storage[p] === 0 ? (this.storage[p] = h, p === this.storageIndex && (this.storageIndex += l)) : (i.ArrayTools.copyElements(this.storage, c, this.storage, this.storageIndex, l), c = this.storageIndex, this.storageIndex += l, this.storage[this.storageIndex++] = h, this.storageIndex += l), l++
                    }
                    this.bucketLocators[e] = c, this.bucketLocators[e + 1] = l
                }, s.prototype.truncateBucketToNewerElements = function(e, h, c) {
                    var l = e + h - c;
                    return i.ArrayTools.copyElements(this.storage, l, this.storage, e, c), i.ArrayTools.zeroElements(this.storage, e + c, h - c), c
                }, s.prototype.compact = function() {
                    var e = this.bucketLocators,
                        h = this.storage;
                    this.bucketLocators = new Uint32Array(this.bucketLocators.length), this.storageIndex = 1;
                    for (var c = 0; c < e.length; c += 2) {
                        var l = e[c + 1];
                        l !== 0 && (this.bucketLocators[c] = this.storageIndex, this.bucketLocators[c + 1] = l, this.storageIndex += Math.max(Math.min(l * 2, this.maximumBucketCapacity), this.minimumBucketCapacity))
                    }
                    this.storage = new Uint32Array(this.storageIndex * 8);
                    for (var c = 0; c < e.length; c += 2) {
                        var p = e[c];
                        if (p !== 0) {
                            var f = this.bucketLocators[c],
                                m = this.bucketLocators[c + 1];
                            i.ArrayTools.copyElements(h, p, this.storage, f, m)
                        }
                    }
                }, s.prototype.getArraySegmentForBucketIndex = function(e, h) {
                    e <<= 1;
                    var c = this.bucketLocators[e];
                    return c === 0 ? null : (h === void 0 && (h = new i.ArraySegment(this.storage, c, this.bucketLocators[e + 1])), h)
                }, s.prototype.getUsedBucketCount = function() {
                    return Math.floor(i.ArrayTools.countNonzeroValuesInArray(this.bucketLocators) / 2)
                }, s.prototype.getTotalElementCount = function() {
                    for (var e = 0, h = 0; h < this.bucketLocators.length; h += 2) e += this.bucketLocators[h + 1];
                    return e
                }, s
            })();
            i.CompressorCustomHashTable = n
        })(r || (r = {}));
        var r;
        (function(i) {
            var n = (function() {
                function s(e) {
                    this.maximumBucketCapacity = 64, this.buckets = new Array(e)
                }
                return s.prototype.addValueToBucket = function(e, h) {
                    var c = this.buckets[e];
                    c === void 0 ? this.buckets[e] = [h] : (c.length === this.maximumBucketCapacity - 1 && i.ArrayTools.truncateStartingElements(c, this.maximumBucketCapacity / 2), c.push(h))
                }, s.prototype.getArraySegmentForBucketIndex = function(e, h) {
                    var c = this.buckets[e];
                    return c === void 0 ? null : (h === void 0 && (h = new i.ArraySegment(c, 0, c.length)), h)
                }, s.prototype.getUsedBucketCount = function() {
                    return i.ArrayTools.countNonzeroValuesInArray(this.buckets)
                }, s.prototype.getTotalElementCount = function() {
                    for (var e = 0, h = 0; h < this.buckets.length; h++) this.buckets[h] !== void 0 && (e += this.buckets[h].length);
                    return e
                }, s
            })();
            i.CompressorSimpleHashTable = n
        })(r || (r = {}));
        var r;
        (function(i) {
            var n = (function() {
                function s() {
                    this.MaximumMatchDistance = 32767, this.outputPosition = 0
                }
                return s.prototype.decompressBlockToString = function(e) {
                    return e = i.BufferTools.convertToUint8ArrayIfNeeded(e), i.decodeUTF8(this.decompressBlock(e))
                }, s.prototype.decompressBlock = function(e) {
                    this.inputBufferRemainder && (e = i.ArrayTools.concatUint8Arrays([this.inputBufferRemainder, e]), this.inputBufferRemainder = void 0);
                    for (var h = this.cropOutputBufferToWindowAndInitialize(Math.max(e.length * 4, 1024)), c = 0, l = e.length; c < l; c++) {
                        var p = e[c];
                        if (p >>> 6 != 3) {
                            this.outputByte(p);
                            continue
                        }
                        var f = p >>> 5;
                        if (c == l - 1 || c == l - 2 && f == 7) {
                            this.inputBufferRemainder = e.subarray(c);
                            break
                        }
                        if (e[c + 1] >>> 7 === 1) this.outputByte(p);
                        else {
                            var m = p & 31,
                                w = void 0;
                            f == 6 ? (w = e[c + 1], c += 1) : (w = e[c + 1] << 8 | e[c + 2], c += 2);
                            for (var x = this.outputPosition - w, B = 0; B < m; B++) this.outputByte(this.outputBuffer[x + B])
                        }
                    }
                    return this.rollBackIfOutputBufferEndsWithATruncatedMultibyteSequence(), i.CompressionCommon.getCroppedBuffer(this.outputBuffer, h, this.outputPosition - h)
                }, s.prototype.outputByte = function(e) {
                    this.outputPosition === this.outputBuffer.length && (this.outputBuffer = i.ArrayTools.doubleByteArrayCapacity(this.outputBuffer)), this.outputBuffer[this.outputPosition++] = e
                }, s.prototype.cropOutputBufferToWindowAndInitialize = function(e) {
                    if (!this.outputBuffer) return this.outputBuffer = new Uint8Array(e), 0;
                    var h = Math.min(this.outputPosition, this.MaximumMatchDistance);
                    if (this.outputBuffer = i.CompressionCommon.getCroppedBuffer(this.outputBuffer, this.outputPosition - h, h, e), this.outputPosition = h, this.outputBufferRemainder) {
                        for (var c = 0; c < this.outputBufferRemainder.length; c++) this.outputByte(this.outputBufferRemainder[c]);
                        this.outputBufferRemainder = void 0
                    }
                    return h
                }, s.prototype.rollBackIfOutputBufferEndsWithATruncatedMultibyteSequence = function() {
                    for (var e = 1; e <= 4 && this.outputPosition - e >= 0; e++) {
                        var h = this.outputBuffer[this.outputPosition - e];
                        if (e < 4 && h >>> 3 === 30 || e < 3 && h >>> 4 === 14 || e < 2 && h >>> 5 === 6) {
                            this.outputBufferRemainder = this.outputBuffer.subarray(this.outputPosition - e, this.outputPosition), this.outputPosition -= e;
                            return
                        }
                    }
                }, s
            })();
            i.Decompressor = n
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                (function(s) {
                    var e = new Uint8Array([65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 43, 47]),
                        h = new Uint8Array([255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 255, 62, 255, 255, 255, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 255, 255, 255, 0, 255, 255, 255, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 255, 255, 255, 255, 255, 255, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 255, 255, 255, 255]),
                        c = "=",
                        l = 61;
                    s.encode = function(p) {
                        return !p || p.length == 0 ? "" : i.runningInNodeJS() ? i.BufferTools.uint8ArrayToBuffer(p).toString("base64") : s.encodeWithJS(p)
                    }, s.decode = function(p) {
                        return p ? i.runningInNodeJS() ? i.BufferTools.bufferToUint8Array(Buffer.from(p, "base64")) : s.decodeWithJS(p) : new Uint8Array(0)
                    }, s.encodeWithJS = function(p, f) {
                        if (f === void 0 && (f = !0), !p || p.length == 0) return "";
                        for (var m = e, w = new i.StringBuilder, x, B = 0, E = p.length; B < E; B += 3) B <= E - 3 ? (x = p[B] << 16 | p[B + 1] << 8 | p[B + 2], w.appendCharCode(m[x >>> 18 & 63]), w.appendCharCode(m[x >>> 12 & 63]), w.appendCharCode(m[x >>> 6 & 63]), w.appendCharCode(m[x & 63]), x = 0) : B === E - 2 ? (x = p[B] << 16 | p[B + 1] << 8, w.appendCharCode(m[x >>> 18 & 63]), w.appendCharCode(m[x >>> 12 & 63]), w.appendCharCode(m[x >>> 6 & 63]), f && w.appendCharCode(l)) : B === E - 1 && (x = p[B] << 16, w.appendCharCode(m[x >>> 18 & 63]), w.appendCharCode(m[x >>> 12 & 63]), f && (w.appendCharCode(l), w.appendCharCode(l)));
                        return w.getOutputString()
                    }, s.decodeWithJS = function(p, f) {
                        if (!p || p.length == 0) return new Uint8Array(0);
                        var m = p.length % 4;
                        if (m === 1) throw new Error("Invalid Base64 string: length % 4 == 1");
                        m === 2 ? p += c + c : m === 3 && (p += c), f || (f = new Uint8Array(p.length));
                        for (var w = 0, x = p.length, B = 0; B < x; B += 4) {
                            var E = h[p.charCodeAt(B)] << 18 | h[p.charCodeAt(B + 1)] << 12 | h[p.charCodeAt(B + 2)] << 6 | h[p.charCodeAt(B + 3)];
                            f[w++] = E >>> 16 & 255, f[w++] = E >>> 8 & 255, f[w++] = E & 255
                        }
                        return p.charCodeAt(x - 1) == l && w--, p.charCodeAt(x - 2) == l && w--, f.subarray(0, w)
                    }
                })(n.Base64 || (n.Base64 = {}))
            })(i.Encoding || (i.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                (function(s) {
                    s.encode = function(e) {
                        if (e == null) throw new TypeError("BinaryString.encode: undefined or null input received");
                        if (e.length === 0) return "";
                        for (var h = e.length, c = new i.StringBuilder, l = 0, p = 1, f = 0; f < h; f += 2) {
                            var m = void 0;
                            f == h - 1 ? m = e[f] << 8 : m = e[f] << 8 | e[f + 1], c.appendCharCode(l << 16 - p | m >>> p), l = m & (1 << p) - 1, p === 15 ? (c.appendCharCode(l), l = 0, p = 1) : p += 1, f >= h - 2 && c.appendCharCode(l << 16 - p)
                        }
                        return c.appendCharCode(32768 | h % 2), c.getOutputString()
                    }, s.decode = function(e) {
                        if (typeof e != "string") throw new TypeError("BinaryString.decode: invalid input type");
                        if (e == "") return new Uint8Array(0);
                        for (var h = new Uint8Array(e.length * 3), c = 0, l = function(x) {
                                h[c++] = x >>> 8, h[c++] = x & 255
                            }, p = 0, f = 0, m = 0; m < e.length; m++) {
                            var w = e.charCodeAt(m);
                            if (w >= 32768) {
                                w == 32769 && c--, f = 0;
                                continue
                            }
                            f == 0 ? p = w : (l(p << f | w >>> 15 - f), p = w & (1 << 15 - f) - 1), f == 15 ? f = 0 : f += 1
                        }
                        return h.subarray(0, c)
                    }
                })(n.BinaryString || (n.BinaryString = {}))
            })(i.Encoding || (i.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                (function(s) {
                    s.encodeFromString = function(e, h) {
                        var c = e.charCodeAt(h);
                        if (c < 55296 || c > 56319) return c;
                        var l = e.charCodeAt(h + 1);
                        if (l >= 56320 && l <= 57343) return 65536 + ((c - 55296 << 10) + (l - 56320));
                        throw new Error("getUnicodeCodePoint: Received a lead surrogate character, char code " + c + ", followed by " + l + ", which is not a trailing surrogate character code.")
                    }, s.decodeToString = function(e) {
                        if (e <= 65535) return String.fromCharCode(e);
                        if (e <= 1114111) return String.fromCharCode(55296 + (e - 65536 >>> 10), 56320 + (e - 65536 & 1023));
                        throw new Error("getStringFromUnicodeCodePoint: A code point of " + e + " cannot be encoded in UTF-16")
                    }
                })(n.CodePoint || (n.CodePoint = {}))
            })(i.Encoding || (i.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                (function(s) {
                    var e = ["000", "001", "002", "003", "004", "005", "006", "007", "008", "009", "010", "011", "012", "013", "014", "015", "016", "017", "018", "019", "020", "021", "022", "023", "024", "025", "026", "027", "028", "029", "030", "031", "032", "033", "034", "035", "036", "037", "038", "039", "040", "041", "042", "043", "044", "045", "046", "047", "048", "049", "050", "051", "052", "053", "054", "055", "056", "057", "058", "059", "060", "061", "062", "063", "064", "065", "066", "067", "068", "069", "070", "071", "072", "073", "074", "075", "076", "077", "078", "079", "080", "081", "082", "083", "084", "085", "086", "087", "088", "089", "090", "091", "092", "093", "094", "095", "096", "097", "098", "099", "100", "101", "102", "103", "104", "105", "106", "107", "108", "109", "110", "111", "112", "113", "114", "115", "116", "117", "118", "119", "120", "121", "122", "123", "124", "125", "126", "127", "128", "129", "130", "131", "132", "133", "134", "135", "136", "137", "138", "139", "140", "141", "142", "143", "144", "145", "146", "147", "148", "149", "150", "151", "152", "153", "154", "155", "156", "157", "158", "159", "160", "161", "162", "163", "164", "165", "166", "167", "168", "169", "170", "171", "172", "173", "174", "175", "176", "177", "178", "179", "180", "181", "182", "183", "184", "185", "186", "187", "188", "189", "190", "191", "192", "193", "194", "195", "196", "197", "198", "199", "200", "201", "202", "203", "204", "205", "206", "207", "208", "209", "210", "211", "212", "213", "214", "215", "216", "217", "218", "219", "220", "221", "222", "223", "224", "225", "226", "227", "228", "229", "230", "231", "232", "233", "234", "235", "236", "237", "238", "239", "240", "241", "242", "243", "244", "245", "246", "247", "248", "249", "250", "251", "252", "253", "254", "255"];
                    s.encode = function(h) {
                        for (var c = [], l = 0; l < h.length; l++) c.push(e[h[l]]);
                        return c.join(" ")
                    }
                })(n.DecimalString || (n.DecimalString = {}))
            })(i.Encoding || (i.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                (function(s) {
                    s.encode = function(e) {
                        return n.BinaryString.encode(e).replace(/\0/g, "耂")
                    }, s.decode = function(e) {
                        return n.BinaryString.decode(e.replace(/\u8002/g, "\0"))
                    }
                })(n.StorageBinaryString || (n.StorageBinaryString = {}))
            })(i.Encoding || (i.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            (function(n) {
                (function(s) {
                    var e, h;
                    s.encode = function(c) {
                        return !c || c.length == 0 ? new Uint8Array(0) : i.runningInNodeJS() ? i.BufferTools.bufferToUint8Array(Buffer.from(c, "utf8")) : s.createNativeTextEncoderAndDecoderIfAvailable() ? e.encode(c) : s.encodeWithJS(c)
                    }, s.decode = function(c) {
                        return !c || c.length == 0 ? "" : i.runningInNodeJS() ? i.BufferTools.uint8ArrayToBuffer(c).toString("utf8") : s.createNativeTextEncoderAndDecoderIfAvailable() ? h.decode(c) : s.decodeWithJS(c)
                    }, s.encodeWithJS = function(c, l) {
                        if (!c || c.length == 0) return new Uint8Array(0);
                        l || (l = new Uint8Array(c.length * 4));
                        for (var p = 0, f = 0; f < c.length; f++) {
                            var m = n.CodePoint.encodeFromString(c, f);
                            if (m <= 127) l[p++] = m;
                            else if (m <= 2047) l[p++] = 192 | m >>> 6, l[p++] = 128 | m & 63;
                            else if (m <= 65535) l[p++] = 224 | m >>> 12, l[p++] = 128 | m >>> 6 & 63, l[p++] = 128 | m & 63;
                            else if (m <= 1114111) l[p++] = 240 | m >>> 18, l[p++] = 128 | m >>> 12 & 63, l[p++] = 128 | m >>> 6 & 63, l[p++] = 128 | m & 63, f++;
                            else throw new Error("Invalid UTF-16 string: Encountered a character unsupported by UTF-8/16 (RFC 3629)")
                        }
                        return l.subarray(0, p)
                    }, s.decodeWithJS = function(c, l, p) {
                        if (l === void 0 && (l = 0), !c || c.length == 0) return "";
                        p === void 0 && (p = c.length);
                        for (var f = new i.StringBuilder, m, w, x = l, B = p; x < B;) {
                            if (w = c[x], !(w >>> 7)) m = w, x += 1;
                            else if (w >>> 5 === 6) {
                                if (x + 1 >= p) throw new Error("Invalid UTF-8 stream: Truncated codepoint sequence encountered at position " + x);
                                m = (w & 31) << 6 | c[x + 1] & 63, x += 2
                            } else if (w >>> 4 === 14) {
                                if (x + 2 >= p) throw new Error("Invalid UTF-8 stream: Truncated codepoint sequence encountered at position " + x);
                                m = (w & 15) << 12 | (c[x + 1] & 63) << 6 | c[x + 2] & 63, x += 3
                            } else if (w >>> 3 === 30) {
                                if (x + 3 >= p) throw new Error("Invalid UTF-8 stream: Truncated codepoint sequence encountered at position " + x);
                                m = (w & 7) << 18 | (c[x + 1] & 63) << 12 | (c[x + 2] & 63) << 6 | c[x + 3] & 63, x += 4
                            } else throw new Error("Invalid UTF-8 stream: An invalid lead byte value encountered at position " + x);
                            f.appendCodePoint(m)
                        }
                        return f.getOutputString()
                    }, s.createNativeTextEncoderAndDecoderIfAvailable = function() {
                        return e ? !0 : typeof TextEncoder == "function" ? (e = new TextEncoder("utf-8"), h = new TextDecoder("utf-8"), !0) : !1
                    }
                })(n.UTF8 || (n.UTF8 = {}))
            })(i.Encoding || (i.Encoding = {}))
        })(r || (r = {}));
        var r;
        (function(i) {
            function n($, I) {
                if (I === void 0 && (I = {}), $ == null) throw new TypeError("compress: undefined or null input received");
                var D = i.CompressionCommon.detectCompressionSourceEncoding($);
                I = i.ObjectTools.override({
                    inputEncoding: D,
                    outputEncoding: "ByteArray"
                }, I);
                var j = new i.Compressor,
                    O = j.compressBlock($);
                return i.CompressionCommon.encodeCompressedBytes(O, I.outputEncoding)
            }
            i.compress = n;

            function s($, I) {
                if (I === void 0 && (I = {}), $ == null) throw new TypeError("decompress: undefined or null input received");
                I = i.ObjectTools.override({
                    inputEncoding: "ByteArray",
                    outputEncoding: "String"
                }, I);
                var D = i.CompressionCommon.decodeCompressedBytes($, I.inputEncoding),
                    j = new i.Decompressor,
                    O = j.decompressBlock(D);
                return i.CompressionCommon.encodeDecompressedBytes(O, I.outputEncoding)
            }
            i.decompress = s;

            function e($, I, D) {
                D == null && (D = function() {});
                var j;
                try {
                    j = i.CompressionCommon.detectCompressionSourceEncoding($)
                } catch (O) {
                    D(void 0, O);
                    return
                }
                I = i.ObjectTools.override({
                    inputEncoding: j,
                    outputEncoding: "ByteArray",
                    useWebWorker: !0,
                    blockSize: 65536
                }, I), i.enqueueImmediate(function() {
                    I.useWebWorker && i.WebWorker.createGlobalWorkerIfNeeded() ? i.WebWorker.compressAsync($, I, D) : i.AsyncCompressor.compressAsync($, I, D)
                })
            }
            i.compressAsync = e;

            function h($, I, D) {
                if (D == null && (D = function() {}), $ == null) {
                    D(void 0, new TypeError("decompressAsync: undefined or null input received"));
                    return
                }
                I = i.ObjectTools.override({
                    inputEncoding: "ByteArray",
                    outputEncoding: "String",
                    useWebWorker: !0,
                    blockSize: 65536
                }, I);
                var j = i.BufferTools.convertToUint8ArrayIfNeeded($);
                i.EventLoop.enqueueImmediate(function() {
                    I.useWebWorker && i.WebWorker.createGlobalWorkerIfNeeded() ? i.WebWorker.decompressAsync(j, I, D) : i.AsyncDecompressor.decompressAsync($, I, D)
                })
            }
            i.decompressAsync = h;

            function c() {
                return i.AsyncCompressor.createCompressionStream()
            }
            i.createCompressionStream = c;

            function l() {
                return i.AsyncDecompressor.createDecompressionStream()
            }
            i.createDecompressionStream = l;

            function p($) {
                return i.Encoding.UTF8.encode($)
            }
            i.encodeUTF8 = p;

            function f($) {
                return i.Encoding.UTF8.decode($)
            }
            i.decodeUTF8 = f;

            function m($) {
                return i.Encoding.Base64.encode($)
            }
            i.encodeBase64 = m;

            function w($) {
                return i.Encoding.Base64.decode($)
            }
            i.decodeBase64 = w;

            function x($) {
                return i.Encoding.BinaryString.encode($)
            }
            i.encodeBinaryString = x;

            function B($) {
                return i.Encoding.BinaryString.decode($)
            }
            i.decodeBinaryString = B;

            function E($) {
                return i.Encoding.StorageBinaryString.encode($)
            }
            i.encodeStorageBinaryString = E;

            function C($) {
                return i.Encoding.StorageBinaryString.decode($)
            }
            i.decodeStorageBinaryString = C
        })(r || (r = {}))
    })(lzutf8)), lzutf8.exports
}
var compact, hasRequiredCompact;

function requireCompact() {
    if (hasRequiredCompact) return compact;
    hasRequiredCompact = 1;
    const {
        pipe: a,
        curry: r,
        sort: i,
        difference: n,
        __: s
    } = require$$0, {
        recursiveReplace: e
    } = requireUtil(), h = requireLzutf8(), c = w => h.compress(w, {
        outputEncoding: "Buffer"
    }), l = r(h.decompress)(s, {
        inputEncoding: "Buffer",
        outputEncoding: "String"
    }), p = a(Buffer.from, l), f = (w, x) => {
        const B = x.reduce((D, j) => (D[j] = {}, D), {}),
            E = w.length;
        for (let D = 0; D < E; D++) {
            let j = 1;
            for (; D < E && w[D] === w[D + 1];) j++, D++;
            if (j >= 2) {
                let O = j;
                for (; O >= 2;) B[w[D]][O] = (B[w[D]][O] || 0) + Math.floor(j / O) * (O - 1), O--
            }
        }
        const C = [];
        for (const D in B)
            for (const j in B[D]) C.push([D + j, B[D][j]]);
        let I = i((D, j) => j[1] - D[1], C).filter(D => D[0][1] === "2").slice(0, 2).map(D => D[0][0]);
        return I.length !== 2 && (I = I.concat(n(x, I).slice(0, 2 - I.length))), I.slice().sort()
    };
    return compact = {
        compress: c,
        decompress: p,
        zwcHuffMan: w => {
            const x = [w[0] + w[1], w[0] + w[2], w[0] + w[3], w[1] + w[2], w[1] + w[3], w[2] + w[3]],
                B = (I, D) => w[x.indexOf(I + D)],
                E = I => x[w.indexOf(I)].split("");
            return {
                shrink: I => {
                    const D = f(I, w.slice(0, 4));
                    return B(...D) + e(I, D.map(j => j + j), [w[4], w[5]])
                },
                expand: I => {
                    const D = I[0],
                        j = I.slice(1),
                        O = E(D);
                    return e(j, [w[4], w[5]], O.map(L => L + L))
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
        pipe: a,
        intersection: r,
        indexOf: i,
        curry: n,
        __: s,
        slice: e,
        split: h,
        join: c,
        map: l
    } = require$$0, {
        zeroPad: p,
        nTobin: f,
        stepMap: m,
        binToByte: w
    } = requireUtil();
    return message = {
        zwcOperations: E => {
            const C = K => E[parseInt(K, 2)],
                $ = a(i(s, E), f, p(2)),
                I = (K, Q, P) => (K && Q ? E[0] : Q ? E[1] : E[2]) + m((b, t) => C(P[t] + P[t + 1]))(2, new Array(P.length).fill()).join(""),
                D = K => {
                    const Q = E.indexOf(K[0]);
                    if (Q === 0) return {
                        encrypt: !0,
                        integrity: !0
                    };
                    if (Q === 1) return {
                        encrypt: !0,
                        integrity: !1
                    };
                    if (Q === 2) return {
                        encrypt: !1,
                        integrity: !1
                    }
                },
                j = n(I)(!0)(!0),
                O = n(I)(!1)(!0),
                L = n(I)(!1)(!1);
            return {
                detach: K => {
                    const P = K.split(" ").reduce((q, b) => {
                        const t = b.split("");
                        if (r(E, t).length !== 0) {
                            const y = t.findIndex((v, g) => !~E.indexOf(v));
                            return b.slice(0, y)
                        }
                        return q
                    }, "");
                    if (!P) throw new Error("Invisible stream not detected! Please copy and paste the StegCloak text sent by the sender.");
                    return P
                },
                concealToData: K => {
                    const {
                        encrypt: Q,
                        integrity: P
                    } = D(K);
                    return {
                        encrypt: Q,
                        integrity: P,
                        data: a(e(1, 1 / 0), h(""), l($), c(""), w)(K)
                    }
                },
                toConcealHmac: j,
                toConceal: O,
                noCrypt: L
            }
        },
        embed: (E, C) => {
            const $ = E.split(" "),
                I = Math.floor(Math.random() * Math.floor($.length / 2));
            return $.slice(0, I + 1).concat([C + $[I + 1]]).concat($.slice(I + 2, $.length)).join(" ")
        }
    }, message
}
var stegcloak, hasRequiredStegcloak;

function requireStegcloak() {
    if (hasRequiredStegcloak) return stegcloak;
    hasRequiredStegcloak = 1;
    const a = require$$0,
        {
            encrypt: r,
            decrypt: i
        } = requireEncrypt(),
        {
            compress: n,
            decompress: s,
            zwcHuffMan: e
        } = requireCompact(),
        {
            zwcOperations: h,
            embed: c
        } = requireMessage(),
        l = ["‌", "‍", "⁡", "⁢", "⁣", "⁤"],
        {
            toConceal: p,
            toConcealHmac: f,
            concealToData: m,
            noCrypt: w,
            detach: x
        } = h(l),
        {
            shrink: B,
            expand: E
        } = e(l),
        {
            byteToBin: C,
            compliment: $
        } = requireUtil();
    class I {
        constructor(j = !0, O = !1) {
            this.encrypt = j, this.integrity = O
        }
        static get zwc() {
            return l
        }
        hide(j, O, L = "This is a confidential text") {
            if (L.split(" ").length === 1) throw new Error("Minimum two words required");
            const G = this.integrity,
                V = this.encrypt,
                K = a.pipe(n, $)(j),
                Q = V ? r({
                    password: O,
                    data: K,
                    integrity: G
                }) : K,
                P = a.pipe(C, G && V ? f : V ? p : w, B)(Q);
            return c(L, P)
        }
        reveal(j, O) {
            const {
                data: L,
                integrity: G,
                encrypt: V
            } = a.pipe(x, E, m)(j), K = V ? i({
                password: O,
                data: L,
                integrity: G
            }) : L;
            return a.pipe($, s)(K)
        }
    }
    return stegcloak = I, stegcloak
}
var stegcloakExports = requireStegcloak();
const StegCloak = getDefaultExportFromCjs(stegcloakExports),
    getSecret = () => {
        const {
            decryptString: a
        } = new StringCrypto, r = document[a("c23c255b3a1fb2fedf42ed69d04942f9:4473665258554b335a4577725667643935513d3d", "GK")](a("84b8f50b09914dd59554cab4cb82f078:525a4759344a36757238527443585878485558307868447349446d5959337934", "GK"));
        if (r) {
            const i = r.getAttribute("content");
            if (i) return i.split("").reverse().join("")
        }
        return null
    },
    join = a => {
        const r = {
                roomId: a.roomId,
                name: a.name
            },
            i = getSecret();
        if (i) {
            const s = new StegCloak(!0, !1).hide(i, "BSKA", "Gimkit Web Client V3.1");
            r.clientType = s
        }
        request({
            url: "/api/matchmaker/join",
            data: r,
            success: n => {
                a.onSuccess && a.onSuccess(n)
            },
            error: n => {
                a.onError && a.onError(n)
            }
        })
    },
    JoinCodeScreen = a => {
        const [r, i] = reactExports.useState(""), [n, s] = reactExports.useState(""), [e, h] = reactExports.useState(), [c, l, p] = useBoolean(!1), [f, m, w] = useBoolean(!1), x = I => {
            let D = I;
            D || (D = r), !(!D || c) && (l(), submitCode({
                code: D,
                onSuccess: j => {
                    p(), B(j)
                },
                onError: j => {
                    p(), i("");
                    const O = j && j.message && j.message.text ? j.message.text : "An unknown error occurred";
                    staticMethods.error({
                        message: O,
                        placement: "bottomRight"
                    })
                }
            }))
        }, B = I => {
            I.roomId || I.groupId && (isLoggedIn() || (window.location.href = `/class/join/${I.groupId}?redirect=${encodeURIComponent(window.location.href)}`)), I.roomId && I.groupId && C({
                roomId: I.roomId
            }), h(I)
        }, E = () => {
            !e || !e.roomId || C({
                roomId: e.roomId
            })
        }, C = I => {
            f || (m(), join({
                roomId: I.roomId,
                name: n,
                onSuccess: D => {
                    a.setJoinLiveDetails({
                        serverUrl: D.serverUrl,
                        roomId: D.roomId,
                        intentId: D.intentId,
                        source: D.source
                    })
                },
                onError: D => {
                    var O;
                    const j = (O = D == null ? void 0 : D.message) == null ? void 0 : O.text;
                    staticMethods.error({
                        message: j || "Error joining game. Please refresh the page and try again.",
                        placement: "bottomRight"
                    }), w()
                }
            }))
        };
        reactExports.useEffect(() => {
            const I = getUrlVariable("gc");
            I && (i(I), x(I)), !I && isLoggedIn() && request({
                url: "/api/matchmaker/instant-join",
                success: D => {
                    D && D.code && (i(D.code), x(D.code))
                }
            })
        }, []);
        const $ = () => e && e.roomId && !e.groupId ? jsxRuntimeExports.jsx(EnterName, {
            value: n,
            onValueChange: s,
            loading: f,
            submit: E,
            useRandomNamePicker: e.useRandomNamePicker
        }, "enter-name") : e && !e.roomId && e.groupId && e.groupName ? jsxRuntimeExports.jsx(JoinClass, {
            nameOfClass: e.groupName,
            link: `/class/join/${e.groupId}?redirect=${encodeURIComponent(window.location.href)}`
        }, "join-class") : jsxRuntimeExports.jsx(EnterCode, {
            value: r,
            onValueChange: i,
            loading: c || f,
            submit: x
        }, "enter-code");
        return jsxRuntimeExports.jsx(JoinBackgroundContainer, {
            children: jsxRuntimeExports.jsx(AnimatePresence, {
                initial: !0,
                mode: "wait",
                children: $()
            })
        })
    },
    ClassOption = a => {
        const r = `/class/join/${a.group._id}/?redirect=${encodeURIComponent(window.location.href)}`;
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
                            background: a.group.color
                        }
                    }), jsxRuntimeExports.jsx(RightSide, {
                        children: jsxRuntimeExports.jsx(Title, {
                            children: a.group.name
                        })
                    })]
                })
            })
        })
    },
    JoinClasses = a => {
        const r = () => a.groups.length ? jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsx(AccessText, {
                style: {
                    fontSize: isLoggedIn() ? 16 : 18
                },
                children: isLoggedIn() ? "To access this assignment, you'll have to join one of the classes it is assigned to. Choose a class below to join it." : "To access this assignment, select the class you're part of and authenticate in."
            }), jsxRuntimeExports.jsx(Divider, {}), a.groups.map((i, n) => jsxRuntimeExports.jsxs(reactExports.Fragment, {
                children: [jsxRuntimeExports.jsx(ClassOption, {
                    group: i
                }), n + 1 !== a.groups.length ? jsxRuntimeExports.jsx("div", {
                    style: {
                        height: 10
                    }
                }) : null]
            }, i._id + "-join"))]
        }) : jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
            children: [jsxRuntimeExports.jsx(Divider, {}), jsxRuntimeExports.jsx(AccessText, {
                children: "This assignment is no longer available as it is assigned to a class that has been deleted."
            })]
        });
        return jsxRuntimeExports.jsx(JoinModal, {
            noImage: !!a.groups.length,
            customMaxWidth: 475,
            children: r()
        })
    },
    AccessText = ut.div`
  font-weight: ${FontWeights.Bold};
  text-align: center;
`,
    CardContainer = ut.div.attrs({
        className: "flex maxWidth vc"
    })`
  color: rgba(0, 0, 0, 0.9);
`,
    RightSide = ut.div`
  margin-left: 16px;
`,
    Title = ut.div`
  font-size: 14px;
  line-height: 1;
  font-weight: ${FontWeights.Bold};
`,
    DueDatePassed = a => {
        const r = dayjs(a.dueDate).format("MMMM Do"),
            i = dayjs(a.dueDate).format("ha");
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
                    children: ["The due date for this assignment was ", r, ", at", " ", i, ". It can no longer be completed."]
                })]
            })
        })
    },
    Container$1 = ut.div.attrs({
        className: "flex-column flex-center"
    })``,
    Text = ut.div`
  font-size: 16px;
  font-weight: ${FontWeights.Bold};
`,
    JoinAssignmentScreen = a => {
        const [r, i] = reactExports.useState(), [n, s] = reactExports.useState(""), [e, h, c] = useBoolean(!1);
        reactExports.useEffect(() => {
            request({
                url: "/api/matchmaker/pre-intent/assignment",
                data: {
                    assignmentId: a.assignmentId
                },
                success: f => {
                    if (f.canCreate && isLoggedIn()) {
                        l();
                        return
                    }
                    i(f)
                },
                error: () => {
                    window.location.href = "/join"
                }
            })
        }, []);
        const l = () => {
                e || (h(), request({
                    url: "/api/matchmaker/intent/assignment/create",
                    data: {
                        assignmentId: a.assignmentId,
                        name: n
                    },
                    success: f => {
                        a.setCreateMapDetails({
                            intentId: f
                        })
                    },
                    error: f => {
                        throwMessageError({
                            e: f,
                            default: {
                                title: "An unknown error occurred.",
                                content: "Please try again."
                            }
                        }), c()
                    }
                }))
            },
            p = () => r ? !r.canCreate && r.dueDate ? jsxRuntimeExports.jsx(DueDatePassed, {
                dueDate: r.dueDate
            }) : !r.canCreate && r.groups ? jsxRuntimeExports.jsx(JoinClasses, {
                groups: r.groups
            }) : jsxRuntimeExports.jsx(EnterName, {
                value: n,
                onValueChange: s,
                submit: l,
                loading: e
            }, "enter-name") : null;
        return jsxRuntimeExports.jsx(JoinBackgroundContainer, {
            children: jsxRuntimeExports.jsx(AnimatePresence, {
                initial: !0,
                mode: "wait",
                children: p()
            })
        })
    },
    Play = libExports.lazyWithPreload(() => __vitePreload(() => import("./index-26.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41]))),
    MapApp = libExports.lazyWithPreload(() => __vitePreload(() => import("./App-41.js").then(a => a.bb), __vite__mapDeps([42, 1, 2, 43, 15, 13, 44, 45, 46, 47, 48, 6, 3, 49, 4, 50, 51, 35, 38, 39, 32, 52, 53, 54, 17, 55, 56, 57, 58, 24, 59, 60, 61, 62, 63, 16, 64, 65, 66, 67, 22, 37, 36, 68, 69, 70, 20, 71, 25, 40, 27, 12, 18, 19, 8, 9, 10, 11, 14, 23, 28, 72, 73, 74, 75, 76, 77, 78, 79, 33, 80]))),
    Join = () => {
        const [a, r] = useBoolean(!1), [i, n] = useBoolean(!1), [s, e] = reactExports.useState(), [h, c] = reactExports.useState(""), [l, p] = reactExports.useState(""), [f, m] = reactExports.useState(""), {
            assignmentId: w
        } = useParams();
        useTimeoutWhen(() => {
            window.location.reload()
        }, 1e3 * 60 * 60 * 10), reactExports.useEffect(() => {
            s && (s === ExperienceSource.original ? Play.preload() : MapApp.preload())
        }, [s]);
        const x = C => {
                c(C.serverUrl), p(C.roomId), m(C.intentId), e(C.source), r()
            },
            B = C => {
                n(), m(C.intentId), e(ExperienceSource.map), r()
            };
        if (a) return s === ExperienceSource.map ? jsxRuntimeExports.jsx(Container, {
            children: jsxRuntimeExports.jsx(MapApp, {
                joinDetails: i ? void 0 : {
                    serverUrl: h,
                    intentId: f,
                    roomId: l
                },
                createDetails: i ? {
                    intentId: f
                } : void 0
            })
        }) : jsxRuntimeExports.jsx(Container, {
            children: jsxRuntimeExports.jsx(Play, {
                joinDetails: {
                    serverUrl: h,
                    intentId: f,
                    roomId: l
                }
            })
        });
        const E = () => w ? jsxRuntimeExports.jsx(JoinAssignmentScreen, {
            assignmentId: w,
            setCreateMapDetails: B
        }) : jsxRuntimeExports.jsx(JoinCodeScreen, {
            setJoinLiveDetails: x
        });
        return jsxRuntimeExports.jsx(Container, {
            children: E()
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
    Container = ut.div.attrs({
        className: "flex-column scroll-y"
    })`
  flex: 1;
`,
    GlobalStyle = ht`
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