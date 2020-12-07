import * as React from "react";
import "../styles/table.sass";
var Table = function (_a) {
    var headers = _a.headers, initData = _a.initData, keyField = _a.keyField, _b = _a.showKeyField, showKeyField = _b === void 0 ? false : _b;
    var _c = React.useState(""), activeRow = _c[0], setActiveRow = _c[1];
    var _d = React.useState(initData), data = _d[0], setData = _d[1];
    var _e = React.useState(""), sortHeader = _e[0], setSortHeader = _e[1];
    var _f = React.useState(true), sortAsc = _f[0], setSortAsc = _f[1];
    return (React.createElement("table", { className: "table" },
        React.createElement("thead", null,
            React.createElement("tr", null, headers.map(function (header) {
                return (React.createElement("th", { className: "table-header", key: header, onClick: function () {
                        if (sortHeader === header) {
                            if (sortAsc) {
                                var curArray = data;
                                curArray.sort(function (a, b) { return (a[header] > b[header] ? -1 : 1); });
                                setSortHeader(header);
                                setData(curArray);
                                setSortAsc(false);
                            }
                            else {
                                var curArray = data;
                                curArray.sort(function (a, b) { return (a[header] > b[header] ? 1 : -1); });
                                setSortHeader(header);
                                setData(curArray);
                                setSortAsc(true);
                            }
                        }
                        else {
                            var curArray = data;
                            curArray.sort(function (a, b) { return (a[header] > b[header] ? 1 : -1); });
                            setSortHeader(header);
                            setData(curArray);
                            setSortAsc(true);
                        }
                    } },
                    header,
                    sortHeader === header ? (sortAsc ? (React.createElement("svg", null,
                        React.createElement("rect", { width: "20", height: "20" }))) : (React.createElement("svg", null,
                        React.createElement("rect", { width: "20", height: "20" })))) : null));
            }))),
        React.createElement("tbody", null, data.map(function (row) {
            return (React.createElement("tr", { key: row[keyField], onClick: function () {
                    return activeRow === row[keyField]
                        ? setActiveRow("")
                        : setActiveRow(row[keyField]);
                }, className: "table-row" + (activeRow === row[keyField] ? " active" : "") }, Object.keys(row).map(function (key) {
                return showKeyField ? (React.createElement("td", { key: key, className: "table-cell" }, row[key])) : key === keyField ? null : (React.createElement("td", { key: key, className: "table-cell" }, row[key]));
            })));
        }))));
};
Table.displayName = "Table";
export { Table };
