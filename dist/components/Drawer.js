import { jsx as _jsx } from "@emotion/react/jsx-runtime";
const $drawer = (open, override) => (Object.assign(Object.assign({ position: "fixed", transition: "all 200ms", zIndex: 2, backgroundColor: "white", top: 0, left: 0, height: "100%", transform: "translateX(-100%)" }, (open && {
    transform: "translateX(0%)",
    boxShadow: "10px 0px 10px 0px #00000080",
})), override));
export const Drawer = ({ open, children, styles }) => (_jsx("div", Object.assign({ css: $drawer(open, styles === null || styles === void 0 ? void 0 : styles(open)) }, { children: children }), void 0));
