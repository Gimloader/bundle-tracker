const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/LatexRenderer-BBPi56NQ.js", "assets/index-JueF_e_O.js", "assets/index-BdOndhxL.css", "assets/mathlive.min-r4T0zT1q.js"]))) => i.map(i => d[i]);
import {
    j as a,
    r,
    p as t
} from "./index-JueF_e_O.js";
const s = r.lazy(() => t(() => import("./LatexRenderer-BBPi56NQ.js"), __vite__mapDeps([0, 1, 2, 3]))),
    x = e => a.jsx(r.Suspense, {
        fallback: e.fallback || null,
        children: a.jsx(s, {
            latex: e.latex
        })
    });
export {
    x as L
};