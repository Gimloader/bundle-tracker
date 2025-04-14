function i(i, e, t, o) {
    Object.defineProperty(i, e, {
        get: t,
        set: o,
        enumerable: !0,
        configurable: !0
    })
}
var e = ("undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : "undefined" != typeof window ? window : "undefined" != typeof global ? global : {}).parcelRequire388b;
e.register("aBPRj", (function(t, o) {
    var n;
    n = t.exports, Object.defineProperty(n, "__esModule", {
        value: !0,
        configurable: !0
    }), i(t.exports, "OutlineDevice", (function() {
        return c
    })), i(t.exports, "default", (function() {
        return l
    }));
    var s = e("divCp"),
        a = e("bNmF9"),
        r = e("9ehBl");
    class c extends a.default {
        constructor(i) {
            super(i), (0, s.default)(this, "onStateChange", (i => {})), (0, r.CreateVisuals)(this)
        }
    }
    var l = c
})), e.register("9ehBl", (function(t, o) {
    i(t.exports, "CreateVisuals", (function() {
        return h
    }));
    var n = e("02Jlc"),
        s = e("3Gq9M"),
        a = e("ijv1c"),
        r = e("9HNFg"),
        c = e("4nrhr"),
        l = e("hKhVF");
    const h = i => {
        const e = i.options.shape === n.OutlineShape.line,
            t = i.options.shape === n.OutlineShape.circle,
            o = i.options.style === n.OutlineStyle.solid,
            h = i.options.style === n.OutlineStyle.dashed;
        i.options.circleFill && t ? (0, r.CreateFilledCircle)(i) : e && o ? (0, l.CreateSolidLine)(i) : t && o ? (0, c.CreateSolidCircle)(i) : e && h ? (0, a.CreateDashedLine)(i) : t && h && (0, s.CreateDashedCircle)(i)
    }
})), e.register("02Jlc", (function(e, t) {
    let o;
    var n;
    let s;
    var a;
    i(e.exports, "OutlineShape", (function() {
        return o
    })), i(e.exports, "OutlineStyle", (function() {
        return s
    })), (n = o || (o = {})).line = "rectangle", n.circle = "circle", (a = s || (s = {})).solid = "solid", a.dashed = "dashed"
})), e.register("3Gq9M", (function(t, o) {
    i(t.exports, "CreateDashedCircle", (function() {
        return s
    }));
    var n = e("bfjeD");
    const s = i => {
        const e = 2 * i.options.circleRadius + i.options.thickness / 2,
            t = 2 * i.options.circleRadius + i.options.thickness / 2,
            o = -Math.PI / 2 - i.options.circlePercentage / 100 * Math.PI,
            s = -Math.PI / 2 + i.options.circlePercentage / 100 * Math.PI;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: t,
            hitCallback: (e, t) => (0, n.CircleHitCallback)(i, e, t)
        }), i.graphics.view.lineStyle(Math.min(i.options.thickness, 2 * i.options.circleRadius), Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha);
        const a = i.options.circlePercentage / 100 * Math.PI * 2,
            r = Math.PI * i.options.circleRadius * 2,
            c = r * i.options.circlePercentage / 100,
            l = i.options.dashLength,
            h = i.options.dashSpacing,
            p = l / r * Math.PI * 2,
            g = h / r * Math.PI * 2;
        if (g >= c) {
            const e = Math.min(o, -p / 2),
                t = Math.max(s, p / 2);
            return void i.graphics.view.arc(0, 0, i.options.circleRadius, e, t, !1, .01)
        }
        const u = p + g,
            d = Math.max(1, Math.floor(a / u)),
            f = a - d * u,
            v = Math.min(p, (f + p) / 2),
            P = Math.max(0, (f - p) / 2);
        i.graphics.view.beginPath(), i.graphics.view.arc(0, 0, i.options.circleRadius, o + P, o + P + v, !1, .01), i.graphics.view.strokePath();
        let M = o + P + v + g;
        for (let e = 0; e < d - 1; e++) i.graphics.view.beginPath(), i.graphics.view.arc(0, 0, i.options.circleRadius, M, M + p, !1, .01), i.graphics.view.strokePath(), M += u;
        i.graphics.view.beginPath(), i.graphics.view.arc(0, 0, i.options.circleRadius, s - P - v, s - P, !1, .01), i.graphics.view.strokePath(), i.graphics.view.angle = i.options.angle
    }
})), e.register("bfjeD", (function(e, t) {
    i(e.exports, "CircleHitCallback", (function() {
        return o
    }));
    const o = (i, e, t, o, n) => {
        o = null != o ? o : i.options.circleRadius + i.options.thickness / 2, n = null != n ? n : i.options.circleRadius - i.options.thickness / 2;
        const s = -Math.PI / 2 - i.options.circlePercentage / 100 * Math.PI,
            a = -Math.PI / 2 + i.options.circlePercentage / 100 * Math.PI,
            r = Phaser.Math.Angle.Between(0, 0, e, t);
        if (r < s || r > a) return !1;
        const c = Phaser.Math.Distance.Between(0, 0, e, t);
        return !(c < o || c > n)
    }
})), e.register("ijv1c", (function(t, o) {
    i(t.exports, "CreateDashedLine", (function() {
        return s
    }));
    var n = e("8cYHU");
    const s = i => {
        const e = i.options.lineLength,
            t = i.options.thickness;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: t
        }), i.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha);
        const o = i.options.dashLength,
            s = i.options.dashSpacing;
        if (s >= e) {
            const n = Math.min(o, e);
            return void i.graphics.view.fillRect(-n / 2, -t / 2, n, t)
        }
        const a = o + s,
            r = Math.max(1, Math.floor(e / a)),
            c = e - r * a,
            l = Math.min(o, (c + o) / 2),
            h = Math.max(0, (c - o) / 2);
        i.graphics.view.fillRect(-e / 2 + h, -t / 2, l, t);
        let p = -e / 2 + h + l + s;
        for (let e = 0; e < r - 1; e++) i.graphics.view.fillRect(p, -t / 2, o, t), p += a;
        i.graphics.view.fillRect(e / 2 - h - l, -t / 2, l, t), i.graphics.view.angle = i.options.angle, (0, n.SetLineBoundingBox)(i)
    }
})), e.register("8cYHU", (function(t, o) {
    i(t.exports, "SetLineBoundingBox", (function() {
        return s
    }));
    var n = e("8jHbG");
    const s = i => {
        const e = i.x,
            t = i.y,
            o = (0, n.ConvertDegToRad)(i.options.angle),
            s = i.options.lineLength / 2,
            a = e - s * Math.cos(o),
            r = t - s * Math.sin(o),
            c = e + s * Math.cos(o),
            l = t + s * Math.sin(o),
            h = Math.min(a, c),
            p = Math.min(r, l),
            g = Math.max(a, c) - h,
            u = Math.max(r, l) - p;
        i.boundingBox.setHardcoded({
            width: g,
            height: u
        })
    }
})), e.register("9HNFg", (function(t, o) {
    i(t.exports, "CreateFilledCircle", (function() {
        return s
    }));
    var n = e("bfjeD");
    const s = i => {
        const e = 2 * i.options.circleRadius + i.options.thickness / 2,
            t = 2 * i.options.circleRadius + i.options.thickness / 2,
            o = -Math.PI / 2 - i.options.circlePercentage / 100 * Math.PI,
            s = -Math.PI / 2 + i.options.circlePercentage / 100 * Math.PI;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: t,
            hitCallback: (e, t) => (0, n.CircleHitCallback)(i, e, t, 0, i.options.circleRadius)
        }), i.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha), i.graphics.view.slice(0, 0, i.options.circleRadius, o, s, !1), i.graphics.view.fillPath(), i.graphics.view.angle = i.options.angle
    }
})), e.register("4nrhr", (function(t, o) {
    i(t.exports, "CreateSolidCircle", (function() {
        return s
    }));
    var n = e("bfjeD");
    const s = i => {
        const e = 2 * i.options.circleRadius + i.options.thickness / 2,
            t = 2 * i.options.circleRadius + i.options.thickness / 2,
            o = -Math.PI / 2 - i.options.circlePercentage / 100 * Math.PI,
            s = -Math.PI / 2 + i.options.circlePercentage / 100 * Math.PI;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: t,
            hitCallback: (e, t) => (0, n.CircleHitCallback)(i, e, t)
        }), i.graphics.view.lineStyle(Math.min(i.options.thickness, 2 * i.options.circleRadius), Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha), i.graphics.view.arc(0, 0, i.options.circleRadius, o, s, !1, .01), i.graphics.view.strokePath(), i.graphics.view.angle = i.options.angle
    }
})), e.register("hKhVF", (function(t, o) {
    i(t.exports, "CreateSolidLine", (function() {
        return s
    }));
    var n = e("8cYHU");
    const s = i => {
        const e = i.options.lineLength,
            t = i.options.thickness;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: t
        }), i.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha), i.graphics.view.fillRect(-e / 2, -t / 2, e, t), i.graphics.view.angle = i.options.angle, (0, n.SetLineBoundingBox)(i)
    }
}));