import { jsx as _jsx } from "@emotion/react/jsx-runtime";
const $table = (override) => (Object.assign({ border: "4px solid black" }, override));
export const Table = ({ styles, children }) => _jsx("table", Object.assign({ css: $table(styles) }, { children: children }), void 0);
