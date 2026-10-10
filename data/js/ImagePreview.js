import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./modal.js";
import {
    t as r
} from "./jsx-runtime.js";
import {
    l as i,
    n as a
} from "./_index.js";
import {
    t as o
} from "./getCloudinaryUrl.js";
var s = e(t()),
    c = r(),
    l = i.img.attrs(e => ({
        src: e.image
    }))`
  cursor: pointer;
  height: ${e=>e.size}px;
  width: ${e=>e.size}px;
  margin-right: ${e=>e.customRightMargin?e.customRightMargin:0}px;
  border-radius: 5px;
  ${e=>e.showBorder&&`border: solid ${a.Black} 1px;`}
  flex-shrink: 0;
  object-fit: cover;
`,
    u = e => {
        let [t, r] = s.useState(!1), i = t => {
            t.stopPropagation(), e.onClick && e.onClick(), e.blockModalOpen || r(!0)
        };
        return (0, c.jsxs)(c.Fragment, {
            children: [(0, c.jsx)(l, {
                ...e,
                onClick: i
            }), (0, c.jsx)(n, {
                open: t,
                onCancel: e => {
                    e.stopPropagation(), r(!1)
                },
                footer: null,
                closable: !1,
                children: (0, c.jsx)(`img`, {
                    src: o(e.image),
                    style: {
                        width: `100%`
                    }
                })
            })]
        })
    };
export {
    u as t
};