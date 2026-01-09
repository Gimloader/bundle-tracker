const r = {
    zonedDeviceViews: "zoned-device-views"
};
var o = (e => (e.visible = "visible", e.bordersOnly = "bordersOnly", e.fullyHidden = "fullyHidden", e))(o || {});
const n = () => {
        const e = localStorage.getItem(r.zonedDeviceViews);
        return e || "bordersOnly"
    },
    s = e => n() !== "fullyHidden",
    l = e => n() !== "bordersOnly",
    d = {
        shouldShow: s,
        shouldShowInnerZone: l
    };
export {
    r as D, o as Z, d as a
};