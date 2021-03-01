import { jsx as _jsx } from "@emotion/react/jsx-runtime";
export const Border = ({ graphHeight, graphWidth, color, width }) => {
    const createPath = () => {
        let d = "M" + width / 2 + " " + width / 2 + " h" + Math.abs(graphWidth - width);
        d += " v" + Math.abs(graphHeight - width);
        d += " h-" + Math.abs(graphWidth - width);
        d += " v-" + Math.abs(graphHeight - width / 2);
        return d;
    };
    return _jsx("path", { fill: "transparent", stroke: color, strokeWidth: width, d: createPath() }, void 0);
};
