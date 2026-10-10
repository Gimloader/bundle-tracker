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
    r as i,
    t as a
} from "./InPhase.js";
import {
    t as o
} from "./Device.js";
import {
    t as s
} from "./AmIGameOwner.js";
import {
    wt as c
} from "./App-42.js";
import {
    t as l
} from "./Consts.js";
var u = {
        imageId: `music_device`,
        imageUrl: e(`devices/music/music-device.png`)
    },
    d = function(e) {
        return e.stopped = `stopped`, e.playing = `playing`, e.fadingOut = `fadingOut`, e
    }({}),
    f = new Map,
    p = new Map,
    m = class extends o {
        constructor(e) {
            if (super(e), this.onMasterVolumeChange = () => {
                    this.howl && this.howl.volume(r({
                        volume: this.options.volume / 100,
                        type: n.music
                    }))
                }, this.onStateChange = e => {
                    e === `currentState` && (this.state.currentState === d.playing ? this.play() : this.state.currentState === d.stopped ? this.stop() : this.state.currentState === d.fadingOut && this.fadeOut())
                }, this.onDestroy = e => {
                    if (!e.isBeingReplaced) {
                        var t;
                        (t = f.get(this.id)) == null || t.unload(), f.delete(this.id), p.delete(this.id)
                    }
                }, a() && s()) {
                if (!f.get(this.id)) {
                    let e = new t({
                        src: [c(this.options.audioUrl)],
                        volume: this.options.volume / 100,
                        preload: !0,
                        loop: !0
                    });
                    f.set(this.id, e)
                }
                this.state.currentState === d.playing && this.play(), this.state.currentState === d.stopped && this.isPlaying && this.stop()
            }
            i() && (this.parts.add.sprite(u), f.delete(this.id))
        }
        get howl() {
            return f.get(this.id)
        }
        get isPlaying() {
            return p.get(this.id) || !1
        }
        set isPlaying(e) {
            p.set(this.id, e)
        }
        play() {
            this.howl && !this.isPlaying && (this.howl.volume(0), this.howl.play(), this.isPlaying = !0, this.howl.fade(0, r({
                volume: this.options.volume / 100,
                type: n.music
            }), l.fadeInTime))
        }
        stop() {
            this.howl && this.isPlaying && (this.howl.stop(), this.isPlaying = !1)
        }
        fadeOut() {
            this.howl && this.isPlaying && (this.howl.fade(this.howl.volume(), 0, l.fadeOutTime), this.isPlaying = !1)
        }
    };
export {
    m as MusicDevice, m as
    default
};