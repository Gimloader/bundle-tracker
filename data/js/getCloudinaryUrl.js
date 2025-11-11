const d = t => {
        const n = r(t);
        return n ? t.includes("/video/upload") ? `https://${o}/video/upload/${n}` : `https://${o}/image/upload/f_auto,fl_lossy,q_auto/${n}` : t
    },
    r = t => {
        if (!c.some(e => t.includes(e)) || t.includes(l) && !t.includes(`/${s}/`)) return null;
        const n = t.split("/");
        if (!n || !n.length || n.length < 2) return null;
        const i = n[n.length - 2],
            u = n[n.length - 1];
        return !i || !u || !i.startsWith("v") ? null : `${i}/${u}`
    },
    o = "media.gimkit.com",
    l = "res.cloudinary.com",
    s = "gimkit-production",
    c = [o, l];
export {
    d as g
};