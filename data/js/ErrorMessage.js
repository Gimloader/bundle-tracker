import {
    j as e,
    a4 as t
} from "./_index.js";
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