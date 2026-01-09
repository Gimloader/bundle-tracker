const __vite__mapDeps = (i, m = __vite__mapDeps, d = (m.f || (m.f = ["assets/NotionContent.js", "assets/_index.js", "assets/index-BdOndhxL.css", "assets/NotionContent-i0skEamo.css"]))) => i.map(i => d[i]);
import {
    j as t,
    A as o,
    r as s,
    p as r
} from "./_index.js";
const i = s.lazy(() => r(() => import("./NotionContent.js"), __vite__mapDeps([0, 1, 2, 3]))),
    l = e => {
        const a = e.hideSkeleton ? t.jsx("div", {
            className: "maxWidth"
        }) : t.jsx("div", {
            className: "maxWidth",
            children: t.jsx(o, {
                active: !0,
                title: !1,
                paragraph: {
                    rows: 9
                }
            })
        });
        return t.jsx(s.Suspense, {
            fallback: a,
            children: t.jsx(i, {
                ...e
            })
        })
    };
export {
    l as N
};