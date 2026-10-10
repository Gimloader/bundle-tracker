import {
    o as e
} from "./rolldown-runtime.js";
import {
    t
} from "./react-1.js";
import {
    t as n
} from "./jsx-runtime.js";
import {
    c as r,
    l as i,
    n as a
} from "./_index.js";
var o = e(t()),
    s = n(),
    c = `#ebe5fe`,
    l = a.BackgroundPurple,
    u = `rgba(0,0,0,.65)`,
    d = i.div`
  width: 100%;
  box-sizing: border-box;
  font-family: ${r.SFPro};
  margin-top: 4px;
  margin-bottom: 4px;
  height: 40px;
  display: flex;
  cursor: pointer;
  font-size: ${14}px;
  align-items: center;
  padding-left: 24px;
  padding-right: 16px;
  background: ${e=>e.selected&&!e.blockBackground?c:a.White};
  color: ${e=>e.selected?l:u};
  ${e=>e.selected&&!e.blockStripe&&`border-right: 3px solid `+l+`;`}
  transition: all 0.25s;
  &:hover {
    color: ${l};
  }
`,
    f = i.div.attrs({
        className: `flex vc maxWidth`
    })``,
    p = i.div``,
    m = class extends o.Component {
        render() {
            let {
                title: e,
                onClick: t,
                selected: n,
                blockStripe: r,
                blockBackground: i
            } = this.props, a = this.props.icon;
            return (0, s.jsxs)(d, {
                selected: n,
                blockStripe: r,
                blockBackground: i,
                onClick: t,
                className: this.props.className,
                ...this.props.style,
                children: [a ? (0, s.jsx)(a, {
                    style: {
                        fontSize: 14,
                        marginRight: 10
                    },
                    theme: this.props.customIconColor ? `twoTone` : `outlined`,
                    twoToneColor: this.props.customIconColor || ``
                }) : null, (0, s.jsxs)(f, {
                    children: [(0, s.jsx)(p, {
                        children: e
                    }), this.props.customRightComponent ? this.props.customRightComponent : null]
                })]
            })
        }
    };
export {
    m as t
};