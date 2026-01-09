const $ = o => {
        const r = Math.floor(o / 3600),
            s = Math.floor(o % 3600 / 60),
            e = Math.floor(o % 60);
        return r > 0 ? `${r}:${t(s)}:${t(e)}` : `${s}:${t(e)}`
    },
    t = o => o < 10 ? `0${o}` : `${o}`;
export {
    $ as S
};