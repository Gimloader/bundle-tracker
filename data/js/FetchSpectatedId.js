import {
    t as e
} from "./stores-2.js";
import {
    r as t,
    t as n
} from "./FetchMyTeam.js";
var r = () => n() === t.spectatorsTeam,
    i = () => {
        if (r() && e.me.spectating.id !== ``) return e.me.spectating.id
    };
export {
    r as n, i as t
};