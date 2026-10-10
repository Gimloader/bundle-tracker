import {
    o as e,
    t
} from "./rolldown-runtime.js";
import {
    t as n
} from "./index.browser.js";
var r = e(t(((e, t) => {
        for (var n = function(e) {
                return e !== null && !Array.isArray(e) && typeof e == `object`
            }, r = {
                3: `Cancel`,
                6: `Help`,
                8: `Backspace`,
                9: `Tab`,
                12: `Clear`,
                13: `Enter`,
                16: `Shift`,
                17: `Control`,
                18: `Alt`,
                19: `Pause`,
                20: `CapsLock`,
                27: `Escape`,
                28: `Convert`,
                29: `NonConvert`,
                30: `Accept`,
                31: `ModeChange`,
                32: ` `,
                33: `PageUp`,
                34: `PageDown`,
                35: `End`,
                36: `Home`,
                37: `ArrowLeft`,
                38: `ArrowUp`,
                39: `ArrowRight`,
                40: `ArrowDown`,
                41: `Select`,
                42: `Print`,
                43: `Execute`,
                44: `PrintScreen`,
                45: `Insert`,
                46: `Delete`,
                48: [`0`, `)`],
                49: [`1`, `!`],
                50: [`2`, `@`],
                51: [`3`, `#`],
                52: [`4`, `$`],
                53: [`5`, `%`],
                54: [`6`, `^`],
                55: [`7`, `&`],
                56: [`8`, `*`],
                57: [`9`, `(`],
                91: `OS`,
                93: `ContextMenu`,
                144: `NumLock`,
                145: `ScrollLock`,
                181: `VolumeMute`,
                182: `VolumeDown`,
                183: `VolumeUp`,
                186: [`;`, `:`],
                187: [`=`, `+`],
                188: [`,`, `<`],
                189: [`-`, `_`],
                190: [`.`, `>`],
                191: [`/`, `?`],
                192: ["`", `~`],
                219: [`[`, `{`],
                220: [`\\`, `|`],
                221: [`]`, `}`],
                222: [`'`, `"`],
                224: `Meta`,
                225: `AltGraph`,
                246: `Attn`,
                247: `CrSel`,
                248: `ExSel`,
                249: `EraseEof`,
                250: `Play`,
                251: `ZoomOut`
            }, i = 0; i < 24; i += 1) r[112 + i] = `F` + (i + 1);
        for (var a = 0; a < 26; a += 1) {
            var o = a + 65;
            r[o] = [String.fromCharCode(o + 32), String.fromCharCode(o)]
        }
        var s = {
            codes: r,
            getCode: function(e) {
                return n(e) ? e.keyCode || e.which || this[e.key] : this[e]
            },
            getKey: function(e) {
                var t = n(e);
                if (t && e.key) return e.key;
                var i = r[t ? e.keyCode || e.which : e];
                return Array.isArray(i) && (i = t ? i[+!!e.shiftKey] : i[0]), i
            },
            Cancel: 3,
            Help: 6,
            Backspace: 8,
            Tab: 9,
            Clear: 12,
            Enter: 13,
            Shift: 16,
            Control: 17,
            Alt: 18,
            Pause: 19,
            CapsLock: 20,
            Escape: 27,
            Convert: 28,
            NonConvert: 29,
            Accept: 30,
            ModeChange: 31,
            " ": 32,
            PageUp: 33,
            PageDown: 34,
            End: 35,
            Home: 36,
            ArrowLeft: 37,
            ArrowUp: 38,
            ArrowRight: 39,
            ArrowDown: 40,
            Select: 41,
            Print: 42,
            Execute: 43,
            PrintScreen: 44,
            Insert: 45,
            Delete: 46,
            0: 48,
            ")": 48,
            1: 49,
            "!": 49,
            2: 50,
            "@": 50,
            3: 51,
            "#": 51,
            4: 52,
            $: 52,
            5: 53,
            "%": 53,
            6: 54,
            "^": 54,
            7: 55,
            "&": 55,
            8: 56,
            "*": 56,
            9: 57,
            "(": 57,
            a: 65,
            A: 65,
            b: 66,
            B: 66,
            c: 67,
            C: 67,
            d: 68,
            D: 68,
            e: 69,
            E: 69,
            f: 70,
            F: 70,
            g: 71,
            G: 71,
            h: 72,
            H: 72,
            i: 73,
            I: 73,
            j: 74,
            J: 74,
            k: 75,
            K: 75,
            l: 76,
            L: 76,
            m: 77,
            M: 77,
            n: 78,
            N: 78,
            o: 79,
            O: 79,
            p: 80,
            P: 80,
            q: 81,
            Q: 81,
            r: 82,
            R: 82,
            s: 83,
            S: 83,
            t: 84,
            T: 84,
            u: 85,
            U: 85,
            v: 86,
            V: 86,
            w: 87,
            W: 87,
            x: 88,
            X: 88,
            y: 89,
            Y: 89,
            z: 90,
            Z: 90,
            OS: 91,
            ContextMenu: 93,
            F1: 112,
            F2: 113,
            F3: 114,
            F4: 115,
            F5: 116,
            F6: 117,
            F7: 118,
            F8: 119,
            F9: 120,
            F10: 121,
            F11: 122,
            F12: 123,
            F13: 124,
            F14: 125,
            F15: 126,
            F16: 127,
            F17: 128,
            F18: 129,
            F19: 130,
            F20: 131,
            F21: 132,
            F22: 133,
            F23: 134,
            F24: 135,
            NumLock: 144,
            ScrollLock: 145,
            VolumeMute: 181,
            VolumeDown: 182,
            VolumeUp: 183,
            ";": 186,
            ":": 186,
            "=": 187,
            "+": 187,
            ",": 188,
            "<": 188,
            "-": 189,
            _: 189,
            ".": 190,
            ">": 190,
            "/": 191,
            "?": 191,
            "`": 192,
            "~": 192,
            "[": 219,
            "{": 219,
            "\\": 220,
            "|": 220,
            "]": 221,
            "}": 221,
            "'": 222,
            '"': 222,
            Meta: 224,
            AltGraph: 225,
            Attn: 246,
            CrSel: 247,
            ExSel: 248,
            EraseEof: 249,
            Play: 250,
            ZoomOut: 251
        };
        s.Spacebar = s[` `], s.Digit0 = s[0], s.Digit1 = s[1], s.Digit2 = s[2], s.Digit3 = s[3], s.Digit4 = s[4], s.Digit5 = s[5], s.Digit6 = s[6], s.Digit7 = s[7], s.Digit8 = s[8], s.Digit9 = s[9], s.Tilde = s[`~`], s.GraveAccent = s["`"], s.ExclamationPoint = s[`!`], s.AtSign = s[`@`], s.PoundSign = s[`#`], s.PercentSign = s[`%`], s.Caret = s[`^`], s.Ampersand = s[`&`], s.PlusSign = s[`+`], s.MinusSign = s[`-`], s.EqualsSign = s[`=`], s.DivisionSign = s[`/`], s.MultiplicationSign = s[`*`], s.Comma = s[`,`], s.Decimal = s[`.`], s.Colon = s[`:`], s.Semicolon = s[`;`], s.Pipe = s[`|`], s.BackSlash = s[`\\`], s.QuestionMark = s[`?`], s.SingleQuote = s[`'`], s.DoubleQuote = s[`"`], s.LeftCurlyBrace = s[`{`], s.RightCurlyBrace = s[`}`], s.LeftParenthesis = s[`(`], s.RightParenthesis = s[`)`], s.LeftAngleBracket = s[`<`], s.RightAngleBracket = s[`>`], s.LeftSquareBracket = s[`[`], s.RightSquareBracket = s[`]`], t.exports = s
    }))()),
    i = [],
    a = e => {
        let t = r.default.getCode(e);
        return i.find(e => e.key === t)
    };
document.addEventListener(`keydown`, e => {
    if (e.repeat) return;
    let t = a(e);
    t && t.callbacksDown.forEach(e => e.callback())
}), document.addEventListener(`keyup`, e => {
    let t = a(e);
    t && t.callbacksUp.forEach(e => e.callback())
});
var o = (e, t, r = () => {}) => {
        let a = n();
        return i.find(t => t.key === e) ? i = i.map(n => n.key === e ? {
            ...n,
            callbacksDown: [...n.callbacksDown, {
                id: a,
                callback: t
            }],
            callbacksUp: [...n.callbacksUp, {
                id: a,
                callback: r
            }]
        } : n) : i.push({
            key: e,
            callbacksDown: [{
                id: a,
                callback: t
            }],
            callbacksUp: [{
                id: a,
                callback: r
            }]
        }), () => s(e, a)
    },
    s = (e, t) => {
        i = i.map(n => n.key === e ? {
            ...n,
            callbacksDown: n.callbacksDown.filter(e => e.id !== t),
            callbacksUp: n.callbacksUp.filter(e => e.id !== t)
        } : n)
    };
export {
    o as t
};