"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RangeInput = void 0;
var React = require("react");
require("../../styles/range-input.sass");
var RangeInput = function (_a) {
    var _b = _a.initial, initial = _b === void 0 ? 0 : _b, label = _a.label, _c = _a.prefix, prefix = _c === void 0 ? "" : _c, _d = _a.suffix, suffix = _d === void 0 ? "" : _d, min = _a.min, max = _a.max, _e = _a.step, step = _e === void 0 ? 1 : _e;
    var _f = React.useState(initial), value = _f[0], setValue = _f[1];
    return (React.createElement("div", { className: "range-input" },
        React.createElement("p", { className: "range-input-label" }, label),
        React.createElement("p", { className: "range-input-value" }, prefix + value + suffix),
        React.createElement("input", { className: "range-input-slider", type: "range", min: min, max: max, step: step, value: value, onChange: function (e) {
                var target = e.target;
                if (target) {
                    setValue(parseInt(target.value));
                }
            } })));
};
exports.RangeInput = RangeInput;
RangeInput.displayName = "RangeInput";
//# sourceMappingURL=RangeInput.js.map