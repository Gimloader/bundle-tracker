import {
    r as h,
    j as t,
    U as m,
    e as r,
    d as e
} from "./_index.js";
const x = "#ebe5fe",
    s = r.BackgroundPurple,
    g = "rgba(0,0,0,.65)",
    i = 14,
    u = e.div`
  width: 100%;
  box-sizing: border-box;
  font-family: ${m.SFPro};
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${i}px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${o=>o.selected&&!o.blockBackground?x:r.White};
  color: ${o=>o.selected?s:g};
  ${o=>o.selected&&!o.blockStripe&&"border-right: 3px solid "+s+";"}
  transition: all 0.25s;
  &:hover {
    color: ${s};
  }
`,
    C = e.div.attrs({
        className: "flex vc maxWidth"
    })``,
    b = e.div``;
class k extends h.Component {
    render() {
        const {
            title: c,
            onClick: l,
            selected: p,
            blockStripe: a,
            blockBackground: d
        } = this.props, n = this.props.icon;
        return t.jsxs(u, {
            selected: p,
            blockStripe: a,
            blockBackground: d,
            onClick: l,
            className: this.props.className,
            ...this.props.style,
            children: [n ? t.jsx(n, {
                style: {
                    fontSize: i,
                    marginRight: 10
                },
                theme: this.props.customIconColor ? "twoTone" : "outlined",
                twoToneColor: this.props.customIconColor || ""
            }) : null, t.jsxs(C, {
                children: [t.jsx(b, {
                    children: c
                }), this.props.customRightComponent ? this.props.customRightComponent : null]
            })]
        })
    }
}
export {
    k as M
};