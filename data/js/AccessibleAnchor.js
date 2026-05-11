import {
    j as n,
    a5 as l
} from "./_index.js";
const i = e => {
    const a = t => {
        e.onClick && t.key === "Enter" && (t.preventDefault(), e.onClick())
    };
    return e.external || !e.to ? n.jsx("a", {
        href: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        onKeyPress: a,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    }) : n.jsx(l, {
        to: e.to,
        tabIndex: Number(e.tabIndex || "0"),
        onClick: e.onClick,
        className: e.className,
        target: e.target,
        style: e.style,
        children: e.children
    })
};
export {
    i as A
};