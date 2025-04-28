function a(b, c, d, e) {
    Object.defineProperty(b, c, {
        get: d,
        set: e,
        enumerable: !0,
        configurable: !0
    });
}
var a = ('undefined' != typeof globalThis ? globalThis : 'undefined' != typeof self ? self : 'undefined' != typeof window ? window : 'undefined' != typeof global ? global : {}).parcelRequire388b;
a.register('Hx0ga', function(b, c) {
    var d;
    d = b.exports, Object.defineProperty(d, '__esModule', {
        value: !0,
        configurable: !0
    }), _i(b.exports, 'OutlineDevice', function() {
        return _h;
    }), _i(b.exports, 'default', function() {
        return _i;
    });
    var e = a('1bFPu'),
        f = a('I35Ay'),
        g = a('jhkRw');
    class _h extends f.default {
        constructor(_i) {
            super(_i), (0, e.default)(this, 'onStateChange', _i => {}), (0, g.CreateVisuals)(this);
        }
    }
    var _i = _h;
}), a.register('jhkRw', function(b, c) {
    i(b.exports, 'CreateVisuals', function() {
        return _j;
    });
    var d = a('yl0a4'),
        e = a('l4Rhv'),
        f = a('LWBoF'),
        g = a('o0xoR'),
        h = a('C/u3U'),
        i = a('9W3iy');
    const _j = i => {
        const k = i.options.shape === d.OutlineShape.line,
            l = i.options.shape === d.OutlineShape.circle,
            m = i.options.style === d.OutlineStyle.solid,
            n = i.options.style === d.OutlineStyle.dashed;
        i.options.circleFill && l ? (0, g.CreateFilledCircle)(i) : k && m ? (0, i.CreateSolidLine)(i) : l && m ? (0, h.CreateSolidCircle)(i) : k && n ? (0, f.CreateDashedLine)(i) : l && n && (0, e.CreateDashedCircle)(i);
    };
}), a.register('yl0a4', function(b, c) {
    let d;
    var e;
    let f;
    var g;
    i(b.exports, 'OutlineShape', function() {
        return d;
    }), i(b.exports, 'OutlineStyle', function() {
        return f;
    }), (e = d || (d = {})).line = 'rectangle', e.circle = 'circle', (g = f || (f = {})).solid = 'solid', g.dashed = 'dashed';
}), a.register('l4Rhv', function(b, c) {
    i(b.exports, 'CreateDashedCircle', function() {
        return _e;
    });
    var d = a('zYVjR');
    const _e = i => {
        const f = 2 * i.options.circleRadius + i.options.thickness / 2,
            g = 2 * i.options.circleRadius + i.options.thickness / 2,
            h = -Math.PI / 2 - i.options.circlePercentage / 100 * Math.PI,
            i = -Math.PI / 2 + i.options.circlePercentage / 100 * Math.PI;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: f,
            height: g,
            hitCallback: (f, g) => (0, d.CircleHitCallback)(i, f, g)
        }), i.graphics.view.lineStyle(Math.min(i.options.thickness, 2 * i.options.circleRadius), Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha);
        const j = i.options.circlePercentage / 100 * Math.PI * 2,
            k = Math.PI * i.options.circleRadius * 2,
            l = k * i.options.circlePercentage / 100,
            m = i.options.dashLength,
            n = i.options.dashSpacing,
            o = m / k * Math.PI * 2,
            p = n / k * Math.PI * 2;
        if (p >= l) {
            const q = Math.min(h, -o / 2),
                r = Math.max(i, o / 2);
            return void i.graphics.view.arc(0, 0, i.options.circleRadius, q, r, !1, 0.01);
        }
        const q = o + p,
            r = Math.max(1, Math.floor(j / q)),
            s = j - r * q,
            t = Math.min(o, (s + o) / 2),
            u = Math.max(0, (s - o) / 2);
        i.graphics.view.beginPath(), i.graphics.view.arc(0, 0, i.options.circleRadius, h + u, h + u + t, !1, 0.01), i.graphics.view.strokePath();
        let v = h + u + t + p;
        for (let w = 0; w < r - 1; w++)
            i.graphics.view.beginPath(), i.graphics.view.arc(0, 0, i.options.circleRadius, v, v + o, !1, 0.01), i.graphics.view.strokePath(), v += q;
        i.graphics.view.beginPath(), i.graphics.view.arc(0, 0, i.options.circleRadius, i - u - t, i - u, !1, 0.01), i.graphics.view.strokePath(), i.graphics.view.angle = i.options.angle;
    };
}), a.register('zYVjR', function(b, c) {
    i(b.exports, 'CircleHitCallback', function() {
        return _d;
    });
    const _d = (i, b, c, _d, _d) => {
        _d = null != _d ? _d : i.options.circleRadius + i.options.thickness / 2, _d = null != _d ? _d : i.options.circleRadius - i.options.thickness / 2;
        const e = -Math.PI / 2 - i.options.circlePercentage / 100 * Math.PI,
            f = -Math.PI / 2 + i.options.circlePercentage / 100 * Math.PI,
            g = Phaser.Math.Angle.Between(0, 0, b, c);
        if (g < e || g > f)
            return !1;
        const h = Phaser.Math.Distance.Between(0, 0, b, c);
        return !(h < _d || h > _d);
    };
}), a.register('LWBoF', function(b, c) {
    i(b.exports, 'CreateDashedLine', function() {
        return _e;
    });
    var _d = a('yrAFK');
    const _e = i => {
        const f = i.options.lineLength,
            g = i.options.thickness;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: f,
            height: g
        }), i.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha);
        const h = i.options.dashLength,
            i = i.options.dashSpacing;
        if (i >= f) {
            const j = Math.min(h, f);
            return void i.graphics.view.fillRect(-j / 2, -g / 2, j, g);
        }
        const j = h + i,
            k = Math.max(1, Math.floor(f / j)),
            l = f - k * j,
            m = Math.min(h, (l + h) / 2),
            n = Math.max(0, (l - h) / 2);
        i.graphics.view.fillRect(-f / 2 + n, -g / 2, m, g);
        let o = -f / 2 + n + m + i;
        for (let p = 0; p < k - 1; p++)
            i.graphics.view.fillRect(o, -g / 2, h, g), o += j;
        i.graphics.view.fillRect(p / 2 - n - m, -g / 2, m, g), i.graphics.view.angle = i.options.angle, (0, _d.SetLineBoundingBox)(i);
    };
}), a.register('yrAFK', function(b, c) {
    i(b.exports, 'SetLineBoundingBox', function() {
        return _e;
    });
    var d = a('MfvC6');
    const _e = i => {
        const f = i.x,
            g = i.y,
            h = (0, d.ConvertDegToRad)(i.options.angle),
            i = i.options.lineLength / 2,
            j = f - i * Math.cos(h),
            k = g - i * Math.sin(h),
            l = f + i * Math.cos(h),
            m = g + i * Math.sin(h),
            n = Math.min(j, l),
            o = Math.min(k, m),
            p = Math.max(j, l) - n,
            q = Math.max(k, m) - o;
        i.boundingBox.setHardcoded({
            width: p,
            height: q
        });
    };
}), a.register('o0xoR', function(b, c) {
    i(b.exports, 'CreateFilledCircle', function() {
        return _e;
    });
    var d = a('zYVjR');
    const _e = i => {
        const f = 2 * i.options.circleRadius + i.options.thickness / 2,
            g = 2 * i.options.circleRadius + i.options.thickness / 2,
            h = -Math.PI / 2 - i.options.circlePercentage / 100 * Math.PI,
            i = -Math.PI / 2 + i.options.circlePercentage / 100 * Math.PI;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: f,
            height: g,
            hitCallback: (f, g) => (0, d.CircleHitCallback)(i, f, g, 0, i.options.circleRadius)
        }), i.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha), i.graphics.view.slice(0, 0, i.options.circleRadius, h, i, !1), i.graphics.view.fillPath(), i.graphics.view.angle = i.options.angle;
    };
}), a.register('C/u3U', function(b, c) {
    i(b.exports, 'CreateSolidCircle', function() {
        return _e;
    });
    var d = a('zYVjR');
    const _e = i => {
        const f = 2 * i.options.circleRadius + i.options.thickness / 2,
            g = 2 * i.options.circleRadius + i.options.thickness / 2,
            h = -Math.PI / 2 - i.options.circlePercentage / 100 * Math.PI,
            i = -Math.PI / 2 + i.options.circlePercentage / 100 * Math.PI;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: f,
            height: g,
            hitCallback: (f, g) => (0, d.CircleHitCallback)(i, f, g)
        }), i.graphics.view.lineStyle(Math.min(i.options.thickness, 2 * i.options.circleRadius), Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha), i.graphics.view.arc(0, 0, i.options.circleRadius, h, i, !1, 0.01), i.graphics.view.strokePath(), i.graphics.view.angle = i.options.angle;
    };
}), a.register('9W3iy', function(b, c) {
    i(b.exports, 'CreateSolidLine', function() {
        return _e;
    });
    var d = a('yrAFK');
    const _e = i => {
        const f = i.options.lineLength,
            g = i.options.thickness;
        i.graphics = i.parts.add.graphics({
            x: 0,
            y: 0,
            width: f,
            height: g
        }), i.graphics.view.fillStyle(Phaser.Display.Color.HexStringToColor(i.options.color).color, i.options.alpha), i.graphics.view.fillRect(-f / 2, -g / 2, f, g), i.graphics.view.angle = i.options.angle, (0, d.SetLineBoundingBox)(i);
    };
});