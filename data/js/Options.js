import {
    r as f,
    j as o,
    d as e,
    F as p
} from "./_index.js";
import {
    s as g,
    g as y,
    b as n
} from "./MapSound.js";
import {
    ao as $
} from "./App-41.js";
import {
    S as s
} from "./index-28.js";

function r(t) {
    return f.useSyncExternalStore(g, () => y(t))
}
const u = t => `${t}%`,
    E = t => {
        const d = r("musicVolume"),
            m = r("soundEffectVolume"),
            l = a => n("musicVolume", a / 100),
            x = a => n("soundEffectVolume", a / 100);
        return o.jsxs(L, {
            $cardLayout: t.cardLayout,
            children: [$() ? o.jsxs(c, {
                $cardLayout: t.cardLayout,
                children: [o.jsx(i, {
                    $cardLayout: t.cardLayout,
                    children: "Music Volume"
                }), o.jsx(s, {
                    min: 0,
                    max: 100,
                    step: 1,
                    value: d * 100,
                    onChange: l,
                    tooltip: {
                        formatter: u
                    }
                })]
            }) : null, o.jsxs(c, {
                $cardLayout: t.cardLayout,
                children: [o.jsx(i, {
                    $cardLayout: t.cardLayout,
                    children: "Sound Effect Volume"
                }), o.jsx(s, {
                    min: 0,
                    max: 100,
                    step: 1,
                    value: m * 100,
                    onChange: x,
                    tooltip: {
                        formatter: u
                    }
                })]
            })]
        })
    },
    L = e.div`
  display: flex;
  flex-direction: column;
  gap: ${t=>t.$cardLayout?"14px":"20px"};
`,
    c = e.div`
  padding: ${t=>t.$cardLayout?"17px":"0"};
  background: ${t=>t.$cardLayout?"rgba(255, 255, 255, 0.08)":"transparent"};
  border-radius: ${t=>t.$cardLayout?"6px":"0"};
`,
    i = e.div`
  font-size: ${t=>t.$cardLayout?"16px":"24px"};
  font-weight: ${p.Bold};
  margin-bottom: 15px;
`;
export {
    E as O, r as u
};