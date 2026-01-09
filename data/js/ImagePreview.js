import {
    r as a,
    j as o,
    M as n,
    e as l,
    d as c
} from "./_index.js";
import {
    g
} from "./getCloudinaryUrl.js";
const d = c.img.attrs(i => ({
        src: i.image
    }))`
  cursor: pointer;
  height: ${i=>i.size}px;
  width: ${i=>i.size}px;
  margin-right: ${i=>i.customRightMargin?i.customRightMargin:0}px;
  border-radius: 5px;
  ${i=>i.showBorder&&`border: solid ${l.Black} 1px;`}
  flex-shrink: 0;
  object-fit: cover;
`,
    x = i => {
        const [r, t] = a.useState(!1), s = e => {
            e.stopPropagation(), i.onClick && i.onClick(), i.blockModalOpen || t(!0)
        };
        return o.jsxs(o.Fragment, {
            children: [o.jsx(d, {
                ...i,
                onClick: s
            }), o.jsx(n, {
                open: r,
                onCancel: e => {
                    e.stopPropagation(), t(!1)
                },
                footer: null,
                closable: !1,
                children: o.jsx("img", {
                    src: g(i.image),
                    style: {
                        width: "100%"
                    }
                })
            })]
        })
    };
export {
    x as I
};