var s = {};
let e;
const n = () => {
        var r;
        if (e) return e;
        if (s.CDN_MAP_ASSETS_URL !== void 0) return e = s.CDN_MAP_ASSETS_URL, e;
        const t = (r = document.querySelector('meta[property="cdn-map-assets-url"]')) == null ? void 0 : r.getAttribute("content");
        return t !== void 0 && t !== "$CDN_MAP_ASSETS_URL" ? (e = t, e) : ""
    },
    a = t => {
        const r = n();
        return t.startsWith("/assets/map") ? `${r}${t}` : `${r}/assets/map/${t}`
    };
export {
    a as G
};