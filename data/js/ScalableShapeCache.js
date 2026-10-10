import {
    t as e
} from "./stores-2.js";
import {
    t
} from "./FetchScene.js";
import {
    n
} from "./TutorialConsts.js";
import {
    r,
    t as i
} from "./DrawToCanvas.js";
var a = (e, t, n) => {
        let r = t * n;
        if (!r) return;
        let i = new Uint8Array(r),
            a = new Uint32Array(r),
            o = 0,
            s = 0,
            c = t => {
                i[t] || e[t * 4 + 3] >= 128 || (i[t] = 1, a[s++] = t)
            };
        for (let e = 0; e < t; e++) c(e), c((n - 1) * t + e);
        for (let e = 0; e < n; e++) c(e * t), c(e * t + t - 1);
        for (; o < s;) {
            let e = a[o++],
                n = e % t;
            n > 0 && c(e - 1), n + 1 < t && c(e + 1), e >= t && c(e - t), e + t < r && c(e + t)
        }
        for (let a = 0; a < r; a++) {
            if (i[a]) continue;
            let r = a * 4,
                o = e[r + 3];
            if (o !== 255) {
                if (o >= 128) {
                    let e = a % t,
                        r = Math.floor(a / t),
                        o = !1;
                    for (let a = -1; a <= 1 && !o; a++)
                        for (let s = -1; s <= 1; s++) {
                            let c = e + s,
                                l = r + a;
                            if (c < 0 || c >= t || l < 0 || l >= n || i[l * t + c]) {
                                o = !0;
                                break
                            }
                        }
                    if (o) continue
                }
                e[r] = 255, e[r + 1] = 255, e[r + 2] = 255, e[r + 3] = 255
            }
        }
    },
    o = e => {
        var t, n, i, a;
        let o = Number.MAX_VALUE,
            s = Number.MAX_VALUE,
            c = Number.MIN_VALUE,
            l = Number.MIN_VALUE,
            u = r.maxBorderWidth;
        return (t = e.paths) == null || t.forEach(e => {
            e.forEach((e, t) => {
                t % 2 == 0 ? (o = Math.min(o, e - u), c = Math.max(c, e + u)) : (s = Math.min(s, e - u), l = Math.max(l, e + u))
            })
        }), (n = e.circles) == null || n.forEach(e => {
            let [t, n, r] = e;
            o = Math.min(o, t - r - u), s = Math.min(s, n - r - u), c = Math.max(c, t + r + u), l = Math.max(l, n + r + u)
        }), (i = e.rects) == null || i.forEach(e => {
            let [t, n, r, i] = e;
            o = Math.min(o, t - u), s = Math.min(s, n - u), c = Math.max(c, t + r + u), l = Math.max(l, n + i + u)
        }), (a = e.lines) == null || a.forEach(e => {
            let [t, n, r, i] = e;
            o = Math.min(o, t - u, r - u), s = Math.min(s, n - u, i - u), c = Math.max(c, t + u, r + u), l = Math.max(l, n + u, i + u)
        }), {
            minX: o,
            minY: s,
            maxX: c,
            maxY: l
        }
    },
    s = new Map,
    c = new Map,
    l = n => {
        var l;
        let {
            requestId: u,
            customAssetId: d,
            borderWidth: m
        } = n, h = p(n), g = c.get(u);
        g && g !== h && f(n.requestId, g);
        let _ = s.get(h);
        if (c.set(u, h), _ && !_.requireUpdate) return _.requestsIds.includes(u) || _.requestsIds.push(u), _;
        _ && (_.requireUpdate = !1);
        let v = r.editor.baseSize - 200,
            y = {
                paths: [],
                circles: [],
                rects: [
                    [100, 100, v, v]
                ],
                lines: []
            },
            b = ((l = e.world.customAssets.customAssets.get(d)) == null ? void 0 : l.data.shapes) ?? y;
        b.paths.length === 0 && b.circles.length === 0 && b.lines.length === 0 && b.rects.length === 0 && (b = y);
        let x = o(b),
            S = Math.max(0, x.maxX - x.minX),
            C = Math.max(0, x.maxY - x.minY),
            w = (_ == null ? void 0 : _.canvasTexture) ?? t().textures.createCanvas(h, S, C);
        _ && (w.setSize(S, C), w.clear());
        let T = w.getContext();
        if (i({
                ctx: T,
                shapes: b,
                fillColor: `#ffffff`,
                borderColor: `#ffffff`,
                borderWidth: m,
                scale: 1,
                shiftX: -x.minX,
                shiftY: -x.minY
            }), n.fillEnclosedAreas) {
            let e = T.getImageData(0, 0, w.width, w.height);
            a(e.data, e.width, e.height), T.putImageData(e, 0, 0)
        }
        w.refresh();
        let E = {
            key: h,
            canvasTexture: w,
            ctx: T,
            borderWidth: m,
            customAssetId: d,
            size: x,
            requestsIds: _ ? _.requestsIds.includes(u) ? [..._.requestsIds] : [..._.requestsIds, u] : [u]
        };
        return s.set(h, E), E
    },
    u = e => {
        let t = p(e);
        f(e.requestId, t)
    },
    d = e => {
        s.forEach(t => {
            t.customAssetId === e && (t.requireUpdate = !0)
        }), t().worldManager.devices.allDevices.filter(e => e.deviceOption.id === n.scalableShape).forEach(t => {
            t.onScalableShapeChanged(e)
        })
    },
    f = (e, t) => {
        c.delete(e);
        let n = s.get(t);
        n && (n.requestsIds = n.requestsIds.filter(t => t !== e), n.requestsIds.length === 0 && (s.delete(t), n.canvasTexture.destroy()))
    },
    p = e => {
        let {
            customAssetId: t,
            borderWidth: n
        } = e;
        return `canvas-` + t + `-` + n + (e.fillEnclosedAreas ? `-filled` : ``)
    };
export {
    d as n, u as r, l as t
};