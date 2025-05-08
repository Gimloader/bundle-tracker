function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('.....', function (c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'OutlineDevice', function () {
        return _i;
    }), a(c.exports, 'default', function () {
        return _j;
    });
    var f = b('.....'), g = b('.....'), h = b('.....');
    class _i extends g.default {
        constructor(j) {
            super(j), (0, f.default)(this, 'onStateChange', k => {
            }), (0, h.CreateVisuals)(this);
        }
    }
    var _j = _i;
}), b.register('.....', function (c, d) {
    a(c.exports, 'CreateVisuals', function () {
        return _k;
    });
    var e = b('.....'), f = b('.....'), g = b('.....'), h = b('.....'), i = b('.....'), j = b('.....');
    const _k = l => {
        const m = l.options.shape === e.OutlineShape.line, n = l.options.shape === e.OutlineShape.circle, o = l.options.style === e.OutlineStyle.solid, p = l.options.style === e.OutlineStyle.dashed;
        l.options.circleFill && n ? (0, h.CreateFilledCircle)(l) : m && o ? (0, j.CreateSolidLine)(l) : n && o ? (0, i.CreateSolidCircle)(l) : m && p ? (0, g.CreateDashedLine)(l) : n && p && (0, f.CreateDashedCircle)(l);
    };
}), b.register('.....', function (c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'OutlineShape', function () {
        return e;
    }), a(c.exports, 'OutlineStyle', function () {
        return g;
    }), (f = e || (e = {})).line = 'rectangle', f.circle = 'circle', (h = g || (g = {})).solid = 'solid', h.dashed = 'dashed';
}), b.register('.....', function (c, d) {
    a(c.exports, 'CreateDashedCircle', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        const h = 2 * g.options.circleRadius + g.options.thickness / 2, i = 2 * g.options.circleRadius + g.options.thickness / 2, j = -Math.PI / 2 - g.options.circlePercentage / 100 * Math.PI, k = -Math.PI / 2 + g.options.circlePercentage / 100 * Math.PI;
        g.graphics = g.parts.add.graphics({
            x: 0,
            y: 0,
            width: h,
            height: i,
            hitCallback: (l, m) => (0, e.CircleHitCallback)(g, l, m)
        }), g.graphics.view.lineStyle(Math.min(g.options.thickness, 2 * g.options.circleRadius), Phaser.Display.Color.HexStringToColor(g.options.color).color, g.options.alpha);
        const l = g.options.circlePercentage / 100 * Math.PI * 2, m = Math.PI * g.options.circleRadius * 2, n = m * g.options.circlePercentage / 100, o = g.options.dashLength, p = g.options.dashSpacing, q = o / m * Math.PI * 2, r = p / m * Math.PI * 2;
        if (r >= n) {
            const s = Math.min(j, -q / 2), t = Math.max(k, q / 2);
            return void g.graphics.view.arc(0, 0, g.options.circleRadius, s, t, !1, 0.01);
        }
        const u = q + r, v = Math.max(1, Math.floor(l / u)), w = l - v * u, x = Math.min(q, (w + q) / 2), y = Math.max(0, (w - q) / 2);
        g.graphics.view.beginPath(), g.graphics.view.arc(0, 0, g.options.circleRadius, j + y, j + y + x, !1, 0.01), g.graphics.view.strokePath();
        let z = j + y + x + r;
        for (let A = 0; A < v - 1; A++)
            g.graphics.view.beginPath(), g.graphics.view.arc(0, 0, g.options.circleRadius, z, z + q, !1, 0.01), g.graphics.view.strokePath(), z += u;
        g.graphics.view.beginPath(), g.graphics.view.arc(0, 0, g.options.circleRadius, k - y - x, k - y, !1, 0.01), g.graphics.view.strokePath(), g.graphics.view.angle = g.options.angle;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'CircleHitCallback', function () {
        return _e;
    });
    const _e = (f, g, h, i, j) => {
        i = null != i ? i : f.options.circleRadius + f.options.thickness / 2, j = null != j ? j : f.options.circleRadius - f.options.thickness / 2;
        const k = -Math.PI / 2 - f.options.circlePercentage / 100 * Math.PI, l = -Math.PI / 2 + f.options.circlePercentage / 100 * Math.PI, m = Phaser.Math.Angle.Between(0, 0, g, h);
        if (m < k || m > l)
            return !1;
        const n = Phaser.Math.Distance.Between(0, 0, g, h);
        return !(n < i || n > j);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'CreateDashedLine', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        const h = g.options.lineLength, i = g.options.thickness;
        g.graphics = g.parts.add.graphics({
            x: 0,
            y: 0,
            width: h,
            height: i
        }), g.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(g.options.color).color, g.options.alpha);
        const j = g.options.dashLength, k = g.options.dashSpacing;
        if (k >= h) {
            const l = Math.min(j, h);
            return void g.graphics.view.fillRect(-l / 2, -i / 2, l, i);
        }
        const m = j + k, n = Math.max(1, Math.floor(h / m)), o = h - n * m, p = Math.min(j, (o + j) / 2), q = Math.max(0, (o - j) / 2);
        g.graphics.view.fillRect(-h / 2 + q, -i / 2, p, i);
        let r = -h / 2 + q + p + k;
        for (let s = 0; s < n - 1; s++)
            g.graphics.view.fillRect(r, -i / 2, j, i), r += m;
        g.graphics.view.fillRect(s / 2 - q - p, -i / 2, p, i), g.graphics.view.angle = g.options.angle, (0, l.SetLineBoundingBox)(g);
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'SetLineBoundingBox', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        const h = g.x, i = g.y, j = (0, e.ConvertDegToRad)(g.options.angle), k = g.options.lineLength / 2, l = h - k * Math.cos(j), m = i - k * Math.sin(j), n = h + k * Math.cos(j), o = i + k * Math.sin(j), p = Math.min(l, n), q = Math.min(m, o), r = Math.max(l, n) - p, s = Math.max(m, o) - q;
        g.boundingBox.setHardcoded({
            width: r,
            height: s
        });
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'CreateFilledCircle', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        const h = 2 * g.options.circleRadius + g.options.thickness / 2, i = 2 * g.options.circleRadius + g.options.thickness / 2, j = -Math.PI / 2 - g.options.circlePercentage / 100 * Math.PI, k = -Math.PI / 2 + g.options.circlePercentage / 100 * Math.PI;
        g.graphics = g.parts.add.graphics({
            x: 0,
            y: 0,
            width: h,
            height: i,
            hitCallback: (l, m) => (0, e.CircleHitCallback)(g, l, m, 0, g.options.circleRadius)
        }), g.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(g.options.color).color, g.options.alpha), g.graphics.view.slice(0, 0, g.options.circleRadius, j, k, !1), g.graphics.view.fillPath(), g.graphics.view.angle = g.options.angle;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'CreateSolidCircle', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        const h = 2 * g.options.circleRadius + g.options.thickness / 2, i = 2 * g.options.circleRadius + g.options.thickness / 2, j = -Math.PI / 2 - g.options.circlePercentage / 100 * Math.PI, k = -Math.PI / 2 + g.options.circlePercentage / 100 * Math.PI;
        g.graphics = g.parts.add.graphics({
            x: 0,
            y: 0,
            width: h,
            height: i,
            hitCallback: (l, m) => (0, e.CircleHitCallback)(g, l, m)
        }), g.graphics.view.lineStyle(Math.min(g.options.thickness, 2 * g.options.circleRadius), Phaser.Display.Color.HexStringToColor(g.options.color).color, g.options.alpha), g.graphics.view.arc(0, 0, g.options.circleRadius, j, k, !1, 0.01), g.graphics.view.strokePath(), g.graphics.view.angle = g.options.angle;
    };
}), b.register('.....', function (c, d) {
    a(c.exports, 'CreateSolidLine', function () {
        return _f;
    });
    var e = b('.....');
    const _f = g => {
        const h = g.options.lineLength, i = g.options.thickness;
        g.graphics = g.parts.add.graphics({
            x: 0,
            y: 0,
            width: h,
            height: i
        }), g.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(g.options.color).color, g.options.alpha), g.graphics.view.fillRect(-h / 2, -i / 2, h, i), g.graphics.view.angle = g.options.angle, (0, e.SetLineBoundingBox)(g);
    };
});