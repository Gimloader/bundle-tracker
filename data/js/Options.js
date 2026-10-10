import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./slider.js";
import {
    t as r
} from "./jsx-runtime.js";
import {
    l as i,
    s as a
} from "./_index.js";
import {
    n as o,
    o as s,
    s as c
} from "./MapSound.js";
import {
    t as l
} from "./AmIGameOwner.js";
var u = e(t());

function d(e) {
    return (0, u.useSyncExternalStore)(c, () => o(e))
}
var f = r(),
    p = e => `${e}%`,
    m = e => {
        let t = d(`musicVolume`),
            r = d(`soundEffectVolume`);
        return (0, f.jsxs)(h, {
            $cardLayout: e.cardLayout,
            children: [l() ? (0, f.jsxs)(g, {
                $cardLayout: e.cardLayout,
                children: [(0, f.jsx)(_, {
                    $cardLayout: e.cardLayout,
                    children: `Music Volume`
                }), (0, f.jsx)(n, {
                    min: 0,
                    max: 100,
                    step: 1,
                    value: t * 100,
                    onChange: e => s(`musicVolume`, e / 100),
                    tooltip: {
                        formatter: p
                    }
                })]
            }) : null, (0, f.jsxs)(g, {
                $cardLayout: e.cardLayout,
                children: [(0, f.jsx)(_, {
                    $cardLayout: e.cardLayout,
                    children: `Sound Effect Volume`
                }), (0, f.jsx)(n, {
                    min: 0,
                    max: 100,
                    step: 1,
                    value: r * 100,
                    onChange: e => s(`soundEffectVolume`, e / 100),
                    tooltip: {
                        formatter: p
                    }
                })]
            })]
        })
    },
    h = i.div`
  display: flex;
  flex-direction: column;
  gap: ${e=>e.$cardLayout?`14px`:`20px`};
`,
    g = i.div`
  padding: ${e=>e.$cardLayout?`17px`:`0`};
  background: ${e=>e.$cardLayout?`rgba(255, 255, 255, 0.08)`:`transparent`};
  border-radius: ${e=>e.$cardLayout?`6px`:`0`};
`,
    _ = i.div`
  font-size: ${e=>e.$cardLayout?`16px`:`24px`};
  font-weight: ${a.Bold};
  margin-bottom: 15px;
`;
export {
    d as n, m as t
};