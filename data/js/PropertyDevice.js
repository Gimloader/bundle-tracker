import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./stores-2.js";
import {
    t as n
} from "./isVersion.js";
import {
    t as r
} from "./InPhase.js";
import {
    t as i
} from "./Device.js";
import {
    Ot as a,
    Tt as o
} from "./App-42.js";
var s = function(e) {
        return e.boolean = `boolean`, e.number = `number`, e.string = `string`, e
    }({}),
    c = class extends i {
        constructor(t) {
            if (super(t), this.onStateChange = e => {
                    (this.options.valueType === s.boolean && e === `valueBoolean` || this.options.valueType === s.number && e === `valueNumber` || this.options.valueType === s.string && e === `valueString`) && this.setStoredValue()
                }, this.setStoredValue(), r() || n()) return;
            let i = a.Overlay;
            new o({
                device: this,
                baseColor: i.baseColor,
                boxColor: i.boxColor,
                content: {
                    text: {
                        text: this.options.propertyName === `` ? `property` : this.options.propertyName,
                        shiftY: 15
                    },
                    icon: {
                        image: e(`devices/property/icon.png`),
                        scale: .5,
                        shiftY: -15
                    }
                }
            })
        }
        setStoredValue() {
            this.options.valueType === s.boolean ? t.me.properties.set(this.options.propertyName, this.state.valueBoolean) : this.options.valueType === s.number ? t.me.properties.set(this.options.propertyName, this.state.valueNumber) : this.options.valueType === s.string && t.me.properties.set(this.options.propertyName, this.state.valueString)
        }
        destroy(e) {
            super.destroy(e), t.me.properties.delete(this.options.propertyName)
        }
    };
export {
    c as
    default
};