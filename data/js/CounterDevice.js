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
} from "./Device.js";
import {
    t as i
} from "./LoadGoogleFontAfterSceneStart.js";
var a = {
        imageId: e(`devices/counter/frame.png`),
        imageUrl: e(`devices/counter/frame.png`)
    },
    o = {
        imageId: e(`devices/counter/background.png`),
        imageUrl: e(`devices/counter/background.png`)
    },
    s = class extends r {
        constructor(e) {
            if (super(e), this.textScale = 1, this.onStateChange = e => {
                    if (e === `counter`) {
                        var t;
                        (t = this.text) != null && t.view && (this.text.view.setText(this.state.counter + ``), this.updateTextScale(), this.tweens.add({
                            targets: [this.text.view],
                            duration: 100,
                            scaleX: this.textScale * .8,
                            scaleY: this.textScale * .8,
                            yoyo: !0
                        }))
                    }
                }, this.updateTextScale = () => {
                    this.textScale = Math.min(3 / this.text.view.text.length, 1), this.text.view.setScale(this.textScale)
                }, (n() || t()) && !this.options.visibleInGame) return;
            this.bg = this.parts.add.sprite(o), this.frame = this.parts.add.sprite(a), this.bg.view.setScale(.5), this.frame.view.setScale(.5);
            let r = (this.state.counter ?? this.options.startingValue ?? 0) + ``;
            this.text = this.parts.add.text({
                y: 2,
                textStyle: {
                    fontFamily: `Fugaz One`
                },
                text: r
            }), this.text.view.alpha = 0, i({
                familyName: `Fugaz One`,
                onLoad: () => {
                    this.isDestroyed || (this.text.view.setFontFamily(`'Fugaz One'`), this.text.view.alpha = 1)
                }
            }), this.updateTextScale()
        }
    };
export {
    s as
    default
};