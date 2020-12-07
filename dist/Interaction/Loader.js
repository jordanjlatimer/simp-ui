import * as React from "react";
import "../styles/loader.sass";
const Loader = ({ text = "Loading..." }) => {
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
