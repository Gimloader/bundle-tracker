import {
    h as c
} from "./howler.js";
const n = new Map,
    w = e => {
        const t = Date.now();
        if (!e.path) return null;
        const l = e.forceCreateNewSound ? void 0 : n.get(e.path),
            a = l || new c.Howl({
                src: e.path
            });
        if (a.volume(e.volume), l) e.delay ? setTimeout(() => {
            a.play()
        }, e.delay) : a.play();
        else {
            const o = () => {
                if (!n.get(e.path) && !e.forceCreateNewSound && n.set(e.path, a), e.delay) {
                    const s = t + e.delay,
                        r = Date.now();
                    r > s ? a.play() : setTimeout(() => {
                        a.play()
                    }, s - r)
                } else a.play()
            };
            a.state() === "loaded" ? o() : a.once("load", o)
        }
        return a
    },
    d = new Set,
    f = e => {
        const {
            path: t
        } = e;
        if (n.get(t) || d.has(t)) return;
        d.add(t);
        const l = new c.Howl({
            src: t
        });
        l.once("load", () => {
            d.delete(t), n.set(t, l)
        })
    };
export {
    f as a, w as p
};