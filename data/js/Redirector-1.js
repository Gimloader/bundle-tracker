import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
var n = e(t()),
    r = () => (n.useEffect(() => {
        window.location.href.includes(`/live`) && (window.location.href = window.location.href.replace(`/live`, `/join`))
    }, []), null);
export {
    r as
    default
};