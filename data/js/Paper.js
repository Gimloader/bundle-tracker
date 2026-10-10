import "./rolldown-runtime.js";
import {
    t as e
} from "./react-1.js";
import {
    t
} from "./jsx-runtime.js";
import {
    l as n,
    n as r
} from "./_index.js";
e();
var i = t(),
    a = e => (0, i.jsx)(o, {
        onClick: e.onClick,
        className: e.className,
        style: e.style,
        children: e.children
    }),
    o = n.div`
  box-shadow: 0 -1px 10px rgba(0, 0, 0, 0.05), 0 1px 4px rgba(0, 0, 0, 0.1),
    0 10px 30px #f3ece8;
  border-radius: 0.2em 0.2em 0 0;
  background: ${r.White};
  padding: 20px;
`;
export {
    a as t
};