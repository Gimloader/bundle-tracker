var e = (e = 21) => crypto.getRandomValues(new Uint8Array(e)).reduce((e, t) => (t &= 63, e += t < 36 ? t.toString(36) : t < 62 ? (t - 26).toString(36).toUpperCase() : t > 62 ? `-` : `_`, e), ``);
export {
    e as t
};