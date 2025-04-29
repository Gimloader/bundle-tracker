function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var b = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
b.register('Sdbu8', function(c, d) {
    var e;
    e = c.exports, Object.defineProperty(e, '__esModule', {
        value: !0,
        configurable: !0
    }), a(c.exports, 'OutlineDevice', function() {
        return _i;
    }), a(c.exports, 'default', function() {
        return _j;
    });
    var f = b('s/YA9'),
        g = b('ltxDW'),
        h = b('CP8iW');
    class _i extends g.default {
        constructor(j) {
            super(j), (0, f.default)(this, 'onStateChange', j => {}), (0, h.CreateVisuals)(this);
        }
    }
    var _j = _i;
}), b.register('CP8iW', function(c, d) {
    a(c.exports, 'CreateVisuals', function() {
        return _k;
    });
    var e = b('tQ7KP'),
        f = b('Q8Gfj'),
        g = b('tKAvH'),
        h = b('hNU3K'),
        i = b('mmJTK'),
        j = b('3oV4c');
    const _k = a => {
        const l = a.options.shape === e.OutlineShape.line,
            m = a.options.shape === e.OutlineShape.circle,
            n = a.options.style === e.OutlineStyle.solid,
            o = a.options.style === e.OutlineStyle.dashed;
        a.options.circleFill && m ? (0, h.CreateFilledCircle)(a) : l && n ? (0, j.CreateSolidLine)(a) : m && n ? (0, i.CreateSolidCircle)(a) : l && o ? (0, g.CreateDashedLine)(a) : m && o && (0, f.CreateDashedCircle)(a);
    };
}), b.register('tQ7KP', function(c, d) {
    let e;
    var f;
    let g;
    var h;
    a(c.exports, 'OutlineShape', function() {
        return e;
    }), a(c.exports, 'OutlineStyle', function() {
        return g;
    }), (f = e || (e = {})).line = 'rectangle', f.circle = 'circle', (h = g || (g = {})).solid = 'solid', h.dashed = 'dashed';
}), b.register('Q8Gfj', function(c, d) {
    a(c.exports, 'CreateDashedCircle', function() {
        return _f;
    });
    var e = b('CGtRC');
    const _f = a => {
        const g = 2 * a.options.circleRadius + a.options.thickness / 2,
            h = 2 * a.options.circleRadius + a.options.thickness / 2,
            i = -Math.PI / 2 - a.options.circlePercentage / 100 * Math.PI,
            j = -Math.PI / 2 + a.options.circlePercentage / 100 * Math.PI;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: g,
            height: h,
            hitCallback: (g, h) => (0, e.CircleHitCallback)(a, g, h)
        }), a.graphics.view.lineStyle(Math.min(a.options.thickness, 2 * a.options.circleRadius), Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha);
        const k = a.options.circlePercentage / 100 * Math.PI * 2,
            l = Math.PI * a.options.circleRadius * 2,
            m = l * a.options.circlePercentage / 100,
            n = a.options.dashLength,
            o = a.options.dashSpacing,
            p = n / l * Math.PI * 2,
            q = o / l * Math.PI * 2;
        if (q >= m) {
            const r = Math.min(i, -p / 2),
                s = Math.max(j, p / 2);
            return void a.graphics.view.arc(0, 0, a.options.circleRadius, r, s, !1, 0.01);
        }
        const r = p + q,
            s = Math.max(1, Math.floor(k / r)),
            t = k - s * r,
            u = Math.min(p, (t + p) / 2),
            v = Math.max(0, (t - p) / 2);
        a.graphics.view.beginPath(), a.graphics.view.arc(0, 0, a.options.circleRadius, i + v, i + v + u, !1, 0.01), a.graphics.view.strokePath();
        let w = i + v + u + q;
        for (let x = 0; x < s - 1; x++)
            a.graphics.view.beginPath(), a.graphics.view.arc(0, 0, a.options.circleRadius, w, w + p, !1, 0.01), a.graphics.view.strokePath(), w += r;
        a.graphics.view.beginPath(), a.graphics.view.arc(0, 0, a.options.circleRadius, j - v - u, j - v, !1, 0.01), a.graphics.view.strokePath(), a.graphics.view.angle = a.options.angle;
    };
}), b.register('CGtRC', function(c, d) {
    a(c.exports, 'CircleHitCallback', function() {
        return _e;
    });
    const _e = (a, c, d, _e, _e) => {
        _e = null != _e ? _e : a.options.circleRadius + a.options.thickness / 2, _e = null != _e ? _e : a.options.circleRadius - a.options.thickness / 2;
        const f = -Math.PI / 2 - a.options.circlePercentage / 100 * Math.PI,
            g = -Math.PI / 2 + a.options.circlePercentage / 100 * Math.PI,
            h = Phaser.Math.Angle.Between(0, 0, c, d);
        if (h < f || h > g)
            return !1;
        const i = Phaser.Math.Distance.Between(0, 0, c, d);
        return !(i < _e || i > _e);
    };
}), b.register('tKAvH', function(c, d) {
    a(c.exports, 'CreateDashedLine', function() {
        return _f;
    });
    var _e = b('wGm/H');
    const _f = a => {
        const g = a.options.lineLength,
            h = a.options.thickness;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: g,
            height: h
        }), a.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha);
        const i = a.options.dashLength,
            j = a.options.dashSpacing;
        if (j >= g) {
            const k = Math.min(i, g);
            return void a.graphics.view.fillRect(-k / 2, -h / 2, k, h);
        }
        const k = i + j,
            l = Math.max(1, Math.floor(g / k)),
            m = g - l * k,
            n = Math.min(i, (m + i) / 2),
            o = Math.max(0, (m - i) / 2);
        a.graphics.view.fillRect(-g / 2 + o, -h / 2, n, h);
        let p = -g / 2 + o + n + j;
        for (let q = 0; q < l - 1; q++)
            a.graphics.view.fillRect(p, -h / 2, i, h), p += k;
        a.graphics.view.fillRect(q / 2 - o - n, -h / 2, n, h), a.graphics.view.angle = a.options.angle, (0, _e.SetLineBoundingBox)(a);
    };
}), b.register('wGm/H', function(c, d) {
    a(c.exports, 'SetLineBoundingBox', function() {
        return _f;
    });
    var e = b('Fp1Dk');
    const _f = a => {
        const g = a.x,
            h = a.y,
            i = (0, e.ConvertDegToRad)(a.options.angle),
            j = a.options.lineLength / 2,
            k = g - j * Math.cos(i),
            l = h - j * Math.sin(i),
            m = g + j * Math.cos(i),
            n = h + j * Math.sin(i),
            o = Math.min(k, m),
            p = Math.min(l, n),
            q = Math.max(k, m) - o,
            r = Math.max(l, n) - p;
        a.boundingBox.setHardcoded({
            width: q,
            height: r
        });
    };
}), b.register('hNU3K', function(c, d) {
    a(c.exports, 'CreateFilledCircle', function() {
        return _f;
    });
    var e = b('CGtRC');
    const _f = a => {
        const g = 2 * a.options.circleRadius + a.options.thickness / 2,
            h = 2 * a.options.circleRadius + a.options.thickness / 2,
            i = -Math.PI / 2 - a.options.circlePercentage / 100 * Math.PI,
            j = -Math.PI / 2 + a.options.circlePercentage / 100 * Math.PI;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: g,
            height: h,
            hitCallback: (g, h) => (0, e.CircleHitCallback)(a, g, h, 0, a.options.circleRadius)
        }), a.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha), a.graphics.view.slice(0, 0, a.options.circleRadius, i, j, !1), a.graphics.view.fillPath(), a.graphics.view.angle = a.options.angle;
    };
}), b.register('mmJTK', function(c, d) {
    a(c.exports, 'CreateSolidCircle', function() {
        return _f;
    });
    var e = b('CGtRC');
    const _f = a => {
        const g = 2 * a.options.circleRadius + a.options.thickness / 2,
            h = 2 * a.options.circleRadius + a.options.thickness / 2,
            i = -Math.PI / 2 - a.options.circlePercentage / 100 * Math.PI,
            j = -Math.PI / 2 + a.options.circlePercentage / 100 * Math.PI;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: g,
            height: h,
            hitCallback: (g, h) => (0, e.CircleHitCallback)(a, g, h)
        }), a.graphics.view.lineStyle(Math.min(a.options.thickness, 2 * a.options.circleRadius), Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha), a.graphics.view.arc(0, 0, a.options.circleRadius, i, j, !1, 0.01), a.graphics.view.strokePath(), a.graphics.view.angle = a.options.angle;
    };
}), b.register('3oV4c', function(c, d) {
    a(c.exports, 'CreateSolidLine', function() {
        return _f;
    });
    var e = b('wGm/H');
    const _f = a => {
        const g = a.options.lineLength,
            h = a.options.thickness;
        a.graphics = a.parts.add.graphics({
            x: 0,
            y: 0,
            width: g,
            height: h
        }), a.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(a.options.color).color, a.options.alpha), a.graphics.view.fillRect(-g / 2, -h / 2, g, h), a.graphics.view.angle = a.options.angle, (0, e.SetLineBoundingBox)(a);
    };
});