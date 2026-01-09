import {
    s as m,
    g as a,
    S as n,
    I as l,
    i as c,
    d as f
} from "./FixSpinePlugin.js";
import {
    aX as g,
    al as w,
    a8 as y
} from "./App-41.js";
import {
    h as T
} from "./howler.js";
import {
    S as P
} from "./SecondsToDuration.js";
import {
    C as h
} from "./Consts.js";
import {
    I as M
} from "./ActionButton.js";
import {
    G as S
} from "./GetAssetPath.js";
import "./_index.js";
import "./MapModeType.js";
import "./MapStyle.js";
import "./playSound.js";
import "./Button.js";
import "./polished.esm.js";
import "./inheritsLoose.js";
import "./mobxreact.esm.js";
import "./index-21.js";
import "./QuizTypes.js";
import "./TutorialConsts.js";
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
import "./index-5.js";
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
import "./FillRemainingSpace.js";
import "./index-24.js";
var r = (t => (t.stopped = "stopped", t.playing = "playing", t.fadingOut = "fadingOut", t))(r || {});
const A = t => {
        if (M()) return "";
        if (t.options.musicUrl) return g(t.options.musicUrl);
        const o = t.options.presetMusicId;
        return o !== "NONE" ? S("music/presets/" + o + ".mp3") : null
    },
    u = t => t.options.musicUrl ? t.options.musicVolume : 25,
    O = !1,
    e = new Map,
    p = new Map;
class kt extends w {
    constructor(o) {
        if (super(o), this.onUpdate = () => {
                if (!this.state.countdownActive && !this.state.countupActive) return;
                const i = m.session.gameTime,
                    s = this.state.countdownActive ? this.state.countdownEndTimestamp - i : i - this.state.countupStartTimestamp,
                    d = Math.max(0, s / 1e3);
                m.session.gameClockDuration = P(d)
            }, this.onMasterVolumeChange = () => {
                this.howl && this.howl.volume(a({
                    volume: u(this) / 100,
                    type: n.music
                }))
            }, this.onStateChange = i => {
                i === "gameMusicState" && (this.state.gameMusicState === r.playing ? this.play() : this.state.gameMusicState === r.stopped ? this.stop() : this.state.gameMusicState === r.fadingOut && this.fadeOut()), i === "allowedToAddTimeToEndCountdown" && (m.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown)
            }, this.onDestroy = i => {
                var s;
                i.isBeingReplaced || ((s = e.get(this.id)) == null || s.unload(), e.delete(this.id), p.delete(this.id))
            }, l() && c(), f() && y()) {
            if (!e.get(this.id)) {
                const s = new T.Howl({
                    src: [A(this)],
                    preload: !0,
                    loop: !0
                });
                e.set(this.id, s)
            }
            this.state.gameMusicState === r.playing && this.play(), this.state.gameMusicState === r.stopped && this.isPlaying && this.stop()
        }
        l() && e.delete(this.id), m.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown
    }
    get howl() {
        return e.get(this.id)
    }
    get isPlaying() {
        return p.get(this.id) || !1
    }
    set isPlaying(o) {
        p.set(this.id, o)
    }
    play() {
        !this.howl || this.isPlaying || (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, a({
            volume: u(this) / 100,
            type: n.music
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
    kt as
    default
};