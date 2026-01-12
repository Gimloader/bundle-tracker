import {
    r as o,
    V as a,
    M as t,
    a as c,
    j as r,
    S as n,
    h as i,
    a2 as u
} from "./_index.js";
import {
    N as e
} from "./NavigateTo.js";
const d = () => (o.useEffect(() => {
    const s = a("token");
    if (!s) {
        e("/");
        return
    }
    t.confirm({
        title: "Are you sure you want to revoke your child's access to Gimkit?",
        onOk: () => {
            c({
                url: "/api/users/revokeAccess",
                method: "post",
                data: {
                    token: decodeURIComponent(s)
                },
                success: () => {
                    t.success({
                        content: "Your student's access has been revoked"
                    }), e(u)
                },
                error: () => i({
                    title: "Error revoking access",
                    content: "The link might have expired. Please contact support for further assistance"
                })
            })
        },
        onCancel: () => {
            e("/")
        },
        okText: "Yes",
        cancelText: "No"
    })
}, []), r.jsx("div", {
    className: "maxWidth maxHeight hc vc flex",
    children: r.jsx(n, {
        size: "large"
    })
}));
export {
    d as
    default
};