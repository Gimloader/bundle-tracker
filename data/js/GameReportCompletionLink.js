import {
    u as c,
    r as s,
    a as l,
    j as t,
    M as d,
    A as m
} from "./_index.js";
import {
    P as p
} from "./Player.js";
import {
    R as u
} from "./BarChartOutlined.js";
const h = {
        icon: u,
        label: "View Report",
        hiddenRender: e => t.jsx(I, {
            playerName: e.playerName,
            gameReportId: e.link.resultLinkId,
            participantId: e.link.completionLinkId,
            close: e.close
        })
    },
    I = e => {
        const [n, , r] = c(!0), [a, i] = s.useState();
        return s.useEffect(() => {
            l({
                url: "/api/game-report/fetch-participant-data",
                data: {
                    gameReportId: e.gameReportId,
                    participantId: e.participantId
                },
                success: o => i(o),
                error: o => {
                    r()
                }
            })
        }, [e.participantId]), t.jsx(d, {
            open: n,
            onCancel: r,
            afterClose: e.close,
            style: {
                top: 20,
                maxWidth: 1200
            },
            bodyStyle: {
                minHeight: "max-content"
            },
            closable: !0,
            width: "85%",
            footer: null,
            children: a ? t.jsx(p, {
                preventScroll: !0,
                player: {
                    name: e.playerName,
                    correctQuestionIds: a.correctQuestionIds,
                    incorrectQuestionIds: a.incorrectQuestionIds
                },
                questions: a.questions
            }) : t.jsx("div", {
                className: "maxWidth flex-center",
                children: t.jsx(m, {
                    paragraph: {
                        rows: 16
                    }
                })
            })
        })
    };
export {
    I as G, h as a
};