import * as React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import "../../styles/table.sass";
const Table = ({ headers, initData, keyField, showKeyField = false, }) => {
    const [activeRow, setActiveRow] = React.useState("");
    const [data, setData] = React.useState(initData);
    const [sortHeader, setSortHeader] = React.useState("");
    const [sortAsc, setSortAsc] = React.useState(true);
    return (React.createElement("table", { className: "table" },
        React.createElement("thead", null,
            React.createElement("tr", null, headers.map((header) => {
                return (React.createElement("th", { className: "table-header", key: header, onClick: () => {
                        if (sortHeader === header) {
                            if (sortAsc) {
                                let curArray = data;
                                curArray.sort((a, b) => (a[header] > b[header] ? -1 : 1));
                                setSortHeader(header);
                                setData(curArray);
                                setSortAsc(false);
                            }
                            else {
                                let curArray = data;
                                curArray.sort((a, b) => (a[header] > b[header] ? 1 : -1));
                                setSortHeader(header);
                                setData(curArray);
                                setSortAsc(true);
                            }
                        }
                        else {
                            let curArray = data;
                            curArray.sort((a, b) => (a[header] > b[header] ? 1 : -1));
                            setSortHeader(header);
                            setData(curArray);
                            setSortAsc(true);
                        }
                    } },
                    header,
                    sortHeader === header ? (sortAsc ? (React.createElement(FaAngleDown, { className: "table-header-sorticon" })) : (React.createElement(FaAngleUp, { className: "table-header-sorticon" }))) : null));
            }))),
        React.createElement("tbody", null, data.map((row) => {
            return (React.createElement("tr", { key: row[keyField], onClick: () => activeRow === row[keyField]
                    ? setActiveRow("")
                    : setActiveRow(row[keyField]), className: "table-row" + (activeRow === row[keyField] ? " active" : "") }, Object.keys(row).map((key) => {
                return showKeyField ? (React.createElement("td", { key: key, className: "table-cell" }, row[key])) : key === keyField ? null : (React.createElement("td", { key: key, className: "table-cell" }, row[key]));
            })));
        }))));
};
Table.displayName = "Table";
export { Table };
