import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./stores-2.js";
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
    H as a,
    Ot as o,
    Tt as s,
    V as c
} from "./App-42.js";
import {
    t as l
} from "./SecondsToDuration.js";
var u = class extends i {
    constructor(i) {
        if (super(i), this.onStateChange = e => {
                this.updateState()
            }, this.onDestroy = () => {
                t.session.gameSession.widgets.widgets.replace(t.session.gameSession.widgets.widgets.filter(e => e.id !== this.id))
            }, this.updateState = () => {
                this.options.widgetType === a.image && this.state.active ? this.addImageToListOrUpdateOnList() : this.options.widgetType === a.gameTime && this.state.active ? this.addGameTimeToListOrUpdateOnList() : this.state.active && this.state.value !== void 0 && this.addToListOrUpdateOnList()
            }, this.addToListOrUpdateOnList = () => {
                this.state.value !== void 0 && (t.session.gameSession.widgets.widgets.find(e => e.id === this.id) && t.session.gameSession.widgets.widgets.replace(t.session.gameSession.widgets.widgets.map(e => e.id === this.id ? {
                    ...e,
                    statValue: this.state.value
                } : e)), t.session.gameSession.widgets.widgets.push({
                    type: a.statistic,
                    id: this.id,
                    y: this.y,
                    placement: this.options.widgetPlacement,
                    statName: this.options.statisticLabel,
                    statValue: this.state.value
                }))
            }, this.addGameTimeToListOrUpdateOnList = () => {
                if (this.state.value === void 0) return;
                let e = this.state.value,
                    n = Math.max(0, e / 1e3),
                    r = l(n);
                t.session.gameSession.widgets.widgets.find(e => e.id === this.id) && t.session.gameSession.widgets.widgets.replace(t.session.gameSession.widgets.widgets.map(e => e.id === this.id ? {
                    ...e,
                    gameTimeValue: r
                } : e)), t.session.gameSession.widgets.widgets.push({
                    type: a.gameTime,
                    id: this.id,
                    y: this.y,
                    placement: this.options.widgetPlacement,
                    gameTimeName: this.options.gameTimeLabel,
                    gameTimeValue: r
                })
            }, this.addImageToListOrUpdateOnList = () => {
                t.session.gameSession.widgets.widgets.find(e => e.id === this.id) && t.session.gameSession.widgets.widgets.replace(t.session.gameSession.widgets.widgets.map(e => e.id === this.id ? {
                    type: a.image,
                    id: this.id,
                    y: this.y,
                    placement: this.options.widgetPlacement,
                    imageHeight: this.options.imageHeight,
                    imageBackgroundColor: this.options.imageBackgroundColor,
                    imageUrl: c(this.options.imageUrl),
                    imageStyle: this.options.imageStyle
                } : e)), t.session.gameSession.widgets.widgets.push({
                    type: a.image,
                    id: this.id,
                    y: this.y,
                    placement: this.options.widgetPlacement,
                    imageHeight: this.options.imageHeight,
                    imageBackgroundColor: this.options.imageBackgroundColor,
                    imageUrl: c(this.options.imageUrl),
                    imageStyle: this.options.imageStyle
                })
            }, r() && n()) {
            let t = o.Overlay;
            new s({
                device: this,
                baseColor: t.baseColor,
                boxColor: t.boxColor,
                content: {
                    icon: {
                        image: e(`devices/end_of_game_widget/icon.png`)
                    }
                }
            })
        }
        this.updateState()
    }
};
export {
    u as
    default
};