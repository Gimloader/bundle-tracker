import {
    q as e
} from "./utils.js";
import {
    n as t
} from "./Company.js";
var n = n => n === e.pro ? `${t} Pro` : n === e.go ? `${t} Go` : n === e.proPass ? `${t} Pro (Monthly)` : n === e.basic ? `${t} Basic` : `Unknown ${t} Plan`;
export {
    n as t
};