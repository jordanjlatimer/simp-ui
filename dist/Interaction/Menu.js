import * as React from "react";
import { RiMenuFill } from "@meronex/icons/ri";
import "../styles/menu.sass";
const Menu = ({ children, inverted = false, hideable = false, startOpen = true }) => {
    const [open, setOpen] = React.useState(startOpen);
    return (React.createElement("div", { className: "menu" + (open ? " open" : "") + (inverted ? " inverted" : "") },
        hideable ?
            React.createElement("div", { className: "menu-toggle" + (open ? " open" : "") + (inverted ? " inverted" : ""), onClick: () => setOpen(!open) },
                React.createElement(RiMenuFill, { className: "menu-close-icon" + (inverted ? " inverted" : "") }))
            : null,
        children));
};
Menu.displayName = "Menu";
export { Menu };
