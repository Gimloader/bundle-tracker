import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./FetchScene.js";
import {
    n
} from "./isVersion.js";
import {
    r
} from "./InPhase.js";
import {
    t as i
} from "./Device.js";
import {
    n as a
} from "./TutorialConsts.js";
import {
    Ot as o,
    Tt as s
} from "./App-42.js";
var c = e => {
        let n = [],
            {
                options: r
            } = e;
        for (let e = 1; e <= 4; e++) {
            let t = r[`action${e}Text`];
            t && n.push({
                text: t,
                index: e
            })
        }
        return t().worldManager.devices.allDevices.filter(e => e.deviceOption.id === a.dialogueAction).filter(e => e.options.group === r.group || !e.options.group && !r.group).filter(e => !!e.options.text.length).filter(e => e.state.active === !0).sort((e, t) => e.y - t.y).forEach(e => {
            n.push({
                text: e.options.text,
                action: e.id
            })
        }), n.slice(0, 10)
    },
    l = class extends i {
        constructor(t) {
            if (super(t), this.openDeviceUI = () => {
                    this.deviceUI.open({
                        message: this.options.message,
                        actions: c(this),
                        send: (e, t) => {
                            this.sendToServerDevice(e, t)
                        },
                        font: this.options.font,
                        character: this.options.character,
                        typewriter: this.options.typewriter,
                        darkenBackground: this.options.darkenBackground
                    })
                }, this.onDialogueActionChange = () => {
                    this.deviceUI.update({
                        actions: c(this)
                    })
                }, r() && n()) {
                let t = o.Overlay;
                new s({
                    device: this,
                    baseColor: t.baseColor,
                    boxColor: t.boxColor,
                    content: {
                        icon: {
                            image: e(`devices/dialogue/icon.png`),
                            scale: .92
                        }
                    }
                })
            }
        }
    };
export {
    l as
    default
};