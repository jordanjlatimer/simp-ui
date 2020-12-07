import * as React from "react";
import "../styles/loader.sass";
var Loader = function (_a) {
    var _b = _a.text, text = _b === void 0 ? "Loading..." : _b;
    return (React.createElement("div", { className: "loader" },
        React.createElement("div", { className: "loader-container" },
            React.createElement("div", { className: "loader-container-text" }, text),
            React.createElement("div", { className: "loader-container-ball first" }),
            React.createElement("div", { className: "loader-container-ball second" }),
            React.createElement("div", { className: "loader-container-ball third" }),
            React.createElement("div", { className: "loader-container-ball fourth" }),
            React.createElement("div", { className: "loader-container-ball fifth" }),
            React.createElement("div", { className: "loader-container-ball sixth" }),
            React.createElement("div", { className: "loader-container-ball seventh" }),
            React.createElement("div", { className: "loader-container-ball eighth" }))));
};
Loader.displayName = "Loader";
export { Loader };
