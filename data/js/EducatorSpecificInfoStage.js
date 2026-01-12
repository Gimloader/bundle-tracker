import {
    r,
    j as e,
    D as S,
    a6 as x,
    a7 as m
} from "./_index.js";
import {
    T as s,
    P as f
} from "./NameAndPasswordStage.js";
import {
    a as E,
    C as L,
    i as l
} from "./ContinueButton.js";
import {
    S as c
} from "./index-8.js";
const C = ["STEM", "Arts", "Communications", "Computer Science", "Counselor", "Deaf Education", "World Languages", "Speech and Language", "English/Language Arts", "American Sign Language", "Science", "Special Education", "Gifted and Talented", "Technology", "Engineering", "Math", "History and Social Studies", "Health/Physical Education", "English Language Learner (ELL)", "Family & Consumer Science (FACS)", "Homeschool", "School Administrator", "Librarian", "Technology/Instructional Coach", "Other"].sort(),
    y = ["Pre-K", "Elementary School", "Middle School", "High School", "Post High School", "Other School", "Not Using For School", "Other"],
    P = () => {
        const {
            login: a
        } = r.useContext(E), [t, h] = r.useState(""), [n, d] = r.useState(""), g = o => h(o), p = o => d(o), i = !t || !n, u = () => {
            i || (a.areaOfExpertise = t, a.gradeLevel = n, a.informationNeeded.replace(a.informationNeeded.filter(o => o !== l.areaOfExpertise && o !== l.gradeLevel)))
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(s, {
                children: "💡 Area of Expertise"
            }), e.jsx(c, {
                style: {
                    width: "100%"
                },
                placeholder: "Select one...",
                size: "large",
                onChange: g,
                optionFilterProp: "label",
                showSearch: !0,
                options: C.map(o => ({
                    value: o,
                    label: o
                }))
            }), e.jsx("div", {
                style: {
                    height: 10
                }
            }), e.jsx(s, {
                children: "🎂 Grade Level"
            }), e.jsx(c, {
                style: {
                    width: "100%"
                },
                placeholder: "Select one...",
                size: "large",
                onChange: p,
                optionFilterProp: "label",
                showSearch: !0,
                options: y.map(o => ({
                    value: o,
                    label: o
                }))
            }), e.jsx(L, {
                size: "large",
                style: {
                    marginTop: 10
                },
                disabled: i,
                onClick: u,
                children: "Continue"
            }), e.jsx(S, {}), e.jsxs("div", {
                style: {
                    textAlign: "center"
                },
                children: ["By continuing, you agree to our", " ", e.jsx("a", {
                    href: x,
                    target: "_blank",
                    children: "Privacy Policy"
                }), " ", "and", " ", e.jsx("a", {
                    href: m,
                    target: "_blank",
                    children: "Terms Of Service"
                }), "."]
            }), e.jsx("div", {
                style: {
                    height: 25
                }
            }), e.jsx(f, {
                link: "https://www.notion.so/gimkit/Area-of-Expertise-Grade-Level-a435b570d18844c78f323708686e0f52"
            })]
        })
    };
export {
    P as E, C as o
};