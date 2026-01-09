import {
    a as n
} from "./FixSpinePlugin.js";
const p = e => {
    if (!e.view || !e.view.active) return;
    const t = {
            thickness: 2
        },
        i = e.options ? {
            ...t,
            ...e.options
        } : {
            ...t
        };
    n().plugins.get("rexOutlinePipeline").add(e.view, i)
};
export {
    p as A
};