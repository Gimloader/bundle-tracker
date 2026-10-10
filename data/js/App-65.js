import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./jsx-runtime.js";
import {
    t as r
} from "./useTimeout.js";
import {
    N as i,
    P as a,
    ot as o,
    z as s
} from "./App-42.js";
var c = e(t()),
    l = n(),
    u = s(e => {
        let [t, n] = c.useState(!0), {
            start: s,
            clear: u
        } = r(() => {
            e.close()
        }, 350), d = c.useCallback(() => {
            n(!1), s()
        }, [s, e.close]);
        return c.useEffect(() => () => {
            u()
        }, [u]), o(Phaser.Input.Keyboard.KeyCodes.ESC, d, [d]), (0, l.jsx)(i, {
            open: t,
            close: d,
            onCosmeticSelectionChanged: a,
            onlyLockerAvailable: !0,
            useCustomAnimation: !0
        })
    });
export {
    u as
    default
};