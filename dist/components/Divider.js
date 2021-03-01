import { jsx as _jsx } from "@emotion/react/jsx-runtime";
const $divider = (override) => (Object.assign({ height: 2, border: 0, margin: "16px 0px" }, override));
export const Divider = ({ styles }) => _jsx("hr", { css: $divider(styles) }, void 0);
