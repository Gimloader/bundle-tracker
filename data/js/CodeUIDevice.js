import {
    t as e
} from "./GetAssetPath.js";
import {
    n as t
} from "./isVersion.js";
import {
    r as n
} from "./InPhase.js";
import {
    t as r
} from "./Device.js";
import {
    Ot as i,
    Tt as a
} from "./App-42.js";
import {
    t as o
} from "./LoadGoogleFontAfterSceneStart.js";
var s = function(e) {
        return e.callAction = `callAction`, e
    }({}),
    c = class extends r {
        constructor(r) {
            if (super(r), this.openDeviceUI = () => {
                    this.deviceUI.open({
                        style: this.options.style,
                        defaultFontFamily: this.options.defaultFontFamily,
                        defaultBackgroundColor: this.options.defaultBackgroundColor,
                        closableByUser: this.options.closableByUser,
                        code: this.options.code
                    })
                }, this.callAction = e => {
                    this.sendToServerDevice(s.callAction, {
                        calledActionName: e
                    })
                }, o({
                    familyName: this.options.defaultFontFamily
                }), n() && t()) {
                let t = i.Overlay;
                new a({
                    device: this,
                    baseColor: t.baseColor,
                    boxColor: t.boxColor,
                    content: {
                        icon: {
                            image: e(`devices/code_ui/icon.png`),
                            scale: .92
                        }
                    }
                })
            }
        }
    };
export {
    c as
    default
};