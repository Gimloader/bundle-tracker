import {
    t as e
} from "./GetAssetPath.js";
import {
    t
} from "./MapSound.js";
import {
    o as n,
    s as r
} from "./FixPhaserBootProcess.js";
import {
    t as i
} from "./stores-2.js";
import {
    n as a
} from "./isVersion.js";
import {
    r as o,
    t as s
} from "./InPhase.js";
import {
    t as c
} from "./Device.js";
import {
    a as l
} from "./ActionButton.js";
import {
    t as u
} from "./AmIGameOwner.js";
import {
    wt as d
} from "./App-42.js";
import {
    t as f
} from "./SecondsToDuration.js";
import {
    t as p
} from "./Consts.js";
var m = function(e) {
        return e.stopped = `stopped`, e.playing = `playing`, e.fadingOut = `fadingOut`, e
    }({}),
    h = t => {
        if (l()) return ``;
        if (t.options.musicUrl) return d(t.options.musicUrl);
        let n = t.options.presetMusicId;
        return n === `NONE` ? null : e(`music/presets/` + n + `.mp3`)
    },
    g = e => e.options.musicUrl ? e.options.musicVolume : 25,
    _ = new Map,
    v = new Map,
    y = class extends c {
        constructor(e) {
            if (super(e), this.onUpdate = () => {
                    if (!this.state.countdownActive && !this.state.countupActive) return;
                    let e = i.session.gameTime,
                        t = this.state.countdownActive ? this.state.countdownEndTimestamp - e : e - this.state.countupStartTimestamp,
                        n = Math.max(0, t / 1e3);
                    i.session.gameClockDuration = f(n)
                }, this.onMasterVolumeChange = () => {
                    this.howl && this.howl.volume(r({
                        volume: g(this) / 100,
                        type: n.music
                    }))
                }, this.onStateChange = e => {
                    e === `gameMusicState` && (this.state.gameMusicState === m.playing ? this.play() : this.state.gameMusicState === m.stopped ? this.stop() : this.state.gameMusicState === m.fadingOut && this.fadeOut()), e === `allowedToAddTimeToEndCountdown` && (i.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown)
                }, this.onDestroy = e => {
                    if (!e.isBeingReplaced) {
                        var t;
                        (t = _.get(this.id)) == null || t.unload(), _.delete(this.id), v.delete(this.id)
                    }
                }, o() && a(), s() && u()) {
                if (!_.get(this.id)) {
                    let e = new t({
                        src: [h(this)],
                        preload: !0,
                        loop: !0
                    });
                    _.set(this.id, e)
                }
                this.state.gameMusicState === m.playing && this.play(), this.state.gameMusicState === m.stopped && this.isPlaying && this.stop()
            }
            o() && _.delete(this.id), i.session.canAddGameTime = this.state.allowedToAddTimeToEndCountdown
        }
        get howl() {
            return _.get(this.id)
        }
        get isPlaying() {
            return v.get(this.id) || !1
        }
        set isPlaying(e) {
            v.set(this.id, e)
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, r({
                volume: g(this) / 100,
                type: n.music
            }), p.fadeInTime))
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1)
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, p.fadeOutTime), this.isPlaying = !1)
        }
    };
export {
    y as
    default
};