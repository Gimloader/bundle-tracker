function a(a, b, k, l) {
    Object.defineProperty(a, b, {
        get: k,
        set: l,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('Qzbof', function(k, l) {
    var c;
    c = k.exports, Object.defineProperty(c, '__esModule', {
        value: !0,
        configurable: !0
    }), a(k.exports, 'OutlineDevice', function() {
        return g;
    }), a(k.exports, 'default', function() {
        return h;
    });
    var d = b('UM8oI'),
        e = b('sgILU'),
        f = b('hrOCH');
    class g extends e.default {
        constructor(a) {
            super(a), (0, d.default)(this, 'onStateChange', a => {}), (0, f.CreateVisuals)(this);
        }
    }
    var h = i;
}), b.register('hrOCH', function(k, l) {
    a(k.exports, 'CreateVisuals', function() {
        return i;
    });
    var c = b('T/YBH'),
        d = b('y3cfQ'),
        e = b('Sn7al'),
        f = b('8fVzI'),
        g = b('IGGqR'),
        h = b('93aaR');
    const i = a => {
        const j = a.options.shape === c.OutlineShape.line,
            k = a.options.shape === c.OutlineShape.circle,
            l = a.options.style === c.OutlineStyle.solid,
            m = a.options.style === c.OutlineStyle.dashed;
        a.options.circleFill && k ? (0, f.CreateFilledCircle)(a) : j && l ? (0, h.CreateSolidLine)(a) : k && l ? (0, g.CreateSolidCircle)(a) : j && m ? (0, e.CreateDashedLine)(a) : k && m && (0, d.CreateDashedCircle)(a);
    };
}), b.register('T/YBH', function(b, f) {
    let c;
    var d;
    let e;
    var f;
    a(b.exports, 'OutlineShape', function() {
        return c;
    }), a(b.exports, 'OutlineStyle', function() {
        return e;
    }), (d = c || (c = {})).line = 'rectangle', d.circle = 'circle', (f = e || (e = {})).solid = 'solid', f.dashed = 'dashed';
}), b.register('y3cfQ', function(f, g) {
    a(f.exports, 'CreateDashedCircle', function() {
        return d;
    });
    var c = b('u91K4');
    const d = a => {
        const e = 2 * a.options.circleRadius + a.options.thickness / 2,
            f = 2 * a.options.circleRadius + a.options.thickness / 2,
            g = -Math.PI / 2 - a.options.circlePercentage / 100 * Math.PI,
            h = -Math.PI / 2 + a.options.circlePercentage / 100 * Math.PI;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: f,
            hitCallback: (e, f) => (0, c.CircleHitCallback)(a, e, f)
        }), a.graphics.view.lineStyle(Math.min(a.options.thickness, 2 * a.options.circleRadius), Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha);
        const i = a.options.circlePercentage / 100 * Math.PI * 2,
            j = Math.PI * a.options.circleRadius * 2,
            k = j * a.options.circlePercentage / 100,
            l = a.options.dashLength,
            m = a.options.dashSpacing,
            n = l / j * Math.PI * 2,
            o = m / j * Math.PI * 2;
        if (o >= k) {
            const p = Math.min(g, -n / 2),
                q = Math.max(h, n / 2);
            return void a.graphics.view.arc(0, 0, a.options.circleRadius, p, q, !1, 0.01);
        }
        const p = n + o,
            q = Math.max(1, Math.floor(i / p)),
            r = i - q * p,
            s = Math.min(n, (r + n) / 2),
            t = Math.max(0, (r - n) / 2);
        a.graphics.view.beginPath(), a.graphics.view.arc(0, 0, a.options.circleRadius, g + t, g + t + s, !1, 0.01), a.graphics.view.strokePath();
        let u = g + t + s + o;
        for (let v = 0; v < q - 1; v++)
            a.graphics.view.beginPath(), a.graphics.view.arc(0, 0, a.options.circleRadius, u, u + n, !1, 0.01), a.graphics.view.strokePath(), u += p;
        a.graphics.view.beginPath(), a.graphics.view.arc(0, 0, a.options.circleRadius, h - t - s, h - t, !1, 0.01), a.graphics.view.strokePath(), a.graphics.view.angle = a.options.angle;
    };
}), b.register('u91K4', function(b, f) {
    a(b.exports, 'CircleHitCallback', function() {
        return c;
    });
    const c = (a, b, f, c, c) => {
        c = null != c ? c : a.options.circleRadius + a.options.thickness / 2, c = null != c ? c : a.options.circleRadius - a.options.thickness / 2;
        const d = -Math.PI / 2 - a.options.circlePercentage / 100 * Math.PI,
            e = -Math.PI / 2 + a.options.circlePercentage / 100 * Math.PI,
            f = Phaser.Math.Angle.Between(0, 0, b, f);
        if (f < d || f > e)
            return !1;
        const g = Phaser.Math.Distance.Between(0, 0, b, f);
        return !(g < c || g > c);
    };
}), b.register('Sn7al', function(f, g) {
    a(f.exports, 'CreateDashedLine', function() {
        return d;
    });
    var c = b('K8LoI');
    const d = a => {
        const e = a.options.lineLength,
            f = a.options.thickness;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: f
        }), a.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha);
        const g = a.options.dashLength,
            h = a.options.dashSpacing;
        if (h >= e) {
            const i = Math.min(g, e);
            return void a.graphics.view.fillRect(-i / 2, -f / 2, i, f);
        }
        const i = g + h,
            j = Math.max(1, Math.floor(e / i)),
            k = e - j * i,
            l = Math.min(g, (k + g) / 2),
            m = Math.max(0, (k - g) / 2);
        a.graphics.view.fillRect(-e / 2 + m, -f / 2, l, f);
        let n = -e / 2 + m + l + h;
        for (let o = 0; o < j - 1; o++)
            a.graphics.view.fillRect(n, -f / 2, g, f), n += i;
        a.graphics.view.fillRect(o / 2 - m - l, -f / 2, l, f), a.graphics.view.angle = a.options.angle, (0, c.SetLineBoundingBox)(a);
    };
}), b.register('K8LoI', function(f, g) {
    a(f.exports, 'SetLineBoundingBox', function() {
        return d;
    });
    var c = b('nEG71');
    const d = a => {
        const e = a.x,
            f = a.y,
            g = (0, c.ConvertDegToRad)(a.options.angle),
            h = a.options.lineLength / 2,
            i = e - h * Math.cos(g),
            j = f - h * Math.sin(g),
            k = e + h * Math.cos(g),
            l = f + h * Math.sin(g),
            m = Math.min(i, k),
            n = Math.min(j, l),
            o = Math.max(i, k) - m,
            p = Math.max(j, l) - n;
        a.boundingBox.setHardcoded({
            width: o,
            height: p
        });
    };
}), b.register('8fVzI', function(f, g) {
    a(f.exports, 'CreateFilledCircle', function() {
        return d;
    });
    var c = b('u91K4');
    const d = a => {
        const e = 2 * a.options.circleRadius + a.options.thickness / 2,
            f = 2 * a.options.circleRadius + a.options.thickness / 2,
            g = -Math.PI / 2 - a.options.circlePercentage / 100 * Math.PI,
            h = -Math.PI / 2 + a.options.circlePercentage / 100 * Math.PI;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: f,
            hitCallback: (e, f) => (0, c.CircleHitCallback)(a, e, f, 0, a.options.circleRadius)
        }), a.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha), a.graphics.view.slice(0, 0, a.options.circleRadius, g, h, !1), a.graphics.view.fillPath(), a.graphics.view.angle = a.options.angle;
    };
}), b.register('IGGqR', function(f, g) {
    a(f.exports, 'CreateSolidCircle', function() {
        return d;
    });
    var c = b('u91K4');
    const d = a => {
        const e = 2 * a.options.circleRadius + a.options.thickness / 2,
            f = 2 * a.options.circleRadius + a.options.thickness / 2,
            g = -Math.PI / 2 - a.options.circlePercentage / 100 * Math.PI,
            h = -Math.PI / 2 + a.options.circlePercentage / 100 * Math.PI;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: f,
            hitCallback: (e, f) => (0, c.CircleHitCallback)(a, e, f)
        }), a.graphics.view.lineStyle(Math.min(a.options.thickness, 2 * a.options.circleRadius), Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha), a.graphics.view.arc(0, 0, a.options.circleRadius, g, h, !1, 0.01), a.graphics.view.strokePath(), a.graphics.view.angle = a.options.angle;
    };
}), b.register('93aaR', function(f, o) {
    a(f.exports, 'CreateSolidLine', function() {
        return d;
    });
    var c = b('K8LoI');
    const d = a => {
        const e = a.options.lineLength,
            f = a.options.thickness;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: e,
            height: f
        }), a.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha), a.graphics.view.fillRect(-e / 2, -f / 2, e, f), a.graphics.view.angle = a.options.angle, (0, c.SetLineBoundingBox)(a);
    };
});