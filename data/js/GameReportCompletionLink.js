import {
    o as e
} from "./rolldown-runtime.js";
import {
    C as t,
    O as n
} from "./utils.js";
import {
    t as r
} from "./react-1.js";
import {
    a as i,
    t as a
} from "./modal-1.js";
import {
    t as o
} from "./BarChartOutlined.js";
import {
    t as s
} from "./jsx-runtime.js";
import {
    t as c
} from "./Player.js";
var l = e(r()),
    u = s(),
    d = {
        icon: o,
        label: `View Report`,
        hiddenRender: e => (0, u.jsx)(f, {
            playerName: e.playerName,
            gameReportId: e.link.resultLinkId,
            participantId: e.link.completionLinkId,
            close: e.close
        })
    },
    f = e => {
        let [r, , o] = n(!0), [s, d] = l.useState();
        return l.useEffect(() => {
            t({
                url: `/api/game-report/fetch-participant-data`,
                data: {
                    gameReportId: e.gameReportId,
                    participantId: e.participantId
                },
                success: e => d(e),
                error: e => {
                    o()
                }
            })
        }, [e.participantId]), (0, u.jsx)(a, {
            open: r,
            onCancel: o,
            afterClose: e.close,
            style: {
                top: 20,
                maxWidth: 1200
            },
            bodyStyle: {
                minHeight: `max-content`
            },
            closable: !0,
            width: `85%`,
            footer: null,
            children: s ? (0, u.jsx)(c, {
                preventScroll: !0,
                player: {
                    name: e.playerName,
                    correctQuestionIds: s.correctQuestionIds,
                    incorrectQuestionIds: s.incorrectQuestionIds
                },
                questions: s.questions
            }) : (0, u.jsx)(`div`, {
                className: `maxWidth flex-center`,
                children: (0, u.jsx)(i, {
                    paragraph: {
                        rows: 16
                    }
                })
            })
        })
    };
export {
    f as n, d as t
};