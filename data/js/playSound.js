import {
    t as e
} from "./MapSound.js";
var t = new Map,
    n = n => {
        let r = Date.now();
        if (!n.path) return null;
        let i = n.forceCreateNewSound ? void 0 : t.get(n.path),
            a = i || new e({
                src: n.path
            });
        if (a.volume(n.volume), i) n.delay ? setTimeout(() => {
            a.play()
        }, n.delay) : a.play();
        else {
            let e = () => {
                if (!t.get(n.path) && !n.forceCreateNewSound && t.set(n.path, a), n.delay) {
                    let e = r + n.delay,
                        t = Date.now();
                    t > e ? a.play() : setTimeout(() => {
                        a.play()
                    }, e - t)
                } else a.play()
            };
            a.state() === `loaded` ? e() : a.once(`load`, e)
        }
        return a
    },
    r = new Set,
    i = n => {
        let {
            path: i
        } = n;
        if (t.get(i) || r.has(i)) return;
        r.add(i);
        let a = new e({
            src: i
        });
        a.once(`load`, () => {
            r.delete(i), t.set(i, a)
        })
    };
export {
    i as n, n as t
};