import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./isVersion.js";
import {
    t as n
} from "./InPhase.js";
import {
    t as r
} from "./FetchMyId.js";
import {
    t as i
} from "./Device.js";
var a = {
        imageId: `password_lock`,
        imageUrl: e(`devices/password_lock/icon.png`)
    },
    o = function(e) {
        return e.guess = `guess`, e
    }({}),
    s = function(e) {
        return e.incorrect = `incorrect`, e
    }({}),
    c = class extends i {
        constructor(e) {
            super(e), this.incorrectCounter = 0, this.guess = e => {
                this.sendToServerDevice(o.guess, {
                    password: e
                })
            }, this.openDeviceUI = () => {
                this.deviceUI.open({
                    maxAttempts: this.options.maxAttempts,
                    useMaxAttempts: this.options.useMaxAttempts,
                    attempts: this.state.attempts,
                    guess: this.guess,
                    incorrectCounter: this.incorrectCounter
                })
            }, this.onStateChange = e => {
                e === `attempts` && this.deviceUI.update({
                    attempts: this.state.attempts
                })
            }, this.onMessage = e => {
                e.key === s.incorrect && (e == null ? void 0 : e.data) === r() && (this.incorrectCounter += 1, this.deviceUI.update({
                    incorrectCounter: this.incorrectCounter
                }))
            }, !(t() || n()) && (this.layers.forceDepthManually(0), this.parts.add.sprite(a))
        }
    };
export {
    c as
    default
};