import { jsx as _jsx } from "@emotion/react/jsx-runtime";
import { keyframes } from "@emotion/react";
const $wrapper = (override) => (Object.assign({ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", height: "100%" }, override));
const $animation = keyframes({
    "0%": {
        transform: "scale(0.5, 0.5)",
    },
    "50%": {
        transform: "scale(1.5, 1.5)",
    },
    "100%": {
        transform: "scale(0.5, 0.5)",
    },
});
const $circle = (delayLevel, override) => (Object.assign({ backgroundColor: "black", opacity: 0.1 * delayLevel, animation: `${$animation} 1000ms ease-in-out ${delayLevel * 200}ms infinite`, height: "100%", width: "100%" }, override));
export const Loader = ({ styles }) => {
    return (_jsx("div", Object.assign({ css: $wrapper(styles === null || styles === void 0 ? void 0 : styles.wrapper) }, { children: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(value => (_jsx("div", { css: $circle(value, styles === null || styles === void 0 ? void 0 : styles.circle) }, void 0))) }), void 0));
};
