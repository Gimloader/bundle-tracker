import {
    o as t,
    m as u,
    aZ as f,
    r as I,
    j as E,
    B as N
} from "./_index.js";
import {
    o as T
} from "./mobxreact.esm.js";
var A = Object.defineProperty,
    i = (e, r, l, y) => {
        for (var s = void 0, c = e.length - 1, p; c >= 0; c--)(p = e[c]) && (s = p(r, l, s) || s);
        return s && A(r, l, s), s
    };
const h = {
        email: "EMAIL",
        password: "PASSWORD",
        accountPassword: "ACCOUNT_PASSWORD",
        firstName: "FIRST_NAME",
        lastName: "LAST_NAME",
        accountType: "ACCOUNT_TYPE",
        country: "COUNTRY",
        areaOfExpertise: "AREA_OF_EXPERTISE",
        gradeLevel: "GRADE_LEVEL",
        organization: "ORGANIZATION",
        acceptedLatestPolicies: "ACCEPTED_LATEST_POLICIES",
        schoolId: "SCHOOL_ID",
        districtId: "DISTRICT_ID"
    },
    d = {
        userExists: !1,
        email: "",
        accountType: null,
        googleToken: "",
        firstName: "",
        lastName: "",
        password: "",
        schoolId: "",
        districtId: "",
        country: "",
        areaOfExpertise: "",
        gradeLevel: "",
        organization: "",
        acceptsLatestPolicies: !1,
        authenticated: !1
    },
    {
        userExists: v,
        email: O,
        accountType: S,
        googleToken: C,
        firstName: P,
        lastName: _,
        password: L,
        schoolId: x,
        districtId: w,
        country: b,
        areaOfExpertise: J,
        gradeLevel: k,
        organization: R,
        acceptsLatestPolicies: j,
        authenticated: z
    } = d;
class o {
    constructor() {
        this.userExists = v, this.email = O, this.accountType = S, this.googleToken = C, this.firstName = P, this.lastName = _, this.password = L, this.schoolId = x, this.districtId = w, this.country = b, this.areaOfExpertise = J, this.gradeLevel = k, this.organization = R, this.acceptsLatestPolicies = j, this.authenticated = z, this.informationNeeded = t.array([h.email]), this.reset = () => {
            Object.keys(d).forEach(r => this[r] = d[r]), this.informationNeeded.replace([h.email])
        }, u(this)
    }
}
i([t], o.prototype, "userExists");
i([t], o.prototype, "email");
i([t], o.prototype, "accountType");
i([t], o.prototype, "googleToken");
i([t], o.prototype, "firstName");
i([t], o.prototype, "lastName");
i([t], o.prototype, "password");
i([t], o.prototype, "schoolId");
i([t], o.prototype, "districtId");
i([t], o.prototype, "country");
i([t], o.prototype, "areaOfExpertise");
i([t], o.prototype, "gradeLevel");
i([t], o.prototype, "organization");
i([t], o.prototype, "acceptsLatestPolicies");
i([t], o.prototype, "authenticated");
i([t], o.prototype, "informationNeeded");
i([f], o.prototype, "reset");
var m = (e => (e.email = "email", e.password = "password", e.accountType = "accountType", e.studentSpecificInfo = "studentSpecificInfo", e.nameAndPassword = "nameAndPassword", e.school = "school", e.educatorSpecificInfo = "educatorSpecificInfo", e.nonSchoolSpecificInfo = "nonSchoolSpecificInfo", e.acceptPolicies = "acceptPolicies", e.verifyClass = "verifyClass", e))(m || {}),
    B = Object.defineProperty,
    n = (e, r, l, y) => {
        for (var s = void 0, c = e.length - 1, p; c >= 0; c--)(p = e[c]) && (s = p(r, l, s) || s);
        return s && B(r, l, s), s
    };
const g = {
        currentStage: m.email,
        emailSignInBlocked: !1,
        creatingAccount: !1,
        loggingIn: !1,
        updatingAccountInformation: !1,
        loginError: null,
        redirectUri: "",
        classJoiningId: "",
        classJoiningName: "",
        classJoiningTeacherName: ""
    },
    {
        currentStage: D,
        emailSignInBlocked: U,
        creatingAccount: M,
        loggingIn: $,
        updatingAccountInformation: F,
        loginError: G,
        redirectUri: W,
        classJoiningId: Y,
        classJoiningName: Z,
        classJoiningTeacherName: H
    } = g;
class a {
    constructor() {
        this.currentStage = D, this.emailSignInBlocked = U, this.creatingAccount = M, this.loggingIn = $, this.updatingAccountInformation = F, this.loginError = G, this.redirectUri = W, this.classJoiningId = Y, this.classJoiningName = Z, this.classJoiningTeacherName = H, this.reset = () => {
            Object.keys(g).forEach(r => this[r] = g[r])
        }, u(this)
    }
}
n([t], a.prototype, "currentStage");
n([t], a.prototype, "emailSignInBlocked");
n([t], a.prototype, "creatingAccount");
n([t], a.prototype, "loggingIn");
n([t], a.prototype, "updatingAccountInformation");
n([t], a.prototype, "loginError");
n([t], a.prototype, "redirectUri");
n([t], a.prototype, "classJoiningId");
n([t], a.prototype, "classJoiningName");
n([t], a.prototype, "classJoiningTeacherName");
n([f], a.prototype, "reset");
const V = {
        login: new o,
        navigation: new a
    },
    K = I.createContext(V),
    Q = T(e => E.jsx(N, {
        disabled: e.disabled,
        size: e.size || "middle",
        type: "primary",
        onClick: e.onClick,
        style: Object.assign({
            width: "100%"
        }, e.style),
        loading: e.loading,
        children: e.children
    }));
export {
    Q as C, m as S, K as a, h as i, V as s
};