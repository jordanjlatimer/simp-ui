import { jsx as _jsx } from "@emotion/react/jsx-runtime";
const $tableCell = (override) => (Object.assign({ border: "2px solid black", padding: 10 }, override));
export const TableCell = ({ colspan, onClick, children, styles }) => (_jsx("td", Object.assign({ css: $tableCell(styles), colSpan: colspan, onClick: onClick ? () => onClick() : undefined }, { children: children }), void 0));
