import {
    h as l
} from "./howler.js";
import {
    al as n,
    a8 as u,
    aX as d
} from "./App-41.js";
import {
    g as m,
    S as a,
    d as g,
    I as f
} from "./FixSpinePlugin.js";
import {
    G as c
} from "./GetAssetPath.js";
import {
    C as h
} from "./Consts.js";
import "./_index.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./MapModeType.js";
import "./TutorialConsts.js";
import "./ActionButton.js";
import "./index-5.js";
import "./playSound.js";
import "./index-18.js";
import "./context.js";
import "./FontAwesomeIcon.js";
import "./Centered.js";
import "./CapitalizeFirstLetter.js";
import "./index-4.js";
import "./motion.js";
import "./index-2.js";
import "./index-14.js";
import "./EditOutlined.js";
import "./styleChecker.js";
import "./index-3.js";
import "./CheckOutlined.js";
import "./CopyOutlined.js";
import "./SixteenByNineScaler.js";
import "./index-20.js";
import "./index-22.js";
import "./index-1.js";
import "./progress.js";
import "./ElementIds.js";
import "./SeasonTicketName.js";
import "./useQuery.js";
import "./___vite-browser-external_commonjs-proxy.js";
import "./util-1.js";
import "./util-2.js";
import "./Shortcut.js";
import "./Names.js";
import "./useWillUnmount.js";
import "./use-motion-value.js";
import "./use-transform.js";
import "./index-6.js";
import "./AccessibleAnchor.js";
import "./CircularProgress.js";
import "./capitalize.js";
import "./index-17.js";
import "./use-force-update.js";
import "./GimkitLiveQuestion.js";
import "./Text.js";
import "./getCloudinaryUrl.js";
import "./LazyLatexRenderer.js";
import "./Tooltip.js";
import "./index-9.js";
import "./index-23.js";
import "./useIntervalWhen.js";
import "./index-10.js";
import "./move.js";
import "./react-flip-move.es.js";
import "./sounds.js";
import "./App-5.js";
import "./AnimatedBackground-2.js";
import "./useDebouncedValue.js";
import "./MapStyle.js";
import "./FillRemainingSpace.js";
import "./index-24.js";
const w = {
    imageId: "music_device",
    imageUrl: c("devices/music/music-device.png")
};
var i = (o => (o.stopped = "stopped", o.playing = "playing", o.fadingOut = "fadingOut", o))(i || {});
const t = new Map,
    p = new Map;
class Et extends n {
    constructor(e) {
        if (super(e), this.onMasterVolumeChange = () => {
                this.howl && this.howl.volume(m({
                    volume: this.options.volume / 100,
                    type: a.music
                }))
            }, this.onStateChange = s => {
                s === "currentState" && (this.state.currentState === i.playing ? this.play() : this.state.currentState === i.stopped ? this.stop() : this.state.currentState === i.fadingOut && this.fadeOut())
            }, this.onDestroy = s => {
                var r;
                s.isBeingReplaced || ((r = t.get(this.id)) == null || r.unload(), t.delete(this.id), p.delete(this.id))
            }, g() && u()) {
            if (!t.get(this.id)) {
                const r = new l.Howl({
                    src: [d(this.options.audioUrl)],
                    volume: this.options.volume / 100,
                    preload: !0,
                    loop: !0
                });
                t.set(this.id, r)
            }
            this.state.currentState === i.playing && this.play(), this.state.currentState === i.stopped && this.isPlaying && this.stop()
        }
        f() && (this.parts.add.sprite(w), t.delete(this.id))
    }
    get howl() {
        return t.get(this.id)
    }
    get isPlaying() {
        return p.get(this.id) || !1
    }
    set isPlaying(e) {
        p.set(this.id, e)
    }
    play() {
        !this.howl || this.isPlaying || (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, m({
            volume: this.options.volume / 100,
            type: a.music
        }), h.fadeInTime))
    }
    stop() {
        !this.howl || !this.isPlaying || (this.howl.stop(), this.isPlaying = !1)
    }
    fadeOut() {
        !this.howl || !this.isPlaying || (this.howl.fade(this.howl.volume(), 0, h.fadeOutTime), this.isPlaying = !1)
    }
}
export {
    Et as MusicDevice, Et as
    default
};