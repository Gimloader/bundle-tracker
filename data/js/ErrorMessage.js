import {
    j as e,
    a0 as t
} from "./index-JueF_e_O.js";
const o = r => r.error ? e.jsx(t, {
    message: "Error",
    style: r.style,
    type: "error",
    description: r.error && r.error.message && r.error.message.text ? r.error.message.text : typeof r.error == "string" ? r.error : "Unknown Error. Please try again.",
    showIcon: !0
}) : null;
export {
    o as E
};