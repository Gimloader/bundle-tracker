const c = e => (e / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "USD"
});
export {
    c
};