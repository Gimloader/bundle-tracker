import {
    r as l,
    j as e,
    a4 as q,
    a5 as ne,
    D as L,
    d as C,
    e as y,
    F as f,
    a6 as _,
    a7 as $,
    B as ae,
    a as T,
    S as Q,
    V as B,
    h as ie,
    t as te,
    a8 as O,
    $ as w,
    M as oe,
    a9 as re,
    l as ce,
    aa as se,
    G as me,
    ab as z,
    a3 as le,
    T as ue
} from "./_index.js";
import {
    s as u,
    i as r,
    S as g,
    a as k,
    C as G
} from "./ContinueButton.js";
import {
    o as M
} from "./mobxreact.esm.js";
import {
    L as ge,
    F as Fe,
    E as Ue
} from "./EmailStage.js";
import {
    I as K
} from "./index-3.js";
import {
    A as j,
    T as R,
    P as ee,
    N as pe
} from "./NameAndPasswordStage.js";
import {
    c as he
} from "./polished.esm.js";
import {
    S as H
} from "./School.js";
import {
    S as V
} from "./index-8.js";
import {
    E as ve
} from "./EducatorSpecificInfoStage.js";
import {
    N as x
} from "./NavigateTo.js";
import {
    I as de
} from "./IsURLFromUs.js";
import "./ErrorMessage.js";
import "./index-4.js";
import "./context.js";
import "./index-5.js";
import "./inheritsLoose.js";
import "./move.js";
import "./CheckOutlined.js";
import "./DownOutlined.js";
const je = n => n.includes(r.email) ? g.email : n.includes(r.password) ? g.password : n.includes(r.acceptedLatestPolicies) ? g.acceptPolicies : n.includes(r.accountType) ? g.accountType : n.includes(r.accountPassword) ? g.nameAndPassword : n.includes(r.firstName) ? g.nameAndPassword : n.includes(r.lastName) ? g.nameAndPassword : n.includes(r.country) ? g.school : n.includes(r.areaOfExpertise) ? g.educatorSpecificInfo : n.includes(r.gradeLevel) ? g.educatorSpecificInfo : n.includes(r.organization) ? g.nonSchoolSpecificInfo : null,
    ye = () => {
        const {
            informationNeeded: n
        } = u.login;
        return {
            currentStage: je(n)
        }
    },
    Se = M(n => {
        const {
            navigation: t
        } = l.useContext(k), a = !!t.classJoiningName, o = a ? "/client/img/gimkitGIcon.svg" : "/client/img/svgLogo.svg", i = a ? 55 : 42;
        return e.jsxs(Ee, {
            children: [n.message && e.jsx(q, {
                style: {
                    marginBottom: 5
                },
                message: n.message,
                type: "success",
                showIcon: !0
            }), e.jsx(ne, {
                to: "/",
                children: e.jsx(Ae, {
                    style: {
                        height: i,
                        marginBottom: a ? 5 : 0
                    },
                    src: o
                })
            }), t.classJoiningName ? e.jsxs(e.Fragment, {
                children: [e.jsx(fe, {
                    children: t.classJoiningName
                }), e.jsx(Ce, {
                    children: t.classJoiningTeacherName
                })]
            }) : null, e.jsx(L, {})]
        })
    }),
    Ee = C.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`,
    Ae = C.img`
  margin-top: 11px;
`,
    fe = C.div`
  color: ${y.Black};
  font-size: 28px;
  font-weight: ${f.Bold};
`,
    Ce = C.div`
  color: rgba(0, 0, 0, 0.9);
  font-size: 15px;
`,
    ke = M(() => {
        const {
            login: n,
            navigation: t
        } = l.useContext(k), [a, o] = l.useState(""), [i, m] = l.useState(!1), s = h => {
            t.loginError = null, o(h.target.value)
        }, F = !a, U = () => {
            F || t.loggingIn || (n.password = a, n.informationNeeded.replace(n.informationNeeded.filter(h => h !== r.password)))
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    fontWeight: f.Black,
                    fontSize: 24,
                    color: y.Black
                },
                children: "Enter your password"
            }), e.jsx(K.Password, {
                placeholder: "Password",
                size: "large",
                style: {
                    height: 40
                },
                autoFocus: !0,
                onPressEnter: U,
                onChange: s
            }), e.jsx(G, {
                onClick: U,
                disabled: F,
                style: {
                    width: "100%",
                    marginTop: 5
                },
                loading: t.loggingIn,
                children: "Login"
            }), e.jsx(ge, {}), e.jsx(L, {}), e.jsx("div", {
                onClick: () => m(!0),
                style: {
                    cursor: "pointer",
                    fontSize: 12
                },
                children: "Forgot password?"
            }), e.jsx(Fe, {
                open: i,
                close: () => m(!1),
                defaultEmail: n.email
            })]
        })
    }),
    Z = n => e.jsx(Be, {
        backgroundColor: n.background,
        onClick: n.handleSelect,
        children: n.children
    }),
    Ne = M(() => {
        const [n, t] = l.useState(!0), {
            login: a
        } = l.useContext(k), o = () => a.informationNeeded.replace(a.informationNeeded.filter(N => N !== r.accountType)), i = () => a.googleToken ? [] : a.userExists ? [] : [r.firstName, r.lastName, r.accountPassword], m = () => {
            a.accountType = j.educator, a.informationNeeded.replace([...a.informationNeeded, ...i(), r.country, r.areaOfExpertise, r.gradeLevel]), o()
        }, s = N => {
            a.accountType = j.student, a.informationNeeded.replace([...a.informationNeeded, ...i()]), o()
        }, F = () => s(), U = () => {
            a.accountType = j.guardian, a.informationNeeded.replace([...a.informationNeeded, ...i()]), o()
        }, h = () => {
            a.accountType = j.nonSchool, a.informationNeeded.replace([...a.informationNeeded, ...i(), r.organization]), o()
        };
        if (a.accountType) switch (a.accountType) {
            case j.educator:
                m();
                break;
            case j.guardian:
                U();
                break;
            case j.nonSchool:
                h();
                break;
            case j.student:
                s();
                break
        }
        return n ? e.jsxs(e.Fragment, {
            children: [e.jsx("div", {
                style: {
                    fontWeight: f.Black,
                    fontSize: 29,
                    color: y.Black,
                    width: "100%",
                    textAlign: "center",
                    marginBottom: 8
                },
                children: "Select your account type..."
            }), e.jsxs(be, {
                children: [e.jsxs(Z, {
                    handleSelect: m,
                    background: "#33691e",
                    children: [e.jsx("div", {
                        children: e.jsx("i", {
                            className: "fas fa-chalkboard-teacher"
                        })
                    }), "Educator"]
                }), e.jsxs(Z, {
                    handleSelect: () => t(!1),
                    background: "#9E5F28",
                    children: [e.jsx("div", {
                        children: e.jsx("i", {
                            className: "fas fa-user"
                        })
                    }), "Student"]
                })]
            })]
        }) : e.jsxs("div", {
            children: [e.jsxs("div", {
                style: {
                    fontSize: 18,
                    color: y.Black,
                    marginBottom: 20,
                    fontWeight: f.Bold
                },
                children: ["I am at least 13 years of age (or 16+ outside the US) and agree to Gimkit's", " ", e.jsx("a", {
                    href: _,
                    target: "_blank",
                    children: "Privacy Policy"
                }), " ", "&", " ", e.jsx("a", {
                    href: $,
                    target: "_blank",
                    children: "Terms of Service"
                }), "."]
            }), e.jsx(ae, {
                onClick: F,
                block: !0,
                size: "large",
                style: {
                    height: 60
                },
                type: "primary",
                children: "I Agree"
            })]
        })
    }),
    be = C.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
`,
    Be = C.div.attrs({
        className: "flex-center flex-column light-shadow"
    })`
  border-radius: 4px;
  font-weight: ${f.Bold};
  color: ${y.White};
  background: ${n=>n.backgroundColor};
  width: 46%;
  height: 170px;
  cursor: pointer;
  font-size: 24px;
  transition: all 0.25s;
  will-change: transform;
  &:hover {
    background: ${n=>he(.1,n.backgroundColor)};
    transform: scale(1.03);
  }
`;
var I = {
    exports: {}
}; /*! countries-list v2.6.1 by Annexare | MIT */
var Te = I.exports,
    W;

function Me() {
    return W || (W = 1, function(n, t) {
        (function(a, o) {
            n.exports = o()
        })(Te, function() {
            var a = {
                    AF: "Africa",
                    AN: "Antarctica",
                    AS: "Asia",
                    EU: "Europe",
                    NA: "North America",
                    OC: "Oceania",
                    SA: "South America"
                },
                o = {
                    AD: {
                        name: "Andorra",
                        native: "Andorra",
                        phone: "376",
                        continent: "EU",
                        capital: "Andorra la Vella",
                        currency: "EUR",
                        languages: ["ca"],
                        emoji: "🇦🇩",
                        emojiU: "U+1F1E6 U+1F1E9"
                    },
                    AE: {
                        name: "United Arab Emirates",
                        native: "دولة الإمارات العربية المتحدة",
                        phone: "971",
                        continent: "AS",
                        capital: "Abu Dhabi",
                        currency: "AED",
                        languages: ["ar"],
                        emoji: "🇦🇪",
                        emojiU: "U+1F1E6 U+1F1EA"
                    },
                    AF: {
                        name: "Afghanistan",
                        native: "افغانستان",
                        phone: "93",
                        continent: "AS",
                        capital: "Kabul",
                        currency: "AFN",
                        languages: ["ps", "uz", "tk"],
                        emoji: "🇦🇫",
                        emojiU: "U+1F1E6 U+1F1EB"
                    },
                    AG: {
                        name: "Antigua and Barbuda",
                        native: "Antigua and Barbuda",
                        phone: "1268",
                        continent: "NA",
                        capital: "Saint John's",
                        currency: "XCD",
                        languages: ["en"],
                        emoji: "🇦🇬",
                        emojiU: "U+1F1E6 U+1F1EC"
                    },
                    AI: {
                        name: "Anguilla",
                        native: "Anguilla",
                        phone: "1264",
                        continent: "NA",
                        capital: "The Valley",
                        currency: "XCD",
                        languages: ["en"],
                        emoji: "🇦🇮",
                        emojiU: "U+1F1E6 U+1F1EE"
                    },
                    AL: {
                        name: "Albania",
                        native: "Shqipëria",
                        phone: "355",
                        continent: "EU",
                        capital: "Tirana",
                        currency: "ALL",
                        languages: ["sq"],
                        emoji: "🇦🇱",
                        emojiU: "U+1F1E6 U+1F1F1"
                    },
                    AM: {
                        name: "Armenia",
                        native: "Հայաստան",
                        phone: "374",
                        continent: "AS",
                        capital: "Yerevan",
                        currency: "AMD",
                        languages: ["hy", "ru"],
                        emoji: "🇦🇲",
                        emojiU: "U+1F1E6 U+1F1F2"
                    },
                    AO: {
                        name: "Angola",
                        native: "Angola",
                        phone: "244",
                        continent: "AF",
                        capital: "Luanda",
                        currency: "AOA",
                        languages: ["pt"],
                        emoji: "🇦🇴",
                        emojiU: "U+1F1E6 U+1F1F4"
                    },
                    AQ: {
                        name: "Antarctica",
                        native: "Antarctica",
                        phone: "672",
                        continent: "AN",
                        capital: "",
                        currency: "",
                        languages: [],
                        emoji: "🇦🇶",
                        emojiU: "U+1F1E6 U+1F1F6"
                    },
                    AR: {
                        name: "Argentina",
                        native: "Argentina",
                        phone: "54",
                        continent: "SA",
                        capital: "Buenos Aires",
                        currency: "ARS",
                        languages: ["es", "gn"],
                        emoji: "🇦🇷",
                        emojiU: "U+1F1E6 U+1F1F7"
                    },
                    AS: {
                        name: "American Samoa",
                        native: "American Samoa",
                        phone: "1684",
                        continent: "OC",
                        capital: "Pago Pago",
                        currency: "USD",
                        languages: ["en", "sm"],
                        emoji: "🇦🇸",
                        emojiU: "U+1F1E6 U+1F1F8"
                    },
                    AT: {
                        name: "Austria",
                        native: "Österreich",
                        phone: "43",
                        continent: "EU",
                        capital: "Vienna",
                        currency: "EUR",
                        languages: ["de"],
                        emoji: "🇦🇹",
                        emojiU: "U+1F1E6 U+1F1F9"
                    },
                    AU: {
                        name: "Australia",
                        native: "Australia",
                        phone: "61",
                        continent: "OC",
                        capital: "Canberra",
                        currency: "AUD",
                        languages: ["en"],
                        emoji: "🇦🇺",
                        emojiU: "U+1F1E6 U+1F1FA"
                    },
                    AW: {
                        name: "Aruba",
                        native: "Aruba",
                        phone: "297",
                        continent: "NA",
                        capital: "Oranjestad",
                        currency: "AWG",
                        languages: ["nl", "pa"],
                        emoji: "🇦🇼",
                        emojiU: "U+1F1E6 U+1F1FC"
                    },
                    AX: {
                        name: "Åland",
                        native: "Åland",
                        phone: "358",
                        continent: "EU",
                        capital: "Mariehamn",
                        currency: "EUR",
                        languages: ["sv"],
                        emoji: "🇦🇽",
                        emojiU: "U+1F1E6 U+1F1FD"
                    },
                    AZ: {
                        name: "Azerbaijan",
                        native: "Azərbaycan",
                        phone: "994",
                        continent: "AS",
                        capital: "Baku",
                        currency: "AZN",
                        languages: ["az"],
                        emoji: "🇦🇿",
                        emojiU: "U+1F1E6 U+1F1FF"
                    },
                    BA: {
                        name: "Bosnia and Herzegovina",
                        native: "Bosna i Hercegovina",
                        phone: "387",
                        continent: "EU",
                        capital: "Sarajevo",
                        currency: "BAM",
                        languages: ["bs", "hr", "sr"],
                        emoji: "🇧🇦",
                        emojiU: "U+1F1E7 U+1F1E6"
                    },
                    BB: {
                        name: "Barbados",
                        native: "Barbados",
                        phone: "1246",
                        continent: "NA",
                        capital: "Bridgetown",
                        currency: "BBD",
                        languages: ["en"],
                        emoji: "🇧🇧",
                        emojiU: "U+1F1E7 U+1F1E7"
                    },
                    BD: {
                        name: "Bangladesh",
                        native: "Bangladesh",
                        phone: "880",
                        continent: "AS",
                        capital: "Dhaka",
                        currency: "BDT",
                        languages: ["bn"],
                        emoji: "🇧🇩",
                        emojiU: "U+1F1E7 U+1F1E9"
                    },
                    BE: {
                        name: "Belgium",
                        native: "België",
                        phone: "32",
                        continent: "EU",
                        capital: "Brussels",
                        currency: "EUR",
                        languages: ["nl", "fr", "de"],
                        emoji: "🇧🇪",
                        emojiU: "U+1F1E7 U+1F1EA"
                    },
                    BF: {
                        name: "Burkina Faso",
                        native: "Burkina Faso",
                        phone: "226",
                        continent: "AF",
                        capital: "Ouagadougou",
                        currency: "XOF",
                        languages: ["fr", "ff"],
                        emoji: "🇧🇫",
                        emojiU: "U+1F1E7 U+1F1EB"
                    },
                    BG: {
                        name: "Bulgaria",
                        native: "България",
                        phone: "359",
                        continent: "EU",
                        capital: "Sofia",
                        currency: "BGN",
                        languages: ["bg"],
                        emoji: "🇧🇬",
                        emojiU: "U+1F1E7 U+1F1EC"
                    },
                    BH: {
                        name: "Bahrain",
                        native: "‏البحرين",
                        phone: "973",
                        continent: "AS",
                        capital: "Manama",
                        currency: "BHD",
                        languages: ["ar"],
                        emoji: "🇧🇭",
                        emojiU: "U+1F1E7 U+1F1ED"
                    },
                    BI: {
                        name: "Burundi",
                        native: "Burundi",
                        phone: "257",
                        continent: "AF",
                        capital: "Bujumbura",
                        currency: "BIF",
                        languages: ["fr", "rn"],
                        emoji: "🇧🇮",
                        emojiU: "U+1F1E7 U+1F1EE"
                    },
                    BJ: {
                        name: "Benin",
                        native: "Bénin",
                        phone: "229",
                        continent: "AF",
                        capital: "Porto-Novo",
                        currency: "XOF",
                        languages: ["fr"],
                        emoji: "🇧🇯",
                        emojiU: "U+1F1E7 U+1F1EF"
                    },
                    BL: {
                        name: "Saint Barthélemy",
                        native: "Saint-Barthélemy",
                        phone: "590",
                        continent: "NA",
                        capital: "Gustavia",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇧🇱",
                        emojiU: "U+1F1E7 U+1F1F1"
                    },
                    BM: {
                        name: "Bermuda",
                        native: "Bermuda",
                        phone: "1441",
                        continent: "NA",
                        capital: "Hamilton",
                        currency: "BMD",
                        languages: ["en"],
                        emoji: "🇧🇲",
                        emojiU: "U+1F1E7 U+1F1F2"
                    },
                    BN: {
                        name: "Brunei",
                        native: "Negara Brunei Darussalam",
                        phone: "673",
                        continent: "AS",
                        capital: "Bandar Seri Begawan",
                        currency: "BND",
                        languages: ["ms"],
                        emoji: "🇧🇳",
                        emojiU: "U+1F1E7 U+1F1F3"
                    },
                    BO: {
                        name: "Bolivia",
                        native: "Bolivia",
                        phone: "591",
                        continent: "SA",
                        capital: "Sucre",
                        currency: "BOB,BOV",
                        languages: ["es", "ay", "qu"],
                        emoji: "🇧🇴",
                        emojiU: "U+1F1E7 U+1F1F4"
                    },
                    BQ: {
                        name: "Bonaire",
                        native: "Bonaire",
                        phone: "5997",
                        continent: "NA",
                        capital: "Kralendijk",
                        currency: "USD",
                        languages: ["nl"],
                        emoji: "🇧🇶",
                        emojiU: "U+1F1E7 U+1F1F6"
                    },
                    BR: {
                        name: "Brazil",
                        native: "Brasil",
                        phone: "55",
                        continent: "SA",
                        capital: "Brasília",
                        currency: "BRL",
                        languages: ["pt"],
                        emoji: "🇧🇷",
                        emojiU: "U+1F1E7 U+1F1F7"
                    },
                    BS: {
                        name: "Bahamas",
                        native: "Bahamas",
                        phone: "1242",
                        continent: "NA",
                        capital: "Nassau",
                        currency: "BSD",
                        languages: ["en"],
                        emoji: "🇧🇸",
                        emojiU: "U+1F1E7 U+1F1F8"
                    },
                    BT: {
                        name: "Bhutan",
                        native: "ʼbrug-yul",
                        phone: "975",
                        continent: "AS",
                        capital: "Thimphu",
                        currency: "BTN,INR",
                        languages: ["dz"],
                        emoji: "🇧🇹",
                        emojiU: "U+1F1E7 U+1F1F9"
                    },
                    BV: {
                        name: "Bouvet Island",
                        native: "Bouvetøya",
                        phone: "47",
                        continent: "AN",
                        capital: "",
                        currency: "NOK",
                        languages: ["no", "nb", "nn"],
                        emoji: "🇧🇻",
                        emojiU: "U+1F1E7 U+1F1FB"
                    },
                    BW: {
                        name: "Botswana",
                        native: "Botswana",
                        phone: "267",
                        continent: "AF",
                        capital: "Gaborone",
                        currency: "BWP",
                        languages: ["en", "tn"],
                        emoji: "🇧🇼",
                        emojiU: "U+1F1E7 U+1F1FC"
                    },
                    BY: {
                        name: "Belarus",
                        native: "Белару́сь",
                        phone: "375",
                        continent: "EU",
                        capital: "Minsk",
                        currency: "BYN",
                        languages: ["be", "ru"],
                        emoji: "🇧🇾",
                        emojiU: "U+1F1E7 U+1F1FE"
                    },
                    BZ: {
                        name: "Belize",
                        native: "Belize",
                        phone: "501",
                        continent: "NA",
                        capital: "Belmopan",
                        currency: "BZD",
                        languages: ["en", "es"],
                        emoji: "🇧🇿",
                        emojiU: "U+1F1E7 U+1F1FF"
                    },
                    CA: {
                        name: "Canada",
                        native: "Canada",
                        phone: "1",
                        continent: "NA",
                        capital: "Ottawa",
                        currency: "CAD",
                        languages: ["en", "fr"],
                        emoji: "🇨🇦",
                        emojiU: "U+1F1E8 U+1F1E6"
                    },
                    CC: {
                        name: "Cocos [Keeling] Islands",
                        native: "Cocos (Keeling) Islands",
                        phone: "61",
                        continent: "AS",
                        capital: "West Island",
                        currency: "AUD",
                        languages: ["en"],
                        emoji: "🇨🇨",
                        emojiU: "U+1F1E8 U+1F1E8"
                    },
                    CD: {
                        name: "Democratic Republic of the Congo",
                        native: "République démocratique du Congo",
                        phone: "243",
                        continent: "AF",
                        capital: "Kinshasa",
                        currency: "CDF",
                        languages: ["fr", "ln", "kg", "sw", "lu"],
                        emoji: "🇨🇩",
                        emojiU: "U+1F1E8 U+1F1E9"
                    },
                    CF: {
                        name: "Central African Republic",
                        native: "Ködörösêse tî Bêafrîka",
                        phone: "236",
                        continent: "AF",
                        capital: "Bangui",
                        currency: "XAF",
                        languages: ["fr", "sg"],
                        emoji: "🇨🇫",
                        emojiU: "U+1F1E8 U+1F1EB"
                    },
                    CG: {
                        name: "Republic of the Congo",
                        native: "République du Congo",
                        phone: "242",
                        continent: "AF",
                        capital: "Brazzaville",
                        currency: "XAF",
                        languages: ["fr", "ln"],
                        emoji: "🇨🇬",
                        emojiU: "U+1F1E8 U+1F1EC"
                    },
                    CH: {
                        name: "Switzerland",
                        native: "Schweiz",
                        phone: "41",
                        continent: "EU",
                        capital: "Bern",
                        currency: "CHE,CHF,CHW",
                        languages: ["de", "fr", "it"],
                        emoji: "🇨🇭",
                        emojiU: "U+1F1E8 U+1F1ED"
                    },
                    CI: {
                        name: "Ivory Coast",
                        native: "Côte d'Ivoire",
                        phone: "225",
                        continent: "AF",
                        capital: "Yamoussoukro",
                        currency: "XOF",
                        languages: ["fr"],
                        emoji: "🇨🇮",
                        emojiU: "U+1F1E8 U+1F1EE"
                    },
                    CK: {
                        name: "Cook Islands",
                        native: "Cook Islands",
                        phone: "682",
                        continent: "OC",
                        capital: "Avarua",
                        currency: "NZD",
                        languages: ["en"],
                        emoji: "🇨🇰",
                        emojiU: "U+1F1E8 U+1F1F0"
                    },
                    CL: {
                        name: "Chile",
                        native: "Chile",
                        phone: "56",
                        continent: "SA",
                        capital: "Santiago",
                        currency: "CLF,CLP",
                        languages: ["es"],
                        emoji: "🇨🇱",
                        emojiU: "U+1F1E8 U+1F1F1"
                    },
                    CM: {
                        name: "Cameroon",
                        native: "Cameroon",
                        phone: "237",
                        continent: "AF",
                        capital: "Yaoundé",
                        currency: "XAF",
                        languages: ["en", "fr"],
                        emoji: "🇨🇲",
                        emojiU: "U+1F1E8 U+1F1F2"
                    },
                    CN: {
                        name: "China",
                        native: "中国",
                        phone: "86",
                        continent: "AS",
                        capital: "Beijing",
                        currency: "CNY",
                        languages: ["zh"],
                        emoji: "🇨🇳",
                        emojiU: "U+1F1E8 U+1F1F3"
                    },
                    CO: {
                        name: "Colombia",
                        native: "Colombia",
                        phone: "57",
                        continent: "SA",
                        capital: "Bogotá",
                        currency: "COP",
                        languages: ["es"],
                        emoji: "🇨🇴",
                        emojiU: "U+1F1E8 U+1F1F4"
                    },
                    CR: {
                        name: "Costa Rica",
                        native: "Costa Rica",
                        phone: "506",
                        continent: "NA",
                        capital: "San José",
                        currency: "CRC",
                        languages: ["es"],
                        emoji: "🇨🇷",
                        emojiU: "U+1F1E8 U+1F1F7"
                    },
                    CU: {
                        name: "Cuba",
                        native: "Cuba",
                        phone: "53",
                        continent: "NA",
                        capital: "Havana",
                        currency: "CUC,CUP",
                        languages: ["es"],
                        emoji: "🇨🇺",
                        emojiU: "U+1F1E8 U+1F1FA"
                    },
                    CV: {
                        name: "Cape Verde",
                        native: "Cabo Verde",
                        phone: "238",
                        continent: "AF",
                        capital: "Praia",
                        currency: "CVE",
                        languages: ["pt"],
                        emoji: "🇨🇻",
                        emojiU: "U+1F1E8 U+1F1FB"
                    },
                    CW: {
                        name: "Curacao",
                        native: "Curaçao",
                        phone: "5999",
                        continent: "NA",
                        capital: "Willemstad",
                        currency: "ANG",
                        languages: ["nl", "pa", "en"],
                        emoji: "🇨🇼",
                        emojiU: "U+1F1E8 U+1F1FC"
                    },
                    CX: {
                        name: "Christmas Island",
                        native: "Christmas Island",
                        phone: "61",
                        continent: "AS",
                        capital: "Flying Fish Cove",
                        currency: "AUD",
                        languages: ["en"],
                        emoji: "🇨🇽",
                        emojiU: "U+1F1E8 U+1F1FD"
                    },
                    CY: {
                        name: "Cyprus",
                        native: "Κύπρος",
                        phone: "357",
                        continent: "EU",
                        capital: "Nicosia",
                        currency: "EUR",
                        languages: ["el", "tr", "hy"],
                        emoji: "🇨🇾",
                        emojiU: "U+1F1E8 U+1F1FE"
                    },
                    CZ: {
                        name: "Czech Republic",
                        native: "Česká republika",
                        phone: "420",
                        continent: "EU",
                        capital: "Prague",
                        currency: "CZK",
                        languages: ["cs", "sk"],
                        emoji: "🇨🇿",
                        emojiU: "U+1F1E8 U+1F1FF"
                    },
                    DE: {
                        name: "Germany",
                        native: "Deutschland",
                        phone: "49",
                        continent: "EU",
                        capital: "Berlin",
                        currency: "EUR",
                        languages: ["de"],
                        emoji: "🇩🇪",
                        emojiU: "U+1F1E9 U+1F1EA"
                    },
                    DJ: {
                        name: "Djibouti",
                        native: "Djibouti",
                        phone: "253",
                        continent: "AF",
                        capital: "Djibouti",
                        currency: "DJF",
                        languages: ["fr", "ar"],
                        emoji: "🇩🇯",
                        emojiU: "U+1F1E9 U+1F1EF"
                    },
                    DK: {
                        name: "Denmark",
                        native: "Danmark",
                        phone: "45",
                        continent: "EU",
                        capital: "Copenhagen",
                        currency: "DKK",
                        languages: ["da"],
                        emoji: "🇩🇰",
                        emojiU: "U+1F1E9 U+1F1F0"
                    },
                    DM: {
                        name: "Dominica",
                        native: "Dominica",
                        phone: "1767",
                        continent: "NA",
                        capital: "Roseau",
                        currency: "XCD",
                        languages: ["en"],
                        emoji: "🇩🇲",
                        emojiU: "U+1F1E9 U+1F1F2"
                    },
                    DO: {
                        name: "Dominican Republic",
                        native: "República Dominicana",
                        phone: "1809,1829,1849",
                        continent: "NA",
                        capital: "Santo Domingo",
                        currency: "DOP",
                        languages: ["es"],
                        emoji: "🇩🇴",
                        emojiU: "U+1F1E9 U+1F1F4"
                    },
                    DZ: {
                        name: "Algeria",
                        native: "الجزائر",
                        phone: "213",
                        continent: "AF",
                        capital: "Algiers",
                        currency: "DZD",
                        languages: ["ar"],
                        emoji: "🇩🇿",
                        emojiU: "U+1F1E9 U+1F1FF"
                    },
                    EC: {
                        name: "Ecuador",
                        native: "Ecuador",
                        phone: "593",
                        continent: "SA",
                        capital: "Quito",
                        currency: "USD",
                        languages: ["es"],
                        emoji: "🇪🇨",
                        emojiU: "U+1F1EA U+1F1E8"
                    },
                    EE: {
                        name: "Estonia",
                        native: "Eesti",
                        phone: "372",
                        continent: "EU",
                        capital: "Tallinn",
                        currency: "EUR",
                        languages: ["et"],
                        emoji: "🇪🇪",
                        emojiU: "U+1F1EA U+1F1EA"
                    },
                    EG: {
                        name: "Egypt",
                        native: "مصر‎",
                        phone: "20",
                        continent: "AF",
                        capital: "Cairo",
                        currency: "EGP",
                        languages: ["ar"],
                        emoji: "🇪🇬",
                        emojiU: "U+1F1EA U+1F1EC"
                    },
                    EH: {
                        name: "Western Sahara",
                        native: "الصحراء الغربية",
                        phone: "212",
                        continent: "AF",
                        capital: "El Aaiún",
                        currency: "MAD,DZD,MRU",
                        languages: ["es"],
                        emoji: "🇪🇭",
                        emojiU: "U+1F1EA U+1F1ED"
                    },
                    ER: {
                        name: "Eritrea",
                        native: "ኤርትራ",
                        phone: "291",
                        continent: "AF",
                        capital: "Asmara",
                        currency: "ERN",
                        languages: ["ti", "ar", "en"],
                        emoji: "🇪🇷",
                        emojiU: "U+1F1EA U+1F1F7"
                    },
                    ES: {
                        name: "Spain",
                        native: "España",
                        phone: "34",
                        continent: "EU",
                        capital: "Madrid",
                        currency: "EUR",
                        languages: ["es", "eu", "ca", "gl", "oc"],
                        emoji: "🇪🇸",
                        emojiU: "U+1F1EA U+1F1F8"
                    },
                    ET: {
                        name: "Ethiopia",
                        native: "ኢትዮጵያ",
                        phone: "251",
                        continent: "AF",
                        capital: "Addis Ababa",
                        currency: "ETB",
                        languages: ["am"],
                        emoji: "🇪🇹",
                        emojiU: "U+1F1EA U+1F1F9"
                    },
                    FI: {
                        name: "Finland",
                        native: "Suomi",
                        phone: "358",
                        continent: "EU",
                        capital: "Helsinki",
                        currency: "EUR",
                        languages: ["fi", "sv"],
                        emoji: "🇫🇮",
                        emojiU: "U+1F1EB U+1F1EE"
                    },
                    FJ: {
                        name: "Fiji",
                        native: "Fiji",
                        phone: "679",
                        continent: "OC",
                        capital: "Suva",
                        currency: "FJD",
                        languages: ["en", "fj", "hi", "ur"],
                        emoji: "🇫🇯",
                        emojiU: "U+1F1EB U+1F1EF"
                    },
                    FK: {
                        name: "Falkland Islands",
                        native: "Falkland Islands",
                        phone: "500",
                        continent: "SA",
                        capital: "Stanley",
                        currency: "FKP",
                        languages: ["en"],
                        emoji: "🇫🇰",
                        emojiU: "U+1F1EB U+1F1F0"
                    },
                    FM: {
                        name: "Micronesia",
                        native: "Micronesia",
                        phone: "691",
                        continent: "OC",
                        capital: "Palikir",
                        currency: "USD",
                        languages: ["en"],
                        emoji: "🇫🇲",
                        emojiU: "U+1F1EB U+1F1F2"
                    },
                    FO: {
                        name: "Faroe Islands",
                        native: "Føroyar",
                        phone: "298",
                        continent: "EU",
                        capital: "Tórshavn",
                        currency: "DKK",
                        languages: ["fo"],
                        emoji: "🇫🇴",
                        emojiU: "U+1F1EB U+1F1F4"
                    },
                    FR: {
                        name: "France",
                        native: "France",
                        phone: "33",
                        continent: "EU",
                        capital: "Paris",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇫🇷",
                        emojiU: "U+1F1EB U+1F1F7"
                    },
                    GA: {
                        name: "Gabon",
                        native: "Gabon",
                        phone: "241",
                        continent: "AF",
                        capital: "Libreville",
                        currency: "XAF",
                        languages: ["fr"],
                        emoji: "🇬🇦",
                        emojiU: "U+1F1EC U+1F1E6"
                    },
                    GB: {
                        name: "United Kingdom",
                        native: "United Kingdom",
                        phone: "44",
                        continent: "EU",
                        capital: "London",
                        currency: "GBP",
                        languages: ["en"],
                        emoji: "🇬🇧",
                        emojiU: "U+1F1EC U+1F1E7"
                    },
                    GD: {
                        name: "Grenada",
                        native: "Grenada",
                        phone: "1473",
                        continent: "NA",
                        capital: "St. George's",
                        currency: "XCD",
                        languages: ["en"],
                        emoji: "🇬🇩",
                        emojiU: "U+1F1EC U+1F1E9"
                    },
                    GE: {
                        name: "Georgia",
                        native: "საქართველო",
                        phone: "995",
                        continent: "AS",
                        capital: "Tbilisi",
                        currency: "GEL",
                        languages: ["ka"],
                        emoji: "🇬🇪",
                        emojiU: "U+1F1EC U+1F1EA"
                    },
                    GF: {
                        name: "French Guiana",
                        native: "Guyane française",
                        phone: "594",
                        continent: "SA",
                        capital: "Cayenne",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇬🇫",
                        emojiU: "U+1F1EC U+1F1EB"
                    },
                    GG: {
                        name: "Guernsey",
                        native: "Guernsey",
                        phone: "44",
                        continent: "EU",
                        capital: "St. Peter Port",
                        currency: "GBP",
                        languages: ["en", "fr"],
                        emoji: "🇬🇬",
                        emojiU: "U+1F1EC U+1F1EC"
                    },
                    GH: {
                        name: "Ghana",
                        native: "Ghana",
                        phone: "233",
                        continent: "AF",
                        capital: "Accra",
                        currency: "GHS",
                        languages: ["en"],
                        emoji: "🇬🇭",
                        emojiU: "U+1F1EC U+1F1ED"
                    },
                    GI: {
                        name: "Gibraltar",
                        native: "Gibraltar",
                        phone: "350",
                        continent: "EU",
                        capital: "Gibraltar",
                        currency: "GIP",
                        languages: ["en"],
                        emoji: "🇬🇮",
                        emojiU: "U+1F1EC U+1F1EE"
                    },
                    GL: {
                        name: "Greenland",
                        native: "Kalaallit Nunaat",
                        phone: "299",
                        continent: "NA",
                        capital: "Nuuk",
                        currency: "DKK",
                        languages: ["kl"],
                        emoji: "🇬🇱",
                        emojiU: "U+1F1EC U+1F1F1"
                    },
                    GM: {
                        name: "Gambia",
                        native: "Gambia",
                        phone: "220",
                        continent: "AF",
                        capital: "Banjul",
                        currency: "GMD",
                        languages: ["en"],
                        emoji: "🇬🇲",
                        emojiU: "U+1F1EC U+1F1F2"
                    },
                    GN: {
                        name: "Guinea",
                        native: "Guinée",
                        phone: "224",
                        continent: "AF",
                        capital: "Conakry",
                        currency: "GNF",
                        languages: ["fr", "ff"],
                        emoji: "🇬🇳",
                        emojiU: "U+1F1EC U+1F1F3"
                    },
                    GP: {
                        name: "Guadeloupe",
                        native: "Guadeloupe",
                        phone: "590",
                        continent: "NA",
                        capital: "Basse-Terre",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇬🇵",
                        emojiU: "U+1F1EC U+1F1F5"
                    },
                    GQ: {
                        name: "Equatorial Guinea",
                        native: "Guinea Ecuatorial",
                        phone: "240",
                        continent: "AF",
                        capital: "Malabo",
                        currency: "XAF",
                        languages: ["es", "fr"],
                        emoji: "🇬🇶",
                        emojiU: "U+1F1EC U+1F1F6"
                    },
                    GR: {
                        name: "Greece",
                        native: "Ελλάδα",
                        phone: "30",
                        continent: "EU",
                        capital: "Athens",
                        currency: "EUR",
                        languages: ["el"],
                        emoji: "🇬🇷",
                        emojiU: "U+1F1EC U+1F1F7"
                    },
                    GS: {
                        name: "South Georgia and the South Sandwich Islands",
                        native: "South Georgia",
                        phone: "500",
                        continent: "AN",
                        capital: "King Edward Point",
                        currency: "GBP",
                        languages: ["en"],
                        emoji: "🇬🇸",
                        emojiU: "U+1F1EC U+1F1F8"
                    },
                    GT: {
                        name: "Guatemala",
                        native: "Guatemala",
                        phone: "502",
                        continent: "NA",
                        capital: "Guatemala City",
                        currency: "GTQ",
                        languages: ["es"],
                        emoji: "🇬🇹",
                        emojiU: "U+1F1EC U+1F1F9"
                    },
                    GU: {
                        name: "Guam",
                        native: "Guam",
                        phone: "1671",
                        continent: "OC",
                        capital: "Hagåtña",
                        currency: "USD",
                        languages: ["en", "ch", "es"],
                        emoji: "🇬🇺",
                        emojiU: "U+1F1EC U+1F1FA"
                    },
                    GW: {
                        name: "Guinea-Bissau",
                        native: "Guiné-Bissau",
                        phone: "245",
                        continent: "AF",
                        capital: "Bissau",
                        currency: "XOF",
                        languages: ["pt"],
                        emoji: "🇬🇼",
                        emojiU: "U+1F1EC U+1F1FC"
                    },
                    GY: {
                        name: "Guyana",
                        native: "Guyana",
                        phone: "592",
                        continent: "SA",
                        capital: "Georgetown",
                        currency: "GYD",
                        languages: ["en"],
                        emoji: "🇬🇾",
                        emojiU: "U+1F1EC U+1F1FE"
                    },
                    HK: {
                        name: "Hong Kong",
                        native: "香港",
                        phone: "852",
                        continent: "AS",
                        capital: "City of Victoria",
                        currency: "HKD",
                        languages: ["zh", "en"],
                        emoji: "🇭🇰",
                        emojiU: "U+1F1ED U+1F1F0"
                    },
                    HM: {
                        name: "Heard Island and McDonald Islands",
                        native: "Heard Island and McDonald Islands",
                        phone: "61",
                        continent: "AN",
                        capital: "",
                        currency: "AUD",
                        languages: ["en"],
                        emoji: "🇭🇲",
                        emojiU: "U+1F1ED U+1F1F2"
                    },
                    HN: {
                        name: "Honduras",
                        native: "Honduras",
                        phone: "504",
                        continent: "NA",
                        capital: "Tegucigalpa",
                        currency: "HNL",
                        languages: ["es"],
                        emoji: "🇭🇳",
                        emojiU: "U+1F1ED U+1F1F3"
                    },
                    HR: {
                        name: "Croatia",
                        native: "Hrvatska",
                        phone: "385",
                        continent: "EU",
                        capital: "Zagreb",
                        currency: "HRK",
                        languages: ["hr"],
                        emoji: "🇭🇷",
                        emojiU: "U+1F1ED U+1F1F7"
                    },
                    HT: {
                        name: "Haiti",
                        native: "Haïti",
                        phone: "509",
                        continent: "NA",
                        capital: "Port-au-Prince",
                        currency: "HTG,USD",
                        languages: ["fr", "ht"],
                        emoji: "🇭🇹",
                        emojiU: "U+1F1ED U+1F1F9"
                    },
                    HU: {
                        name: "Hungary",
                        native: "Magyarország",
                        phone: "36",
                        continent: "EU",
                        capital: "Budapest",
                        currency: "HUF",
                        languages: ["hu"],
                        emoji: "🇭🇺",
                        emojiU: "U+1F1ED U+1F1FA"
                    },
                    ID: {
                        name: "Indonesia",
                        native: "Indonesia",
                        phone: "62",
                        continent: "AS",
                        capital: "Jakarta",
                        currency: "IDR",
                        languages: ["id"],
                        emoji: "🇮🇩",
                        emojiU: "U+1F1EE U+1F1E9"
                    },
                    IE: {
                        name: "Ireland",
                        native: "Éire",
                        phone: "353",
                        continent: "EU",
                        capital: "Dublin",
                        currency: "EUR",
                        languages: ["ga", "en"],
                        emoji: "🇮🇪",
                        emojiU: "U+1F1EE U+1F1EA"
                    },
                    IL: {
                        name: "Israel",
                        native: "יִשְׂרָאֵל",
                        phone: "972",
                        continent: "AS",
                        capital: "Jerusalem",
                        currency: "ILS",
                        languages: ["he", "ar"],
                        emoji: "🇮🇱",
                        emojiU: "U+1F1EE U+1F1F1"
                    },
                    IM: {
                        name: "Isle of Man",
                        native: "Isle of Man",
                        phone: "44",
                        continent: "EU",
                        capital: "Douglas",
                        currency: "GBP",
                        languages: ["en", "gv"],
                        emoji: "🇮🇲",
                        emojiU: "U+1F1EE U+1F1F2"
                    },
                    IN: {
                        name: "India",
                        native: "भारत",
                        phone: "91",
                        continent: "AS",
                        capital: "New Delhi",
                        currency: "INR",
                        languages: ["hi", "en"],
                        emoji: "🇮🇳",
                        emojiU: "U+1F1EE U+1F1F3"
                    },
                    IO: {
                        name: "British Indian Ocean Territory",
                        native: "British Indian Ocean Territory",
                        phone: "246",
                        continent: "AS",
                        capital: "Diego Garcia",
                        currency: "USD",
                        languages: ["en"],
                        emoji: "🇮🇴",
                        emojiU: "U+1F1EE U+1F1F4"
                    },
                    IQ: {
                        name: "Iraq",
                        native: "العراق",
                        phone: "964",
                        continent: "AS",
                        capital: "Baghdad",
                        currency: "IQD",
                        languages: ["ar", "ku"],
                        emoji: "🇮🇶",
                        emojiU: "U+1F1EE U+1F1F6"
                    },
                    IR: {
                        name: "Iran",
                        native: "ایران",
                        phone: "98",
                        continent: "AS",
                        capital: "Tehran",
                        currency: "IRR",
                        languages: ["fa"],
                        emoji: "🇮🇷",
                        emojiU: "U+1F1EE U+1F1F7"
                    },
                    IS: {
                        name: "Iceland",
                        native: "Ísland",
                        phone: "354",
                        continent: "EU",
                        capital: "Reykjavik",
                        currency: "ISK",
                        languages: ["is"],
                        emoji: "🇮🇸",
                        emojiU: "U+1F1EE U+1F1F8"
                    },
                    IT: {
                        name: "Italy",
                        native: "Italia",
                        phone: "39",
                        continent: "EU",
                        capital: "Rome",
                        currency: "EUR",
                        languages: ["it"],
                        emoji: "🇮🇹",
                        emojiU: "U+1F1EE U+1F1F9"
                    },
                    JE: {
                        name: "Jersey",
                        native: "Jersey",
                        phone: "44",
                        continent: "EU",
                        capital: "Saint Helier",
                        currency: "GBP",
                        languages: ["en", "fr"],
                        emoji: "🇯🇪",
                        emojiU: "U+1F1EF U+1F1EA"
                    },
                    JM: {
                        name: "Jamaica",
                        native: "Jamaica",
                        phone: "1876",
                        continent: "NA",
                        capital: "Kingston",
                        currency: "JMD",
                        languages: ["en"],
                        emoji: "🇯🇲",
                        emojiU: "U+1F1EF U+1F1F2"
                    },
                    JO: {
                        name: "Jordan",
                        native: "الأردن",
                        phone: "962",
                        continent: "AS",
                        capital: "Amman",
                        currency: "JOD",
                        languages: ["ar"],
                        emoji: "🇯🇴",
                        emojiU: "U+1F1EF U+1F1F4"
                    },
                    JP: {
                        name: "Japan",
                        native: "日本",
                        phone: "81",
                        continent: "AS",
                        capital: "Tokyo",
                        currency: "JPY",
                        languages: ["ja"],
                        emoji: "🇯🇵",
                        emojiU: "U+1F1EF U+1F1F5"
                    },
                    KE: {
                        name: "Kenya",
                        native: "Kenya",
                        phone: "254",
                        continent: "AF",
                        capital: "Nairobi",
                        currency: "KES",
                        languages: ["en", "sw"],
                        emoji: "🇰🇪",
                        emojiU: "U+1F1F0 U+1F1EA"
                    },
                    KG: {
                        name: "Kyrgyzstan",
                        native: "Кыргызстан",
                        phone: "996",
                        continent: "AS",
                        capital: "Bishkek",
                        currency: "KGS",
                        languages: ["ky", "ru"],
                        emoji: "🇰🇬",
                        emojiU: "U+1F1F0 U+1F1EC"
                    },
                    KH: {
                        name: "Cambodia",
                        native: "Kâmpŭchéa",
                        phone: "855",
                        continent: "AS",
                        capital: "Phnom Penh",
                        currency: "KHR",
                        languages: ["km"],
                        emoji: "🇰🇭",
                        emojiU: "U+1F1F0 U+1F1ED"
                    },
                    KI: {
                        name: "Kiribati",
                        native: "Kiribati",
                        phone: "686",
                        continent: "OC",
                        capital: "South Tarawa",
                        currency: "AUD",
                        languages: ["en"],
                        emoji: "🇰🇮",
                        emojiU: "U+1F1F0 U+1F1EE"
                    },
                    KM: {
                        name: "Comoros",
                        native: "Komori",
                        phone: "269",
                        continent: "AF",
                        capital: "Moroni",
                        currency: "KMF",
                        languages: ["ar", "fr"],
                        emoji: "🇰🇲",
                        emojiU: "U+1F1F0 U+1F1F2"
                    },
                    KN: {
                        name: "Saint Kitts and Nevis",
                        native: "Saint Kitts and Nevis",
                        phone: "1869",
                        continent: "NA",
                        capital: "Basseterre",
                        currency: "XCD",
                        languages: ["en"],
                        emoji: "🇰🇳",
                        emojiU: "U+1F1F0 U+1F1F3"
                    },
                    KP: {
                        name: "North Korea",
                        native: "북한",
                        phone: "850",
                        continent: "AS",
                        capital: "Pyongyang",
                        currency: "KPW",
                        languages: ["ko"],
                        emoji: "🇰🇵",
                        emojiU: "U+1F1F0 U+1F1F5"
                    },
                    KR: {
                        name: "South Korea",
                        native: "대한민국",
                        phone: "82",
                        continent: "AS",
                        capital: "Seoul",
                        currency: "KRW",
                        languages: ["ko"],
                        emoji: "🇰🇷",
                        emojiU: "U+1F1F0 U+1F1F7"
                    },
                    KW: {
                        name: "Kuwait",
                        native: "الكويت",
                        phone: "965",
                        continent: "AS",
                        capital: "Kuwait City",
                        currency: "KWD",
                        languages: ["ar"],
                        emoji: "🇰🇼",
                        emojiU: "U+1F1F0 U+1F1FC"
                    },
                    KY: {
                        name: "Cayman Islands",
                        native: "Cayman Islands",
                        phone: "1345",
                        continent: "NA",
                        capital: "George Town",
                        currency: "KYD",
                        languages: ["en"],
                        emoji: "🇰🇾",
                        emojiU: "U+1F1F0 U+1F1FE"
                    },
                    KZ: {
                        name: "Kazakhstan",
                        native: "Қазақстан",
                        phone: "76,77",
                        continent: "AS",
                        capital: "Astana",
                        currency: "KZT",
                        languages: ["kk", "ru"],
                        emoji: "🇰🇿",
                        emojiU: "U+1F1F0 U+1F1FF"
                    },
                    LA: {
                        name: "Laos",
                        native: "ສປປລາວ",
                        phone: "856",
                        continent: "AS",
                        capital: "Vientiane",
                        currency: "LAK",
                        languages: ["lo"],
                        emoji: "🇱🇦",
                        emojiU: "U+1F1F1 U+1F1E6"
                    },
                    LB: {
                        name: "Lebanon",
                        native: "لبنان",
                        phone: "961",
                        continent: "AS",
                        capital: "Beirut",
                        currency: "LBP",
                        languages: ["ar", "fr"],
                        emoji: "🇱🇧",
                        emojiU: "U+1F1F1 U+1F1E7"
                    },
                    LC: {
                        name: "Saint Lucia",
                        native: "Saint Lucia",
                        phone: "1758",
                        continent: "NA",
                        capital: "Castries",
                        currency: "XCD",
                        languages: ["en"],
                        emoji: "🇱🇨",
                        emojiU: "U+1F1F1 U+1F1E8"
                    },
                    LI: {
                        name: "Liechtenstein",
                        native: "Liechtenstein",
                        phone: "423",
                        continent: "EU",
                        capital: "Vaduz",
                        currency: "CHF",
                        languages: ["de"],
                        emoji: "🇱🇮",
                        emojiU: "U+1F1F1 U+1F1EE"
                    },
                    LK: {
                        name: "Sri Lanka",
                        native: "śrī laṃkāva",
                        phone: "94",
                        continent: "AS",
                        capital: "Colombo",
                        currency: "LKR",
                        languages: ["si", "ta"],
                        emoji: "🇱🇰",
                        emojiU: "U+1F1F1 U+1F1F0"
                    },
                    LR: {
                        name: "Liberia",
                        native: "Liberia",
                        phone: "231",
                        continent: "AF",
                        capital: "Monrovia",
                        currency: "LRD",
                        languages: ["en"],
                        emoji: "🇱🇷",
                        emojiU: "U+1F1F1 U+1F1F7"
                    },
                    LS: {
                        name: "Lesotho",
                        native: "Lesotho",
                        phone: "266",
                        continent: "AF",
                        capital: "Maseru",
                        currency: "LSL,ZAR",
                        languages: ["en", "st"],
                        emoji: "🇱🇸",
                        emojiU: "U+1F1F1 U+1F1F8"
                    },
                    LT: {
                        name: "Lithuania",
                        native: "Lietuva",
                        phone: "370",
                        continent: "EU",
                        capital: "Vilnius",
                        currency: "EUR",
                        languages: ["lt"],
                        emoji: "🇱🇹",
                        emojiU: "U+1F1F1 U+1F1F9"
                    },
                    LU: {
                        name: "Luxembourg",
                        native: "Luxembourg",
                        phone: "352",
                        continent: "EU",
                        capital: "Luxembourg",
                        currency: "EUR",
                        languages: ["fr", "de", "lb"],
                        emoji: "🇱🇺",
                        emojiU: "U+1F1F1 U+1F1FA"
                    },
                    LV: {
                        name: "Latvia",
                        native: "Latvija",
                        phone: "371",
                        continent: "EU",
                        capital: "Riga",
                        currency: "EUR",
                        languages: ["lv"],
                        emoji: "🇱🇻",
                        emojiU: "U+1F1F1 U+1F1FB"
                    },
                    LY: {
                        name: "Libya",
                        native: "‏ليبيا",
                        phone: "218",
                        continent: "AF",
                        capital: "Tripoli",
                        currency: "LYD",
                        languages: ["ar"],
                        emoji: "🇱🇾",
                        emojiU: "U+1F1F1 U+1F1FE"
                    },
                    MA: {
                        name: "Morocco",
                        native: "المغرب",
                        phone: "212",
                        continent: "AF",
                        capital: "Rabat",
                        currency: "MAD",
                        languages: ["ar"],
                        emoji: "🇲🇦",
                        emojiU: "U+1F1F2 U+1F1E6"
                    },
                    MC: {
                        name: "Monaco",
                        native: "Monaco",
                        phone: "377",
                        continent: "EU",
                        capital: "Monaco",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇲🇨",
                        emojiU: "U+1F1F2 U+1F1E8"
                    },
                    MD: {
                        name: "Moldova",
                        native: "Moldova",
                        phone: "373",
                        continent: "EU",
                        capital: "Chișinău",
                        currency: "MDL",
                        languages: ["ro"],
                        emoji: "🇲🇩",
                        emojiU: "U+1F1F2 U+1F1E9"
                    },
                    ME: {
                        name: "Montenegro",
                        native: "Црна Гора",
                        phone: "382",
                        continent: "EU",
                        capital: "Podgorica",
                        currency: "EUR",
                        languages: ["sr", "bs", "sq", "hr"],
                        emoji: "🇲🇪",
                        emojiU: "U+1F1F2 U+1F1EA"
                    },
                    MF: {
                        name: "Saint Martin",
                        native: "Saint-Martin",
                        phone: "590",
                        continent: "NA",
                        capital: "Marigot",
                        currency: "EUR",
                        languages: ["en", "fr", "nl"],
                        emoji: "🇲🇫",
                        emojiU: "U+1F1F2 U+1F1EB"
                    },
                    MG: {
                        name: "Madagascar",
                        native: "Madagasikara",
                        phone: "261",
                        continent: "AF",
                        capital: "Antananarivo",
                        currency: "MGA",
                        languages: ["fr", "mg"],
                        emoji: "🇲🇬",
                        emojiU: "U+1F1F2 U+1F1EC"
                    },
                    MH: {
                        name: "Marshall Islands",
                        native: "M̧ajeļ",
                        phone: "692",
                        continent: "OC",
                        capital: "Majuro",
                        currency: "USD",
                        languages: ["en", "mh"],
                        emoji: "🇲🇭",
                        emojiU: "U+1F1F2 U+1F1ED"
                    },
                    MK: {
                        name: "North Macedonia",
                        native: "Северна Македонија",
                        phone: "389",
                        continent: "EU",
                        capital: "Skopje",
                        currency: "MKD",
                        languages: ["mk"],
                        emoji: "🇲🇰",
                        emojiU: "U+1F1F2 U+1F1F0"
                    },
                    ML: {
                        name: "Mali",
                        native: "Mali",
                        phone: "223",
                        continent: "AF",
                        capital: "Bamako",
                        currency: "XOF",
                        languages: ["fr"],
                        emoji: "🇲🇱",
                        emojiU: "U+1F1F2 U+1F1F1"
                    },
                    MM: {
                        name: "Myanmar [Burma]",
                        native: "မြန်မာ",
                        phone: "95",
                        continent: "AS",
                        capital: "Naypyidaw",
                        currency: "MMK",
                        languages: ["my"],
                        emoji: "🇲🇲",
                        emojiU: "U+1F1F2 U+1F1F2"
                    },
                    MN: {
                        name: "Mongolia",
                        native: "Монгол улс",
                        phone: "976",
                        continent: "AS",
                        capital: "Ulan Bator",
                        currency: "MNT",
                        languages: ["mn"],
                        emoji: "🇲🇳",
                        emojiU: "U+1F1F2 U+1F1F3"
                    },
                    MO: {
                        name: "Macao",
                        native: "澳門",
                        phone: "853",
                        continent: "AS",
                        capital: "",
                        currency: "MOP",
                        languages: ["zh", "pt"],
                        emoji: "🇲🇴",
                        emojiU: "U+1F1F2 U+1F1F4"
                    },
                    MP: {
                        name: "Northern Mariana Islands",
                        native: "Northern Mariana Islands",
                        phone: "1670",
                        continent: "OC",
                        capital: "Saipan",
                        currency: "USD",
                        languages: ["en", "ch"],
                        emoji: "🇲🇵",
                        emojiU: "U+1F1F2 U+1F1F5"
                    },
                    MQ: {
                        name: "Martinique",
                        native: "Martinique",
                        phone: "596",
                        continent: "NA",
                        capital: "Fort-de-France",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇲🇶",
                        emojiU: "U+1F1F2 U+1F1F6"
                    },
                    MR: {
                        name: "Mauritania",
                        native: "موريتانيا",
                        phone: "222",
                        continent: "AF",
                        capital: "Nouakchott",
                        currency: "MRU",
                        languages: ["ar"],
                        emoji: "🇲🇷",
                        emojiU: "U+1F1F2 U+1F1F7"
                    },
                    MS: {
                        name: "Montserrat",
                        native: "Montserrat",
                        phone: "1664",
                        continent: "NA",
                        capital: "Plymouth",
                        currency: "XCD",
                        languages: ["en"],
                        emoji: "🇲🇸",
                        emojiU: "U+1F1F2 U+1F1F8"
                    },
                    MT: {
                        name: "Malta",
                        native: "Malta",
                        phone: "356",
                        continent: "EU",
                        capital: "Valletta",
                        currency: "EUR",
                        languages: ["mt", "en"],
                        emoji: "🇲🇹",
                        emojiU: "U+1F1F2 U+1F1F9"
                    },
                    MU: {
                        name: "Mauritius",
                        native: "Maurice",
                        phone: "230",
                        continent: "AF",
                        capital: "Port Louis",
                        currency: "MUR",
                        languages: ["en"],
                        emoji: "🇲🇺",
                        emojiU: "U+1F1F2 U+1F1FA"
                    },
                    MV: {
                        name: "Maldives",
                        native: "Maldives",
                        phone: "960",
                        continent: "AS",
                        capital: "Malé",
                        currency: "MVR",
                        languages: ["dv"],
                        emoji: "🇲🇻",
                        emojiU: "U+1F1F2 U+1F1FB"
                    },
                    MW: {
                        name: "Malawi",
                        native: "Malawi",
                        phone: "265",
                        continent: "AF",
                        capital: "Lilongwe",
                        currency: "MWK",
                        languages: ["en", "ny"],
                        emoji: "🇲🇼",
                        emojiU: "U+1F1F2 U+1F1FC"
                    },
                    MX: {
                        name: "Mexico",
                        native: "México",
                        phone: "52",
                        continent: "NA",
                        capital: "Mexico City",
                        currency: "MXN",
                        languages: ["es"],
                        emoji: "🇲🇽",
                        emojiU: "U+1F1F2 U+1F1FD"
                    },
                    MY: {
                        name: "Malaysia",
                        native: "Malaysia",
                        phone: "60",
                        continent: "AS",
                        capital: "Kuala Lumpur",
                        currency: "MYR",
                        languages: ["ms"],
                        emoji: "🇲🇾",
                        emojiU: "U+1F1F2 U+1F1FE"
                    },
                    MZ: {
                        name: "Mozambique",
                        native: "Moçambique",
                        phone: "258",
                        continent: "AF",
                        capital: "Maputo",
                        currency: "MZN",
                        languages: ["pt"],
                        emoji: "🇲🇿",
                        emojiU: "U+1F1F2 U+1F1FF"
                    },
                    NA: {
                        name: "Namibia",
                        native: "Namibia",
                        phone: "264",
                        continent: "AF",
                        capital: "Windhoek",
                        currency: "NAD,ZAR",
                        languages: ["en", "af"],
                        emoji: "🇳🇦",
                        emojiU: "U+1F1F3 U+1F1E6"
                    },
                    NC: {
                        name: "New Caledonia",
                        native: "Nouvelle-Calédonie",
                        phone: "687",
                        continent: "OC",
                        capital: "Nouméa",
                        currency: "XPF",
                        languages: ["fr"],
                        emoji: "🇳🇨",
                        emojiU: "U+1F1F3 U+1F1E8"
                    },
                    NE: {
                        name: "Niger",
                        native: "Niger",
                        phone: "227",
                        continent: "AF",
                        capital: "Niamey",
                        currency: "XOF",
                        languages: ["fr"],
                        emoji: "🇳🇪",
                        emojiU: "U+1F1F3 U+1F1EA"
                    },
                    NF: {
                        name: "Norfolk Island",
                        native: "Norfolk Island",
                        phone: "672",
                        continent: "OC",
                        capital: "Kingston",
                        currency: "AUD",
                        languages: ["en"],
                        emoji: "🇳🇫",
                        emojiU: "U+1F1F3 U+1F1EB"
                    },
                    NG: {
                        name: "Nigeria",
                        native: "Nigeria",
                        phone: "234",
                        continent: "AF",
                        capital: "Abuja",
                        currency: "NGN",
                        languages: ["en"],
                        emoji: "🇳🇬",
                        emojiU: "U+1F1F3 U+1F1EC"
                    },
                    NI: {
                        name: "Nicaragua",
                        native: "Nicaragua",
                        phone: "505",
                        continent: "NA",
                        capital: "Managua",
                        currency: "NIO",
                        languages: ["es"],
                        emoji: "🇳🇮",
                        emojiU: "U+1F1F3 U+1F1EE"
                    },
                    NL: {
                        name: "Netherlands",
                        native: "Nederland",
                        phone: "31",
                        continent: "EU",
                        capital: "Amsterdam",
                        currency: "EUR",
                        languages: ["nl"],
                        emoji: "🇳🇱",
                        emojiU: "U+1F1F3 U+1F1F1"
                    },
                    NO: {
                        name: "Norway",
                        native: "Norge",
                        phone: "47",
                        continent: "EU",
                        capital: "Oslo",
                        currency: "NOK",
                        languages: ["no", "nb", "nn"],
                        emoji: "🇳🇴",
                        emojiU: "U+1F1F3 U+1F1F4"
                    },
                    NP: {
                        name: "Nepal",
                        native: "नपल",
                        phone: "977",
                        continent: "AS",
                        capital: "Kathmandu",
                        currency: "NPR",
                        languages: ["ne"],
                        emoji: "🇳🇵",
                        emojiU: "U+1F1F3 U+1F1F5"
                    },
                    NR: {
                        name: "Nauru",
                        native: "Nauru",
                        phone: "674",
                        continent: "OC",
                        capital: "Yaren",
                        currency: "AUD",
                        languages: ["en", "na"],
                        emoji: "🇳🇷",
                        emojiU: "U+1F1F3 U+1F1F7"
                    },
                    NU: {
                        name: "Niue",
                        native: "Niuē",
                        phone: "683",
                        continent: "OC",
                        capital: "Alofi",
                        currency: "NZD",
                        languages: ["en"],
                        emoji: "🇳🇺",
                        emojiU: "U+1F1F3 U+1F1FA"
                    },
                    NZ: {
                        name: "New Zealand",
                        native: "New Zealand",
                        phone: "64",
                        continent: "OC",
                        capital: "Wellington",
                        currency: "NZD",
                        languages: ["en", "mi"],
                        emoji: "🇳🇿",
                        emojiU: "U+1F1F3 U+1F1FF"
                    },
                    OM: {
                        name: "Oman",
                        native: "عمان",
                        phone: "968",
                        continent: "AS",
                        capital: "Muscat",
                        currency: "OMR",
                        languages: ["ar"],
                        emoji: "🇴🇲",
                        emojiU: "U+1F1F4 U+1F1F2"
                    },
                    PA: {
                        name: "Panama",
                        native: "Panamá",
                        phone: "507",
                        continent: "NA",
                        capital: "Panama City",
                        currency: "PAB,USD",
                        languages: ["es"],
                        emoji: "🇵🇦",
                        emojiU: "U+1F1F5 U+1F1E6"
                    },
                    PE: {
                        name: "Peru",
                        native: "Perú",
                        phone: "51",
                        continent: "SA",
                        capital: "Lima",
                        currency: "PEN",
                        languages: ["es"],
                        emoji: "🇵🇪",
                        emojiU: "U+1F1F5 U+1F1EA"
                    },
                    PF: {
                        name: "French Polynesia",
                        native: "Polynésie française",
                        phone: "689",
                        continent: "OC",
                        capital: "Papeetē",
                        currency: "XPF",
                        languages: ["fr"],
                        emoji: "🇵🇫",
                        emojiU: "U+1F1F5 U+1F1EB"
                    },
                    PG: {
                        name: "Papua New Guinea",
                        native: "Papua Niugini",
                        phone: "675",
                        continent: "OC",
                        capital: "Port Moresby",
                        currency: "PGK",
                        languages: ["en"],
                        emoji: "🇵🇬",
                        emojiU: "U+1F1F5 U+1F1EC"
                    },
                    PH: {
                        name: "Philippines",
                        native: "Pilipinas",
                        phone: "63",
                        continent: "AS",
                        capital: "Manila",
                        currency: "PHP",
                        languages: ["en"],
                        emoji: "🇵🇭",
                        emojiU: "U+1F1F5 U+1F1ED"
                    },
                    PK: {
                        name: "Pakistan",
                        native: "Pakistan",
                        phone: "92",
                        continent: "AS",
                        capital: "Islamabad",
                        currency: "PKR",
                        languages: ["en", "ur"],
                        emoji: "🇵🇰",
                        emojiU: "U+1F1F5 U+1F1F0"
                    },
                    PL: {
                        name: "Poland",
                        native: "Polska",
                        phone: "48",
                        continent: "EU",
                        capital: "Warsaw",
                        currency: "PLN",
                        languages: ["pl"],
                        emoji: "🇵🇱",
                        emojiU: "U+1F1F5 U+1F1F1"
                    },
                    PM: {
                        name: "Saint Pierre and Miquelon",
                        native: "Saint-Pierre-et-Miquelon",
                        phone: "508",
                        continent: "NA",
                        capital: "Saint-Pierre",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇵🇲",
                        emojiU: "U+1F1F5 U+1F1F2"
                    },
                    PN: {
                        name: "Pitcairn Islands",
                        native: "Pitcairn Islands",
                        phone: "64",
                        continent: "OC",
                        capital: "Adamstown",
                        currency: "NZD",
                        languages: ["en"],
                        emoji: "🇵🇳",
                        emojiU: "U+1F1F5 U+1F1F3"
                    },
                    PR: {
                        name: "Puerto Rico",
                        native: "Puerto Rico",
                        phone: "1787,1939",
                        continent: "NA",
                        capital: "San Juan",
                        currency: "USD",
                        languages: ["es", "en"],
                        emoji: "🇵🇷",
                        emojiU: "U+1F1F5 U+1F1F7"
                    },
                    PS: {
                        name: "Palestine",
                        native: "فلسطين",
                        phone: "970",
                        continent: "AS",
                        capital: "Ramallah",
                        currency: "ILS",
                        languages: ["ar"],
                        emoji: "🇵🇸",
                        emojiU: "U+1F1F5 U+1F1F8"
                    },
                    PT: {
                        name: "Portugal",
                        native: "Portugal",
                        phone: "351",
                        continent: "EU",
                        capital: "Lisbon",
                        currency: "EUR",
                        languages: ["pt"],
                        emoji: "🇵🇹",
                        emojiU: "U+1F1F5 U+1F1F9"
                    },
                    PW: {
                        name: "Palau",
                        native: "Palau",
                        phone: "680",
                        continent: "OC",
                        capital: "Ngerulmud",
                        currency: "USD",
                        languages: ["en"],
                        emoji: "🇵🇼",
                        emojiU: "U+1F1F5 U+1F1FC"
                    },
                    PY: {
                        name: "Paraguay",
                        native: "Paraguay",
                        phone: "595",
                        continent: "SA",
                        capital: "Asunción",
                        currency: "PYG",
                        languages: ["es", "gn"],
                        emoji: "🇵🇾",
                        emojiU: "U+1F1F5 U+1F1FE"
                    },
                    QA: {
                        name: "Qatar",
                        native: "قطر",
                        phone: "974",
                        continent: "AS",
                        capital: "Doha",
                        currency: "QAR",
                        languages: ["ar"],
                        emoji: "🇶🇦",
                        emojiU: "U+1F1F6 U+1F1E6"
                    },
                    RE: {
                        name: "Réunion",
                        native: "La Réunion",
                        phone: "262",
                        continent: "AF",
                        capital: "Saint-Denis",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇷🇪",
                        emojiU: "U+1F1F7 U+1F1EA"
                    },
                    RO: {
                        name: "Romania",
                        native: "România",
                        phone: "40",
                        continent: "EU",
                        capital: "Bucharest",
                        currency: "RON",
                        languages: ["ro"],
                        emoji: "🇷🇴",
                        emojiU: "U+1F1F7 U+1F1F4"
                    },
                    RS: {
                        name: "Serbia",
                        native: "Србија",
                        phone: "381",
                        continent: "EU",
                        capital: "Belgrade",
                        currency: "RSD",
                        languages: ["sr"],
                        emoji: "🇷🇸",
                        emojiU: "U+1F1F7 U+1F1F8"
                    },
                    RU: {
                        name: "Russia",
                        native: "Россия",
                        phone: "7",
                        continent: "EU",
                        capital: "Moscow",
                        currency: "RUB",
                        languages: ["ru"],
                        emoji: "🇷🇺",
                        emojiU: "U+1F1F7 U+1F1FA"
                    },
                    RW: {
                        name: "Rwanda",
                        native: "Rwanda",
                        phone: "250",
                        continent: "AF",
                        capital: "Kigali",
                        currency: "RWF",
                        languages: ["rw", "en", "fr"],
                        emoji: "🇷🇼",
                        emojiU: "U+1F1F7 U+1F1FC"
                    },
                    SA: {
                        name: "Saudi Arabia",
                        native: "العربية السعودية",
                        phone: "966",
                        continent: "AS",
                        capital: "Riyadh",
                        currency: "SAR",
                        languages: ["ar"],
                        emoji: "🇸🇦",
                        emojiU: "U+1F1F8 U+1F1E6"
                    },
                    SB: {
                        name: "Solomon Islands",
                        native: "Solomon Islands",
                        phone: "677",
                        continent: "OC",
                        capital: "Honiara",
                        currency: "SBD",
                        languages: ["en"],
                        emoji: "🇸🇧",
                        emojiU: "U+1F1F8 U+1F1E7"
                    },
                    SC: {
                        name: "Seychelles",
                        native: "Seychelles",
                        phone: "248",
                        continent: "AF",
                        capital: "Victoria",
                        currency: "SCR",
                        languages: ["fr", "en"],
                        emoji: "🇸🇨",
                        emojiU: "U+1F1F8 U+1F1E8"
                    },
                    SD: {
                        name: "Sudan",
                        native: "السودان",
                        phone: "249",
                        continent: "AF",
                        capital: "Khartoum",
                        currency: "SDG",
                        languages: ["ar", "en"],
                        emoji: "🇸🇩",
                        emojiU: "U+1F1F8 U+1F1E9"
                    },
                    SE: {
                        name: "Sweden",
                        native: "Sverige",
                        phone: "46",
                        continent: "EU",
                        capital: "Stockholm",
                        currency: "SEK",
                        languages: ["sv"],
                        emoji: "🇸🇪",
                        emojiU: "U+1F1F8 U+1F1EA"
                    },
                    SG: {
                        name: "Singapore",
                        native: "Singapore",
                        phone: "65",
                        continent: "AS",
                        capital: "Singapore",
                        currency: "SGD",
                        languages: ["en", "ms", "ta", "zh"],
                        emoji: "🇸🇬",
                        emojiU: "U+1F1F8 U+1F1EC"
                    },
                    SH: {
                        name: "Saint Helena",
                        native: "Saint Helena",
                        phone: "290",
                        continent: "AF",
                        capital: "Jamestown",
                        currency: "SHP",
                        languages: ["en"],
                        emoji: "🇸🇭",
                        emojiU: "U+1F1F8 U+1F1ED"
                    },
                    SI: {
                        name: "Slovenia",
                        native: "Slovenija",
                        phone: "386",
                        continent: "EU",
                        capital: "Ljubljana",
                        currency: "EUR",
                        languages: ["sl"],
                        emoji: "🇸🇮",
                        emojiU: "U+1F1F8 U+1F1EE"
                    },
                    SJ: {
                        name: "Svalbard and Jan Mayen",
                        native: "Svalbard og Jan Mayen",
                        phone: "4779",
                        continent: "EU",
                        capital: "Longyearbyen",
                        currency: "NOK",
                        languages: ["no"],
                        emoji: "🇸🇯",
                        emojiU: "U+1F1F8 U+1F1EF"
                    },
                    SK: {
                        name: "Slovakia",
                        native: "Slovensko",
                        phone: "421",
                        continent: "EU",
                        capital: "Bratislava",
                        currency: "EUR",
                        languages: ["sk"],
                        emoji: "🇸🇰",
                        emojiU: "U+1F1F8 U+1F1F0"
                    },
                    SL: {
                        name: "Sierra Leone",
                        native: "Sierra Leone",
                        phone: "232",
                        continent: "AF",
                        capital: "Freetown",
                        currency: "SLL",
                        languages: ["en"],
                        emoji: "🇸🇱",
                        emojiU: "U+1F1F8 U+1F1F1"
                    },
                    SM: {
                        name: "San Marino",
                        native: "San Marino",
                        phone: "378",
                        continent: "EU",
                        capital: "City of San Marino",
                        currency: "EUR",
                        languages: ["it"],
                        emoji: "🇸🇲",
                        emojiU: "U+1F1F8 U+1F1F2"
                    },
                    SN: {
                        name: "Senegal",
                        native: "Sénégal",
                        phone: "221",
                        continent: "AF",
                        capital: "Dakar",
                        currency: "XOF",
                        languages: ["fr"],
                        emoji: "🇸🇳",
                        emojiU: "U+1F1F8 U+1F1F3"
                    },
                    SO: {
                        name: "Somalia",
                        native: "Soomaaliya",
                        phone: "252",
                        continent: "AF",
                        capital: "Mogadishu",
                        currency: "SOS",
                        languages: ["so", "ar"],
                        emoji: "🇸🇴",
                        emojiU: "U+1F1F8 U+1F1F4"
                    },
                    SR: {
                        name: "Suriname",
                        native: "Suriname",
                        phone: "597",
                        continent: "SA",
                        capital: "Paramaribo",
                        currency: "SRD",
                        languages: ["nl"],
                        emoji: "🇸🇷",
                        emojiU: "U+1F1F8 U+1F1F7"
                    },
                    SS: {
                        name: "South Sudan",
                        native: "South Sudan",
                        phone: "211",
                        continent: "AF",
                        capital: "Juba",
                        currency: "SSP",
                        languages: ["en"],
                        emoji: "🇸🇸",
                        emojiU: "U+1F1F8 U+1F1F8"
                    },
                    ST: {
                        name: "São Tomé and Príncipe",
                        native: "São Tomé e Príncipe",
                        phone: "239",
                        continent: "AF",
                        capital: "São Tomé",
                        currency: "STN",
                        languages: ["pt"],
                        emoji: "🇸🇹",
                        emojiU: "U+1F1F8 U+1F1F9"
                    },
                    SV: {
                        name: "El Salvador",
                        native: "El Salvador",
                        phone: "503",
                        continent: "NA",
                        capital: "San Salvador",
                        currency: "SVC,USD",
                        languages: ["es"],
                        emoji: "🇸🇻",
                        emojiU: "U+1F1F8 U+1F1FB"
                    },
                    SX: {
                        name: "Sint Maarten",
                        native: "Sint Maarten",
                        phone: "1721",
                        continent: "NA",
                        capital: "Philipsburg",
                        currency: "ANG",
                        languages: ["nl", "en"],
                        emoji: "🇸🇽",
                        emojiU: "U+1F1F8 U+1F1FD"
                    },
                    SY: {
                        name: "Syria",
                        native: "سوريا",
                        phone: "963",
                        continent: "AS",
                        capital: "Damascus",
                        currency: "SYP",
                        languages: ["ar"],
                        emoji: "🇸🇾",
                        emojiU: "U+1F1F8 U+1F1FE"
                    },
                    SZ: {
                        name: "Swaziland",
                        native: "Swaziland",
                        phone: "268",
                        continent: "AF",
                        capital: "Lobamba",
                        currency: "SZL",
                        languages: ["en", "ss"],
                        emoji: "🇸🇿",
                        emojiU: "U+1F1F8 U+1F1FF"
                    },
                    TC: {
                        name: "Turks and Caicos Islands",
                        native: "Turks and Caicos Islands",
                        phone: "1649",
                        continent: "NA",
                        capital: "Cockburn Town",
                        currency: "USD",
                        languages: ["en"],
                        emoji: "🇹🇨",
                        emojiU: "U+1F1F9 U+1F1E8"
                    },
                    TD: {
                        name: "Chad",
                        native: "Tchad",
                        phone: "235",
                        continent: "AF",
                        capital: "N'Djamena",
                        currency: "XAF",
                        languages: ["fr", "ar"],
                        emoji: "🇹🇩",
                        emojiU: "U+1F1F9 U+1F1E9"
                    },
                    TF: {
                        name: "French Southern Territories",
                        native: "Territoire des Terres australes et antarctiques fr",
                        phone: "262",
                        continent: "AN",
                        capital: "Port-aux-Français",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇹🇫",
                        emojiU: "U+1F1F9 U+1F1EB"
                    },
                    TG: {
                        name: "Togo",
                        native: "Togo",
                        phone: "228",
                        continent: "AF",
                        capital: "Lomé",
                        currency: "XOF",
                        languages: ["fr"],
                        emoji: "🇹🇬",
                        emojiU: "U+1F1F9 U+1F1EC"
                    },
                    TH: {
                        name: "Thailand",
                        native: "ประเทศไทย",
                        phone: "66",
                        continent: "AS",
                        capital: "Bangkok",
                        currency: "THB",
                        languages: ["th"],
                        emoji: "🇹🇭",
                        emojiU: "U+1F1F9 U+1F1ED"
                    },
                    TJ: {
                        name: "Tajikistan",
                        native: "Тоҷикистон",
                        phone: "992",
                        continent: "AS",
                        capital: "Dushanbe",
                        currency: "TJS",
                        languages: ["tg", "ru"],
                        emoji: "🇹🇯",
                        emojiU: "U+1F1F9 U+1F1EF"
                    },
                    TK: {
                        name: "Tokelau",
                        native: "Tokelau",
                        phone: "690",
                        continent: "OC",
                        capital: "Fakaofo",
                        currency: "NZD",
                        languages: ["en"],
                        emoji: "🇹🇰",
                        emojiU: "U+1F1F9 U+1F1F0"
                    },
                    TL: {
                        name: "East Timor",
                        native: "Timor-Leste",
                        phone: "670",
                        continent: "OC",
                        capital: "Dili",
                        currency: "USD",
                        languages: ["pt"],
                        emoji: "🇹🇱",
                        emojiU: "U+1F1F9 U+1F1F1"
                    },
                    TM: {
                        name: "Turkmenistan",
                        native: "Türkmenistan",
                        phone: "993",
                        continent: "AS",
                        capital: "Ashgabat",
                        currency: "TMT",
                        languages: ["tk", "ru"],
                        emoji: "🇹🇲",
                        emojiU: "U+1F1F9 U+1F1F2"
                    },
                    TN: {
                        name: "Tunisia",
                        native: "تونس",
                        phone: "216",
                        continent: "AF",
                        capital: "Tunis",
                        currency: "TND",
                        languages: ["ar"],
                        emoji: "🇹🇳",
                        emojiU: "U+1F1F9 U+1F1F3"
                    },
                    TO: {
                        name: "Tonga",
                        native: "Tonga",
                        phone: "676",
                        continent: "OC",
                        capital: "Nuku'alofa",
                        currency: "TOP",
                        languages: ["en", "to"],
                        emoji: "🇹🇴",
                        emojiU: "U+1F1F9 U+1F1F4"
                    },
                    TR: {
                        name: "Turkey",
                        native: "Türkiye",
                        phone: "90",
                        continent: "AS",
                        capital: "Ankara",
                        currency: "TRY",
                        languages: ["tr"],
                        emoji: "🇹🇷",
                        emojiU: "U+1F1F9 U+1F1F7"
                    },
                    TT: {
                        name: "Trinidad and Tobago",
                        native: "Trinidad and Tobago",
                        phone: "1868",
                        continent: "NA",
                        capital: "Port of Spain",
                        currency: "TTD",
                        languages: ["en"],
                        emoji: "🇹🇹",
                        emojiU: "U+1F1F9 U+1F1F9"
                    },
                    TV: {
                        name: "Tuvalu",
                        native: "Tuvalu",
                        phone: "688",
                        continent: "OC",
                        capital: "Funafuti",
                        currency: "AUD",
                        languages: ["en"],
                        emoji: "🇹🇻",
                        emojiU: "U+1F1F9 U+1F1FB"
                    },
                    TW: {
                        name: "Taiwan",
                        native: "臺灣",
                        phone: "886",
                        continent: "AS",
                        capital: "Taipei",
                        currency: "TWD",
                        languages: ["zh"],
                        emoji: "🇹🇼",
                        emojiU: "U+1F1F9 U+1F1FC"
                    },
                    TZ: {
                        name: "Tanzania",
                        native: "Tanzania",
                        phone: "255",
                        continent: "AF",
                        capital: "Dodoma",
                        currency: "TZS",
                        languages: ["sw", "en"],
                        emoji: "🇹🇿",
                        emojiU: "U+1F1F9 U+1F1FF"
                    },
                    UA: {
                        name: "Ukraine",
                        native: "Україна",
                        phone: "380",
                        continent: "EU",
                        capital: "Kyiv",
                        currency: "UAH",
                        languages: ["uk"],
                        emoji: "🇺🇦",
                        emojiU: "U+1F1FA U+1F1E6"
                    },
                    UG: {
                        name: "Uganda",
                        native: "Uganda",
                        phone: "256",
                        continent: "AF",
                        capital: "Kampala",
                        currency: "UGX",
                        languages: ["en", "sw"],
                        emoji: "🇺🇬",
                        emojiU: "U+1F1FA U+1F1EC"
                    },
                    UM: {
                        name: "U.S. Minor Outlying Islands",
                        native: "United States Minor Outlying Islands",
                        phone: "1",
                        continent: "OC",
                        capital: "",
                        currency: "USD",
                        languages: ["en"],
                        emoji: "🇺🇲",
                        emojiU: "U+1F1FA U+1F1F2"
                    },
                    US: {
                        name: "United States",
                        native: "United States",
                        phone: "1",
                        continent: "NA",
                        capital: "Washington D.C.",
                        currency: "USD,USN,USS",
                        languages: ["en"],
                        emoji: "🇺🇸",
                        emojiU: "U+1F1FA U+1F1F8"
                    },
                    UY: {
                        name: "Uruguay",
                        native: "Uruguay",
                        phone: "598",
                        continent: "SA",
                        capital: "Montevideo",
                        currency: "UYI,UYU",
                        languages: ["es"],
                        emoji: "🇺🇾",
                        emojiU: "U+1F1FA U+1F1FE"
                    },
                    UZ: {
                        name: "Uzbekistan",
                        native: "O‘zbekiston",
                        phone: "998",
                        continent: "AS",
                        capital: "Tashkent",
                        currency: "UZS",
                        languages: ["uz", "ru"],
                        emoji: "🇺🇿",
                        emojiU: "U+1F1FA U+1F1FF"
                    },
                    VA: {
                        name: "Vatican City",
                        native: "Vaticano",
                        phone: "379",
                        continent: "EU",
                        capital: "Vatican City",
                        currency: "EUR",
                        languages: ["it", "la"],
                        emoji: "🇻🇦",
                        emojiU: "U+1F1FB U+1F1E6"
                    },
                    VC: {
                        name: "Saint Vincent and the Grenadines",
                        native: "Saint Vincent and the Grenadines",
                        phone: "1784",
                        continent: "NA",
                        capital: "Kingstown",
                        currency: "XCD",
                        languages: ["en"],
                        emoji: "🇻🇨",
                        emojiU: "U+1F1FB U+1F1E8"
                    },
                    VE: {
                        name: "Venezuela",
                        native: "Venezuela",
                        phone: "58",
                        continent: "SA",
                        capital: "Caracas",
                        currency: "VES",
                        languages: ["es"],
                        emoji: "🇻🇪",
                        emojiU: "U+1F1FB U+1F1EA"
                    },
                    VG: {
                        name: "British Virgin Islands",
                        native: "British Virgin Islands",
                        phone: "1284",
                        continent: "NA",
                        capital: "Road Town",
                        currency: "USD",
                        languages: ["en"],
                        emoji: "🇻🇬",
                        emojiU: "U+1F1FB U+1F1EC"
                    },
                    VI: {
                        name: "U.S. Virgin Islands",
                        native: "United States Virgin Islands",
                        phone: "1340",
                        continent: "NA",
                        capital: "Charlotte Amalie",
                        currency: "USD",
                        languages: ["en"],
                        emoji: "🇻🇮",
                        emojiU: "U+1F1FB U+1F1EE"
                    },
                    VN: {
                        name: "Vietnam",
                        native: "Việt Nam",
                        phone: "84",
                        continent: "AS",
                        capital: "Hanoi",
                        currency: "VND",
                        languages: ["vi"],
                        emoji: "🇻🇳",
                        emojiU: "U+1F1FB U+1F1F3"
                    },
                    VU: {
                        name: "Vanuatu",
                        native: "Vanuatu",
                        phone: "678",
                        continent: "OC",
                        capital: "Port Vila",
                        currency: "VUV",
                        languages: ["bi", "en", "fr"],
                        emoji: "🇻🇺",
                        emojiU: "U+1F1FB U+1F1FA"
                    },
                    WF: {
                        name: "Wallis and Futuna",
                        native: "Wallis et Futuna",
                        phone: "681",
                        continent: "OC",
                        capital: "Mata-Utu",
                        currency: "XPF",
                        languages: ["fr"],
                        emoji: "🇼🇫",
                        emojiU: "U+1F1FC U+1F1EB"
                    },
                    WS: {
                        name: "Samoa",
                        native: "Samoa",
                        phone: "685",
                        continent: "OC",
                        capital: "Apia",
                        currency: "WST",
                        languages: ["sm", "en"],
                        emoji: "🇼🇸",
                        emojiU: "U+1F1FC U+1F1F8"
                    },
                    XK: {
                        name: "Kosovo",
                        native: "Republika e Kosovës",
                        phone: "377,381,383,386",
                        continent: "EU",
                        capital: "Pristina",
                        currency: "EUR",
                        languages: ["sq", "sr"],
                        emoji: "🇽🇰",
                        emojiU: "U+1F1FD U+1F1F0"
                    },
                    YE: {
                        name: "Yemen",
                        native: "اليَمَن",
                        phone: "967",
                        continent: "AS",
                        capital: "Sana'a",
                        currency: "YER",
                        languages: ["ar"],
                        emoji: "🇾🇪",
                        emojiU: "U+1F1FE U+1F1EA"
                    },
                    YT: {
                        name: "Mayotte",
                        native: "Mayotte",
                        phone: "262",
                        continent: "AF",
                        capital: "Mamoudzou",
                        currency: "EUR",
                        languages: ["fr"],
                        emoji: "🇾🇹",
                        emojiU: "U+1F1FE U+1F1F9"
                    },
                    ZA: {
                        name: "South Africa",
                        native: "South Africa",
                        phone: "27",
                        continent: "AF",
                        capital: "Pretoria",
                        currency: "ZAR",
                        languages: ["af", "en", "nr", "st", "ss", "tn", "ts", "ve", "xh", "zu"],
                        emoji: "🇿🇦",
                        emojiU: "U+1F1FF U+1F1E6"
                    },
                    ZM: {
                        name: "Zambia",
                        native: "Zambia",
                        phone: "260",
                        continent: "AF",
                        capital: "Lusaka",
                        currency: "ZMW",
                        languages: ["en"],
                        emoji: "🇿🇲",
                        emojiU: "U+1F1FF U+1F1F2"
                    },
                    ZW: {
                        name: "Zimbabwe",
                        native: "Zimbabwe",
                        phone: "263",
                        continent: "AF",
                        capital: "Harare",
                        currency: "USD,ZAR,BWP,GBP,AUD,CNY,INR,JPY",
                        languages: ["en", "sn", "nd"],
                        emoji: "🇿🇼",
                        emojiU: "U+1F1FF U+1F1FC"
                    }
                },
                i = {
                    af: {
                        name: "Afrikaans",
                        native: "Afrikaans"
                    },
                    am: {
                        name: "Amharic",
                        native: "አማርኛ"
                    },
                    ar: {
                        name: "Arabic",
                        native: "العربية",
                        rtl: 1
                    },
                    ay: {
                        name: "Aymara",
                        native: "Aymar"
                    },
                    az: {
                        name: "Azerbaijani",
                        native: "Azərbaycanca / آذربايجان"
                    },
                    be: {
                        name: "Belarusian",
                        native: "Беларуская"
                    },
                    bg: {
                        name: "Bulgarian",
                        native: "Български"
                    },
                    bi: {
                        name: "Bislama",
                        native: "Bislama"
                    },
                    bn: {
                        name: "Bengali",
                        native: "বাংলা"
                    },
                    bs: {
                        name: "Bosnian",
                        native: "Bosanski"
                    },
                    ca: {
                        name: "Catalan",
                        native: "Català"
                    },
                    ch: {
                        name: "Chamorro",
                        native: "Chamoru"
                    },
                    cs: {
                        name: "Czech",
                        native: "Čeština"
                    },
                    da: {
                        name: "Danish",
                        native: "Dansk"
                    },
                    de: {
                        name: "German",
                        native: "Deutsch"
                    },
                    dv: {
                        name: "Divehi",
                        native: "ދިވެހިބަސް",
                        rtl: 1
                    },
                    dz: {
                        name: "Dzongkha",
                        native: "ཇོང་ཁ"
                    },
                    el: {
                        name: "Greek",
                        native: "Ελληνικά"
                    },
                    en: {
                        name: "English",
                        native: "English"
                    },
                    es: {
                        name: "Spanish",
                        native: "Español"
                    },
                    et: {
                        name: "Estonian",
                        native: "Eesti"
                    },
                    eu: {
                        name: "Basque",
                        native: "Euskara"
                    },
                    fa: {
                        name: "Persian",
                        native: "فارسی",
                        rtl: 1
                    },
                    ff: {
                        name: "Peul",
                        native: "Fulfulde"
                    },
                    fi: {
                        name: "Finnish",
                        native: "Suomi"
                    },
                    fj: {
                        name: "Fijian",
                        native: "Na Vosa Vakaviti"
                    },
                    fo: {
                        name: "Faroese",
                        native: "Føroyskt"
                    },
                    fr: {
                        name: "French",
                        native: "Français"
                    },
                    ga: {
                        name: "Irish",
                        native: "Gaeilge"
                    },
                    gl: {
                        name: "Galician",
                        native: "Galego"
                    },
                    gn: {
                        name: "Guarani",
                        native: "Avañe'ẽ"
                    },
                    gv: {
                        name: "Manx",
                        native: "Gaelg"
                    },
                    he: {
                        name: "Hebrew",
                        native: "עברית",
                        rtl: 1
                    },
                    hi: {
                        name: "Hindi",
                        native: "हिन्दी"
                    },
                    hr: {
                        name: "Croatian",
                        native: "Hrvatski"
                    },
                    ht: {
                        name: "Haitian",
                        native: "Krèyol ayisyen"
                    },
                    hu: {
                        name: "Hungarian",
                        native: "Magyar"
                    },
                    hy: {
                        name: "Armenian",
                        native: "Հայերեն"
                    },
                    id: {
                        name: "Indonesian",
                        native: "Bahasa Indonesia"
                    },
                    is: {
                        name: "Icelandic",
                        native: "Íslenska"
                    },
                    it: {
                        name: "Italian",
                        native: "Italiano"
                    },
                    ja: {
                        name: "Japanese",
                        native: "日本語"
                    },
                    ka: {
                        name: "Georgian",
                        native: "ქართული"
                    },
                    kg: {
                        name: "Kongo",
                        native: "KiKongo"
                    },
                    kk: {
                        name: "Kazakh",
                        native: "Қазақша"
                    },
                    kl: {
                        name: "Greenlandic",
                        native: "Kalaallisut"
                    },
                    km: {
                        name: "Cambodian",
                        native: "ភាសាខ្មែរ"
                    },
                    ko: {
                        name: "Korean",
                        native: "한국어"
                    },
                    ku: {
                        name: "Kurdish",
                        native: "Kurdî / كوردی",
                        rtl: 1
                    },
                    ky: {
                        name: "Kyrgyz",
                        native: "Кыргызча"
                    },
                    la: {
                        name: "Latin",
                        native: "Latina"
                    },
                    lb: {
                        name: "Luxembourgish",
                        native: "Lëtzebuergesch"
                    },
                    ln: {
                        name: "Lingala",
                        native: "Lingála"
                    },
                    lo: {
                        name: "Laotian",
                        native: "ລາວ / Pha xa lao"
                    },
                    lt: {
                        name: "Lithuanian",
                        native: "Lietuvių"
                    },
                    lu: {
                        name: "Luba-Katanga",
                        native: "Tshiluba"
                    },
                    lv: {
                        name: "Latvian",
                        native: "Latviešu"
                    },
                    mg: {
                        name: "Malagasy",
                        native: "Malagasy"
                    },
                    mh: {
                        name: "Marshallese",
                        native: "Kajin Majel / Ebon"
                    },
                    mi: {
                        name: "Maori",
                        native: "Māori"
                    },
                    mk: {
                        name: "Macedonian",
                        native: "Македонски"
                    },
                    mn: {
                        name: "Mongolian",
                        native: "Монгол"
                    },
                    ms: {
                        name: "Malay",
                        native: "Bahasa Melayu"
                    },
                    mt: {
                        name: "Maltese",
                        native: "bil-Malti"
                    },
                    my: {
                        name: "Burmese",
                        native: "မြန်မာစာ"
                    },
                    na: {
                        name: "Nauruan",
                        native: "Dorerin Naoero"
                    },
                    nb: {
                        name: "Norwegian Bokmål",
                        native: "Norsk bokmål"
                    },
                    nd: {
                        name: "North Ndebele",
                        native: "Sindebele"
                    },
                    ne: {
                        name: "Nepali",
                        native: "नेपाली"
                    },
                    nl: {
                        name: "Dutch",
                        native: "Nederlands"
                    },
                    nn: {
                        name: "Norwegian Nynorsk",
                        native: "Norsk nynorsk"
                    },
                    no: {
                        name: "Norwegian",
                        native: "Norsk"
                    },
                    nr: {
                        name: "South Ndebele",
                        native: "isiNdebele"
                    },
                    ny: {
                        name: "Chichewa",
                        native: "Chi-Chewa"
                    },
                    oc: {
                        name: "Occitan",
                        native: "Occitan"
                    },
                    pa: {
                        name: "Panjabi / Punjabi",
                        native: "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
                    },
                    pl: {
                        name: "Polish",
                        native: "Polski"
                    },
                    ps: {
                        name: "Pashto",
                        native: "پښتو",
                        rtl: 1
                    },
                    pt: {
                        name: "Portuguese",
                        native: "Português"
                    },
                    qu: {
                        name: "Quechua",
                        native: "Runa Simi"
                    },
                    rn: {
                        name: "Kirundi",
                        native: "Kirundi"
                    },
                    ro: {
                        name: "Romanian",
                        native: "Română"
                    },
                    ru: {
                        name: "Russian",
                        native: "Русский"
                    },
                    rw: {
                        name: "Rwandi",
                        native: "Kinyarwandi"
                    },
                    sg: {
                        name: "Sango",
                        native: "Sängö"
                    },
                    si: {
                        name: "Sinhalese",
                        native: "සිංහල"
                    },
                    sk: {
                        name: "Slovak",
                        native: "Slovenčina"
                    },
                    sl: {
                        name: "Slovenian",
                        native: "Slovenščina"
                    },
                    sm: {
                        name: "Samoan",
                        native: "Gagana Samoa"
                    },
                    sn: {
                        name: "Shona",
                        native: "chiShona"
                    },
                    so: {
                        name: "Somalia",
                        native: "Soomaaliga"
                    },
                    sq: {
                        name: "Albanian",
                        native: "Shqip"
                    },
                    sr: {
                        name: "Serbian",
                        native: "Српски"
                    },
                    ss: {
                        name: "Swati",
                        native: "SiSwati"
                    },
                    st: {
                        name: "Southern Sotho",
                        native: "Sesotho"
                    },
                    sv: {
                        name: "Swedish",
                        native: "Svenska"
                    },
                    sw: {
                        name: "Swahili",
                        native: "Kiswahili"
                    },
                    ta: {
                        name: "Tamil",
                        native: "தமிழ்"
                    },
                    tg: {
                        name: "Tajik",
                        native: "Тоҷикӣ"
                    },
                    th: {
                        name: "Thai",
                        native: "ไทย / Phasa Thai"
                    },
                    ti: {
                        name: "Tigrinya",
                        native: "ትግርኛ"
                    },
                    tk: {
                        name: "Turkmen",
                        native: "Туркмен / تركمن"
                    },
                    tn: {
                        name: "Tswana",
                        native: "Setswana"
                    },
                    to: {
                        name: "Tonga",
                        native: "Lea Faka-Tonga"
                    },
                    tr: {
                        name: "Turkish",
                        native: "Türkçe"
                    },
                    ts: {
                        name: "Tsonga",
                        native: "Xitsonga"
                    },
                    uk: {
                        name: "Ukrainian",
                        native: "Українська"
                    },
                    ur: {
                        name: "Urdu",
                        native: "اردو",
                        rtl: 1
                    },
                    uz: {
                        name: "Uzbek",
                        native: "Ўзбек"
                    },
                    ve: {
                        name: "Venda",
                        native: "Tshivenḓa"
                    },
                    vi: {
                        name: "Vietnamese",
                        native: "Tiếng Việt"
                    },
                    xh: {
                        name: "Xhosa",
                        native: "isiXhosa"
                    },
                    zh: {
                        name: "Chinese",
                        native: "中文"
                    },
                    zu: {
                        name: "Zulu",
                        native: "isiZulu"
                    }
                },
                m = {
                    aa: {
                        name: "Afar",
                        native: "Afar"
                    },
                    ab: {
                        name: "Abkhazian",
                        native: "Аҧсуа"
                    },
                    af: {
                        name: "Afrikaans",
                        native: "Afrikaans"
                    },
                    ak: {
                        name: "Akan",
                        native: "Akana"
                    },
                    am: {
                        name: "Amharic",
                        native: "አማርኛ"
                    },
                    an: {
                        name: "Aragonese",
                        native: "Aragonés"
                    },
                    ar: {
                        name: "Arabic",
                        native: "العربية",
                        rtl: 1
                    },
                    as: {
                        name: "Assamese",
                        native: "অসমীয়া"
                    },
                    av: {
                        name: "Avar",
                        native: "Авар"
                    },
                    ay: {
                        name: "Aymara",
                        native: "Aymar"
                    },
                    az: {
                        name: "Azerbaijani",
                        native: "Azərbaycanca / آذربايجان"
                    },
                    ba: {
                        name: "Bashkir",
                        native: "Башҡорт"
                    },
                    be: {
                        name: "Belarusian",
                        native: "Беларуская"
                    },
                    bg: {
                        name: "Bulgarian",
                        native: "Български"
                    },
                    bh: {
                        name: "Bihari",
                        native: "भोजपुरी"
                    },
                    bi: {
                        name: "Bislama",
                        native: "Bislama"
                    },
                    bm: {
                        name: "Bambara",
                        native: "Bamanankan"
                    },
                    bn: {
                        name: "Bengali",
                        native: "বাংলা"
                    },
                    bo: {
                        name: "Tibetan",
                        native: "བོད་ཡིག / Bod skad"
                    },
                    br: {
                        name: "Breton",
                        native: "Brezhoneg"
                    },
                    bs: {
                        name: "Bosnian",
                        native: "Bosanski"
                    },
                    ca: {
                        name: "Catalan",
                        native: "Català"
                    },
                    ce: {
                        name: "Chechen",
                        native: "Нохчийн"
                    },
                    ch: {
                        name: "Chamorro",
                        native: "Chamoru"
                    },
                    co: {
                        name: "Corsican",
                        native: "Corsu"
                    },
                    cr: {
                        name: "Cree",
                        native: "Nehiyaw"
                    },
                    cs: {
                        name: "Czech",
                        native: "Čeština"
                    },
                    cu: {
                        name: "Old Church Slavonic / Old Bulgarian",
                        native: "словѣньскъ / slověnĭskŭ"
                    },
                    cv: {
                        name: "Chuvash",
                        native: "Чăваш"
                    },
                    cy: {
                        name: "Welsh",
                        native: "Cymraeg"
                    },
                    da: {
                        name: "Danish",
                        native: "Dansk"
                    },
                    de: {
                        name: "German",
                        native: "Deutsch"
                    },
                    dv: {
                        name: "Divehi",
                        native: "ދިވެހިބަސް",
                        rtl: 1
                    },
                    dz: {
                        name: "Dzongkha",
                        native: "ཇོང་ཁ"
                    },
                    ee: {
                        name: "Ewe",
                        native: "Ɛʋɛ"
                    },
                    el: {
                        name: "Greek",
                        native: "Ελληνικά"
                    },
                    en: {
                        name: "English",
                        native: "English"
                    },
                    eo: {
                        name: "Esperanto",
                        native: "Esperanto"
                    },
                    es: {
                        name: "Spanish",
                        native: "Español"
                    },
                    et: {
                        name: "Estonian",
                        native: "Eesti"
                    },
                    eu: {
                        name: "Basque",
                        native: "Euskara"
                    },
                    fa: {
                        name: "Persian",
                        native: "فارسی",
                        rtl: 1
                    },
                    ff: {
                        name: "Peul",
                        native: "Fulfulde"
                    },
                    fi: {
                        name: "Finnish",
                        native: "Suomi"
                    },
                    fj: {
                        name: "Fijian",
                        native: "Na Vosa Vakaviti"
                    },
                    fo: {
                        name: "Faroese",
                        native: "Føroyskt"
                    },
                    fr: {
                        name: "French",
                        native: "Français"
                    },
                    fy: {
                        name: "West Frisian",
                        native: "Frysk"
                    },
                    ga: {
                        name: "Irish",
                        native: "Gaeilge"
                    },
                    gd: {
                        name: "Scottish Gaelic",
                        native: "Gàidhlig"
                    },
                    gl: {
                        name: "Galician",
                        native: "Galego"
                    },
                    gn: {
                        name: "Guarani",
                        native: "Avañe'ẽ"
                    },
                    gu: {
                        name: "Gujarati",
                        native: "ગુજરાતી"
                    },
                    gv: {
                        name: "Manx",
                        native: "Gaelg"
                    },
                    ha: {
                        name: "Hausa",
                        native: "هَوُسَ",
                        rtl: 1
                    },
                    he: {
                        name: "Hebrew",
                        native: "עברית",
                        rtl: 1
                    },
                    hi: {
                        name: "Hindi",
                        native: "हिन्दी"
                    },
                    ho: {
                        name: "Hiri Motu",
                        native: "Hiri Motu"
                    },
                    hr: {
                        name: "Croatian",
                        native: "Hrvatski"
                    },
                    ht: {
                        name: "Haitian",
                        native: "Krèyol ayisyen"
                    },
                    hu: {
                        name: "Hungarian",
                        native: "Magyar"
                    },
                    hy: {
                        name: "Armenian",
                        native: "Հայերեն"
                    },
                    hz: {
                        name: "Herero",
                        native: "Otsiherero"
                    },
                    ia: {
                        name: "Interlingua",
                        native: "Interlingua"
                    },
                    id: {
                        name: "Indonesian",
                        native: "Bahasa Indonesia"
                    },
                    ie: {
                        name: "Interlingue",
                        native: "Interlingue"
                    },
                    ig: {
                        name: "Igbo",
                        native: "Igbo"
                    },
                    ii: {
                        name: "Sichuan Yi",
                        native: "ꆇꉙ / 四川彝语"
                    },
                    ik: {
                        name: "Inupiak",
                        native: "Iñupiak"
                    },
                    io: {
                        name: "Ido",
                        native: "Ido"
                    },
                    is: {
                        name: "Icelandic",
                        native: "Íslenska"
                    },
                    it: {
                        name: "Italian",
                        native: "Italiano"
                    },
                    iu: {
                        name: "Inuktitut",
                        native: "ᐃᓄᒃᑎᑐᑦ"
                    },
                    ja: {
                        name: "Japanese",
                        native: "日本語"
                    },
                    jv: {
                        name: "Javanese",
                        native: "Basa Jawa"
                    },
                    ka: {
                        name: "Georgian",
                        native: "ქართული"
                    },
                    kg: {
                        name: "Kongo",
                        native: "KiKongo"
                    },
                    ki: {
                        name: "Kikuyu",
                        native: "Gĩkũyũ"
                    },
                    kj: {
                        name: "Kuanyama",
                        native: "Kuanyama"
                    },
                    kk: {
                        name: "Kazakh",
                        native: "Қазақша"
                    },
                    kl: {
                        name: "Greenlandic",
                        native: "Kalaallisut"
                    },
                    km: {
                        name: "Cambodian",
                        native: "ភាសាខ្មែរ"
                    },
                    kn: {
                        name: "Kannada",
                        native: "ಕನ್ನಡ"
                    },
                    ko: {
                        name: "Korean",
                        native: "한국어"
                    },
                    kr: {
                        name: "Kanuri",
                        native: "Kanuri"
                    },
                    ks: {
                        name: "Kashmiri",
                        native: "कश्मीरी / كشميري",
                        rtl: 1
                    },
                    ku: {
                        name: "Kurdish",
                        native: "Kurdî / كوردی",
                        rtl: 1
                    },
                    kv: {
                        name: "Komi",
                        native: "Коми"
                    },
                    kw: {
                        name: "Cornish",
                        native: "Kernewek"
                    },
                    ky: {
                        name: "Kyrgyz",
                        native: "Кыргызча"
                    },
                    la: {
                        name: "Latin",
                        native: "Latina"
                    },
                    lb: {
                        name: "Luxembourgish",
                        native: "Lëtzebuergesch"
                    },
                    lg: {
                        name: "Ganda",
                        native: "Luganda"
                    },
                    li: {
                        name: "Limburgian",
                        native: "Limburgs"
                    },
                    ln: {
                        name: "Lingala",
                        native: "Lingála"
                    },
                    lo: {
                        name: "Laotian",
                        native: "ລາວ / Pha xa lao"
                    },
                    lt: {
                        name: "Lithuanian",
                        native: "Lietuvių"
                    },
                    lu: {
                        name: "Luba-Katanga",
                        native: "Tshiluba"
                    },
                    lv: {
                        name: "Latvian",
                        native: "Latviešu"
                    },
                    mg: {
                        name: "Malagasy",
                        native: "Malagasy"
                    },
                    mh: {
                        name: "Marshallese",
                        native: "Kajin Majel / Ebon"
                    },
                    mi: {
                        name: "Maori",
                        native: "Māori"
                    },
                    mk: {
                        name: "Macedonian",
                        native: "Македонски"
                    },
                    ml: {
                        name: "Malayalam",
                        native: "മലയാളം"
                    },
                    mn: {
                        name: "Mongolian",
                        native: "Монгол"
                    },
                    mo: {
                        name: "Moldovan",
                        native: "Moldovenească"
                    },
                    mr: {
                        name: "Marathi",
                        native: "मराठी"
                    },
                    ms: {
                        name: "Malay",
                        native: "Bahasa Melayu"
                    },
                    mt: {
                        name: "Maltese",
                        native: "bil-Malti"
                    },
                    my: {
                        name: "Burmese",
                        native: "မြန်မာစာ"
                    },
                    na: {
                        name: "Nauruan",
                        native: "Dorerin Naoero"
                    },
                    nb: {
                        name: "Norwegian Bokmål",
                        native: "Norsk bokmål"
                    },
                    nd: {
                        name: "North Ndebele",
                        native: "Sindebele"
                    },
                    ne: {
                        name: "Nepali",
                        native: "नेपाली"
                    },
                    ng: {
                        name: "Ndonga",
                        native: "Oshiwambo"
                    },
                    nl: {
                        name: "Dutch",
                        native: "Nederlands"
                    },
                    nn: {
                        name: "Norwegian Nynorsk",
                        native: "Norsk nynorsk"
                    },
                    no: {
                        name: "Norwegian",
                        native: "Norsk"
                    },
                    nr: {
                        name: "South Ndebele",
                        native: "isiNdebele"
                    },
                    nv: {
                        name: "Navajo",
                        native: "Diné bizaad"
                    },
                    ny: {
                        name: "Chichewa",
                        native: "Chi-Chewa"
                    },
                    oc: {
                        name: "Occitan",
                        native: "Occitan"
                    },
                    oj: {
                        name: "Ojibwa",
                        native: "ᐊᓂᔑᓈᐯᒧᐎᓐ / Anishinaabemowin"
                    },
                    om: {
                        name: "Oromo",
                        native: "Oromoo"
                    },
                    or: {
                        name: "Oriya",
                        native: "ଓଡ଼ିଆ"
                    },
                    os: {
                        name: "Ossetian / Ossetic",
                        native: "Иронау"
                    },
                    pa: {
                        name: "Panjabi / Punjabi",
                        native: "ਪੰਜਾਬੀ / पंजाबी / پنجابي"
                    },
                    pi: {
                        name: "Pali",
                        native: "Pāli / पाऴि"
                    },
                    pl: {
                        name: "Polish",
                        native: "Polski"
                    },
                    ps: {
                        name: "Pashto",
                        native: "پښتو",
                        rtl: 1
                    },
                    pt: {
                        name: "Portuguese",
                        native: "Português"
                    },
                    qu: {
                        name: "Quechua",
                        native: "Runa Simi"
                    },
                    rm: {
                        name: "Raeto Romance",
                        native: "Rumantsch"
                    },
                    rn: {
                        name: "Kirundi",
                        native: "Kirundi"
                    },
                    ro: {
                        name: "Romanian",
                        native: "Română"
                    },
                    ru: {
                        name: "Russian",
                        native: "Русский"
                    },
                    rw: {
                        name: "Rwandi",
                        native: "Kinyarwandi"
                    },
                    sa: {
                        name: "Sanskrit",
                        native: "संस्कृतम्"
                    },
                    sc: {
                        name: "Sardinian",
                        native: "Sardu"
                    },
                    sd: {
                        name: "Sindhi",
                        native: "सिनधि"
                    },
                    se: {
                        name: "Northern Sami",
                        native: "Sámegiella"
                    },
                    sg: {
                        name: "Sango",
                        native: "Sängö"
                    },
                    sh: {
                        name: "Serbo-Croatian",
                        native: "Srpskohrvatski / Српскохрватски"
                    },
                    si: {
                        name: "Sinhalese",
                        native: "සිංහල"
                    },
                    sk: {
                        name: "Slovak",
                        native: "Slovenčina"
                    },
                    sl: {
                        name: "Slovenian",
                        native: "Slovenščina"
                    },
                    sm: {
                        name: "Samoan",
                        native: "Gagana Samoa"
                    },
                    sn: {
                        name: "Shona",
                        native: "chiShona"
                    },
                    so: {
                        name: "Somalia",
                        native: "Soomaaliga"
                    },
                    sq: {
                        name: "Albanian",
                        native: "Shqip"
                    },
                    sr: {
                        name: "Serbian",
                        native: "Српски"
                    },
                    ss: {
                        name: "Swati",
                        native: "SiSwati"
                    },
                    st: {
                        name: "Southern Sotho",
                        native: "Sesotho"
                    },
                    su: {
                        name: "Sundanese",
                        native: "Basa Sunda"
                    },
                    sv: {
                        name: "Swedish",
                        native: "Svenska"
                    },
                    sw: {
                        name: "Swahili",
                        native: "Kiswahili"
                    },
                    ta: {
                        name: "Tamil",
                        native: "தமிழ்"
                    },
                    te: {
                        name: "Telugu",
                        native: "తెలుగు"
                    },
                    tg: {
                        name: "Tajik",
                        native: "Тоҷикӣ"
                    },
                    th: {
                        name: "Thai",
                        native: "ไทย / Phasa Thai"
                    },
                    ti: {
                        name: "Tigrinya",
                        native: "ትግርኛ"
                    },
                    tk: {
                        name: "Turkmen",
                        native: "Туркмен / تركمن"
                    },
                    tl: {
                        name: "Tagalog / Filipino",
                        native: "Tagalog"
                    },
                    tn: {
                        name: "Tswana",
                        native: "Setswana"
                    },
                    to: {
                        name: "Tonga",
                        native: "Lea Faka-Tonga"
                    },
                    tr: {
                        name: "Turkish",
                        native: "Türkçe"
                    },
                    ts: {
                        name: "Tsonga",
                        native: "Xitsonga"
                    },
                    tt: {
                        name: "Tatar",
                        native: "Tatarça"
                    },
                    tw: {
                        name: "Twi",
                        native: "Twi"
                    },
                    ty: {
                        name: "Tahitian",
                        native: "Reo Mā`ohi"
                    },
                    ug: {
                        name: "Uyghur",
                        native: "Uyƣurqə / ئۇيغۇرچە"
                    },
                    uk: {
                        name: "Ukrainian",
                        native: "Українська"
                    },
                    ur: {
                        name: "Urdu",
                        native: "اردو",
                        rtl: 1
                    },
                    uz: {
                        name: "Uzbek",
                        native: "Ўзбек"
                    },
                    ve: {
                        name: "Venda",
                        native: "Tshivenḓa"
                    },
                    vi: {
                        name: "Vietnamese",
                        native: "Tiếng Việt"
                    },
                    vo: {
                        name: "Volapük",
                        native: "Volapük"
                    },
                    wa: {
                        name: "Walloon",
                        native: "Walon"
                    },
                    wo: {
                        name: "Wolof",
                        native: "Wollof"
                    },
                    xh: {
                        name: "Xhosa",
                        native: "isiXhosa"
                    },
                    yi: {
                        name: "Yiddish",
                        native: "ייִדיש",
                        rtl: 1
                    },
                    yo: {
                        name: "Yoruba",
                        native: "Yorùbá"
                    },
                    za: {
                        name: "Zhuang",
                        native: "Cuengh / Tôô / 壮语"
                    },
                    zh: {
                        name: "Chinese",
                        native: "中文"
                    },
                    zu: {
                        name: "Zulu",
                        native: "isiZulu"
                    }
                };

            function s(v) {
                const d = [];
                let b = 0;
                const E = v.length;
                for (; b < E;) {
                    const A = v.charCodeAt(b++);
                    if (A >= 55296 && A <= 56319 && b < E) {
                        const P = v.charCodeAt(b++);
                        (64512 & P) == 56320 ? d.push(((1023 & A) << 10) + (1023 & P) + 65536) : (d.push(A), b--)
                    } else d.push(A)
                }
                return d
            }
            var F = {
                ucs2: {
                    decode: s,
                    encode: v => String.fromCodePoint(...v)
                }
            };
            const {
                ucs2: {
                    decode: U,
                    encode: h
                }
            } = F, N = 127397, S = /^[A-Z]{2}$/;
            return {
                continents: a,
                countries: o,
                languages: i,
                languagesAll: m,
                getEmojiFlag: v => S.test(v) ? h(v.split("").map(d => N + d.charCodeAt(0))) : "",
                getUnicode: v => U(v).map(d => "U+" + Number(d).toString(16).toUpperCase()).join(" ")
            }
        })
    }(I)), I.exports
}
var J = Me();
const X = "US",
    Pe = () => {
        const {
            login: n
        } = l.useContext(k), [t, a] = l.useState(""), [o, i] = l.useState(!1), [m, s] = l.useState(""), [F, U] = l.useState(!1), [h, N] = l.useState(!1), [S, v] = l.useState([]), d = c => {
            a(c), c !== X ? E(c) : i(!0)
        }, b = c => {
            const p = c.target.value;
            U(!1), p && String(p).length === 5 && s(p)
        };
        l.useEffect(() => {
            m && (N(!0), T({
                url: "/api/users/fetch-schools",
                method: "post",
                data: {
                    zipCode: m
                },
                success: c => {
                    c && c.schoolList && c.schoolList.length ? (v(c.schoolList), i(!1)) : E()
                },
                error: () => E(),
                both: () => N(!1)
            }))
        }, [m]);
        const E = c => {
                n.country = c || t, n.informationNeeded.replace(n.informationNeeded.filter(p => p !== r.country))
            },
            A = (c, p) => {
                n.schoolId = c, n.districtId = p, E()
            },
            P = () => {
                v([]), s(""), i(!0), U(!1)
            };
        return e.jsxs(e.Fragment, {
            children: [S && S.length && !o ? e.jsx(e.Fragment, {
                children: e.jsxs("div", {
                    style: {
                        color: "blue",
                        cursor: "pointer"
                    },
                    onClick: P,
                    children: [e.jsx("i", {
                        className: "fad fa-long-arrow-left"
                    }), " Go Back"]
                })
            }) : null, e.jsx("div", {
                style: {
                    fontWeight: f.Black,
                    fontSize: 30,
                    color: y.Black,
                    marginBottom: 13
                },
                children: "🏫 Find your school"
            }), !S.length && e.jsxs(e.Fragment, {
                children: [!o && e.jsxs(e.Fragment, {
                    children: [e.jsx(R, {
                        children: "🗺️ Country"
                    }), e.jsx(V, {
                        style: {
                            width: "100%"
                        },
                        showSearch: !0,
                        placeholder: "Select country...",
                        onChange: d,
                        filterOption: (c, p) => p.props.children.toLowerCase().indexOf(c.toLowerCase()) >= 0,
                        size: "large",
                        children: Object.keys(J.countries).sort(c => c === X ? 1 : -1).reverse().map(c => {
                            const p = J.countries[c];
                            let D = "";
                            return p.emoji && (D += `${p.emoji} `), p.name && (p.name === "United States" ? D += "United States Of America" : D += p.name), e.jsx(V.Option, {
                                value: c,
                                children: D
                            }, c)
                        })
                    })]
                }), !h && o && e.jsxs(e.Fragment, {
                    children: [e.jsx(R, {
                        children: "🇺🇲 Zip Code of School"
                    }), e.jsx(K, {
                        onChange: b,
                        type: "number",
                        placeholder: "Zip code here...",
                        maxLength: 5,
                        size: "large",
                        autoFocus: !0
                    }), F && e.jsx(q, {
                        style: {
                            marginTop: 10
                        },
                        showIcon: !0,
                        type: "error",
                        message: "Invalid Zip Code",
                        description: e.jsxs(e.Fragment, {
                            children: ["Try entering another zip code or", " ", e.jsx("a", {
                                onClick: () => E(),
                                children: "skip this step."
                            })]
                        })
                    })]
                })]
            }), h && e.jsx(Q, {
                size: "large"
            }), S && S.length ? e.jsxs(e.Fragment, {
                children: [S.map(c => e.jsx(H, {
                    name: c.schoolName,
                    description: `${c.address.city}, ${c.address.stateFull}`,
                    onSelect: () => A(c && c.schoolid ? c.schoolid : null, c && c.district && c.district.districtID ? c.district.districtID : null)
                }, c.schoolid)), e.jsx(H, {
                    name: "Other",
                    description: "School not listed",
                    onSelect: () => A(null, null)
                })]
            }) : null, e.jsx(L, {}), e.jsx(ee, {
                link: "https://www.notion.so/gimkit/Country-Zip-Code-School-9bca6de77686407cad0a4298a4a1d00e"
            })]
        })
    },
    De = () => {
        const {
            login: n
        } = u, t = Object.keys(n), a = [];
        return t.forEach(o => {
            const i = n[o];
            i === "" || i === void 0 || i === null || (o === "accountType" && a.push({
                key: r.accountType,
                value: i
            }), o === "firstName" && a.push({
                key: r.firstName,
                value: i
            }), o === "lastName" && a.push({
                key: r.lastName,
                value: i
            }), o === "schoolId" && a.push({
                key: r.schoolId,
                value: i
            }), o === "districtId" && a.push({
                key: r.districtId,
                value: i
            }), o === "country" && a.push({
                key: r.country,
                value: i
            }), o === "areaOfExpertise" && a.push({
                key: r.areaOfExpertise,
                value: i
            }), o === "gradeLevel" && a.push({
                key: r.gradeLevel,
                value: i
            }), o === "acceptsLatestPolicies" && a.push({
                key: r.acceptedLatestPolicies,
                value: i
            }), o === "organization" && a.push({
                key: r.organization,
                value: i
            }))
        }), a
    },
    we = () => {
        const {
            login: n,
            navigation: t
        } = u, a = B("blockRedirect") === "true", o = () => {
            window && window.parent && window.parent.postMessage && window.parent.postMessage({
                type: "_authenticated_",
                user: re(ce())
            }, se())
        };
        if (n.userExists) {
            const i = () => {
                const m = {
                    email: n.email,
                    password: n.password,
                    googleToken: n.googleToken
                };
                t.loggingIn = !0, T({
                    url: "/api/login",
                    method: "post",
                    data: m,
                    success: s => {
                        if (O.user.setUser(s.user, !0), n.authenticated = !0, s.modal && s.modal.type && oe[s.modal.type]({
                                title: "Account Information",
                                content: s.modal.message
                            }), s.informationNeeded.length) n.informationNeeded.replace([...n.informationNeeded, ...s.informationNeeded]);
                        else {
                            let F = u.navigation.redirectUri;
                            F || (F = w), F.includes("logout") && (F = w), a ? o() : x(F)
                        }
                    },
                    error: s => {
                        u.navigation.loginError = s, u.login.password ? u.login.informationNeeded.replace([...u.login.informationNeeded, r.password]) : u.login.informationNeeded.replace([...u.login.informationNeeded, r.email])
                    },
                    both: () => u.navigation.loggingIn = !1
                })
            };
            if (n.authenticated) {
                const m = De();
                !m || !m.length ? i() : (u.navigation.updatingAccountInformation = !0, T({
                    url: "/api/users/update-information",
                    method: "post",
                    data: {
                        changes: m
                    },
                    success: () => {
                        i()
                    },
                    error: () => {
                        u.navigation.updatingAccountInformation = !1, ie({
                            title: "Error updating account information",
                            content: "Please contact support."
                        })
                    }
                }))
            } else i()
        } else {
            const i = {
                firstName: n.firstName,
                lastName: n.lastName,
                email: n.email,
                googleToken: n.googleToken,
                password: n.password,
                accountType: n.accountType,
                country: n.country,
                schoolId: n.schoolId,
                districtId: n.districtId,
                areaOfExpertise: n.areaOfExpertise,
                organization: n.organization,
                gradeLevel: n.gradeLevel,
                groupJoining: t.classJoiningId
            };
            if (u.navigation.creatingAccount) return;
            u.navigation.creatingAccount = !0, T({
                url: "/api/register",
                method: "post",
                data: i,
                success: m => {
                    sessionStorage.setItem("NEW_USER", "YES"), O.user.setUser(m, !0);
                    let s = u.navigation.redirectUri;
                    s || (s = w), a ? o() : x(s)
                },
                error: m => {
                    te({
                        e: m,
                        default: {
                            title: "Error creating account",
                            content: "Please try again later"
                        },
                        onOk: () => window.location.reload()
                    })
                },
                both: () => u.navigation.creatingAccount = !1
            })
        }
    },
    Ie = M(() => {
        const {
            login: n
        } = l.useContext(k), t = () => {
            n.acceptsLatestPolicies = !0, n.informationNeeded.replace(n.informationNeeded.filter(a => a !== r.acceptedLatestPolicies))
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsxs("div", {
                style: {
                    color: y.Black,
                    fontWeight: f.Normal,
                    fontSize: 19
                },
                children: ["We've updated our", " ", e.jsx("a", {
                    href: $,
                    target: "_blank",
                    children: "Terms Of Service"
                }), " ", "&", " ", e.jsx("a", {
                    href: _,
                    target: "_blank",
                    children: "Privacy Policy"
                }), "."]
            }), e.jsx(G, {
                style: {
                    marginTop: 5
                },
                size: "large",
                onClick: t,
                children: "I Agree"
            })]
        })
    }),
    xe = () => {
        const [n, t] = l.useState(""), {
            login: a
        } = l.useContext(k), o = m => {
            t(m.target.value)
        }, i = () => {
            a.organization = n, a.informationNeeded.replace(a.informationNeeded.filter(m => m !== r.organization))
        };
        return e.jsxs(e.Fragment, {
            children: [e.jsx(R, {
                children: "Organization (optional)"
            }), e.jsx(K, {
                size: "large",
                style: {
                    width: "100%"
                },
                placeholder: "Gimkit Productions...",
                onChange: o,
                onPressEnter: i,
                autoFocus: !0
            }), e.jsx(G, {
                onClick: i,
                style: {
                    marginTop: 5,
                    width: "100%"
                },
                children: "Continue"
            }), e.jsx("div", {
                style: {
                    height: 10
                }
            }), e.jsx(ee, {
                link: "https://www.notion.so/gimkit/Organization-0931f4ca9b48423c97663801d8b95387"
            })]
        })
    },
    Re = M(() => {
        const {
            login: n,
            navigation: t
        } = l.useContext(k), {
            currentStage: a
        } = ye(), [o, i] = l.useState(!0), [m, s] = l.useState(!1);
        l.useEffect(() => {
            n.informationNeeded.length || we()
        }, [n.informationNeeded.length]), l.useEffect(() => {
            B("pwr") && s(!0);
            const U = B("class");
            U ? T({
                url: `/api/v1/groups/details/${U}`,
                success: h => {
                    t.classJoiningId = U, t.classJoiningName = h.groupName, t.classJoiningTeacherName = h.teacherName, n.accountType = j.student, t.redirectUri || (t.redirectUri = `/class/join/${U}`), i(!1)
                },
                error: () => x("/")
            }) : i(!1)
        }, []);
        const F = () => {
            if (t.creatingAccount || t.loggingIn && !n.informationNeeded.length || t.updatingAccountInformation && !n.informationNeeded.length) {
                const U = n.accountType === j.student;
                return e.jsxs("div", {
                    className: "flex hc vc maxWidth flex-column",
                    children: [e.jsx(Q, {
                        size: "large"
                    }), e.jsx("div", {
                        style: {
                            marginTop: 5,
                            fontWeight: f.Bold,
                            color: y.Black,
                            fontSize: 23
                        },
                        children: t.updatingAccountInformation || t.loggingIn ? t.classJoiningName ? "Just a second..." : "Logging you in..." : U ? "Just a second...." : "Creating your account..."
                    })]
                })
            }
            return a === g.email ? e.jsx(Ue, {}) : a === g.password ? e.jsx(ke, {}) : a === g.accountType ? e.jsx(Ne, {}) : a === g.nameAndPassword ? e.jsx(pe, {}) : a === g.school ? e.jsx(Pe, {}) : a === g.educatorSpecificInfo ? e.jsx(ve, {}) : a === g.acceptPolicies ? e.jsx(Ie, {}) : a === g.nonSchoolSpecificInfo ? e.jsx(xe, {}) : null
        };
        return o ? e.jsx(Y, {}) : e.jsxs(Y, {
            children: [e.jsx(Se, {
                message: a === g.email && m ? "Password changed successfully!" : ""
            }), F()]
        })
    }),
    Y = C.div.attrs({
        className: "scroll-y"
    })`
  width: 90%;
  max-width: 520px;
  padding: 20px;
  background: ${y.White};
  border-radius: 7px;
  max-height: 90vh;
`,
    rn = () => {
        const [n, t] = l.useState(!1), a = me(), i = new URLSearchParams(a.search).get("accountType"), m = B("class");
        return i && z[i] && (u.login.accountType = z[i]), l.useEffect(() => {
            u.navigation.redirectUri = "";
            let s = B("location") ? decodeURIComponent(B("location")) : "";
            s && !de(s) && (s = "");
            const F = () => {
                u.navigation.reset(), u.login.reset()
            };
            return s && (u.navigation.redirectUri = s), le() ? (x(s || w), F) : (window.location.href.includes("login") && t(!0), F)
        }, []), e.jsxs(e.Fragment, {
            children: [e.jsx(ue, {
                title: m ? "Join Class" : n ? "Login" : "Sign Up"
            }), e.jsx(k.Provider, {
                value: u,
                children: e.jsx(Le, {
                    children: e.jsx(Re, {})
                })
            })]
        })
    },
    Le = C.div`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url('/client/img/signup/funky-lines.png') repeat 0 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export {
    rn as
    default
};