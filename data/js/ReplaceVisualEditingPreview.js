import {
    P as c,
    W as d,
    E as r,
    V as p
} from "./App-41.js";
import {
    a as l
} from "./FixSpinePlugin.js";
const h = (n, a) => {
        var i, t, s;
        const e = n.deviceOption.optionSchema.options.find(o => o.key === a);
        return {
            min: (i = e == null ? void 0 : e.option.props) == null ? void 0 : i.min,
            max: (t = e == null ? void 0 : e.option.props) == null ? void 0 : t.max,
            step: (s = e == null ? void 0 : e.option.props) == null ? void 0 : s.step
        }
    },
    v = n => {
        l().worldManager.devices.getDeviceById(n.id) && c(n)
    },
    D = (n, a, e) => {
        const i = d(),
            t = r();
        if (!t || !i) return;
        const s = t.layers.isOnNaturalDepth() ? void 0 : a + t.layers.getDepthShift();
        v({
            deviceOption: i.deviceOption,
            id: p.previewId,
            x: n,
            y: a,
            depth: s,
            layerId: t.layers.getLayer(),
            name: i.name,
            isPreview: !0,
            options: {
                ...i.options,
                ...e
            },
            placedByClient: !0,
            state: i.deviceOption.defaultState
        })
    };
export {
    h as F, D as R
};