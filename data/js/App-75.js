import {
    j as e,
    D as m,
    r as x,
    c as v,
    e as h,
    B as k,
    a as C,
    t as S,
    M as F,
    U as y,
    F as l,
    d as n
} from "./_index.js";
import {
    A as c
} from "./AccessibleAnchor.js";
import {
    F as r
} from "./index-16.js";
import {
    I as i
} from "./index-3.js";
import {
    C as P
} from "./index-11.js";
import {
    N as I
} from "./NotionContentWrapper.js";
import {
    P as N
} from "./Paper.js";
import {
    S as A
} from "./App-4.js";
import "./index-10.js";
import "./index-5.js";
import "./move.js";
import "./index-2.js";
import "./useForm.js";
import "./useBreakpoint.js";
import "./useForceUpdate.js";
import "./QuestionCircleOutlined.js";
import "./useBubbleLock.js";
import "./Shortcut.js";
import "./Names.js";
import "./mobxreact.esm.js";
import "./index-1.js";
import "./index-6.js";
import "./FontAwesomeIcon.js";
import "./App-2.js";
import "./Sizes.js";
import "./motion.js";
import "./price.js";
import "./TrackPostHogEvent.js";
import "./index-4.js";
import "./context.js";
import "./StarOutlined.js";
import "./NavigateTo.js";
import "./index-15.js";
import "./colors.js";
import "./useWarningOnMountInDevelopment.js";
const T = () => e.jsxs("div", {
        children: ["One giant obstacle for teachers is classroom funding: The average teacher in the US spends nearly $750 a year on classroom supplies. ", e.jsx("br", {}), " ", e.jsx("br", {}), " ", "That's an eye-popping number. For us, it's also a motivating one. ", e.jsx("br", {}), " ", e.jsx("br", {}), "And that's why we created GiveKit!", e.jsx("br", {}), " ", e.jsx("br", {}), e.jsx("b", {
            children: "With GiveKit, we're donating $500 in funding every month to help pay for your school materials, first aid kits, tech tools, furniture, and anything else you may need to do your best work."
        }), e.jsx(m, {}), e.jsx("h2", {
            children: "How it works"
        }), e.jsxs("b", {
            children: ["Every month we’ll fund $500 to educator-led projects via", " ", e.jsx(c, {
                external: !0,
                to: "https://www.donorschoose.org",
                target: "_blank",
                children: "DonorsChoose.org."
            })]
        }), e.jsx("br", {}), " ", e.jsx("br", {}), "We may fund one project in a month or several. If you don't get picked one month, no worries, we might always come back to fund it in the future.", e.jsx("br", {}), " ", e.jsx("br", {}), "We've decided to donate through", " ", e.jsx(c, {
            external: !0,
            to: "https://www.donorschoose.org",
            target: "_blank",
            children: "DonorsChoose.org"
        }), " ", "—- they help take care of all the complexities in getting money from us to you.", e.jsx("br", {}), " ", e.jsx("br", {}), e.jsx("b", {
            children: "To apply for GiveKit, simply:"
        }), e.jsx("br", {}), " ", e.jsx("br", {}), "1. Register and start a project at", " ", e.jsx(c, {
            external: !0,
            to: "https://www.donorschoose.org",
            target: "_blank",
            children: "DonorsChoose.org"
        }), " ", e.jsx("br", {}), "2. Fill out the form below with a link to your project ", e.jsx("br", {}), "3. Keep up your incredible work! ", e.jsx("br", {}), " ", e.jsx("br", {}), "We'll review applications monthly and select a project or projects to fund.", e.jsx("br", {})]
    }),
    j = "Thank you so much for applying! If you're selected, we'll send you an email. Take care and have a great rest of your day!",
    $ = () => {
        const [t, s] = x.useState(!1), [a, p] = x.useState(!1), f = b => {
            t || a || (s(!0), C({
                url: "/api/v1/givekit/apply",
                data: b,
                success: () => {
                    p(!0), F.success({
                        title: "Applied!",
                        content: j
                    })
                },
                error: w => {
                    S({
                        e: w,
                        default: {
                            title: "Error applying. Please try again later"
                        }
                    })
                },
                both: () => {
                    s(!1)
                }
            }))
        };
        return a ? e.jsx(v, {
            style: {
                fontSize: 18,
                color: h.Black
            },
            children: j
        }) : e.jsxs(r, {
            onFinish: f,
            style: {
                width: "100%"
            },
            children: [e.jsx(o, {
                children: "First Name*"
            }), e.jsx(r.Item, {
                name: "firstName",
                rules: [{
                    required: !0,
                    message: "Please enter your first name."
                }],
                children: e.jsx(i, {})
            }), e.jsx(o, {
                children: "Last Name*"
            }), e.jsx(r.Item, {
                name: "lastName",
                rules: [{
                    required: !0,
                    message: "Please enter your last name."
                }],
                children: e.jsx(i, {})
            }), e.jsx(o, {
                children: "Role*"
            }), e.jsx(r.Item, {
                name: "role",
                rules: [{
                    required: !0,
                    message: "Please enter your role."
                }],
                children: e.jsx(i, {})
            }), e.jsx(o, {
                children: "Email Address*"
            }), e.jsx(r.Item, {
                name: "email",
                rules: [{
                    required: !0,
                    type: "email",
                    message: "Please enter a valid email."
                }],
                children: e.jsx(i, {
                    type: "email"
                })
            }), e.jsx(o, {
                children: "DonorsChoose Project Link*"
            }), e.jsx(u, {
                children: "Paste the link to your project on DonorsChoose.org"
            }), e.jsx(r.Item, {
                name: "projectLink",
                rules: [{
                    required: !0,
                    message: "Please enter the project link."
                }],
                children: e.jsx(i, {
                    placeholder: "https://www.donorschoose.org/project/my-project"
                })
            }), e.jsx(o, {
                children: "Date Needed"
            }), e.jsx(u, {
                children: "If your project is time sensitive, let us know!"
            }), e.jsx(r.Item, {
                name: "dateNeeded",
                children: e.jsx(i, {})
            }), e.jsx(o, {
                children: "Comments"
            }), e.jsx(r.Item, {
                name: "comments",
                children: e.jsx(i, {})
            }), e.jsx(o, {
                children: "Permission"
            }), e.jsx(u, {
                children: "Check the box below if you give us permission to use your name and project info. If you're not comfortable, no worries! Checking this box does not increase your chances of being selected."
            }), e.jsx(r.Item, {
                name: "permission",
                valuePropName: "checked",
                initialValue: !1,
                children: e.jsx(P, {
                    children: "Yes, you may use my name and project info!"
                })
            }), e.jsx(r.Item, {
                children: e.jsx(k, {
                    style: {
                        marginTop: 20
                    },
                    type: "primary",
                    htmlType: "submit",
                    size: "large",
                    block: !0,
                    loading: t,
                    children: "Submit"
                })
            })]
        })
    },
    o = n.div`
  font-size: 18px;
  color: ${h.Black};
  font-family: ${y.SFPro};
  margin-top: 12px;
  font-weight: ${l.Bold};
`,
    u = n.div``,
    W = () => e.jsxs(e.Fragment, {
        children: [e.jsx(m, {}), e.jsx("h2", {
            children: "Apply for GiveKit funding"
        }), e.jsx($, {})]
    }),
    D = () => e.jsxs(e.Fragment, {
        children: [e.jsx(m, {}), e.jsx("h2", {
            children: "FAQ"
        }), e.jsx("b", {
            children: "What kind of projects are you looking for? "
        }), " ", e.jsx("br", {}), "We’re looking for projects that have the largest possible positive impact on students. That could be anything! Classroom materials, first aid kits, resources that celebrate diversity, supplies for ambitious project-based learning ideas — Anything. If you need it, we want to know about it. The only thing we’re not looking for are requests for Gimkit subscriptions or licenses.", e.jsx("br", {}), " ", e.jsx("br", {}), e.jsx("b", {
            children: "Why not give money directly to teachers?"
        }), " ", e.jsx("br", {}), "Because DonorsChoose specializes in funding classroom projects and they're great at what they do. They’ve helped donors give more than $1 billion to teachers, funding nearly 2 million projects. They take care of the hard parts of giving including vetting requests, purchasing items, and shipping materials directly to verified schools. Simply, working with them makes it easy to give!", " ", e.jsx(c, {
            external: !0,
            target: "_blank",
            to: "https://www.donorschoose.org",
            children: "Learn more about DonorsChoose.org."
        }), e.jsx(m, {}), e.jsx("b", {
            children: "Need more info?"
        }), " ", e.jsx("br", {}), "Write us at", " ", e.jsx(c, {
            to: "mailto:hello@gimkit.com",
            external: !0,
            children: "hello@gimkit.com"
        }), " ", "and put GiveKit in the subject line."]
    }),
    B = t => {
        const s = a => a === t.currentScreen;
        return e.jsxs(q, {
            children: [e.jsx(g, {
                onClick: () => t.setScreen(d.apply),
                style: {
                    marginRight: 5,
                    fontWeight: s(d.apply) ? l.Bold : l.Normal
                },
                children: "About & Apply"
            }), e.jsx(g, {
                onClick: () => t.setScreen(d.pastProjects),
                style: {
                    fontWeight: s(d.pastProjects) ? l.Bold : l.Normal
                },
                children: "Previously funded projects"
            })]
        })
    },
    q = n.div.attrs({
        className: "flex vc"
    })`
  margin-bottom: 25px;
`,
    g = n(c)`
  padding: 4px 15px;
  background: ${h.White};
  border: solid 1px;
  border-radius: 500px;
  font-size: 15px;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`,
    E = () => e.jsx(I, {
        id: "382c29c71fa14d5a99358c8e5c9b1e43"
    });
var d = (t => (t.apply = "apply", t.pastProjects = "pastProjects", t))(d || {});
const ve = () => {
        const [t, s] = x.useState("apply"), a = () => t === "apply" ? e.jsxs(e.Fragment, {
            children: [e.jsx(T, {}), e.jsx(W, {}), e.jsx(D, {})]
        }) : e.jsx(E, {});
        return e.jsxs(G, {
            children: [e.jsx(A, {
                includeSpacer: !0
            }), e.jsx(K, {}), e.jsx(B, {
                currentScreen: t,
                setScreen: p => {
                    s(p)
                }
            }), e.jsx(z, {
                children: a()
            })]
        })
    },
    G = n.div.attrs({
        className: "flex flex-column vc"
    })`
  flex: 1;
  background: ${h.Snow};
  color: #1d2d35;
  font-family: ${y.SFPro};
  .ant-row.ant-form-item {
    margin: 0px;
  }
`,
    K = n.img.attrs({
        src: "/client/img/givekit/header.png",
        alt: "GiveKit"
    })`
  height: 225px;
  margin: 45px;
  margin-bottom: 35px;
  max-width: 80%;
`,
    z = n(N)`
  flex: 1;
  width: 90%;
  max-width: 720px;
  padding: 45px;
  border-radius: 9px;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  font-size: 18px;

  h2 {
    font-size: 28px;
    font-weight: ${l.Bold};
  }
`;
export {
    d as GiveKitScreen, ve as
    default
};