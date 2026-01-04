import {
    h as e
} from "./howler.js";
import {
    G as s
} from "./GetAssetPath.js";
const c = {
    correct: new e.Howl({
        src: [s("devices/gimkit_live_question/sounds/correct.mp3")],
        volume: .7,
        preload: !1
    }),
    correctCash: new e.Howl({
        src: [s("devices/gimkit_live_question/sounds/correct_cash.mp3")],
        preload: !1
    }),
    incorrect: new e.Howl({
        src: [s("devices/gimkit_live_question/sounds/incorrect.mp3")],
        preload: !1
    }),
    click: new e.Howl({
        src: [s("devices/gimkit_live_question/sounds/click.mp3")],
        preload: !1
    })
};
export {
    c as G
};