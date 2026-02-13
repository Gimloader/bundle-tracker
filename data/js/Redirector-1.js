import {
    r as e
} from "./_index.js";
const r = () => (e.useEffect(() => {
    window.location.href.includes("/live") && (window.location.href = window.location.href.replace("/live", "/join"))
}, []), null);
export {
    r as
    default
};