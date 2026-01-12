import {
    r as e,
    a as o,
    h as s,
    $ as a
} from "./_index.js";
import {
    s as r
} from "./stores.js";
import {
    N as i
} from "./NavigateTo.js";
const l = e.createContext(r),
    m = () => {
        o({
            url: "/api/billing/stripe-key",
            success: t => r.checkout.stripePublicKey = t.key,
            error: () => s({
                title: "Our payments provider is currently down",
                content: "Please try again later",
                onOk: () => i(a)
            })
        })
    };
export {
    m as F, l as S
};