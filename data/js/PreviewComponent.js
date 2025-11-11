import {
    r as t,
    ar as m,
    j as l,
    U as y
} from "./index-ku7LFjMf.js";
import {
    G as _,
    E
} from "./GimkitLiveQuestion-Cl0jjCPq.js";
import {
    i as L
} from "./Text-Ct0KU2tR.js";
import {
    G as o
} from "./sounds-mNd6IAyz.js";
import "./mobxreact.esm-DMnKt9Bd.js";
import "./polished.esm-DWf9rh9U.js";
import "./inheritsLoose-CctCxOfY.js";
import "./getCloudinaryUrl-Drn97BLG.js";
import "./LazyLatexRenderer--TRl8H8V.js";
import "./index-D9ienx5q.js";
import "./motion-CNFKkFwI.js";
import "./index-D8CKxV9E.js";
import "./use-force-update-B-I4U5fp.js";
import "./use-motion-value-DlnOQTZj.js";
import "./capitalize-DCcLEP2l.js";
import "./Tooltip-CKIPjInD.js";
import "./howler-C3GU_6-T.js";
import "./GetAssetPath-D1U8ycN4.js";
const B = s => {
    const [r, f] = t.useState(m.shuffle(s.questions.map(e => e._id))), [n, w] = t.useState(0), [a, p] = t.useState({
        ...s.questions.find(e => e._id === r[n]),
        answers: m.shuffle(s.questions.find(e => e._id === r[n]).answers)
    }), [i, x] = t.useState(), [h, C] = t.useState(!1);
    t.useEffect(() => {
        r.length - 1 === n && f(m.shuffle(s.questions.map(e => e._id)))
    }, [r.length, n]), t.useEffect(() => {
        o.correct.load(), o.incorrect.load(), o.click.load()
    }, []);
    const Q = t.useMemo(() => {
            var u;
            const e = {
                _id: "no_correct",
                text: "No Correct Answer",
                correct: !0
            };
            return ((u = i == null ? void 0 : i.answers) == null ? void 0 : u.find(d => d.correct)) || e
        }, [i]),
        A = e => {
            x(a);
            let c = n + 1;
            c >= r.length && (c = 0), w(c);
            const u = s.questions.find(S => S._id === r[c]);
            p({
                ...u,
                answers: m.shuffle(u.answers)
            });
            const d = L(a, e);
            return C(d), d
        };
    return l.jsx("div", {
        className: "maxAll",
        style: {
            fontFamily: y.ProductSans,
            background: "#303f9f",
            userSelect: "none",
            overflow: "hidden"
        },
        children: l.jsx(_, {
            ecc: E(a, a._id),
            lastQuestion: i,
            lastQuestionCorrectAnswer: Q,
            lastQuestionAnsweredCorrect: h,
            onQuestionAnswered: A,
            correctSound: o.correct,
            incorrectSound: o.incorrect,
            onActionSound: o.click,
            textShownWhenAnsweringCorrectly: "Correct!",
            textShownWhenAnsweringIncorrectly: "Incorrect!",
            customCorrectTextAnimation: {
                className: "animated slideInDown",
                duration: .4
            }
        })
    })
};
export {
    B as
    default
};